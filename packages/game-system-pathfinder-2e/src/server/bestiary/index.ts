import type {
  GameSystemBestiaryAdapter,
  GameSystemBestiaryCreature,
  GameSystemBestiaryEntry,
  GameSystemBestiarySheet,
  GameSystemBestiarySheetEntry,
  GameSystemBestiarySheetSection,
} from '../../../../game-system-core/src/server/bestiary'
import { PATHFINDER_2E_BESTIARY_DATA, PATHFINDER_2E_BESTIARY_HAZARD_DATA, PATHFINDER_2E_BESTIARY_SOURCE_SUMMARY } from './data.generated'

type Pathfinder2eBestiarySheetAttack = {
  name: string
  bonus: number
  damage: string
  traits: string[]
}

type Pathfinder2eBestiarySheetAction = {
  name: string
  kind: 'action' | 'reaction' | 'free' | 'passive'
  traits: string[]
  detail?: string
}

type Pathfinder2eBestiarySheetTranslation = {
  labels?: {
    sections?: Record<string, string>
    entries?: Record<string, string>
    skills?: Record<string, string>
    actionKinds?: Partial<Record<Pathfinder2eBestiarySheetAction['kind'], string>>
  }
  perception?: {
    senses?: string[]
  }
  saves?: {
    detail?: string
  }
  movement?: {
    other?: string[]
  }
  languages?: {
    values?: string[]
    detail?: string
  }
  defenses?: {
    immunities?: string[]
    resistances?: string[]
    weaknesses?: string[]
  }
  attacks?: Array<{
    name?: string
    damage?: string
    traits?: string[]
  }>
  actions?: Array<{
    name?: string
    kindLabel?: string
    traits?: string[]
    detail?: string
  }>
  notes?: string
}

type Pathfinder2eBestiarySheet = {
  perception: {
    modifier: number
    senses: string[]
  }
  saves: {
    fortitude: number
    reflex: number
    will: number
    detail?: string
  }
  abilities: {
    str: number
    dex: number
    con: number
    int: number
    wis: number
    cha: number
  }
  skills: Record<string, number>
  movement: {
    land: number
    other: string[]
  }
  languages: {
    values: string[]
    detail?: string
  }
  defenses?: {
    immunities?: string[]
    resistances?: string[]
    weaknesses?: string[]
  }
  attacks: Pathfinder2eBestiarySheetAttack[]
  actions: Pathfinder2eBestiarySheetAction[]
  notes?: string
  translations?: {
    ptBR?: Pathfinder2eBestiarySheetTranslation
  }
}

export type Pathfinder2eBestiaryCreatureData = {
  id: string
  system: 'PATHFINDER_2E'
  category: 'npc'
  sourcePack: string
  sourceId: string
  name: string
  level: number
  rarity: string
  size: string
  traits: string[]
  translations?: {
    ptBR?: {
      name?: string
      rarity?: string
      size?: string
      traits?: string[]
    }
  }
  armorClass: number
  hitPoints: number
  speed: number
  publicationTitle: string
  remaster: boolean
  license: string
  token: {
    imageUrl: string | null
    fallbackInitials: string
    borderColor: string
  }
  sheet: Pathfinder2eBestiarySheet
}

type Pathfinder2eBestiaryHazardSheet = {
  defenses: {
    armorClass: number
    hardness: number
    hitPoints: number
    stealth: number
    stealthDetail?: string
    fortitude: number
    reflex: number
    will: number
  }
  disable?: string
  routine?: string
  reset?: string
  description?: string
  actions: Pathfinder2eBestiarySheetAction[]
}

export type Pathfinder2eBestiaryHazardData = {
  id: string
  system: 'PATHFINDER_2E'
  category: 'hazard'
  sourcePack: string
  sourceId: string
  name: string
  level: number
  rarity: string
  traits: string[]
  isComplex: boolean
  publicationTitle: string
  remaster: boolean
  license: string
  token: {
    imageUrl: string | null
    fallbackInitials: string
    borderColor: string
  }
  sheet: Pathfinder2eBestiaryHazardSheet
}

type Pathfinder2eBestiaryEntryData = Pathfinder2eBestiaryCreatureData | Pathfinder2eBestiaryHazardData

function formatLevel(level: number) {
  if (level < 0) return `${level}`
  return `+${level}`
}

