import type {
  GameSystemSpellAdapter,
  GameSystemSpellDisplayStat,
  GameSystemSpellEntry,
  GameSystemSpellSheet,
  GameSystemSpellSheetEntry,
  GameSystemSpellSheetSection,
} from '../../../../game-system-core/src/server/spells'
import { PATHFINDER_2E_SPELL_DATA, PATHFINDER_2E_SPELL_EFFECT_DEPENDENCIES, PATHFINDER_2E_SPELL_SOURCE_SUMMARY } from './data.generated'
import { PATHFINDER_2E_SPELL_SOURCE_MANIFEST } from './source-manifest.generated'
import { PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT } from './compatibility-report.generated'
import type {
  Pathfinder2eSpellDamageComponent,
  Pathfinder2eSpellDefense,
  Pathfinder2eSpellDefinition,
  Pathfinder2eSpellHeightening,
  Pathfinder2eRichTextDocument,
  Pathfinder2eRichTextNode,
} from './models'

export * from './models'
export {
  PATHFINDER_2E_SPELL_DATA,
  PATHFINDER_2E_SPELL_EFFECT_DEPENDENCIES,
  PATHFINDER_2E_SPELL_SOURCE_SUMMARY,
  PATHFINDER_2E_SPELL_SOURCE_MANIFEST,
  PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT,
}

const SPELL_DEFINITION_BY_ID = new Map(PATHFINDER_2E_SPELL_DATA.map((spell) => [spell.id, spell]))

export function findPathfinder2eSpellDefinition(spellId: string) {
  return SPELL_DEFINITION_BY_ID.get(spellId) ?? null
}

const SAVE_LABELS: Record<string, string> = {
  fortitude: 'Fortitude',
  reflex: 'Reflexos',
  will: 'Vontade',
}

function labelize(value: string) {
  return value
    .split(/[-_]/)
    .map((part) => (part ? `${part[0].toLocaleUpperCase()}${part.slice(1)}` : part))
    .join(' ')
}

function formatSave(defense: Pathfinder2eSpellDefense) {
  if (!defense) return undefined
  const label = SAVE_LABELS[defense.save.statistic] ?? labelize(defense.save.statistic)
  return defense.save.basic ? `${label} (basico)` : label
}

function formatArea(area: Pathfinder2eSpellDefinition['area']) {
  if (!area || !area.value || !area.type) return undefined
  return `${area.value} pes (${labelize(area.type)})`
}

function formatDamageComponent(component: Pathfinder2eSpellDamageComponent) {
  const isHealingOnly = component.kinds.includes('healing') && !component.kinds.includes('damage')
  return `${component.formula} ${component.type}${isHealingOnly ? ' (cura)' : ''}`.trim()
}

function formatDamage(damage: Pathfinder2eSpellDefinition['damage']) {
  const components = Object.values(damage).map(formatDamageComponent)
  return components.length > 0 ? components.join('; ') : undefined
}

function formatHeightening(heightening: Pathfinder2eSpellHeightening) {
  if (!heightening) return undefined
  if (heightening.type === 'interval') return `A cada ${heightening.interval} rank(s)`
  const ranks = Object.keys(heightening.levels)
    .map(Number)
    .filter((rank) => Number.isFinite(rank))
    .sort((left, right) => left - right)
  return ranks.length > 0 ? `Ranks ${ranks.join(', ')}` : undefined
}

function renderRichTextNode(node: Pathfinder2eRichTextNode): string {
  switch (node.kind) {
    case 'TEXT':
      return node.value
    case 'UUID':
      return node.label ?? node.uuid.split('.').pop() ?? node.uuid
    case 'CHECK': {
      const label = SAVE_LABELS[node.statistic] ?? labelize(node.statistic)
      const parts = [label]
      if (node.dc) parts.push(`CD ${node.dc}`)
      if (node.basic) parts.push('(basico)')
      return `[${parts.join(' ')}]`
    }
    case 'DAMAGE': {
      const types = node.damageTypes.join(', ')
      return node.label ?? `${node.formula}${types ? ` (${types})` : ''}`
    }
    case 'TEMPLATE': {
      const distance = node.distance !== undefined ? ` ${node.distance} pes` : ''
      return `[${labelize(node.shape)}${distance}]`
    }
    case 'LOCALIZE':
      return `[${node.key}]`
    case 'ACTION_GLYPH':
      return `[${node.actions} acao(oes)]`
    default:
      return ''
  }
}

