export const inventoryGridColumns = 10
export const inventoryGridPageRows = 10
export const inventoryGridPageSlotCount = inventoryGridColumns * inventoryGridPageRows

export type SlottedInventoryEntry = {
  id: string
  slotIndex: number
}

export function entriesBySlot<T extends SlottedInventoryEntry>(entries: readonly T[]) {
  return new Map(entries.map((entry) => [entry.slotIndex, entry]))
}

export function visibleInventorySlotCount(entries: readonly SlottedInventoryEntry[]) {
  const highestSlot = entries.reduce((highest, entry) => Math.max(highest, entry.slotIndex), -1)
  const requiredSlots = highestSlot + 1
  const pageCount = Math.max(1, Math.ceil(requiredSlots / inventoryGridPageSlotCount))
  return pageCount * inventoryGridPageSlotCount
}

export function moveEntryOptimistically<T extends SlottedInventoryEntry>(
  entries: readonly T[],
  entryId: string,
  targetSlotIndex: number,
) {
  const source = entries.find((entry) => entry.id === entryId)
  if (!source || targetSlotIndex < 0) return [...entries]

  const target = entries.find((entry) => entry.slotIndex === targetSlotIndex)
  return entries.map((entry) => {
    if (entry.id === source.id) return { ...entry, slotIndex: targetSlotIndex }
    if (target && entry.id === target.id) return { ...entry, slotIndex: source.slotIndex }
    return entry
  })
}
