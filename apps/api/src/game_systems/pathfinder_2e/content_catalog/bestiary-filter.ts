import type {
  GameSystemCatalogDomain,
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

function asCatalogData(entry: Pathfinder2eContentEntry) {
  return entry.original.data as {
    entryType?: unknown
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

function localizedBestiaryTypeOptions(locale: GameSystemContentLocale) {
  return locale === 'pt-BR'
    ? [
        { value: 'creatures', label: 'Criaturas' },
        { value: 'hazards', label: 'Hazards' },
      ]
    : [
        { value: 'creatures', label: 'Creatures' },
        { value: 'hazards', label: 'Hazards' },
      ]
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

function localizedOptions(
  values: readonly string[],
  locale: GameSystemContentLocale,
) {
  return values
    .map((value) => ({ value, label: humanize(value, locale) }))
    .sort((left, right) => left.label.localeCompare(right.label, locale))
}

export function isPathfinder2eHazard(entry: Pathfinder2eContentEntry) {
  if (entry.original.domain !== 'BESTIARY') return false
  return asCatalogData(entry).entryType === 'HAZARD'
}

export function createPathfinder2eBestiaryFilterDefinitions(
  entries: readonly Pathfinder2eContentEntry[],
  domain: GameSystemCatalogDomain,
  locale: GameSystemContentLocale,
): readonly GameSystemCatalogFilterDefinition[] {
  const originalDomain = domain === 'BESTIARY' ? 'BESTIARY' : domain === 'ITEMS' ? 'ITEM' : null
  if (!originalDomain) return []

  const domainEntries = entries.filter((entry) => entry.original.domain === originalDomain)
  const levels = [...new Set(
    domainEntries
      .map((entry) => asCatalogData(entry).level)
      .filter((level): level is number => typeof level === 'number' && Number.isFinite(level)),
  )].sort((left, right) => left - right)
  const rarities = uniqueSorted(
    domainEntries
      .map((entry) => asText(asCatalogData(entry).rarity))
      .filter((rarity): rarity is string => Boolean(rarity)),
    'en-US',
  )
  const traits = uniqueSorted(
    domainEntries.flatMap((entry) => asTraits(asCatalogData(entry).traits)),
    'en-US',
  )
  const translatedRarities = rarities
    .map((rarity) => ({ value: rarity, label: translatePathfinder2eRarity(rarity, locale, domain) }))
    .sort((left, right) => left.label.localeCompare(right.label, locale))
  const translatedTraits = translatePathfinder2eTraits(traits, locale, domain)
  const traitOptions = traits
    .map((trait, index) => ({ value: trait, label: translatedTraits[index] ?? trait }))
    .sort((left, right) => left.label.localeCompare(right.label, locale))

  if (domain === 'BESTIARY') {
    return [
      { id: FILTER_IDS.type, label: locale === 'pt-BR' ? 'Tipo' : 'Type', kind: 'single', options: localizedBestiaryTypeOptions(locale) },
      { id: FILTER_IDS.level, label: locale === 'pt-BR' ? 'Nível' : 'Level', kind: 'single', options: levels.map((level) => ({ value: String(level), label: String(level) })) },
      { id: FILTER_IDS.rarity, label: locale === 'pt-BR' ? 'Raridade' : 'Rarity', kind: 'single', options: translatedRarities },
      { id: FILTER_IDS.traits, label: 'Traits', kind: 'multiple', options: traitOptions },
    ]
  }

  const itemTypes = uniqueSorted(domainEntries.map((entry) => asText(asCatalogData(entry).itemType)).filter((value): value is string => Boolean(value)), 'en-US')
  const categories = uniqueSorted(domainEntries.map((entry) => asText(asCatalogData(entry).category)).filter((value): value is string => Boolean(value)), 'en-US')
  const groups = uniqueSorted(domainEntries.map((entry) => asText(asCatalogData(entry).group)).filter((value): value is string => Boolean(value)), 'en-US')

  return [
    {
      id: FILTER_IDS.type,
      label: locale === 'pt-BR' ? 'Tipo' : 'Type',
      kind: 'single',
      options: itemTypes
        .map((value) => ({ value, label: localizedItemTypeLabel(value, locale) }))
        .sort((left, right) => left.label.localeCompare(right.label, locale)),
    },
    { id: FILTER_IDS.level, label: locale === 'pt-BR' ? 'Nível' : 'Level', kind: 'single', options: levels.map((level) => ({ value: String(level), label: String(level) })) },
    { id: FILTER_IDS.rarity, label: locale === 'pt-BR' ? 'Raridade' : 'Rarity', kind: 'single', options: translatedRarities },
    { id: FILTER_IDS.category, label: locale === 'pt-BR' ? 'Categoria' : 'Category', kind: 'single', options: localizedOptions(categories, locale) },
    { id: FILTER_IDS.group, label: locale === 'pt-BR' ? 'Grupo' : 'Group', kind: 'single', options: localizedOptions(groups, locale) },
    { id: FILTER_IDS.traits, label: 'Traits', kind: 'multiple', options: traitOptions },
  ]
}

export function normalizePathfinder2eBestiaryFilters(
  filters: GameSystemCatalogFilterSelection | undefined,
  definitions: readonly GameSystemCatalogFilterDefinition[],
): GameSystemCatalogFilterSelection {
  if (!filters) return {}
  return definitions.reduce<Record<string, readonly string[]>>((selection, definition) => {
    const validValues = new Set(definition.options.map((option) => option.value))
    const selectedValues = [...new Set(filters[definition.id] ?? [])].filter((value) => validValues.has(value))
    const effectiveValues = definition.kind === 'single' ? selectedValues.slice(0, 1) : selectedValues
    if (effectiveValues.length > 0) selection[definition.id] = effectiveValues
    return selection
  }, {})
}

export function matchesPathfinder2eBestiaryFilters(
  entry: Pathfinder2eContentEntry,
  domain: GameSystemCatalogDomain,
  filters: GameSystemCatalogFilterSelection,
) {
  if (domain !== 'BESTIARY' && domain !== 'ITEMS') return true
  const data = asCatalogData(entry)

  const selectedType = filters[FILTER_IDS.type]?.[0]
  if (domain === 'BESTIARY') {
    if (selectedType === 'hazards' && !isPathfinder2eHazard(entry)) return false
    if (selectedType === 'creatures' && isPathfinder2eHazard(entry)) return false
  } else if (selectedType !== undefined && asText(data.itemType) !== selectedType) {
    return false
  }

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
