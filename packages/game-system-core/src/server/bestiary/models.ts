export type GameSystemBestiaryToken = {
  imageUrl: string | null
  fallbackInitials: string
  borderColor: string
}

export type GameSystemBestiaryDisplayStat = {
  key: string
  label: string
  value: string
}

export type GameSystemBestiaryDisplay = {
  subtitle?: string
  level?: {
    label: string
    value: string
  }
  stats: GameSystemBestiaryDisplayStat[]
  tags: string[]
}

export type GameSystemBestiarySource = {
  pack?: string
  id?: string
  title?: string
  license?: string
}

export type GameSystemBestiaryCreature<TSystemData = unknown> = {
  id: string
  system: string
  name: string
  source?: GameSystemBestiarySource
  display: GameSystemBestiaryDisplay
  translations?: {
    ptBR?: {
      name?: string
      display?: Partial<GameSystemBestiaryDisplay>
    }
  }
  token: GameSystemBestiaryToken
  systemData: TSystemData
}

export type GameSystemBestiaryAdapter = {
  system: string
  listCreatures: (options?: { search?: string; limit?: number }) => GameSystemBestiaryCreature[]
}
