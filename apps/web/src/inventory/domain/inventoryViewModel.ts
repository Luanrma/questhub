import type { EquippedItemView, InventoryItemView, InventoryView } from './inventoryTypes'

export function getStoredItems(inventory: InventoryView): InventoryItemView[] {
  return inventory.items.filter((item) => item.state === 'STORED')
}

export function getEquippedItemViews(inventory: InventoryView): InventoryItemView[] {
  return inventory.items.filter((item) => item.state === 'EQUIPPED')
}

export function groupEquippedItemsBySlot(equippedItems: EquippedItemView[]): Map<string, EquippedItemView[]> {
  const groups = new Map<string, EquippedItemView[]>()
  for (const equipped of equippedItems) {
    const bucket = groups.get(equipped.slot) ?? []
    bucket.push(equipped)
    groups.set(equipped.slot, bucket)
  }
  return groups
}

export function findInventoryItemById(inventory: InventoryView, inventoryItemId: string): InventoryItemView | null {
  return inventory.items.find((item) => item.id === inventoryItemId) ?? null
}
