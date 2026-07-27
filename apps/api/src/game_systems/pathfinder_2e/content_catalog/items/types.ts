export type Pathfinder2eItemData = {
  schemaVersion: 1
  name: string
  itemType: 'weapon' | 'armor' | 'shield' | 'equipment' | 'consumable' | 'ammunition' | 'treasure' | 'container' | 'kit'
  level: number
  rarity: string
  traits: string[]
  description: string
  bulk: number
  price: { gp?: number; sp?: number; cp?: number }
  usage: string
  category: string
  group: string
  damage?: { dice: number; die: string; type: string }
  armor?: { armorClassBonus: number; dexterityCap: number; checkPenalty: number; speedPenaltyFeet: number }
}
