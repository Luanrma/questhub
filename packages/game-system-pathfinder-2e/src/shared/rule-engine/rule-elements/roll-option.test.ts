import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions, mergeRollOptions } from '../roll-options'
import { testPredicateStatement } from '../predicates'
import { resolveRollOptions } from './roll-option'
import type { RollOptionSource } from './roll-option'

// Real RollOption rule elements audited from pf2e-master/packs/spell-effects and conditions
// (Fase 1 dependency graph closure), cross checked against the real Foundry system source at
// pf2e-master/src/module/rules/rule-element/roll-option/{data,rule-element}.ts.

const OFF_GUARD_IGNORE_FLANKING: RollOptionSource = {
  key: 'RollOption',
  domain: 'ac',
  option: 'self:condition:off-guard:ignore:flanking',
}

const DRAGON_FORM_EFFECT: RollOptionSource = {
  key: 'RollOption',
  domain: 'all',
  option: 'self:effect:dragon-form',
}

const TARGET_ALLY_FALSE: RollOptionSource = {
  key: 'RollOption',
  domain: 'all',
  option: 'target:ally',
  value: false,
}

const DYNAMIC_ALIGNMENT_OPTION: RollOptionSource = {
  key: 'RollOption',
  domain: 'all',
  option: 'divine-vessel:{item|flags.pf2e.rulesSelections.alignment.chosen}',
}

const TOGGLEABLE_TERRAIN_OPTION: RollOptionSource = {
  key: 'RollOption',
  domain: 'all',
  option: 'terrain:community-repair',
  toggleable: true,
}

test('a RollOption without a predicate resolves with the real sanitized option string', () => {
  const { resolved, skipped } = resolveRollOptions([OFF_GUARD_IGNORE_FLANKING], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ domain: 'ac', option: 'self:condition:off-guard:ignore:flanking', active: true }])
})

test('value defaults to true when omitted, and is preserved when explicitly false', () => {
  const active = resolveRollOptions([DRAGON_FORM_EFFECT], createRollOptions([]))
  assert.equal(active.resolved[0]?.active, true)

  const inactive = resolveRollOptions([TARGET_ALLY_FALSE], createRollOptions([]))
  assert.equal(inactive.resolved[0]?.active, false)
})

test('a dynamic Foundry expression embedded in the option string is reported as skipped, never guessed at', () => {
  const { resolved, skipped } = resolveRollOptions([DYNAMIC_ALIGNMENT_OPTION], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-option')
})

test('a toggleable RollOption is not resolved: it requires actor-persisted UI selection state', () => {
  const { resolved, skipped } = resolveRollOptions([TOGGLEABLE_TERRAIN_OPTION], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'toggleable-not-resolved')
})

test('a predicate gates whether a non-toggleable RollOption resolves', () => {
  const source: RollOptionSource = { key: 'RollOption', domain: 'all', option: 'self:hero-point-spent', predicate: ['self:condition:quickened'] }

  const withoutCondition = resolveRollOptions([source], createRollOptions([]))
  assert.equal(withoutCondition.resolved.length, 0)
  assert.equal(withoutCondition.skipped[0]?.reason, 'predicate-not-satisfied')

  const withCondition = resolveRollOptions([source], createRollOptions(['self:condition:quickened']))
  assert.equal(withCondition.resolved.length, 1)
})

test('non-RollOption rule elements are ignored', () => {
  const { resolved, skipped } = resolveRollOptions([{ key: 'GrantItem', uuid: 'Compendium.pf2e.conditionitems.Item.Quickened' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})

test('end to end: a resolved RollOption feeds back into predicate evaluation for a later rule', () => {
  const baseOptions = createRollOptions([])
  const { resolved } = resolveRollOptions([DRAGON_FORM_EFFECT], baseOptions)

  const activeOptions = resolved.filter((option) => option.active).map((option) => option.option)
  const nextContext = mergeRollOptions(baseOptions, createRollOptions(activeOptions))

  // A predicate on some other rule element, gated by the option dragon-form just activated.
  assert.equal(testPredicateStatement('self:effect:dragon-form', nextContext), true)
  assert.equal(testPredicateStatement('self:effect:dragon-form', baseOptions), false)
})
