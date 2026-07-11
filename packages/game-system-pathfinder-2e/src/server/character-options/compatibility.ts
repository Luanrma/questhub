import type { Pathfinder2eAncestryEntry, Pathfinder2eHeritageEntry } from './models'

export function isCompatibleHeritage(heritage: Pathfinder2eHeritageEntry, ancestry: Pathfinder2eAncestryEntry): boolean {
  return heritage.versatile || heritage.ancestry?.slug === ancestry.slug
}

