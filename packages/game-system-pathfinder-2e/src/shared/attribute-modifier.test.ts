import assert from 'node:assert/strict'
import test from 'node:test'
import { getPathfinder2eAttributeModifier, isPathfinder2eAttributeAbbreviation, PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION } from './attribute-modifier'

test('getPathfinder2eAttributeModifier: standard PF2e scores', () => {
  assert.equal(getPathfinder2eAttributeModifier(10), 0)
  assert.equal(getPathfinder2eAttributeModifier(11), 0)
  assert.equal(getPathfinder2eAttributeModifier(18), 4)
  assert.equal(getPathfinder2eAttributeModifier(8), -1)
  assert.equal(getPathfinder2eAttributeModifier(7), -2)
})

test('PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION: maps every Foundry abbreviation', () => {
  assert.equal(PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION.str, 'strength')
  assert.equal(PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION.dex, 'dexterity')
  assert.equal(PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION.con, 'constitution')
  assert.equal(PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION.int, 'intelligence')
  assert.equal(PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION.wis, 'wisdom')
  assert.equal(PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION.cha, 'charisma')
})

test('isPathfinder2eAttributeAbbreviation: narrows valid values, rejects unknown ones', () => {
  assert.equal(isPathfinder2eAttributeAbbreviation('wis'), true)
  assert.equal(isPathfinder2eAttributeAbbreviation('spell'), false)
  assert.equal(isPathfinder2eAttributeAbbreviation(''), false)
})
