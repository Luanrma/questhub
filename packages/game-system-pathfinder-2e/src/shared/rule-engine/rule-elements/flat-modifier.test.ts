import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { applyStackingRules } from '../modifiers'
import { resolveFlatModifiers } from './flat-modifier'
import type { FlatModifierSource } from './flat-modifier'

// Real FlatModifier rule elements audited from pf2e-master/packs/spell-effects and conditions
// (Fase 1 dependency graph closure), not invented from the plan's description alone.

const DISEASE_SAVE_BONUS: FlatModifierSource = {
  key: 'FlatModifier',
  predicate: ['disease'],
  selector: 'saving-throw',
  type: 'circumstance',
  value: 2,
}

const STATUS_AC_BONUS: FlatModifierSource = {
  key: 'FlatModifier',
  selector: 'ac',
  type: 'status',
  value: 2,
}

const LAND_SPEED_BONUS: FlatModifierSource = {
  key: 'FlatModifier',
  selector: 'land-speed',
  type: 'status',
  value: 10,
}

const ACID_SPEED_PENALTY: FlatModifierSource = {
  key: 'FlatModifier',
  predicate: ['self:condition:persistent-damage:acid'],
  selector: 'all-speeds',
  type: 'status',
  value: -10,
}

// Real: dynamic value formula ("ternary(gte(@item.level,8),3,ternary(gte(@item.level,5),2,1))")
const DYNAMIC_VALUE_MODIFIER: FlatModifierSource = {
  key: 'FlatModifier',
  predicate: ['self:signature:{item|origin.signature}'],
  selector: 'spell-attack-roll',
  slug: 'ancestral-memories-bonus',
  type: 'status',
  value: 'ternary(gte(@item.level,8),3,ternary(gte(@item.level,5),2,1))',
}

test('a FlatModifier without a predicate always resolves', () => {
  const { modifiers, skipped } = resolveFlatModifiers([STATUS_AC_BONUS, LAND_SPEED_BONUS], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.equal(modifiers.length, 2)
  assert.deepEqual(
    modifiers.map((modifier) => [modifier.selector, modifier.value, modifier.type]),
    [
      ['ac', 2, 'status'],
      ['land-speed', 10, 'status'],
    ],
  )
})

test('a FlatModifier predicate gates resolution', () => {
  const withoutDisease = resolveFlatModifiers([DISEASE_SAVE_BONUS], createRollOptions([]))
  assert.equal(withoutDisease.modifiers.length, 0)
  assert.equal(withoutDisease.skipped[0]?.reason, 'predicate-not-satisfied')

  const withDisease = resolveFlatModifiers([DISEASE_SAVE_BONUS], createRollOptions(['disease']))
  assert.equal(withDisease.modifiers.length, 1)
  assert.equal(withDisease.modifiers[0]?.selector, 'saving-throw')
})

test('predicate condition roll option gates a real penalty modifier', () => {
  const active = resolveFlatModifiers([ACID_SPEED_PENALTY], createRollOptions(['self:condition:persistent-damage:acid']))
  assert.equal(active.modifiers.length, 1)
  assert.equal(active.modifiers[0]?.value, -10)

  const inactive = resolveFlatModifiers([ACID_SPEED_PENALTY], createRollOptions([]))
  assert.equal(inactive.modifiers.length, 0)
})

test('a dynamic (formula) value is reported as skipped, never guessed at', () => {
  // Satisfy the predicate literally so the resolver reaches the value check.
  const rollOptions = createRollOptions(['self:signature:{item|origin.signature}'])
  const { modifiers, skipped } = resolveFlatModifiers([DYNAMIC_VALUE_MODIFIER], rollOptions)
  assert.equal(modifiers.length, 0)
  assert.equal(skipped.length, 1)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('an array selector with static names produces one modifier per selector', () => {
  const source: FlatModifierSource = { key: 'FlatModifier', selector: ['ac', 'saving-throw'], type: 'status', value: 1 }
  const { modifiers, skipped } = resolveFlatModifiers([source], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(
    modifiers.map((modifier) => modifier.selector),
    ['ac', 'saving-throw'],
  )
})

test('a dynamic Foundry selector expression is reported as skipped', () => {
  // Real shape: "selector": ["{item|flags.pf2e.rulesSelections.save}", "{item|flags.pf2e.rulesSelections.skill}"]
  const source: FlatModifierSource = {
    key: 'FlatModifier',
    selector: ['{item|flags.pf2e.rulesSelections.save}', '{item|flags.pf2e.rulesSelections.skill}'],
    type: 'status',
    value: 2,
  }
  const { modifiers, skipped } = resolveFlatModifiers([source], createRollOptions([]))
  assert.equal(modifiers.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-selector')
})

test('non-FlatModifier rule elements are ignored', () => {
  const { modifiers, skipped } = resolveFlatModifiers([{ key: 'RollOption', domain: 'all' }], createRollOptions([]))
  assert.equal(modifiers.length, 0)
  assert.equal(skipped.length, 0)
})

test('end to end: resolve two applicable status bonuses to the same selector and stack them', () => {
  const strongerBonus: FlatModifierSource = { key: 'FlatModifier', selector: 'ac', type: 'status', value: 3, slug: 'stronger' }
  const { modifiers } = resolveFlatModifiers([STATUS_AC_BONUS, strongerBonus], createRollOptions([]))
  const result = applyStackingRules(modifiers)
  assert.equal(result.total, 3)
  assert.deepEqual(
    result.applied.map((modifier) => modifier.slug),
    ['stronger'],
  )
})
