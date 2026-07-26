import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-25-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ID = 'pf2e-core-remaster-reconciliation-25'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '2dc6f556c2ac58c3f8f6ca1db1b974f5f56c610874a6d8b2f51342d2b51d4e3a',
  importerVersion: 14,
  importedAt: '2026-07-27T13:46:12.2064631-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_COVERAGE = delivery.coverage
