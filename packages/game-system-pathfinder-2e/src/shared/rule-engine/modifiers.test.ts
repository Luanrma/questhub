import test from 'node:test'
import assert from 'node:assert/strict'
import { applyStackingRules } from './modifiers'
import type { Modifier } from './modifiers'

// Real FlatModifier rule elements audited from pf2e-master/packs/spell-effects:
// { selector: 'saving-throw', type: 'circumstance', value: 2 }
// { selector: 'ac', type: 'status', value: 2 }
// { selector: 'land-speed', type: 'status', value: 10 }
// { selector: 'all-speeds', type: 'status', value: -10 }

test('untyped modifiers always stack', () => {
  const modifiers: Modifier[] = [
    { slug: 'a', label: 'A', selector: 'ac', type: 'untyped', value: 1 },
    { slug: 'b', label: 'B', selector: 'ac', type: 'untyped', value: 2 },
  ]
  const result = applyStackingRules(modifiers)
  assert.equal(result.total, 3)
  assert.equal(result.applied.length, 2)
})

test('same-type bonuses do not stack: only the highest counts', () => {
  const modifiers: Modifier[] = [
    { slug: 'weaker', label: 'Weaker status bonus', selector: 'ac', type: 'status', value: 1 },
    { slug: 'stronger', label: 'Stronger status bonus', selector: 'ac', type: 'status', value: 2 },
  ]
  const result = applyStackingRules(modifiers)
  assert.equal(result.total, 2)
  assert.deepEqual(
    result.applied.map((modifier) => modifier.slug),
    ['stronger'],
  )
})

test('same-type penalties do not stack: only the worst counts', () => {
  const modifiers: Modifier[] = [
    { slug: 'mild', label: 'Mild status penalty', selector: 'all-speeds', type: 'status', value: -5 },
    { slug: 'severe', label: 'Severe status penalty', selector: 'all-speeds', type: 'status', value: -10 },
  ]
  const result = applyStackingRules(modifiers)
  assert.equal(result.total, -10)
  assert.deepEqual(
    result.applied.map((modifier) => modifier.slug),
    ['severe'],
  )
})

test('a bonus and a penalty of the same type both apply (they do not cancel via stacking suppression)', () => {
  const modifiers: Modifier[] = [
    { slug: 'bonus', label: 'Circumstance bonus', selector: 'saving-throw', type: 'circumstance', value: 2 },
    { slug: 'penalty', label: 'Circumstance penalty', selector: 'saving-throw', type: 'circumstance', value: -1 },
  ]
  const result = applyStackingRules(modifiers)
  assert.equal(result.total, 1)
  assert.equal(result.applied.length, 2)
})

test('different named types all stack together for the same selector', () => {
  const modifiers: Modifier[] = [
    { slug: 'circumstance-bonus', label: 'Circumstance', selector: 'ac', type: 'circumstance', value: 2 },
    { slug: 'status-bonus', label: 'Status', selector: 'ac', type: 'status', value: 2 },
    { slug: 'item-bonus', label: 'Item', selector: 'ac', type: 'item', value: 1 },
    { slug: 'untyped-bonus', label: 'Untyped', selector: 'ac', type: 'untyped', value: 1 },
  ]
  const result = applyStackingRules(modifiers)
  assert.equal(result.total, 6)
  assert.equal(result.applied.length, 4)
})

test('empty modifier list totals zero', () => {
  const result = applyStackingRules([])
  assert.equal(result.total, 0)
  assert.deepEqual(result.applied, [])
})
