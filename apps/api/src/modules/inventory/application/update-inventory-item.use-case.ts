import {
  assertQuantityPositive,
  buildInventoryAccess,
  canUpdateItemMetadata,
  canUpdateItemQuantityOrState,
  isValidPatchStateTransition,
  ledgerTypeForPatchStateChange,
} from '../domain/inventory-rules'
import type { InventoryItemState, InventorySnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { InventoryRepository } from './ports/inventory-repository'

export type UpdateInventoryItemInput = {
  campaignId: string
  inventoryItemId: string
  quantity?: number
  customName?: string | null
  notes?: string | null
  state?: InventoryItemState
  actorUserId: string
}

export type UpdateInventoryItemResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'forbidden' }
  | { status: 'invalid_quantity' }
  | { status: 'invalid_payload' }

export function createUpdateInventoryItemUseCase(deps: {
  inventoryRepository: InventoryRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function updateInventoryItem(input: UpdateInventoryItemInput): Promise<UpdateInventoryItemResult> {
    const item = await deps.inventoryRepository.findInventoryItemById(input.inventoryItemId)
    if (!item || item.campaignId !== input.campaignId) return { status: 'not_found' }

    const target = await deps.campaignAccess.loadCampaignCharacterById(item.campaignCharacterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)

    const wantsQuantityOrStateChange = input.quantity !== undefined || input.state !== undefined
    if (wantsQuantityOrStateChange) {
      if (!canUpdateItemQuantityOrState(access)) return { status: 'forbidden' }
    } else if (!canUpdateItemMetadata(access)) {
      return { status: 'forbidden' }
    }

    if (input.quantity !== undefined && !assertQuantityPositive(input.quantity)) return { status: 'invalid_quantity' }

    let ledgerType: 'ADJUST_QUANTITY' | 'CONSUME' | 'REMOVE' | undefined
    if (input.state !== undefined) {
      if (!isValidPatchStateTransition(item.state, input.state)) return { status: 'invalid_payload' }
      ledgerType = ledgerTypeForPatchStateChange(input.state)
    }

    const result = await deps.inventoryRepository.updateItem({
      inventoryItemId: input.inventoryItemId,
      quantity: input.quantity,
      customName: input.customName,
      notes: input.notes,
      targetState: input.state,
      ledgerType,
      actorUserId: input.actorUserId,
      actorCharacterId: null,
    })

    if (result.status === 'not_found') return { status: 'not_found' }

    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: target.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      inventoryId: result.inventory.id,
      reason: 'ITEM_UPDATED',
      changedItemIds: [input.inventoryItemId],
    })

    return { status: 'ok', inventory: result.inventory }
  }
}
