export type InventoryChangedReason =
  | 'ITEM_ADDED'
  | 'ITEM_UPDATED'
  | 'ITEM_REMOVED'
  | 'ITEM_EQUIPPED'
  | 'ITEM_UNEQUIPPED'
  | 'ITEM_TRANSFERRED'

export type WalletChangedReason = 'BALANCE_ADJUSTED' | 'CURRENCY_TRANSFERRED' | 'PURCHASE' | 'SALE' | 'REWARD'

export type InventoryChangedEvent = {
  campaignId: string
  characterId: string
  campaignCharacterId: string
  ownerUserId: string
  isNpc: boolean
  inventoryId: string
  reason: InventoryChangedReason
  changedItemIds: string[]
}

export type WalletChangedEvent = {
  campaignId: string
  characterId: string
  campaignCharacterId: string
  ownerUserId: string
  isNpc: boolean
  walletId: string
  reason: WalletChangedReason
  balanceMinorUnit: number
}

export type InventoryItemTransferredEvent = {
  campaignId: string
  fromCharacterId: string
  fromCampaignCharacterId: string
  fromOwnerUserId: string
  toCharacterId: string
  toCampaignCharacterId: string
  toOwnerUserId: string
  inventoryItemId: string
}

export type WalletCurrencyTransferredEvent = {
  campaignId: string
  fromCharacterId: string
  fromCampaignCharacterId: string
  fromOwnerUserId: string
  toCharacterId: string
  toCampaignCharacterId: string
  toOwnerUserId: string
  amountMinorUnit: number
}

export interface InventoryEventBus {
  emitInventoryChanged(event: InventoryChangedEvent): void
  emitWalletChanged(event: WalletChangedEvent): void
  emitItemTransferred(event: InventoryItemTransferredEvent): void
  emitCurrencyTransferred(event: WalletCurrencyTransferredEvent): void
}
