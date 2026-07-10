export type WalletView = {
  id: string
  campaignId: string
  characterId: string
  campaignCharacterId: string
  balanceMinorUnit: number
  display: {
    system: string
    breakdown: Record<string, number>
    label: string
  }
}

export type InventoryItemDefinitionView = {
  id: string
  name: string
  system: 'PATHFINDER_2E' | 'DND_5E'
  source: 'CUSTOM' | 'SYSTEM_CATALOG' | 'IMPORTED'
  itemType: string
  rarity?: string | null
  level?: number | null
  traits: string[]
  bulk?: string | null
  priceMinorUnit?: number | null
  equipSlot?: string | null
  isStackable: boolean
}

export type EquipmentOptionView = {
  key: string
  label: string
  description?: string
  disabled?: boolean
  metadata?: unknown
}

export type EquipmentResourceLockView = {
  resource: string
  amount: number
  exclusive?: boolean
}

export type InventoryItemState = 'STORED' | 'EQUIPPED' | 'DROPPED' | 'CONSUMED' | 'DESTROYED' | 'TRANSFERRED'

export type EquippedItemView = {
  id: string
  inventoryItemId: string
  equipmentOptionKey: string
  resourceLocks: EquipmentResourceLockView[]
  systemData?: unknown
  quantity: number
}

export type EquippedGroupView = {
  id: string
  label: string
  items: EquippedItemView[]
  metadata?: unknown
}

export type InventoryItemView = {
  id: string
  itemDefinition: InventoryItemDefinitionView
  equipmentOptions?: EquipmentOptionView[]
  quantity: number
  state: InventoryItemState
  customName?: string | null
  notes?: string | null
  equipped?: EquippedItemView | null
}

export type InventoryView = {
  id: string
  campaignId: string
  characterId: string
  campaignCharacterId: string
  equipmentOptions?: EquipmentOptionView[]
  equippedGroups?: EquippedGroupView[]
  items: InventoryItemView[]
  equippedItems: EquippedItemView[]
}

export type WalletAdjustReason = 'LOOT' | 'REWARD' | 'PURCHASE' | 'SALE' | 'CORRECTION' | 'ADJUSTMENT'

export type InventoryChangedEvent = {
  campaignId: string
  characterId: string
  campaignCharacterId: string
  inventoryId: string
  reason: 'ITEM_ADDED' | 'ITEM_UPDATED' | 'ITEM_REMOVED' | 'ITEM_EQUIPPED' | 'ITEM_UNEQUIPPED' | 'ITEM_TRANSFERRED'
  changedItemIds: string[]
  occurredAt: string
}

export type WalletChangedEvent = {
  campaignId: string
  characterId: string
  campaignCharacterId: string
  walletId: string
  reason: 'BALANCE_ADJUSTED' | 'CURRENCY_TRANSFERRED' | 'PURCHASE' | 'SALE' | 'REWARD'
  balanceMinorUnit: number
  occurredAt: string
}

export type InventoryItemTransferredEvent = {
  campaignId: string
  fromCharacterId: string
  toCharacterId: string
  inventoryItemId: string
  occurredAt: string
}

export type WalletCurrencyTransferredEvent = {
  campaignId: string
  fromCharacterId: string
  toCharacterId: string
  amountMinorUnit: number
  occurredAt: string
}
