import assert from 'node:assert/strict'
import test from 'node:test'
import type { GameSystemInventoryPolicy } from '../inventory'
import { findStackableInventoryEntry } from './stacking'
import {
  addInventoryEntrySchema,
  INVENTORY_SLOT_COUNT,
  INVENTORY_QUANTITY_MAX,
  sendCatalogItemSchema,
  updateInventoryEntryQuantitySchema,
  updateInventoryEntrySlotSchema,
} from './validation'

const deepNamePolicy: GameSystemInventoryPolicy = {
  canStack(existingData, incomingData) {
    const existing = existingData as { name?: string }
    const incoming = incomingData as { name?: string }
    return existing.name === incoming.name
  },
}

test('addInventoryEntrySchema applies defaults and validates item JSON', () => {
  const result = addInventoryEntrySchema.safeParse({ data: { name: 'Arrows' } })

  assert.equal(result.success, true)
  if (!result.success) return
  assert.equal(result.data.quantity, 1)
  assert.equal(result.data.stack, true)
})

test('inventory quantity must be a positive bounded integer', () => {
  assert.equal(updateInventoryEntryQuantitySchema.safeParse({ quantity: 0 }).success, false)
  assert.equal(updateInventoryEntryQuantitySchema.safeParse({ quantity: 1.5 }).success, false)
  assert.equal(
    updateInventoryEntryQuantitySchema.safeParse({ quantity: INVENTORY_QUANTITY_MAX + 1 }).success,
    false,
  )
  assert.equal(updateInventoryEntryQuantitySchema.safeParse({ quantity: 3 }).success, true)
})

test('inventory slot accepts exactly the 10 by 10 grid bounds', () => {
  assert.equal(INVENTORY_SLOT_COUNT, 100)
  assert.equal(updateInventoryEntrySlotSchema.safeParse({ slotIndex: 0 }).success, true)
  assert.equal(updateInventoryEntrySlotSchema.safeParse({ slotIndex: 99 }).success, true)
  assert.equal(updateInventoryEntrySlotSchema.safeParse({ slotIndex: -1 }).success, false)
  assert.equal(updateInventoryEntrySlotSchema.safeParse({ slotIndex: 100 }).success, false)
  assert.equal(updateInventoryEntrySlotSchema.safeParse({ slotIndex: 1.5 }).success, false)
})

test('catalog item delivery requires a recipient and applies quantity default', () => {
  const result = sendCatalogItemSchema.safeParse({ recipientActorId: 'actor-1' })

  assert.equal(result.success, true)
  if (!result.success) return
  assert.equal(result.data.recipientActorId, 'actor-1')
  assert.equal(result.data.quantity, 1)
  assert.equal(sendCatalogItemSchema.safeParse({ recipientActorId: '', quantity: 1 }).success, false)
  assert.equal(sendCatalogItemSchema.safeParse({ recipientActorId: 'actor-1', quantity: 0 }).success, false)
})

test('findStackableInventoryEntry delegates compatibility to game system policy', () => {
  const entries = [
    { id: 'entry-1', data: { name: 'Sword' } },
    { id: 'entry-2', data: { name: 'Arrows' } },
  ]

  assert.deepEqual(
    findStackableInventoryEntry(entries, { name: 'Arrows' }, deepNamePolicy, true),
    entries[1],
  )
})

test('findStackableInventoryEntry does not group without policy or when disabled', () => {
  const entries = [{ id: 'entry-1', data: { name: 'Arrows' } }]

  assert.equal(findStackableInventoryEntry(entries, { name: 'Arrows' }, null, true), null)
  assert.equal(findStackableInventoryEntry(entries, { name: 'Arrows' }, deepNamePolicy, false), null)
})
