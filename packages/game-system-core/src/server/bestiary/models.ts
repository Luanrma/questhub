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
  sheet?: GameSystemBestiarySheet
}

export type GameSystemBestiarySheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type GameSystemBestiarySheetSection = {
  key: string
  title: string
  entries: GameSystemBestiarySheetEntry[]
}

export type GameSystemBestiarySheet = {
  sections: GameSystemBestiarySheetSection[]
}

export type GameSystemBestiarySource = {
  pack?: string
  id?: string
  title?: string
  license?: string
}

export type GameSystemBestiaryEntryCategory = 'npc' | 'hazard'

export type GameSystemBestiaryEntry<TSystemData = unknown> = {
  id: string
  system: string
  category: GameSystemBestiaryEntryCategory
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

export type GameSystemBestiaryCreature<TSystemData = unknown> = GameSystemBestiaryEntry<TSystemData> & {
  category: 'npc'
}

export type GameSystemBestiaryFilterValue = string | number

export type GameSystemBestiaryListOptions = {
  search?: string
  limit?: number
  offset?: number
  filters?: Record<string, GameSystemBestiaryFilterValue>
}

export type GameSystemBestiaryAdapter = {
  system: string
  listEntries?: (options?: GameSystemBestiaryListOptions) => GameSystemBestiaryEntry[]
  countEntries?: (options?: Pick<GameSystemBestiaryListOptions, 'search' | 'filters'>) => number
  findEntry?: (entryId: string) => GameSystemBestiaryEntry | null
  listCreatures: (options?: GameSystemBestiaryListOptions) => GameSystemBestiaryCreature[]
  countCreatures: (options?: Pick<GameSystemBestiaryListOptions, 'search' | 'filters'>) => number
  findCreature?: (creatureId: string) => GameSystemBestiaryCreature | null
}
