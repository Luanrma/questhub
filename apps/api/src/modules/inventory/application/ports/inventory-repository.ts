import type {
  InventoryItemSnapshot,
  InventoryItemState,
  InventoryLedgerType,
  InventorySnapshot,
  ItemDefinitionSnapshot,
} from '../../domain/types'
import type { GameSystemId } from '../../../game_systems/ports'

export type ResolvedInventoryItem = InventoryItemSnapshot & {
  inventoryId: string
  campaignId: string
  campaignCharacterId: string
}

export type ResolvedEquippedItem = {
  id: string
  inventoryItemId: string
  campaignCharacterId: string
  campaignId: string
  slot: string
  exclusiveSlotKey: string | null
  quantity: number
}

export type CreateItemDefinitionInput = {
  campaignId: string
  system: GameSystemId
  name: string
  itemType: string
  rarity?: string | null
  level?: number | null
  traits?: string[]
  bulk?: string | null
  priceMinorUnit?: number | null
  equipSlot?: string | null
  isStackable?: boolean
  systemData?: unknown
  createdByUserId: string
}

export type FindOrCreateItemDefinitionFromCatalogInput = {
  campaignId: string
  system: GameSystemId
  sourcePack: string
  sourceId: string
  name: string
  itemType: string
  rarity?: string | null
  level?: number | null
  traits?: string[]
  bulk?: string | null
  priceMinorUnit?: number | null
  equipSlot?: string | null
  isStackable?: boolean
  systemData?: unknown
  createdByUserId: string
}

export type AddItemInput = {
  campaignId: string
  campaignCharacterId: string
  itemDefinitionId: string
  quantity: number
  customName?: string | null
  notes?: string | null
  actorUserId: string
  actorCharacterId: string | null
}

export type AddItemResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'item_definition_not_found' }

export type UpdateItemInput = {
  inventoryItemId: string
  quantity?: number
  customName?: string | null
  notes?: string | null
  targetState?: InventoryItemState
  ledgerType?: 'ADJUST_QUANTITY' | 'CONSUME' | 'REMOVE'
  actorUserId: string
  actorCharacterId: string | null
}

export type UpdateItemResult = { status: 'ok'; inventory: InventorySnapshot } | { status: 'not_found' }

export type EquipItemInput = {
  inventoryItemId: string
  slot: string
  exclusiveSlotKey: string | null
  actorUserId: string
  actorCharacterId: string | null
}

export type EquipItemResult =
  | { status: 'ok'; inventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'already_equipped' }
  | { status: 'exclusive_slot_occupied' }

export type UnequipItemResult = { status: 'ok'; inventory: InventorySnapshot } | { status: 'not_found' }

export type TransferItemInput = {
  inventoryItemId: string
  toCampaignCharacterId: string
  quantity: number
  note?: string | null
  actorUserId: string
  actorCharacterId: string | null
  operationId: string
}

export type TransferItemResult =
  | { status: 'ok'; sourceInventory: InventorySnapshot; targetInventory: InventorySnapshot }
  | { status: 'not_found' }
  | { status: 'insufficient_quantity' }
  | { status: 'item_equipped' }

export type InventoryLedgerEntryView = {
  id: string
  type: InventoryLedgerType
  inventoryItemId: string | null
  deltaQuantity: number | null
  before: unknown
  after: unknown
  note: string | null
  actorUserId: string | null
  actorCharacterId: string | null
  createdAt: Date
}

export interface InventoryRepository {
  getOrCreateForCampaignCharacter(campaignId: string, campaignCharacterId: string): Promise<InventorySnapshot>
  findInventoryItemById(inventoryItemId: string): Promise<ResolvedInventoryItem | null>
  findEquippedItemById(equippedItemId: string): Promise<ResolvedEquippedItem | null>
  findItemDefinitionById(campaignId: string, itemDefinitionId: string): Promise<ItemDefinitionSnapshot | null>
  createItemDefinition(input: CreateItemDefinitionInput): Promise<ItemDefinitionSnapshot>
  findOrCreateItemDefinitionFromCatalog(input: FindOrCreateItemDefinitionFromCatalogInput): Promise<ItemDefinitionSnapshot>
  addItem(input: AddItemInput): Promise<AddItemResult>
  updateItem(input: UpdateItemInput): Promise<UpdateItemResult>
  equipItem(input: EquipItemInput): Promise<EquipItemResult>
  unequipItem(equippedItemId: string, actorUserId: string, actorCharacterId: string | null): Promise<UnequipItemResult>
  transferItem(input: TransferItemInput): Promise<TransferItemResult>
  listLedger(
    inventoryId: string,
    page: number,
    limit: number,
  ): Promise<{ entries: InventoryLedgerEntryView[]; total: number }>
}
