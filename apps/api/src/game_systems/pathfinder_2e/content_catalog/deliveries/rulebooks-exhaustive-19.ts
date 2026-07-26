import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_19_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_19_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-19-ids'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ID = 'pf2e-rulebooks-backlog-19'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'b8a3df669779f8de55d8f1f65d475f8f0c54a5a0af544ec07902e7d7469b03c6',
  importerVersion: 9,
  importedAt: '2026-07-27T00:10:37.2941826Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_19_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_19_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES = delivery.entries
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_IMPORTS = delivery.imports
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_COVERAGE = delivery.coverage
