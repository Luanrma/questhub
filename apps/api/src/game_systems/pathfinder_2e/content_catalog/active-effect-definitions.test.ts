import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getPathfinder2eActiveEffectDefinition,
  listPathfinder2eActiveEffectDefinitions,
  PATHFINDER_2E_ACTIVE_EFFECT_DEFINITION_SOURCE_COMMIT,
  PATHFINDER_2E_CANONICAL_CONDITIONS,
  PATHFINDER_2E_MISSING_CANONICAL_CONDITION_SLUGS,
} from './active-effect-definitions'

function definitionBySlug(slug: string) {
  return listPathfinder2eActiveEffectDefinitions().find((definition) => definition.source.slug === slug) ?? null
}

test('PF2e active-effect definitions remain locked to the approved source revision', () => {
  assert.equal(
    PATHFINDER_2E_ACTIVE_EFFECT_DEFINITION_SOURCE_COMMIT,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
})

test('all 43 canonical Conditions are represented exactly once', () => {
  assert.equal(PATHFINDER_2E_CANONICAL_CONDITIONS.length, 43)
  assert.deepEqual(PATHFINDER_2E_MISSING_CANONICAL_CONDITION_SLUGS, [])

  const conditions = listPathfinder2eActiveEffectDefinitions()
    .filter((definition) => definition.kind === 'condition')
  assert.equal(conditions.length, 43)
  assert.equal(new Set(conditions.map((definition) => definition.definitionKey)).size, 43)
  assert.equal(conditions.some((definition) => definition.source.slug === 'malevolence'), false)
})

test('Frightened preserves canonical presentation metadata, value and explicit polarity', () => {
  const frightened = definitionBySlug('frightened')
  assert.ok(frightened)
  assert.equal(frightened.definitionKey, 'conditionitems:TBSHQspnbcqxsmjL')
  assert.equal(frightened.polarity, 'HARMFUL')
  assert.deepEqual(frightened.conditionValue, { isValued: true, baseValue: 1 })
  assert.ok(frightened.description.trim().length > 0)
  assert.ok(frightened.source.publicationTitle)
  assert.ok(frightened.source.imagePath)
})

test('approved Condition polarities remain explicit and canonical metadata is retained', () => {
  assert.equal(definitionBySlug('concealed')?.polarity, 'NEUTRAL')
  assert.equal(definitionBySlug('quickened')?.polarity, 'BENEFICIAL')
  assert.equal(definitionBySlug('prone')?.polarity, 'HARMFUL')
  assert.equal(definitionBySlug('friendly')?.polarity, 'NEUTRAL')
  assert.equal(definitionBySlug('friendly')?.group, 'attitudes')

  const persistentDamage = definitionBySlug('persistent-damage')
  assert.ok(persistentDamage)
  assert.equal(persistentDamage.polarity, 'HARMFUL')
  assert.deepEqual(persistentDamage.conditionValue, { isValued: false, baseValue: null })
})

test('published Effect definitions preserve canonical description and structural identity', () => {
  const aerialForm = getPathfinder2eActiveEffectDefinition('spell-effects:mvMWmP3m9Xawbwpx')
  assert.ok(aerialForm)
  assert.equal(aerialForm.kind, 'effect')
  assert.equal(aerialForm.name, 'Spell Effect: Aerial Form')
  assert.ok(aerialForm.description.trim().length > 0)
  assert.ok(aerialForm.source.imagePath)
  assert.equal(aerialForm.definitionKey, `${aerialForm.source.sourcePack}:${aerialForm.source.sourceId}`)
})

test('every published definition has presentation data and an explicit polarity value', () => {
  const definitions = listPathfinder2eActiveEffectDefinitions()
  assert.ok(definitions.length > 43)
  assert.ok(definitions.every((definition) => definition.name.trim().length > 0))
  assert.ok(definitions.every((definition) => definition.description.trim().length > 0))
  assert.ok(definitions.every((definition) => ['BENEFICIAL', 'HARMFUL', 'NEUTRAL'].includes(definition.polarity)))
  assert.ok(definitions.every((definition) => definition.schemaVersion === 1))
})

test('catalog output is deterministic, unique and has no external runtime icon dependency', () => {
  const first = listPathfinder2eActiveEffectDefinitions()
  const second = listPathfinder2eActiveEffectDefinitions()

  assert.equal(first, second)
  assert.equal(new Set(first.map((definition) => definition.definitionKey)).size, first.length)
  assert.deepEqual(
    first.map((definition) => definition.definitionKey),
    [...first.map((definition) => definition.definitionKey)].sort((left, right) => left.localeCompare(right)),
  )
  assert.ok(first.every((definition) => definition.iconUrl === null || definition.iconUrl.startsWith('/api/')))
})
