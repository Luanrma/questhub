export type CatalogItemSnapshot = {
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
  sourcePack: string
  sourceId: string
}

export interface CatalogItemLookupPort {
  findItem(system: string, catalogItemId: string): CatalogItemSnapshot | null
}
