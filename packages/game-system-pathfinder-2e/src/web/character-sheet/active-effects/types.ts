export type Pathfinder2eModifierType = 'circumstance' | 'status' | 'item' | 'untyped'

export type Pathfinder2eRuleElementSource = Record<string, unknown> & { key: string }

export type Pathfinder2eActiveEffect = {
  id: string
  label: string
  rules: Pathfinder2eRuleElementSource[]
}

export type Pathfinder2eCharacterActiveEffectsData = {
  effects: Pathfinder2eActiveEffect[]
}

export type CharacterActiveEffectsEnvelope = {
  system: string
  version: number
  data: {
    pathfinder2e?: Pathfinder2eCharacterActiveEffectsData
    [key: string]: unknown
  }
}

export type GetCharacterActiveEffectsResponse = {
  characterId: string
  system: string
  revision: number
  activeEffects: CharacterActiveEffectsEnvelope
}
