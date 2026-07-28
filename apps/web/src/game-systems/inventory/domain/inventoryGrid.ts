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

export function occupiedInventoryPageCount(entries: readonly SlottedInventoryEntry[]) {
  const highestSlot = entries.reduce((highest, entry) => Math.max(highest, entry.slotIndex), -1)
  return Math.max(1, Math.ceil((highestSlot + 1) / inventoryGridPageSlotCount))
}

export function availableInventoryPageCount(entries: readonly SlottedInventoryEntry[]) {
  if (entries.length === 0) return 1
  return occupiedInventoryPageCount(entries) + 1
}

export function inventoryPageSlotIndexes(pageIndex: number) {
  const safePageIndex = Math.max(0, Math.trunc(pageIndex))
  const firstSlot = safePageIndex * inventoryGridPageSlotCount
  return Array.from(
    { length: inventoryGridPageSlotCount },
    (_, offset) => firstSlot + offset,
  )
}

export function moveEntryOptimistically<T extends SlottedInventoryEntry>(
  entries: readonly T[],
  entryId: string,
  targetSlotIndex: number,
) {
  const source = entries.find((entry) => entry.id === entryId)
  if (!source || targetSlotIndex < 0 || !Number.isSafeInteger(targetSlotIndex)) return [...entries]

  const target = entries.find((entry) => entry.slotIndex === targetSlotIndex)
  return entries.map((entry) => {
    if (entry.id === source.id) return { ...entry, slotIndex: targetSlotIndex }
    if (target && entry.id === target.id) return { ...entry, slotIndex: source.slotIndex }
    return entry
  })
}
