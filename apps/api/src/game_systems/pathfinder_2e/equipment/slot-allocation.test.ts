import assert from 'node:assert/strict'
import test from 'node:test'
import {
  firstAvailableBackpackSlot,
  firstAvailableEquippedSlot,
} from './slot-allocation'

test('backpack slots use the first free non-negative position', () => {
  assert.equal(firstAvailableBackpackSlot([]), 0)
  assert.equal(firstAvailableBackpackSlot([0, 2, -1]), 1)
  assert.equal(firstAvailableBackpackSlot([0, 1, 2]), 3)
})

test('equipped items use internal negative positions', () => {
  assert.equal(firstAvailableEquippedSlot([]), -1)
  assert.equal(firstAvailableEquippedSlot([0, -1, -3]), -2)
  assert.equal(firstAvailableEquippedSlot([-1, -2]), -3)
})
