import { migratePathfinder2eCharacterSheet } from '../character-sheet/adapter'
import { pathfinder2eCharacterSheetSchema } from '../character-sheet/schema'

/**
 * Resolves persisted Pathfinder sheet data exactly as the character-sheet API does.
 * Equipment must accept older stored schema versions that can be migrated in memory.
 */
export function resolvePathfinder2eStoredEquipmentSheet(input: unknown) {
  const parsed = pathfinder2eCharacterSheetSchema.safeParse(
    migratePathfinder2eCharacterSheet(input),
  )

  return parsed.success ? parsed.data : null
}
