import { isDeepStrictEqual } from 'node:util'
import type {
  GameSystemCatalogCard,
  GameSystemCatalogDomain,
  GameSystemCatalogEditorialFilter,
  GameSystemCatalogFilterDefinition,
  GameSystemCatalogProvider,
  GameSystemCatalogSheet,
  GameSystemContentLocale,
} from '../../catalog'
import { resolvePathfinder2eContentEntry } from './catalog'
import type { Pathfinder2eContentEntry } from './content-entry'
import {
  createPathfinder2eBestiaryFilterDefinitions,
  isPathfinder2eHazard,
  matchesPathfinder2eBestiaryFilters,
  normalizePathfinder2eBestiaryFilters,
} from './bestiary-filter'
import { PATHFINDER_2E_CONTENT_ENTRIES } from './deliveries'
import { pathfinder2eContextualCatalogProvider } from './contextual-provider'
import {
  getPathfinder2eActiveEffectDefinitionView,
  listPathfinder2eActiveEffectDefinitionViews,
  type Pathfinder2eActiveEffectDefinitionKind,
  type Pathfinder2eActiveEffectDefinitionView,
} from './active-effect-query'
import type { Pathfinder2eActiveEffectPolarity } from './active-effect-definitions'
import {
  translatePathfinder2eRarity,
  translatePathfinder2eTradition,
  translatePathfinder2eTraits,
} from './translations/pt-BR/glossary'
import {
  createPathfinder2eCatalogTokenSheetData,
  resolvePathfinder2eCatalogTokenSize,
} from '../automation/catalog-token-sheet'

const DOMAIN_MAP: Record<Pathfinder2eContentEntry['original']['domain'], GameSystemCatalogDomain> = {
  BESTIARY: 'BESTIARY',
  SPELL: 'SPELLS',
  ITEM: 'ITEMS',
}

const ACTIVE_EFFECT_KINDS = ['condition', 'effect', 'affliction'] as const
const ACTIVE_EFFECT_POLARITIES = ['BENEFICIAL', 'HARMFUL', 'NEUTRAL'] as const
const LOCAL_ICON_ROUTE_PREFIX = '/api/game-systems/pathfinder-2e/icons/'

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

function visibleEditorialStatus(
  entry: Pathfinder2eContentEntry,
  status: GameSystemCatalogCard['editorialStatus'],
) {
  return entry.translation.status === 'REVIEWED' ? null : status
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
  const path = entry.original.image?.path?.trim()
  if (!path || !path.startsWith(LOCAL_ICON_ROUTE_PREFIX)) return null
  return path
}

function cardWithImage(
  entry: Pathfinder2eContentEntry,
  card: GameSystemCatalogCard,
): GameSystemCatalogCard {
  return {
    ...card,
    imageUrl: resolveImageUrl(entry),
    editorialStatus: visibleEditorialStatus(entry, card.editorialStatus),
    canCreateToken: entry.original.domain === 'BESTIARY' && !isPathfinder2eHazard(entry),
  }
}

function sheetWithImage(
  entry: Pathfinder2eContentEntry,
  sheet: GameSystemCatalogSheet,
): GameSystemCatalogSheet {
  return {
    ...sheet,
    imageUrl: resolveImageUrl(entry),
    editorialStatus: visibleEditorialStatus(entry, sheet.editorialStatus),
    canCreateToken: entry.original.domain === 'BESTIARY' && !isPathfinder2eHazard(entry),
  }
}

function sheetToCard(sheet: GameSystemCatalogSheet): GameSystemCatalogCard {
  return {
    id: sheet.id,
    name: sheet.name,
    subtitle: sheet.subtitle,
    description: sheet.description,
    imageUrl: sheet.imageUrl,
    traits: sheet.traits,
    editorialStatus: sheet.editorialStatus,
    stats: sheet.stats,
  }
}

function activeEffectKindLabel(
  kind: Pathfinder2eActiveEffectDefinitionKind,
  locale: GameSystemContentLocale,
) {
  if (locale === 'pt-BR') {
    if (kind === 'condition') return 'Condição'
    if (kind === 'effect') return 'Efeito'
    return 'Aflição'
  }
  if (kind === 'condition') return 'Condition'
  if (kind === 'effect') return 'Effect'
  return 'Affliction'
}

