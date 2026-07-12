export type Pathfinder2eSpellCategory = 'spell' | 'ritual'

export type Pathfinder2eSpellDefense = {
  save: 'fortitude' | 'reflex' | 'will'
  basic: boolean
} | null

export type Pathfinder2eSpellRitualData = {
  primaryCheck?: string
  secondaryChecks?: string
  secondaryCasters?: number
}

export type Pathfinder2eSpellData = {
  id: string
  sourcePack: string
  sourceId: string
  name: string
  category: Pathfinder2eSpellCategory
  rank: number
  rarity: string
  traditions: string[]
  traits: string[]
  castingTime?: string
  cost?: string
  range?: string
  target?: string
  area?: string
  duration?: string
  defense: Pathfinder2eSpellDefense
  requirements?: string
  description?: string
  heightening?: string
  ritual?: Pathfinder2eSpellRitualData
  publicationTitle?: string
  remaster?: boolean
  license?: string
}
