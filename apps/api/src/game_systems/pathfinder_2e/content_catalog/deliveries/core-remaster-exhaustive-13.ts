import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-13-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ID = 'pf2e-core-remaster-backlog-13'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '6e1355fbb31e3c637ef280746c2925f849a6cf8a4e982ae0956b3ffb34db1042',
  importerVersion: 7,
  importedAt: '2026-07-26T14:25:11.555Z',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ENTRIES = delivery.entries
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IMPORTS = delivery.imports
export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_COVERAGE = delivery.coverage
