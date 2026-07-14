import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveSenses } from './sense'
import type { SenseSource } from './sense'

// Real Sense rule elements audited from pf2e-master/packs/spell-effects and conditions.

const DARKVISION: SenseSource = { key: 'Sense', selector: 'darkvision' }
const PREDICATED_LOW_LIGHT: SenseSource = {
  key: 'Sense',
  predicate: ['animal-feature:cat-eyes'],
  selector: 'low-light-vision',
}

test('a Sense without range/acuity resolves with the documented real defaults', () => {
  const { resolved, skipped } = resolveSenses([DARKVISION], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ selector: 'darkvision', acuity: 'precise', range: Infinity, force: false }])
})

test('a predicate gates whether the sense is granted', () => {
  const withoutFeature = resolveSenses([PREDICATED_LOW_LIGHT], createRollOptions([]))
  assert.equal(withoutFeature.resolved.length, 0)
  assert.equal(withoutFeature.skipped[0]?.reason, 'predicate-not-satisfied')

  const withFeature = resolveSenses([PREDICATED_LOW_LIGHT], createRollOptions(['animal-feature:cat-eyes']))
  assert.equal(withFeature.resolved.length, 1)
  assert.equal(withFeature.resolved[0]?.selector, 'low-light-vision')
})

test('an explicit acuity and numeric range are preserved', () => {
  const source: SenseSource = { key: 'Sense', selector: 'scent', acuity: 'imprecise', range: 30 }
  const { resolved } = resolveSenses([source], createRollOptions([]))
  assert.deepEqual(resolved[0], { selector: 'scent', acuity: 'imprecise', range: 30, force: false })
})

test('a dynamic (formula) range is reported as skipped, never evaluated', () => {
  const source: SenseSource = { key: 'Sense', selector: 'scent', range: '@item.level' }
  const { resolved, skipped } = resolveSenses([source], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-range')
})

test('non-Sense rule elements are ignored', () => {
  const { resolved, skipped } = resolveSenses([{ key: 'FlatModifier', selector: 'ac', type: 'status', value: 1 }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
