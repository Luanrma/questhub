import type { Pathfinder2eSourceLock } from '../records'
import { buildPathfinder2eExhaustiveDelivery } from './build-exhaustive-delivery'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_30_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_30_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-30-ids'

export const PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ID =
  'pf2e-legacy-ogl-terminal-reconciliation-30'

export const PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '49ee3a1a2e9e8648f315b0653eca5f9bd9ed73835bd37f82b3aaf9b3b1831e3e',
  importerVersion: 14,
  importedAt: '2026-07-27T17:21:20-03:00',
}

const delivery = buildPathfinder2eExhaustiveDelivery({
  roundId: PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ID,
  ids: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_30_IDS,
  normalizationWarnings: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_30_NORMALIZATION_WARNINGS,
})

export const PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ENTRIES = delivery.entries
export const PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_IMPORTS = delivery.imports
export const PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_COVERAGE = delivery.coverage
