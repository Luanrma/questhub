import type { CharacterSheetSystemAdapter } from '../../../../game-system-core/src/server/character-sheet'
import {
  PATHFINDER_2E_DATA_KEY,
  PATHFINDER_2E_LEGACY_SHEET_VERSION,
  PATHFINDER_2E_SHEET_VERSION,
  PATHFINDER_2E_SHEET_VERSION_LEGACY_ARMOR_CLASS,
  PATHFINDER_2E_SYSTEM,
} from './constants'
import { migratePathfinder2eSheetV1ToV2 } from '../character-options/migration'
import { migratePathfinder2eArmorClassToV3 } from './armor-class-migration'
import { defaultPathfinder2eSheet } from './default-sheet'
import type { Pathfinder2eSheet, Pathfinder2eSheetV1, Pathfinder2eSheetV2LegacyArmorClass } from './models'
import { pathfinder2eSheetSchema, pathfinder2eSheetV1Schema } from './schema'

function migrateEnvelopeForWrite(envelope: Parameters<NonNullable<CharacterSheetSystemAdapter<Pathfinder2eSheet>['migrateEnvelopeForWrite']>>[0]) {
  let data: unknown = envelope.data[PATHFINDER_2E_DATA_KEY]
  let version = envelope.version

  if (version === PATHFINDER_2E_LEGACY_SHEET_VERSION) {
    const legacySheet = pathfinder2eSheetV1Schema.parse(data) as Pathfinder2eSheetV1
    data = migratePathfinder2eSheetV1ToV2(legacySheet).sheet
    version = PATHFINDER_2E_SHEET_VERSION_LEGACY_ARMOR_CLASS
  }

  if (version === PATHFINDER_2E_SHEET_VERSION_LEGACY_ARMOR_CLASS) {
    data = migratePathfinder2eArmorClassToV3(data as Pathfinder2eSheetV2LegacyArmorClass)
    version = PATHFINDER_2E_SHEET_VERSION
  }

  if (version === envelope.version) return envelope

  return {
    ...envelope,
    version,
    data: {
      ...envelope.data,
      [PATHFINDER_2E_DATA_KEY]: data,
    },
  }
}

export const pathfinder2eSheetAdapter: CharacterSheetSystemAdapter<Pathfinder2eSheet> = {
  system: PATHFINDER_2E_SYSTEM,
  dataKey: PATHFINDER_2E_DATA_KEY,
  version: PATHFINDER_2E_SHEET_VERSION,
  supportedVersions: [
    PATHFINDER_2E_LEGACY_SHEET_VERSION,
    PATHFINDER_2E_SHEET_VERSION_LEGACY_ARMOR_CLASS,
    PATHFINDER_2E_SHEET_VERSION,
  ],
  defaultSheet: defaultPathfinder2eSheet,
  schema: pathfinder2eSheetSchema,
  migrateEnvelopeForWrite,
  health: {
    read: (sheet) => ({
      current: sheet.hitPoints.current,
      max: sheet.hitPoints.maximum,
      temporary: sheet.hitPoints.temporary,
    }),
    write: (sheet, next) => ({
      ...sheet,
      hitPoints: {
        ...sheet.hitPoints,
        current: next.current,
        maximum: next.max,
        temporary: next.temporary,
      },
    }),
  },
  movement: {
    read: (sheet) => ({ meters: sheet.general.movementMeters }),
  },
}
