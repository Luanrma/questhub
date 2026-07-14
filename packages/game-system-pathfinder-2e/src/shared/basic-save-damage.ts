import type { Pathfinder2eDegreeOfSuccess } from './degree-of-success'

export function applyPathfinder2eBasicSaveDamage(baseDamage: number, degree: Pathfinder2eDegreeOfSuccess): number {
  switch (degree) {
    case 'criticalSuccess':
      return 0
    case 'success':
      return Math.floor(baseDamage / 2)
    case 'failure':
      return baseDamage
    case 'criticalFailure':
      return baseDamage * 2
  }
}
