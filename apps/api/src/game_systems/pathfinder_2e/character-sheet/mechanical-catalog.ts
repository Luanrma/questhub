import { PATHFINDER_2E_ANCESTRY_MECHANICS } from './options/generated/ancestry-mechanics.generated'
import { PATHFINDER_2E_BACKGROUND_MECHANICS } from './options/generated/background-mechanics.generated'
import { PATHFINDER_2E_CLASS_MECHANICS } from './options/generated/class-mechanics.generated'

function findCatalogEntry<TCatalog extends Record<string, unknown>>(
  catalog: TCatalog,
  name: string,
) {
  return name in catalog ? catalog[name as keyof TCatalog] : null
}

export function getPathfinder2eAncestryMechanics(ancestry: string) {
  return findCatalogEntry(PATHFINDER_2E_ANCESTRY_MECHANICS, ancestry)
}

export function getPathfinder2eClassMechanics(className: string) {
  return findCatalogEntry(PATHFINDER_2E_CLASS_MECHANICS, className)
}

export function getPathfinder2eBackgroundMechanics(background: string) {
  return findCatalogEntry(PATHFINDER_2E_BACKGROUND_MECHANICS, background)
}

export function getPathfinder2eAncestryHitPoints(ancestry: string) {
  return getPathfinder2eAncestryMechanics(ancestry)?.hitPoints ?? 0
}

export function getPathfinder2eClassHitPointsPerLevel(className: string) {
  return getPathfinder2eClassMechanics(className)?.hitPointsPerLevel ?? 0
}
