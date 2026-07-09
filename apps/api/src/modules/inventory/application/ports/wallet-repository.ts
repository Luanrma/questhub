import type { WalletLedgerType, WalletSnapshot } from '../../domain/types'

export type AdjustWalletInput = {
  campaignId: string
  campaignCharacterId: string
  deltaMinorUnit: number
  ledgerType: WalletLedgerType
  note?: string | null
  actorUserId: string
  actorCharacterId: string | null
}

export type AdjustWalletResult = { status: 'ok'; wallet: WalletSnapshot } | { status: 'negative_balance' }

export type TransferCurrencyInput = {
  fromCampaignCharacterId: string
  toCampaignCharacterId: string
  amountMinorUnit: number
  note?: string | null
  actorUserId: string
  actorCharacterId: string | null
  operationId: string
}

export type TransferCurrencyResult =
  | { status: 'ok'; sourceWallet: WalletSnapshot; targetWallet: WalletSnapshot }
  | { status: 'insufficient_funds' }

export type WalletLedgerEntryView = {
  id: string
  type: WalletLedgerType
  deltaMinorUnit: number
  balanceBeforeMinorUnit: number
  balanceAfterMinorUnit: number
  note: string | null
  actorUserId: string | null
  actorCharacterId: string | null
  createdAt: Date
}

export interface WalletRepository {
  getOrCreateForCampaignCharacter(campaignId: string, campaignCharacterId: string): Promise<WalletSnapshot>
  adjustBalance(input: AdjustWalletInput): Promise<AdjustWalletResult>
  transferCurrency(input: TransferCurrencyInput): Promise<TransferCurrencyResult>
  listLedger(walletId: string, page: number, limit: number): Promise<{ entries: WalletLedgerEntryView[]; total: number }>
}
