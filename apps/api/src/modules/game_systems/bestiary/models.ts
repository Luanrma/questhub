export type GameSystemBestiaryToken = {
  imageUrl: string | null
  fallbackInitials: string
  borderColor: string
}

export type GameSystemBestiaryCreature = {
  id: string
  system: 'PATHFINDER_2E' | 'DND_5E'
  sourcePack: string
  sourceId: string
  name: string
  level: number
  rarity: string
  size: string
  traits: string[]
  translations?: {
    ptBR?: {
      name?: string
      rarity?: string
      size?: string
      traits?: string[]
    }
  }
  armorClass: number
  hitPoints: number
  speed: number
  publicationTitle: string
  remaster: boolean
  license: string
  token: GameSystemBestiaryToken
}

export type GameSystemBestiaryAdapter = {
  system: GameSystemBestiaryCreature['system']
  listCreatures: (options?: { search?: string; limit?: number }) => GameSystemBestiaryCreature[]
}
