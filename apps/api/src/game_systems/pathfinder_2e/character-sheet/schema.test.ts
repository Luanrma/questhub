import assert from 'node:assert/strict'
import test from 'node:test'
import { createDefaultPathfinder2eManualCharacterSheet } from './defaults'
import {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_BACKGROUNDS,
  PATHFINDER_2E_CLASSES,
  PATHFINDER_2E_DEITIES,
  PATHFINDER_2E_HERITAGES,
} from './options'
import { pathfinder2eManualCharacterSheetSchema } from './schema'

test('default manual PF2e sheet validates', () => {
  const sheet = createDefaultPathfinder2eManualCharacterSheet()
  assert.equal(pathfinder2eManualCharacterSheetSchema.safeParse(sheet).success, true)
})

test('all displayed mechanical totals remain manually editable', () => {
  const sheet = createDefaultPathfinder2eManualCharacterSheet()
  sheet.attributes.strength = 4
  sheet.hitPoints.maximum = 48
  sheet.hitPoints.current = 31
  sheet.hitPoints.bonus = 7
  sheet.armorClass = 22
  sheet.initiative = 11
  sheet.perception = { rank: 4, value: 13 }
  sheet.savingThrows.fortitude = { rank: 2, value: 10 }
  sheet.skills.athletics = { rank: 6, value: 18 }

  const parsed = pathfinder2eManualCharacterSheetSchema.safeParse(sheet)
  assert.equal(parsed.success, true)
  if (!parsed.success) return
  assert.equal(parsed.data.hitPoints.maximum, 48)
  assert.equal(parsed.data.armorClass, 22)
  assert.equal(parsed.data.skills.athletics.value, 18)
})

test('identity fields accept only blank or catalog names', () => {
  const sheet = createDefaultPathfinder2eManualCharacterSheet()
  sheet.identity.ancestry = PATHFINDER_2E_ANCESTRIES[0] ?? ''
  sheet.identity.heritage = PATHFINDER_2E_HERITAGES[0] ?? ''
  sheet.identity.background = PATHFINDER_2E_BACKGROUNDS[0] ?? ''
  sheet.identity.class = PATHFINDER_2E_CLASSES[0] ?? ''
  sheet.identity.deity = PATHFINDER_2E_DEITIES[0] ?? ''
  assert.equal(pathfinder2eManualCharacterSheetSchema.safeParse(sheet).success, true)

  sheet.identity.ancestry = 'Valor que nao existe no catalogo'
  assert.equal(pathfinder2eManualCharacterSheetSchema.safeParse(sheet).success, false)
})

test('each PF2e select catalog is populated independently', () => {
  assert.ok(PATHFINDER_2E_ANCESTRIES.length > 0)
  assert.ok(PATHFINDER_2E_HERITAGES.length > 0)
  assert.ok(PATHFINDER_2E_BACKGROUNDS.length > 0)
  assert.ok(PATHFINDER_2E_CLASSES.length > 0)
  assert.ok(PATHFINDER_2E_DEITIES.length > 0)
})
