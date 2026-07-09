import { buildInventoryAccess, canViewLedger } from '../domain/inventory-rules'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryLedgerEntryView, InventoryRepository } from './ports/inventory-repository'

const DEFAULT_LIMIT = 20
const MAX_LIMIT = 100

export type GetInventoryLedgerInput = {
  campaignId: string
  characterId: string
  actorUserId: string
  page?: number
  limit?: number
}

export type GetInventoryLedgerResult =
  | { status: 'ok'; entries: InventoryLedgerEntryView[]; total: number; page: number; limit: number }
  | { status: 'not_found' }
  | { status: 'forbidden' }

export function createGetInventoryLedgerUseCase(deps: {
  inventoryRepository: InventoryRepository
  campaignAccess: CampaignAccessPort
}) {
  return async function getInventoryLedger(input: GetInventoryLedgerInput): Promise<GetInventoryLedgerResult> {
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.characterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!canViewLedger(access)) return { status: 'forbidden' }

    const page = Math.max(1, input.page ?? 1)
    const limit = Math.min(MAX_LIMIT, Math.max(1, input.limit ?? DEFAULT_LIMIT))

    const inventory = await deps.inventoryRepository.getOrCreateForCampaignCharacter(input.campaignId, target.id)
    const { entries, total } = await deps.inventoryRepository.listLedger(inventory.id, page, limit)

    return { status: 'ok', entries, total, page, limit }
  }
}
