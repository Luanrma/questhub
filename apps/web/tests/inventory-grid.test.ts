import assert from 'node:assert/strict'
import test from 'node:test'
import {
  entriesBySlot,
  inventoryGridColumns,
  inventoryGridPageRows,
  inventoryGridPageSlotCount,
  moveEntryOptimistically,
  visibleInventorySlotCount,
} from '../src/game-systems/inventory/domain/inventoryGrid'

const entries = [
  { id: 'entry-a', slotIndex: 2 },
  { id: 'entry-b', slotIndex: 9 },
]

test('inventory grid keeps 10 by 10 visual pages and expands when needed', () => {
  assert.equal(inventoryGridColumns, 10)
  assert.equal(inventoryGridPageRows, 10)
  assert.equal(inventoryGridPageSlotCount, 100)
  assert.equal(visibleInventorySlotCount(entries), 100)
  assert.equal(visibleInventorySlotCount([{ id: 'entry-c', slotIndex: 100 }]), 200)
  assert.equal(entriesBySlot(entries).get(9)?.id, 'entry-b')
})

test('moving an entry to an empty slot preserves the other entries', () => {
  assert.deepEqual(moveEntryOptimistically(entries, 'entry-a', 105), [
    { id: 'entry-a', slotIndex: 105 },
    { id: 'entry-b', slotIndex: 9 },
  ])
})

test('dropping an entry over another swaps their slots', () => {
  assert.deepEqual(moveEntryOptimistically(entries, 'entry-a', 9), [
    { id: 'entry-a', slotIndex: 9 },
    { id: 'entry-b', slotIndex: 2 },
  ])
})
