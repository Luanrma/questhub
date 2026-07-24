import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-10-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_ID = 'pf2e-core-remaster-backlog-10'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'dac1d967691284b2ee53f394e80ea70c0606205aa3c6af401be410c888febc2c',
  importerVersion: 6,
  importedAt: '2026-07-26T03:25:09.893Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_COVERAGE = delivery.coverage
