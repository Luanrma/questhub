import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveStriking } from './striking'
import type { StrikingSource } from './striking'

// Real Striking rule elements audited from pf2e-master/packs/spell-effects.

const SLING_STRIKE_DAMAGE: StrikingSource = {
  key: 'Striking',
  predicate: ['item:group:sling'],
  selector: 'strike-damage',
  value: 1,
}

const DYNAMIC_SELECTOR_STRIKING: StrikingSource = {
  key: 'Striking',
  predicate: ['augmented-body:clockwork-arm'],
  selector: '{item|id}-damage',
  value: 'ternary(gte(@item.level,9),3,ternary(gte(@item.level,7),2,1))',
}

test('a static value resolves once the predicate is satisfied', () => {
  const withoutGroup = resolveStriking([SLING_STRIKE_DAMAGE], createRollOptions([]))
  assert.equal(withoutGroup.resolved.length, 0)

  const withGroup = resolveStriking([SLING_STRIKE_DAMAGE], createRollOptions(['item:group:sling']))
  assert.deepEqual(withGroup.resolved, [{ selector: 'strike-damage', value: 1 }])
})

test('a dynamic selector is reported as skipped before the value is even checked', () => {
  const { resolved, skipped } = resolveStriking([DYNAMIC_SELECTOR_STRIKING], createRollOptions(['augmented-body:clockwork-arm']))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-selector')
})

test('non-Striking rule elements are ignored', () => {
  const { resolved, skipped } = resolveStriking([{ key: 'WeaponPotency', selector: 'strike-attack-roll', value: 1 }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
