import type {
  CurrencyDisplay,
  EquippedItemSnapshot,
  InventoryItemSnapshot,
  InventorySnapshot,
  ItemDefinitionSnapshot,
  WalletSnapshot,
} from './types'

export function presentItemDefinition(definition: ItemDefinitionSnapshot) {
  return {
    id: definition.id,
    name: definition.name,
    system: definition.system,
    source: definition.source,
    itemType: definition.itemType,
    rarity: definition.rarity,
    level: definition.level,
    traits: definition.traits,
    bulk: definition.bulk,
    priceMinorUnit: definition.priceMinorUnit,
    equipSlot: definition.equipSlot,
    isStackable: definition.isStackable,
  }
}

export function presentEquippedItem(equipped: EquippedItemSnapshot) {
  return {
    id: equipped.id,
    inventoryItemId: equipped.inventoryItemId,
    slot: equipped.slot,
    exclusiveSlotKey: equipped.exclusiveSlotKey,
    quantity: equipped.quantity,
  }
}

export function presentInventoryItem(item: InventoryItemSnapshot) {
  return {
    id: item.id,
    itemDefinition: presentItemDefinition(item.itemDefinition),
    quantity: item.quantity,
    state: item.state,
    customName: item.customName,
    notes: item.notes,
    equipped: item.equipped ? presentEquippedItem(item.equipped) : null,
  }
}

export function presentInventory(inventory: InventorySnapshot) {
  return {
    id: inventory.id,
    campaignId: inventory.campaignId,
    characterId: inventory.characterId,
    campaignCharacterId: inventory.campaignCharacterId,
    items: inventory.items.map(presentInventoryItem),
    equippedItems: inventory.equippedItems.map(presentEquippedItem),
  }
}

export function presentWallet(wallet: WalletSnapshot, display: CurrencyDisplay) {
  return {
    id: wallet.id,
    campaignId: wallet.campaignId,
    characterId: wallet.characterId,
    campaignCharacterId: wallet.campaignCharacterId,
    balanceMinorUnit: wallet.balanceMinorUnit,
    display,
  }
}
