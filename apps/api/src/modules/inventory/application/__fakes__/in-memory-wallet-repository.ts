import type { WalletSnapshot } from '../../domain/types'
import type {
  AdjustWalletInput,
  AdjustWalletResult,
  TransferCurrencyInput,
  TransferCurrencyResult,
  WalletRepository,
} from '../ports/wallet-repository'

type FakeWallet = { id: string; campaignId: string; campaignCharacterId: string; balanceMinorUnit: number }

let counter = 0
function nextId(prefix: string) {
  counter += 1
  return `${prefix}-${counter}`
}

export function createInMemoryWalletRepository() {
  const wallets: FakeWallet[] = []

  function toSnapshot(wallet: FakeWallet): WalletSnapshot {
    return {
      id: wallet.id,
      campaignId: wallet.campaignId,
      characterId: wallet.campaignCharacterId,
      campaignCharacterId: wallet.campaignCharacterId,
      balanceMinorUnit: wallet.balanceMinorUnit,
    }
  }

  function seedWallet(input: { campaignId: string; campaignCharacterId: string; balanceMinorUnit?: number }) {
    const wallet: FakeWallet = {
      id: nextId('wallet'),
      campaignId: input.campaignId,
      campaignCharacterId: input.campaignCharacterId,
      balanceMinorUnit: input.balanceMinorUnit ?? 0,
    }
    wallets.push(wallet)
    return wallet
  }

  const repository: WalletRepository = {
    async getOrCreateForCampaignCharacter(campaignId, campaignCharacterId) {
      let wallet = wallets.find((w) => w.campaignCharacterId === campaignCharacterId)
      if (!wallet) wallet = seedWallet({ campaignId, campaignCharacterId })
      return toSnapshot(wallet)
    },

    async adjustBalance(input: AdjustWalletInput): Promise<AdjustWalletResult> {
      let wallet = wallets.find((w) => w.campaignCharacterId === input.campaignCharacterId)
      if (!wallet) wallet = seedWallet({ campaignId: input.campaignId, campaignCharacterId: input.campaignCharacterId })

      const balanceAfter = wallet.balanceMinorUnit + input.deltaMinorUnit
      if (balanceAfter < 0) return { status: 'negative_balance' }

      wallet.balanceMinorUnit = balanceAfter
      return { status: 'ok', wallet: toSnapshot(wallet) }
    },

    async transferCurrency(input: TransferCurrencyInput): Promise<TransferCurrencyResult> {
      const source = wallets.find((w) => w.campaignCharacterId === input.fromCampaignCharacterId)
      if (!source || source.balanceMinorUnit < input.amountMinorUnit) return { status: 'insufficient_funds' }

      let target = wallets.find((w) => w.campaignCharacterId === input.toCampaignCharacterId)
      if (!target) target = seedWallet({ campaignId: source.campaignId, campaignCharacterId: input.toCampaignCharacterId })

      source.balanceMinorUnit -= input.amountMinorUnit
      target.balanceMinorUnit += input.amountMinorUnit

      return { status: 'ok', sourceWallet: toSnapshot(source), targetWallet: toSnapshot(target) }
    },

    async listLedger() {
      return { entries: [], total: 0 }
    },
  }

  return { repository, seedWallet }
}
