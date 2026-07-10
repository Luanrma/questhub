export type InventoryItemState = 'STORED' | 'EQUIPPED' | 'DROPPED' | 'CONSUMED' | 'DESTROYED' | 'TRANSFERRED'

export type InventoryLedgerType =
  | 'GRANT'
  | 'REMOVE'
  | 'ADJUST_QUANTITY'
  | 'TRANSFER_IN'
  | 'TRANSFER_OUT'
  | 'EQUIP'
  | 'UNEQUIP'
  | 'CONSUME'
  | 'SPLIT_STACK'
  | 'MERGE_STACK'
  | 'PURCHASE'
  | 'SALE'
  | 'LOOT'
  | 'REWARD'
  | 'CORRECTION'

export type WalletLedgerType =
  | 'SET_BALANCE'
  | 'ADJUSTMENT'
  | 'TRANSFER_IN'
  | 'TRANSFER_OUT'
  | 'PURCHASE'
  | 'SALE'
  | 'LOOT'
  | 'REWARD'
  | 'CORRECTION'

export type WalletAdjustReason = 'LOOT' | 'REWARD' | 'PURCHASE' | 'SALE' | 'CORRECTION' | 'ADJUSTMENT'

/** Resolved permission facts for the actor performing an inventory/wallet action against one CampaignCharacter. */
export type InventoryAccess = {
  isMasterActive: boolean
  isOwnerActive: boolean
}

export type ItemDefinitionSnapshot = {
  id: string
  name: string
  system: 'DND_5E' | 'PATHFINDER_2E'
  source: 'CUSTOM' | 'SYSTEM_CATALOG' | 'IMPORTED'
  itemType: string
  rarity: string | null
  level: number | null
  traits: string[]
  bulk: string | null
  priceMinorUnit: number | null
  equipSlot: string | null
  isStackable: boolean
  systemData: unknown
}

export type EquippedItemSnapshot = {
  id: string
  inventoryItemId: string
  slot: string
  exclusiveSlotKey: string | null
  quantity: number
}

export type InventoryItemSnapshot = {
  id: string
  itemDefinition: ItemDefinitionSnapshot
  quantity: number
  state: InventoryItemState
  customName: string | null
  notes: string | null
  equipped: EquippedItemSnapshot | null
}

export type InventorySnapshot = {
  id: string
  campaignId: string
  characterId: string
  campaignCharacterId: string
  items: InventoryItemSnapshot[]
  equippedItems: EquippedItemSnapshot[]
}

export type CurrencyDisplay = {
  system: string
  breakdown: Record<string, number>
  label: string
}

export type WalletSnapshot = {
  id: string
  campaignId: string
  characterId: string
  campaignCharacterId: string
  balanceMinorUnit: number
}
