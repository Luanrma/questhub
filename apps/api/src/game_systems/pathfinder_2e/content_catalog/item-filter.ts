import type {
  GameSystemCatalogFilterDefinition,
  GameSystemCatalogFilterSelection,
  GameSystemContentLocale,
} from '../../catalog'
import type { Pathfinder2eContentEntry } from './content-entry'
import {
  translatePathfinder2eRarity,
  translatePathfinder2eTraits,
} from './translations/pt-BR/glossary'

const FILTER_IDS = {
  type: 'type',
  level: 'level',
  rarity: 'rarity',
  category: 'category',
  group: 'group',
  traits: 'traits',
} as const

function asItemData(entry: Pathfinder2eContentEntry) {
  return entry.original.data as {
    itemType?: unknown
    level?: unknown
    rarity?: unknown
    category?: unknown
    group?: unknown
    traits?: unknown
  }
}

function asText(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function asTraits(value: unknown) {
  return Array.isArray(value)
    ? value
      .filter((trait): trait is string => typeof trait === 'string' && trait.trim().length > 0)
      .map((trait) => trait.trim())
    : []
}

function uniqueSorted(values: readonly string[], locale: GameSystemContentLocale) {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right, locale))
}

function humanize(value: string, locale: GameSystemContentLocale) {
  const words = value.replace(/[-_]+/g, ' ').trim()
  return words.replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase(locale))
}

const itemTypeLabelsPtBr: Record<string, string> = {
  weapon: 'Arma',
  armor: 'Armadura',
  shield: 'Escudo',
  equipment: 'Equipamento',
  consumable: 'Consumível',
  ammunition: 'Munição',
  treasure: 'Tesouro',
  container: 'Recipiente',
  kit: 'Kit',
}

function localizedItemTypeLabel(value: string, locale: GameSystemContentLocale) {
  if (locale === 'pt-BR') return itemTypeLabelsPtBr[value] ?? humanize(value, locale)
  return humanize(value, locale)
}

function localizedOptions(values: readonly string[], locale: GameSystemContentLocale) {
  return values
    .map((value) => ({ value, label: humanize(value, locale) }))
    .sort((left, right) => left.label.localeCompare(right.label, locale))
}

export function createPathfinder2eItemFilterDefinitions(
  entries: readonly Pathfinder2eContentEntry[],
  locale: GameSystemContentLocale,
): readonly GameSystemCatalogFilterDefinition[] {
  const itemEntries = entries.filter((entry) => entry.original.domain === 'ITEM')
  const levels = [...new Set(
    itemEntries
      .map((entry) => asItemData(entry).level)
      .filter((level): level is number => typeof level === 'number' && Number.isFinite(level)),
  )].sort((left, right) => left - right)
  const rarities = uniqueSorted(
    itemEntries
      .map((entry) => asText(asItemData(entry).rarity))
      .filter((value): value is string => Boolean(value)),
    'en-US',
  )
  const itemTypes = uniqueSorted(
    itemEntries
      .map((entry) => asText(asItemData(entry).itemType))
      .filter((value): value is string => Boolean(value)),
    'en-US',
  )
  const categories = uniqueSorted(
    itemEntries
      .map((entry) => asText(asItemData(entry).category))
      .filter((value): value is string => Boolean(value)),
    'en-US',
  )
  const groups = uniqueSorted(
    itemEntries
      .map((entry) => asText(asItemData(entry).group))
      .filter((value): value is string => Boolean(value)),
    'en-US',
  )
  const traits = uniqueSorted(
    itemEntries.flatMap((entry) => asTraits(asItemData(entry).traits)),
    'en-US',
  )
  const translatedTraits = translatePathfinder2eTraits(traits, locale, 'ITEMS')

  return [
    {
      id: FILTER_IDS.type,
      label: locale === 'pt-BR' ? 'Tipo' : 'Type',
      kind: 'single',
      options: itemTypes
        .map((value) => ({ value, label: localizedItemTypeLabel(value, locale) }))
        .sort((left, right) => left.label.localeCompare(right.label, locale)),
    },
    {
      id: FILTER_IDS.level,
      label: locale === 'pt-BR' ? 'Nível' : 'Level',
      kind: 'single',
      options: levels.map((level) => ({ value: String(level), label: String(level) })),
    },
    {
      id: FILTER_IDS.rarity,
      label: locale === 'pt-BR' ? 'Raridade' : 'Rarity',
      kind: 'single',
      options: rarities
        .map((rarity) => ({
          value: rarity,
          label: translatePathfinder2eRarity(rarity, locale, 'ITEMS'),
        }))
        .sort((left, right) => left.label.localeCompare(right.label, locale)),
    },
    {
      id: FILTER_IDS.category,
      label: locale === 'pt-BR' ? 'Categoria' : 'Category',
      kind: 'single',
      options: localizedOptions(categories, locale),
    },
    {
      id: FILTER_IDS.group,
      label: locale === 'pt-BR' ? 'Grupo' : 'Group',
      kind: 'single',
      options: localizedOptions(groups, locale),
    },
    {
      id: FILTER_IDS.traits,
      label: 'Traits',
      kind: 'multiple',
      options: traits
        .map((trait, index) => ({ value: trait, label: translatedTraits[index] ?? trait }))
        .sort((left, right) => left.label.localeCompare(right.label, locale)),
    },
  ]
}

export function normalizePathfinder2eItemFilters(
  filters: GameSystemCatalogFilterSelection | undefined,
  definitions: readonly GameSystemCatalogFilterDefinition[],
): GameSystemCatalogFilterSelection {
  if (!filters) return {}

  return definitions.reduce<Record<string, readonly string[]>>((selection, definition) => {
    const validValues = new Set(definition.options.map((option) => option.value))
    const selectedValues = [...new Set(filters[definition.id] ?? [])]
      .filter((value) => validValues.has(value))
    const effectiveValues = definition.kind === 'single'
      ? selectedValues.slice(0, 1)
      : selectedValues
    if (effectiveValues.length > 0) selection[definition.id] = effectiveValues
    return selection
  }, {})
}

export function matchesPathfinder2eItemFilters(
  entry: Pathfinder2eContentEntry,
  filters: GameSystemCatalogFilterSelection,
) {
  if (entry.original.domain !== 'ITEM') return false
  const data = asItemData(entry)

  const selectedType = filters[FILTER_IDS.type]?.[0]
  if (selectedType !== undefined && asText(data.itemType) !== selectedType) return false

  const selectedLevel = filters[FILTER_IDS.level]?.[0]
  if (selectedLevel !== undefined && String(data.level) !== selectedLevel) return false

  const selectedRarity = filters[FILTER_IDS.rarity]?.[0]
  if (selectedRarity !== undefined && asText(data.rarity) !== selectedRarity) return false

  const selectedCategory = filters[FILTER_IDS.category]?.[0]
  if (selectedCategory !== undefined && asText(data.category) !== selectedCategory) return false

  const selectedGroup = filters[FILTER_IDS.group]?.[0]
  if (selectedGroup !== undefined && asText(data.group) !== selectedGroup) return false

  const selectedTraits = filters[FILTER_IDS.traits] ?? []
  const entryTraits = new Set(asTraits(data.traits))
  return selectedTraits.every((trait) => entryTraits.has(trait))
}
