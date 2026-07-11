import test from 'node:test'
import assert from 'node:assert/strict'
import { PROFICIENCY_RANKS } from './constants'
import { defaultPathfinder2eSheet } from './default-sheet'
import { defaultPathfinder2eArmorProficiencies, migratePathfinder2eArmorClassToV3 } from './armor-class-migration'
import type { Pathfinder2eSheetV2LegacyArmorClass } from './models'

function legacySheetFixture(armorClass: number): Pathfinder2eSheetV2LegacyArmorClass {
  const { armorClass: _current, armorProficiencies: _proficiencies, ...rest } = defaultPathfinder2eSheet
  return { ...rest, armorClass }
}

test('migratePathfinder2eArmorClassToV3 discards the legacy number and applies defaults', () => {
  const migrated = migratePathfinder2eArmorClassToV3(legacySheetFixture(18))

  assert.deepEqual(migrated.armorClass, { manualAdjustment: 0 })
  assert.deepEqual(migrated.armorProficiencies, defaultPathfinder2eArmorProficiencies())
})

test('migratePathfinder2eArmorClassToV3 preserves every other field untouched', () => {
  const legacy = legacySheetFixture(14)
  const migrated = migratePathfinder2eArmorClassToV3(legacy)

  assert.deepEqual(migrated.attributes, legacy.attributes)
  assert.deepEqual(migrated.hitPoints, legacy.hitPoints)
  assert.deepEqual(migrated.skills, legacy.skills)
  assert.deepEqual(migrated.identity, legacy.identity)
  assert.deepEqual(migrated.buildChoices, legacy.buildChoices)
})

test('defaultPathfinder2eArmorProficiencies defaults to trained unarmored only', () => {
  const defaults = defaultPathfinder2eArmorProficiencies()

  assert.equal(defaults.unarmored, PROFICIENCY_RANKS.TRAINED)
  assert.equal(defaults.light, PROFICIENCY_RANKS.UNTRAINED)
  assert.equal(defaults.medium, PROFICIENCY_RANKS.UNTRAINED)
  assert.equal(defaults.heavy, PROFICIENCY_RANKS.UNTRAINED)
})
