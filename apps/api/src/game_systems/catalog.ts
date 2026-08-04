export type GameSystemKey = 'PATHFINDER_2E'

export type GameSystemCatalogDomain = 'BESTIARY' | 'SPELLS' | 'ITEMS'
export type GameSystemContentLocale = 'en-US' | 'pt-BR'
export type GameSystemCatalogEditorialFilter = 'all' | 'review' | 'ready'
export type GameSystemCatalogFilterSelection = Readonly<Record<string, readonly string[]>>

export type GameSystemCatalogFilterDefinition = {
  id: string
  label: string
  kind: 'single' | 'multiple'
  options: ReadonlyArray<{
    value: string
    label: string
  }>
}

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
  canCreateToken?: boolean
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

export type GameSystemCatalogTokenSheet = {
  sheet: GameSystemCatalogSheet
  data: unknown
  tokenDefaults?: {
    size?: number
  }
}

const DEFAULT_CATALOG_TOKEN_SIZE = 1
const MINIMUM_CATALOG_TOKEN_SIZE = 0.25
const MAXIMUM_CATALOG_TOKEN_SIZE = 20
const CATALOG_TOKEN_SIZE_STEP = 0.25

export function resolveCatalogTokenSize(tokenSheet: GameSystemCatalogTokenSheet) {
  const size = tokenSheet.tokenDefaults?.size
  if (typeof size !== 'number' || !Number.isFinite(size)) return DEFAULT_CATALOG_TOKEN_SIZE
  if (size < MINIMUM_CATALOG_TOKEN_SIZE || size > MAXIMUM_CATALOG_TOKEN_SIZE) {
    return DEFAULT_CATALOG_TOKEN_SIZE
  }

  const steps = size / CATALOG_TOKEN_SIZE_STEP
  return Number.isInteger(steps) ? size : DEFAULT_CATALOG_TOKEN_SIZE
}

export type GameSystemCatalogQuery = {
  campaignId: string
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
  search?: string
  editorialStatus?: GameSystemCatalogEditorialFilter
  filters?: GameSystemCatalogFilterSelection
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
  filterDefinitions?: readonly GameSystemCatalogFilterDefinition[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type GameSystemCatalogProvider = {
  inventoryNamespace?: string
  list(query: GameSystemCatalogQuery): Promise<GameSystemCatalogResult> | GameSystemCatalogResult
  get(query: GameSystemCatalogEntryQuery): Promise<GameSystemCatalogSheet | null> | GameSystemCatalogSheet | null
  getTokenizableSheet?(
    query: GameSystemCatalogEntryQuery,
  ): Promise<GameSystemCatalogTokenSheet | null> | GameSystemCatalogTokenSheet | null
  getInventoryItemData?(
    query: GameSystemCatalogEntryQuery,
  ): Promise<Record<string, unknown> | null> | Record<string, unknown> | null
  resolveInventoryItemContentId?(
    data: unknown,
  ): Promise<string | null> | string | null
  resolveInventoryItemImageUrl?(contentId: string): string | null
}

export type CatalogTokenSheetEnvelope = {
  kind: 'CATALOG_TOKEN_SHEET'
  version: 1
  source: {
    domain: GameSystemCatalogDomain
    contentId: string
    locale: GameSystemContentLocale
  }
  sheet: GameSystemCatalogSheet
  data?: unknown
}

export function catalogTokenSheetSystemKey(system: GameSystemKey) {
  return `catalog-token:${system}`
}

export function createCatalogTokenSheetEnvelope(
  source: CatalogTokenSheetEnvelope['source'],
  tokenSheet: GameSystemCatalogTokenSheet,
): CatalogTokenSheetEnvelope {
  return {
    kind: 'CATALOG_TOKEN_SHEET',
    version: 1,
    source,
    sheet: tokenSheet.sheet,
    data: tokenSheet.data,
  }
}

export function parseCatalogTokenSheetEnvelope(input: unknown): CatalogTokenSheetEnvelope | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null
  const envelope = input as Partial<CatalogTokenSheetEnvelope>
  const source = envelope.source
  const sheet = envelope.sheet

  if (envelope.kind !== 'CATALOG_TOKEN_SHEET' || envelope.version !== 1) return null
  if (!source || typeof source !== 'object') return null
  if (!['BESTIARY', 'SPELLS', 'ITEMS'].includes(source.domain)) return null
  if (!['en-US', 'pt-BR'].includes(source.locale)) return null
  if (typeof source.contentId !== 'string' || !source.contentId.trim()) return null
  if (!sheet || typeof sheet !== 'object') return null
  if (typeof sheet.id !== 'string' || typeof sheet.name !== 'string' || !Array.isArray(sheet.sections)) return null
  return envelope as CatalogTokenSheetEnvelope
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

export function defaultInventoryCatalogNamespace(system: GameSystemKey) {
  return `questhub:${system.toLocaleLowerCase()}:items:v1`
}

export function getInventoryCatalogNamespace(
  system: GameSystemKey,
  provider: GameSystemCatalogProvider | null | undefined,
) {
  return provider?.inventoryNamespace ?? defaultInventoryCatalogNamespace(system)
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
