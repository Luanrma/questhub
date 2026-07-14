import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveTokenMarks } from './token-mark'

// Real TokenMark rule elements audited from pf2e-master/packs/spell-effects.

test('a TokenMark resolves its slug', () => {
  const { resolved, skipped } = resolveTokenMarks([{ key: 'TokenMark', slug: 'celestial-brand' }], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, ['celestial-brand'])
})

test('a predicate gates resolution', () => {
  const source = { key: 'TokenMark', slug: 'forbidding-ward', predicate: ['self:condition:quickened'] }
  assert.equal(resolveTokenMarks([source], createRollOptions([])).resolved.length, 0)
  assert.equal(resolveTokenMarks([source], createRollOptions(['self:condition:quickened'])).resolved.length, 1)
})

test('non-TokenMark rule elements are ignored', () => {
  const { resolved, skipped } = resolveTokenMarks([{ key: 'TokenLight', value: {} }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
