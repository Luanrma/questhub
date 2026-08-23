import assert from 'node:assert/strict'
import test from 'node:test'
import { pathfinder2eCatalogProvider } from './catalog-provider'
import { PATHFINDER_2E_CONTENT_ENTRIES } from './deliveries'
import { listPathfinder2eActiveEffectDefinitions } from './active-effect-definitions'

function bestiaryEntry(entryType: 'CREATURE' | 'HAZARD') {
  return PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => {
    if (entry.original.domain !== 'BESTIARY') return false
    const data = entry.original.data as { entryType?: unknown }
    return entryType === 'HAZARD'
      ? data.entryType === 'HAZARD'
      : data.entryType !== 'HAZARD'
  })
}

function bestiaryData(entry: (typeof PATHFINDER_2E_CONTENT_ENTRIES)[number]) {
  return entry.original.data as {
    level: number
    rarity: string
    size: string
    traits: string[]
    entryType?: 'CREATURE' | 'HAZARD'
  }
}

test('Pathfinder catalog tokenizes creatures but never hazards', async () => {
  const creature = bestiaryEntry('CREATURE')
  const hazard = bestiaryEntry('HAZARD')
  assert.ok(creature)
  assert.ok(hazard)

  const creatureSheet = await pathfinder2eCatalogProvider.getTokenizableSheet?.({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: creature.original.contentId,
  })
  const hazardSheet = await pathfinder2eCatalogProvider.getTokenizableSheet?.({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: hazard.original.contentId,
  })

  assert.equal(creatureSheet?.sheet.id, creature.original.contentId)
  assert.equal(creatureSheet?.sheet.canCreateToken, true)
  assert.equal(creatureSheet?.sheet.description, null)
  assert.deepEqual(creatureSheet?.data, {
    schemaVersion: 1,
    hitPoints: {
      current: (creature.original.data as { hitPoints: number }).hitPoints,
      maximum: (creature.original.data as { hitPoints: number }).hitPoints,
    },
  })
  const expectedTokenSizes: Record<string, number> = {
    tiny: 0.5,
    small: 1,
    medium: 1,
    large: 2,
    huge: 3,
    gargantuan: 4,
  }
  assert.equal(
    creatureSheet?.tokenDefaults?.size,
    expectedTokenSizes[bestiaryData(creature).size.toLowerCase()] ?? 1,
  )
  assert.equal(hazardSheet, null)
})

test('Pathfinder publishes bestiary filter definitions through the neutral catalog contract', async () => {
  const result = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    page: 1,
    limit: 1,
  })

  assert.deepEqual(
    result.filterDefinitions?.map(({ id, kind }) => ({ id, kind })),
    [
      { id: 'type', kind: 'single' },
      { id: 'level', kind: 'single' },
      { id: 'rarity', kind: 'single' },
      { id: 'traits', kind: 'multiple' },
    ],
  )
  assert.ok(result.filterDefinitions?.find(({ id }) => id === 'level')?.options.length)
  assert.ok(result.filterDefinitions?.find(({ id }) => id === 'rarity')?.options.length)
  assert.ok(result.filterDefinitions?.find(({ id }) => id === 'traits')?.options.length)

  const spells = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    page: 1,
    limit: 1,
  })
  assert.deepEqual(spells.filterDefinitions, [])
})

test('Pathfinder combines level, rarity and every selected bestiary trait before pagination', async () => {
  const candidate = PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => {
    if (entry.original.domain !== 'BESTIARY') return false
    const data = bestiaryData(entry)
    return Number.isFinite(data.level)
      && typeof data.rarity === 'string'
      && data.traits.length >= 2
  })
  assert.ok(candidate)

  const candidateData = bestiaryData(candidate)
  const selectedTraits = candidateData.traits.slice(0, 2)
  const result = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    filters: {
      level: [String(candidateData.level)],
      rarity: [candidateData.rarity],
      traits: selectedTraits,
    },
    page: 1,
    limit: 60,
  })

  assert.ok(result.pagination.total > 0)
  for (const card of result.entries) {
    const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
      ({ original }) => original.contentId === card.id,
    )
    assert.ok(entry)
    const data = bestiaryData(entry)
    assert.equal(data.level, candidateData.level)
    assert.equal(data.rarity, candidateData.rarity)
    assert.equal(selectedTraits.every((trait) => data.traits.includes(trait)), true)
  }
})

