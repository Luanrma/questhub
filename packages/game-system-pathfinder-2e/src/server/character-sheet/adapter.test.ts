import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eSheetAdapter } from './adapter'
import { PATHFINDER_2E_DATA_KEY, PATHFINDER_2E_LEGACY_SHEET_VERSION, PATHFINDER_2E_SHEET_VERSION, PATHFINDER_2E_SHEET_VERSION_LEGACY_ARMOR_CLASS } from './constants'
import { defaultPathfinder2eSheet } from './default-sheet'

test('pathfinder2eSheetAdapter.health.read maps hitPoints to the generic shape', () => {
  const sheet = {
    ...defaultPathfinder2eSheet,
    hitPoints: { ...defaultPathfinder2eSheet.hitPoints, current: 12, maximum: 30, temporary: 5 },
  }

  const health = pathfinder2eSheetAdapter.health?.read(sheet)

  assert.deepEqual(health, { current: 12, max: 30, temporary: 5 })
})

test('pathfinder2eSheetAdapter.health.write updates only the hit points fields', () => {
  const sheet = {
    ...defaultPathfinder2eSheet,
    hitPoints: { ...defaultPathfinder2eSheet.hitPoints, current: 12, maximum: 30, temporary: 5, wounded: 1, dying: 0, doomed: 0 },
    notes: 'ficha do jogador',
  }

  const next = pathfinder2eSheetAdapter.health?.write(sheet, { current: 4, max: 30, temporary: 0 })

  assert.deepEqual(next?.hitPoints, { current: 4, maximum: 30, temporary: 0, wounded: 1, dying: 0, doomed: 0 })
  assert.equal(next?.notes, 'ficha do jogador')
})

test('pathfinder2eSheetAdapter.movement.read maps movementMeters to the generic shape', () => {
  const sheet = {
    ...defaultPathfinder2eSheet,
    general: { ...defaultPathfinder2eSheet.general, movementMeters: 7.5 },
  }

  const movement = pathfinder2eSheetAdapter.movement?.read(sheet)

  assert.deepEqual(movement, { meters: 7.5 })
})

test('migrateEnvelopeForWrite migrates a V1 legacy envelope straight to V3 (identity + armor class)', () => {
  const { armorClass: _current, armorProficiencies: _proficiencies, buildChoices: _buildChoices, ...rest } =
    defaultPathfinder2eSheet
  const legacyV1Sheet = {
    ...rest,
    armorClass: 18,
    identity: {
      level: 1,
      ancestry: 'Elf',
      heritage: '',
      background: '',
      className: '',
    },
  }

  const migrated = pathfinder2eSheetAdapter.migrateEnvelopeForWrite?.({
    system: 'PATHFINDER_2E',
    version: PATHFINDER_2E_LEGACY_SHEET_VERSION,
    data: { [PATHFINDER_2E_DATA_KEY]: legacyV1Sheet },
  })

  assert.equal(migrated?.version, PATHFINDER_2E_SHEET_VERSION)
  const migratedSheet = migrated?.data[PATHFINDER_2E_DATA_KEY] as typeof defaultPathfinder2eSheet
  assert.deepEqual(migratedSheet.armorClass, { manualAdjustment: 0 })
  assert.ok(migratedSheet.armorProficiencies)
  assert.equal(migratedSheet.identity.ancestry?.source, 'catalog')
})

test('migrateEnvelopeForWrite migrates a V2-identity envelope with legacy armor class to V3', () => {
  const { armorClass: _current, armorProficiencies: _proficiencies, ...rest } = defaultPathfinder2eSheet
  const legacyArmorClassSheet = { ...rest, armorClass: 15 }

  const migrated = pathfinder2eSheetAdapter.migrateEnvelopeForWrite?.({
    system: 'PATHFINDER_2E',
    version: PATHFINDER_2E_SHEET_VERSION_LEGACY_ARMOR_CLASS,
    data: { [PATHFINDER_2E_DATA_KEY]: legacyArmorClassSheet },
  })

  assert.equal(migrated?.version, PATHFINDER_2E_SHEET_VERSION)
  const migratedSheet = migrated?.data[PATHFINDER_2E_DATA_KEY] as typeof defaultPathfinder2eSheet
  assert.deepEqual(migratedSheet.armorClass, { manualAdjustment: 0 })
})

test('migrateEnvelopeForWrite leaves an already-current V3 envelope untouched', () => {
  const envelope = {
    system: 'PATHFINDER_2E' as const,
    version: PATHFINDER_2E_SHEET_VERSION,
    data: { [PATHFINDER_2E_DATA_KEY]: defaultPathfinder2eSheet },
  }

  const migrated = pathfinder2eSheetAdapter.migrateEnvelopeForWrite?.(envelope)

  assert.equal(migrated, envelope)
})
