import { buildInventoryAccess } from '../domain/inventory-rules'
import type { InventorySnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { InventoryRepository } from './ports/inventory-repository'

export type ToggleShieldRaisedInput = {
  campaignId: string
  equippedItemId: string
  raised: boolean
  actorUserId: string
}

export type ToggleShieldRaisedResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'item_belongs_to_another_character' }
  | { status: 'not_a_shield' }

/**
 * Alterna o estado "escudo erguido" de um item equipado, usado pelo calculo
 * de Armor Class (ver .ai/game_systems/pathfinder_2e/armor_class/specs.md
 * secao 5). Persistido em EquippedItem.systemData.shieldRaised — opaco para
 * o core, interpretado apenas pelo adapter de inventario do sistema.
 */
export function createToggleShieldRaisedUseCase(deps: {
  inventoryRepository: InventoryRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function toggleShieldRaised(input: ToggleShieldRaisedInput): Promise<ToggleShieldRaisedResult> {
    const equipped = await deps.inventoryRepository.findEquippedItemById(input.equippedItemId)
    if (!equipped || equipped.campaignId !== input.campaignId) return { status: 'not_found' }

    const target = await deps.campaignAccess.loadCampaignCharacterById(equipped.campaignCharacterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!isMasterActive && !access.isOwnerActive) return { status: 'item_belongs_to_another_character' }

    const inventoryItem = await deps.inventoryRepository.findInventoryItemById(equipped.inventoryItemId)
    if (!inventoryItem) return { status: 'not_found' }

    const isShield =
      inventoryItem.itemDefinition.classification?.role === 'shield' || inventoryItem.itemDefinition.itemType === 'shield'
    if (!isShield) return { status: 'not_a_shield' }

    const currentSystemData =
      equipped.systemData && typeof equipped.systemData === 'object' ? (equipped.systemData as Record<string, unknown>) : {}
    const nextSystemData = { ...currentSystemData, shieldRaised: input.raised }

    const result = await deps.inventoryRepository.updateEquippedItemSystemData(input.equippedItemId, nextSystemData)
    if (result.status === 'not_found') return { status: 'not_found' }

    deps.eventBus.emitInventoryChanged({
      campaignId: input.campaignId,
      characterId: target.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      inventoryId: result.inventory.id,
      reason: 'ITEM_UPDATED',
      changedItemIds: [equipped.inventoryItemId],
    })

    return { status: 'ok', inventory: result.inventory }
  }
}
