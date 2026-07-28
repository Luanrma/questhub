import type { GameSystemInventoryPolicy } from '../inventory'

export type InventoryStackCandidate = {
  id: string
  data: unknown
}

export function findStackableInventoryEntry(
  entries: readonly InventoryStackCandidate[],
  incomingData: unknown,
  policy: GameSystemInventoryPolicy | null,
  stack: boolean,
) {
  if (!stack || !policy) return null
  return entries.find((entry) => policy.canStack(entry.data, incomingData)) ?? null
}
