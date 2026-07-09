import { assertQuantityPositive, buildInventoryAccess, canAddItem } from '../domain/inventory-rules'
import type { InventorySnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { InventoryRepository } from './ports/inventory-repository'

export type AddItemToInventoryInput = {
  campaignId: string
  characterId: string
  itemDefinitionId: string
  quantity?: number
  customName?: string
  notes?: string
  actorUserId: string
}

export type AddItemToInventoryResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'forbidden' }
  | { status: 'invalid_quantity' }
  | { status: 'item_definition_not_found' }

export function createAddItemToInventoryUseCase(deps: {
  inventoryRepository: InventoryRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function addItemToInventory(input: AddItemToInventoryInput): Promise<AddItemToInventoryResult> {
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.characterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!canAddItem(access)) return { status: 'forbidden' }

    const quantity = input.quantity ?? 1
    if (!assertQuantityPositive(quantity)) return { status: 'invalid_quantity' }

    const result = await deps.inventoryRepository.addItem({
      campaignId: input.campaignId,
      campaignCharacterId: target.id,
      itemDefinitionId: input.itemDefinitionId,
      quantity,
      customName: input.customName ?? null,
      notes: input.notes ?? null,
      actorUserId: input.actorUserId,
      actorCharacterId: null,
    })

    if (result.status === 'item_definition_not_found') return { status: 'item_definition_not_found' }

    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: input.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      inventoryId: result.inventory.id,
      reason: 'ITEM_ADDED',
      changedItemIds: [],
    })

    return { status: 'ok', inventory: result.inventory }
  }
}
