import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isMovementBlockedBySceneWalls, isMovementPathBlockedBySceneWalls } from './wall-geometry'

test('scene wall blocks token movement crossing its segment', () => {
  const blocked = isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 2, y: 0 }, end: { x: 2, y: 2 } }],
  })

  assert.equal(blocked, true)
})

test('open scene door does not block token movement', () => {
  const blocked = isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [
      {
        id: 'door-1',
        kind: 'door',
        start: { x: 2, y: 0 },
        end: { x: 2, y: 2 },
        door: { open: true, locked: false, blocked: false, ajar: false },
      },
    ],
  })

  assert.equal(blocked, false)
})

test('closed scene door blocks token movement', () => {
  const blocked = isMovementBlockedBySceneWalls({
    from: { x: 1, y: 1 },
    to: { x: 3, y: 1 },
    walls: [
      {
        id: 'door-1',
        kind: 'door',
        start: { x: 2, y: 0 },
        end: { x: 2, y: 2 },
        door: { open: false, locked: false, blocked: false, ajar: true },
      },
    ],
  })

  assert.equal(blocked, true)
})

test('scene wall blocks measured movement when an intermediate route segment crosses it', () => {
  const blocked = isMovementPathBlockedBySceneWalls({
    points: [
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 1, y: 1.5 },
    ],
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 2, y: 0 }, end: { x: 2, y: 2 } }],
  })

  assert.equal(blocked, true)
})
