import type {
  GameSystemCatalogCard,
  GameSystemCatalogDomain,
  GameSystemCatalogProvider,
  GameSystemCatalogSheet,
  GameSystemCatalogSheetField,
  GameSystemContentLocale,
} from '../../catalog'
import type { Pathfinder2eContentEntry } from './content-entry'
import { PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES } from './deliveries/core-remaster-starting-content'
import { pathfinder2eContentCatalogProvider } from './provider'
import {
  translatePathfinder2eRarity,
  translatePathfinder2eTerm,
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

function asNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function asNumberText(value: unknown): string | null {
  const number = asNumber(value)
  return number === null ? null : String(number)
}

function asTextList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === 'string' && entry.trim().length > 0)
    : []
}

function translatedFields(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale) {
  return locale === 'pt-BR' ? asRecord(entry.translation.fields) : {}
}

function translatedNestedRecord(translated: Record<string, unknown>, key: string, id: string) {
  return asRecord(asRecord(translated[key])[id])
}

function findEntry(contentId: string, domain: GameSystemCatalogDomain) {
  return PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES.find(
    (entry) => entry.original.contentId === contentId && DOMAIN_MAP[entry.original.domain] === domain,
  )
}

function preservePathfinderCurrencyAbbreviations(value: string) {
  return value
    .replace(/\b(?:po|gp)\b/gi, 'GP')
    .replace(/\b(?:pp|sp)\b/gi, 'SP')
    .replace(/\b(?:pc|cp)\b/gi, 'CP')
}

function formatPtBrNumber(value: number) {
  return Number.isInteger(value)
    ? String(value)
    : value.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
}

function formatDualDistance(feet: number) {
  const meters = feet * 0.3
  const feetUnit = feet === 1 ? 'pé' : 'pés'
  const meterUnit = meters === 1 ? 'metro' : 'metros'
  return `${formatPtBrNumber(feet)} ${feetUnit} (${formatPtBrNumber(meters)} ${meterUnit})`
}

function extractFeetValues(value: string | null) {
  if (!value) return []

  return [...value.matchAll(/(\d+(?:\.\d+)?)\s*-?\s*(?:feet|foot|ft)\b/gi)]
    .map((match) => Number(match[1]))
    .filter(Number.isFinite)
}

function preserveFeetAndAddMeters(
  originalValue: string | null,
  localizedValue: string | null,
  locale: GameSystemContentLocale,
) {
  if (locale !== 'pt-BR') return localizedValue ?? originalValue

  const feetValues = extractFeetValues(originalValue)
  if (feetValues.length === 0) return localizedValue ?? originalValue

  const baseValue = localizedValue ?? originalValue ?? ''
  let feetIndex = 0
  const withDualUnits = baseValue.replace(/\d+(?:[.,]\d+)?\s*metros?\b/gi, (metricValue) => {
    const feet = feetValues[feetIndex]
    if (feet === undefined) return metricValue
    feetIndex += 1
    return formatDualDistance(feet)
  })

  if (feetIndex > 0) return withDualUnits

  return baseValue.replace(/(\d+(?:\.\d+)?)\s*-?\s*(?:feet|foot|ft)\b/gi, (_, feetValue: string) => (
    formatDualDistance(Number(feetValue))
  ))
}

function localizeTraits(
  entry: Pathfinder2eContentEntry,
  domain: GameSystemCatalogDomain,
  locale: GameSystemContentLocale,
) {
  const data = asRecord(entry.original.data)
  const result = new Set(translatePathfinder2eTraits(asTextList(data.traits), locale, domain))
  const rarity = asText(data.rarity)

  if (rarity) result.add(translatePathfinder2eRarity(rarity, locale, domain))

  if (domain === 'SPELLS') {
    for (const tradition of asTextList(data.traditions)) {
      result.add(translatePathfinder2eTradition(tradition, locale, domain))
    }
  }

  return [...result]
}

function localizeStats(
  stats: GameSystemCatalogCard['stats'],
  domain: GameSystemCatalogDomain,
) {
  return stats?.map((stat) => ({
    ...stat,
    label: domain === 'SPELLS' && stat.label === 'Círculo' ? 'Rank' : stat.label,
    value: domain === 'ITEMS' && (stat.label === 'Preço' || stat.label === 'Price')
      ? preservePathfinderCurrencyAbbreviations(stat.value)
      : stat.value,
  }))
}

function localizeCard(
  card: GameSystemCatalogCard,
  domain: GameSystemCatalogDomain,
  locale: GameSystemContentLocale,
) {
  const entry = findEntry(card.id, domain)

  return {
    ...card,
    stats: localizeStats(card.stats, domain),
    traits: entry ? localizeTraits(entry, domain, locale) : card.traits,
  }
}

function localizeBestiaryAttacks(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
): readonly GameSystemCatalogSheetField[] {
  const data = asRecord(entry.original.data)
  const translated = translatedFields(entry, locale)
  const attacks = Array.isArray(data.attacks) ? data.attacks.map(asRecord) : []

  return attacks.map((attack) => {
    const id = asText(attack.id) ?? ''
    const translatedAttack = translatedNestedRecord(translated, 'attacks', id)
    const name = asText(translatedAttack.name) ?? asText(attack.name) ?? (locale === 'pt-BR' ? 'Ataque' : 'Attack')
    const bonus = asNumberText(attack.bonus)
    const damage = asText(translatedAttack.damage) ?? asText(attack.damage)
    const traits = translatePathfinder2eTraits(asTextList(attack.traits), locale, 'BESTIARY')
    const parts = [bonus ? `+${bonus}` : null, damage, traits.length ? traits.join(', ') : null]
      .filter((value): value is string => Boolean(value))

    return { label: name, value: parts.join(' · '), wide: true }
  })
}

