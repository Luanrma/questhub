import type {
  GameSystemSpellAdapter,
  GameSystemSpellDisplayStat,
  GameSystemSpellEntry,
  GameSystemSpellSheetEntry,
  GameSystemSpellSheetSection,
} from '../../../../game-system-core/src/server/spells'
import { PATHFINDER_2E_SPELL_DATA } from './data.generated'
import { PATHFINDER_2E_SPELL_IMPORT_MANIFEST } from './import-manifest.generated'
import type {
  Pathfinder2eCastingTime,
  Pathfinder2eSpellArea,
  Pathfinder2eSpellDefinition,
  Pathfinder2eSpellRange,
} from './models'

export * from './models'
export { PATHFINDER_2E_SPELL_DATA, PATHFINDER_2E_SPELL_IMPORT_MANIFEST }

const SPELL_BY_ID = new Map(PATHFINDER_2E_SPELL_DATA.map((spell) => [spell.id, spell]))

export function findPathfinder2eSpellDefinition(spellId: string) {
  return SPELL_BY_ID.get(spellId) ?? null
}

function label(value: string) {
  return value.toLocaleLowerCase().replace(/(^|_)(\p{L})/gu, (_, prefix, letter) => `${prefix ? ' ' : ''}${letter.toLocaleUpperCase()}`)
}

export function formatPathfinder2eCastingTime(time: Pathfinder2eCastingTime) {
  if (time.kind === 'ACTIONS') return `${time.actions} acao(oes)`
  if (time.kind === 'REACTION') return 'Reacao'
  if (time.kind === 'FREE_ACTION') return 'Acao livre'
  return time.text
}

export function formatPathfinder2eSpellRange(range: Pathfinder2eSpellRange) {
  if (range.kind === 'NONE') return undefined
  if (range.kind === 'DISTANCE') return `${range.feet} pes`
  if (range.kind === 'TEXT') return range.text
  return label(range.kind)
}

function formatArea(area: Pathfinder2eSpellArea | null) {
  return area ? `${area.feet} pes (${label(area.shape)})` : undefined
}

function compact<T>(items: Array<T | null>): T[] {
  return items.filter((item): item is T => item !== null)
}

function toSheet(spell: Pathfinder2eSpellDefinition) {
  const casting = compact<GameSystemSpellSheetEntry>([
    { key: 'castingTime', label: 'Tempo de Conjuracao', value: formatPathfinder2eCastingTime(spell.casting.time) },
    spell.casting.cost ? { key: 'cost', label: 'Custo', value: spell.casting.cost } : null,
    spell.traditions.length ? { key: 'traditions', label: 'Tradicoes', value: spell.traditions.map(label).join(', ') } : null,
    spell.casting.requirements ? { key: 'requirements', label: 'Requisitos', value: spell.casting.requirements } : null,
  ])
  const targeting = compact<GameSystemSpellSheetEntry>([
    formatPathfinder2eSpellRange(spell.targeting.range) ? { key: 'range', label: 'Alcance', value: formatPathfinder2eSpellRange(spell.targeting.range) } : null,
    spell.targeting.target ? { key: 'target', label: 'Alvo', value: spell.targeting.target } : null,
    formatArea(spell.targeting.area) ? { key: 'area', label: 'Area', value: formatArea(spell.targeting.area) } : null,
  ])
  const defense = spell.defense.kind === 'SAVE'
    ? `${label(spell.defense.statistic)}${spell.defense.basic ? ' (basico)' : ''}`
    : spell.defense.kind === 'SPELL_ATTACK' ? 'Ataque de magia' : undefined
  const effect = compact<GameSystemSpellSheetEntry>([
    spell.duration.text ? { key: 'duration', label: 'Duracao', value: `${spell.duration.text}${spell.duration.sustained ? ' (sustentada)' : ''}` } : null,
    defense ? { key: 'defense', label: 'Defesa', value: defense } : null,
    spell.damage.length ? { key: 'damage', label: 'Dano/Cura', value: spell.damage.map((part) => `${part.formula} ${part.damageType}${part.kind === 'HEALING' ? ' (cura)' : ''}`.trim()).join('; ') } : null,
    { key: 'automation', label: 'Automacao', value: label(spell.automation.status) },
  ])
  const sections = compact<GameSystemSpellSheetSection>([
    { key: 'casting', title: 'Conjuracao', entries: casting },
    targeting.length ? { key: 'targeting', title: 'Alvo e Area', entries: targeting } : null,
    { key: 'effect', title: 'Efeito', entries: effect },
    spell.description ? { key: 'description', title: 'Descricao', entries: [{ key: 'text', label: 'Descricao', detail: spell.description }] } : null,
    spell.heightening.kind !== 'NONE' ? { key: 'heightening', title: 'Aprimoramento', entries: [{ key: 'heightening', label: 'Regra', value: spell.heightening.kind === 'INTERVAL' ? `A cada ${spell.heightening.everyRanks} rank(s)` : spell.heightening.text }] } : null,
    spell.ritual ? {
      key: 'ritual',
      title: 'Ritual',
      entries: compact([
        spell.ritual.primaryCheck ? { key: 'primaryCheck', label: 'Teste primario', value: spell.ritual.primaryCheck } : null,
        spell.ritual.secondaryChecks ? { key: 'secondaryChecks', label: 'Testes secundarios', value: spell.ritual.secondaryChecks } : null,
        typeof spell.ritual.secondaryCasters === 'number' ? { key: 'secondaryCasters', label: 'Conjuradores secundarios', value: String(spell.ritual.secondaryCasters) } : null,
      ]),
    } : null,
  ])
  return { sections }
}

