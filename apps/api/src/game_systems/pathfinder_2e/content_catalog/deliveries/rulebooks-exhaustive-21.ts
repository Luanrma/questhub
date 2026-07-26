import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_21_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_21_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-21-ids'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ID = 'pf2e-rulebooks-backlog-21'

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '24bcdfefe2f4f900e8394e41091cd9a264589bbd7e6733e04fabbe092c12d026',
  importerVersion: 10,
  importedAt: '2026-07-27T01:14:16.1572972Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_21_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_21_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES = delivery.entries
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_IMPORTS = delivery.imports
export const PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_COVERAGE = delivery.coverage
