import type {
  GameSystemSpellAdapter,
  GameSystemSpellDisplayStat,
  GameSystemSpellEntry,
  GameSystemSpellSheet,
  GameSystemSpellSheetEntry,
  GameSystemSpellSheetSection,
} from '../../../../game-system-core/src/server/spells'
import { PATHFINDER_2E_SPELL_DATA, PATHFINDER_2E_SPELL_SOURCE_SUMMARY } from './data.generated'
import type { Pathfinder2eSpellData } from './models'

export * from './models'
export { PATHFINDER_2E_SPELL_DATA, PATHFINDER_2E_SPELL_SOURCE_SUMMARY }

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

function formatSave(defense: Pathfinder2eSpellData['defense']) {
  if (!defense) return undefined
  const label = SAVE_LABELS[defense.save] ?? labelize(defense.save)
  return defense.basic ? `${label} (basico)` : label
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

function toDisplaySheet(spell: Pathfinder2eSpellData): GameSystemSpellSheet {
  const casting = compactEntries([
    spell.castingTime ? { key: 'castingTime', label: 'Tempo de Conjuracao', value: spell.castingTime } : null,
    spell.cost ? { key: 'cost', label: 'Custo', value: spell.cost } : null,
    spell.traditions.length > 0 ? { key: 'traditions', label: 'Tradicoes', value: spell.traditions.map(labelize).join(', ') } : null,
    spell.requirements ? { key: 'requirements', label: 'Requisitos', value: spell.requirements } : null,
  ])

  const targeting = compactEntries([
    spell.range ? { key: 'range', label: 'Alcance', value: spell.range } : null,
    spell.target ? { key: 'target', label: 'Alvo', value: spell.target } : null,
    spell.area ? { key: 'area', label: 'Area', value: spell.area } : null,
  ])

  const effect = compactEntries([
    spell.duration ? { key: 'duration', label: 'Duracao', value: spell.duration } : null,
    spell.defense ? { key: 'save', label: 'Salvamento', value: formatSave(spell.defense) } : null,
  ])

  const description = compactEntries([spell.description ? { key: 'text', label: 'Descricao', detail: spell.description } : null])

  const heightening = compactEntries([spell.heightening ? { key: 'heightening', label: 'Aprimoramento', value: spell.heightening } : null])

  const ritual = compactEntries([
    spell.ritual?.primaryCheck ? { key: 'primaryCheck', label: 'Verificador Primario', value: spell.ritual.primaryCheck } : null,
    spell.ritual?.secondaryChecks ? { key: 'secondaryChecks', label: 'Verificadores Secundarios', value: spell.ritual.secondaryChecks } : null,
    typeof spell.ritual?.secondaryCasters === 'number'
      ? { key: 'secondaryCasters', label: 'Conjuradores Secundarios', value: String(spell.ritual.secondaryCasters) }
      : null,
  ])

  const source = compactEntries([
    spell.publicationTitle ? { key: 'publication', label: 'Publicacao', value: spell.publicationTitle } : null,
    spell.license ? { key: 'license', label: 'Licenca', value: spell.license } : null,
  ])

  return {
    sections: compactSections([
      { key: 'casting', title: 'Conjuracao', entries: casting },
      { key: 'targeting', title: 'Alvo e Area', entries: targeting },
      { key: 'effect', title: 'Efeito', entries: effect },
      { key: 'description', title: 'Descricao', entries: description },
      { key: 'heightening', title: 'Aprimoramento', entries: heightening },
      { key: 'ritual', title: 'Ritual', entries: ritual },
      { key: 'source', title: 'Fonte', entries: source },
    ]),
  }
}

function toSpellEntry(spell: Pathfinder2eSpellData): GameSystemSpellEntry<Pathfinder2eSpellData> {
  const isCantrip = spell.traits.includes('cantrip')

  return {
    id: spell.id,
    system: 'PATHFINDER_2E',
    category: spell.category,
    name: spell.name,
    source: {
      pack: spell.sourcePack,
      id: spell.sourceId,
      title: spell.publicationTitle,
      license: spell.license,
    },
    display: {
      subtitle: spell.publicationTitle ? `${spell.publicationTitle} - ${spell.sourcePack}` : spell.sourcePack,
      level: { label: 'Rank', value: isCantrip ? 'Truque' : String(spell.rank) },
      stats: compactStats([
        spell.castingTime ? { key: 'castingTime', label: 'Tempo', value: spell.castingTime } : null,
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

function matchesSearch(spell: Pathfinder2eSpellData, search: string) {
  const normalized = search.trim().toLocaleLowerCase()
  if (!normalized) return true

  return (
    spell.name.toLocaleLowerCase().includes(normalized) ||
    spell.traits.some((trait) => trait.toLocaleLowerCase().includes(normalized)) ||
    spell.traditions.some((tradition) => tradition.toLocaleLowerCase().includes(normalized))
  )
}

function matchesFilters(spell: Pathfinder2eSpellData, filters: Record<string, string | number> | undefined) {
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
