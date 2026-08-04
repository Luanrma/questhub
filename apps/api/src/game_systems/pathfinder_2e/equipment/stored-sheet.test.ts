import assert from 'node:assert/strict'
import test from 'node:test'
import { createDefaultPathfinder2eCharacterSheet } from '../character-sheet/defaults'
import { resolvePathfinder2eStoredEquipmentSheet } from './stored-sheet'

test('equipment resolves a persisted Pathfinder V2 sheet through the normal migration', () => {
  const current = createDefaultPathfinder2eCharacterSheet()
  current.hitPoints.current = 14

  const legacy = JSON.parse(JSON.stringify(current)) as Record<string, unknown>
  legacy.schemaVersion = 2
  delete legacy.defenses

  const resolved = resolvePathfinder2eStoredEquipmentSheet(legacy)

  assert.ok(resolved)
  assert.equal(resolved.schemaVersion, 3)
  assert.equal(resolved.hitPoints.current, 14)
  assert.deepEqual(resolved.defenses, {
    resistances: [],
    weaknesses: [],
    immunities: [],
  })
})

test('equipment rejects missing or irreparably invalid Pathfinder sheet data', () => {
  assert.equal(resolvePathfinder2eStoredEquipmentSheet(undefined), null)
  assert.equal(resolvePathfinder2eStoredEquipmentSheet({ schemaVersion: 999 }), null)
})
