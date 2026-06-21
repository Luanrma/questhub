import type { Pathfinder2eSheetEnvelope } from './pathfinder_2e_sheet/types'

export type CharacterSheetEnvelope = Pathfinder2eSheetEnvelope
export type GameSystem = CharacterSheetEnvelope['system']

export type CharacterSheetResponse = {
  characterId: string
  system: GameSystem | null
  sheet: CharacterSheetEnvelope | null
}
