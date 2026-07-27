import { PATHFINDER_2E_BESTIARY_ENTRIES } from '../bestiary'
import {
  selectPathfinder2eContentEntries,
  type Pathfinder2eContentEntry,
} from '../content-entry'
import { PATHFINDER_2E_ITEM_ENTRIES } from '../items'
import { calculatePathfinder2eRoundReadiness } from '../progress'
import type {
  Pathfinder2eImportManifestEntry,
  Pathfinder2eRoundCoverage,
  Pathfinder2eSourceLock,
} from '../records'
import { PATHFINDER_2E_SPELL_ENTRIES } from '../spells'

export const PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID = 'pf2e-core-remaster-01'

export const PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'b25766f9c74d8eef993c10753a709324208df9b4c09514991ea5e65dab0a1fa2',
  importerVersion: 1,
  importedAt: '2026-07-24T01:40:02.000Z',
}

export const PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IDS = {
  bestiary: [
    'pf2e:bestiary:pathfinder-monster-core:goblin-warrior',
    'pf2e:bestiary:pathfinder-monster-core:skeleton-guard',
    'pf2e:bestiary:pathfinder-monster-core:wolf',
  ],
  spells: [
    'pf2e:spell:spells-srd:electric-arc',
    'pf2e:spell:spells-srd:force-barrage',
    'pf2e:spell:spells-srd:heal',
  ],
  items: [
    'pf2e:item:equipment-srd:dogslicer',
    'pf2e:item:equipment-srd:leather-armor',
    'pf2e:item:equipment-srd:shortbow',
  ],
} as const

export const PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES: readonly Pathfinder2eContentEntry[] = [
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_BESTIARY_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IDS.bestiary,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_SPELL_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IDS.spells,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_ITEM_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IDS.items,
  ),
]

export const PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IMPORTS: readonly Pathfinder2eImportManifestEntry[] =
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES.map((entry) => ({
    roundId: PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
    contentId: entry.original.contentId,
    domain: entry.original.domain,
    source: entry.original.source,
    status: 'NORMALIZED',
    sourceHash: entry.original.sourceHash,
    normalizationWarnings: [],
  }))

const domainCoverage = {
  planned: 3,
  imported: 3,
  normalized: 3,
  translated: 3,
  reviewed: 3,
  stale: 0,
  rejected: 0,
}

export const PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE: Pathfinder2eRoundCoverage =
  calculatePathfinder2eRoundReadiness({
    roundId: PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
    bestiary: { ...domainCoverage },
    spells: { ...domainCoverage },
    items: { ...domainCoverage },
  })
