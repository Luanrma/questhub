import assert from 'node:assert/strict'
import test from 'node:test'
import { selectPlayerVisibleSceneId } from './scene-visibility'

test('player without a controlled placed token has no visible scene', () => {
  const sceneId = selectPlayerVisibleSceneId(
    [{ id: 'master-token', characterId: null, controllerUserId: null }],
    new Map([['master-token', 'master-scene']]),
    'player-1',
    'character-1',
  )
  assert.equal(sceneId, null)
})

test('generic controlled token grants access to its scene', () => {
  const sceneId = selectPlayerVisibleSceneId(
    [{ id: 'generic-token', characterId: null, controllerUserId: 'player-1' }],
    new Map([['generic-token', 'scene-1']]),
    'player-1',
    'character-1',
  )
  assert.equal(sceneId, 'scene-1')
})

test('main character token takes precedence over other controlled tokens', () => {
  const sceneId = selectPlayerVisibleSceneId(
    [
      { id: 'secondary-token', characterId: null, controllerUserId: 'player-1' },
      { id: 'main-token', characterId: 'character-1', controllerUserId: 'player-1' },
    ],
    new Map([['secondary-token', 'scene-2'], ['main-token', 'scene-1']]),
    'player-1',
    'character-1',
  )
  assert.equal(sceneId, 'scene-1')
})
