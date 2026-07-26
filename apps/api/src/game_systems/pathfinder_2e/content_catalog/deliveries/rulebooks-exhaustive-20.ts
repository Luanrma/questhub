import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_20_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_20_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-20-ids'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ID = 'pf2e-rulebooks-backlog-20'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '38a3c1ff4f618e765d5d42d19e84094503711d1cd5b4ad09b585340a07f0fd27',
  importerVersion: 9,
  importedAt: '2026-07-27T00:33:26.1923482Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_20_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_20_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES = delivery.entries
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_IMPORTS = delivery.imports
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_COVERAGE = delivery.coverage
