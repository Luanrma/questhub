import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isMovementBlockedBySceneWalls, isMovementPathBlockedBySceneWalls } from './wall-geometry'

test('scene wall blocks token movement crossing its segment', () => {
  assert.equal(isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 2, y: 0 }, end: { x: 2, y: 2 }, playerVisible: false }],
  }), true)
})

test('open scene door does not block token movement', () => {
  assert.equal(isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [{
      id: 'door-1', kind: 'door', start: { x: 2, y: 0 }, end: { x: 2, y: 2 },
      playerVisible: false,
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
      door: { open: false, locked: false, blocked: false, ajar: true },
    }],
  }), true)
})

test('scene wall blocks movement when an intermediate route segment crosses it', () => {
  assert.equal(isMovementPathBlockedBySceneWalls({
    points: [{ x: 1, y: 1 }, { x: 3, y: 1 }, { x: 1, y: 1.5 }],
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 2, y: 0 }, end: { x: 2, y: 2 }, playerVisible: false }],
  }), true)
})
