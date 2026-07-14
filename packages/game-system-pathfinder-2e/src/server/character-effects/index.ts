import type { CharacterActiveEffectsSystemAdapter } from '../../../../game-system-core/src/server/character-effects'
import { DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS, pathfinder2eCharacterActiveEffectsSchema } from './models'
import type { Pathfinder2eCharacterActiveEffectsData } from './models'

export * from './models'

export const pathfinder2eCharacterActiveEffectsAdapter: CharacterActiveEffectsSystemAdapter<Pathfinder2eCharacterActiveEffectsData> = {
  system: 'PATHFINDER_2E',
  dataKey: 'pathfinder2e',
  version: 1,
  defaultData: DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS,
  schema: pathfinder2eCharacterActiveEffectsSchema,
}
