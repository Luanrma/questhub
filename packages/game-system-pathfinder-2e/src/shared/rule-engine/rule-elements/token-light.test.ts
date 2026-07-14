import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveTokenLights } from './token-light'
import type { TokenLightSource } from './token-light'

// Real TokenLight rule elements audited from pf2e-master/packs/spell-effects.

const STARLIGHT: TokenLightSource = {
  key: 'TokenLight',
  value: { animation: { intensity: 2, speed: 2, type: 'starlight' }, bright: 30, color: '#8f8f8f' },
}

test('a TokenLight value is passed through unmodified', () => {
  const { resolved, skipped } = resolveTokenLights([STARLIGHT], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [STARLIGHT.value])
})

test('a predicate gates resolution', () => {
  const source: TokenLightSource = { key: 'TokenLight', value: { bright: 10 }, predicate: ['self:condition:quickened'] }
  assert.equal(resolveTokenLights([source], createRollOptions([])).resolved.length, 0)
  assert.equal(resolveTokenLights([source], createRollOptions(['self:condition:quickened'])).resolved.length, 1)
})

test('non-TokenLight rule elements are ignored', () => {
  const { resolved, skipped } = resolveTokenLights([{ key: 'TokenMark', slug: 'x' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
