import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveCriticalSpecialization } from './critical-specialization'

// Real CriticalSpecialization rule element audited from pf2e-master/packs/spell-effects.

test('a CriticalSpecialization without a predicate is always active', () => {
  const { activeCount, skipped } = resolveCriticalSpecialization([{ key: 'CriticalSpecialization' }], createRollOptions([]))
  assert.equal(activeCount, 1)
  assert.equal(skipped.length, 0)
})

test('a predicate gates whether it is active', () => {
  const source = { key: 'CriticalSpecialization', predicate: ['item:id:{item|flags.pf2e.rulesSelections.weapon}'] }
  // The predicate itself contains a dynamic segment as a plain string statement, so it will
  // never literally match any populated roll option — this is expected, conservative behavior.
  const { activeCount, skipped } = resolveCriticalSpecialization([source], createRollOptions([]))
  assert.equal(activeCount, 0)
  assert.equal(skipped[0]?.reason, 'predicate-not-satisfied')
})

test('multiple active CriticalSpecialization rule elements are counted', () => {
  const { activeCount } = resolveCriticalSpecialization([{ key: 'CriticalSpecialization' }, { key: 'CriticalSpecialization' }], createRollOptions([]))
  assert.equal(activeCount, 2)
})
