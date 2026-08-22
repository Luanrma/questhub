import assert from 'node:assert/strict'
import test from 'node:test'
import { getPathfinder2eBestiaryEffectMappings } from '../content_catalog/bestiary-effect-mappings'
import { getPathfinder2eSpellEffectMappings } from '../content_catalog/spell-effect-mappings'
import {
  listPathfinder2eEffectCandidates,
  PATHFINDER_2E_ACTIVE_EFFECT_NAMESPACE,
  resolvePathfinder2eEffectApplication,
  searchPathfinder2eEffectDefinitions,
} from './application'

const FRIGHTENED = 'conditionitems:TBSHQspnbcqxsmjL'
const PRONE = 'conditionitems:j91X7x0XSomq8d60'
const AGONIZING_DESPAIR = 'pf2e:spell:spells-srd:agonizing-despair'
const AERIAL_FORM = 'pf2e:spell:spells-srd:aerial-form'
const OIL_OF_POTENCY = 'pf2e:item:equipment-srd:oil-of-potency'
const CONFOUNDING_PORTAL = 'pf2e:bestiary:pathfinder-dark-archive:confounding-portal'

test('manual PF2e application resolves a canonical valued Condition without mechanical automation', () => {
  const result = resolvePathfinder2eEffectApplication({
    source: { type: 'MANUAL', definitionKey: FRIGHTENED },
  })

  assert.equal(result.ok, true)
  if (!result.ok) return

  assert.equal(result.effect.namespace, PATHFINDER_2E_ACTIVE_EFFECT_NAMESPACE)
  assert.equal(result.effect.definitionKey, FRIGHTENED)
  assert.equal(result.effect.name, 'Frightened')
  assert.equal(result.effect.displayValue, '1')
  assert.equal(result.effect.payload.value, 1)
  assert.deepEqual(result.effect.origin, {
    system: 'PATHFINDER_2E',
    type: 'MANUAL',
    contentId: null,
    occurrenceIndex: null,
    structuralOrigin: null,
  })

  const serialized = JSON.stringify(result.effect)
  for (const forbidden of ['hitPoints', 'armorClass', 'savingThrows', 'spellSlots']) {
    assert.equal(serialized.includes(forbidden), false)
  }
})

test('explicit value overrides the base value only for valued Conditions', () => {
  const frightened = resolvePathfinder2eEffectApplication({
    source: { type: 'MANUAL', definitionKey: FRIGHTENED },
    value: 3,
  })
  assert.equal(frightened.ok, true)
  if (frightened.ok) assert.equal(frightened.effect.displayValue, '3')

  const prone = resolvePathfinder2eEffectApplication({
    source: { type: 'MANUAL', definitionKey: PRONE },
    value: 2,
  })
  assert.deepEqual(prone, { ok: false, reason: 'INVALID_VALUE' })
})

test('Spell source requires an explicitly potential mapping and preserves outcome/value evidence', () => {
  const successFrightened = getPathfinder2eSpellEffectMappings(AGONIZING_DESPAIR).find((mapping) => (
    mapping.definitionKey === FRIGHTENED && mapping.outcome === 'SUCCESS'
  ))
  assert.ok(successFrightened)

  const result = resolvePathfinder2eEffectApplication({
    source: {
      type: 'SPELL',
      contentId: AGONIZING_DESPAIR,
      occurrenceIndex: successFrightened.occurrenceIndex,
    },
  })
  assert.equal(result.ok, true)
  if (!result.ok) return

  assert.equal(result.effect.displayValue, '1')
  assert.equal(result.effect.payload.evidence, 'DEGREE_OF_SUCCESS')
  assert.equal(result.effect.payload.outcome, 'SUCCESS')
  assert.equal(result.effect.origin.type, 'SPELL')
  assert.equal(result.effect.origin.contentId, AGONIZING_DESPAIR)
})

test('a semantic reference that is not potential cannot be applied from its Spell origin', () => {
  const explanatoryClumsy = getPathfinder2eSpellEffectMappings(AERIAL_FORM).find((mapping) => (
    mapping.definitionKey === 'conditionitems:i3OJZU2nk64Df3xm'
  ))
  assert.ok(explanatoryClumsy)
  assert.equal(explanatoryClumsy.potential, false)

  assert.deepEqual(
    resolvePathfinder2eEffectApplication({
      source: {
        type: 'SPELL',
        contentId: AERIAL_FORM,
        occurrenceIndex: explanatoryClumsy.occurrenceIndex,
      },
    }),
    { ok: false, reason: 'SOURCE_NOT_POTENTIAL' },
  )
})

test('Item candidates expose only potential mappings and remain explicit application choices', () => {
  const candidates = listPathfinder2eEffectCandidates('ITEM', OIL_OF_POTENCY)
  const potency = candidates.find((candidate) => (
    candidate.definitionKey === 'equipment-effects:1OLlwExJz7ii2Lu2'
  ))
  assert.ok(potency)

  const result = resolvePathfinder2eEffectApplication({
    source: {
      type: 'ITEM',
      contentId: OIL_OF_POTENCY,
      occurrenceIndex: potency.occurrenceIndex,
    },
  })
  assert.equal(result.ok, true)
  if (result.ok) assert.equal(result.effect.origin.type, 'ITEM')
})

test('Bestiary application preserves structural Hazard origin and rejects a forged Creature type', () => {
  const mapping = getPathfinder2eBestiaryEffectMappings(CONFOUNDING_PORTAL).find((candidate) => (
    candidate.definitionKey === 'conditionitems:yblD8fOR1J8rDwEQ'
    && candidate.origin.name === 'Confounding Misdirection'
  ))
  assert.ok(mapping)
  assert.equal(mapping.potential, true)
  assert.equal(mapping.origin.entryType, 'HAZARD')

  const hazard = resolvePathfinder2eEffectApplication({
    source: {
      type: 'HAZARD',
      contentId: CONFOUNDING_PORTAL,
      occurrenceIndex: mapping.occurrenceIndex,
    },
  })
  assert.equal(hazard.ok, true)
  if (hazard.ok) {
    assert.equal(hazard.effect.origin.structuralOrigin?.entryType, 'HAZARD')
    assert.equal(hazard.effect.origin.structuralOrigin?.name, 'Confounding Misdirection')
  }

  assert.deepEqual(
    resolvePathfinder2eEffectApplication({
      source: {
        type: 'CREATURE',
        contentId: CONFOUNDING_PORTAL,
        occurrenceIndex: mapping.occurrenceIndex,
      },
    }),
    { ok: false, reason: 'SOURCE_TYPE_MISMATCH' },
  )
})

test('definition search is deterministic, bounded and suitable for explicit manual selection', () => {
  const frightened = searchPathfinder2eEffectDefinitions('frightened', 10)
  assert.equal(frightened.some((definition) => definition.definitionKey === FRIGHTENED), true)
  assert.ok(searchPathfinder2eEffectDefinitions('', 3).length <= 3)
})

test('resolver never deduplicates repeated PF2e applications', () => {
  const request = {
    source: { type: 'MANUAL' as const, definitionKey: FRIGHTENED },
    value: 2,
  }
  const first = resolvePathfinder2eEffectApplication(request)
  const second = resolvePathfinder2eEffectApplication(request)

  assert.equal(first.ok, true)
  assert.equal(second.ok, true)
  assert.deepEqual(first, second)
})
