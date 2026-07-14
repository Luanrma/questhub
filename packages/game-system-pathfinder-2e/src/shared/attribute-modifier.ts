import type { Pathfinder2eAttributes } from '../server/character-sheet/models'

export function getPathfinder2eAttributeModifier(score: number): number {
  return Math.floor((score - 10) / 2)
}

export type Pathfinder2eAttributeAbbreviation = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export const PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION: Record<Pathfinder2eAttributeAbbreviation, keyof Pathfinder2eAttributes> = {
  str: 'strength',
  dex: 'dexterity',
  con: 'constitution',
  int: 'intelligence',
  wis: 'wisdom',
  cha: 'charisma',
}

export function isPathfinder2eAttributeAbbreviation(value: string): value is Pathfinder2eAttributeAbbreviation {
  return Object.prototype.hasOwnProperty.call(PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION, value)
}
