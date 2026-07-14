import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveGrantItems } from './grant-item'
import type { GrantItemSource } from './grant-item'

// Real GrantItem rule elements audited from pf2e-master/packs/spell-effects and conditions
// (Fase 1 dependency graph closure), cross-checked against the real Foundry system source at
// pf2e-master/src/module/rules/rule-element/grant-item/{schema,rule-element}.ts.

// From spell-effects/spell-effect-haste.json — the Haste golden fixture chain.
const HASTE_GRANTS_QUICKENED: GrantItemSource = {
  key: 'GrantItem',
  uuid: 'Compendium.pf2e.conditionitems.Item.Quickened',
  inMemoryOnly: true,
}

const GRANTS_ERUPTING_SPURS: GrantItemSource = {
  key: 'GrantItem',
  uuid: 'Compendium.pf2e.actionspf2e.Item.Erupting Spurs',
}

const PREDICATED_BLAZING_CONFLAGRATION: GrantItemSource = {
  key: 'GrantItem',
  predicate: ['feat:phoenixs-flight'],
  uuid: 'Compendium.pf2e.actionspf2e.Item.Blazing Conflagration',
}

// From spell-effects/spell-effect-untamed-form.json — a real dynamic uuid.
const DYNAMIC_FORM_EFFECT: GrantItemSource = {
  key: 'GrantItem',
  predicate: ['feat:untamed-form'],
  uuid: '{item|flags.pf2e.rulesSelections.formEffect}',
}

const CLUMSY_NO_DUPLICATE: GrantItemSource = {
  key: 'GrantItem',
  uuid: 'Compendium.pf2e.conditionitems.Item.Clumsy',
  allowDuplicate: false,
}

test('a GrantItem without a predicate always fires', () => {
  const { granted, skipped } = resolveGrantItems([GRANTS_ERUPTING_SPURS], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.equal(granted.length, 1)
  assert.equal(granted[0]?.uuid, 'Compendium.pf2e.actionspf2e.Item.Erupting Spurs')
})

test('real Haste -> Quickened grant: inMemoryOnly forces reevaluateOnUpdate and allowDuplicate to true', () => {
  const { granted } = resolveGrantItems([HASTE_GRANTS_QUICKENED], createRollOptions([]))
  assert.equal(granted.length, 1)
  assert.deepEqual(granted[0], {
    uuid: 'Compendium.pf2e.conditionitems.Item.Quickened',
    inMemoryOnly: true,
    allowDuplicate: true,
    reevaluateOnUpdate: true,
  })
})

test('a GrantItem predicate gates whether the grant fires', () => {
  const withoutFeat = resolveGrantItems([PREDICATED_BLAZING_CONFLAGRATION], createRollOptions([]))
  assert.equal(withoutFeat.granted.length, 0)
  assert.equal(withoutFeat.skipped[0]?.reason, 'predicate-not-satisfied')

  const withFeat = resolveGrantItems([PREDICATED_BLAZING_CONFLAGRATION], createRollOptions(['feat:phoenixs-flight']))
  assert.equal(withFeat.granted.length, 1)
})

test('a dynamic Foundry uuid expression is reported as skipped, never guessed at', () => {
  const { granted, skipped } = resolveGrantItems([DYNAMIC_FORM_EFFECT], createRollOptions(['feat:untamed-form']))
  assert.equal(granted.length, 0)
  assert.equal(skipped.length, 1)
  assert.equal(skipped[0]?.reason, 'dynamic-uuid')
})

test('explicit allowDuplicate: false is preserved when not inMemoryOnly and not reevaluateOnUpdate', () => {
  const { granted } = resolveGrantItems([CLUMSY_NO_DUPLICATE], createRollOptions([]))
  assert.equal(granted[0]?.allowDuplicate, false)
})

test('reevaluateOnUpdate forces allowDuplicate to false when not inMemoryOnly', () => {
  const source: GrantItemSource = {
    key: 'GrantItem',
    uuid: 'Compendium.pf2e.actionspf2e.Item.Foresight',
    reevaluateOnUpdate: true,
    allowDuplicate: true,
  }
  const { granted } = resolveGrantItems([source], createRollOptions([]))
  assert.equal(granted[0]?.reevaluateOnUpdate, true)
  assert.equal(granted[0]?.allowDuplicate, false)
})

test('non-GrantItem rule elements are ignored', () => {
  const { granted, skipped } = resolveGrantItems([{ key: 'FlatModifier', selector: 'ac', type: 'status', value: 1 }], createRollOptions([]))
  assert.equal(granted.length, 0)
  assert.equal(skipped.length, 0)
})
