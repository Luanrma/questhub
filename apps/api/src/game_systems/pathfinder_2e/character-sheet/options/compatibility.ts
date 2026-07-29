import { PATHFINDER_2E_HERITAGE_COMPATIBILITY } from './generated/heritage-compatibility.generated'

export function getPathfinder2eHeritageCompatibility(heritage: string) {
  if (!(heritage in PATHFINDER_2E_HERITAGE_COMPATIBILITY)) return null
  return PATHFINDER_2E_HERITAGE_COMPATIBILITY[
    heritage as keyof typeof PATHFINDER_2E_HERITAGE_COMPATIBILITY
  ]
}

export function isPathfinder2eHeritageCompatible(ancestry: string, heritage: string) {
  if (!ancestry || !heritage) return true
  const compatibility = getPathfinder2eHeritageCompatibility(heritage)
  if (!compatibility) return false
  return compatibility.versatile || compatibility.ancestry === ancestry
}

