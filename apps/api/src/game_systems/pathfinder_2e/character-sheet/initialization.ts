import { derivePathfinder2eCharacterSheet } from './derivation'
import type { Pathfinder2eCharacterSheetData } from './schema'

function hasCompleteHitPointBasis(sheet: Pathfinder2eCharacterSheetData) {
  return Boolean(sheet.identity.ancestry && sheet.identity.class)
}

/**
 * Initializes current HP only while the sheet is still in its initial,
 * incomplete state. Once ancestry and class were already configured, a
 * current value of zero is treated as real game state and is never healed.
 */
export function initializePathfinder2eCurrentHitPoints(
  previous: Pathfinder2eCharacterSheetData,
  next: Pathfinder2eCharacterSheetData,
): Pathfinder2eCharacterSheetData {
  if (hasCompleteHitPointBasis(previous)) return next
  if (!hasCompleteHitPointBasis(next)) return next
  if (previous.hitPoints.current !== 0 || next.hitPoints.current !== 0) return next

  const maximum = derivePathfinder2eCharacterSheet(next).derived.hitPoints.maximum
  if (maximum <= 0) return next

  return {
    ...next,
    hitPoints: {
      ...next.hitPoints,
      current: maximum,
    },
  }
}
