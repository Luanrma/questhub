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
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_NORMALIZATION_WARNINGS,
} from './core-remaster-exhaustive-07-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ID = 'pf2e-core-remaster-backlog-07'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '46ac045dcf2ab2bd81e240fab49c3e8510028e3a0fdd90b87036d87085eea8eb',
  importerVersion: 6,
  importedAt: '2026-07-26T03:04:08.321Z',
}

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES: readonly Pathfinder2eContentEntry[] = [
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_BESTIARY_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS.bestiary,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_SPELL_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS.spells,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_ITEM_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS.items,
  ),
]

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IMPORTS: readonly Pathfinder2eImportManifestEntry[] =
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.map((entry) => ({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ID,
    contentId: entry.original.contentId,
    domain: entry.original.domain,
    source: entry.original.source,
    status: 'NORMALIZED',
    sourceHash: entry.original.sourceHash,
    normalizationWarnings:
      PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_NORMALIZATION_WARNINGS[
        entry.original.contentId as keyof typeof PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_NORMALIZATION_WARNINGS
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

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_COVERAGE: Pathfinder2eRoundCoverage =
  calculatePathfinder2eRoundReadiness({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ID,
    bestiary: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS.bestiary.length),
    spells: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS.spells.length),
    items: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS.items.length),
  })
