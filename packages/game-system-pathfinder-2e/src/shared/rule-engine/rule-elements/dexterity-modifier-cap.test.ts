import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveDexterityModifierCaps } from './dexterity-modifier-cap'

// Real DexterityModifierCap rule element audited from pf2e-master/packs
// and cross checked against
// pf2e-master/src/module/rules/rule-element/dexterity-modifier-cap.ts.

test('a static DexterityModifierCap value resolves', () => {
  const { resolved, skipped } = resolveDexterityModifierCaps([{ key: 'DexterityModifierCap', value: 5 }], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ value: 5 }])
})

test('a dynamic (formula) value is reported as skipped', () => {
  const { resolved, skipped } = resolveDexterityModifierCaps([{ key: 'DexterityModifierCap', value: '@item.level' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('a predicate gates resolution', () => {
  const source = { key: 'DexterityModifierCap', value: 3, predicate: ['self:condition:quickened'] }
  assert.equal(resolveDexterityModifierCaps([source], createRollOptions([])).resolved.length, 0)
  assert.equal(resolveDexterityModifierCaps([source], createRollOptions(['self:condition:quickened'])).resolved.length, 1)
})
