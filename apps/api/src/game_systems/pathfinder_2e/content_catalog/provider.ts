import type {
  GameSystemCatalogCard,
  GameSystemCatalogDomain,
  GameSystemCatalogProvider,
  GameSystemContentLocale,
} from '../../catalog'
import { resolvePathfinder2eContentEntry } from './catalog'
import type { Pathfinder2eContentEntry } from './content-entry'
import { PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES } from './deliveries/core-remaster-starting-content'

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

function asNumberText(value: unknown): string | null {
  return typeof value === 'number' && Number.isFinite(value) ? String(value) : null
}

function asTextList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === 'string' && entry.trim().length > 0)
    : []
}

function addStat(stats: Array<{ label: string; value: string }>, label: string, value: string | null) {
  if (value) stats.push({ label, value })
}

function buildCard(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale): GameSystemCatalogCard {
  const resolved = resolvePathfinder2eContentEntry(entry, locale)
  const data = asRecord(resolved.original)
  const stats: Array<{ label: string; value: string }> = []
  const badges = new Set<string>()

  for (const trait of asTextList(data.traits)) badges.add(trait)

  if (entry.original.domain === 'BESTIARY') {
    addStat(stats, 'Nível', asNumberText(data.level))
    addStat(stats, 'CA', asNumberText(data.armorClass))
    addStat(stats, 'PV', asNumberText(data.hitPoints))
    addStat(stats, 'Tamanho', asText(data.size))
    const rarity = asText(data.rarity)
    if (rarity) badges.add(rarity)
  }

  if (entry.original.domain === 'SPELL') {
    addStat(stats, 'Círculo', asNumberText(data.rank))
    addStat(stats, 'Ações', asText(data.actions))
    for (const tradition of asTextList(data.traditions)) badges.add(tradition)
    const rarity = asText(data.rarity)
    if (rarity) badges.add(rarity)
  }

  if (entry.original.domain === 'ITEM') {
    addStat(stats, 'Nível', asNumberText(data.level))
    addStat(stats, 'Categoria', asText(data.category))
    addStat(stats, 'Preço', asText(data.price))
    addStat(stats, 'Volume', asText(data.bulk))
    const rarity = asText(data.rarity)
    if (rarity) badges.add(rarity)
  }

  if (locale === 'pt-BR' && resolved.translation?.status !== 'REVIEWED') {
    badges.add('tradução em revisão')
  }

  return {
    id: resolved.contentId,
    name: resolved.display.name,
    subtitle: entry.original.source.publicationTitle ?? entry.original.source.sourcePack,
    description: resolved.display.description,
    imageUrl: null,
    badges: [...badges],
    stats,
  }
}

function searchableText(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale) {
  const resolved = resolvePathfinder2eContentEntry(entry, locale)
  const data = asRecord(resolved.original)

  return [
    resolved.display.name,
    resolved.display.description,
    asText(data.name),
    entry.original.source.publicationTitle,
    entry.original.source.sourcePack,
    ...asTextList(data.traits),
  ]
    .filter((value): value is string => Boolean(value))
    .join(' ')
    .toLocaleLowerCase(locale)
}

export const pathfinder2eContentCatalogProvider: GameSystemCatalogProvider = {
  list(query) {
    const normalizedSearch = query.search?.trim().toLocaleLowerCase(query.locale) ?? ''
    const matching = PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES
      .filter((entry) => DOMAIN_MAP[entry.original.domain] === query.domain)
      .filter((entry) => !normalizedSearch || searchableText(entry, query.locale).includes(normalizedSearch))
      .map((entry) => buildCard(entry, query.locale))
      .sort((left, right) => left.name.localeCompare(right.name, query.locale))

    const total = matching.length
    const totalPages = total === 0 ? 0 : Math.ceil(total / query.limit)
    const start = (query.page - 1) * query.limit

    return {
      entries: matching.slice(start, start + query.limit),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages,
      },
    }
  },
}