function activeEffectPolarityLabel(
  polarity: Pathfinder2eActiveEffectPolarity,
  locale: GameSystemContentLocale,
) {
  if (locale === 'pt-BR') {
    if (polarity === 'BENEFICIAL') return 'Benéfico'
    if (polarity === 'HARMFUL') return 'Prejudicial'
    return 'Neutro'
  }
  if (polarity === 'BENEFICIAL') return 'Beneficial'
  if (polarity === 'HARMFUL') return 'Harmful'
  return 'Neutral'
}

function activeEffectTranslationStatus(
  view: Pathfinder2eActiveEffectDefinitionView,
  locale: GameSystemContentLocale,
): GameSystemCatalogCard['editorialStatus'] {
  if (locale !== 'pt-BR') return null
  const ready = view.localization.nameLocale === locale
    && view.localization.descriptionLocale === locale
  return ready
    ? null
    : { label: 'Tradução em revisão', tone: 'review' }
}

function activeEffectFilterDefinitions(
  locale: GameSystemContentLocale,
): readonly GameSystemCatalogFilterDefinition[] {
  return [
    {
      id: 'kind',
      label: locale === 'pt-BR' ? 'Tipo' : 'Type',
      kind: 'single',
      options: ACTIVE_EFFECT_KINDS.map((kind) => ({
        value: kind,
        label: activeEffectKindLabel(kind, locale),
      })),
    },
    {
      id: 'polarity',
      label: locale === 'pt-BR' ? 'Polaridade' : 'Polarity',
      kind: 'single',
      options: ACTIVE_EFFECT_POLARITIES.map((polarity) => ({
        value: polarity,
        label: activeEffectPolarityLabel(polarity, locale),
      })),
    },
  ]
}

function selectedActiveEffectKind(
  filters: Readonly<Record<string, readonly string[]>> | undefined,
): Pathfinder2eActiveEffectDefinitionKind | undefined {
  const value = filters?.kind?.[0]
  return ACTIVE_EFFECT_KINDS.find((candidate) => candidate === value)
}

function selectedActiveEffectPolarity(
  filters: Readonly<Record<string, readonly string[]>> | undefined,
): Pathfinder2eActiveEffectPolarity | undefined {
  const value = filters?.polarity?.[0]
  return ACTIVE_EFFECT_POLARITIES.find((candidate) => candidate === value)
}

function activeEffectCard(
  view: Pathfinder2eActiveEffectDefinitionView,
  locale: GameSystemContentLocale,
): GameSystemCatalogCard {
  return {
    id: view.definitionKey,
    name: view.name,
    subtitle: activeEffectKindLabel(view.kind, locale),
    description: view.description,
    imageUrl: view.iconUrl,
    traits: [
      activeEffectPolarityLabel(view.polarity, locale),
      ...(view.group ? [view.group] : []),
    ],
    editorialStatus: activeEffectTranslationStatus(view, locale),
    stats: view.conditionValue?.isValued
      ? [{
          label: locale === 'pt-BR' ? 'Valor base' : 'Base value',
          value: view.conditionValue.baseValue === null ? '—' : String(view.conditionValue.baseValue),
        }]
      : undefined,
  }
}

function activeEffectSheet(
  view: Pathfinder2eActiveEffectDefinitionView,
  locale: GameSystemContentLocale,
): GameSystemCatalogSheet {
  const kindLabel = activeEffectKindLabel(view.kind, locale)
  const polarityLabel = activeEffectPolarityLabel(view.polarity, locale)
  const conditionSection = view.conditionValue
    ? [{
        title: locale === 'pt-BR' ? 'Condição' : 'Condition',
        fields: [
          {
            label: locale === 'pt-BR' ? 'Possui valor' : 'Valued',
            value: view.conditionValue.isValued
              ? (locale === 'pt-BR' ? 'Sim' : 'Yes')
              : (locale === 'pt-BR' ? 'Não' : 'No'),
          },
          {
            label: locale === 'pt-BR' ? 'Valor base' : 'Base value',
            value: view.conditionValue.baseValue === null ? '—' : String(view.conditionValue.baseValue),
          },
        ],
      }]
    : []

  return {
    ...activeEffectCard(view, locale),
    sections: [
      {
        title: locale === 'pt-BR' ? 'Identidade' : 'Identity',
        fields: [
          { label: 'Definition key', value: view.definitionKey, wide: true },
          { label: locale === 'pt-BR' ? 'Tipo' : 'Type', value: kindLabel },
          { label: locale === 'pt-BR' ? 'Polaridade' : 'Polarity', value: polarityLabel },
          { label: locale === 'pt-BR' ? 'Grupo' : 'Group', value: view.group ?? '—' },
        ],
      },
      ...conditionSection,
      {
        title: locale === 'pt-BR' ? 'Fonte' : 'Source',
        fields: [
          { label: locale === 'pt-BR' ? 'Pacote' : 'Pack', value: view.source.sourcePack },
          { label: 'Source ID', value: view.source.sourceId },
          { label: 'Slug', value: view.source.slug ?? '—' },
          {
            label: locale === 'pt-BR' ? 'Publicação' : 'Publication',
            value: view.source.publicationTitle ?? '—',
          },
        ],
      },
    ],
    source: {
      publication: view.source.publicationTitle ?? null,
    },
  }
}

