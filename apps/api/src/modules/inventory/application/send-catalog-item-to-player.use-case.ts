import { assertQuantityPositive } from '../domain/inventory-rules'
import type { InventorySnapshot, ItemDefinitionSnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { CatalogItemLookupPort } from './ports/catalog-item-lookup'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { InventoryRepository } from './ports/inventory-repository'

export type SendCatalogItemToPlayerInput = {
  campaignId: string
  actorUserId: string
  catalogItemId: string
  targetCharacterId: string
  quantity?: number
}

export type SendCatalogItemToPlayerResult =
  | { status: 'ok'; inventory: InventorySnapshot; itemDefinition: ItemDefinitionSnapshot }
  | { status: 'forbidden' }
  | { status: 'target_not_found' }
  | { status: 'target_not_active_player' }
  | { status: 'catalog_item_not_found' }
  | { status: 'invalid_quantity' }

export function createSendCatalogItemToPlayerUseCase(deps: {
  inventoryRepository: InventoryRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
  catalogItemLookup: CatalogItemLookupPort
}) {
  return async function sendCatalogItemToPlayer(
    input: SendCatalogItemToPlayerInput,
  ): Promise<SendCatalogItemToPlayerResult> {
    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    if (!isMasterActive) return { status: 'forbidden' }

    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.targetCharacterId)
    if (!target) return { status: 'target_not_found' }
    if (target.role !== 'PLAYER' || target.status !== 'ACTIVE') return { status: 'target_not_active_player' }

    const quantity = input.quantity ?? 1
    if (!assertQuantityPositive(quantity)) return { status: 'invalid_quantity' }

    const system = await deps.campaignAccess.loadCampaignSystem(input.campaignId)
    if (!system) return { status: 'catalog_item_not_found' }

    const catalogItem = deps.catalogItemLookup.findItem(system, input.catalogItemId)
    if (!catalogItem) return { status: 'catalog_item_not_found' }

    const itemDefinition = await deps.inventoryRepository.findOrCreateItemDefinitionFromCatalog({
      campaignId: input.campaignId,
      system,
      sourcePack: catalogItem.sourcePack,
      sourceId: catalogItem.sourceId,
      name: catalogItem.name,
      itemType: catalogItem.itemType,
      rarity: catalogItem.rarity,
      level: catalogItem.level,
      traits: catalogItem.traits,
      bulk: catalogItem.bulk,
      priceMinorUnit: catalogItem.priceMinorUnit,
      equipSlot: catalogItem.equipSlot,
      isStackable: catalogItem.isStackable,
      systemData: catalogItem.systemData,
      schemaVersion: catalogItem.schemaVersion,
      classification: catalogItem.classification,
      usage: catalogItem.usage,
      equipment: catalogItem.equipment,
      createdByUserId: input.actorUserId,
    })

    const result = await deps.inventoryRepository.addItem({
      campaignId: input.campaignId,
      campaignCharacterId: target.id,
      itemDefinitionId: itemDefinition.id,
      quantity,
      customName: null,
      notes: null,
      actorUserId: input.actorUserId,
      actorCharacterId: null,
    })

    if (result.status === 'item_definition_not_found') return { status: 'catalog_item_not_found' }

    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: input.targetCharacterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: false,
      inventoryId: result.inventory.id,
      reason: 'ITEM_ADDED',
      changedItemIds: [],
    })

    return { status: 'ok', inventory: result.inventory, itemDefinition }
  }
}
