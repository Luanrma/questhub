import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-14-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_ID = 'pf2e-core-remaster-backlog-14'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'd70ceddc4e153547917ada8b5ea3112a7d85cdf95d8731cac8923b34792be4ef',
  importerVersion: 7,
  importedAt: '2026-07-26T14:27:28.449Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_COVERAGE = delivery.coverage
