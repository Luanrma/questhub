import assert from 'node:assert/strict'
import test from 'node:test'
import {
  addEncounterTokenId,
  reconcileEncounterTokenIds,
  removeEncounterTokenId,
  resolveEncounterTokens,
} from '../src/vtt/table/domain/encounterSelection'
import type { VttPlayerToken } from '../src/vtt/table/domain/types'

function token(id: string, hidden = false): VttPlayerToken {
  return {
    id,
    actorId: null,
    name: id,
    avatarUrl: null,
    color: null,
    size: 1,
    ownerUserId: null,
    ownerName: null,
    controllerMemberId: null,
    controllerUserId: null,
    role: 'GENERIC',
    canCustomizeAppearance: false,
    hidden,
    rotation: 0,
    layer: 'TOKEN',
    visionConfig: null,
    lightConfig: null,
    blocksVisionAndLight: false,
    position: { x: 0, y: 0 },
  }
}

test('encounter selection adds tokens once and preserves insertion order', () => {
  const selected = addEncounterTokenId([], 'token-1')
  const duplicate = addEncounterTokenId(selected, 'token-1')

  assert.deepEqual(selected, ['token-1'])
  assert.equal(duplicate, selected)
  assert.deepEqual(addEncounterTokenId(selected, 'token-2'), ['token-1', 'token-2'])
})

test('encounter selection removes a selected token without mutating absent selections', () => {
  const selected = ['token-1', 'token-2']

  assert.deepEqual(removeEncounterTokenId(selected, 'token-1'), ['token-2'])
  assert.equal(removeEncounterTokenId(selected, 'missing'), selected)
})

test('encounter selection resolves only visible tokens still present in the scene', () => {
  const sceneTokens = [token('visible'), token('hidden', true)]

  assert.deepEqual(
    resolveEncounterTokens(['missing', 'hidden', 'visible'], sceneTokens).map((item) => item.id),
    ['visible'],
  )
  assert.deepEqual(reconcileEncounterTokenIds(['missing', 'hidden', 'visible'], sceneTokens), ['visible'])
})
