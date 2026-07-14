import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveActiveEffectLikes } from './active-effect-like'
import type { ActiveEffectLikeSource } from './active-effect-like'

// Real ActiveEffectLike rule elements audited from pf2e-master/packs/spell-effects and conditions.

const BULK_ENCUMBRANCE_ADDEND: ActiveEffectLikeSource = {
  key: 'ActiveEffectLike',
  mode: 'add',
  path: 'inventory.bulk.encumberedAfterAddend',
  value: 3,
}

const DYNAMIC_OVERRIDE: ActiveEffectLikeSource = {
  key: 'ActiveEffectLike',
  mode: 'override',
  path: 'flags.pf2e.blinkCharge',
  value: '@item.level',
}

test('a static numeric ActiveEffectLike resolves the pending change without computing a final value', () => {
  const { resolved, skipped } = resolveActiveEffectLikes([BULK_ENCUMBRANCE_ADDEND], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ mode: 'add', path: 'inventory.bulk.encumberedAfterAddend', value: 3, phase: 'applyAEs', merge: false }])
})

test('a dynamic (formula) value is reported as skipped, never evaluated', () => {
  const { resolved, skipped } = resolveActiveEffectLikes([DYNAMIC_OVERRIDE], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('a predicate gates resolution', () => {
  const source: ActiveEffectLikeSource = { key: 'ActiveEffectLike', mode: 'add', path: 'attributes.hp.max', value: 5, predicate: ['self:condition:quickened'] }
  const withoutCondition = resolveActiveEffectLikes([source], createRollOptions([]))
  assert.equal(withoutCondition.resolved.length, 0)
  const withCondition = resolveActiveEffectLikes([source], createRollOptions(['self:condition:quickened']))
  assert.equal(withCondition.resolved.length, 1)
})

test('an unrecognized mode does not match the ActiveEffectLike shape', () => {
  const { resolved, skipped } = resolveActiveEffectLikes([{ key: 'ActiveEffectLike', mode: 'bogus', path: 'x', value: 1 }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
