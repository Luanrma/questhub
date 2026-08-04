export function firstAvailableBackpackSlot(slotIndexes: Iterable<number | null>) {
  const occupied = new Set(
    [...slotIndexes].filter((slotIndex): slotIndex is number => slotIndex !== null),
  )
  let slotIndex = 0
  while (occupied.has(slotIndex)) slotIndex += 1
  return slotIndex
}
