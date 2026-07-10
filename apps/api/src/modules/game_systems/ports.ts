import type { CharacterSheetSystemAdapter } from './models'
import type { GameSystemItemAdapter } from './items/models'

export type GameSystemId = 'DND_5E' | 'PATHFINDER_2E'

export type EquipmentSlotDefinition = {
  key: string
  label: string
  exclusive: boolean
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

export interface InventorySystemAdapter {
  isKnownSlot(slot: string): boolean
  toExclusiveSlotKey(slot: string): string | null
  getDefaultSlots(): EquipmentSlotDefinition[]
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
