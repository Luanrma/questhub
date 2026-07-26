import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getGameSystemCharacterSheetManagerProvider,
  registerGameSystemCharacterSheetManagerProvider,
  type GameSystemCharacterSheetManagerProvider,
} from './character-sheets'

const provider: GameSystemCharacterSheetManagerProvider = {
  list: async () => [],
}

test('character sheet manager provider is registered by game system', () => {
  const current = getGameSystemCharacterSheetManagerProvider('PATHFINDER_2E')
  if (!current) {
    registerGameSystemCharacterSheetManagerProvider('PATHFINDER_2E', provider)
  }

  assert.ok(getGameSystemCharacterSheetManagerProvider('PATHFINDER_2E'))
})

test('character sheet manager provider cannot be replaced silently', () => {
  const current = getGameSystemCharacterSheetManagerProvider('PATHFINDER_2E')
  if (!current) {
    registerGameSystemCharacterSheetManagerProvider('PATHFINDER_2E', provider)
  }

  assert.throws(
    () => registerGameSystemCharacterSheetManagerProvider('PATHFINDER_2E', provider),
    /already registered/,
  )
})
