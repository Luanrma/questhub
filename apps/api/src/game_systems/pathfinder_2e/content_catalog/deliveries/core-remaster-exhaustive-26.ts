import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-26-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ID = 'pf2e-core-remaster-reconciliation-26'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '2ee8880e451657eb2cb3dda10333f5c4ca6a30e731bf281366dc3ac912fa1ad6',
  importerVersion: 14,
  importedAt: '2026-07-27T14:29:18.3483318-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_COVERAGE = delivery.coverage