function toEntry(spell: Pathfinder2eSpellDefinition): GameSystemSpellEntry<Pathfinder2eSpellDefinition> {
  const cantrip = spell.traits.includes('cantrip')
  const stats = compact<GameSystemSpellDisplayStat>([
    { key: 'castingTime', label: 'Tempo', value: formatPathfinder2eCastingTime(spell.casting.time) },
    formatPathfinder2eSpellRange(spell.targeting.range) ? { key: 'range', label: 'Alcance', value: formatPathfinder2eSpellRange(spell.targeting.range) ?? '' } : null,
  ])
  return {
    id: spell.id,
    system: 'PATHFINDER_2E',
    category: spell.kind === 'RITUAL' ? 'ritual' : 'spell',
    name: spell.name,
    source: { id: spell.source.sourceId, title: spell.source.book, license: spell.source.license },
    display: {
      subtitle: spell.source.book,
      level: { label: 'Rank', value: cantrip ? 'Truque' : String(spell.rank) },
      stats,
      tags: [spell.rarity.toLocaleLowerCase(), ...spell.traditions.map((item) => item.toLocaleLowerCase()), ...spell.traits],
      sheet: toSheet(spell),
    },
    systemData: spell,
  }
}

function filtered(options?: { search?: string; filters?: Record<string, string | number> }) {
  const search = options?.search?.trim().toLocaleLowerCase() ?? ''
  const filters = options?.filters
  return PATHFINDER_2E_SPELL_DATA.filter((spell) => {
    if (search && !spell.name.toLocaleLowerCase().includes(search) && !spell.traits.some((item) => item.toLocaleLowerCase().includes(search))) return false
    if (typeof filters?.rank === 'number' && spell.rank !== filters.rank) return false
    if (typeof filters?.rarity === 'string' && spell.rarity !== filters.rarity.toUpperCase()) return false
    if (typeof filters?.tradition === 'string' && !spell.traditions.includes(filters.tradition.toUpperCase() as never)) return false
    if (typeof filters?.category === 'string' && filters.category !== 'all' && spell.kind.toLocaleLowerCase() !== filters.category) return false
    return true
  })
}

export const pathfinder2eSpellAdapter: GameSystemSpellAdapter = {
  system: 'PATHFINDER_2E',
  listEntries(options) {
    return filtered(options)
      .slice()
      .sort((left, right) => left.rank - right.rank || left.name.localeCompare(right.name))
      .slice(options?.offset ?? 0, (options?.offset ?? 0) + (options?.limit ?? 24))
      .map(toEntry)
  },
  countEntries(options) {
    return filtered(options).length
  },
  findEntry(entryId) {
    const spell = SPELL_BY_ID.get(entryId)
    return spell ? toEntry(spell) : null
  },
}
