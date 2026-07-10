import crypto from 'node:crypto'
import { assertQuantityPositive, buildInventoryAccess } from '../domain/inventory-rules'
import type { InventorySnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { InventoryRepository } from './ports/inventory-repository'

export type TransferItemInput = {
  campaignId: string
  inventoryItemId: string
  toCharacterId: string
  quantity: number
  note?: string
  actorUserId: string
}

export type TransferItemUseCaseResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'item_belongs_to_another_character' }
  | { status: 'invalid_quantity' }
  | { status: 'cross_campaign_transfer_not_allowed' }
  | { status: 'item_already_equipped' }
  | { status: 'insufficient_quantity' }

export function createTransferItemUseCase(deps: {
  inventoryRepository: InventoryRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function transferItem(input: TransferItemInput): Promise<TransferItemUseCaseResult> {
    if (!assertQuantityPositive(input.quantity)) return { status: 'invalid_quantity' }

    const item = await deps.inventoryRepository.findInventoryItemById(input.inventoryItemId)
    if (!item || item.campaignId !== input.campaignId) return { status: 'not_found' }

    const source = await deps.campaignAccess.loadCampaignCharacterById(item.campaignCharacterId)
    if (!source) return { status: 'not_found' }

    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.toCharacterId)
    if (!target) return { status: 'not_found' }
    if (target.campaignId !== source.campaignId) return { status: 'cross_campaign_transfer_not_allowed' }
    if (target.status !== 'ACTIVE') return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, source)
    if (!isMasterActive && !access.isOwnerActive) return { status: 'item_belongs_to_another_character' }

    const operationId = crypto.randomUUID()
    const result = await deps.inventoryRepository.transferItem({
      inventoryItemId: input.inventoryItemId,
      toCampaignCharacterId: target.id,
      quantity: input.quantity,
      note: input.note,
      actorUserId: input.actorUserId,
      actorCharacterId: null,
      operationId,
    })

    if (result.status === 'item_equipped') return { status: 'item_already_equipped' }
    if (result.status !== 'ok') return { status: result.status }

    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: source.characterId,
      campaignCharacterId: source.id,
      ownerUserId: source.userId,
      isNpc: source.role === 'NPC',
      inventoryId: result.sourceInventory.id,
      reason: 'ITEM_TRANSFERRED',
      changedItemIds: [input.inventoryItemId],
    })
    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: target.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      inventoryId: result.targetInventory.id,
      reason: 'ITEM_TRANSFERRED',
      changedItemIds: [],
    })
    deps.eventBus.emitItemTransferred({
      campaignId: input.campaignId,
      fromCharacterId: source.characterId,
      fromCampaignCharacterId: source.id,
      fromOwnerUserId: source.userId,
      toCharacterId: target.characterId,
      toCampaignCharacterId: target.id,
      toOwnerUserId: target.userId,
      inventoryItemId: input.inventoryItemId,
    })

    return { status: 'ok', inventory: result.sourceInventory }
  }
}
