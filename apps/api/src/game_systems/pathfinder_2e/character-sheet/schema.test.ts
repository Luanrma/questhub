import assert from 'node:assert/strict'
import test from 'node:test'
import { gameSystemRuntime } from '../../runtime/game-system-runtime'
import {
  migratePathfinder2eCharacterSheet,
  pathfinder2eCharacterSheetRuntimeAdapter,
} from './adapter'
import { createDefaultPathfinder2eCharacterSheet } from './defaults'
import { calculatePathfinder2eProficiencyBonus } from './derivation'
import {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_BACKGROUNDS,
  PATHFINDER_2E_CLASSES,
  PATHFINDER_2E_DEITIES,
  PATHFINDER_2E_HERITAGES,
} from './options'
import { pathfinder2eCharacterSheetSchema } from './schema'

test('default PF2e sheet validates and resolves through the runtime', () => {
  const resolved = gameSystemRuntime.resolveCharacterSheet(pathfinder2eCharacterSheetRuntimeAdapter)
  assert.equal(pathfinder2eCharacterSheetSchema.safeParse(resolved.data).success, true)
  assert.equal(resolved.schemaVersion, 2)
  assert.equal(resolved.derived.armorClass.value, 10)
})

test('proficiency adds level only when trained or better', () => {
  assert.equal(calculatePathfinder2eProficiencyBonus(7, 0), 0)
  assert.equal(calculatePathfinder2eProficiencyBonus(7, 2), 9)
  assert.equal(calculatePathfinder2eProficiencyBonus(7, 4), 11)
  assert.equal(calculatePathfinder2eProficiencyBonus(7, 6), 13)
  assert.equal(calculatePathfinder2eProficiencyBonus(7, 8), 15)
})

test('Human Fighter derives HP, unarmored AC, saves and skills from level', () => {
  const sheet = createDefaultPathfinder2eCharacterSheet()
  sheet.identity.level = 5
  sheet.identity.ancestry = 'Human'
  sheet.identity.class = 'Fighter'
  sheet.attributes.strength = 4
  sheet.attributes.dexterity = 3
  sheet.attributes.constitution = 2
  sheet.attributes.wisdom = 1
  sheet.hitPoints.bonus = 5
  sheet.armorProficiencies.unarmored = 2
  sheet.perception = { rank: 2, bonus: 1 }
  sheet.savingThrows.fortitude = { rank: 4, bonus: 0 }
  sheet.skills.athletics = { rank: 2, bonus: 2 }

  const resolved = gameSystemRuntime.resolveCharacterSheet(pathfinder2eCharacterSheetRuntimeAdapter, sheet)

  assert.equal(resolved.derived.mechanics.ancestryHitPoints, 8)
  assert.equal(resolved.derived.mechanics.classHitPointsPerLevel, 10)
  assert.equal(resolved.derived.hitPoints.maximum, 73)
  assert.equal(resolved.derived.armorClass.value, 20)
  assert.equal(resolved.derived.perception.value, 9)
  assert.equal(resolved.derived.initiative.value, 9)
  assert.equal(resolved.derived.savingThrows.fortitude.value, 11)
  assert.equal(resolved.derived.skills.athletics.value, 13)
})

test('V1 manual totals migrate without inventing hidden bonuses', () => {
  const migrated = migratePathfinder2eCharacterSheet({
    schemaVersion: 1,
    identity: {
      level: 3,
      ancestry: 'Dwarf',
      heritage: '',
      background: '',
      class: 'Cleric',
      deity: '',
    },
    attributes: { strength: 1, dexterity: 2, constitution: 3, intelligence: 0, wisdom: 4, charisma: 0 },
    hitPoints: { maximum: 50, current: 31, temporary: 2, wounded: 1, dying: 0, doomed: 0, bonus: 4 },
    armorClass: 22,
    initiative: 11,
    perception: { rank: 4, value: 13 },
    savingThrows: { fortitude: { rank: 2, value: 10 } },
    skills: { medicine: { rank: 2, value: 9 } },
    armorProficiencies: { unarmored: 2, light: 0, medium: 0, heavy: 0 },
    notes: 'Ficha anterior',
  })

  const parsed = pathfinder2eCharacterSheetSchema.parse(migrated)
  assert.equal(parsed.schemaVersion, 2)
  assert.equal(parsed.hitPoints.current, 31)
  assert.equal(parsed.hitPoints.bonus, 4)
  assert.deepEqual(parsed.armorClass, { bonus: 0 })
  assert.deepEqual(parsed.perception, { rank: 4, bonus: 0 })
  assert.equal(parsed.notes, 'Ficha anterior')
})

test('identity fields accept only blank or catalog names', () => {
  const sheet = createDefaultPathfinder2eCharacterSheet()
  sheet.identity.ancestry = PATHFINDER_2E_ANCESTRIES[0] ?? ''
  sheet.identity.heritage = PATHFINDER_2E_HERITAGES[0] ?? ''
  sheet.identity.background = PATHFINDER_2E_BACKGROUNDS[0] ?? ''
  sheet.identity.class = PATHFINDER_2E_CLASSES[0] ?? ''
  sheet.identity.deity = PATHFINDER_2E_DEITIES[0] ?? ''
  assert.equal(pathfinder2eCharacterSheetSchema.safeParse(sheet).success, true)

  sheet.identity.ancestry = 'Valor que nao existe no catalogo'
  assert.equal(pathfinder2eCharacterSheetSchema.safeParse(sheet).success, false)
})

test('each PF2e select catalog is populated independently', () => {
  assert.ok(PATHFINDER_2E_ANCESTRIES.length > 0)
  assert.ok(PATHFINDER_2E_HERITAGES.length > 0)
  assert.ok(PATHFINDER_2E_BACKGROUNDS.length > 0)
  assert.ok(PATHFINDER_2E_CLASSES.length > 0)
  assert.ok(PATHFINDER_2E_DEITIES.length > 0)
})
