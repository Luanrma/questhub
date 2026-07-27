import { PATHFINDER_2E_BESTIARY_ENTRIES } from '../bestiary'
import {
  selectPathfinder2eContentEntries,
  type Pathfinder2eContentEntry,
} from '../content-entry'
import { PATHFINDER_2E_ITEM_ENTRIES } from '../items'
import { calculatePathfinder2eRoundReadiness } from '../progress'
import type {
  Pathfinder2eDomainCoverage,
  Pathfinder2eImportManifestEntry,
  Pathfinder2eRoundCoverage,
  Pathfinder2eSourceLock,
} from '../records'
import { PATHFINDER_2E_SPELL_ENTRIES } from '../spells'
import {
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-06-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ID = 'pf2e-core-remaster-backlog-06'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '89c7d915d10f5559e7c69ebd2c86fa16c9d3e45718a236b94fda7b6c0f7356df',
  importerVersion: 5,
  importedAt: '2026-07-26T02:33:28.396Z',
}

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES: readonly Pathfinder2eContentEntry[] = [
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_BESTIARY_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS.bestiary,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_SPELL_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS.spells,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_ITEM_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS.items,
  ),
]

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IMPORTS: readonly Pathfinder2eImportManifestEntry[] =
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.map((entry) => ({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ID,
    contentId: entry.original.contentId,
    domain: entry.original.domain,
    source: entry.original.source,
    status: 'NORMALIZED',
    sourceHash: entry.original.sourceHash,
    normalizationWarnings:
      PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_NORMALIZATION_WARNINGS[
        entry.original.contentId as keyof typeof PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_NORMALIZATION_WARNINGS
      ] ?? [],
  }))

function coverage(planned: number): Pathfinder2eDomainCoverage {
  return {
    planned,
    imported: planned,
    normalized: planned,
    translated: planned,
    reviewed: 0,
    stale: 0,
    rejected: 0,
  }
}

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_COVERAGE: Pathfinder2eRoundCoverage =
  calculatePathfinder2eRoundReadiness({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ID,
    bestiary: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS.bestiary.length),
    spells: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS.spells.length),
    items: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS.items.length),
  })
