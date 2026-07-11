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
  stackGroup?: string
  damage?: string
  ac?: number
  dexCap?: number
  strengthRequirement?: number
  checkPenalty?: number
  speedPenaltyFeet?: number
  description?: string
  publicationTitle?: string
  remaster?: boolean
  license?: string
}

export type Pathfinder2eItemRole =
  | 'weapon'
  | 'armor'
  | 'shield'
  | 'wearable'
  | 'held-equipment'
  | 'ammunition'
  | 'consumable'
  | 'container'
  | 'attachment'
  | 'treasure'
  | 'kit'
  | 'other'

export type Pathfinder2eUsageMode = 'none' | 'held' | 'worn' | 'consumed' | 'ammunition' | 'affixed' | 'stowed'

export type Pathfinder2eBodyPlacement =
  | 'head'
  | 'eyes'
  | 'neck'
  | 'shoulders'
  | 'torso'
  | 'waist'
  | 'hands'
  | 'feet'
  | 'ring'
  | 'armor'
  | 'back'
  | 'other'

export type Pathfinder2eAmmunitionKind = 'arrow' | 'bolt' | 'sling-bullet' | 'firearm-round' | 'dart' | 'other'

export type Pathfinder2eEquipmentResourceUsage = {
  resource: string
  amount: number
  exclusive?: boolean
}

export type Pathfinder2eEquipmentOption = {
  key: string
  label: string
  resourceUsage: Pathfinder2eEquipmentResourceUsage[]
  metadata?: unknown
}

export type Pathfinder2eUsage = {
  raw: string | null
  mode: Pathfinder2eUsageMode
  hands: 0 | 1 | 2
  placement: Pathfinder2eBodyPlacement | null
}

export type Pathfinder2eCompendiumItemV1 = {
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

export type Pathfinder2eCompendiumItemV2 = {
  schemaVersion: 2
  id: string
  sourcePack: string
  sourceId: string
  name: string
  itemType: Pathfinder2eItemType
  classification: {
    role: Pathfinder2eItemRole
    subtype: string | null
  }
  rarity: string
  level: number
  traits: string[]
  bulk: string
  priceMinorUnit: number
  stack: {
    stackable: boolean
  }
  usage: Pathfinder2eUsage
  equipment: {
    equippable: boolean
    options: Pathfinder2eEquipmentOption[]
  }
  consumable?: {
    category: string
  }
  ammunition?: {
    kind: Pathfinder2eAmmunitionKind
  }
  weapon?: {
    group?: string
    category?: string
    damage?: string
    hands: 1 | 2
    ammunition?: {
      required: boolean
      acceptedKinds: Pathfinder2eAmmunitionKind[]
      quantityPerAttack: number
    }
  }
  armor?: {
    category?: string
    group?: string
    ac?: number
    dexCap?: number
    strengthRequirement?: number
    checkPenalty?: number
    speedPenaltyFeet?: number
  }
  shield?: {
    ac?: number
    speedPenaltyFeet?: number
  }
  systemData: Pathfinder2eItemSystemData
  normalizationWarnings?: string[]
}

export type Pathfinder2eCompendiumItem = Pathfinder2eCompendiumItemV1 | Pathfinder2eCompendiumItemV2
