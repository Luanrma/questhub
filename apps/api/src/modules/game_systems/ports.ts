import type { CharacterActiveEffectsSystemAdapter, CharacterSheetSystemAdapter, CharacterSpellbookSystemAdapter } from './models'
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
  schemaVersion?: number
  classification?: {
    role?: string
    subtype?: string | null
  }
  usage?: unknown
  equipment?: {
    equippable?: boolean
    options?: Array<{
      key: string
      label: string
      resourceUsage?: EquipmentResourceUsage[]
      metadata?: unknown
    }>
  }
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

export type ArmorClassEquipmentResolution = {
  armor: { equippedItemId: string; category: string; itemBonus: number; dexCap: number | null } | null
  shield: { equippedItemId: string; itemBonus: number; raised: boolean } | null
}

export interface InventorySystemAdapter {
  listEquipmentOptions(): EquipmentOption[]
  getEquipmentOptions?(item: UniversalItemDefinition): EquipmentOption[]
  listEquippedGroups(input: EquipmentGroupingInput): EquipmentGroup[]
  validateEquipment(input: EquipmentValidationInput): EquipmentValidationResult
  normalizeItemData(input: unknown): UniversalItemDefinition
  /**
   * Resolve fatos de equipamento (armadura/escudo) para o calculo de Armor
   * Class. Capacidade opcional — sistemas sem Armor Class dinamico (ex.:
   * D&D 5e) simplesmente nao a implementam. O modulo `inventory` nunca
   * interpreta armadura/escudo diretamente; ver
   * .ai/game_systems/pathfinder_2e/armor_class/specs.md secao 4.
   */
  resolveArmorClassEquipment?(input: EquipmentGroupingInput): ArmorClassEquipmentResolution
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
  characterSpellbook?: CharacterSpellbookSystemAdapter<unknown>
  characterActiveEffects?: CharacterActiveEffectsSystemAdapter<unknown>
  inventory?: InventorySystemAdapter
  currency?: CurrencySystemAdapter
  items?: GameSystemItemAdapter
}
