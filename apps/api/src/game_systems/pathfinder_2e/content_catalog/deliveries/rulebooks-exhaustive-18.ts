import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_18_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_18_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-18-ids'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ID = 'pf2e-rulebooks-backlog-18'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '25dab5adf7e785ba3fc998ff58457c2f04e7c1ea20b73ca5b306b03b92523c15',
  importerVersion: 9,
  importedAt: '2026-07-26T23:18:57.3791992Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_18_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_18_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES = delivery.entries
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_IMPORTS = delivery.imports
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_COVERAGE = delivery.coverage
