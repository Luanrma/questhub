export type Pathfinder2eMaximumHitPointsInput = {
  level: number
  ancestryHitPoints: number
  classHitPointsPerLevel: number
  constitutionModifier: number
  manualAdjustment: number
}

export type Pathfinder2eMaximumHitPointsBreakdown = {
  maximum: number
  ancestryHitPoints: number
  classHitPointsPerLevel: number
  classTotal: number
  constitutionModifier: number
  constitutionTotal: number
  manualAdjustment: number
}

export function calculateMaximumHitPoints(
  input: Pathfinder2eMaximumHitPointsInput,
): Pathfinder2eMaximumHitPointsBreakdown {
  const classTotal = input.level * input.classHitPointsPerLevel
  const constitutionTotal = input.level * input.constitutionModifier

  const maximum = Math.max(
    1,
    input.ancestryHitPoints + classTotal + constitutionTotal + input.manualAdjustment,
  )

  return {
    maximum,
    ancestryHitPoints: input.ancestryHitPoints,
    classHitPointsPerLevel: input.classHitPointsPerLevel,
    classTotal,
    constitutionModifier: input.constitutionModifier,
    constitutionTotal,
    manualAdjustment: input.manualAdjustment,
  }
}

/**
 * Reconciliacao para qualquer recalculo que nao seja subida de nivel
 * (Constituicao, ancestralidade, classe, ajuste manual). Nunca cura: so
 * inicializa na primeira vez ou faz clamp ao novo maximo.
 */
export function initializeCurrentHitPoints(
  current: number,
  previousMaximum: number,
  newMaximum: number,
): number {
  const isUninitialized = current === 0 && previousMaximum === 0
  if (isUninitialized) return newMaximum

  return Math.min(current, newMaximum)
}

/**
 * Reconciliacao especifica para subida de nivel: soma o delta positivo de
 * vida maxima ao `current`, preservando dano acumulado.
 */
export function applyMaximumHitPointsIncrease(
  current: number,
  previousMaximum: number,
  newMaximum: number,
): number {
  const delta = Math.max(0, newMaximum - previousMaximum)
  return Math.min(current + delta, newMaximum)
}
