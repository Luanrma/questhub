import assert from 'node:assert/strict'
import test from 'node:test'
import { findIntersectingTargetTokenId, toggleTargetSelection } from '../src/vtt/area-templates/domain/targetSelection'

test('target selection adds and removes distinct tokens', () => {
  assert.deepEqual(toggleTargetSelection([], 'token-1', 3), ['token-1'])
  assert.deepEqual(toggleTargetSelection(['token-1'], 'token-1', 3), [])
})

test('target selection does not exceed the configured maximum', () => {
  const selected = ['token-1', 'token-2']
  assert.equal(toggleTargetSelection(selected, 'token-3', 2), selected)
})

test('target hit test accepts partial marker overlap and chooses the nearest token', () => {
  const tokens = [
    { id: 'farther', position: { x: 3, y: 2 }, size: 1 },
    { id: 'nearest', position: { x: 2, y: 2 }, size: 1 },
  ]
  assert.equal(findIntersectingTargetTokenId({ x: 115, y: 100 }, tokens, 50), 'nearest')
  assert.equal(findIntersectingTargetTokenId({ x: 195, y: 100 }, tokens, 50), null)
})
