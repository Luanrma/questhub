import type { GameSystemItemAdapter, GameSystemItemListOptions } from './models'
import { pathfinder2eItemAdapter } from '../pathfinder_2e/items'

const itemAdapters = new Map<string, GameSystemItemAdapter>([[pathfinder2eItemAdapter.system, pathfinder2eItemAdapter]])

export function getItemAdapter(system: string) {
  return itemAdapters.get(system)
}

export function listCampaignItems(system: string, options?: GameSystemItemListOptions) {
  const adapter = getItemAdapter(system)
  if (!adapter) return null

  return adapter.listEntries(options)
}

export function countCampaignItems(system: string, options?: Pick<GameSystemItemListOptions, 'search' | 'filters'>) {
  const adapter = getItemAdapter(system)
  if (!adapter) return null

  return adapter.countEntries(options)
}

export function findCampaignItem(system: string, itemId: string) {
  const adapter = getItemAdapter(system)
  if (!adapter) return null

  if (adapter.findEntry) return adapter.findEntry(itemId)

  const total = adapter.countEntries()
  return adapter.listEntries({ limit: total }).find((entry) => entry.id === itemId) ?? null
}
