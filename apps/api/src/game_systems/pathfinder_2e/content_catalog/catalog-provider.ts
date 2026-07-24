import type {
  GameSystemCatalogCard,
  GameSystemCatalogDomain,
  GameSystemCatalogEditorialFilter,
  GameSystemCatalogProvider,
  GameSystemCatalogSheet,
  GameSystemContentLocale,
} from '../../catalog'
import { resolvePathfinder2eContentEntry } from './catalog'
import type { Pathfinder2eContentEntry } from './content-entry'
import {
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE,
} from './deliveries/core-remaster-starting-content'
import { pathfinder2eContextualCatalogProvider } from './contextual-provider'
import {
  translatePathfinder2eRarity,
  translatePathfinder2eTradition,
  translatePathfinder2eTraits,
} from './translations/pt-BR/glossary'

const DOMAIN_MAP: Record<Pathfinder2eContentEntry['original']['domain'], GameSystemCatalogDomain> = {
  BESTIARY: 'BESTIARY',
  SPELL: 'SPELLS',
  ITEM: 'ITEMS',
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {}
}

function asText(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function asTextList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === 'string' && entry.trim().length > 0)
    : []
}

function matchesEditorialFilter(
  entry: Pathfinder2eContentEntry,
  filter: GameSystemCatalogEditorialFilter = 'all',
) {
  if (filter === 'all') return true
  if (filter === 'ready') return entry.translation.status === 'REVIEWED'
  return entry.translation.status !== 'REVIEWED' && entry.translation.status !== 'NOT_REQUIRED'
}

function localizedSearchText(
  entry: Pathfinder2eContentEntry,
  domain: GameSystemCatalogDomain,
  locale: GameSystemContentLocale,
) {
  const resolved = resolvePathfinder2eContentEntry(entry, locale)
  const data = asRecord(entry.original.data)
  const traits = translatePathfinder2eTraits(asTextList(data.traits), locale, domain)
  const rarity = asText(data.rarity)
  const traditions = domain === 'SPELLS'
    ? asTextList(data.traditions).map((value) => translatePathfinder2eTradition(value, locale, domain))
    : []

  return [
    resolved.display.name,
    resolved.display.description,
    asText(data.name),
    entry.original.source.publicationTitle,
    entry.original.source.sourcePack,
    ...traits,
    rarity ? translatePathfinder2eRarity(rarity, locale, domain) : null,
    ...traditions,
  ]
    .filter((value): value is string => Boolean(value))
    .join(' ')
    .toLocaleLowerCase(locale)
}

function localizedName(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale) {
  return resolvePathfinder2eContentEntry(entry, locale).display.name
}

function resolveImageUrl(entry: Pathfinder2eContentEntry): string | null {
  const image = entry.original.image
  if (!image) return null
  if (image.displayUrl) return image.displayUrl

  const systemPrefix = 'systems/pf2e/'
  if (!image.upstreamPath.startsWith(systemPrefix)) return null

  const repositoryPath = `static/${image.upstreamPath.slice(systemPrefix.length)}`
  return `https://raw.githubusercontent.com/foundryvtt/pf2e/${PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE.sourceCommit}/${repositoryPath}`
}

function withImage<T extends GameSystemCatalogCard>(entry: Pathfinder2eContentEntry, value: T): T {
  return {
    ...value,
    imageUrl: resolveImageUrl(entry),
  }
}

function sheetToCard(sheet: GameSystemCatalogSheet): GameSystemCatalogCard {
  const { sections: _sections, source: _source, ...card } = sheet
  return card
}

export const pathfinder2eCatalogProvider: GameSystemCatalogProvider = {
  async list(query) {
    const normalizedSearch = query.search?.trim().toLocaleLowerCase(query.locale) ?? ''
    const matching = PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES
      .filter((entry) => DOMAIN_MAP[entry.original.domain] === query.domain)
      .filter((entry) => matchesEditorialFilter(entry, query.editorialStatus))
      .filter((entry) => !normalizedSearch || localizedSearchText(entry, query.domain, query.locale).includes(normalizedSearch))
      .sort((left, right) => localizedName(left, query.locale).localeCompare(localizedName(right, query.locale), query.locale))

    const total = matching.length
    const totalPages = total === 0 ? 0 : Math.ceil(total / query.limit)
    const start = (query.page - 1) * query.limit
    const pageEntries = matching.slice(start, start + query.limit)
    const cards = await Promise.all(pageEntries.map(async (entry) => {
      const sheet = await pathfinder2eContextualCatalogProvider.get({
        campaignId: query.campaignId,
        domain: query.domain,
        locale: query.locale,
        contentId: entry.original.contentId,
      })
      return sheet ? withImage(entry, sheetToCard(sheet)) : null
    }))

    return {
      entries: cards.filter((entry): entry is GameSystemCatalogCard => Boolean(entry)),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages,
      },
    }
  },

  async get(query) {
    const entry = PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES.find(
      (candidate) => candidate.original.contentId === query.contentId
        && DOMAIN_MAP[candidate.original.domain] === query.domain,
    )
    if (!entry) return null

    const sheet = await pathfinder2eContextualCatalogProvider.get(query)
    return sheet ? withImage(entry, sheet) : null
  },
}
