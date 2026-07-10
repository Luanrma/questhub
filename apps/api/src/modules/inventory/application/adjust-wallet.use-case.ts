import type { WalletAdjustReason, WalletLedgerType, WalletSnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus, WalletChangedReason } from './ports/inventory-event-bus'
import type { WalletRepository } from './ports/wallet-repository'

const REASON_TO_LEDGER_TYPE: Record<WalletAdjustReason, WalletLedgerType> = {
  LOOT: 'LOOT',
  REWARD: 'REWARD',
  PURCHASE: 'PURCHASE',
  SALE: 'SALE',
  CORRECTION: 'CORRECTION',
  ADJUSTMENT: 'ADJUSTMENT',
}

const REASON_TO_EVENT_REASON: Record<WalletAdjustReason, WalletChangedReason> = {
  LOOT: 'BALANCE_ADJUSTED',
  REWARD: 'REWARD',
  PURCHASE: 'PURCHASE',
  SALE: 'SALE',
  CORRECTION: 'BALANCE_ADJUSTED',
  ADJUSTMENT: 'BALANCE_ADJUSTED',
}

export type AdjustWalletInput = {
  campaignId: string
  characterId: string
  deltaMinorUnit: number
  reason: WalletAdjustReason
  note?: string
  actorUserId: string
}

export type AdjustWalletUseCaseResult =
  | { status: 'ok'; wallet: WalletSnapshot; system: 'DND_5E' | 'PATHFINDER_2E' }
  | { status: 'not_found' }
  | { status: 'forbidden' }
  | { status: 'negative_balance_not_allowed' }

export function createAdjustWalletUseCase(deps: {
  walletRepository: WalletRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function adjustWallet(input: AdjustWalletInput): Promise<AdjustWalletUseCaseResult> {
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.characterId)
    if (!target) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    if (!isMasterActive) return { status: 'forbidden' }

    const system = await deps.campaignAccess.loadCampaignSystem(input.campaignId)
    if (!system) return { status: 'not_found' }

    const result = await deps.walletRepository.adjustBalance({
      campaignId: input.campaignId,
      campaignCharacterId: target.id,
      deltaMinorUnit: input.deltaMinorUnit,
      ledgerType: REASON_TO_LEDGER_TYPE[input.reason],
      note: input.note,
      actorUserId: input.actorUserId,
      actorCharacterId: null,
    })

    if (result.status === 'negative_balance') return { status: 'negative_balance_not_allowed' }

    deps.eventBus.emitWalletChanged({
      campaignId: input.campaignId,
      characterId: target.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      walletId: result.wallet.id,
      reason: REASON_TO_EVENT_REASON[input.reason],
      balanceMinorUnit: result.wallet.balanceMinorUnit,
    })

    return { status: 'ok', wallet: result.wallet, system }
  }
}
