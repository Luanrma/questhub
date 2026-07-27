import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-12-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ID = 'pf2e-core-remaster-backlog-12'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'cf64c913ddaee558a59459d7eba1336aa8dab738a1d17ab8fb98402f8c3b4c8d',
  importerVersion: 7,
  importedAt: '2026-07-26T14:18:41.933Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_COVERAGE = delivery.coverage
