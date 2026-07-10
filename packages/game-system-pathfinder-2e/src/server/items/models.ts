export type Pathfinder2eItemType =
  | 'weapon'
  | 'armor'
  | 'equipment'
  | 'consumable'
  | 'treasure'
  | 'backpack'
  | 'shield'
  | 'kit'

export type Pathfinder2eItemSystemData = {
  usage?: string
  group?: string
  category?: string
  damage?: string
  ac?: number
  description?: string
  publicationTitle?: string
  remaster?: boolean
  license?: string
}

export type Pathfinder2eCompendiumItem = {
  id: string
  sourcePack: string
  sourceId: string
  name: string
  itemType: Pathfinder2eItemType
  rarity: string
  level: number
  traits: string[]
  bulk: string
  priceMinorUnit: number
  isStackable: boolean
  equipSlot: string | null
  systemData: Pathfinder2eItemSystemData
}
