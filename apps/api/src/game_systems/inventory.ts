import type { GameSystemKey } from './catalog'

export type GameSystemInventoryPolicy = {
  canStack(existingData: unknown, incomingData: unknown): boolean
}

const inventoryPolicies = new Map<GameSystemKey, GameSystemInventoryPolicy>()

export function registerGameSystemInventoryPolicy(
  system: GameSystemKey,
  policy: GameSystemInventoryPolicy,
) {
  if (inventoryPolicies.has(system)) {
    throw new Error(`Inventory policy already registered for ${system}`)
  }

  inventoryPolicies.set(system, policy)
}

export function getGameSystemInventoryPolicy(system: GameSystemKey) {
  return inventoryPolicies.get(system) ?? null
}
