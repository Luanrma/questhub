import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getPathfinder2eActiveEffectDefinition,
  listPathfinder2eActiveEffectDefinitions,
} from './active-effect-definitions'
import { resolvePathfinder2eActiveEffectDisplay } from './active-effect-localization'
import {
  getPathfinder2eActiveEffectDefinitionView,
  listPathfinder2eActiveEffectDefinitionViews,
} from './active-effect-query'

const FRIGHTENED = 'conditionitems:TBSHQspnbcqxsmjL'
const OCEANIC_ARMOR = 'bestiary-effects:0jo8CUzw5lWehNg3'
const SWARMING_BITES = 'bestiary-effects:0aRm0b55015XPj7Y'

test('exact Active Effect lookup exposes the complete canonical Frightened definition', () => {
  const definition = getPathfinder2eActiveEffectDefinitionView(FRIGHTENED, 'en-US')
  assert.ok(definition)
  assert.equal(definition.definitionKey, FRIGHTENED)
  assert.equal(definition.kind, 'condition')
  assert.equal(definition.name, 'Frightened')
  assert.equal(definition.polarity, 'HARMFUL')
  assert.ok(definition.description.trim().length > 0)
  assert.ok(definition.descriptionBlocks.length > 0)
  assert.equal(definition.description.includes('<p>'), false)
  assert.deepEqual(definition.conditionValue, { isValued: true, baseValue: 1 })
  assert.equal(definition.source.sourcePack, 'conditionitems')
  assert.equal(definition.source.sourceId, 'TBSHQspnbcqxsmjL')
  assert.equal(definition.usesIconFallback, true)
  assert.deepEqual(definition.localization, {
    requestedLocale: 'en-US',
    nameLocale: 'en-US',
    descriptionLocale: 'en-US',
  })
})

test('pt-BR Active Effect presentation uses reviewed catalog translation when available', () => {
  const localized = getPathfinder2eActiveEffectDefinitionView(FRIGHTENED, 'pt-BR')
  assert.ok(localized)
  assert.equal(localized.name, 'Assustado')
  assert.match(localized.description, /medo/i)
  assert.equal(localized.description.includes('<p>'), false)
  assert.deepEqual(localized.localization, {
    requestedLocale: 'pt-BR',
    nameLocale: 'pt-BR',
    descriptionLocale: 'pt-BR',
  })
})

test('pt-BR Active Effect presentation keeps exact definitionKey overlay precedence', () => {
  const definition = getPathfinder2eActiveEffectDefinition(FRIGHTENED)
  assert.ok(definition)

  const localized = resolvePathfinder2eActiveEffectDisplay(definition, 'pt-BR', {
    [FRIGHTENED]: {
      name: '[pt-BR] Frightened',
      description: '[pt-BR] description',
    },
  })

  assert.equal(localized.name, '[pt-BR] Frightened')
  assert.equal(localized.description, '[pt-BR] description')
  assert.deepEqual(localized.localization, {
    requestedLocale: 'pt-BR',
    nameLocale: 'pt-BR',
    descriptionLocale: 'pt-BR',
  })
})

test('formatted Effect descriptions remove source HTML and Foundry macros', () => {
  const localized = getPathfinder2eActiveEffectDefinitionView(SWARMING_BITES, 'pt-BR')
  assert.ok(localized)
  assert.equal(localized.name, 'Efeito: Mordidas do Enxame')
  assert.equal(localized.description.includes('<p>'), false)
  assert.equal(localized.description.includes('@Check['), false)
  assert.match(localized.description, /teste simples CD 5/i)
  assert.ok(localized.descriptionBlocks.length > 0)
})

test('pt-BR localization reports explicit field fallback when a translation is unavailable', () => {
  const canonical = listPathfinder2eActiveEffectDefinitions().find((definition) => (
    definition.kind === 'affliction'
  ))
  if (!canonical) return

  const localized = getPathfinder2eActiveEffectDefinitionView(canonical.definitionKey, 'pt-BR')
  assert.ok(localized)
  assert.equal(localized.localization.requestedLocale, 'pt-BR')
  assert.ok(['pt-BR', 'en-US'].includes(localized.localization.nameLocale))
  assert.ok(['pt-BR', 'en-US'].includes(localized.localization.descriptionLocale))
})

test('Active Effect listing filters by semantic kind and performs bounded discovery without changing identity', () => {
  const result = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'en-US',
    kind: 'effect',
    query: 'Oceanic Armor',
    limit: 10,
  })

  assert.ok(result.page.total > 0)
  assert.ok(result.page.limit <= 100)
  assert.equal(result.items.some((definition) => definition.definitionKey === OCEANIC_ARMOR), true)
  assert.ok(result.items.every((definition) => definition.kind === 'effect'))
})

test('Active Effect discovery can search by stable definitionKey but exact lookup never resolves by name', () => {
  const result = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'en-US',
    query: FRIGHTENED,
    limit: 10,
  })

  assert.equal(result.items.some((definition) => definition.definitionKey === FRIGHTENED), true)
  assert.equal(getPathfinder2eActiveEffectDefinitionView('Frightened', 'en-US'), null)
})

test('Active Effect listing mirrors the canonical published Affliction inventory without inventing entries', () => {
  const canonicalAfflictionKeys = listPathfinder2eActiveEffectDefinitions()
    .filter((definition) => definition.kind === 'affliction')
    .map((definition) => definition.definitionKey)

  const result = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'pt-BR',
    kind: 'affliction',
    limit: 5,
  })

  assert.equal(result.page.total, canonicalAfflictionKeys.length)
  assert.deepEqual(
    result.items.map((definition) => definition.definitionKey),
    canonicalAfflictionKeys.slice(0, 5),
  )
  assert.ok(result.items.every((definition) => definition.kind === 'affliction'))
})

test('Active Effect pagination is deterministic and clamps internal limits to the public maximum', () => {
  const first = listPathfinder2eActiveEffectDefinitionViews({ locale: 'en-US', offset: 0, limit: 1000 })
  const second = listPathfinder2eActiveEffectDefinitionViews({ locale: 'en-US', offset: 0, limit: 1000 })

  assert.equal(first.page.limit, 100)
  assert.deepEqual(
    first.items.map((definition) => definition.definitionKey),
    second.items.map((definition) => definition.definitionKey),
  )
})

test('Active Effect listing filters canonical polarity before pagination', () => {
  const candidate = listPathfinder2eActiveEffectDefinitions()[0]
  assert.ok(candidate)

  const result = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'en-US',
    polarity: candidate.polarity,
    limit: 100,
  })

  assert.ok(result.page.total > 0)
  assert.ok(result.items.every((definition) => definition.polarity === candidate.polarity))
})

test('Active Effect editorial filtering partitions pt-BR ready and fallback definitions before pagination', () => {
  const all = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'pt-BR',
    editorialStatus: 'all',
    limit: 100,
  })
  const ready = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'pt-BR',
    editorialStatus: 'ready',
    limit: 100,
  })
  const review = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'pt-BR',
    editorialStatus: 'review',
    limit: 100,
  })

  assert.equal(ready.page.total + review.page.total, all.page.total)
  assert.equal(ready.items.every((definition) => (
    definition.localization.nameLocale === 'pt-BR'
      && definition.localization.descriptionLocale === 'pt-BR'
  )), true)
  assert.equal(review.items.every((definition) => (
    definition.localization.nameLocale !== 'pt-BR'
      || definition.localization.descriptionLocale !== 'pt-BR'
  )), true)
})