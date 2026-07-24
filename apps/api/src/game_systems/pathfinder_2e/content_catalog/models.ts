export type Pathfinder2eContentDomain = 'BESTIARY' | 'SPELL' | 'ITEM'
export type Pathfinder2eContentLocale = 'en-US' | 'pt-BR'

export type Pathfinder2eContentRoundStatus =
  | 'PLANNED'
  | 'SOURCE_LOCKED'
  | 'IMPORTING'
  | 'TRANSLATING'
  | 'REVIEWING'
  | 'READY'
  | 'PUBLISHED'
  | 'BLOCKED'

export type Pathfinder2eContentProgram =
  | 'CORE_REMASTER'
  | 'NPC_CORE'
  | 'RULEBOOKS'
  | 'LOST_OMENS'
  | 'STANDALONE_ADVENTURES'
  | 'ADVENTURE_PATHS'
  | 'PATHFINDER_SOCIETY'
  | 'LEGACY_OGL'

export type Pathfinder2eContentSelection = {
  publications: readonly string[]
  level?: Readonly<{ min: number; max: number }>
  rank?: Readonly<{ min: number; max: number }>
  maxEntries: number
}

export type Pathfinder2eFrozenEntryIds = {
  bestiary: readonly string[]
  spells: readonly string[]
  items: readonly string[]
}

export type Pathfinder2eContentRound = {
  id: string
  order: number
  kind: 'CONTENT'
  program: Pathfinder2eContentProgram
  title: string
  status: Pathfinder2eContentRoundStatus
  locales: readonly Pathfinder2eContentLocale[]
  selection: Readonly<{
    bestiary: Pathfinder2eContentSelection
    spells: Pathfinder2eContentSelection
    items: Pathfinder2eContentSelection
  }>
  frozenEntryIds: Readonly<Pathfinder2eFrozenEntryIds>
}

export type Pathfinder2eContentProgramPlan = {
  id: Pathfinder2eContentProgram
  order: number
  title: string
  strategy: 'EXHAUSTIVE_ASCENDING' | 'PUBLICATION_QUEUE' | 'SERIES_AND_VOLUME' | 'SEASON_AND_SCENARIO'
  description: string
}

export type Pathfinder2eCoverageInventoryEntry = {
  contentId: string
  value: number
  sourcePack: string
  sourceId: string
}

export type Pathfinder2eContentRoadmap = {
  schemaVersion: 1
  baseline: Readonly<{
    sourceBranch: 'development'
    bestiary: number
    spells: number
    items: number
  }>
  roundLimits: Readonly<{
    bestiary: number
    spells: number
    items: number
  }>
  programs: readonly Pathfinder2eContentProgramPlan[]
  rounds: readonly Pathfinder2eContentRound[]
}

export type Pathfinder2eRoadmapValidation = {
  valid: boolean
  errors: string[]
}
