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
} from '../records'
import { PATHFINDER_2E_SPELL_ENTRIES } from '../spells'

type ExhaustiveDeliveryIds = Readonly<{
  bestiary: readonly string[]
  spells: readonly string[]
  items: readonly string[]
}>

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

export function buildPathfinder2eExhaustiveDelivery(input: {
  roundId: string
  ids: ExhaustiveDeliveryIds
  normalizationWarnings: Readonly<Record<string, readonly string[]>>
}): {
  entries: readonly Pathfinder2eContentEntry[]
  imports: readonly Pathfinder2eImportManifestEntry[]
  coverage: Pathfinder2eRoundCoverage
} {
  const entries: readonly Pathfinder2eContentEntry[] = [
    ...selectPathfinder2eContentEntries(PATHFINDER_2E_BESTIARY_ENTRIES, input.ids.bestiary),
    ...selectPathfinder2eContentEntries(PATHFINDER_2E_SPELL_ENTRIES, input.ids.spells),
    ...selectPathfinder2eContentEntries(PATHFINDER_2E_ITEM_ENTRIES, input.ids.items),
  ]
  const imports: readonly Pathfinder2eImportManifestEntry[] = entries.map((entry) => ({
    roundId: input.roundId,
    contentId: entry.original.contentId,
    domain: entry.original.domain,
    source: entry.original.source,
    status: 'NORMALIZED',
    sourceHash: entry.original.sourceHash,
    normalizationWarnings: input.normalizationWarnings[entry.original.contentId] ?? [],
  }))
  const roundCoverage = calculatePathfinder2eRoundReadiness({
    roundId: input.roundId,
    bestiary: coverage(input.ids.bestiary.length),
    spells: coverage(input.ids.spells.length),
    items: coverage(input.ids.items.length),
  })

  return { entries, imports, coverage: roundCoverage }
}
