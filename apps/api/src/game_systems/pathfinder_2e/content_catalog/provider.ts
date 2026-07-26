import type {
  GameSystemCatalogCard,
  GameSystemCatalogDomain,
  GameSystemCatalogEditorialStatus,
  GameSystemCatalogProvider,
  GameSystemCatalogSheet,
  GameSystemCatalogSheetField,
  GameSystemContentLocale,
} from '../../catalog'
import { resolvePathfinder2eContentEntry } from './catalog'
import { matchesPathfinder2eBestiaryFilter } from './bestiary-filter'
import type { Pathfinder2eContentEntry } from './content-entry'
import { PATHFINDER_2E_CONTENT_ENTRIES } from './deliveries'
import {
  resolvePathfinder2eInlineText,
  type Pathfinder2eInlineTextContext,
} from './inline-text'
import { localizePathfinder2eSpellDefense } from './spell-defense'
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

function asModifierText(value: unknown): string | null {
  const number = asNumber(value)
  if (number === null) return null
  return number >= 0 ? `+${number}` : String(number)
}

function asTextList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === 'string' && entry.trim().length > 0)
    : []
}

function addStat(stats: Array<{ label: string; value: string }>, label: string, value: string | null) {
  if (value) stats.push({ label, value })
}

function field(label: string, value: string | null, wide = false): GameSystemCatalogSheetField | null {
  if (!value) return null
  return { label, value, wide }
}

function fields(values: Array<GameSystemCatalogSheetField | null>) {
  return values.filter((value): value is GameSystemCatalogSheetField => Boolean(value))
}

function translatedFields(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale) {
  return locale === 'pt-BR' ? asRecord(entry.translation.fields) : {}
}

function inlineTextContext(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
): Pathfinder2eInlineTextContext {
  const data = asRecord(entry.original.data)
  const abilities = asRecord(data.abilities)

  return {
    locale,
    itemLevel: asNumber(data.level) ?? asNumber(data.rank) ?? undefined,
    itemRank: asNumber(data.rank) ?? asNumber(data.level) ?? undefined,
    actorLevel: asNumber(data.level) ?? undefined,
    actorStrengthModifier: asNumber(abilities.str) ?? undefined,
  }
}

function presentedText(
  value: string | null,
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
) {
  return value ? resolvePathfinder2eInlineText(value, inlineTextContext(entry, locale)) : null
}

function localizedString(
  original: Record<string, unknown>,
  translated: Record<string, unknown>,
  key: string,
) {
  return asText(translated[key]) ?? asText(original[key])
}

function localizedMappedList(
  originalValues: readonly string[],
  translatedValue: unknown,
  locale: GameSystemContentLocale,
) {
  if (locale !== 'pt-BR') return [...originalValues]
  if (Array.isArray(translatedValue)) return asTextList(translatedValue)

  const translatedMap = asRecord(translatedValue)
  return originalValues.map((value) => asText(translatedMap[value]) ?? translatePathfinder2eTerm(value, locale))
}

function formatPrice(value: unknown, locale: GameSystemContentLocale) {
  const price = asRecord(value)
  const parts: string[] = []
  const labels = locale === 'pt-BR'
    ? { gp: 'po', sp: 'pp', cp: 'pc' }
    : { gp: 'gp', sp: 'sp', cp: 'cp' }

  for (const key of ['gp', 'sp', 'cp'] as const) {
    const amount = asNumber(price[key])
    if (amount !== null && amount > 0) parts.push(`${amount} ${labels[key]}`)
  }

  return parts.join(' ') || null
}

function formatBulk(value: unknown, locale: GameSystemContentLocale) {
  const bulk = asNumber(value)
  if (bulk === null) return null
  if (bulk === 0.1) return locale === 'pt-BR' ? 'Leve' : 'Light'
  return String(bulk)
}

function editorialStatus(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
): GameSystemCatalogEditorialStatus | null {
  if (locale !== 'pt-BR') return null
  if (entry.translation.status === 'REVIEWED') return { label: 'Tradução revisada', tone: 'ready' }
  return { label: 'Tradução em revisão', tone: 'review' }
}

