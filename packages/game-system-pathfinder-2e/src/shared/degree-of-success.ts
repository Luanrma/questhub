export type Pathfinder2eDegreeOfSuccess = 'criticalSuccess' | 'success' | 'failure' | 'criticalFailure'

const DEGREE_ORDER: Pathfinder2eDegreeOfSuccess[] = ['criticalFailure', 'failure', 'success', 'criticalSuccess']

function shiftDegree(degree: Pathfinder2eDegreeOfSuccess, direction: 1 | -1): Pathfinder2eDegreeOfSuccess {
  const index = DEGREE_ORDER.indexOf(degree)
  const next = Math.min(DEGREE_ORDER.length - 1, Math.max(0, index + direction))
  return DEGREE_ORDER[next]!
}

export function calculatePathfinder2eDegreeOfSuccess(input: { naturalRoll: number; modifier: number; dc: number }): Pathfinder2eDegreeOfSuccess {
  const total = input.naturalRoll + input.modifier

  let degree: Pathfinder2eDegreeOfSuccess
  if (total >= input.dc + 10) degree = 'criticalSuccess'
  else if (total >= input.dc) degree = 'success'
  else if (total <= input.dc - 10) degree = 'criticalFailure'
  else degree = 'failure'

  if (input.naturalRoll === 20) degree = shiftDegree(degree, 1)
  if (input.naturalRoll === 1) degree = shiftDegree(degree, -1)

  return degree
}