function localizeSpellEffects(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
): readonly GameSystemCatalogSheetField[] {
  const data = asRecord(entry.original.data)
  const damages = Array.isArray(data.damage) ? data.damage.map(asRecord) : []

  return damages.map((damage, index) => {
    const formula = asText(damage.formula)
    const type = asText(damage.type)
    const kind = asText(damage.kind)
    const localizedType = type
      ? translatePathfinder2eTerm(type, locale, { domain: 'SPELLS', category: 'damage-type' })
      : null
    const localizedKind = kind
      ? translatePathfinder2eTerm(kind, locale, { domain: 'SPELLS', category: 'effect-kind' })
      : null
    const value = [formula, localizedType, localizedKind]
      .filter((part): part is string => Boolean(part))
      .join(' · ')

    return {
      label: `${locale === 'pt-BR' ? 'Efeito' : 'Effect'} ${index + 1}`,
      value,
      wide: true,
    }
  })
}

function localizeItemWeaponFields(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
): readonly GameSystemCatalogSheetField[] {
  const data = asRecord(entry.original.data)
  const translated = translatedFields(entry, locale)
  const damage = asRecord(data.damage)
  const dice = asNumberText(damage.dice)
  const die = asText(damage.die)
  const originalType = asText(damage.type)
  const translatedType = asText(translated.damageType)
  const localizedType = translatedType ?? (originalType
    ? translatePathfinder2eTerm(originalType, locale, { domain: 'ITEMS', category: 'damage-type' })
    : null)

  if (!dice || !die) return []

  return [{
    label: locale === 'pt-BR' ? 'Dano' : 'Damage',
    value: `${dice}${die}${localizedType ? ` ${localizedType}` : ''}`,
    wide: true,
  }]
}

function localizeSpellDistanceField(
  field: GameSystemCatalogSheetField,
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
) {
  const keyByLabel: Readonly<Record<string, string>> = {
    Alcance: 'range',
    Range: 'range',
    Alvo: 'target',
    Target: 'target',
    Área: 'area',
    Area: 'area',
  }
  const key = keyByLabel[field.label]
  if (!key) return field

  const original = asRecord(entry.original.data)
  const translated = translatedFields(entry, locale)
  const value = preserveFeetAndAddMeters(asText(original[key]), asText(translated[key]), locale)

  return value ? { ...field, value } : field
}

function localizeBestiaryMovementField(
  field: GameSystemCatalogSheetField,
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
) {
  if (field.label !== 'Deslocamento' && field.label !== 'Speed') return field

  const speedFeet = asNumber(asRecord(entry.original.data).speedFeet)
  if (speedFeet === null) return field

  return {
    ...field,
    value: locale === 'pt-BR' ? formatDualDistance(speedFeet) : `${speedFeet} ft`,
  }
}

function localizeSections(
  sheet: GameSystemCatalogSheet,
  entry: Pathfinder2eContentEntry | undefined,
  domain: GameSystemCatalogDomain,
  locale: GameSystemContentLocale,
) {
  return sheet.sections.map((section) => {
    if (entry && domain === 'BESTIARY' && section.title === 'Ataques') {
      return { ...section, fields: localizeBestiaryAttacks(entry, locale) }
    }

    if (entry && domain === 'SPELLS' && section.title === 'Dano ou cura') {
      return { ...section, fields: localizeSpellEffects(entry, locale) }
    }

    if (entry && domain === 'ITEMS' && section.title === 'Arma') {
      return { ...section, fields: localizeItemWeaponFields(entry, locale) }
    }

    return {
      ...section,
      fields: section.fields.map((field) => {
        let localizedField = field

        if (domain === 'SPELLS' && field.label === 'Círculo') {
          localizedField = { ...localizedField, label: 'Rank' }
        }

        if (entry && domain === 'SPELLS' && section.title === 'Conjuração') {
          localizedField = localizeSpellDistanceField(localizedField, entry, locale)
        }

        if (entry && domain === 'BESTIARY' && section.title === 'Percepção e movimento') {
          localizedField = localizeBestiaryMovementField(localizedField, entry, locale)
        }

        if (domain === 'ITEMS' && (field.label === 'Preço' || field.label === 'Price')) {
          localizedField = {
            ...localizedField,
            value: preservePathfinderCurrencyAbbreviations(localizedField.value),
          }
        }

        if (domain === 'BESTIARY' && section.title === 'Perícias e idiomas') {
          localizedField = {
            ...localizedField,
            label: translatePathfinder2eTerm(localizedField.label, locale, {
              domain: 'BESTIARY',
              category: 'skill',
            }),
          }
        }

        return localizedField
      }),
    }
  })
}

function localizeSheet(
  sheet: GameSystemCatalogSheet,
  domain: GameSystemCatalogDomain,
  locale: GameSystemContentLocale,
) {
  const entry = findEntry(sheet.id, domain)
  const card = localizeCard(sheet, domain, locale)

  return {
    ...sheet,
    ...card,
    sections: localizeSections(sheet, entry, domain, locale),
  }
}

export const pathfinder2eContextualCatalogProvider: GameSystemCatalogProvider = {
  async list(query) {
    const result = await pathfinder2eContentCatalogProvider.list(query)
    return {
      ...result,
      entries: result.entries.map((entry) => localizeCard(entry, query.domain, query.locale)),
    }
  },

  async get(query) {
    const sheet = await pathfinder2eContentCatalogProvider.get(query)
    return sheet ? localizeSheet(sheet, query.domain, query.locale) : null
  },
}
