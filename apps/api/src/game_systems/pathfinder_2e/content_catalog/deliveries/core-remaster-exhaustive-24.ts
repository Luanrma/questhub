import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-24-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ID = 'pf2e-core-remaster-reconciliation-24'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'cd2af90cfdbdbc6284a3d80fcf93c2a90eea27a0d94bf5a01746fd109092d017',
  importerVersion: 13,
  importedAt: '2026-07-27T12:34:57.7974893-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_COVERAGE = delivery.coverage