test('Pathfinder ignores unknown opaque filters and supports the provider-owned type filter', async () => {
  const baseQuery = {
    campaignId: 'campaign-1',
    domain: 'BESTIARY' as const,
    locale: 'en-US' as const,
    page: 1,
    limit: 1,
  }
  const [all, unknown, hazards] = await Promise.all([
    pathfinder2eCatalogProvider.list(baseQuery),
    pathfinder2eCatalogProvider.list({
      ...baseQuery,
      filters: { unsupported: ['value'], level: ['not-a-level'] },
    }),
    pathfinder2eCatalogProvider.list({
      ...baseQuery,
      filters: { type: ['hazards'] },
    }),
  ])

  assert.equal(unknown.pagination.total, all.pagination.total)
  assert.ok(hazards.pagination.total > 0)
  assert.equal(
    hazards.entries.every((card) => {
      const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
        ({ original }) => original.contentId === card.id,
      )
      return entry ? bestiaryData(entry).entryType === 'HAZARD' : false
    }),
    true,
  )
})

test('Pathfinder resolves the original catalog icon for existing inventory items', async () => {
  const itemWithIcon = PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => (
    entry.original.domain === 'ITEM'
    && entry.original.image?.path?.startsWith('/api/game-systems/pathfinder-2e/icons/')
  ))
  assert.ok(itemWithIcon)

  const resolvedImageUrl = await pathfinder2eCatalogProvider.resolveInventoryItemImageUrl?.(
    itemWithIcon.original.contentId,
  )

  assert.equal(resolvedImageUrl, itemWithIcon.original.image?.path)
  assert.equal(
    await pathfinder2eCatalogProvider.resolveInventoryItemImageUrl?.('unknown-item'),
    null,
  )
})

test('Pathfinder exposes canonical Active Effects as a read-only Compendium domain', async () => {
  const canonical = listPathfinder2eActiveEffectDefinitions()
  assert.ok(canonical.length > 0)

  const result = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'EFFECTS',
    locale: 'pt-BR',
    page: 1,
    limit: 5,
  })

  assert.equal(result.pagination.total, canonical.length)
  assert.deepEqual(
    result.entries.map((entry) => entry.id),
    canonical.slice(0, 5).map((definition) => definition.definitionKey),
  )
  assert.deepEqual(
    result.filterDefinitions?.map(({ id, kind }) => ({ id, kind })),
    [
      { id: 'kind', kind: 'single' },
      { id: 'polarity', kind: 'single' },
    ],
  )
  assert.equal(result.entries.every((entry) => entry.canCreateToken === undefined), true)
})

test('Pathfinder applies Effects kind and polarity filters before Compendium pagination', async () => {
  const canonical = listPathfinder2eActiveEffectDefinitions()
  const candidate = canonical.find((definition) => definition.kind === 'condition') ?? canonical[0]
  assert.ok(candidate)

  const result = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'EFFECTS',
    locale: 'en-US',
    filters: {
      kind: [candidate.kind],
      polarity: [candidate.polarity],
    },
    page: 1,
    limit: 100,
  })

  assert.ok(result.pagination.total > 0)
  for (const card of result.entries) {
    const definition = canonical.find((item) => item.definitionKey === card.id)
    assert.ok(definition)
    assert.equal(definition.kind, candidate.kind)
    assert.equal(definition.polarity, candidate.polarity)
  }
})

test('Pathfinder Effects detail resolves only by stable definitionKey and never creates a Token', async () => {
  const canonical = listPathfinder2eActiveEffectDefinitions()
  const candidate = canonical[0]
  assert.ok(candidate)

  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'EFFECTS',
    locale: 'pt-BR',
    contentId: candidate.definitionKey,
  })
  const byName = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'EFFECTS',
    locale: 'pt-BR',
    contentId: candidate.name,
  })

  assert.equal(sheet?.id, candidate.definitionKey)
  assert.ok(sheet?.description?.trim().length)
  assert.equal(sheet?.canCreateToken, undefined)
  assert.ok(sheet?.sections.some((section) => section.title === 'Identidade'))
  assert.equal(byName, null)
})