export type GameSystemItemDisplayStat = {
  key: string
  label: string
  value: string
}

export type GameSystemItemSheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type GameSystemItemSheetSection = {
  key: string
  title: string
  entries: GameSystemItemSheetEntry[]
}

export type GameSystemItemSheet = {
  sections: GameSystemItemSheetSection[]
}

export type GameSystemItemDisplay = {
  subtitle?: string
  level?: {
    label: string
    value: string
  }
  price?: {
    label: string
    value: string
  }
  stats: GameSystemItemDisplayStat[]
  tags: string[]
  sheet?: GameSystemItemSheet
}

export type GameSystemItemSource = {
  pack?: string
  id?: string
  title?: string
  license?: string
}

export type GameSystemItemEntry<TSystemData = unknown> = {
  id: string
  system: string
  itemType: string
  name: string
  source?: GameSystemItemSource
  display: GameSystemItemDisplay
  systemData: TSystemData
}

export type GameSystemItemFilterValue = string | number

export type GameSystemItemListOptions = {
  search?: string
  limit?: number
  offset?: number
  filters?: Record<string, GameSystemItemFilterValue>
}

export type GameSystemItemAdapter = {
  system: string
  listEntries: (options?: GameSystemItemListOptions) => GameSystemItemEntry[]
  countEntries: (options?: Pick<GameSystemItemListOptions, 'search' | 'filters'>) => number
  findEntry?: (entryId: string) => GameSystemItemEntry | null
}
