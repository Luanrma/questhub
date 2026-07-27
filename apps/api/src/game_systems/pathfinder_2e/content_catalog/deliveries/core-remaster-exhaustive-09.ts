import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-09-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_ID = 'pf2e-core-remaster-backlog-09'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '5e36438224ba1bc3fbbbdd4334f4491861539915868c88cae7579fd88213b05d',
  importerVersion: 6,
  importedAt: '2026-07-26T03:22:06.688Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_COVERAGE = delivery.coverage
