import assert from 'node:assert/strict'
import test from 'node:test'
import {
  availableInventoryPageCount,
  entriesBySlot,
  inventoryGridColumns,
  inventoryGridPageRows,
  inventoryGridPageSlotCount,
  inventoryPageSlotIndexes,
  moveEntryOptimistically,
  occupiedInventoryPageCount,
} from '../src/game-systems/inventory/domain/inventoryGrid'

const entries = [
  { id: 'entry-a', slotIndex: 2 },
  { id: 'entry-b', slotIndex: 9 },
]

test('inventory grid renders fixed 10 by 10 pages without limiting total capacity', () => {
  assert.equal(inventoryGridColumns, 10)
  assert.equal(inventoryGridPageRows, 10)
  assert.equal(inventoryGridPageSlotCount, 100)
  assert.equal(occupiedInventoryPageCount(entries), 1)
  assert.equal(availableInventoryPageCount(entries), 2)
  assert.equal(occupiedInventoryPageCount([{ id: 'entry-c', slotIndex: 100_000_000 }]), 1_000_001)
  assert.equal(inventoryPageSlotIndexes(1)[0], 100)
  assert.equal(inventoryPageSlotIndexes(1).at(-1), 199)
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

test('unsafe slot indexes are ignored by optimistic movement', () => {
  assert.deepEqual(moveEntryOptimistically(entries, 'entry-a', Number.MAX_VALUE), entries)
})

test('entries outside the grid cannot be moved optimistically', () => {
  const unslottedEntries = [
    { id: 'equipped', slotIndex: null },
    { id: 'stored', slotIndex: 0 },
  ]

  assert.deepEqual(
    moveEntryOptimistically(unslottedEntries, 'equipped', 1),
    unslottedEntries,
  )
})
