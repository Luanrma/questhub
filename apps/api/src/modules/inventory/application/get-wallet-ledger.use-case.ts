import { buildInventoryAccess, canViewLedger } from '../domain/inventory-rules'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { WalletLedgerEntryView, WalletRepository } from './ports/wallet-repository'

const DEFAULT_LIMIT = 20
const MAX_LIMIT = 100

export type GetWalletLedgerInput = {
  campaignId: string
  characterId: string
  actorUserId: string
  page?: number
  limit?: number
}

export type GetWalletLedgerResult =
  | { status: 'ok'; entries: WalletLedgerEntryView[]; total: number; page: number; limit: number }
  | { status: 'not_found' }
  | { status: 'forbidden' }

export function createGetWalletLedgerUseCase(deps: {
  walletRepository: WalletRepository
  campaignAccess: CampaignAccessPort
}) {
  return async function getWalletLedger(input: GetWalletLedgerInput): Promise<GetWalletLedgerResult> {
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.characterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!canViewLedger(access)) return { status: 'forbidden' }

    const page = Math.max(1, input.page ?? 1)
    const limit = Math.min(MAX_LIMIT, Math.max(1, input.limit ?? DEFAULT_LIMIT))

    const wallet = await deps.walletRepository.getOrCreateForCampaignCharacter(input.campaignId, target.id)
    const { entries, total } = await deps.walletRepository.listLedger(wallet.id, page, limit)

    return { status: 'ok', entries, total, page, limit }
  }
}
