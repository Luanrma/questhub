import type { CharacterSpellbookSystemAdapter } from '../../../../game-system-core/src/server/character-spells'
import { DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK, pathfinder2eCharacterSpellbookSchema } from './models'
import type { Pathfinder2eCharacterSpellbookData } from './models'

export * from './models'

export const pathfinder2eCharacterSpellbookAdapter: CharacterSpellbookSystemAdapter<Pathfinder2eCharacterSpellbookData> = {
  system: 'PATHFINDER_2E',
  dataKey: 'pathfinder2e',
  version: 1,
  defaultSpellbook: DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK,
  schema: pathfinder2eCharacterSpellbookSchema,
}
