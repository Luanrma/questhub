import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-11-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ID = 'pf2e-core-remaster-backlog-11'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '433f0564fc8b62d83dc7b0fbc929b1fa75c56af67f030a2f4d01366001d0ced2',
  importerVersion: 7,
  importedAt: '2026-07-26T04:34:58.442Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_COVERAGE = delivery.coverage