function buildTraits(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale) {
  const data = asRecord(entry.original.data)
  const result = new Set(translatePathfinder2eTraits(asTextList(data.traits), locale))
  const rarity = asText(data.rarity)
  if (rarity) result.add(translatePathfinder2eRarity(rarity, locale))

  if (entry.original.domain === 'SPELL') {
    for (const tradition of asTextList(data.traditions)) {
      result.add(translatePathfinder2eTradition(tradition, locale))
    }
  }

  return [...result]
}

function buildCard(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale): GameSystemCatalogCard {
  const resolved = resolvePathfinder2eContentEntry(entry, locale)
  const data = asRecord(resolved.original)
  const translated = translatedFields(entry, locale)
  const stats: Array<{ label: string; value: string }> = []

  if (entry.original.domain === 'BESTIARY') {
    addStat(stats, 'Nível', asNumberText(data.level))
    if (data.entryType === 'HAZARD') {
      const stealth = asRecord(data.stealth)
      addStat(
        stats,
        locale === 'pt-BR' ? 'Tipo' : 'Type',
        data.isComplex === true
          ? (locale === 'pt-BR' ? 'Perigo complexo' : 'Complex hazard')
          : (locale === 'pt-BR' ? 'Perigo simples' : 'Simple hazard'),
      )
      addStat(stats, locale === 'pt-BR' ? 'Furtividade' : 'Stealth', asModifierText(stealth.modifier))
      addStat(stats, 'CA', asNumberText(data.armorClass))
      addStat(stats, 'PV', asNumberText(data.hitPoints))
      addStat(stats, locale === 'pt-BR' ? 'Dureza' : 'Hardness', asNumberText(data.hardness))
    } else {
      addStat(stats, 'CA', asNumberText(data.armorClass))
      addStat(stats, 'PV', asNumberText(data.hitPoints))
      addStat(stats, locale === 'pt-BR' ? 'Tamanho' : 'Size', localizedString(data, translated, 'size'))
    }
  }

  if (entry.original.domain === 'SPELL') {
    addStat(stats, locale === 'pt-BR' ? 'Círculo' : 'Rank', asNumberText(data.rank))
    addStat(stats, locale === 'pt-BR' ? 'Conjuração' : 'Casting', localizedString(data, translated, 'castingTime'))
  }

  if (entry.original.domain === 'ITEM') {
    addStat(stats, 'Nível', asNumberText(data.level))
    addStat(stats, 'Categoria', localizedString(data, translated, 'category'))
    addStat(stats, 'Preço', formatPrice(data.price, locale))
    addStat(stats, 'Volume', formatBulk(data.bulk, locale))
  }

  return {
    id: resolved.contentId,
    name: resolved.display.name,
    subtitle: entry.original.source.publicationTitle ?? entry.original.source.sourcePack,
    description: presentedText(resolved.display.description, entry, locale) ?? '',
    imageUrl: null,
    traits: buildTraits(entry, locale),
    editorialStatus: editorialStatus(entry, locale),
    stats,
  }
}

function translatedNestedRecord(translated: Record<string, unknown>, key: string, id: string) {
  return asRecord(asRecord(translated[key])[id])
}

