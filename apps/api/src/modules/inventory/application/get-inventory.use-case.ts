import { buildInventoryAccess, canViewInventory } from '../domain/inventory-rules'
import type { InventorySnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryRepository } from './ports/inventory-repository'

export type GetInventoryInput = { campaignId: string; characterId: string; actorUserId: string }

export type GetInventoryResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'forbidden' }

export function createGetInventoryUseCase(deps: { inventoryRepository: InventoryRepository; campaignAccess: CampaignAccessPort }) {
  return async function getInventory(input: GetInventoryInput): Promise<GetInventoryResult> {
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.characterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!canViewInventory(access)) return { status: 'forbidden' }

    const inventory = await deps.inventoryRepository.getOrCreateForCampaignCharacter(input.campaignId, target.id)
    return { status: 'ok', inventory }
  }
}
