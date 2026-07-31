import { z } from 'zod'
import type { GameSystemContentLocale } from '../../catalog'
import { resolvePathfinder2eContentEntry } from '../content_catalog/catalog'
import type { Pathfinder2eContentEntry } from '../content_catalog/content-entry'
import { PATHFINDER_2E_CONTENT_ENTRIES } from '../content_catalog/deliveries'

export const PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE = 'questhub:pathfinder_2e'
export const PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY = 'spell'
export const PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE =
  'questhub:pathfinder_2e:spells:v1'

const pathfinder2eSpellDataSchema = z.object({
  schemaVersion: z.literal(1),
  name: z.string().trim().min(1),
  rank: z.number().int().min(1).max(10),
  rarity: z.string(),
  traits: z.array(z.string()),
  traditions: z.array(z.string()),
  description: z.string(),
  castingTime: z.string(),
  range: z.string(),
  target: z.string(),
  area: z.string().nullable(),
  duration: z.string(),
  defense: z.string().nullable(),
  damage: z.array(z.object({
    formula: z.string(),
    type: z.string(),
    kind: z.enum(['damage', 'healing', 'damage-or-healing']),
  }).strict()),
  heightening: z.string(),
}).strict()

export type Pathfinder2eCharacterSpellData = z.infer<typeof pathfinder2eSpellDataSchema>

export type Pathfinder2eCharacterSpellSnapshot = {
  namespace: typeof PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE
  typeKey: typeof PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY
  catalogNamespace: typeof PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE
  catalogContentId: string
  schemaVersion: 1
  data: Pathfinder2eCharacterSpellData
}

export type Pathfinder2eCharacterSpellPresentation = {
  id: string
  contentId: string
  baseRank: number
  name: string
  description: string
  rarity: string
  traits: string[]
  traditions: string[]
  castingTime: string
  range: string
  target: string
  area: string | null
  duration: string
  defense: string | null
  damage: Pathfinder2eCharacterSpellData['damage']
  heightening: string
  imageUrl: string | null
  createdAt: Date
}

export type Pathfinder2eSpellAreaEffectConfiguration =
  | 'NONE'
  | 'INHERITED'
  | 'CUSTOM'

export function resolvePathfinder2eSpellAreaEffectConfiguration(input: {
  hasOwnConfiguration: boolean
  hasInheritedConfiguration: boolean
}): Pathfinder2eSpellAreaEffectConfiguration {
  if (input.hasOwnConfiguration) return 'CUSTOM'
  return input.hasInheritedConfiguration ? 'INHERITED' : 'NONE'
}

function findSpellEntry(contentId: string): Pathfinder2eContentEntry | null {
  return PATHFINDER_2E_CONTENT_ENTRIES.find(
    (entry) => entry.original.domain === 'SPELL' && entry.original.contentId === contentId,
  ) ?? null
}

function parseSpellEntry(entry: Pathfinder2eContentEntry) {
  return pathfinder2eSpellDataSchema.safeParse(entry.original.data)
}

export function createPathfinder2eCharacterSpellSnapshot(
  contentId: string,
): Pathfinder2eCharacterSpellSnapshot | null {
  const entry = findSpellEntry(contentId)
  if (!entry) return null

  const parsed = parseSpellEntry(entry)
  if (!parsed.success) return null

  return {
    namespace: PATHFINDER_2E_CHARACTER_ENTRY_NAMESPACE,
    typeKey: PATHFINDER_2E_CHARACTER_SPELL_TYPE_KEY,
    catalogNamespace: PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
    catalogContentId: entry.original.contentId,
    schemaVersion: 1,
    data: parsed.data,
  }
}

export function presentPathfinder2eCharacterSpell(
  stored: {
    id: string
    catalogContentId: string | null
    data: unknown
    createdAt: Date
  },
  locale: GameSystemContentLocale,
): Pathfinder2eCharacterSpellPresentation | null {
  if (!stored.catalogContentId) return null

  const snapshot = pathfinder2eSpellDataSchema.safeParse(stored.data)
  if (!snapshot.success) return null

  const entry = findSpellEntry(stored.catalogContentId)
  const resolved = entry ? resolvePathfinder2eContentEntry(entry, locale) : null

  return {
    id: stored.id,
    contentId: stored.catalogContentId,
    baseRank: snapshot.data.rank,
    name: resolved?.display.name ?? snapshot.data.name,
    description: resolved?.display.description ?? snapshot.data.description,
    rarity: snapshot.data.rarity,
    traits: snapshot.data.traits,
    traditions: snapshot.data.traditions,
    castingTime: snapshot.data.castingTime,
    range: snapshot.data.range,
    target: snapshot.data.target,
    area: snapshot.data.area,
    duration: snapshot.data.duration,
    defense: snapshot.data.defense,
    damage: snapshot.data.damage,
    heightening: snapshot.data.heightening,
    imageUrl: entry?.original.image?.path ?? null,
    createdAt: stored.createdAt,
  }
}

export function listPathfinder2eSpellCatalog(input: {
  locale: GameSystemContentLocale
  search?: string
  rank?: number
  linkedContentIds?: ReadonlySet<string>
  page: number
  limit: number
}) {
  const normalizedSearch = input.search?.trim().toLocaleLowerCase(input.locale) ?? ''
  const matching = PATHFINDER_2E_CONTENT_ENTRIES.flatMap((entry) => {
    if (entry.original.domain !== 'SPELL') return []
    const parsed = parseSpellEntry(entry)
    if (!parsed.success) return []
    if (input.rank !== undefined && parsed.data.rank !== input.rank) return []

    const resolved = resolvePathfinder2eContentEntry(entry, input.locale)
    const searchable = [
      resolved.display.name,
      resolved.display.description,
      parsed.data.name,
      parsed.data.rarity,
      ...parsed.data.traits,
      ...parsed.data.traditions,
    ].join(' ').toLocaleLowerCase(input.locale)
    if (normalizedSearch && !searchable.includes(normalizedSearch)) return []

    return [{
      contentId: entry.original.contentId,
      rank: parsed.data.rank,
      name: resolved.display.name,
      description: resolved.display.description,
      rarity: parsed.data.rarity,
      traits: parsed.data.traits,
      traditions: parsed.data.traditions,
      castingTime: parsed.data.castingTime,
      imageUrl: entry.original.image?.path ?? null,
      linked: input.linkedContentIds?.has(entry.original.contentId) ?? false,
    }]
  }).sort((left, right) => (
    left.rank - right.rank
    || left.name.localeCompare(right.name, input.locale)
  ))

  const total = matching.length
  const totalPages = total === 0 ? 0 : Math.ceil(total / input.limit)
  const start = (input.page - 1) * input.limit

  return {
    entries: matching.slice(start, start + input.limit),
    pagination: {
      page: input.page,
      limit: input.limit,
      total,
      totalPages,
    },
  }
}
