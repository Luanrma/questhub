import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_28_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_28_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-28-ids'

export const PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ID =
  'pf2e-core-remaster-reconciliation-28'

export const PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'b13f309ca24d4b87cdf949bf7ee0bd19db7e77fb68425c4bec7aa33aa39eea29',
  importerVersion: 14,
  importedAt: '2026-07-27T15:25:11.6913179-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_28_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_28_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_COVERAGE = delivery.coverage
