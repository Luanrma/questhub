export type DiceSides = 4 | 6 | 8 | 10 | 12 | 20

export type DiceRollAnimation = {
  id: number
  sides: DiceSides
  value: number
  characterId: string
  characterName: string
  rolledAt: number
}

export type ActiveDiceRoll = DiceRollAnimation & {
  visualId: string
  slot: number
}

export type DiceRollVisualState = 'idle' | 'rolling' | 'settled' | 'fading'

export type DiceRolledPayload = {
  campaignId: string
  roll?: DiceRollAnimation
  rolls?: DiceRollAnimation[]
}

export type SerializedQuaternion = readonly [number, number, number, number]
