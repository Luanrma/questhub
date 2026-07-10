import type {
  CurrencyDisplay,
  EquippedItemSnapshot,
  InventoryItemSnapshot,
  InventorySnapshot,
  ItemDefinitionSnapshot,
  WalletSnapshot,
} from './types'
import type { EquipmentGroup, EquipmentOption } from '../../game_systems/ports'

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
    equipmentOptionKey: equipped.equipmentOptionKey,
    resourceLocks: equipped.resourceLocks,
    systemData: equipped.systemData,
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

export function presentEquippedGroup(group: EquipmentGroup, equippedItems: ReturnType<typeof presentEquippedItem>[]) {
  const equippedById = new Map(equippedItems.map((item) => [item.id, item]))
  return {
    id: group.id,
    label: group.label,
    items: group.itemIds.flatMap((itemId) => {
      const item = equippedById.get(itemId)
      return item ? [item] : []
    }),
    ...(group.metadata === undefined ? {} : { metadata: group.metadata }),
  }
}

export function presentInventory(
  inventory: InventorySnapshot,
  equipmentOptions: EquipmentOption[] = [],
  equippedGroups: EquipmentGroup[] = [],
) {
  const equippedItems = inventory.equippedItems.map(presentEquippedItem)
  return {
    id: inventory.id,
    campaignId: inventory.campaignId,
    characterId: inventory.characterId,
    campaignCharacterId: inventory.campaignCharacterId,
    ...(equipmentOptions.length ? { equipmentOptions } : {}),
    ...(equippedGroups.length ? { equippedGroups: equippedGroups.map((group) => presentEquippedGroup(group, equippedItems)) } : {}),
    items: inventory.items.map(presentInventoryItem),
    equippedItems,
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
