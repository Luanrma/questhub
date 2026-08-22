import assert from 'node:assert/strict'
import test from 'node:test'
import { getPathfinder2eActiveEffectDefinition } from './active-effect-definitions'
import { resolvePathfinder2eActiveEffectDisplay } from './active-effect-localization'
import {
  getPathfinder2eActiveEffectDefinitionView,
  listPathfinder2eActiveEffectDefinitionViews,
} from './active-effect-query'

const FRIGHTENED = 'conditionitems:TBSHQspnbcqxsmjL'
const OCEANIC_ARMOR = 'bestiary-effects:0jo8CUzw5lWehNg3'

test('exact Active Effect lookup exposes the complete canonical Frightened definition', () => {
  const definition = getPathfinder2eActiveEffectDefinitionView(FRIGHTENED, 'en-US')
  assert.ok(definition)
  assert.equal(definition.definitionKey, FRIGHTENED)
  assert.equal(definition.kind, 'condition')
  assert.equal(definition.name, 'Frightened')
  assert.equal(definition.polarity, 'HARMFUL')
  assert.ok(definition.description.trim().length > 0)
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

test('pt-BR Active Effect presentation falls back field-by-field to en-US when no overlay exists', () => {
  const original = getPathfinder2eActiveEffectDefinitionView(FRIGHTENED, 'en-US')
  const localized = getPathfinder2eActiveEffectDefinitionView(FRIGHTENED, 'pt-BR')
  assert.ok(original)
  assert.ok(localized)
  assert.equal(localized.name, original.name)
  assert.equal(localized.description, original.description)
  assert.deepEqual(localized.localization, {
    requestedLocale: 'pt-BR',
    nameLocale: 'en-US',
    descriptionLocale: 'en-US',
  })
})

test('pt-BR Active Effect presentation uses an exact definitionKey overlay when one is available', () => {
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

test('Active Effect listing exposes published Afflictions through the same read-only contract', () => {
  const result = listPathfinder2eActiveEffectDefinitionViews({
    locale: 'pt-BR',
    kind: 'affliction',
    limit: 5,
  })

  assert.ok(result.page.total > 0)
  assert.ok(result.items.length > 0)
  assert.ok(result.items.every((definition) => definition.kind === 'affliction'))
  assert.ok(result.items.every((definition) => definition.description !== undefined))
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