export const pathfinder2eCatalogProvider: GameSystemCatalogProvider = {
  async list(query) {
    if (query.domain === 'EFFECTS') {
      const result = listPathfinder2eActiveEffectDefinitionViews({
        locale: query.locale,
        ...(selectedActiveEffectKind(query.filters)
          ? { kind: selectedActiveEffectKind(query.filters) }
          : {}),
        ...(selectedActiveEffectPolarity(query.filters)
          ? { polarity: selectedActiveEffectPolarity(query.filters) }
          : {}),
        ...(query.search ? { query: query.search } : {}),
        editorialStatus: query.editorialStatus ?? 'all',
        offset: (query.page - 1) * query.limit,
        limit: query.limit,
      })

      return {
        entries: result.items.map((view) => activeEffectCard(view, query.locale)),
        filterDefinitions: activeEffectFilterDefinitions(query.locale),
        pagination: {
          page: query.page,
          limit: result.page.limit,
          total: result.page.total,
          totalPages: result.page.total === 0
            ? 0
            : Math.ceil(result.page.total / result.page.limit),
        },
      }
    }

    const normalizedSearch = query.search?.trim().toLocaleLowerCase(query.locale) ?? ''
    const filterDefinitions = createPathfinder2eBestiaryFilterDefinitions(
      PATHFINDER_2E_CONTENT_ENTRIES,
      query.domain,
      query.locale,
    )
    const filters = normalizePathfinder2eBestiaryFilters(query.filters, filterDefinitions)
    const matching = PATHFINDER_2E_CONTENT_ENTRIES
      .filter((entry) => DOMAIN_MAP[entry.original.domain] === query.domain)
      .filter((entry) => matchesPathfinder2eBestiaryFilters(entry, query.domain, filters))
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
      return sheet ? cardWithImage(entry, sheetToCard(sheet)) : null
    }))

    return {
      entries: cards.filter((entry): entry is GameSystemCatalogCard => Boolean(entry)),
      filterDefinitions,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages,
      },
    }
  },

  async get(query) {
    if (query.domain === 'EFFECTS') {
      const view = getPathfinder2eActiveEffectDefinitionView(query.contentId, query.locale)
      return view ? activeEffectSheet(view, query.locale) : null
    }

    const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
      (candidate) => candidate.original.contentId === query.contentId
        && DOMAIN_MAP[candidate.original.domain] === query.domain,
    )
    if (!entry) return null

    const sheet = await pathfinder2eContextualCatalogProvider.get(query)
    return sheet ? sheetWithImage(entry, sheet) : null
  },

  async getTokenizableSheet(query) {
    if (query.domain !== 'BESTIARY') return null
    const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
      (candidate) => candidate.original.contentId === query.contentId
        && candidate.original.domain === 'BESTIARY',
    )
    if (!entry || isPathfinder2eHazard(entry)) return null

    const [sheet, data] = await Promise.all([
      pathfinder2eCatalogProvider.get(query),
      createPathfinder2eCatalogTokenSheetData(entry.original.data),
    ])
    if (!sheet || !data) return null

    return {
      sheet: {
        ...sheet,
        description: null,
      },
      data,
      tokenDefaults: {
        size: resolvePathfinder2eCatalogTokenSize(entry.original.data),
      },
    }
  },

  getInventoryItemData(query) {
    if (query.domain !== 'ITEMS') return null

    const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
      (candidate) => candidate.original.contentId === query.contentId
        && candidate.original.domain === 'ITEM',
    )

    return entry ? asRecord(entry.original.data) : null
  },

  resolveInventoryItemContentId(data) {
    const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
      (candidate) => candidate.original.domain === 'ITEM'
        && isDeepStrictEqual(candidate.original.data, data),
    )
    return entry?.original.contentId ?? null
  },

  resolveInventoryItemImageUrl(contentId) {
    const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
      (candidate) => candidate.original.contentId === contentId
        && candidate.original.domain === 'ITEM',
    )
    return entry ? resolveImageUrl(entry) : null
  },
}