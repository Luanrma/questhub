export type Pathfinder2eBestiaryAction = {
  id: string
  name: string
  kind: 'action' | 'reaction' | 'passive'
  description: string
  traits?: string[]
}

type Pathfinder2eBestiaryBaseData = {
  schemaVersion: 1
  name: string
  level: number
  rarity: string
  size: string
  traits: string[]
  description: string
  armorClass: number
  hitPoints: number
  saves: { fortitude: number; reflex: number; will: number }
  defenses: { immunities: string[]; resistances: string[]; weaknesses: string[] }
  actions: Pathfinder2eBestiaryAction[]
}

export type Pathfinder2eCreatureData = Pathfinder2eBestiaryBaseData & {
  entryType?: 'CREATURE'
  speedFeet: number
  perception: { modifier: number; senses: string[] }
  abilities: { str: number; dex: number; con: number; int: number; wis: number; cha: number }
  skills: Record<string, number>
  languages: string[]
  attacks: Array<{ id: string; name: string; bonus: number; damage: string; traits: string[] }>
  spellcasting?: Array<{
    id: string
    name: string
    tradition: string
    category: string
    attackModifier: number | null
    saveDc: number | null
    spells: Array<{ id: string; name: string; rank: number }>
  }>
}

export type Pathfinder2eHazardData = Pathfinder2eBestiaryBaseData & {
  entryType: 'HAZARD'
  hardness: number
  stealth: {
    modifier: number
    details: string
  }
  disable: string
  isComplex: boolean
  routine: string
  reset: string
}

export type Pathfinder2eBestiaryData = Pathfinder2eCreatureData | Pathfinder2eHazardData
