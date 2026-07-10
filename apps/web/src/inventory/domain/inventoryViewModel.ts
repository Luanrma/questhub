import type { EquippedItemView, InventoryItemView, InventoryView } from './inventoryTypes'

export type EquippedGroupForDisplay = {
  id: string
  label: string
  items: InventoryItemView[]
}

export function getStoredItems(inventory: InventoryView): InventoryItemView[] {
  return inventory.items.filter((item) => item.state === 'STORED')
}

export function getEquippedItemViews(inventory: InventoryView): InventoryItemView[] {
  return inventory.items.filter((item) => item.state === 'EQUIPPED')
}

export function groupEquippedItemsByOption(equippedItems: EquippedItemView[]): Map<string, EquippedItemView[]> {
  const groups = new Map<string, EquippedItemView[]>()
  for (const equipped of equippedItems) {
    const bucket = groups.get(equipped.equipmentOptionKey) ?? []
    bucket.push(equipped)
    groups.set(equipped.equipmentOptionKey, bucket)
  }
  return groups
}

/**
 * Groups equipped items for display, always resolving a human label instead of the raw
 * equipmentOptionKey (per .ai/inventory/specs.md §12). Prefers equippedGroups from the API
 * (already labeled by the system adapter); falls back to client-side grouping + label lookup
 * against equipmentOptions for adapters that don't provide equippedGroups yet.
 */
export function getEquippedGroupsForDisplay(inventory: InventoryView): EquippedGroupForDisplay[] {
  const equippedItemViews = getEquippedItemViews(inventory)
  const itemByEquippedId = new Map(equippedItemViews.flatMap((item) => (item.equipped ? [[item.equipped.id, item] as const] : [])))

  function resolveItems(equippedItems: EquippedItemView[]): InventoryItemView[] {
    return equippedItems.flatMap((equipped) => {
      const item = itemByEquippedId.get(equipped.id)
      return item ? [item] : []
    })
  }

  if (inventory.equippedGroups?.length) {
    return inventory.equippedGroups.map((group) => ({
      id: group.id,
      label: group.label,
      items: resolveItems(group.items),
    }))
  }

  const grouped = groupEquippedItemsByOption(inventory.equippedItems)
  const optionLabelByKey = new Map((inventory.equipmentOptions ?? []).map((option) => [option.key, option.label]))

  return Array.from(grouped.entries()).map(([equipmentOptionKey, equippedItems]) => ({
    id: equipmentOptionKey,
    label: optionLabelByKey.get(equipmentOptionKey) ?? equipmentOptionKey,
    items: resolveItems(equippedItems),
  }))
}

export function findInventoryItemById(inventory: InventoryView, inventoryItemId: string): InventoryItemView | null {
  return inventory.items.find((item) => item.id === inventoryItemId) ?? null
}

/**
 * Compatible equipmentOptionKeys for an item based on its itemType/equipSlot (moved from
 * InventoryItemCard so the context-menu UI can reuse this pure rule too).
 */
export function getCompatibleEquipmentOptionKeys(item: InventoryItemView): string[] | null {
  const equipSlot = item.itemDefinition.equipSlot
  if (!equipSlot) return null

  if (item.itemDefinition.itemType === 'weapon') return equipSlot === 'two_hands' ? ['two_hands'] : ['main_hand', 'off_hand']
  if (item.itemDefinition.itemType === 'shield') return ['shield']
  if (item.itemDefinition.itemType === 'armor') return ['armor']
  if (equipSlot === 'held') return ['main_hand', 'off_hand']
  if (equipSlot === 'consumable') return ['worn', 'main_hand', 'off_hand']
  if (equipSlot === 'main_hand') return ['main_hand', 'off_hand']
  if (equipSlot === 'two_hands') return ['two_hands']
  return [equipSlot]
}
