import assert from 'node:assert/strict'
import test from 'node:test'
import { getPathfinder2eActiveEffectReferences } from './active-effect-references'

const AGONIZING_DESPAIR = 'pf2e:spell:spells-srd:agonizing-despair'
const ABYSIUM_CHUNK = 'pf2e:item:equipment-srd:abysium-chunk'
const CONFOUNDING_PORTAL = 'pf2e:bestiary:pathfinder-dark-archive:confounding-portal'

test('Agonizing Despair exposes three clickable Frightened occurrences with one canonical identity', () => {
  const references = getPathfinder2eActiveEffectReferences(AGONIZING_DESPAIR, 'en-US')

  assert.equal(references.length, 3)
  assert.deepEqual(
    references.map((reference) => ({
      definitionKey: reference.definitionKey,
      label: reference.displayLabel,
      outcome: reference.context.outcome,
      valueHint: reference.context.valueHint,
    })),
    [
      {
        definitionKey: 'conditionitems:TBSHQspnbcqxsmjL',
        label: 'Frightened 1',
        outcome: 'SUCCESS',
        valueHint: 1,
      },
      {
        definitionKey: 'conditionitems:TBSHQspnbcqxsmjL',
        label: 'Frightened 2',
        outcome: 'FAILURE',
        valueHint: 2,
      },
      {
        definitionKey: 'conditionitems:TBSHQspnbcqxsmjL',
        label: 'Frightened 3',
        outcome: 'CRITICAL_FAILURE',
        valueHint: 3,
      },
    ],
  )
  assert.deepEqual(
    references.map((reference) => reference.exactLabels[0]),
    ['Frightened 1', 'Frightened 2', 'Frightened 3'],
  )
})

test('Item references preserve occurrence value context without changing definition identity', () => {
  const references = getPathfinder2eActiveEffectReferences(ABYSIUM_CHUNK, 'en-US')
  assert.equal(references.length, 3)
  assert.deepEqual(references.map((reference) => reference.context.valueHint), [1, 2, 3])
  assert.equal(new Set(references.map((reference) => reference.definitionKey)).size, 1)
})

test('Bestiary action references preserve structural origin and remain read-only metadata', () => {
  const confused = getPathfinder2eActiveEffectReferences(CONFOUNDING_PORTAL, 'en-US').find(
    (reference) => reference.definitionKey === 'conditionitems:yblD8fOR1J8rDwEQ',
  )

  assert.ok(confused)
  assert.equal(confused.context.origin?.entryType, 'HAZARD')
  assert.equal(confused.context.origin?.kind, 'ACTION')
  assert.equal(confused.context.origin?.name, 'Confounding Misdirection')
  assert.equal(confused.evidence, 'EXPLICIT_EFFECT_ASSIGNMENT')
  assert.equal(confused.potential, true)
})

test('localized labels are exact candidates only for already structurally resolved references', () => {
  const references = getPathfinder2eActiveEffectReferences(AGONIZING_DESPAIR, 'pt-BR')
  assert.equal(references.length, 3)

  for (const reference of references) {
    assert.ok(reference.exactLabels.includes(reference.displayLabel))
    assert.ok(reference.exactLabels.includes(reference.source.label ?? ''))
  }
})

test('unknown content cannot create references by textual approximation', () => {
  assert.deepEqual(
    getPathfinder2eActiveEffectReferences('pf2e:spell:missing:frightened', 'pt-BR'),
    [],
  )
  assert.deepEqual(
    getPathfinder2eActiveEffectReferences('Frightened', 'pt-BR'),
    [],
  )
})
