import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_16_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_16_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-16-ids'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ID = 'pf2e-rulebooks-backlog-16'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'fdfa4416ebaf2af6a2b8864346956a8b21ade30e1ef71fddb0c5b721e293ee39',
  importerVersion: 7,
  importedAt: '2026-07-26T18:41:15.7044453Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_16_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_16_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES = delivery.entries
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_IMPORTS = delivery.imports
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_COVERAGE = delivery.coverage
