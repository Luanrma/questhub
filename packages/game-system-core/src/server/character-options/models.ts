export type GameSystemCharacterOptionKind = 'class' | 'ancestry' | 'heritage' | 'background'

export type GameSystemCharacterOptionSource = {
  pack: string
  id: string
  path?: string
  publication?: string
  license?: string
  remaster?: boolean
}

export type GameSystemCharacterOptionDisplayStat = {
  key: string
  label: string
  value: string
}

export type GameSystemCharacterOptionDisplay = {
  subtitle?: string
  description?: string
  image?: string
  tags: string[]
  stats: GameSystemCharacterOptionDisplayStat[]
}

export type GameSystemCharacterOptionEntry<TSystemData = unknown> = {
  id: string
  system: string
  kind: GameSystemCharacterOptionKind
  slug: string
  name: string
  source: GameSystemCharacterOptionSource
  display: GameSystemCharacterOptionDisplay
  systemData: TSystemData
}

export type GameSystemCharacterOptionFilterValue = string | number | boolean

export type GameSystemCharacterOptionListOptions = {
  kind: GameSystemCharacterOptionKind
  search?: string
  limit?: number
  offset?: number
  filters?: Record<string, GameSystemCharacterOptionFilterValue>
}

export type GameSystemCharacterOptionsAdapter = {
  system: string
  listEntries: (options: GameSystemCharacterOptionListOptions) => GameSystemCharacterOptionEntry[]
  countEntries: (options: Omit<GameSystemCharacterOptionListOptions, 'limit' | 'offset'>) => number
  findEntry: (kind: GameSystemCharacterOptionKind, entryId: string) => GameSystemCharacterOptionEntry | null
  findEntryBySource?: (
    kind: GameSystemCharacterOptionKind,
    sourcePack: string,
    sourceId: string,
  ) => GameSystemCharacterOptionEntry | null
}
