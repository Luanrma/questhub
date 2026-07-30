import assert from 'node:assert/strict'
import test from 'node:test'
import { isPointInsideRenderedToken } from '../src/vtt/table/domain/boardMath'
import { appendMovementPoint, positionAlongMovementPath, truncatePathAtPoint } from '../src/vtt/table/domain/tokenMovement'
import { applyDoorToWalls, isMovementBlockedBySceneWalls, visibleWallSegmentsForRole } from '../src/vtt/table/domain/wallGeometry'
import type { VttPlayerToken, VttWallSegment } from '../src/vtt/table/domain/types'

test('smooth movement follows breakpoints proportionally to segment length', () => {
  const path = [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 2 }]
  assert.deepEqual(positionAlongMovementPath(path, 0.25), { x: 1, y: 0 })
  assert.deepEqual(positionAlongMovementPath(path, 0.75), { x: 2, y: 1 })
})

test('clicking an earlier intersection removes every following point', () => {
  const path = [{ x: 0.5, y: 0.5 }, { x: 2.5, y: 0.5 }, { x: 2.5, y: 3.5 }]
  assert.deepEqual(truncatePathAtPoint(path, { x: 2.5, y: 0.5 }), path.slice(0, 2))
})

test('simple click appends a waypoint without requiring a modifier or drag', () => {
  const path = [{ x: 0.5, y: 0.5 }, { x: 2.5, y: 0.5 }]
  assert.deepEqual(appendMovementPoint(path, { x: 4.5, y: 2.5 }), [...path, { x: 4.5, y: 2.5 }])
  assert.equal(appendMovementPoint(path, path[1]), path)
})

test('measured movement recognizes a Ctrl click on the rendered Token at its current size and offset', () => {
  const token = {
    id: 'token-1',
    position: { x: 4.5, y: 3.5 },
    size: 2,
  } as VttPlayerToken

  assert.equal(isPointInsideRenderedToken({ x: 250, y: 200 }, token, 50, { x: 25, y: 25 }), true)
  assert.equal(isPointInsideRenderedToken({ x: 199, y: 149 }, token, 50, { x: 25, y: 25 }), false)
})

test('a waypoint segment is rejected when it crosses a closed wall', () => {
  const wall: VttWallSegment = {
    id: 'wall-1',
    kind: 'wall',
    start: { x: 10, y: 0 },
    end: { x: 10, y: 20 },
    playerVisible: true,
    blocksEffects: true,
  }
  assert.equal(isMovementBlockedBySceneWalls({
    from: { x: 0, y: 10 },
    to: { x: 20, y: 10 },
    walls: [wall],
  }), true)
})

test('players only receive visible wall, door and window markings', () => {
  const passage = { open: false, locked: false, blocked: false, ajar: false }
  const walls: VttWallSegment[] = [
    { id: 'wall', kind: 'wall', start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, playerVisible: false, blocksEffects: true },
    { id: 'door', kind: 'door', start: { x: 1, y: 0 }, end: { x: 2, y: 0 }, playerVisible: false, blocksEffects: true, door: passage },
    { id: 'window', kind: 'window', start: { x: 2, y: 0 }, end: { x: 3, y: 0 }, playerVisible: true, blocksEffects: true, window: passage },
  ]

  assert.deepEqual(visibleWallSegmentsForRole(walls, false).map((wall) => wall.id), ['window'])
  assert.equal(visibleWallSegmentsForRole(walls, true).length, 3)
})

test('a door near a wall snaps onto it and replaces the blocking slice', () => {
  const wall: VttWallSegment = {
    id: 'wall-1',
    kind: 'wall',
    start: { x: 10, y: 0 },
    end: { x: 10, y: 30 },
    playerVisible: true,
    blocksEffects: true,
  }
  const door: VttWallSegment = {
    id: 'door-1',
    kind: 'door',
    start: { x: 15, y: 10 },
    end: { x: 14, y: 20 },
    playerVisible: true,
    blocksEffects: true,
    door: { open: true, locked: false, blocked: false, ajar: false },
  }

  const walls = applyDoorToWalls({ walls: [wall], door, createId: () => 'wall-slice', snapTolerance: 6 })
  assert.deepEqual(walls.find((segment) => segment.kind === 'door'), {
    ...door,
    start: { x: 10, y: 10 },
    end: { x: 10, y: 20 },
  })
  assert.equal(isMovementBlockedBySceneWalls({ from: { x: 0, y: 15 }, to: { x: 20, y: 15 }, walls }), false)
})

test('a closed snapped door keeps blocking the replaced wall slice', () => {
  const door: VttWallSegment = {
    id: 'door-1', kind: 'door', start: { x: 14, y: 10 }, end: { x: 15, y: 20 },
    playerVisible: true, blocksEffects: true,
    door: { open: false, locked: false, blocked: false, ajar: false },
  }
  const walls = applyDoorToWalls({
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 10, y: 0 }, end: { x: 10, y: 30 }, playerVisible: true, blocksEffects: true }],
    door,
    createId: () => 'wall-slice',
    snapTolerance: 6,
  })

  assert.equal(isMovementBlockedBySceneWalls({ from: { x: 0, y: 15 }, to: { x: 20, y: 15 }, walls }), true)
})

test('a door is not created unless both ends are near the same wall', () => {
  const walls: VttWallSegment[] = [
    { id: 'wall-1', kind: 'wall', start: { x: 10, y: 0 }, end: { x: 10, y: 30 }, playerVisible: true, blocksEffects: true },
    { id: 'wall-2', kind: 'wall', start: { x: 30, y: 0 }, end: { x: 30, y: 30 }, playerVisible: true, blocksEffects: true },
  ]
  const door: VttWallSegment = {
    id: 'door-1', kind: 'door', start: { x: 11, y: 10 }, end: { x: 29, y: 20 },
    playerVisible: true, blocksEffects: true,
    door: { open: true, locked: false, blocked: false, ajar: false },
  }

  assert.equal(applyDoorToWalls({ walls, door, createId: () => 'unused', snapTolerance: 3 }), walls)
})
