import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveBaseSpeeds } from './base-speed'
import type { BaseSpeedSource } from './base-speed'

// Real BaseSpeed rule elements audited from pf2e-master/packs/spell-effects and conditions.

const DYNAMIC_FLY_SPEED: BaseSpeedSource = { key: 'BaseSpeed', selector: 'fly', value: '@actor.attributes.speed.total' }
const PREDICATED_SWIM_SPEED: BaseSpeedSource = {
  key: 'BaseSpeed',
  predicate: ['animal-feature:fish-tail'],
  selector: 'swim',
  value: '@actor.attributes.speed.total',
}

test('a dynamic (formula) BaseSpeed value is reported as skipped, never evaluated', () => {
  const { resolved, skipped } = resolveBaseSpeeds([DYNAMIC_FLY_SPEED], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('predicate gating is checked before the dynamic-value check', () => {
  const { skipped } = resolveBaseSpeeds([PREDICATED_SWIM_SPEED], createRollOptions([]))
  assert.equal(skipped[0]?.reason, 'predicate-not-satisfied')
})

test('a static numeric value resolves and the "-speed" selector suffix is stripped (real system normalization)', () => {
  const source: BaseSpeedSource = { key: 'BaseSpeed', selector: 'fly-speed', value: 20 }
  const { resolved, skipped } = resolveBaseSpeeds([source], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ selector: 'fly', value: 20 }])
})

test('non-BaseSpeed rule elements are ignored', () => {
  const { resolved, skipped } = resolveBaseSpeeds([{ key: 'Sense', selector: 'darkvision' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
