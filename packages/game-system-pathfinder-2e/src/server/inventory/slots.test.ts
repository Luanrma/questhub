import test from 'node:test'
import assert from 'node:assert/strict'
import { isExclusivePathfinder2eSlot, isKnownPathfinder2eSlot, toExclusiveSlotKey } from './slots'

test('isExclusivePathfinder2eSlot recognizes exclusive slots', () => {
  assert.equal(isExclusivePathfinder2eSlot('main_hand'), true)
  assert.equal(isExclusivePathfinder2eSlot('armor'), true)
})

test('isExclusivePathfinder2eSlot rejects non-exclusive slots', () => {
  assert.equal(isExclusivePathfinder2eSlot('backpack'), false)
  assert.equal(isExclusivePathfinder2eSlot('unknown_slot'), false)
})

test('isKnownPathfinder2eSlot accepts both exclusive and non-exclusive slots', () => {
  assert.equal(isKnownPathfinder2eSlot('shield'), true)
  assert.equal(isKnownPathfinder2eSlot('worn'), true)
  assert.equal(isKnownPathfinder2eSlot('unknown_slot'), false)
})

test('toExclusiveSlotKey returns the slot for exclusive slots', () => {
  assert.equal(toExclusiveSlotKey('off_hand'), 'off_hand')
})

test('toExclusiveSlotKey returns null for non-exclusive slots', () => {
  assert.equal(toExclusiveSlotKey('consumable'), null)
})
