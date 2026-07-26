import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_17_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_17_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-17-ids'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ID = 'pf2e-rulebooks-backlog-17'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '6df6b11abe7d0747fb93e0e97ae979ea0b3c0a78f3d75816069f48522bb0178a',
  importerVersion: 8,
  importedAt: '2026-07-26T19:22:43.3407091Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_17_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_17_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES = delivery.entries
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_IMPORTS = delivery.imports
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_COVERAGE = delivery.coverage
