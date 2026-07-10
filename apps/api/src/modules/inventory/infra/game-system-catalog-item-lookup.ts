import { findCampaignItem } from '../../game_systems/items/registry'
import { getGameSystemAdapter } from '../../game_systems/registry'
import type { CatalogItemLookupPort, CatalogItemSnapshot } from '../application/ports/catalog-item-lookup'

type CatalogItemSystemData = {
  sourcePack: string
  sourceId: string
  systemData: unknown
}

export const gameSystemCatalogItemLookup: CatalogItemLookupPort = {
  findItem(system, catalogItemId): CatalogItemSnapshot | null {
    const entry = findCampaignItem(system, catalogItemId)
    if (!entry) return null

    const inventoryAdapter = getGameSystemAdapter(system)?.inventory
    if (!inventoryAdapter) return null

    const raw = entry.systemData as Partial<CatalogItemSystemData>
    const normalized = inventoryAdapter.normalizeItemData({
      ...raw,
      name: entry.name,
      itemType: entry.itemType,
    })

    return {
      ...normalized,
      sourcePack: raw.sourcePack ?? entry.source?.pack ?? catalogItemId,
      sourceId: raw.sourceId ?? entry.source?.id ?? catalogItemId,
    }
  },
}
