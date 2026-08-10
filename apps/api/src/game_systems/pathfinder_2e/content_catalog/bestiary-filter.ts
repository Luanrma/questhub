import type {
  GameSystemCatalogDomain,
  GameSystemCatalogFilterDefinition,
  GameSystemCatalogFilterSelection,
  GameSystemContentLocale,
} from '../../catalog'
import type { Pathfinder2eContentEntry } from './content-entry'
import {
  createPathfinder2eItemFilterDefinitions,
  matchesPathfinder2eItemFilters,
} from './item-filter'
import {
  translatePathfinder2eRarity,
  translatePathfinder2eTraits,
} from './translations/pt-BR/glossary'

const FILTER_IDS = {
  type: 'type',
  level: 'level',
  rarity: 'rarity',
  traits: 'traits',
} as const

function asBestiaryData(entry: Pathfinder2eContentEntry) {
  return entry.original.data as {
    entryType?: unknown
    level?: unknown
    rarity?: unknown
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

function localizedTypeOptions(locale: GameSystemContentLocale) {
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

export function isPathfinder2eHazard(entry: Pathfinder2eContentEntry) {
  if (entry.original.domain !== 'BESTIARY') return false
  return asBestiaryData(entry).entryType === 'HAZARD'
}

export function createPathfinder2eBestiaryFilterDefinitions(
  entries: readonly Pathfinder2eContentEntry[],
  domain: GameSystemCatalogDomain,
  locale: GameSystemContentLocale,
): readonly GameSystemCatalogFilterDefinition[] {
  if (domain === 'ITEMS') {
    return createPathfinder2eItemFilterDefinitions(entries, locale)
  }
  if (domain !== 'BESTIARY') return []

  const bestiaryEntries = entries.filter((entry) => entry.original.domain === 'BESTIARY')
  const levels = [...new Set(
    bestiaryEntries
      .map((entry) => asBestiaryData(entry).level)
      .filter((level): level is number => typeof level === 'number' && Number.isFinite(level)),
  )].sort((left, right) => left - right)
  const rarities = uniqueSorted(
    bestiaryEntries
      .map((entry) => asText(asBestiaryData(entry).rarity))
      .filter((rarity): rarity is string => Boolean(rarity)),
    'en-US',
  )
  const traits = uniqueSorted(
    bestiaryEntries.flatMap((entry) => asTraits(asBestiaryData(entry).traits)),
    'en-US',
  )
  const translatedRarities = rarities
    .map((rarity) => ({
      value: rarity,
      label: translatePathfinder2eRarity(rarity, locale, domain),
    }))
    .sort((left, right) => left.label.localeCompare(right.label, locale))
  const translatedTraits = translatePathfinder2eTraits(traits, locale, domain)
  const traitOptions = traits
    .map((trait, index) => ({ value: trait, label: translatedTraits[index] ?? trait }))
    .sort((left, right) => left.label.localeCompare(right.label, locale))

  return [
    {
      id: FILTER_IDS.type,
      label: locale === 'pt-BR' ? 'Tipo' : 'Type',
      kind: 'single',
      options: localizedTypeOptions(locale),
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
      options: translatedRarities,
    },
    {
      id: FILTER_IDS.traits,
      label: 'Traits',
      kind: 'multiple',
      options: traitOptions,
    },
  ]
}

export function normalizePathfinder2eBestiaryFilters(
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

export function matchesPathfinder2eBestiaryFilters(
  entry: Pathfinder2eContentEntry,
  domain: GameSystemCatalogDomain,
  filters: GameSystemCatalogFilterSelection,
) {
  if (domain === 'ITEMS') return matchesPathfinder2eItemFilters(entry, filters)
  if (domain !== 'BESTIARY') return true

  const data = asBestiaryData(entry)
  const selectedType = filters[FILTER_IDS.type]?.[0]
  if (selectedType === 'hazards' && !isPathfinder2eHazard(entry)) return false
  if (selectedType === 'creatures' && isPathfinder2eHazard(entry)) return false

  const selectedLevel = filters[FILTER_IDS.level]?.[0]
  if (selectedLevel !== undefined && String(data.level) !== selectedLevel) return false

  const selectedRarity = filters[FILTER_IDS.rarity]?.[0]
  if (selectedRarity !== undefined && asText(data.rarity) !== selectedRarity) return false

  const selectedTraits = filters[FILTER_IDS.traits] ?? []
  const entryTraits = new Set(asTraits(data.traits))
  return selectedTraits.every((trait) => entryTraits.has(trait))
}
