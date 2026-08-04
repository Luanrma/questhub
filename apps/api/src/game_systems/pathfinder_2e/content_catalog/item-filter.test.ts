import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createPathfinder2eBestiaryFilterDefinitions,
  matchesPathfinder2eBestiaryFilters,
  normalizePathfinder2eBestiaryFilters,
} from './bestiary-filter'
import { pathfinder2eCatalogProvider } from './catalog-provider'
import { PATHFINDER_2E_CONTENT_ENTRIES } from './deliveries'

function filterableItem() {
  return PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => {
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
}

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

test('Pathfinder item filters combine through the catalog provider before pagination', async () => {
  const candidate = filterableItem()
  assert.ok(candidate)

  const data = candidate.original.data as {
    itemType: string
    level: number
    rarity: string
    category: string
    group: string
    traits: string[]
  }
  const filters = {
    type: [data.itemType],
    level: [String(data.level)],
    rarity: [data.rarity],
    category: [data.category],
    group: [data.group],
    traits: data.traits.slice(0, 1),
  }
  const result = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'ITEMS',
    locale: 'en-US',
    filters,
    page: 1,
    limit: 1,
  })

  assert.ok(result.pagination.total > 0)
  assert.equal(result.entries.length, 1)
  const returned = PATHFINDER_2E_CONTENT_ENTRIES.find(
    (entry) => entry.original.contentId === result.entries[0]?.id,
  )
  assert.ok(returned)
  const returnedData = returned.original.data as typeof data
  assert.equal(returnedData.itemType, data.itemType)
  assert.equal(returnedData.level, data.level)
  assert.equal(returnedData.rarity, data.rarity)
  assert.equal(returnedData.category, data.category)
  assert.equal(returnedData.group, data.group)
  assert.equal(filters.traits.every((trait) => returnedData.traits.includes(trait)), true)
})

test('Pathfinder item filter matcher accepts the selected candidate', () => {
  const candidate = filterableItem()
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
})
