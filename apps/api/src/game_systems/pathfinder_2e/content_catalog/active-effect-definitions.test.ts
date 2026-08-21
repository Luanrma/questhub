import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getPathfinder2eActiveEffectDefinition,
  listPathfinder2eActiveEffectDefinitions,
  PATHFINDER_2E_ACTIVE_EFFECT_DEFINITION_SOURCE_COMMIT,
  PATHFINDER_2E_CANONICAL_CONDITIONS,
  PATHFINDER_2E_MISSING_CANONICAL_CONDITION_SLUGS,
} from './active-effect-definitions'
import { PATHFINDER_2E_BESTIARY_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/bestiary'
import { PATHFINDER_2E_ITEM_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/items'
import { PATHFINDER_2E_SPELL_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/spells'
import type { Pathfinder2eSourceReferenceTuple } from './source-references'

const referenceIndexes: ReadonlyArray<
  Readonly<Record<string, readonly Pathfinder2eSourceReferenceTuple[]>>
> = [
  PATHFINDER_2E_BESTIARY_SOURCE_REFERENCE_INDEX,
  PATHFINDER_2E_SPELL_SOURCE_REFERENCE_INDEX,
  PATHFINDER_2E_ITEM_SOURCE_REFERENCE_INDEX,
]

function allReferences(): Pathfinder2eSourceReferenceTuple[] {
  return referenceIndexes.flatMap((index) => Object.values(index).flatMap((references) => [...references]))
}

function definitionBySlug(slug: string) {
  return listPathfinder2eActiveEffectDefinitions().find((definition) => definition.source.slug === slug) ?? null
}

test('PF2e active-effect definitions remain locked to the QH-EFF-004 source revision', () => {
  assert.equal(
    PATHFINDER_2E_ACTIVE_EFFECT_DEFINITION_SOURCE_COMMIT,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
})

test('all canonical Conditions are represented exactly once without runtime-only malevolence', () => {
  assert.equal(PATHFINDER_2E_CANONICAL_CONDITIONS.length, 43)
  assert.deepEqual(PATHFINDER_2E_MISSING_CANONICAL_CONDITION_SLUGS, [])

  const conditionDefinitions = listPathfinder2eActiveEffectDefinitions()
    .filter((definition) => definition.kind === 'condition')

  assert.equal(conditionDefinitions.length, 43)
  assert.equal(conditionDefinitions.filter((definition) => definition.source.slug === 'malevolence').length, 0)
  assert.equal(new Set(conditionDefinitions.map((definition) => definition.definitionKey)).size, 43)

  const hostile = definitionBySlug('hostile')
  assert.ok(hostile)
  assert.equal(hostile.definitionKey, 'conditionitems:ud7gTLwPeklzYSXG')
  assert.equal(hostile.polarity, 'NEUTRAL')
  assert.deepEqual(hostile.conditionValue, { isValued: false, baseValue: null })
})

test('canonical Condition polarity and valued metadata follow the approved manifest', () => {
  const frightened = definitionBySlug('frightened')
  assert.ok(frightened)
  assert.equal(frightened.definitionKey, 'conditionitems:TBSHQspnbcqxsmjL')
  assert.equal(frightened.polarity, 'HARMFUL')
  assert.deepEqual(frightened.conditionValue, { isValued: true, baseValue: 1 })

  assert.equal(definitionBySlug('concealed')?.polarity, 'NEUTRAL')
  assert.equal(definitionBySlug('quickened')?.polarity, 'BENEFICIAL')
  assert.equal(definitionBySlug('prone')?.polarity, 'HARMFUL')
  assert.equal(definitionBySlug('friendly')?.polarity, 'NEUTRAL')

  const persistentDamage = definitionBySlug('persistent-damage')
  assert.ok(persistentDamage)
  assert.equal(persistentDamage.polarity, 'HARMFUL')
  assert.deepEqual(persistentDamage.conditionValue, { isValued: false, baseValue: null })
})

test('referenced PF2e effects are neutral definitions and afflictions are harmful definitions', () => {
  const definitions = listPathfinder2eActiveEffectDefinitions()
  const effects = definitions.filter((definition) => definition.kind === 'effect')
  const afflictions = definitions.filter((definition) => definition.kind === 'affliction')

  assert.ok(effects.length > 0)
  assert.ok(effects.every((definition) => definition.polarity === 'NEUTRAL'))
  assert.ok(afflictions.every((definition) => definition.polarity === 'HARMFUL'))

  const aerialForm = getPathfinder2eActiveEffectDefinition('spell-effects:mvMWmP3m9Xawbwpx')
  assert.ok(aerialForm)
  assert.equal(aerialForm.kind, 'effect')
  assert.equal(aerialForm.name, 'Spell Effect: Aerial Form')
  assert.equal(aerialForm.polarity, 'NEUTRAL')
  assert.equal(aerialForm.description, null)
  assert.equal(aerialForm.iconUrl, null)
})

test('definition set combines resolved semantic targets with exact canonical supplements and excludes unresolved Items', () => {
  const canonicalConditionNames = new Set(
    PATHFINDER_2E_CANONICAL_CONDITIONS.map((condition) => condition.compendiumKey),
  )
  const expectedKeys = new Set<string>()

  for (const tuple of allReferences()) {
    const uuid = tuple[3]
    const sourceId = tuple[6]
    const targetType = tuple[8]
    if (!sourceId || !targetType) continue

    const match = uuid.match(/^Compendium\.pf2e\.([^.]+)\.Item\.(.+)$/)
    if (!match) continue

    const sourcePack = match[1]
    const compendiumKey = match[2]
    if (targetType === 'condition') {
      if (sourcePack !== 'conditionitems' || !canonicalConditionNames.has(compendiumKey)) continue
    }

    expectedKeys.add(`${sourcePack}:${sourceId}`)
  }

  expectedKeys.add('conditionitems:ud7gTLwPeklzYSXG')

  const actualKeys = listPathfinder2eActiveEffectDefinitions().map((definition) => definition.definitionKey)
  assert.deepEqual(actualKeys, [...expectedKeys].sort((left, right) => left.localeCompare(right)))
})

test('catalog output is deterministic, unique and contains no external presentation dependency', () => {
  const first = listPathfinder2eActiveEffectDefinitions()
  const second = listPathfinder2eActiveEffectDefinitions()

  assert.equal(first, second)
  assert.equal(new Set(first.map((definition) => definition.definitionKey)).size, first.length)
  assert.deepEqual(
    first.map((definition) => definition.definitionKey),
    [...first.map((definition) => definition.definitionKey)].sort((left, right) => left.localeCompare(right)),
  )
  assert.ok(first.every((definition) => definition.schemaVersion === 1))
  assert.ok(first.every((definition) => definition.iconUrl === null || definition.iconUrl.startsWith('/api/')))
})
