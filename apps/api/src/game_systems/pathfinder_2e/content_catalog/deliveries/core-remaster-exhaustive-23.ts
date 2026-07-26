import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-23-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ID = 'pf2e-core-remaster-reconciliation-23'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'a6c6c10b27559b18b6c7ff1da37036f22f638c3c33b171850d8dc42b55fd446e',
  importerVersion: 12,
  importedAt: '2026-07-27T12:02:12.1064741-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_COVERAGE = delivery.coverage
