import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-08-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_ID = 'pf2e-core-remaster-backlog-08'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '945db8fd6da873a8af46a01d631685673150e958753a3862c3ddccd01e7daca4',
  importerVersion: 6,
  importedAt: '2026-07-26T03:18:58.324Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_COVERAGE = delivery.coverage
