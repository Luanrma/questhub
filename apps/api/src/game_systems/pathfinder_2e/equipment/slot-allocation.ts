export function firstAvailableBackpackSlot(slotIndexes: Iterable<number>) {
  const occupied = new Set([...slotIndexes].filter((slotIndex) => slotIndex >= 0))
  let slotIndex = 0
  while (occupied.has(slotIndex)) slotIndex += 1
  return slotIndex
}

export function firstAvailableEquippedSlot(slotIndexes: Iterable<number>) {
  const occupied = new Set([...slotIndexes].filter((slotIndex) => slotIndex < 0))
  let slotIndex = -1
  while (occupied.has(slotIndex)) slotIndex -= 1
  return slotIndex
}
