import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveMartialProficiency } from './martial-proficiency'
import type { MartialProficiencySource } from './martial-proficiency'

// Real MartialProficiency rule element audited from pf2e-master/packs/spell-effects
// (only one real occurrence in the closure; its value is a formula, so it never
// resolves in the current dataset — this test exercises the resolver's logic
// with an equivalent static value to prove the mechanism works).

const REAL_SHAPE_WITH_DYNAMIC_VALUE: MartialProficiencySource = {
  key: 'MartialProficiency',
  definition: ['item:id:{item|flags.pf2e.rulesSelections.weapon}'],
  label: 'PF2E.SpecificRule.ObjectMemory',
  slug: 'object-memory',
  value: 'ternary(lt(@item.level, 6), 1, 2)',
}

test('the real compendium example never resolves because its value is a formula', () => {
  const { resolved, skipped } = resolveMartialProficiency([REAL_SHAPE_WITH_DYNAMIC_VALUE], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('a static value resolves, defaulting kind to attack, with definition passed through opaque', () => {
  const source: MartialProficiencySource = { ...REAL_SHAPE_WITH_DYNAMIC_VALUE, value: 2 }
  const { resolved, skipped } = resolveMartialProficiency([source], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [
    { slug: 'object-memory', kind: 'attack', definition: REAL_SHAPE_WITH_DYNAMIC_VALUE.definition, value: 2, sameAs: undefined, maxRank: undefined },
  ])
})

test('a top-level predicate (distinct from `definition`) gates resolution', () => {
  const source: MartialProficiencySource = { ...REAL_SHAPE_WITH_DYNAMIC_VALUE, value: 2, predicate: ['self:condition:quickened'] }
  assert.equal(resolveMartialProficiency([source], createRollOptions([])).resolved.length, 0)
  assert.equal(resolveMartialProficiency([source], createRollOptions(['self:condition:quickened'])).resolved.length, 1)
})
