import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_22_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_22_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-22-ids'

export const PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ID = 'pf2e-lost-omens-backlog-22'

export const PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '199d06ff02e63de15ececea0723de99cb95deb3687a384d62e6bb21a2524048f',
  importerVersion: 12,
  importedAt: '2026-07-27T11:31:16.0270015-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_22_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_22_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES = delivery.entries
export const PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_IMPORTS = delivery.imports
export const PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_COVERAGE = delivery.coverage
