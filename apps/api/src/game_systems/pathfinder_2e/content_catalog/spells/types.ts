export type Pathfinder2eSpellData = {
  schemaVersion: 1
  name: string
  rank: number
  rarity: string
  traits: string[]
  traditions: string[]
  description: string
  castingTime: string
  range: string
  target: string
  area: string | null
  duration: string
  defense: string | null
  damage: Array<{ formula: string; type: string; kind: 'damage' | 'healing' | 'damage-or-healing' }>
  heightening: string
}
