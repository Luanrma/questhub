import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createPathfinder2eBestiaryFilterDefinitions,
  matchesPathfinder2eBestiaryFilters,
  normalizePathfinder2eBestiaryFilters,
} from './bestiary-filter'
import { PATHFINDER_2E_CONTENT_ENTRIES } from './deliveries'

test('Pathfinder item catalog exposes type, level, rarity, category, group and trait filters', () => {
  const definitions = createPathfinder2eBestiaryFilterDefinitions(
    PATHFINDER_2E_CONTENT_ENTRIES,
    'ITEMS',
    'pt-BR',
  )

  assert.deepEqual(
    definitions.map(({ id, kind }) => ({ id, kind })),
    [
      { id: 'type', kind: 'single' },
      { id: 'level', kind: 'single' },
      { id: 'rarity', kind: 'single' },
      { id: 'category', kind: 'single' },
      { id: 'group', kind: 'single' },
      { id: 'traits', kind: 'multiple' },
    ],
  )
  assert.ok(definitions.every((definition) => definition.options.length > 0))
})

test('Pathfinder item filters combine before pagination', () => {
  const candidate = PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => {
    if (entry.original.domain !== 'ITEM') return false
    const data = entry.original.data as {
      itemType?: unknown
      level?: unknown
      rarity?: unknown
      category?: unknown
      group?: unknown
      traits?: unknown
    }
    return typeof data.itemType === 'string'
      && typeof data.level === 'number'
      && typeof data.rarity === 'string'
      && typeof data.category === 'string'
      && typeof data.group === 'string'
      && Array.isArray(data.traits)
      && data.traits.length > 0
  })
  assert.ok(candidate)

  const data = candidate.original.data as {
    itemType: string
    level: number
    rarity: string
    category: string
    group: string
    traits: string[]
  }
  const definitions = createPathfinder2eBestiaryFilterDefinitions(
    PATHFINDER_2E_CONTENT_ENTRIES,
    'ITEMS',
    'en-US',
  )
  const filters = normalizePathfinder2eBestiaryFilters({
    type: [data.itemType],
    level: [String(data.level)],
    rarity: [data.rarity],
    category: [data.category],
    group: [data.group],
    traits: data.traits.slice(0, 1),
  }, definitions)

  assert.equal(matchesPathfinder2eBestiaryFilters(candidate, 'ITEMS', filters), true)
  assert.equal(
    PATHFINDER_2E_CONTENT_ENTRIES
      .filter((entry) => entry.original.domain === 'ITEM')
      .every((entry) => {
        if (!matchesPathfinder2eBestiaryFilters(entry, 'ITEMS', filters)) return true
        const item = entry.original.data as typeof data
        return item.itemType === data.itemType
          && item.level === data.level
          && item.rarity === data.rarity
          && item.category === data.category
          && item.group === data.group
          && data.traits.slice(0, 1).every((trait) => item.traits.includes(trait))
      }),
    true,
  )
})