function renderRichText(document: Pathfinder2eRichTextDocument) {
  return document.nodes
    .map(renderRichTextNode)
    .join(' ')
    .replace(/ +\n/g, '\n')
    .trim()
}

function compactEntries(entries: Array<GameSystemSpellSheetEntry | null>) {
  return entries.filter((entry): entry is GameSystemSpellSheetEntry => entry !== null)
}

function compactStats(stats: Array<GameSystemSpellDisplayStat | null>) {
  return stats.filter((stat): stat is GameSystemSpellDisplayStat => stat !== null)
}

function compactSections(sections: Array<GameSystemSpellSheetSection | null>) {
  return sections.filter((section): section is GameSystemSpellSheetSection => section !== null && section.entries.length > 0)
}

function toDisplaySheet(spell: Pathfinder2eSpellDefinition): GameSystemSpellSheet {
  const casting = compactEntries([
    spell.time ? { key: 'castingTime', label: 'Tempo de Conjuracao', value: spell.time } : null,
    spell.cost ? { key: 'cost', label: 'Custo', value: spell.cost } : null,
    spell.traditions.length > 0 ? { key: 'traditions', label: 'Tradicoes', value: spell.traditions.map(labelize).join(', ') } : null,
    spell.requirements ? { key: 'requirements', label: 'Requisitos', value: spell.requirements } : null,
  ])

  const targeting = compactEntries([
    spell.range ? { key: 'range', label: 'Alcance', value: spell.range } : null,
    spell.target ? { key: 'target', label: 'Alvo', value: spell.target } : null,
    formatArea(spell.area) ? { key: 'area', label: 'Area', value: formatArea(spell.area) } : null,
  ])

  const effect = compactEntries([
    spell.duration.value ? { key: 'duration', label: 'Duracao', value: spell.duration.sustained ? `${spell.duration.value} (sustentada)` : spell.duration.value } : null,
    spell.defense ? { key: 'save', label: 'Salvamento', value: formatSave(spell.defense) } : null,
    formatDamage(spell.damage) ? { key: 'damage', label: 'Dano/Cura', value: formatDamage(spell.damage) } : null,
    spell.counteraction ? { key: 'counteraction', label: 'Counteract', value: 'Sim' } : null,
  ])

  const overlays = compactEntries(
    spell.overlays
      .slice()
      .sort((left, right) => left.sort - right.sort)
      .map((overlay) => (overlay.name ? { key: overlay.id, label: 'Variante', value: overlay.name } : null)),
  )

  const description = compactEntries([{ key: 'text', label: 'Descricao', detail: renderRichText(spell.description) }])

  const heightening = compactEntries([formatHeightening(spell.heightening) ? { key: 'heightening', label: 'Aprimoramento', value: formatHeightening(spell.heightening) } : null])

  const ritual = compactEntries([
    spell.ritual?.primaryCheck ? { key: 'primaryCheck', label: 'Verificador Primario', value: spell.ritual.primaryCheck } : null,
    spell.ritual?.secondaryChecks ? { key: 'secondaryChecks', label: 'Verificadores Secundarios', value: spell.ritual.secondaryChecks } : null,
    typeof spell.ritual?.secondaryCasters === 'number'
      ? { key: 'secondaryCasters', label: 'Conjuradores Secundarios', value: String(spell.ritual.secondaryCasters) }
      : null,
  ])

  const source = compactEntries([
    spell.source.title ? { key: 'publication', label: 'Publicacao', value: spell.source.title } : null,
    spell.source.license ? { key: 'license', label: 'Licenca', value: spell.source.license } : null,
  ])

  return {
    sections: compactSections([
      { key: 'casting', title: 'Conjuracao', entries: casting },
      { key: 'targeting', title: 'Alvo e Area', entries: targeting },
      { key: 'effect', title: 'Efeito', entries: effect },
      { key: 'overlays', title: 'Variantes', entries: overlays },
      { key: 'description', title: 'Descricao', entries: description },
      { key: 'heightening', title: 'Aprimoramento', entries: heightening },
      { key: 'ritual', title: 'Ritual', entries: ritual },
      { key: 'source', title: 'Fonte', entries: source },
    ]),
  }
}

