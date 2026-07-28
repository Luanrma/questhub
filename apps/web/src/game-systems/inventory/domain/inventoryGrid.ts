export const inventoryGridColumns = 10
export const inventoryGridRows = 10
export const inventorySlotCount = inventoryGridColumns * inventoryGridRows

export type SlottedInventoryEntry = {
  id: string
  slotIndex: number
}

export function entriesBySlot<T extends SlottedInventoryEntry>(entries: readonly T[]) {
  return new Map(entries.map((entry) => [entry.slotIndex, entry]))
}

export function moveEntryOptimistically<T extends SlottedInventoryEntry>(
  entries: readonly T[],
  entryId: string,
  targetSlotIndex: number,
) {
  const source = entries.find((entry) => entry.id === entryId)
  if (!source || targetSlotIndex < 0 || targetSlotIndex >= inventorySlotCount) {
    return [...entries]
  }

  const target = entries.find((entry) => entry.slotIndex === targetSlotIndex)
  return entries.map((entry) => {
    if (entry.id === source.id) return { ...entry, slotIndex: targetSlotIndex }
    if (target && entry.id === target.id) return { ...entry, slotIndex: source.slotIndex }
    return entry
  })
}
