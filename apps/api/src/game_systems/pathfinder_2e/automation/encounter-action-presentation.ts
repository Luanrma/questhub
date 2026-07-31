import type {
  GameSystemCharacterSheetEntrySnapshot,
  TokenActionPresentation,
} from '../../automation/contracts'
import {
  PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE,
  PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
  PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY,
  presentPathfinder2eCharacterSpell,
} from '../character-spells/domain'
import type { Pathfinder2eDerivedCharacterSheet } from '../character-sheet/derivation'
import type { Pathfinder2eCharacterSheetData } from '../character-sheet/schema'
import type { Pathfinder2eContentEntry } from '../content_catalog/content-entry'
import { PATHFINDER_2E_CONTENT_ENTRIES } from '../content_catalog/deliveries'
import {
  translatePathfinder2eGlossaryTerm,
  translatePathfinder2eTradition,
} from '../content_catalog/translations/pt-BR/glossary'
import { projectPathfinder2eSpellActivation } from './spell-spatial-profile'

const playerSkillLabels: Readonly<Record<keyof Pathfinder2eCharacterSheetData['skills'], string>> = {
  acrobatics: 'Acrobacia',
  arcana: 'Arcanismo',
  athletics: 'Atletismo',
  crafting: 'Manufatura',
  deception: 'Enganação',
  diplomacy: 'Diplomacia',
  intimidation: 'Intimidação',
  medicine: 'Medicina',
  nature: 'Natureza',
  occultism: 'Ocultismo',
  performance: 'Performance',
  religion: 'Religião',
  society: 'Sociedade',
  stealth: 'Furtividade',
  survival: 'Sobrevivência',
  thievery: 'Ladroagem',
}

type CatalogLocale = 'en-US' | 'pt-BR'

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {}
}

function asRecords(value: unknown) {
  return Array.isArray(value) ? value.map(asRecord) : []
}

