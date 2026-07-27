import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-15-ids'

export const PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ID = 'pf2e-npc-core-backlog-15'

export const PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '2c6b2ca517f564ce3e3c6960d027f0218de378b9e85eb8a778557f905e7bc018',
  importerVersion: 7,
  importedAt: '2026-07-26T15:44:53.7828291Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES = delivery.entries
export const PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_IMPORTS = delivery.imports
export const PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_COVERAGE = delivery.coverage
