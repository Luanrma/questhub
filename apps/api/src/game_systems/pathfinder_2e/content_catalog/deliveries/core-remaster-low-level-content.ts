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

export const PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID = 'pf2e-core-remaster-02'

export const PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE: Pathfinder2eSourceLock = {
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: '8b0691cf6325954bd8bceba2bfb685458c420f355f306c985c31ce4f95585fe6',
  importerVersion: 2,
  importedAt: '2026-07-24T20:05:18.947Z',
}

export const PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IDS = {
  bestiary: [
    'pf2e:bestiary:pathfinder-monster-core:animated-statue',
    'pf2e:bestiary:pathfinder-monster-core:dryad',
    'pf2e:bestiary:pathfinder-monster-core:griffon',
  ],
  spells: [
    'pf2e:spell:spells-srd:blazing-bolt',
    'pf2e:spell:spells-srd:dispel-magic',
    'pf2e:spell:spells-srd:invisibility',
  ],
  items: [
    'pf2e:item:equipment-srd:full-plate',
    'pf2e:item:equipment-srd:healers-toolkit-expanded',
    'pf2e:item:equipment-srd:spyglass-fine',
  ],
} as const

export const PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES: readonly Pathfinder2eContentEntry[] = [
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_BESTIARY_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IDS.bestiary,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_SPELL_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IDS.spells,
  ),
  ...selectPathfinder2eContentEntries(
    PATHFINDER_2E_ITEM_ENTRIES,
    PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IDS.items,
  ),
]

export const PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IMPORTS: readonly Pathfinder2eImportManifestEntry[] =
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES.map((entry) => ({
    roundId: PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID,
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
  reviewed: 0,
  stale: 0,
  rejected: 0,
}

export const PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE: Pathfinder2eRoundCoverage =
  calculatePathfinder2eRoundReadiness({
    roundId: PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID,
    bestiary: { ...domainCoverage },
    spells: { ...domainCoverage },
    items: { ...domainCoverage },
  })
