import type {
  GameSystemCharacterOptionDisplayStat,
  GameSystemCharacterOptionEntry,
  GameSystemCharacterOptionKind,
} from '../../../../game-system-core/src/server/character-options'
import { PATHFINDER_2E_ANCESTRIES } from './data/ancestries.generated'
import { PATHFINDER_2E_BACKGROUNDS } from './data/backgrounds.generated'
import { PATHFINDER_2E_CLASSES } from './data/classes.generated'
import { PATHFINDER_2E_HERITAGES } from './data/heritages.generated'
import { PATHFINDER_2E_CHARACTER_OPTIONS_SOURCE_SUMMARY } from './data/summary.generated'
import { isCompatibleHeritage } from './compatibility'
import type {
  Pathfinder2eAncestryEntry,
  Pathfinder2eBackgroundEntry,
  Pathfinder2eCharacterOptionEntry,
  Pathfinder2eClassEntry,
  Pathfinder2eHeritageEntry,
} from './models'

export { PATHFINDER_2E_CHARACTER_OPTIONS_SOURCE_SUMMARY }
export { PATHFINDER_2E_ANCESTRIES, PATHFINDER_2E_BACKGROUNDS, PATHFINDER_2E_CLASSES, PATHFINDER_2E_HERITAGES }

export const PATHFINDER_2E_CHARACTER_OPTIONS: Pathfinder2eCharacterOptionEntry[] = [
  ...PATHFINDER_2E_CLASSES,
  ...PATHFINDER_2E_ANCESTRIES,
  ...PATHFINDER_2E_HERITAGES,
  ...PATHFINDER_2E_BACKGROUNDS,
]

const OPTIONS_BY_KIND: Record<GameSystemCharacterOptionKind, Pathfinder2eCharacterOptionEntry[]> = {
  class: PATHFINDER_2E_CLASSES,
  ancestry: PATHFINDER_2E_ANCESTRIES,
  heritage: PATHFINDER_2E_HERITAGES,
  background: PATHFINDER_2E_BACKGROUNDS,
}

const OPTIONS_BY_ID = new Map(PATHFINDER_2E_CHARACTER_OPTIONS.map((entry) => [entry.id, entry]))
const OPTIONS_BY_SOURCE = new Map(
  PATHFINDER_2E_CHARACTER_OPTIONS.map((entry) => [`${entry.kind}::${entry.source.sourcePack}::${entry.source.sourceId}`, entry]),
)
const ANCESTRIES_BY_ID = new Map(PATHFINDER_2E_ANCESTRIES.map((entry) => [entry.id, entry]))

function labelize(value: string) {
  return value
    .split(/[-_]/)
    .map((part) => (part ? `${part[0].toLocaleUpperCase()}${part.slice(1)}` : part))
    .join(' ')
}

function formatAttributes(values: string[]) {
  return values.map((value) => value.toLocaleUpperCase()).join(', ')
}

function compactStats(stats: Array<GameSystemCharacterOptionDisplayStat | null>) {
  return stats.filter((stat): stat is GameSystemCharacterOptionDisplayStat => stat !== null)
}

function classStats(entry: Pathfinder2eClassEntry) {
  return compactStats([
    { key: 'hitPointsPerLevel', label: 'PV/nivel', value: String(entry.hitPointsPerLevel) },
    { key: 'keyAbility', label: 'Atributo chave', value: formatAttributes(entry.keyAbility.options) },
    { key: 'trainedSkills', label: 'Pericias', value: `+${entry.trainedSkills.additional}` },
  ])
}

function ancestryStats(entry: Pathfinder2eAncestryEntry) {
  return compactStats([
    { key: 'hitPoints', label: 'PV', value: String(entry.hitPoints) },
    { key: 'speedFeet', label: 'Mov.', value: `${entry.speedFeet} ft` },
    { key: 'vision', label: 'Visao', value: labelize(entry.vision) },
  ])
}

function heritageStats(entry: Pathfinder2eHeritageEntry) {
  return compactStats([
    { key: 'kind', label: 'Tipo', value: entry.versatile ? 'Versatil' : 'Especifica' },
    entry.ancestry ? { key: 'ancestry', label: 'Ancestralidade', value: entry.ancestry.name } : null,
  ])
}

