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
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-04-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ID = 'pf2e-core-remaster-backlog-04'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'c50ff55848cc9bdede02fcb99a4edf9927876394d9b59884d0aa6a66c84da6b2',
  importerVersion: 5,
  importedAt: '2026-07-26T01:23:25.305Z',
}

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES: readonly Pathfinder2eContentEntry[] = [
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_BESTIARY_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS.bestiary,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_SPELL_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS.spells,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_ITEM_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS.items,
  ),
]

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IMPORTS: readonly Pathfinder2eImportManifestEntry[] =
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.map((entry) => ({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ID,
    contentId: entry.original.contentId,
    domain: entry.original.domain,
    source: entry.original.source,
    status: 'NORMALIZED',
    sourceHash: entry.original.sourceHash,
    normalizationWarnings:
      PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_NORMALIZATION_WARNINGS[
        entry.original.contentId as keyof typeof PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_NORMALIZATION_WARNINGS
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

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_COVERAGE: Pathfinder2eRoundCoverage =
  calculatePathfinder2eRoundReadiness({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ID,
    bestiary: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS.bestiary.length),
    spells: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS.spells.length),
    items: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS.items.length),
  })
