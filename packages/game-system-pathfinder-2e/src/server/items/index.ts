import type {
  GameSystemItemAdapter,
  GameSystemItemDisplayStat,
  GameSystemItemEntry,
  GameSystemItemSheet,
  GameSystemItemSheetEntry,
  GameSystemItemSheetSection,
} from '../../../../game-system-core/src/server/items'
import { formatPathfinder2eCurrency } from '../inventory/money'
import { PATHFINDER_2E_ITEM_DATA, PATHFINDER_2E_ITEM_SOURCE_SUMMARY } from './data.generated'
import type { Pathfinder2eCompendiumItem } from './models'

export * from './models'
export { PATHFINDER_2E_ITEM_DATA, PATHFINDER_2E_ITEM_SOURCE_SUMMARY }

const ITEM_TYPE_LABELS: Record<string, string> = {
  weapon: 'Arma',
  armor: 'Armadura',
  equipment: 'Equipamento',
  consumable: 'Consumivel',
  treasure: 'Tesouro',
  backpack: 'Mochila',
  shield: 'Escudo',
  kit: 'Kit',
}

function formatLevel(level: number) {
  return level < 0 ? `${level}` : `+${level}`
}

function labelize(value: string) {
  return value
    .split(/[-_]/)
    .map((part) => (part ? `${part[0].toLocaleUpperCase()}${part.slice(1)}` : part))
    .join(' ')
}

function compactEntries(entries: Array<GameSystemItemSheetEntry | null>) {
  return entries.filter((entry): entry is GameSystemItemSheetEntry => entry !== null)
}

function compactStats(stats: Array<GameSystemItemDisplayStat | null>) {
  return stats.filter((stat): stat is GameSystemItemDisplayStat => stat !== null)
}

function compactSections(sections: Array<GameSystemItemSheetSection | null>) {
  return sections.filter((section): section is GameSystemItemSheetSection => section !== null && section.entries.length > 0)
}

function toDisplaySheet(item: Pathfinder2eCompendiumItem): GameSystemItemSheet {
  const details = compactEntries([
    { key: 'type', label: 'Tipo', value: ITEM_TYPE_LABELS[item.itemType] ?? labelize(item.itemType) },
    { key: 'level', label: 'Nivel', value: formatLevel(item.level) },
    { key: 'rarity', label: 'Raridade', value: labelize(item.rarity) },
    { key: 'price', label: 'Preco', value: formatPathfinder2eCurrency(item.priceMinorUnit) },
    { key: 'bulk', label: 'Bulk', value: item.bulk },
    item.systemData.usage ? { key: 'usage', label: 'Uso', value: labelize(item.systemData.usage) } : null,
    item.systemData.group ? { key: 'group', label: 'Grupo', value: labelize(item.systemData.group) } : null,
    item.systemData.category ? { key: 'category', label: 'Categoria', value: labelize(item.systemData.category) } : null,
  ])

  const combat = compactEntries([
    item.systemData.damage ? { key: 'damage', label: 'Dano', value: item.systemData.damage } : null,
    typeof item.systemData.ac === 'number' ? { key: 'ac', label: 'CA', value: String(item.systemData.ac) } : null,
  ])

  const description = compactEntries([
    item.systemData.description ? { key: 'text', label: 'Descricao', detail: item.systemData.description } : null,
  ])

  const source = compactEntries([
    item.systemData.publicationTitle ? { key: 'publication', label: 'Publicacao', value: item.systemData.publicationTitle } : null,
    item.systemData.license ? { key: 'license', label: 'Licenca', value: item.systemData.license } : null,
  ])

  return {
    sections: compactSections([
      { key: 'details', title: 'Detalhes', entries: details },
      { key: 'combat', title: 'Combate', entries: combat },
      { key: 'description', title: 'Descricao', entries: description },
      { key: 'source', title: 'Fonte', entries: source },
    ]),
  }
}

function toItemEntry(item: Pathfinder2eCompendiumItem): GameSystemItemEntry<Pathfinder2eCompendiumItem> {
  return {
    id: item.id,
    system: 'PATHFINDER_2E',
    itemType: item.itemType,
    name: item.name,
    source: {
      pack: item.sourcePack,
      id: item.sourceId,
      title: item.systemData.publicationTitle,
      license: item.systemData.license,
    },
    display: {
      subtitle: item.systemData.publicationTitle ? `${item.systemData.publicationTitle} - ${item.sourcePack}` : item.sourcePack,
      level: { label: 'Nivel', value: formatLevel(item.level) },
      price: { label: 'Preco', value: formatPathfinder2eCurrency(item.priceMinorUnit) },
      stats: compactStats([
        { key: 'bulk', label: 'Bulk', value: item.bulk },
        item.systemData.damage ? { key: 'damage', label: 'Dano', value: item.systemData.damage } : null,
        typeof item.systemData.ac === 'number' ? { key: 'ac', label: 'CA', value: String(item.systemData.ac) } : null,
      ]),
      tags: [item.rarity, ...item.traits],
      sheet: toDisplaySheet(item),
    },
    systemData: item,
  }
}

const PATHFINDER_2E_ITEM_BY_ID = new Map(PATHFINDER_2E_ITEM_DATA.map((item) => [item.id, item]))

function matchesSearch(item: Pathfinder2eCompendiumItem, search: string) {
  const normalized = search.trim().toLocaleLowerCase()
  if (!normalized) return true

  return item.name.toLocaleLowerCase().includes(normalized) || item.traits.some((trait) => trait.toLocaleLowerCase().includes(normalized))
}

function matchesFilters(item: Pathfinder2eCompendiumItem, filters: Record<string, string | number> | undefined) {
  if (!filters) return true
  if (typeof filters.level === 'number' && item.level !== filters.level) return false
  if (typeof filters.rarity === 'string' && item.rarity !== filters.rarity) return false
  if (typeof filters.itemType === 'string' && filters.itemType !== 'all' && item.itemType !== filters.itemType) return false
  return true
}

function filterItems(options: { search?: string; filters?: Record<string, string | number> } | undefined) {
  const search = options?.search ?? ''

  return PATHFINDER_2E_ITEM_DATA.filter((item) => matchesSearch(item, search) && matchesFilters(item, options?.filters))
}

export const pathfinder2eItemAdapter: GameSystemItemAdapter = {
  system: 'PATHFINDER_2E',
  listEntries(options) {
    const limit = options?.limit ?? 24
    const offset = options?.offset ?? 0

    return filterItems(options)
      .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
      .slice(offset, offset + limit)
      .map(toItemEntry)
  },
  countEntries(options) {
    return filterItems(options).length
  },
  findEntry(entryId) {
    const item = PATHFINDER_2E_ITEM_BY_ID.get(entryId)
    return item ? toItemEntry(item) : null
  },
}