function backgroundStats(entry: Pathfinder2eBackgroundEntry) {
  const trained = [...entry.trainedSkills.skills, ...entry.trainedSkills.lore]
  return compactStats([
    { key: 'boosts', label: 'Boosts', value: String(entry.attributes.boosts.length) },
    trained.length ? { key: 'trainedSkills', label: 'Treinos', value: trained.join(', ') } : null,
  ])
}

function statsFor(entry: Pathfinder2eCharacterOptionEntry) {
  if (entry.kind === 'class') return classStats(entry)
  if (entry.kind === 'ancestry') return ancestryStats(entry)
  if (entry.kind === 'heritage') return heritageStats(entry)
  return backgroundStats(entry)
}

function subtitleFor(entry: Pathfinder2eCharacterOptionEntry) {
  const publication = entry.source.publication.title
  return publication ? `${publication} - ${entry.source.sourcePack}` : entry.source.sourcePack
}

export function toCharacterOptionEntry(
  entry: Pathfinder2eCharacterOptionEntry,
): GameSystemCharacterOptionEntry<Pathfinder2eCharacterOptionEntry> {
  return {
    id: entry.id,
    system: 'PATHFINDER_2E',
    kind: entry.kind,
    slug: entry.slug,
    name: entry.name,
    source: {
      pack: entry.source.sourcePack,
      id: entry.source.sourceId,
      path: entry.source.sourcePath,
      publication: entry.source.publication.title ?? undefined,
      license: entry.source.publication.license ?? undefined,
      remaster: entry.source.publication.remaster,
    },
    display: {
      subtitle: subtitleFor(entry),
      description: entry.description.plainText,
      image: entry.source.image ?? undefined,
      tags: [entry.rarity, ...entry.traits],
      stats: statsFor(entry),
    },
    systemData: entry,
  }
}

function matchesSearch(entry: Pathfinder2eCharacterOptionEntry, search: string) {
  const normalized = search.trim().toLocaleLowerCase()
  if (!normalized) return true

  return (
    entry.name.toLocaleLowerCase().includes(normalized) ||
    entry.slug.toLocaleLowerCase().includes(normalized) ||
    entry.description.plainText.toLocaleLowerCase().includes(normalized) ||
    entry.traits.some((trait) => trait.toLocaleLowerCase().includes(normalized))
  )
}

function matchesRarity(entry: Pathfinder2eCharacterOptionEntry, filters: Record<string, string | number | boolean> | undefined) {
  if (!filters) return true
  if (typeof filters.rarity === 'string' && filters.rarity !== 'all' && entry.rarity !== filters.rarity) return false
  return true
}

function matchesHeritageAncestry(entry: Pathfinder2eCharacterOptionEntry, filters: Record<string, string | number | boolean> | undefined) {
  if (entry.kind !== 'heritage') return true
  if (!filters || typeof filters.ancestryId !== 'string' || !filters.ancestryId) return true

  const ancestry = ANCESTRIES_BY_ID.get(filters.ancestryId)
  if (!ancestry) return false
  return isCompatibleHeritage(entry, ancestry)
}

export function listPathfinder2eCharacterOptions(options: {
  kind: GameSystemCharacterOptionKind
  search?: string
  filters?: Record<string, string | number | boolean>
}) {
  const search = options.search ?? ''

  return OPTIONS_BY_KIND[options.kind].filter(
    (entry) => matchesSearch(entry, search) && matchesRarity(entry, options.filters) && matchesHeritageAncestry(entry, options.filters),
  )
}

export function findPathfinder2eCharacterOption(kind: GameSystemCharacterOptionKind, entryId: string) {
  const entry = OPTIONS_BY_ID.get(entryId)
  return entry?.kind === kind ? entry : null
}

export function findPathfinder2eCharacterOptionBySource(kind: GameSystemCharacterOptionKind, sourcePack: string, sourceId: string) {
  const entry = OPTIONS_BY_SOURCE.get(`${kind}::${sourcePack}::${sourceId}`)
  return entry ?? null
}

