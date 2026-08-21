import assert from 'node:assert/strict'
import test from 'node:test'
import { getPathfinder2eActiveEffectDefinition } from './active-effect-definitions'
import {
  getPathfinder2eSpellEffectMappings,
  listPathfinder2ePotentialSpellEffects,
  PATHFINDER_2E_SPELL_EFFECT_MAPPING_SOURCE_COMMIT,
} from './spell-effect-mappings'
import { getPathfinder2eSourceReferences } from './source-references'
import { PATHFINDER_2E_SPELL_ENTRIES } from './spells'

const AGONIZING_DESPAIR = 'pf2e:spell:spells-srd:agonizing-despair'
const AERIAL_FORM = 'pf2e:spell:spells-srd:aerial-form'
const OUTCASTS_CURSE = 'pf2e:spell:spells-srd:outcasts-curse'

test('PF2e Spell effect mappings remain locked to the semantic catalog source revision', () => {
  assert.equal(
    PATHFINDER_2E_SPELL_EFFECT_MAPPING_SOURCE_COMMIT,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
})

test('every resolved semantic Spell reference is accounted exactly once', () => {
  let expectedTotal = 0
  let actualTotal = 0

  for (const entry of PATHFINDER_2E_SPELL_ENTRIES) {
    const contentId = entry.original.contentId
    const expectedReferences = getPathfinder2eSourceReferences(contentId).filter((reference) => (
      reference.target.type
      && reference.target.sourcePack
      && reference.target.sourceId
    ))
    const mappings = getPathfinder2eSpellEffectMappings(contentId)

    assert.equal(
      mappings.length,
      expectedReferences.length,
      `semantic Spell reference coverage mismatch for ${contentId}`,
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

test('unresolved PF2e Item references are never promoted into Spell effect mappings', () => {
  for (const entry of PATHFINDER_2E_SPELL_ENTRIES) {
    const contentId = entry.original.contentId
    const unresolved = getPathfinder2eSourceReferences(contentId).filter((reference) => (
      reference.target.documentType === 'Item' && !reference.target.type
    ))
    if (unresolved.length === 0) continue

    const mappedSourceCoordinates = new Set(
      getPathfinder2eSpellEffectMappings(contentId).map((mapping) => (
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

test('every mapping resolves to the QH-EFF-005 definition with matching semantic kind', () => {
  for (const entry of PATHFINDER_2E_SPELL_ENTRIES) {
    for (const mapping of getPathfinder2eSpellEffectMappings(entry.original.contentId)) {
      const definition = getPathfinder2eActiveEffectDefinition(mapping.definitionKey)
      assert.ok(definition, `missing definition ${mapping.definitionKey}`)
      assert.equal(mapping.kind, definition.kind)
      assert.equal(mapping.schemaVersion, 1)
    }
  }
})

test('potential classification is restricted to approved structural evidence', () => {
  const approvedPotentialEvidence = new Set([
    'DEGREE_OF_SUCCESS',
    'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE',
    'STANDALONE_REFERENCE',
  ])

  for (const entry of PATHFINDER_2E_SPELL_ENTRIES) {
    const mappings = getPathfinder2eSpellEffectMappings(entry.original.contentId)
    const potentials = listPathfinder2ePotentialSpellEffects(entry.original.contentId)

    assert.deepEqual(
      potentials,
      mappings.filter((mapping) => mapping.potential),
    )

    for (const mapping of mappings) {
      if (mapping.potential) {
        assert.equal(approvedPotentialEvidence.has(mapping.evidence), true)
      } else {
        assert.equal(
          mapping.evidence === 'REFERENCE_ONLY' || mapping.evidence === 'NON_DESCRIPTION_REFERENCE',
          true,
        )
        assert.equal(mapping.outcome, null)
      }
    }
  }
})

test('Agonizing Despair maps three Frightened outcomes without deduplicating the definition', () => {
  const mappings = getPathfinder2eSpellEffectMappings(AGONIZING_DESPAIR)

  assert.equal(mappings.length, 3)
  assert.deepEqual(
    mappings.map((mapping) => ({
      definitionKey: mapping.definitionKey,
      label: mapping.source.label,
      potential: mapping.potential,
      evidence: mapping.evidence,
      outcome: mapping.outcome,
      valueHint: mapping.valueHint?.value ?? null,
    })),
    [
      {
        definitionKey: 'conditionitems:TBSHQspnbcqxsmjL',
        label: 'Frightened 1',
        potential: true,
        evidence: 'DEGREE_OF_SUCCESS',
        outcome: 'SUCCESS',
        valueHint: 1,
      },
      {
        definitionKey: 'conditionitems:TBSHQspnbcqxsmjL',
        label: 'Frightened 2',
        potential: true,
        evidence: 'DEGREE_OF_SUCCESS',
        outcome: 'FAILURE',
        valueHint: 2,
      },
      {
        definitionKey: 'conditionitems:TBSHQspnbcqxsmjL',
        label: 'Frightened 3',
        potential: true,
        evidence: 'DEGREE_OF_SUCCESS',
        outcome: 'CRITICAL_FAILURE',
        valueHint: 3,
      },
    ],
  )
})

test('Aerial Form keeps explanatory Clumsy separate from the actual standalone Spell Effect', () => {
  const mappings = getPathfinder2eSpellEffectMappings(AERIAL_FORM)
  assert.equal(mappings.length, 2)

  const clumsy = mappings.find((mapping) => (
    mapping.definitionKey === 'conditionitems:i3OJZU2nk64Df3xm'
  ))
  assert.ok(clumsy)
  assert.equal(clumsy.source.label, null)
  assert.equal(clumsy.kind, 'condition')
  assert.equal(clumsy.potential, false)
  assert.equal(clumsy.evidence, 'REFERENCE_ONLY')
  assert.equal(clumsy.outcome, null)
  assert.equal(clumsy.valueHint, null)

  const aerialEffect = mappings.find((mapping) => (
    mapping.definitionKey === 'spell-effects:mvMWmP3m9Xawbwpx'
  ))
  assert.ok(aerialEffect)
  assert.equal(aerialEffect.source.label, null)
  assert.equal(aerialEffect.kind, 'effect')
  assert.equal(aerialEffect.potential, true)
  assert.equal(aerialEffect.evidence, 'STANDALONE_REFERENCE')
  assert.equal(aerialEffect.outcome, null)
})

test("Outcast's Curse keeps comparative attitudes non-potential and preserves standalone outcome Effects", () => {
  const mappings = getPathfinder2eSpellEffectMappings(OUTCASTS_CURSE)
  assert.equal(mappings.length, 4)

  const unfriendly = mappings.find((mapping) => (
    mapping.definitionKey === 'conditionitems:I1ffBVISxLr2gC4u'
  ))
  assert.ok(unfriendly)
  assert.equal(unfriendly.source.label, null)
  assert.equal(unfriendly.potential, false)
  assert.equal(unfriendly.evidence, 'REFERENCE_ONLY')
  assert.equal(unfriendly.outcome, null)

  const indifferent = mappings.find((mapping) => (
    mapping.definitionKey === 'conditionitems:fuG8dgthlDWfWjIA'
  ))
  assert.ok(indifferent)
  assert.equal(indifferent.source.label, null)
  assert.equal(indifferent.potential, false)
  assert.equal(indifferent.evidence, 'REFERENCE_ONLY')
  assert.equal(indifferent.outcome, null)

  const success = mappings.find((mapping) => (
    mapping.definitionKey === 'spell-effects:hlgCesYXXHG8r9X4'
  ))
  assert.ok(success)
  assert.equal(success.source.label, null)
  assert.equal(success.potential, true)
  assert.equal(success.evidence, 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE')
  assert.equal(success.outcome, 'SUCCESS')

  const failure = mappings.find((mapping) => (
    mapping.definitionKey === 'spell-effects:QccOlLHtnVEmD67m'
  ))
  assert.ok(failure)
  assert.equal(failure.source.label, null)
  assert.equal(failure.potential, true)
  assert.equal(failure.evidence, 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE')
  assert.equal(failure.outcome, 'FAILURE')
})

test('value hints exist only for exact explicit labels of valued Conditions', () => {
  for (const entry of PATHFINDER_2E_SPELL_ENTRIES) {
    for (const mapping of getPathfinder2eSpellEffectMappings(entry.original.contentId)) {
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

test('Spell effect mapping reads are deterministic and cached per contentId', () => {
  for (const entry of PATHFINDER_2E_SPELL_ENTRIES) {
    const first = getPathfinder2eSpellEffectMappings(entry.original.contentId)
    const second = getPathfinder2eSpellEffectMappings(entry.original.contentId)
    assert.equal(first, second)
  }

  assert.deepEqual(getPathfinder2eSpellEffectMappings('pf2e:spell:missing:test'), [])
})
