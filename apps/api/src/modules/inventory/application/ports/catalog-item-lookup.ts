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
      resourceUsage?: Array<{ resource: string; amount: number; exclusive?: boolean }>
      metadata?: unknown
    }>
  }
  sourcePack: string
  sourceId: string
}

export interface CatalogItemLookupPort {
  findItem(system: string, catalogItemId: string): CatalogItemSnapshot | null
}
