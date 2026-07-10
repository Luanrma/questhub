import { findCampaignItemBySource } from '../../game_systems/items/registry'
import type { CatalogSheetLookupPort } from '../application/ports/catalog-sheet-lookup'

export const gameSystemCatalogSheetLookup: CatalogSheetLookupPort = {
  findSheetForItemDefinition(itemDefinition) {
    if (itemDefinition.source !== 'SYSTEM_CATALOG' || !itemDefinition.sourcePack || !itemDefinition.sourceId) return null

    return findCampaignItemBySource(itemDefinition.system, itemDefinition.sourcePack, itemDefinition.sourceId)
  },
}
