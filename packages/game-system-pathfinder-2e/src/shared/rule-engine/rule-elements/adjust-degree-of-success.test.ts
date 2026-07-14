import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveAdjustDegreeOfSuccess } from './adjust-degree-of-success'
import type { AdjustDegreeOfSuccessSource } from './adjust-degree-of-success'

// Real AdjustDegreeOfSuccess rule elements audited from pf2e-master/packs/spell-effects and conditions.

const SEEK_PERCEPTION: AdjustDegreeOfSuccessSource = {
  key: 'AdjustDegreeOfSuccess',
  predicate: ['action:seek'],
  selector: 'perception',
  adjustment: { success: 'one-degree-better' },
}

const DYNAMIC_SELECTOR: AdjustDegreeOfSuccessSource = {
  key: 'AdjustDegreeOfSuccess',
  predicate: ['action:recall-knowledge'],
  selector: '{item|flags.pf2e.rulesSelections.skill}',
  adjustment: { criticalFailure: 'one-degree-better' },
}

test('resolves the adjustment map when the predicate is satisfied', () => {
  const { resolved, skipped } = resolveAdjustDegreeOfSuccess([SEEK_PERCEPTION], createRollOptions(['action:seek']))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ selector: 'perception', adjustment: { success: 'one-degree-better' } }])
})

test('predicate not satisfied gates resolution', () => {
  const { resolved, skipped } = resolveAdjustDegreeOfSuccess([SEEK_PERCEPTION], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'predicate-not-satisfied')
})

test('a dynamic selector expression is reported as skipped', () => {
  const { resolved, skipped } = resolveAdjustDegreeOfSuccess([DYNAMIC_SELECTOR], createRollOptions(['action:recall-knowledge']))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-selector')
})

test('a real compendium typo ("adjusment" instead of "adjustment") does not match the shape and is silently ignored, same as the real Foundry schema would reject it', () => {
  const typoRule = { key: 'AdjustDegreeOfSuccess', adjusment: { success: 'one-degree-better' }, predicate: ['action:seek'], selector: 'perception' }
  const { resolved, skipped } = resolveAdjustDegreeOfSuccess([typoRule], createRollOptions(['action:seek']))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
