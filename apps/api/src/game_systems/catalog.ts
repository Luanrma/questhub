export type GameSystemKey = 'PATHFINDER_2E'

export type GameSystemCatalogDomain = 'BESTIARY' | 'SPELLS' | 'ITEMS'
export type GameSystemContentLocale = 'en-US' | 'pt-BR'
export type GameSystemCatalogEditorialFilter = 'all' | 'review' | 'ready'
export type GameSystemCatalogBestiaryFilter = 'all' | 'creatures' | 'hazards'

export type GameSystemDescriptor = {
  key: GameSystemKey
  slug: string
  label: string
  catalogDomains: readonly GameSystemCatalogDomain[]
}

export type GameSystemCatalogCardStat = {
  label: string
  value: string
}

export type GameSystemCatalogEditorialStatus = {
  label: string
  tone: 'review' | 'ready' | 'warning' | 'info'
}

export type GameSystemCatalogCard = {
  id: string
  name: string
  subtitle?: string | null
  description?: string | null
  imageUrl?: string | null
  traits?: readonly string[]
  editorialStatus?: GameSystemCatalogEditorialStatus | null
  stats?: readonly GameSystemCatalogCardStat[]
}

export type GameSystemCatalogSheetField = {
  label: string
  value: string
  wide?: boolean
}

export type GameSystemCatalogSheetSection = {
  title: string
  fields: readonly GameSystemCatalogSheetField[]
}

export type GameSystemCatalogSheet = GameSystemCatalogCard & {
  sections: readonly GameSystemCatalogSheetSection[]
  source?: {
    publication?: string | null
    license?: string | null
  }
}

export type GameSystemCatalogQuery = {
  campaignId: string
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
  search?: string
  editorialStatus?: GameSystemCatalogEditorialFilter
  bestiaryType?: GameSystemCatalogBestiaryFilter
  page: number
  limit: number
}

export type GameSystemCatalogEntryQuery = {
  campaignId: string
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
  contentId: string
}

export type GameSystemCatalogResult = {
  entries: readonly GameSystemCatalogCard[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type GameSystemCatalogProvider = {
  list(query: GameSystemCatalogQuery): Promise<GameSystemCatalogResult> | GameSystemCatalogResult
  get(query: GameSystemCatalogEntryQuery): Promise<GameSystemCatalogSheet | null> | GameSystemCatalogSheet | null
}

export const GAME_SYSTEM_DESCRIPTORS: readonly GameSystemDescriptor[] = [
  {
    key: 'PATHFINDER_2E',
    slug: 'pathfinder-2e',
    label: 'Pathfinder 2e',
    catalogDomains: ['BESTIARY', 'SPELLS', 'ITEMS'],
  },
]

const catalogProviders = new Map<GameSystemKey, GameSystemCatalogProvider>()

export function getGameSystemDescriptor(key: string): GameSystemDescriptor | null {
  return GAME_SYSTEM_DESCRIPTORS.find((descriptor) => descriptor.key === key) ?? null
}

export function registerGameSystemCatalogProvider(
  system: GameSystemKey,
  provider: GameSystemCatalogProvider,
) {
  if (catalogProviders.has(system)) {
    throw new Error(`Catalog provider already registered for ${system}`)
  }
  catalogProviders.set(system, provider)
}

export function getGameSystemCatalogProvider(system: GameSystemKey) {
  return catalogProviders.get(system) ?? null
}
