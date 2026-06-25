import type { Pathfinder2eSheetEnvelope } from '../pathfinder-2e/character-sheet/types'

export type CharacterSheetEnvelope = Pathfinder2eSheetEnvelope
export type GameSystem = CharacterSheetEnvelope['system']

export type CharacterSheetResponse = {
  characterId: string
  system: GameSystem | null
  sheet: CharacterSheetEnvelope | null
}
