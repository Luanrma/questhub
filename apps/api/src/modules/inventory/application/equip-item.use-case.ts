import { getGameSystemAdapter } from '../../game_systems/registry'
import { buildInventoryAccess } from '../domain/inventory-rules'
import type { InventorySnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { InventoryRepository } from './ports/inventory-repository'

export type EquipItemInput = { campaignId: string; inventoryItemId: string; slot: string; actorUserId: string }

export type EquipItemUseCaseResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'item_belongs_to_another_character' }
  | { status: 'already_equipped' }
  | { status: 'exclusive_slot_occupied' }
  | { status: 'invalid_payload' }

export function createEquipItemUseCase(deps: {
  inventoryRepository: InventoryRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function equipItem(input: EquipItemInput): Promise<EquipItemUseCaseResult> {
    const item = await deps.inventoryRepository.findInventoryItemById(input.inventoryItemId)
    if (!item || item.campaignId !== input.campaignId) return { status: 'not_found' }

    const target = await deps.campaignAccess.loadCampaignCharacterById(item.campaignCharacterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!isMasterActive && !access.isOwnerActive) return { status: 'item_belongs_to_another_character' }

    const system = await deps.campaignAccess.loadCampaignSystem(input.campaignId)
    const inventoryAdapter = system ? getGameSystemAdapter(system)?.inventory : undefined
    if (!inventoryAdapter) return { status: 'invalid_payload' }

    if (item.state === 'EQUIPPED') return { status: 'already_equipped' }
    if (!inventoryAdapter.isKnownSlot(input.slot)) return { status: 'invalid_payload' }

    const exclusiveSlotKey = inventoryAdapter.toExclusiveSlotKey(input.slot)

    const result = await deps.inventoryRepository.equipItem({
      inventoryItemId: input.inventoryItemId,
      slot: input.slot,
      exclusiveSlotKey,
      actorUserId: input.actorUserId,
      actorCharacterId: null,
    })

    if (result.status !== 'ok') return { status: result.status }

    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: target.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      inventoryId: result.inventory.id,
      reason: 'ITEM_EQUIPPED',
      changedItemIds: [input.inventoryItemId],
    })

    return { status: 'ok', inventory: result.inventory }
  }
}