function formatModifier(value: number) {
  return value >= 0 ? `+${value}` : String(value)
}

function labelize(value: string) {
  return value
    .split('-')
    .map((part) => (part ? `${part[0].toLocaleUpperCase()}${part.slice(1)}` : part))
    .join(' ')
}

function compactEntries(entries: Array<GameSystemBestiarySheetEntry | null | undefined>) {
  return entries.filter((entry): entry is GameSystemBestiarySheetEntry => Boolean(entry))
}

function recordEntries(record: Record<string, number>, labels?: Record<string, string>) {
  return Object.entries(record)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => ({ key, label: labels?.[key] ?? labelize(key), value: formatModifier(value) }))
}

function joinList(values: string[]) {
  return values.length > 0 ? values.join(', ') : undefined
}

const PT_BR_SHEET_LABELS: Required<NonNullable<Pathfinder2eBestiarySheetTranslation['labels']>> = {
  sections: {
    defenses: 'Defesas',
    attributes: 'Atributos',
    skills: 'Pericias',
    movement: 'Movimento e sentidos',
    attacks: 'Ataques',
    actions: 'Acoes',
    notes: 'Notas',
  },
  entries: {
    perception: 'Percepcao',
    fortitude: 'Fortitude',
    reflex: 'Reflexos',
    will: 'Vontade',
    immunities: 'Imunidades',
    resistances: 'Resistencias',
    weaknesses: 'Fraquezas',
    land: 'Terrestre',
    other: 'Outro',
    languages: 'Idiomas',
    'public-notes': 'Resumo',
  },
  skills: {
    acrobatics: 'Acrobacia',
    athletics: 'Atletismo',
    deception: 'Enganacao',
    diplomacy: 'Diplomacia',
    intimidation: 'Intimidacao',
    nature: 'Natureza',
    religion: 'Religiao',
    society: 'Sociedade',
    stealth: 'Furtividade',
    survival: 'Sobrevivencia',
  },
  actionKinds: {
    action: 'Acao',
    reaction: 'Reacao',
    free: 'Acao livre',
    passive: 'Passiva',
  },
}

function getSectionTitle(key: string, translation?: Pathfinder2eBestiarySheetTranslation) {
  return translation?.labels?.sections?.[key] ?? labelize(key)
}

function getEntryLabel(key: string, translation?: Pathfinder2eBestiarySheetTranslation) {
  return translation?.labels?.entries?.[key] ?? labelize(key)
}

function withPtBRSheetDefaults(translation: Pathfinder2eBestiarySheetTranslation | undefined): Pathfinder2eBestiarySheetTranslation {
  return {
    ...translation,
    labels: {
      sections: { ...PT_BR_SHEET_LABELS.sections, ...translation?.labels?.sections },
      entries: { ...PT_BR_SHEET_LABELS.entries, ...translation?.labels?.entries },
      skills: { ...PT_BR_SHEET_LABELS.skills, ...translation?.labels?.skills },
      actionKinds: { ...PT_BR_SHEET_LABELS.actionKinds, ...translation?.labels?.actionKinds },
    },
  }
}

