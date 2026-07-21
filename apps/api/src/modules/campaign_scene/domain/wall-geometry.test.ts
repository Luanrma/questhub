import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isMovementBlockedBySceneWalls, isMovementPathBlockedBySceneWalls, isWallBlockingLight, isWallBlockingVision } from './wall-geometry'

test('scene wall blocks token movement crossing its segment', () => {
  assert.equal(isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 2, y: 0 }, end: { x: 2, y: 2 }, playerVisible: false, blocksEffects: true }],
  }), true)
})

test('open scene door does not block token movement', () => {
  assert.equal(isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [{
      id: 'door-1', kind: 'door', start: { x: 2, y: 0 }, end: { x: 2, y: 2 },
      playerVisible: false,
      blocksEffects: true,
      door: { open: true, locked: false, blocked: false, ajar: false },
    }],
  }), false)
})

test('closed scene door blocks token movement', () => {
  assert.equal(isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [{
      id: 'door-1', kind: 'door', start: { x: 2, y: 0 }, end: { x: 2, y: 2 },
      playerVisible: false,
      blocksEffects: true,
      door: { open: false, locked: false, blocked: false, ajar: true },
    }],
  }), true)
})

test('scene wall blocks movement when an intermediate route segment crosses it', () => {
  assert.equal(isMovementPathBlockedBySceneWalls({
    points: [{ x: 1, y: 1 }, { x: 3, y: 1 }, { x: 1, y: 1.5 }],
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 2, y: 0 }, end: { x: 2, y: 2 }, playerVisible: false, blocksEffects: true }],
  }), true)
})

test('closed window allows vision and light but blocks movement by default', () => {
  const window = {
    id: 'window-1', kind: 'window' as const, start: { x: 2, y: 0 }, end: { x: 2, y: 2 },
    playerVisible: true, blocksEffects: true, allowsLight: true,
    window: { open: false, locked: false, blocked: false, ajar: false },
  }
  assert.equal(isWallBlockingVision(window), false)
  assert.equal(isWallBlockingLight(window), false)
  assert.equal(isMovementBlockedBySceneWalls({ from: { x: 1, y: 1 }, to: { x: 3, y: 1 }, walls: [window] }), true)
})

test('wall can block vision while allowing light', () => {
  const wall = { id: 'wall-1', kind: 'wall' as const, start: { x: 2, y: 0 }, end: { x: 2, y: 2 }, playerVisible: false, blocksEffects: true, allowsLight: true }
  assert.equal(isWallBlockingVision(wall), true)
  assert.equal(isWallBlockingLight(wall), false)
})