function hazardSheet(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
  card: GameSystemCatalogCard,
): GameSystemCatalogSheet {
  const data = asRecord(entry.original.data)
  const translated = translatedFields(entry, locale)
  const stealth = asRecord(data.stealth)
  const saves = asRecord(data.saves)
  const defenses = asRecord(data.defenses)
  const translatedDefenses = asRecord(translated.defenses)
  const actions = Array.isArray(data.actions) ? data.actions.map(asRecord) : []

  const actionFields = actions.map((action) => {
    const id = asText(action.id) ?? ''
    const translatedAction = translatedNestedRecord(translated, 'actions', id)
    const name = asText(translatedAction.name) ?? asText(action.name)
      ?? (locale === 'pt-BR' ? 'Ação' : 'Action')
    const description = presentedText(
      asText(translatedAction.description) ?? asText(action.description),
      entry,
      locale,
    )
    const traits = translatePathfinder2eTraits(asTextList(action.traits), locale)
    const value = [traits.length ? traits.join(', ') : null, description]
      .filter((part): part is string => Boolean(part))
      .join(' · ')

    return field(name, value || null, true)
  })

  return {
    ...card,
    sections: [
      {
        title: locale === 'pt-BR' ? 'Detecção' : 'Detection',
        fields: fields([
          field(
            locale === 'pt-BR' ? 'Furtividade' : 'Stealth',
            asModifierText(stealth.modifier),
          ),
          field(
            locale === 'pt-BR' ? 'Requisitos de detecção' : 'Detection requirements',
            presentedText(
              asText(translated.stealthDetails) ?? asText(stealth.details),
              entry,
              locale,
            ),
            true,
          ),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Desarme' : 'Disable',
        fields: fields([
          field(
            locale === 'pt-BR' ? 'Procedimento' : 'Procedure',
            presentedText(asText(translated.disable) ?? asText(data.disable), entry, locale),
            true,
          ),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Defesas' : 'Defenses',
        fields: fields([
          field('CA', asNumberText(data.armorClass)),
          field('PV', asNumberText(data.hitPoints)),
          field(locale === 'pt-BR' ? 'Dureza' : 'Hardness', asNumberText(data.hardness)),
          field('Fortitude', asModifierText(saves.fortitude)),
          field(locale === 'pt-BR' ? 'Reflexos' : 'Reflex', asModifierText(saves.reflex)),
          field(locale === 'pt-BR' ? 'Vontade' : 'Will', asModifierText(saves.will)),
          field(
            locale === 'pt-BR' ? 'Imunidades' : 'Immunities',
            localizedMappedList(
              asTextList(defenses.immunities),
              translatedDefenses.immunities,
              locale,
            ).join(', ') || null,
            true,
          ),
          field(
            locale === 'pt-BR' ? 'Resistências' : 'Resistances',
            localizedMappedList(
              asTextList(defenses.resistances),
              translatedDefenses.resistances,
              locale,
            ).join(', ') || null,
            true,
          ),
          field(
            locale === 'pt-BR' ? 'Fraquezas' : 'Weaknesses',
            localizedMappedList(
              asTextList(defenses.weaknesses),
              translatedDefenses.weaknesses,
              locale,
            ).join(', ') || null,
            true,
          ),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Comportamento' : 'Behavior',
        fields: fields([
          field(
            locale === 'pt-BR' ? 'Rotina' : 'Routine',
            presentedText(asText(translated.routine) ?? asText(data.routine), entry, locale),
            true,
          ),
          field(
            locale === 'pt-BR' ? 'Reinicialização' : 'Reset',
            presentedText(asText(translated.reset) ?? asText(data.reset), entry, locale),
            true,
          ),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Ações e reações' : 'Actions and reactions',
        fields: fields(actionFields),
      },
    ].filter((section) => section.fields.length > 0),
    source: {
      publication: entry.original.source.publicationTitle,
      license: entry.original.source.license,
    },
  }
}

function bestiarySheet(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
  card: GameSystemCatalogCard,
): GameSystemCatalogSheet {
  const data = asRecord(entry.original.data)
  if (data.entryType === 'HAZARD') return hazardSheet(entry, locale, card)

  const translated = translatedFields(entry, locale)
  const perception = asRecord(data.perception)
  const saves = asRecord(data.saves)
  const abilities = asRecord(data.abilities)
  const defenses = asRecord(data.defenses)
  const translatedDefenses = asRecord(translated.defenses)

  const attacks = Array.isArray(data.attacks) ? data.attacks.map(asRecord) : []
  const actions = Array.isArray(data.actions) ? data.actions.map(asRecord) : []
  const spellcasting = Array.isArray(data.spellcasting) ? data.spellcasting.map(asRecord) : []

  const attackFields = attacks.map((attack) => {
    const id = asText(attack.id) ?? ''
    const translatedAttack = translatedNestedRecord(translated, 'attacks', id)
    const name = asText(translatedAttack.name) ?? asText(attack.name) ?? 'Ataque'
    const bonus = asNumberText(attack.bonus)
    const damage = asText(translatedAttack.damage) ?? asText(attack.damage)
    const traits = translatePathfinder2eTraits(asTextList(attack.traits), locale)
    const parts = [bonus ? `+${bonus}` : null, damage, traits.length ? traits.join(', ') : null]
      .filter((value): value is string => Boolean(value))
    return field(name, parts.join(' · '), true)
  })

  const actionFields = actions.map((action) => {
    const id = asText(action.id) ?? ''
    const translatedAction = translatedNestedRecord(translated, 'actions', id)
    const name = asText(translatedAction.name) ?? asText(action.name) ?? 'Ação'
    const description = presentedText(
      asText(translatedAction.description) ?? asText(action.description),
      entry,
      locale,
    )
    return field(name, description, true)
  })

  const spellcastingFields = spellcasting.map((entry) => {
    const id = asText(entry.id) ?? ''
    const translatedEntry = translatedNestedRecord(translated, 'spellcasting', id)
    const translatedSpells = asRecord(translatedEntry.spells)
    const spells = Array.isArray(entry.spells) ? entry.spells.map(asRecord) : []
    const header = [
      asText(entry.tradition)
        ? translatePathfinder2eTradition(asText(entry.tradition) ?? '', locale)
        : null,
      asText(translatedEntry.category) ?? asText(entry.category),
      asNumberText(entry.saveDc) ? `DC ${asNumberText(entry.saveDc)}` : null,
      asNumberText(entry.attackModifier) ? `+${asNumberText(entry.attackModifier)}` : null,
    ].filter((value): value is string => Boolean(value))
    const spellList = spells.map((spell) => {
      const spellId = asText(spell.id) ?? ''
      const translatedSpell = asRecord(translatedSpells[spellId])
      const name = asText(translatedSpell.name) ?? asText(spell.name) ?? 'Spell'
      return `Rank ${asNumberText(spell.rank) ?? '0'}: ${name}`
    })
    const name = asText(translatedEntry.name) ?? asText(entry.name) ?? 'Spellcasting'
    return field(name, [...header, ...spellList].join(' · '), true)
  })

  return {
    ...card,
    sections: [
      {
        title: locale === 'pt-BR' ? 'Defesas' : 'Defenses',
        fields: fields([
          field('CA', asNumberText(data.armorClass)),
          field('PV', asNumberText(data.hitPoints)),
          field(locale === 'pt-BR' ? 'Fortitude' : 'Fortitude', asNumberText(saves.fortitude)),
          field(locale === 'pt-BR' ? 'Reflexos' : 'Reflex', asNumberText(saves.reflex)),
          field(locale === 'pt-BR' ? 'Vontade' : 'Will', asNumberText(saves.will)),
          field(
            locale === 'pt-BR' ? 'Imunidades' : 'Immunities',
            localizedMappedList(asTextList(defenses.immunities), translatedDefenses.immunities, locale).join(', ') || null,
            true,
          ),
          field(
            locale === 'pt-BR' ? 'Resistências' : 'Resistances',
            localizedMappedList(asTextList(defenses.resistances), translatedDefenses.resistances, locale).join(', ') || null,
            true,
          ),
          field(
            locale === 'pt-BR' ? 'Fraquezas' : 'Weaknesses',
            localizedMappedList(asTextList(defenses.weaknesses), translatedDefenses.weaknesses, locale).join(', ') || null,
            true,
          ),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Percepção e movimento' : 'Perception and movement',
        fields: fields([
          field(locale === 'pt-BR' ? 'Percepção' : 'Perception', asNumberText(perception.modifier)),
          field(
            locale === 'pt-BR' ? 'Sentidos' : 'Senses',
            localizedMappedList(asTextList(perception.senses), translated.senses, locale).join(', ') || null,
            true,
          ),
          field(locale === 'pt-BR' ? 'Deslocamento' : 'Speed', asNumberText(data.speedFeet) ? `${asNumberText(data.speedFeet)} ft` : null),
          field(locale === 'pt-BR' ? 'Tamanho' : 'Size', localizedString(data, translated, 'size')),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Atributos' : 'Abilities',
        fields: fields([
          field(locale === 'pt-BR' ? 'Força' : 'Strength', asNumberText(abilities.str)),
          field(locale === 'pt-BR' ? 'Destreza' : 'Dexterity', asNumberText(abilities.dex)),
          field(locale === 'pt-BR' ? 'Constituição' : 'Constitution', asNumberText(abilities.con)),
          field(locale === 'pt-BR' ? 'Inteligência' : 'Intelligence', asNumberText(abilities.int)),
          field(locale === 'pt-BR' ? 'Sabedoria' : 'Wisdom', asNumberText(abilities.wis)),
          field(locale === 'pt-BR' ? 'Carisma' : 'Charisma', asNumberText(abilities.cha)),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Perícias e idiomas' : 'Skills and languages',
        fields: fields([
          ...Object.entries(asRecord(data.skills)).map(([name, value]) => field(name, asNumberText(value))),
          field(
            locale === 'pt-BR' ? 'Idiomas' : 'Languages',
            localizedMappedList(asTextList(data.languages), translated.languages, locale).join(', ') || null,
            true,
          ),
        ]),
      },
      { title: locale === 'pt-BR' ? 'Ataques' : 'Attacks', fields: fields(attackFields) },
      { title: locale === 'pt-BR' ? 'Conjuração' : 'Spellcasting', fields: fields(spellcastingFields) },
      { title: locale === 'pt-BR' ? 'Ações e habilidades' : 'Actions and abilities', fields: fields(actionFields) },
    ].filter((section) => section.fields.length > 0),
    source: {
      publication: entry.original.source.publicationTitle,
      license: entry.original.source.license,
    },
  }
}

function spellSheet(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
  card: GameSystemCatalogCard,
): GameSystemCatalogSheet {
  const data = asRecord(entry.original.data)
  const translated = translatedFields(entry, locale)
  const damages = Array.isArray(data.damage) ? data.damage.map(asRecord) : []

  return {
    ...card,
    sections: [
      {
        title: locale === 'pt-BR' ? 'Conjuração' : 'Casting',
        fields: fields([
          field(locale === 'pt-BR' ? 'Círculo' : 'Rank', asNumberText(data.rank)),
          field(locale === 'pt-BR' ? 'Tempo de conjuração' : 'Casting time', localizedString(data, translated, 'castingTime')),
          field(locale === 'pt-BR' ? 'Alcance' : 'Range', localizedString(data, translated, 'range')),
          field(locale === 'pt-BR' ? 'Alvo' : 'Target', localizedString(data, translated, 'target'), true),
          field(locale === 'pt-BR' ? 'Área' : 'Area', localizedString(data, translated, 'area'), true),
          field(locale === 'pt-BR' ? 'Duração' : 'Duration', localizedString(data, translated, 'duration')),
          field(
            locale === 'pt-BR' ? 'Defesa' : 'Defense',
            localizePathfinder2eSpellDefense(
              asText(data.defense),
              asText(translated.defense),
              locale,
            ),
            true,
          ),
          field(
            locale === 'pt-BR' ? 'Tradições' : 'Traditions',
            asTextList(data.traditions).map((value) => translatePathfinder2eTradition(value, locale)).join(', '),
            true,
          ),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Dano ou cura' : 'Damage or healing',
        fields: fields(damages.map((damage, index) => {
          const formula = presentedText(asText(damage.formula), entry, locale)
          const type = asText(damage.type)
          const kind = asText(damage.kind)
          const value = [formula, type ? translatePathfinder2eTerm(type, locale) : null, kind]
            .filter((part): part is string => Boolean(part))
            .join(' · ')
          return field(`${locale === 'pt-BR' ? 'Efeito' : 'Effect'} ${index + 1}`, value, true)
        })),
      },
      {
        title: locale === 'pt-BR' ? 'Aprimoramento' : 'Heightening',
        fields: fields([
          field(
            locale === 'pt-BR' ? 'Efeito aprimorado' : 'Heightened effect',
            presentedText(localizedString(data, translated, 'heightening'), entry, locale),
            true,
          ),
        ]),
      },
    ].filter((section) => section.fields.length > 0),
    source: {
      publication: entry.original.source.publicationTitle,
      license: entry.original.source.license,
    },
  }
}

function itemSheet(
  entry: Pathfinder2eContentEntry,
  locale: GameSystemContentLocale,
  card: GameSystemCatalogCard,
): GameSystemCatalogSheet {
  const data = asRecord(entry.original.data)
  const translated = translatedFields(entry, locale)
  const damage = asRecord(data.damage)
  const armor = asRecord(data.armor)
  const translatedDamageType = asText(translated.damageType)
  const originalDamageType = asText(damage.type)

  return {
    ...card,
    sections: [
      {
        title: locale === 'pt-BR' ? 'Informações do item' : 'Item information',
        fields: fields([
          field(locale === 'pt-BR' ? 'Tipo' : 'Type', localizedString(data, translated, 'itemType')),
          field('Nível', asNumberText(data.level)),
          field(locale === 'pt-BR' ? 'Preço' : 'Price', formatPrice(data.price, locale)),
          field(locale === 'pt-BR' ? 'Volume' : 'Bulk', formatBulk(data.bulk, locale)),
          field(locale === 'pt-BR' ? 'Uso' : 'Usage', localizedString(data, translated, 'usage'), true),
          field(locale === 'pt-BR' ? 'Categoria' : 'Category', localizedString(data, translated, 'category')),
          field(locale === 'pt-BR' ? 'Grupo' : 'Group', localizedString(data, translated, 'group')),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Arma' : 'Weapon',
        fields: fields([
          field(
            locale === 'pt-BR' ? 'Dano' : 'Damage',
            asNumberText(damage.dice) && asText(damage.die)
              ? `${asNumberText(damage.dice)}${asText(damage.die)} ${translatedDamageType ?? (originalDamageType ? translatePathfinder2eTerm(originalDamageType, locale) : '')}`.trim()
              : null,
            true,
          ),
        ]),
      },
      {
        title: locale === 'pt-BR' ? 'Armadura' : 'Armor',
        fields: fields([
          field(locale === 'pt-BR' ? 'Bônus de CA' : 'AC bonus', asNumberText(armor.armorClassBonus)),
          field(locale === 'pt-BR' ? 'Limite de Destreza' : 'Dexterity cap', asNumberText(armor.dexterityCap)),
          field(locale === 'pt-BR' ? 'Penalidade de teste' : 'Check penalty', asNumberText(armor.checkPenalty)),
          field(locale === 'pt-BR' ? 'Penalidade de deslocamento' : 'Speed penalty', asNumberText(armor.speedPenaltyFeet)),
        ]),
      },
    ].filter((section) => section.fields.length > 0),
    source: {
      publication: entry.original.source.publicationTitle,
      license: entry.original.source.license,
    },
  }
}

function buildSheet(entry: Pathfinder2eContentEntry, locale: GameSystemContentLocale) {
  const card = buildCard(entry, locale)
  if (entry.original.domain === 'BESTIARY') return bestiarySheet(entry, locale, card)
  if (entry.original.domain === 'SPELL') return spellSheet(entry, locale, card)
  return itemSheet(entry, locale, card)
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
    ...buildTraits(entry, locale),
  ]
    .filter((value): value is string => Boolean(value))
    .join(' ')
    .toLocaleLowerCase(locale)
}

export const pathfinder2eContentCatalogProvider: GameSystemCatalogProvider = {
  list(query) {
    const normalizedSearch = query.search?.trim().toLocaleLowerCase(query.locale) ?? ''
    const matching = PATHFINDER_2E_CONTENT_ENTRIES
      .filter((entry) => DOMAIN_MAP[entry.original.domain] === query.domain)
      .filter((entry) => matchesPathfinder2eBestiaryFilter(entry, query.domain, query.bestiaryType))
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

  get(query) {
    const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
      (candidate) => candidate.original.contentId === query.contentId
        && DOMAIN_MAP[candidate.original.domain] === query.domain,
    )

    return entry ? buildSheet(entry, query.locale) : null
  },
}
