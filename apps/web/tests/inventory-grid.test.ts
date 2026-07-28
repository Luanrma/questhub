import assert from 'node:assert/strict'
import test from 'node:test'
import {
  entriesBySlot,
  inventoryGridColumns,
  inventoryGridRows,
  inventorySlotCount,
  moveEntryOptimistically,
} from '../src/game-systems/inventory/domain/inventoryGrid'

const entries = [
  { id: 'entry-a', slotIndex: 2 },
  { id: 'entry-b', slotIndex: 9 },
]

test('inventory grid is 10 by 10 and indexes entries by their persistent slot', () => {
  assert.equal(inventoryGridColumns, 10)
  assert.equal(inventoryGridRows, 10)
  assert.equal(inventorySlotCount, 100)
  assert.equal(entriesBySlot(entries).get(9)?.id, 'entry-b')
})

test('moving an entry to an empty slot preserves the other entries', () => {
  assert.deepEqual(moveEntryOptimistically(entries, 'entry-a', 5), [
    { id: 'entry-a', slotIndex: 5 },
    { id: 'entry-b', slotIndex: 9 },
  ])
})

test('dropping an entry over another swaps their slots', () => {
  assert.deepEqual(moveEntryOptimistically(entries, 'entry-a', 9), [
    { id: 'entry-a', slotIndex: 9 },
    { id: 'entry-b', slotIndex: 2 },
  ])
})
