import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveImmunities, resolveResistances, resolveWeaknesses } from './iwr'
import type { ImmunitySource, ResistanceSource, WeaknessSource } from './iwr'

// Real Immunity/Weakness/Resistance rule elements audited from
// pf2e-master/packs/spell-effects and conditions, cross checked against
// pf2e-master/src/module/rules/rule-element/iwr/{base,immunity,weakness,resistance}.ts.

const MULTI_TYPE_IMMUNITY: ImmunitySource = {
  key: 'Immunity',
  type: ['disease', 'poison', 'precision'],
}

const SILVER_WEAKNESS: WeaknessSource = {
  key: 'Weakness',
  type: 'silver',
  value: 1,
}

const BLEED_WEAKNESS: WeaknessSource = {
  key: 'Weakness',
  predicate: ['self:condition:persistent-damage:bleed'],
  type: ['piercing', 'slashing'],
  value: 1,
}

const DYNAMIC_ALIGNMENT_WEAKNESS: WeaknessSource = {
  key: 'Weakness',
  type: '{item|flags.pf2e.rulesSelections.alignment.opposite}',
  value: 15,
}

const ALL_DAMAGE_RESISTANCE: ResistanceSource = {
  key: 'Resistance',
  type: 'all-damage',
  value: 5,
  doubleVs: ['non-magical', 'precision'],
  exceptions: ['force', 'ghost-touch'],
}

const DYNAMIC_VALUE_RESISTANCE: ResistanceSource = {
  key: 'Resistance',
  type: 'electricity',
  value: '10 + 5*floor((@item.level -4)/3)',
}

test('Immunity resolves one entry per type in the array, defaulting mode to add', () => {
  const { resolved, skipped } = resolveImmunities([MULTI_TYPE_IMMUNITY], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(
    resolved.map((entry) => entry.type),
    ['disease', 'poison', 'precision'],
  )
  assert.ok(resolved.every((entry) => entry.mode === 'add' && entry.override === false))
})

test('Weakness resolves a static numeric value', () => {
  const { resolved, skipped } = resolveWeaknesses([SILVER_WEAKNESS], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ type: 'silver', value: 1, mode: 'add', override: false, exceptions: [] }])
})

test('Weakness with a predicate and multiple types resolves one entry per type when satisfied', () => {
  const active = resolveWeaknesses([BLEED_WEAKNESS], createRollOptions(['self:condition:persistent-damage:bleed']))
  assert.equal(active.resolved.length, 2)
  assert.deepEqual(
    active.resolved.map((entry) => entry.type),
    ['piercing', 'slashing'],
  )

  const inactive = resolveWeaknesses([BLEED_WEAKNESS], createRollOptions([]))
  assert.equal(inactive.resolved.length, 0)
  assert.equal(inactive.skipped[0]?.reason, 'predicate-not-satisfied')
})

test('a dynamic type expression is reported as skipped, never guessed at', () => {
  const { resolved, skipped } = resolveWeaknesses([DYNAMIC_ALIGNMENT_WEAKNESS], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-type')
})

test('Resistance preserves doubleVs and exceptions as string lists', () => {
  const { resolved, skipped } = resolveResistances([ALL_DAMAGE_RESISTANCE], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved[0]?.doubleVs, ['non-magical', 'precision'])
  assert.deepEqual(resolved[0]?.exceptions, ['force', 'ghost-touch'])
  assert.equal(resolved[0]?.value, 5)
})

test('a dynamic (formula) Resistance value is reported as skipped, never evaluated', () => {
  const { resolved, skipped } = resolveResistances([DYNAMIC_VALUE_RESISTANCE], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('a non-positive resolved value is reported as skipped rather than producing a zero resistance', () => {
  const zeroResistance: ResistanceSource = { key: 'Resistance', type: 'fire', value: 0 }
  const { resolved, skipped } = resolveResistances([zeroResistance], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'non-positive-value')
})

test('non-matching rule elements are ignored by each resolver', () => {
  const rules = [{ key: 'FlatModifier', selector: 'ac', type: 'status', value: 1 }]
  assert.deepEqual(resolveImmunities(rules, createRollOptions([])), { resolved: [], skipped: [] })
  assert.deepEqual(resolveWeaknesses(rules, createRollOptions([])), { resolved: [], skipped: [] })
  assert.deepEqual(resolveResistances(rules, createRollOptions([])), { resolved: [], skipped: [] })
})
