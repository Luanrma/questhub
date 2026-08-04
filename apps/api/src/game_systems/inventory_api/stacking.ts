import type { GameSystemInventoryPolicy } from '../inventory'

export type InventoryStackCandidate = {
  id: string
  data: unknown
  state?: unknown
}

export function findStackableInventoryEntry(
  entries: readonly InventoryStackCandidate[],
  incomingData: unknown,
  policy: GameSystemInventoryPolicy | null,
  stack: boolean,
) {
  if (!stack || !policy) return null
  return entries.find((entry) => (
    entry.state == null && policy.canStack(entry.data, incomingData)
  )) ?? null
}
