export const PATHFINDER_2E_EXCLUSIVE_SLOTS = [
  'main_hand',
  'off_hand',
  'two_hands',
  'armor',
  'shield',
] as const

export const PATHFINDER_2E_NON_EXCLUSIVE_SLOTS = [
  'worn',
  'held',
  'backpack',
  'consumable',
  'other',
] as const

export type Pathfinder2eExclusiveEquipmentSlot = (typeof PATHFINDER_2E_EXCLUSIVE_SLOTS)[number]
export type Pathfinder2eNonExclusiveEquipmentSlot = (typeof PATHFINDER_2E_NON_EXCLUSIVE_SLOTS)[number]
export type Pathfinder2eEquipmentSlot = Pathfinder2eExclusiveEquipmentSlot | Pathfinder2eNonExclusiveEquipmentSlot

export function isExclusivePathfinder2eSlot(slot: string): slot is Pathfinder2eExclusiveEquipmentSlot {
  return (PATHFINDER_2E_EXCLUSIVE_SLOTS as readonly string[]).includes(slot)
}

export function isKnownPathfinder2eSlot(slot: string): slot is Pathfinder2eEquipmentSlot {
  return (
    isExclusivePathfinder2eSlot(slot) ||
    (PATHFINDER_2E_NON_EXCLUSIVE_SLOTS as readonly string[]).includes(slot)
  )
}

export function toExclusiveSlotKey(slot: string): string | null {
  return isExclusivePathfinder2eSlot(slot) ? slot : null
}
