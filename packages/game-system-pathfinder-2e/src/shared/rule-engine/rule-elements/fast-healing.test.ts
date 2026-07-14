import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveFastHealing } from './fast-healing'

// Real FastHealing rule elements audited from pf2e-master/packs/spell-effects and conditions.

test('a static FastHealing value resolves and defaults type to fast-healing', () => {
  const { resolved, skipped } = resolveFastHealing([{ key: 'FastHealing', value: 3 }], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ value: 3, type: 'fast-healing' }])
})

test('an explicit regeneration type is preserved', () => {
  const { resolved } = resolveFastHealing([{ key: 'FastHealing', value: 5, type: 'regeneration' }], createRollOptions([]))
  assert.equal(resolved[0]?.type, 'regeneration')
})

test('a dynamic (formula) value is reported as skipped, never evaluated', () => {
  const { resolved, skipped } = resolveFastHealing([{ key: 'FastHealing', value: '@item.level * 2' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('a non-positive value is reported as skipped', () => {
  const { resolved, skipped } = resolveFastHealing([{ key: 'FastHealing', value: 0 }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'non-positive-value')
})
