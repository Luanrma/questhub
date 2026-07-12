export type GameSystemSpellDisplayStat = {
  key: string
  label: string
  value: string
}

export type GameSystemSpellSheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type GameSystemSpellSheetSection = {
  key: string
  title: string
  entries: GameSystemSpellSheetEntry[]
}

export type GameSystemSpellSheet = {
  sections: GameSystemSpellSheetSection[]
}

export type GameSystemSpellDisplay = {
  subtitle?: string
  level?: {
    label: string
    value: string
  }
  stats: GameSystemSpellDisplayStat[]
  tags: string[]
  sheet?: GameSystemSpellSheet
}

export type GameSystemSpellSource = {
  pack?: string
  id?: string
  title?: string
  license?: string
}

export type GameSystemSpellEntryCategory = 'spell' | 'ritual'

export type GameSystemSpellEntry<TSystemData = unknown> = {
  id: string
  system: string
  category: GameSystemSpellEntryCategory
  name: string
  source?: GameSystemSpellSource
  display: GameSystemSpellDisplay
  systemData: TSystemData
}

export type GameSystemSpellFilterValue = string | number

export type GameSystemSpellListOptions = {
  search?: string
  limit?: number
  offset?: number
  filters?: Record<string, GameSystemSpellFilterValue>
}

export type GameSystemSpellAdapter = {
  system: string
  listEntries: (options?: GameSystemSpellListOptions) => GameSystemSpellEntry[]
  countEntries: (options?: Pick<GameSystemSpellListOptions, 'search' | 'filters'>) => number
  findEntry?: (entryId: string) => GameSystemSpellEntry | null
}
