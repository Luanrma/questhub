import type { EquippedItemSnapshot, InventoryItemState, InventorySnapshot, ItemDefinitionSnapshot } from '../../domain/types'
import type {
  AddItemInput,
  AddItemResult,
  CreateItemDefinitionInput,
  EquipItemInput,
  EquipItemResult,
  FindOrCreateItemDefinitionFromCatalogInput,
  InventoryLedgerEntryView,
  InventoryRepository,
  ResolvedEquippedItem,
  ResolvedInventoryItem,
  TransferItemInput,
  TransferItemResult,
  UnequipItemResult,
  UpdateItemInput,
  UpdateItemResult,
} from '../ports/inventory-repository'

type FakeItem = {
  id: string
  inventoryId: string
  itemDefinitionId: string
  quantity: number
  state: InventoryItemState
  customName: string | null
  notes: string | null
}

type FakeEquipped = {
  id: string
  campaignCharacterId: string
  inventoryItemId: string
  slot: string
  exclusiveSlotKey: string | null
  quantity: number
}

type FakeInventoryRow = { id: string; campaignId: string; campaignCharacterId: string; characterId: string }

let counter = 0
function nextId(prefix: string) {
  counter += 1
  return `${prefix}-${counter}`
}

export function createInMemoryInventoryRepository() {
  const inventories: FakeInventoryRow[] = []
  const items: FakeItem[] = []
  const equipped: FakeEquipped[] = []
  const definitions: (ItemDefinitionSnapshot & { campaignId: string; sourcePack: string | null; sourceId: string | null })[] = []
  const ledger: (InventoryLedgerEntryView & { inventoryId: string; campaignId: string })[] = []

  function seedItemDefinition(
    def: Partial<ItemDefinitionSnapshot> & { campaignId: string; sourcePack?: string | null; sourceId?: string | null },
  ) {
    const full: ItemDefinitionSnapshot & { campaignId: string; sourcePack: string | null; sourceId: string | null } = {
      id: def.id ?? nextId('def'),
      campaignId: def.campaignId,
      name: def.name ?? 'Item',
      system: def.system ?? 'PATHFINDER_2E',
      source: def.source ?? 'CUSTOM',
      itemType: def.itemType ?? 'gear',
      rarity: def.rarity ?? null,
      level: def.level ?? null,
      traits: def.traits ?? [],
      bulk: def.bulk ?? null,
      priceMinorUnit: def.priceMinorUnit ?? null,
      equipSlot: def.equipSlot ?? null,
      isStackable: def.isStackable ?? false,
      systemData: def.systemData ?? null,
      sourcePack: def.sourcePack ?? null,
      sourceId: def.sourceId ?? null,
    }
    definitions.push(full)
    return full
  }

  function seedInventoryItem(input: {
    campaignId: string
    campaignCharacterId: string
    characterId: string
    itemDefinitionId: string
    quantity?: number
    state?: InventoryItemState
  }) {
    let inventory = inventories.find((inv) => inv.campaignCharacterId === input.campaignCharacterId)
    if (!inventory) {
      inventory = { id: nextId('inv'), campaignId: input.campaignId, campaignCharacterId: input.campaignCharacterId, characterId: input.characterId }
      inventories.push(inventory)
    }
    const item: FakeItem = {
      id: nextId('item'),
      inventoryId: inventory.id,
      itemDefinitionId: input.itemDefinitionId,
      quantity: input.quantity ?? 1,
      state: input.state ?? 'STORED',
      customName: null,
      notes: null,
    }
    items.push(item)
    return item
  }

  function toItemSnapshot(item: FakeItem) {
    const definition = definitions.find((d) => d.id === item.itemDefinitionId)
    if (!definition) throw new Error(`missing definition ${item.itemDefinitionId}`)
    const equippedRow = equipped.find((e) => e.inventoryItemId === item.id) ?? null
    return {
      id: item.id,
      itemDefinition: definition,
      quantity: item.quantity,
      state: item.state,
      customName: item.customName,
      notes: item.notes,
      equipped: equippedRow ? toEquippedSnapshot(equippedRow) : null,
    }
  }

  function toEquippedSnapshot(row: FakeEquipped): EquippedItemSnapshot {
    return { id: row.id, inventoryItemId: row.inventoryItemId, slot: row.slot, exclusiveSlotKey: row.exclusiveSlotKey, quantity: row.quantity }
  }

  function toInventorySnapshot(inventory: FakeInventoryRow): InventorySnapshot {
    const activeItems = items.filter(
      (item) => item.inventoryId === inventory.id && !['CONSUMED', 'DESTROYED', 'DROPPED', 'TRANSFERRED'].includes(item.state),
    )
    const itemSnapshots = activeItems.map(toItemSnapshot)
    return {
      id: inventory.id,
      campaignId: inventory.campaignId,
      characterId: inventory.characterId,
      campaignCharacterId: inventory.campaignCharacterId,
      items: itemSnapshots,
      equippedItems: itemSnapshots.flatMap((item) => (item.equipped ? [item.equipped] : [])),
    }
  }

  const repository: InventoryRepository = {
    async getOrCreateForCampaignCharacter(campaignId, campaignCharacterId) {
      let inventory = inventories.find((inv) => inv.campaignCharacterId === campaignCharacterId)
      if (!inventory) {
        inventory = { id: nextId('inv'), campaignId, campaignCharacterId, characterId: campaignCharacterId }
        inventories.push(inventory)
      }
      return toInventorySnapshot(inventory)
    },

    async findInventoryItemById(inventoryItemId): Promise<ResolvedInventoryItem | null> {
      const item = items.find((i) => i.id === inventoryItemId)
      if (!item) return null
      const inventory = inventories.find((inv) => inv.id === item.inventoryId)
      if (!inventory) return null
      return { ...toItemSnapshot(item), inventoryId: inventory.id, campaignId: inventory.campaignId, campaignCharacterId: inventory.campaignCharacterId }
    },

    async findEquippedItemById(equippedItemId): Promise<ResolvedEquippedItem | null> {
      const row = equipped.find((e) => e.id === equippedItemId)
      if (!row) return null
      const item = items.find((i) => i.id === row.inventoryItemId)
      const inventory = item ? inventories.find((inv) => inv.id === item.inventoryId) : undefined
      if (!inventory) return null
      return {
        id: row.id,
        inventoryItemId: row.inventoryItemId,
        campaignCharacterId: row.campaignCharacterId,
        campaignId: inventory.campaignId,
        slot: row.slot,
        exclusiveSlotKey: row.exclusiveSlotKey,
        quantity: row.quantity,
      }
    },

    async findItemDefinitionById(campaignId, itemDefinitionId) {
      const def = definitions.find((d) => d.id === itemDefinitionId && d.campaignId === campaignId)
      return def ?? null
    },

    async createItemDefinition(input: CreateItemDefinitionInput) {
      return seedItemDefinition({ ...input })
    },

    async findOrCreateItemDefinitionFromCatalog(input: FindOrCreateItemDefinitionFromCatalogInput) {
      const existing = definitions.find(
        (d) =>
          d.campaignId === input.campaignId &&
          d.source === 'SYSTEM_CATALOG' &&
          d.sourcePack === input.sourcePack &&
          d.sourceId === input.sourceId,
      )
      if (existing) return existing

      return seedItemDefinition({ ...input, source: 'SYSTEM_CATALOG' })
    },

    async addItem(input: AddItemInput): Promise<AddItemResult> {
      const definition = definitions.find((d) => d.id === input.itemDefinitionId && d.campaignId === input.campaignId)
      if (!definition) return { status: 'item_definition_not_found' }

      let inventory = inventories.find((inv) => inv.campaignCharacterId === input.campaignCharacterId)
      if (!inventory) {
        inventory = { id: nextId('inv'), campaignId: input.campaignId, campaignCharacterId: input.campaignCharacterId, characterId: input.campaignCharacterId }
        inventories.push(inventory)
      }

      const existingStack = definition.isStackable
        ? items.find((i) => i.inventoryId === inventory!.id && i.itemDefinitionId === definition.id && i.state === 'STORED')
        : undefined

      if (existingStack) {
        existingStack.quantity += input.quantity
      } else {
        items.push({
          id: nextId('item'),
          inventoryId: inventory.id,
          itemDefinitionId: definition.id,
          quantity: input.quantity,
          state: 'STORED',
          customName: input.customName ?? null,
          notes: input.notes ?? null,
        })
      }

      ledger.push({
        id: nextId('ledger'),
        campaignId: input.campaignId,
        inventoryId: inventory.id,
        inventoryItemId: null,
        type: 'GRANT',
        deltaQuantity: input.quantity,
        before: null,
        after: null,
        note: null,
        actorUserId: input.actorUserId,
        actorCharacterId: input.actorCharacterId,
        createdAt: new Date(),
      })

      return { status: 'ok', inventory: toInventorySnapshot(inventory) }
    },

    async updateItem(input: UpdateItemInput): Promise<UpdateItemResult> {
      const item = items.find((i) => i.id === input.inventoryItemId)
      if (!item) return { status: 'not_found' }

      if (input.customName !== undefined) item.customName = input.customName
      if (input.notes !== undefined) item.notes = input.notes
      if (input.quantity !== undefined) item.quantity = input.quantity
      if (input.targetState !== undefined) item.state = input.targetState

      const inventory = inventories.find((inv) => inv.id === item.inventoryId)!
      return { status: 'ok', inventory: toInventorySnapshot(inventory) }
    },

    async equipItem(input: EquipItemInput): Promise<EquipItemResult> {
      const item = items.find((i) => i.id === input.inventoryItemId)
      if (!item) return { status: 'not_found' }
      if (equipped.some((e) => e.inventoryItemId === item.id)) return { status: 'already_equipped' }

      const inventory = inventories.find((inv) => inv.id === item.inventoryId)!

      if (input.exclusiveSlotKey) {
        const conflict = equipped.some(
          (e) => e.campaignCharacterId === inventory.campaignCharacterId && e.exclusiveSlotKey === input.exclusiveSlotKey,
        )
        if (conflict) return { status: 'exclusive_slot_occupied' }
      }

      let targetItemId = item.id
      if (item.quantity > 1) {
        item.quantity -= 1
        const split: FakeItem = {
          id: nextId('item'),
          inventoryId: item.inventoryId,
          itemDefinitionId: item.itemDefinitionId,
          quantity: 1,
          state: 'EQUIPPED',
          customName: item.customName,
          notes: item.notes,
        }
        items.push(split)
        targetItemId = split.id
      } else {
        item.state = 'EQUIPPED'
      }

      equipped.push({
        id: nextId('equipped'),
        campaignCharacterId: inventory.campaignCharacterId,
        inventoryItemId: targetItemId,
        slot: input.slot,
        exclusiveSlotKey: input.exclusiveSlotKey,
        quantity: 1,
      })

      return { status: 'ok', inventory: toInventorySnapshot(inventory) }
    },

    async unequipItem(equippedItemId, _actorUserId, _actorCharacterId): Promise<UnequipItemResult> {
      const index = equipped.findIndex((e) => e.id === equippedItemId)
      if (index === -1) return { status: 'not_found' }

      const [row] = equipped.splice(index, 1)
      const item = items.find((i) => i.id === row.inventoryItemId)!
      item.state = 'STORED'

      const inventory = inventories.find((inv) => inv.id === item.inventoryId)!
      return { status: 'ok', inventory: toInventorySnapshot(inventory) }
    },

    async transferItem(input: TransferItemInput): Promise<TransferItemResult> {
      const item = items.find((i) => i.id === input.inventoryItemId)
      if (!item) return { status: 'not_found' }
      if (item.state === 'EQUIPPED') return { status: 'item_equipped' }
      if (item.quantity < input.quantity) return { status: 'insufficient_quantity' }

      const sourceInventory = inventories.find((inv) => inv.id === item.inventoryId)!
      let targetInventory = inventories.find((inv) => inv.campaignCharacterId === input.toCampaignCharacterId)
      if (!targetInventory) {
        targetInventory = {
          id: nextId('inv'),
          campaignId: sourceInventory.campaignId,
          campaignCharacterId: input.toCampaignCharacterId,
          characterId: input.toCampaignCharacterId,
        }
        inventories.push(targetInventory)
      }

      const remaining = item.quantity - input.quantity
      if (remaining > 0) {
        item.quantity = remaining
      } else {
        item.quantity = 0
        item.state = 'TRANSFERRED'
      }

      const definition = definitions.find((d) => d.id === item.itemDefinitionId)!
      const existingTarget = definition.isStackable
        ? items.find((i) => i.inventoryId === targetInventory!.id && i.itemDefinitionId === item.itemDefinitionId && i.state === 'STORED')
        : undefined

      if (existingTarget) {
        existingTarget.quantity += input.quantity
      } else {
        items.push({
          id: nextId('item'),
          inventoryId: targetInventory.id,
          itemDefinitionId: item.itemDefinitionId,
          quantity: input.quantity,
          state: 'STORED',
          customName: item.customName,
          notes: item.notes,
        })
      }

      return { status: 'ok', sourceInventory: toInventorySnapshot(sourceInventory), targetInventory: toInventorySnapshot(targetInventory) }
    },

    async listLedger(inventoryId, page, limit) {
      const filtered = ledger.filter((entry) => entry.inventoryId === inventoryId)
      const start = (page - 1) * limit
      return { entries: filtered.slice(start, start + limit), total: filtered.length }
    },
  }

  return { repository, seedItemDefinition, seedInventoryItem }
}
