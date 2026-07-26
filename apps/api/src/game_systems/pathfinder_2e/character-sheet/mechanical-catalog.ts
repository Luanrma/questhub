import {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_CLASSES,
} from './options'

type Pathfinder2eAncestryName = (typeof PATHFINDER_2E_ANCESTRIES)[number]
type Pathfinder2eClassName = (typeof PATHFINDER_2E_CLASSES)[number]

export const PATHFINDER_2E_ANCESTRY_HIT_POINTS: Record<Pathfinder2eAncestryName, number> = {
  Anadi: 8,
  Android: 8,
  Athamaru: 8,
  Automaton: 8,
  'Awakened Animal': 6,
  Azarketi: 8,
  Catfolk: 8,
  Centaur: 10,
  Conrasu: 10,
  Dwarf: 10,
  Elf: 6,
  Fetchling: 8,
  Fleshwarp: 10,
  Ghoran: 8,
  Gnome: 8,
  Goblin: 6,
  Goloma: 8,
  Halfling: 6,
  Hobgoblin: 8,
  Human: 8,
  Kashrishi: 8,
  Kholo: 8,
  Kitsune: 8,
  Kobold: 6,
  Leshy: 8,
  Lizardfolk: 8,
  Merfolk: 8,
  Minotaur: 10,
  Nagaji: 10,
  Orc: 10,
  Poppet: 6,
  Ratfolk: 6,
  Samsaran: 8,
  Sarangay: 8,
  Shisk: 8,
  Shoony: 6,
  Skeleton: 6,
  Sprite: 6,
  Strix: 8,
  Surki: 8,
  Tanuki: 8,
  Tengu: 6,
  Tripkee: 6,
  Vanara: 8,
  Vishkanya: 8,
  Wayang: 6,
  Yaksha: 8,
  Yaoguai: 8,
}

export const PATHFINDER_2E_CLASS_HIT_POINTS_PER_LEVEL: Record<Pathfinder2eClassName, number> = {
  Alchemist: 8,
  Animist: 8,
  Barbarian: 12,
  Bard: 8,
  Champion: 10,
  Cleric: 8,
  Druid: 8,
  Exemplar: 10,
  Fighter: 10,
  Gunslinger: 8,
  Inventor: 8,
  Investigator: 8,
  Kineticist: 8,
  Magus: 8,
  Monk: 10,
  Oracle: 8,
  Psychic: 6,
  Ranger: 10,
  Rogue: 8,
  Sorcerer: 6,
  Summoner: 10,
  Swashbuckler: 10,
  Thaumaturge: 8,
  Witch: 6,
  Wizard: 6,
}

export function getPathfinder2eAncestryHitPoints(ancestry: string) {
  return ancestry in PATHFINDER_2E_ANCESTRY_HIT_POINTS
    ? PATHFINDER_2E_ANCESTRY_HIT_POINTS[ancestry as Pathfinder2eAncestryName]
    : 0
}

export function getPathfinder2eClassHitPointsPerLevel(className: string) {
  return className in PATHFINDER_2E_CLASS_HIT_POINTS_PER_LEVEL
    ? PATHFINDER_2E_CLASS_HIT_POINTS_PER_LEVEL[className as Pathfinder2eClassName]
    : 0
}
