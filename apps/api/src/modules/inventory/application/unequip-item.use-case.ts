import { buildInventoryAccess } from '../domain/inventory-rules'
import type { InventorySnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { InventoryRepository } from './ports/inventory-repository'

export type UnequipItemInput = { campaignId: string; equippedItemId: string; actorUserId: string }

export type UnequipItemUseCaseResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'item_belongs_to_another_character' }

export function createUnequipItemUseCase(deps: {
  inventoryRepository: InventoryRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function unequipItem(input: UnequipItemInput): Promise<UnequipItemUseCaseResult> {
    const equipped = await deps.inventoryRepository.findEquippedItemById(input.equippedItemId)
    if (!equipped || equipped.campaignId !== input.campaignId) return { status: 'not_found' }

    const target = await deps.campaignAccess.loadCampaignCharacterById(equipped.campaignCharacterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!isMasterActive && !access.isOwnerActive) return { status: 'item_belongs_to_another_character' }

    const result = await deps.inventoryRepository.unequipItem(input.equippedItemId, input.actorUserId, null)
    if (result.status === 'not_found') return { status: 'not_found' }

    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: target.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      inventoryId: result.inventory.id,
      reason: 'ITEM_UNEQUIPPED',
      changedItemIds: [equipped.inventoryItemId],
    })

    return { status: 'ok', inventory: result.inventory }
  }
}
