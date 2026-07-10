import type { CharacterSheetSystemAdapter } from './models'
import type { GameSystemItemAdapter } from './items/models'

export type GameSystemId = 'DND_5E' | 'PATHFINDER_2E'

export type EquipmentSlotDefinition = {
  key: string
  label: string
  exclusive: boolean
}

export type EquipmentOption = {
  key: string
  label: string
  description?: string
  disabled?: boolean
  metadata?: unknown
}

export type EquipmentResourceUsage = {
  resource: string
  amount: number
  exclusive?: boolean
}

export type EquippedItemState = {
  inventoryItemId: string
  equipmentOptionKey: string
  resourceLocks: EquipmentResourceUsage[]
  systemData: unknown
}

export type EquipmentGroupingItem = EquippedItemState & {
  equippedItemId: string
  item: UniversalItemDefinition
}

export type EquipmentGroupingInput = {
  items: EquipmentGroupingItem[]
}

export type EquipmentGroup = {
  id: string
  label: string
  itemIds: string[]
  metadata?: unknown
}

export type UniversalItemDefinition = {
  name: string
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

export type EquipmentValidationInput = {
  optionKey: string
  item: UniversalItemDefinition
  currentEquipment: EquippedItemState[]
}

export type EquipmentValidationResult =
  | {
      ok: true
      optionKey: string
      resourceUsage: EquipmentResourceUsage[]
      systemData?: unknown
    }
  | {
      ok: false
      code: string
      message: string
      details?: unknown
    }

export interface InventorySystemAdapter {
  listEquipmentOptions(): EquipmentOption[]
  listEquippedGroups(input: EquipmentGroupingInput): EquipmentGroup[]
  validateEquipment(input: EquipmentValidationInput): EquipmentValidationResult
  normalizeItemData(input: unknown): UniversalItemDefinition
}

export interface CurrencySystemAdapter {
  minorUnitName: string
  format(minorUnit: number): string
  breakdown(minorUnit: number): Record<string, number>
  toMinorUnit(input: unknown): number
}

export type GameSystemAdapterStatus = 'PLAYABLE' | 'RESERVED'

export interface GameSystemAdapter {
  id: GameSystemId
  label: string
  version: number
  status: GameSystemAdapterStatus
  characterSheet?: CharacterSheetSystemAdapter<unknown>
  inventory?: InventorySystemAdapter
  currency?: CurrencySystemAdapter
  items?: GameSystemItemAdapter
}