function asText(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function asNumber(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function signed(value: number) {
  return value >= 0 ? `+${value}` : String(value)
}

function titleCase(value: string) {
  return value
    .replaceAll('-', ' ')
    .replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase('pt-BR'))
}

function abilityKindLabel(value: string, locale: CatalogLocale) {
  if (locale !== 'pt-BR') return titleCase(value)
  return ({
    action: 'Ação',
    reaction: 'Reação',
    passive: 'Passiva',
  } as const)[value as 'action' | 'reaction' | 'passive'] ?? titleCase(value)
}

function translatedNested(
  translatedFields: Record<string, unknown>,
  collection: string,
  id: string,
) {
  return asRecord(asRecord(translatedFields[collection])[id])
}

function mechanicalAction(
  id: string,
  label: string,
  group: string,
  detail: string | undefined,
  interaction: TokenActionPresentation['interaction'],
  context: 'ENCOUNTER' | 'REFERENCE',
  imageUrl?: string,
  activation?: TokenActionPresentation['activation'],
): TokenActionPresentation {
  return {
    id,
    label,
    group,
    detail,
    ...(imageUrl ? { imageUrl } : {}),
    interaction,
    visibility: 'OWNER_AND_MASTER',
    contexts: [context],
    ...(activation ? { activation } : {}),
  }
}

function interactionForSpellActivation(
  activation: TokenActionPresentation['activation'],
  fallback: TokenActionPresentation['interaction'],
): TokenActionPresentation['interaction'] {
  if (!activation) return fallback
  if (activation.kind === 'AREA_PLACEMENT') return 'area'
  if (activation.kind === 'TARGET_SELECTION') return 'target'
  return activation.variants.some((variant) => variant.activation.kind === 'AREA_PLACEMENT')
    ? 'area'
    : 'target'
}

export function buildPathfinder2ePlayerSkillActions(
  derived: Pathfinder2eDerivedCharacterSheet,
): readonly TokenActionPresentation[] {
  return (Object.keys(playerSkillLabels) as Array<keyof typeof playerSkillLabels>)
    .map((skill) => mechanicalAction(
      `skill:${skill}`,
      playerSkillLabels[skill],
      'Perícias',
      signed(derived.skills[skill].value),
      'roll',
      'REFERENCE',
    ))
}

export function buildPathfinder2eCharacterSpellActions(
  entries: readonly GameSystemCharacterSheetEntrySnapshot[],
  locale: CatalogLocale,
): readonly TokenActionPresentation[] {
  return entries.flatMap((entry) => {
    if (
      entry.namespace !== PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE
      || entry.typeKey !== PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY
      || entry.catalogNamespace !== PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE
    ) {
      return []
    }

    const spell = presentPathfinder2eCharacterSpell(entry, locale)
    if (!spell) return []

    const cantrip = spell.traits.some((trait) => trait.toLocaleLowerCase('en-US') === 'cantrip')
    const rankLabel = cantrip && locale === 'pt-BR'
      ? `Truque · Rank ${spell.baseRank}`
      : `Rank ${spell.baseRank}`
    const traditions = spell.traditions.map(titleCase).join(', ')
    const detail = [rankLabel, traditions || null]
      .filter((value): value is string => Boolean(value))
      .join(' · ')
    const activation = projectPathfinder2eSpellActivation(spell)

    return [mechanicalAction(
      `spell:${spell.id}`,
      spell.name,
      locale === 'pt-BR' ? 'Magias' : 'Spells',
      detail || undefined,
      interactionForSpellActivation(activation, spell.area ? 'area' : 'target'),
      'ENCOUNTER',
      spell.imageUrl ?? undefined,
      activation,
    )]
  })
}

function catalogSkillActions(
  data: Record<string, unknown>,
  locale: CatalogLocale,
) {
  return Object.entries(asRecord(data.skills))
    .flatMap(([skill, rawModifier]) => {
      const modifier = asNumber(rawModifier)
      if (modifier === null) return []
      const translated = translatePathfinder2eGlossaryTerm(
        skill,
        locale,
        { category: 'skill', domain: 'BESTIARY' },
      )
      return [mechanicalAction(
        `skill:${skill}`,
        titleCase(translated),
        locale === 'pt-BR' ? 'Perícias' : 'Skills',
        signed(modifier),
        'roll',
        'REFERENCE',
      )]
    })
}

function catalogAttackActions(
  data: Record<string, unknown>,
  translatedFields: Record<string, unknown>,
  locale: CatalogLocale,
) {
  return asRecords(data.attacks).flatMap((attack, index) => {
    const id = asText(attack.id) ?? String(index)
    const translated = translatedNested(translatedFields, 'attacks', id)
    const label = asText(translated.name) ?? asText(attack.name)
    if (!label) return []
    const bonus = asNumber(attack.bonus)
    const damage = asText(translated.damage) ?? asText(attack.damage)
    const detail = [
      bonus === null ? null : signed(bonus),
      damage,
    ].filter((value): value is string => Boolean(value)).join(' · ') || undefined

    return [mechanicalAction(
      `attack:${id}`,
      label,
      locale === 'pt-BR' ? 'Ataques' : 'Attacks',
      detail,
      'target',
      'ENCOUNTER',
    )]
  })
}

function catalogAbilityActions(
  data: Record<string, unknown>,
  translatedFields: Record<string, unknown>,
  locale: CatalogLocale,
) {
  return asRecords(data.actions).flatMap((action, index) => {
    const id = asText(action.id) ?? String(index)
    const translated = translatedNested(translatedFields, 'actions', id)
    const label = asText(translated.name) ?? asText(action.name)
    if (!label) return []
    const kind = asText(action.kind)

    return [mechanicalAction(
      `ability:${id}`,
      label,
      locale === 'pt-BR' ? 'Habilidades' : 'Abilities',
      kind ? abilityKindLabel(kind, locale) : undefined,
      'instant',
      'ENCOUNTER',
    )]
  })
}

function catalogSpellActions(
  data: Record<string, unknown>,
  translatedFields: Record<string, unknown>,
  locale: CatalogLocale,
) {
  return asRecords(data.spellcasting).flatMap((spellcasting, spellcastingIndex) => {
    const spellcastingId = asText(spellcasting.id) ?? String(spellcastingIndex)
    const translatedSpellcasting = translatedNested(
      translatedFields,
      'spellcasting',
      spellcastingId,
    )
    const translatedSpells = asRecord(translatedSpellcasting.spells)
    const tradition = asText(spellcasting.tradition)
    const traditionLabel = tradition
      ? translatePathfinder2eTradition(tradition, locale, 'BESTIARY')
      : null

    return asRecords(spellcasting.spells).flatMap((spell, spellIndex) => {
      const id = asText(spell.id) ?? `${spellcastingId}:${spellIndex}`
      const translatedSpell = asRecord(translatedSpells[id])
      const label = asText(translatedSpell.name) ?? asText(spell.name)
      if (!label) return []
      const rank = asNumber(spell.rank)
      const detail = [
        rank === null ? null : `Rank ${rank}`,
        traditionLabel,
      ].filter((value): value is string => Boolean(value)).join(' · ') || undefined

      return [mechanicalAction(
        `spell:${spellcastingId}:${id}`,
        label,
        locale === 'pt-BR' ? 'Magias' : 'Spells',
        detail,
        'target',
        'ENCOUNTER',
      )]
    })
  })
}

export function findPathfinder2eCatalogTokenEntry(
  contentId: string,
): Pathfinder2eContentEntry | null {
  return PATHFINDER_2E_CONTENT_ENTRIES.find(
    (entry) => entry.original.domain === 'BESTIARY'
      && entry.original.contentId === contentId,
  ) ?? null
}

export function buildPathfinder2eCatalogTokenActions(
  entry: Pathfinder2eContentEntry,
  locale: CatalogLocale,
): readonly TokenActionPresentation[] {
  if (entry.original.domain !== 'BESTIARY') return []
  const data = asRecord(entry.original.data)
  if (data.entryType === 'HAZARD') return []
  const translatedFields = locale === 'pt-BR' ? asRecord(entry.translation.fields) : {}

  return [
    ...catalogSkillActions(data, locale),
    ...catalogAttackActions(data, translatedFields, locale),
    ...catalogAbilityActions(data, translatedFields, locale),
    ...catalogSpellActions(data, translatedFields, locale),
  ]
}
