import { getGameSystemAdapter } from '../../game_systems/registry'
import type { ArmorClassEquipmentResolution } from '../../game_systems/ports'
import { buildInventoryAccess, canViewInventory } from '../domain/inventory-rules'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryRepository } from './ports/inventory-repository'

export type GetArmorClassEquipmentInput = {
  campaignId: string
  characterId: string
  actorUserId: string
}

export type GetArmorClassEquipmentResult =
  | ({ status: 'ok'; system: string } & ArmorClassEquipmentResolution)
  | { status: 'not_found' }
  | { status: 'forbidden' }

export function createGetArmorClassEquipmentUseCase(deps: {
  inventoryRepository: InventoryRepository
  campaignAccess: CampaignAccessPort
}) {
  return async function getArmorClassEquipment(input: GetArmorClassEquipmentInput): Promise<GetArmorClassEquipmentResult> {
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.characterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!canViewInventory(access)) return { status: 'forbidden' }

    const system = await deps.campaignAccess.loadCampaignSystem(input.campaignId)
    if (!system) return { status: 'not_found' }

    const inventory = await deps.inventoryRepository.getOrCreateForCampaignCharacter(input.campaignId, target.id)
    const adapter = getGameSystemAdapter(system)?.inventory

    const resolved = adapter?.resolveArmorClassEquipment?.({
      items: inventory.items.flatMap((item) =>
        item.equipped
          ? [
              {
                equippedItemId: item.equipped.id,
                inventoryItemId: item.id,
                equipmentOptionKey: item.equipped.equipmentOptionKey,
                resourceLocks: item.equipped.resourceLocks,
                systemData: item.equipped.systemData,
                item: item.itemDefinition,
              },
            ]
          : [],
      ),
    })

    return { status: 'ok', system, armor: resolved?.armor ?? null, shield: resolved?.shield ?? null }
  }
}