function toDisplaySheet(sheet: Pathfinder2eBestiarySheet, translation?: Pathfinder2eBestiarySheetTranslation): GameSystemBestiarySheet {
  const defenses = compactEntries([
    {
      key: 'perception',
      label: getEntryLabel('perception', translation),
      value: formatModifier(sheet.perception.modifier),
      detail: joinList(translation?.perception?.senses ?? sheet.perception.senses),
    },
    {
      key: 'fortitude',
      label: getEntryLabel('fortitude', translation),
      value: formatModifier(sheet.saves.fortitude),
      detail: translation?.saves?.detail ?? sheet.saves.detail,
    },
    { key: 'reflex', label: getEntryLabel('reflex', translation), value: formatModifier(sheet.saves.reflex) },
    { key: 'will', label: getEntryLabel('will', translation), value: formatModifier(sheet.saves.will) },
    sheet.defenses?.immunities?.length
      ? { key: 'immunities', label: getEntryLabel('immunities', translation), value: (translation?.defenses?.immunities ?? sheet.defenses.immunities).join(', ') }
      : null,
    sheet.defenses?.resistances?.length
      ? { key: 'resistances', label: getEntryLabel('resistances', translation), value: (translation?.defenses?.resistances ?? sheet.defenses.resistances).join(', ') }
      : null,
    sheet.defenses?.weaknesses?.length
      ? { key: 'weaknesses', label: getEntryLabel('weaknesses', translation), value: (translation?.defenses?.weaknesses ?? sheet.defenses.weaknesses).join(', ') }
      : null,
  ])
  const movement = compactEntries([
    { key: 'land', label: getEntryLabel('land', translation), value: `${sheet.movement.land} ft` },
    ...sheet.movement.other.map((speed, index) => ({
      key: `speed:${speed}`,
      label: getEntryLabel('other', translation),
      value: translation?.movement?.other?.[index] ?? speed,
    })),
    sheet.languages.values.length
      ? {
          key: 'languages',
          label: getEntryLabel('languages', translation),
          value: (translation?.languages?.values ?? sheet.languages.values).join(', '),
          detail: translation?.languages?.detail ?? sheet.languages.detail,
        }
      : null,
  ])
  const attacks = sheet.attacks.map((attack, index) => ({
    key: `attack:${attack.name}`,
    label: translation?.attacks?.[index]?.name ?? attack.name,
    value: `${formatModifier(attack.bonus)} - ${translation?.attacks?.[index]?.damage ?? attack.damage}`,
    tags: translation?.attacks?.[index]?.traits ?? attack.traits,
  }))
  const actions = sheet.actions.map((action, index) => ({
    key: `action:${action.name}`,
    label: translation?.actions?.[index]?.name ?? action.name,
    value: translation?.actions?.[index]?.kindLabel ?? translation?.labels?.actionKinds?.[action.kind] ?? labelize(action.kind),
    detail: translation?.actions?.[index]?.detail ?? action.detail,
    tags: translation?.actions?.[index]?.traits ?? action.traits,
  }))

  return {
    sections: compactSections([
      { key: 'defenses', title: getSectionTitle('defenses', translation), entries: defenses },
      { key: 'attributes', title: getSectionTitle('attributes', translation), entries: recordEntries(sheet.abilities) },
      { key: 'skills', title: getSectionTitle('skills', translation), entries: recordEntries(sheet.skills, translation?.labels?.skills) },
      { key: 'movement', title: getSectionTitle('movement', translation), entries: movement },
      { key: 'attacks', title: getSectionTitle('attacks', translation), entries: attacks },
      { key: 'actions', title: getSectionTitle('actions', translation), entries: actions },
      sheet.notes ? { key: 'notes', title: getSectionTitle('notes', translation), entries: [{ key: 'public-notes', label: getEntryLabel('public-notes', translation), detail: translation?.notes ?? sheet.notes }] } : null,
    ]),
  }
}

function compactSections(sections: Array<GameSystemBestiarySheetSection | null>) {
  return sections.filter((section): section is GameSystemBestiarySheetSection => section !== null && section.entries.length > 0)
}

function toBestiaryCreature(creature: Pathfinder2eBestiaryCreatureData): GameSystemBestiaryCreature<Pathfinder2eBestiaryCreatureData> {
  const translated = creature.translations?.ptBR
  const translatedSheet = withPtBRSheetDefaults(creature.sheet.translations?.ptBR)

  return {
    id: creature.id,
    system: creature.system,
    category: 'npc',
    name: creature.name,
    source: {
      pack: creature.sourcePack,
      id: creature.sourceId,
      title: creature.publicationTitle,
      license: creature.license,
    },
    display: {
      subtitle: `${creature.publicationTitle} - ${creature.sourcePack}`,
      level: { label: 'Nivel', value: formatLevel(creature.level) },
      stats: [
        { key: 'armorClass', label: 'CA', value: String(creature.armorClass) },
        { key: 'hitPoints', label: 'PV', value: String(creature.hitPoints) },
        { key: 'speed', label: 'Mov.', value: `${creature.speed} ft` },
        { key: 'size', label: 'Tamanho', value: creature.size },
      ],
      tags: [creature.rarity, ...creature.traits],
      sheet: toDisplaySheet(creature.sheet),
    },
    translations: {
      ptBR: {
        name: translated?.name,
        display: {
          stats: [
            { key: 'armorClass', label: 'CA', value: String(creature.armorClass) },
            { key: 'hitPoints', label: 'PV', value: String(creature.hitPoints) },
            { key: 'speed', label: 'Mov.', value: `${creature.speed} ft` },
            { key: 'size', label: 'Tamanho', value: translated?.size ?? creature.size },
          ],
          tags: [translated?.rarity ?? creature.rarity, ...(translated?.traits ?? creature.traits)],
          sheet: toDisplaySheet(creature.sheet, translatedSheet),
        },
      },
    },
    token: creature.token,
    systemData: creature,
  }
}