function toSpellEntry(spell: Pathfinder2eSpellDefinition): GameSystemSpellEntry<Pathfinder2eSpellDefinition> {
  const isCantrip = spell.traits.includes('cantrip')

  return {
    id: spell.id,
    system: 'PATHFINDER_2E',
    category: spell.category,
    name: spell.name,
    source: {
      pack: spell.source.pack,
      id: spell.source.id,
      title: spell.source.title,
      license: spell.source.license,
    },
    display: {
      subtitle: spell.source.title ? `${spell.source.title} - ${spell.source.pack}` : spell.source.pack,
      level: { label: 'Rank', value: isCantrip ? 'Truque' : String(spell.rank) },
      stats: compactStats([
        spell.time ? { key: 'castingTime', label: 'Tempo', value: spell.time } : null,
        spell.range ? { key: 'range', label: 'Alcance', value: spell.range } : null,
        spell.defense ? { key: 'save', label: 'Salvamento', value: formatSave(spell.defense) ?? '' } : null,
      ]),
      tags: [spell.rarity, ...spell.traditions, ...spell.traits],
      sheet: toDisplaySheet(spell),
    },
    systemData: spell,
  }
}

const PATHFINDER_2E_SPELL_BY_ID = new Map(PATHFINDER_2E_SPELL_DATA.map((spell) => [spell.id, spell]))

function matchesSearch(spell: Pathfinder2eSpellDefinition, search: string) {
  const normalized = search.trim().toLocaleLowerCase()
  if (!normalized) return true

  return (
    spell.name.toLocaleLowerCase().includes(normalized) ||
    spell.traits.some((trait) => trait.toLocaleLowerCase().includes(normalized)) ||
    spell.traditions.some((tradition) => tradition.toLocaleLowerCase().includes(normalized))
  )
}

function matchesFilters(spell: Pathfinder2eSpellDefinition, filters: Record<string, string | number> | undefined) {
  if (!filters) return true
  if (typeof filters.rank === 'number' && spell.rank !== filters.rank) return false
  if (typeof filters.rarity === 'string' && spell.rarity !== filters.rarity) return false
  if (typeof filters.tradition === 'string' && !spell.traditions.includes(filters.tradition)) return false
  if (typeof filters.category === 'string' && filters.category !== 'all' && spell.category !== filters.category) return false
  return true
}

function filterSpells(options: { search?: string; filters?: Record<string, string | number> } | undefined) {
  const search = options?.search ?? ''

  return PATHFINDER_2E_SPELL_DATA.filter((spell) => matchesSearch(spell, search) && matchesFilters(spell, options?.filters))
}

export const pathfinder2eSpellAdapter: GameSystemSpellAdapter = {
  system: 'PATHFINDER_2E',
  listEntries(options) {
    const limit = options?.limit ?? 24
    const offset = options?.offset ?? 0

    return filterSpells(options)
      .sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name))
      .slice(offset, offset + limit)
      .map(toSpellEntry)
  },
  countEntries(options) {
    return filterSpells(options).length
  },
  findEntry(entryId) {
    const spell = PATHFINDER_2E_SPELL_BY_ID.get(entryId)
    return spell ? toSpellEntry(spell) : null
  },
}
