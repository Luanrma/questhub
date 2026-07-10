import crypto from 'node:crypto'
import { buildInventoryAccess } from '../domain/inventory-rules'
import type { WalletSnapshot } from '../domain/types'
import type { CampaignAccessPort } from './ports/campaign-access'
import type { InventoryEventBus } from './ports/inventory-event-bus'
import type { WalletRepository } from './ports/wallet-repository'

export type TransferCurrencyInput = {
  campaignId: string
  fromCharacterId: string
  toCharacterId: string
  amountMinorUnit: number
  note?: string
  actorUserId: string
}

export type TransferCurrencyUseCaseResult =
  | { status: 'ok'; wallet: WalletSnapshot; system: 'DND_5E' | 'PATHFINDER_2E' }
  | { status: 'not_found' }
  | { status: 'forbidden' }
  | { status: 'invalid_currency_amount' }
  | { status: 'cross_campaign_transfer_not_allowed' }
  | { status: 'insufficient_funds' }

export function createTransferCurrencyUseCase(deps: {
  walletRepository: WalletRepository
  eventBus: InventoryEventBus
  campaignAccess: CampaignAccessPort
}) {
  return async function transferCurrency(input: TransferCurrencyInput): Promise<TransferCurrencyUseCaseResult> {
    if (!Number.isInteger(input.amountMinorUnit) || input.amountMinorUnit <= 0) {
      return { status: 'invalid_currency_amount' }
    }

    const source = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.fromCharacterId)
    if (!source) return { status: 'not_found' }
    const target = await deps.campaignAccess.loadCampaignCharacterByCharacterId(input.campaignId, input.toCharacterId)
    if (!target) return { status: 'not_found' }
    if (source.campaignId !== target.campaignId) return { status: 'cross_campaign_transfer_not_allowed' }
    if (target.status !== 'ACTIVE') return { status: 'not_found' }
    const system = await deps.campaignAccess.loadCampaignSystem(input.campaignId)
    if (!system) return { status: 'not_found' }

    const isMasterActive = await deps.campaignAccess.isActiveMaster(input.campaignId, input.actorUserId)
    const access = buildInventoryAccess(input.actorUserId, isMasterActive, source)
    if (!isMasterActive && !access.isOwnerActive) return { status: 'forbidden' }

    const operationId = crypto.randomUUID()
    const result = await deps.walletRepository.transferCurrency({
      fromCampaignCharacterId: source.id,
      toCampaignCharacterId: target.id,
      amountMinorUnit: input.amountMinorUnit,
      note: input.note,
      actorUserId: input.actorUserId,
      actorCharacterId: null,
      operationId,
    })

    if (result.status === 'insufficient_funds') return { status: 'insufficient_funds' }

    deps.eventBus.emitWalletChanged({
      campaignId: input.campaignId,
      characterId: source.characterId,
      campaignCharacterId: source.id,
      ownerUserId: source.userId,
      isNpc: source.role === 'NPC',
      walletId: result.sourceWallet.id,
      reason: 'CURRENCY_TRANSFERRED',
      balanceMinorUnit: result.sourceWallet.balanceMinorUnit,
    })
    deps.eventBus.emitWalletChanged({
      campaignId: input.campaignId,
      characterId: target.characterId,
      campaignCharacterId: target.id,
      ownerUserId: target.userId,
      isNpc: target.role === 'NPC',
      walletId: result.targetWallet.id,
      reason: 'CURRENCY_TRANSFERRED',
      balanceMinorUnit: result.targetWallet.balanceMinorUnit,
    })
    deps.eventBus.emitCurrencyTransferred({
      campaignId: input.campaignId,
      fromCharacterId: source.characterId,
      fromCampaignCharacterId: source.id,
      fromOwnerUserId: source.userId,
      toCharacterId: target.characterId,
      toCampaignCharacterId: target.id,
      toOwnerUserId: target.userId,
      amountMinorUnit: input.amountMinorUnit,
    })

    return { status: 'ok', wallet: result.sourceWallet, system }
  }
}
