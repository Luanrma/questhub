import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_29_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_29_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-29-ids'

export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ID =
  'pf2e-legacy-ogl-exhaustive-29'

export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '8847faa43b2f62a41df75c085b491d225f71e4de247e3c124a7d0b2de1545f55',
  importerVersion: 14,
  importedAt: '2026-07-27T15:49:43.3303398-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_29_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_29_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES = delivery.entries
export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_IMPORTS = delivery.imports
export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_COVERAGE = delivery.coverage
