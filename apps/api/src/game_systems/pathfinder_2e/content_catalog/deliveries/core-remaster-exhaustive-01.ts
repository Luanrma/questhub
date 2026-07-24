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
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS } from './core-remaster-exhaustive-01-ids'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ID = 'pf2e-core-remaster-backlog-01'

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'f844e94823c4f837cddd0cb323150fc75296ca8e2c571a5574f6812550c19f4a',
  importerVersion: 3,
  importedAt: '2026-07-24T20:47:31.448Z',
}

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES: readonly Pathfinder2eContentEntry[] = [
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_BESTIARY_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS.bestiary,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_SPELL_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS.spells,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_ITEM_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS.items,
  ),
]

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IMPORTS: readonly Pathfinder2eImportManifestEntry[] =
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.map((entry) => ({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ID,
    contentId: entry.original.contentId,
    domain: entry.original.domain,
    source: entry.original.source,
    status: 'NORMALIZED',
    sourceHash: entry.original.sourceHash,
    normalizationWarnings: entry.original.contentId === 'pf2e:item:equipment-srd:adventurers-pack'
      ? ['missing-source-level-defaulted-to-zero']
      : [],
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

export const PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE: Pathfinder2eRoundCoverage =
  calculatePathfinder2eRoundReadiness({
    roundId: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ID,
    bestiary: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS.bestiary.length),
    spells: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS.spells.length),
    items: coverage(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS.items.length),
  })
