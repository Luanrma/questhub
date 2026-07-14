import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveWeaponPotency } from './weapon-potency'
import type { WeaponPotencySource } from './weapon-potency'

// Real WeaponPotency rule elements audited from pf2e-master/packs/spell-effects.

const SLING_ATTACK_POTENCY: WeaponPotencySource = {
  key: 'WeaponPotency',
  predicate: ['item:group:sling'],
  selector: 'strike-attack-roll',
  value: 1,
}

test('a static value resolves once the predicate is satisfied', () => {
  const withoutGroup = resolveWeaponPotency([SLING_ATTACK_POTENCY], createRollOptions([]))
  assert.equal(withoutGroup.resolved.length, 0)

  const withGroup = resolveWeaponPotency([SLING_ATTACK_POTENCY], createRollOptions(['item:group:sling']))
  assert.deepEqual(withGroup.resolved, [{ selector: 'strike-attack-roll', value: 1 }])
})

test('a dynamic selector expression is reported as skipped', () => {
  const source: WeaponPotencySource = { key: 'WeaponPotency', selector: '{item|flags.pf2e.rulesSelections.weapon}-attack', value: 1 }
  const { resolved, skipped } = resolveWeaponPotency([source], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-selector')
})

test('non-WeaponPotency rule elements are ignored', () => {
  const { resolved, skipped } = resolveWeaponPotency([{ key: 'Striking', selector: 'strike-damage', value: 1 }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
