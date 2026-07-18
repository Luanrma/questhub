import assert from 'node:assert/strict'
import test from 'node:test'
import { appendMovementPoint, positionAlongMovementPath, truncatePathAtPoint } from '../src/vtt/table/domain/tokenMovement'
import { isMovementBlockedBySceneWalls } from '../src/vtt/table/domain/wallGeometry'
import type { VttWallSegment } from '../src/vtt/table/domain/types'

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
