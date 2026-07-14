import type { Pathfinder2eProficiencyRank } from '../server/character-sheet/models'

export function getPathfinder2eProficiencyBonus(level: number, rank: Pathfinder2eProficiencyRank): number {
  return rank === 0 ? 0 : level + rank
}
