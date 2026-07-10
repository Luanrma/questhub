import { buildInventoryAccess, canViewWallet } from '../domain/inventory-rules'
import type { WalletSnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { WalletRepository } from './ports/wallet-repository'

export type GetWalletInput = { campaignId: string; characterId: string; actorUserId: string }

export type GetWalletResult =
  | { status: 'ok'; wallet: WalletSnapshot; system: 'DND_5E' | 'PATHFINDER_2E' }
  | { status: 'not_found' }
  | { status: 'forbidden' }

export function createGetWalletUseCase(deps: { walletRepository: WalletRepository; campaignAccess: CampaignAccessPort }) {
  return async function getWallet(input: GetWalletInput): Promise<GetWalletResult> {
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.characterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, target)
    if (!canViewWallet(access)) return { status: 'forbidden' }

    const system = await deps.campaignAccess.loadCampaignSystem(input.campaignId)
    if (!system) return { status: 'not_found' }

    const wallet = await deps.walletRepository.getOrCreateForCampaignCharacter(input.campaignId, target.id)
    return { status: 'ok', wallet, system }
  }
}
