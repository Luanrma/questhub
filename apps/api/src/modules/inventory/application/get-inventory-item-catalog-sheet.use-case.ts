import { buildInventoryAccess, canViewInventory } from '../domain/inventory-rules'
import type { GameSystemItemEntry } from '../../game_systems/items/models'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { CatalogSheetLookupPort } from './ports/catalog-sheet-lookup'
import type { InventoryRepository } from './ports/inventory-repository'

export type GetInventoryItemCatalogSheetInput = {
  campaignId: string
  inventoryItemId: string
  actorUserId: string
}

export type GetInventoryItemCatalogSheetResult =
  | { status: 'ok'; entry: GameSystemItemEntry }
  | { status: 'not_found' }
  | { status: 'forbidden' }
  | { status: 'not_from_catalog' }

export function createGetInventoryItemCatalogSheetUseCase(deps: {
  inventoryRepository: InventoryRepository
  campaignAccess: CampaignAccessPort
  catalogSheetLookup: CatalogSheetLookupPort
}) {
  return async function getInventoryItemCatalogSheet(
    input: GetInventoryItemCatalogSheetInput,
  ): Promise<GetInventoryItemCatalogSheetResult> {
    const item = await deps.inventoryRepository.findInventoryItemById(input.inventoryItemId)
    if (!item || item.campaignId !== input.campaignId) return { status: 'not_found' }

    const target = await deps.campaignAccess.loadCampaignCharacterById(item.campaignCharacterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!canViewInventory(access)) return { status: 'forbidden' }

    const entry = deps.catalogSheetLookup.findSheetForItemDefinition(item.itemDefinition)
    if (!entry) return { status: 'not_from_catalog' }

    return { status: 'ok', entry }
  }
}
