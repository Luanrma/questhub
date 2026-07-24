export type Pathfinder2eBestiaryData = {
  schemaVersion: 1
  name: string
  level: number
  rarity: string
  size: string
  traits: string[]
  description: string
  armorClass: number
  hitPoints: number
  speedFeet: number
  perception: { modifier: number; senses: string[] }
  saves: { fortitude: number; reflex: number; will: number }
  abilities: { str: number; dex: number; con: number; int: number; wis: number; cha: number }
  skills: Record<string, number>
  languages: string[]
  defenses: { immunities: string[]; resistances: string[]; weaknesses: string[] }
  attacks: Array<{ id: string; name: string; bonus: number; damage: string; traits: string[] }>
  actions: Array<{ id: string; name: string; kind: 'action' | 'reaction' | 'passive'; description: string }>
}
