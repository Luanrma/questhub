import assert from 'node:assert/strict'
import test from 'node:test'
import { firstAvailableBackpackSlot } from './slot-allocation'

test('backpack slots use the first free non-negative position', () => {
  assert.equal(firstAvailableBackpackSlot([]), 0)
  assert.equal(firstAvailableBackpackSlot([0, 2, null]), 1)
  assert.equal(firstAvailableBackpackSlot([0, 1, 2]), 3)
})

test('unslotted equipment does not reserve a backpack position', () => {
  assert.equal(firstAvailableBackpackSlot([null, null, 0]), 1)
})
