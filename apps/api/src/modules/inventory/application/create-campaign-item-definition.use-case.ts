import { canCreateItemDefinition } from '../domain/inventory-rules'
import type { ItemDefinitionSnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryRepository } from './ports/inventory-repository'

export type CreateCampaignItemDefinitionInput = {
  campaignId: string
  actorUserId: string
  name: string
  itemType: string
  rarity?: string
  level?: number
  traits?: string[]
  bulk?: string
  priceMinorUnit?: number
  equipSlot?: string
  isStackable?: boolean
  systemData?: unknown
}

export type CreateCampaignItemDefinitionResult =
  | { status: 'ok'; itemDefinition: ItemDefinitionSnapshot }
  | { status: 'forbidden' }
  | { status: 'not_found' }

export function createCreateCampaignItemDefinitionUseCase(deps: {
  inventoryRepository: InventoryRepository
  campaignAccess: CampaignAccessPort
}) {
  return async function createCampaignItemDefinition(
    input: CreateCampaignItemDefinitionInput,
  ): Promise<CreateCampaignItemDefinitionResult> {
    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    if (!canCreateItemDefinition({ isMasterActive, isOwnerActive: false })) return { status: 'forbidden' }

    const system = await deps.campaignAccess.loadCampaignSystem(input.campaignId)
    if (!system) return { status: 'not_found' }

    const itemDefinition = await deps.inventoryRepository.createItemDefinition({
      campaignId: input.campaignId,
      system,
      name: input.name,
      itemType: input.itemType,
      rarity: input.rarity,
      level: input.level,
      traits: input.traits,
      bulk: input.bulk,
      priceMinorUnit: input.priceMinorUnit,
      equipSlot: input.equipSlot,
      isStackable: input.isStackable,
      systemData: input.systemData,
      createdByUserId: input.actorUserId,
    })

    return { status: 'ok', itemDefinition }
  }
}
