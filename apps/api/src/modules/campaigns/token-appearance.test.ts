import assert from 'node:assert/strict'
import test from 'node:test'
import { DEFAULT_TOKEN_COLOR, normalizeTokenColor } from './token-appearance'

test('new image defaults to transparent and may receive an explicit background', () => {
  assert.equal(normalizeTokenColor({ nextAvatarUrl: '/tokens/goblin.png', requestedColor: undefined, currentColor: '#123456', avatarChanged: true }), null)
  assert.equal(normalizeTokenColor({ nextAvatarUrl: '/tokens/goblin.png', requestedColor: '#123456', avatarChanged: true }), '#123456')
})

test('token without image always receives an opaque fallback color', () => {
  assert.equal(normalizeTokenColor({ nextAvatarUrl: null, requestedColor: null }), DEFAULT_TOKEN_COLOR)
  assert.equal(normalizeTokenColor({ nextAvatarUrl: null, requestedColor: undefined, currentColor: '#abcdef' }), '#abcdef')
})