function toHazardDisplaySheet(sheet: Pathfinder2eBestiaryHazardSheet): GameSystemBestiarySheet {
  const defenses = compactEntries([
    { key: 'armorClass', label: 'CA', value: String(sheet.defenses.armorClass) },
    { key: 'hardness', label: 'Dureza', value: String(sheet.defenses.hardness) },
    sheet.defenses.hitPoints > 0 ? { key: 'hitPoints', label: 'PV', value: String(sheet.defenses.hitPoints) } : null,
    {
      key: 'stealth',
      label: 'Furtividade',
      value: formatModifier(sheet.defenses.stealth),
      detail: sheet.defenses.stealthDetail,
    },
    sheet.defenses.fortitude ? { key: 'fortitude', label: 'Fortitude', value: formatModifier(sheet.defenses.fortitude) } : null,
    sheet.defenses.reflex ? { key: 'reflex', label: 'Reflexos', value: formatModifier(sheet.defenses.reflex) } : null,
    sheet.defenses.will ? { key: 'will', label: 'Vontade', value: formatModifier(sheet.defenses.will) } : null,
  ])

  const operations = compactEntries([
    sheet.description ? { key: 'description', label: 'Descricao', detail: sheet.description } : null,
    sheet.disable ? { key: 'disable', label: 'Desarmar', detail: sheet.disable } : null,
    sheet.routine ? { key: 'routine', label: 'Rotina', detail: sheet.routine } : null,
    sheet.reset ? { key: 'reset', label: 'Reset', detail: sheet.reset } : null,
  ])

  const actions = sheet.actions.map((action) => ({
    key: `action:${action.name}`,
    label: action.name,
    value: PT_BR_SHEET_LABELS.actionKinds[action.kind] ?? labelize(action.kind),
    detail: action.detail,
    tags: action.traits,
  }))

  return {
    sections: compactSections([
      { key: 'defenses', title: 'Defesas', entries: defenses },
      { key: 'operations', title: 'Operacao', entries: operations },
      { key: 'actions', title: 'Acoes', entries: actions },
    ]),
  }
}

function toBestiaryHazard(hazard: Pathfinder2eBestiaryHazardData): GameSystemBestiaryEntry<Pathfinder2eBestiaryHazardData> {
  return {
    id: hazard.id,
    system: hazard.system,
    category: 'hazard',
    name: hazard.name,
    source: {
      pack: hazard.sourcePack,
      id: hazard.sourceId,
      title: hazard.publicationTitle,
      license: hazard.license,
    },
    display: {
      subtitle: `${hazard.publicationTitle} - ${hazard.sourcePack}`,
      level: { label: 'Nivel', value: formatLevel(hazard.level) },
      stats: [
        { key: 'armorClass', label: 'CA', value: String(hazard.sheet.defenses.armorClass) },
        { key: 'hardness', label: 'Dureza', value: String(hazard.sheet.defenses.hardness) },
        { key: 'stealth', label: 'Furt.', value: formatModifier(hazard.sheet.defenses.stealth) },
        { key: 'complexity', label: 'Tipo', value: hazard.isComplex ? 'Complexo' : 'Simples' },
      ],
      tags: [hazard.rarity, ...hazard.traits],
      sheet: toHazardDisplaySheet(hazard.sheet),
    },
    translations: {
      ptBR: {
        display: {
          stats: [
            { key: 'armorClass', label: 'CA', value: String(hazard.sheet.defenses.armorClass) },
            { key: 'hardness', label: 'Dureza', value: String(hazard.sheet.defenses.hardness) },
            { key: 'stealth', label: 'Furt.', value: formatModifier(hazard.sheet.defenses.stealth) },
            { key: 'complexity', label: 'Tipo', value: hazard.isComplex ? 'Complexo' : 'Simples' },
          ],
          sheet: toHazardDisplaySheet(hazard.sheet),
        },
      },
    },
    token: hazard.token,
    systemData: hazard,
  }
}

export { PATHFINDER_2E_BESTIARY_SOURCE_SUMMARY }

