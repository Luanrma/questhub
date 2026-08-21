import assert from 'node:assert/strict'
import test from 'node:test'
import { getPathfinder2eActiveEffectDefinition } from './active-effect-definitions'
import {
  getPathfinder2eItemEffectMappings,
  listPathfinder2ePotentialItemEffects,
  PATHFINDER_2E_ITEM_EFFECT_MAPPING_SOURCE_COMMIT,
} from './item-effect-mappings'
import { PATHFINDER_2E_ITEM_ENTRIES } from './items'
import { getPathfinder2eSourceReferences } from './source-references'

const OIL_OF_POTENCY = 'pf2e:item:equipment-srd:oil-of-potency'
const ABYSIUM_CHUNK = 'pf2e:item:equipment-srd:abysium-chunk'

test('PF2e Item effect mappings remain locked to the semantic catalog source revision', () => {
  assert.equal(
    PATHFINDER_2E_ITEM_EFFECT_MAPPING_SOURCE_COMMIT,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
})

test('every resolved semantic Item reference is accounted exactly once', () => {
  let expectedTotal = 0
  let actualTotal = 0

  for (const entry of PATHFINDER_2E_ITEM_ENTRIES) {
    const contentId = entry.original.contentId
    const expectedReferences = getPathfinder2eSourceReferences(contentId).filter((reference) => (
      reference.target.type
      && reference.target.sourcePack
      && reference.target.sourceId
    ))
    const mappings = getPathfinder2eItemEffectMappings(contentId)

    assert.equal(
      mappings.length,
      expectedReferences.length,
      `semantic Item reference coverage mismatch for ${contentId}`,
    )
    assert.deepEqual(
      mappings.map((mapping) => mapping.occurrenceIndex),
      mappings.map((_, index) => index),
      `occurrence indexes must be stable and gapless for ${contentId}`,
    )

    expectedTotal += expectedReferences.length
    actualTotal += mappings.length
  }

  assert.ok(expectedTotal > 0)
  assert.equal(actualTotal, expectedTotal)
})

test('unresolved PF2e Item targets are never promoted into Item effect mappings', () => {
  for (const entry of PATHFINDER_2E_ITEM_ENTRIES) {
    const contentId = entry.original.contentId
    const unresolved = getPathfinder2eSourceReferences(contentId).filter((reference) => (
      reference.target.documentType === 'Item' && !reference.target.type
    ))
    if (unresolved.length === 0) continue

    const mappedSourceCoordinates = new Set(
      getPathfinder2eItemEffectMappings(contentId).map((mapping) => (
        `${mapping.source.sourcePath}\u0000${mapping.source.sourceIndex}`
      )),
    )

    for (const reference of unresolved) {
      assert.equal(
        mappedSourceCoordinates.has(`${reference.sourcePath}\u0000${reference.sourceIndex}`),
        false,
        `unresolved target was promoted for ${contentId}`,
      )
    }
  }
})

test('every Item mapping resolves to the QH-EFF-005 definition with matching kind', () => {
  for (const entry of PATHFINDER_2E_ITEM_ENTRIES) {
    for (const mapping of getPathfinder2eItemEffectMappings(entry.original.contentId)) {
      const definition = getPathfinder2eActiveEffectDefinition(mapping.definitionKey)
      assert.ok(definition, `missing definition ${mapping.definitionKey}`)
      assert.equal(mapping.kind, definition.kind)
      assert.equal(mapping.schemaVersion, 1)
    }
  }
})

test('potential Item classification is restricted to approved structural evidence', () => {
  const approvedPotentialEvidence = new Set([
    'AFFLICTION_STAGE',
    'DEGREE_OF_SUCCESS',
    'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE',
    'STANDALONE_REFERENCE',
  ])

  let referenceOnlyCount = 0

  for (const entry of PATHFINDER_2E_ITEM_ENTRIES) {
    const mappings = getPathfinder2eItemEffectMappings(entry.original.contentId)
    const potentials = listPathfinder2ePotentialItemEffects(entry.original.contentId)

    assert.deepEqual(potentials, mappings.filter((mapping) => mapping.potential))

    for (const mapping of mappings) {
      if (mapping.potential) {
        assert.equal(
          approvedPotentialEvidence.has(mapping.evidence),
          true,
          `unsupported potential evidence for ${mapping.contentId}`,
        )
      } else {
        assert.equal(
          mapping.evidence === 'REFERENCE_ONLY' || mapping.evidence === 'NON_DESCRIPTION_REFERENCE',
          true,
        )
        assert.equal(mapping.outcome, null)
        assert.equal(mapping.stageHint, null)
        if (mapping.evidence === 'REFERENCE_ONLY') referenceOnlyCount += 1
      }
    }
  }

  assert.ok(referenceOnlyCount > 0, 'expected at least one semantic Item reference to remain non-potential')
})

test('Oil of Potency exposes its implicit-label equipment Effect as standalone potential', () => {
  const mappings = getPathfinder2eItemEffectMappings(OIL_OF_POTENCY)
  const effect = mappings.find((mapping) => (
    mapping.definitionKey === 'equipment-effects:1OLlwExJz7ii2Lu2'
  ))

  assert.ok(effect)
  assert.equal(effect.kind, 'effect')
  assert.equal(effect.source.label, null)
  assert.equal(effect.potential, true)
  assert.equal(effect.evidence, 'STANDALONE_REFERENCE')
  assert.equal(effect.outcome, null)
  assert.equal(effect.stageHint, null)
  assert.equal(effect.valueHint, null)
})

test('Abysium Chunk preserves explicit valued Sickened hints without deduplicating occurrences', () => {
  const mappings = getPathfinder2eItemEffectMappings(ABYSIUM_CHUNK)
  assert.equal(mappings.length, 3)

  assert.deepEqual(
    mappings.map((mapping) => ({
      definitionKey: mapping.definitionKey,
      label: mapping.source.label,
      valueHint: mapping.valueHint?.value ?? null,
    })),
    [
      {
        definitionKey: 'conditionitems:fesd1n5eVhpCSS18',
        label: 'Sickened 1',
        valueHint: 1,
      },
      {
        definitionKey: 'conditionitems:fesd1n5eVhpCSS18',
        label: 'Sickened 2',
        valueHint: 2,
      },
      {
        definitionKey: 'conditionitems:fesd1n5eVhpCSS18',
        label: 'Sickened 3',
        valueHint: 3,
      },
    ],
  )
})

test('stage hints are structurally valid and never inferred from implicit labels', () => {
  let stageMappingCount = 0

  for (const entry of PATHFINDER_2E_ITEM_ENTRIES) {
    for (const mapping of getPathfinder2eItemEffectMappings(entry.original.contentId)) {
      if (!mapping.stageHint) continue

      stageMappingCount += 1
      assert.equal(mapping.evidence, 'AFFLICTION_STAGE')
      assert.equal(mapping.potential, true)
      assert.equal(mapping.outcome, null)
      assert.equal(mapping.stageHint.source, 'STAGE_LINE')
      assert.ok(Number.isInteger(mapping.stageHint.stage) && mapping.stageHint.stage > 0)
      assert.ok(mapping.source.label)
    }
  }

  assert.ok(stageMappingCount > 0, 'expected frozen Item catalog to exercise AFFLICTION_STAGE evidence')
})

test('value hints exist only for exact explicit labels of valued Conditions', () => {
  for (const entry of PATHFINDER_2E_ITEM_ENTRIES) {
    for (const mapping of getPathfinder2eItemEffectMappings(entry.original.contentId)) {
      if (!mapping.valueHint) continue

      const definition = getPathfinder2eActiveEffectDefinition(mapping.definitionKey)
      assert.ok(definition)
      assert.equal(definition.kind, 'condition')
      assert.equal(definition.conditionValue?.isValued, true)
      assert.equal(
        mapping.source.label,
        `${definition.name} ${mapping.valueHint.value}`,
      )
      assert.equal(mapping.valueHint.source, 'REFERENCE_LABEL')
    }
  }
})

test('Item effect mapping reads are deterministic and cached per contentId', () => {
  for (const entry of PATHFINDER_2E_ITEM_ENTRIES) {
    const first = getPathfinder2eItemEffectMappings(entry.original.contentId)
    const second = getPathfinder2eItemEffectMappings(entry.original.contentId)
    assert.equal(first, second)
  }

  assert.deepEqual(getPathfinder2eItemEffectMappings('pf2e:item:missing:test'), [])
})
