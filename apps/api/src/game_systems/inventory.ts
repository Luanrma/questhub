import type { GameSystemCatalogDomain, GameSystemKey } from './catalog'

export type GameSystemInventoryPresentationDetail = {
  label: string
  value: string
}

export type GameSystemInventoryItemPresentation = {
  name: string
  subtitle?: string | null
  description?: string | null
  imageUrl?: string | null
  iconKey?: string | null
  traits?: readonly string[]
  details?: readonly GameSystemInventoryPresentationDetail[]
  catalogDomainKey?: GameSystemCatalogDomain | null
}

export type GameSystemInventoryPolicy = {
  canStack(existingData: unknown, incomingData: unknown): boolean
  present?(data: unknown): GameSystemInventoryItemPresentation | null
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