export const PATHFINDER_2E_BESTIARY: GameSystemBestiaryCreature<Pathfinder2eBestiaryCreatureData>[] =
  PATHFINDER_2E_BESTIARY_DATA.map(toBestiaryCreature)

export const PATHFINDER_2E_BESTIARY_HAZARDS: GameSystemBestiaryEntry<Pathfinder2eBestiaryHazardData>[] =
  PATHFINDER_2E_BESTIARY_HAZARD_DATA.map(toBestiaryHazard)

export const PATHFINDER_2E_BESTIARY_ENTRIES: GameSystemBestiaryEntry<Pathfinder2eBestiaryEntryData>[] = [
  ...PATHFINDER_2E_BESTIARY,
  ...PATHFINDER_2E_BESTIARY_HAZARDS,
]

const PATHFINDER_2E_BESTIARY_BY_ID = new Map(PATHFINDER_2E_BESTIARY.map((creature) => [creature.id, creature]))
const PATHFINDER_2E_BESTIARY_ENTRY_BY_ID = new Map(PATHFINDER_2E_BESTIARY_ENTRIES.map((entry) => [entry.id, entry]))

/**
 * Dado bruto (nao a projecao de display) de uma criatura NPC do catalogo,
 * usado por Resolution (.ai/game_systems/pathfinder_2e/resolution/) para ler
 * o salvamento fixo (sheet.saves) sem passar por texto formatado.
 */
export function findPathfinder2eBestiaryCreature(creatureId: string): Pathfinder2eBestiaryCreatureData | null {
  return PATHFINDER_2E_BESTIARY_BY_ID.get(creatureId)?.systemData ?? null
}

function matchesSearch(entry: Pathfinder2eBestiaryEntryData, search: string) {
  const normalized = search.trim().toLocaleLowerCase()
  if (!normalized) return true

  return (
    entry.name.toLocaleLowerCase().includes(normalized) ||
    entry.sourcePack.toLocaleLowerCase().includes(normalized) ||
    entry.traits.some((trait) => trait.toLocaleLowerCase().includes(normalized))
  )
}

function matchesFilters(entry: Pathfinder2eBestiaryEntryData, filters: Record<string, string | number> | undefined) {
  if (!filters) return true
  if (typeof filters.level === 'number' && entry.level !== filters.level) return false
  if (typeof filters.rarity === 'string' && entry.rarity !== filters.rarity) return false
  if (typeof filters.category === 'string' && filters.category !== 'all' && entry.category !== filters.category) return false
  return true
}

function filterCreatures(options: { search?: string; filters?: Record<string, string | number> } | undefined) {
  const search = options?.search ?? ''

  return PATHFINDER_2E_BESTIARY_DATA.filter((creature) => matchesSearch(creature, search) && matchesFilters(creature, options?.filters))
}

function filterEntries(options: { search?: string; filters?: Record<string, string | number> } | undefined) {
  const search = options?.search ?? ''

  return [...PATHFINDER_2E_BESTIARY_DATA, ...PATHFINDER_2E_BESTIARY_HAZARD_DATA].filter((entry) => matchesSearch(entry, search) && matchesFilters(entry, options?.filters))
}

function toBestiaryEntry(entry: Pathfinder2eBestiaryEntryData) {
  return entry.category === 'hazard' ? toBestiaryHazard(entry) : toBestiaryCreature(entry)
}

export const pathfinder2eBestiaryAdapter: GameSystemBestiaryAdapter = {
  system: 'PATHFINDER_2E',
  listEntries(options) {
    const limit = options?.limit ?? 24
    const offset = options?.offset ?? 0

    return filterEntries(options)
      .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
      .slice(offset, offset + limit)
      .map(toBestiaryEntry)
  },
  countEntries(options) {
    return filterEntries(options).length
  },
  findEntry(entryId) {
    return PATHFINDER_2E_BESTIARY_ENTRY_BY_ID.get(entryId) ?? null
  },
  listCreatures(options) {
    const limit = options?.limit ?? 24
    const offset = options?.offset ?? 0

    return filterCreatures(options)
      .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
      .slice(offset, offset + limit)
      .map(toBestiaryCreature)
  },
  countCreatures(options) {
    return filterCreatures(options).length
  },
  findCreature(creatureId) {
    return PATHFINDER_2E_BESTIARY_BY_ID.get(creatureId) ?? null
  },
}
