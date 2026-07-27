import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_27_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_27_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-27-ids'

export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ID = 'pf2e-legacy-ogl-exhaustive-27'

export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'a65bdc88c3d857052a4c967e9482b5d6ab82a2908d8de10ddd8987c788e0e90c',
  importerVersion: 14,
  importedAt: '2026-07-27T14:50:09.4555571-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_27_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_27_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES = delivery.entries
export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_IMPORTS = delivery.imports
export const PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_COVERAGE = delivery.coverage
