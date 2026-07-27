import type {
  GameSystemCatalogBestiaryFilter,
  GameSystemCatalogDomain,
} from '../../catalog'
import type { Pathfinder2eContentEntry } from './content-entry'

function isHazard(entry: Pathfinder2eContentEntry) {
  if (entry.original.domain !== 'BESTIARY') return false
  const data = entry.original.data as { entryType?: unknown }
  return data.entryType === 'HAZARD'
}

export function matchesPathfinder2eBestiaryFilter(
  entry: Pathfinder2eContentEntry,
  domain: GameSystemCatalogDomain,
  filter: GameSystemCatalogBestiaryFilter = 'all',
) {
  if (domain !== 'BESTIARY' || filter === 'all') return true
  return filter === 'hazards' ? isHazard(entry) : !isHazard(entry)
}
