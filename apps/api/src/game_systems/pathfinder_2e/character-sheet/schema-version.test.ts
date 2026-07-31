import assert from 'node:assert/strict'
import test from 'node:test'
import { migratePathfinder2eCharacterSheet } from './adapter'
import { createDefaultPathfinder2eCharacterSheet } from './defaults'
import { pathfinder2eCharacterSheetSchema } from './schema'

test('default Pathfinder sheet uses V3 defense lists', () => {
  const data = createDefaultPathfinder2eCharacterSheet()

  assert.equal(data.schemaVersion, 3)
  assert.deepEqual(data.defenses, {
    resistances: [],
    weaknesses: [],
    immunities: [],
  })
})

test('Pathfinder V2 migration preserves data and adds empty defense lists', () => {
  const current = createDefaultPathfinder2eCharacterSheet()
  current.hitPoints.current = 17
  const { defenses: _defenses, ...legacyData } = current

  const migrated = pathfinder2eCharacterSheetSchema.parse(
    migratePathfinder2eCharacterSheet({ ...legacyData, schemaVersion: 2 }),
  )

  assert.equal(migrated.schemaVersion, 3)
  assert.equal(migrated.hitPoints.current, 17)
  assert.deepEqual(migrated.defenses, {
    resistances: [],
    weaknesses: [],
    immunities: [],
  })
})

test('Pathfinder V3 validates normalized defense entries', () => {
  const data = createDefaultPathfinder2eCharacterSheet()
  data.defenses.resistances = ['  Fogo 5  ']

  const parsed = pathfinder2eCharacterSheetSchema.parse(data)

  assert.deepEqual(parsed.defenses.resistances, ['Fogo 5'])
  assert.equal(pathfinder2eCharacterSheetSchema.safeParse({
    ...data,
    defenses: { ...data.defenses, immunities: [''] },
  }).success, false)
})
