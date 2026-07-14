import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveRollTwice } from './roll-twice'
import type { RollTwiceSource } from './roll-twice'

// Real RollTwice rule elements audited from pf2e-master/packs/spell-effects and conditions.

const WILL_ROLL_TWICE_LOWER: RollTwiceSource = { key: 'RollTwice', keep: 'lower', selector: 'will' }
const PREDICATED_SAVE_ROLL_TWICE: RollTwiceSource = {
  key: 'RollTwice',
  keep: 'higher',
  predicate: ['self:effect:cinder-gaze:4'],
  removeAfterRoll: true,
  selector: 'saving-throw',
}

test('a RollTwice without a predicate resolves as-is', () => {
  const { resolved, skipped } = resolveRollTwice([WILL_ROLL_TWICE_LOWER], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ keep: 'lower', selector: 'will', removeAfterRoll: false }])
})

test('a predicate gates resolution and removeAfterRoll is preserved', () => {
  const withoutEffect = resolveRollTwice([PREDICATED_SAVE_ROLL_TWICE], createRollOptions([]))
  assert.equal(withoutEffect.resolved.length, 0)

  const withEffect = resolveRollTwice([PREDICATED_SAVE_ROLL_TWICE], createRollOptions(['self:effect:cinder-gaze:4']))
  assert.deepEqual(withEffect.resolved, [{ keep: 'higher', selector: 'saving-throw', removeAfterRoll: true }])
})

test('non-RollTwice rule elements are ignored', () => {
  const { resolved, skipped } = resolveRollTwice([{ key: 'FlatModifier', selector: 'ac', type: 'status', value: 1 }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
