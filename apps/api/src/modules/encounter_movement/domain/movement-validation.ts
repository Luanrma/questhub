import { cellDistance, cellsToMeters } from './movement-distance'
import type { GridPoint, MovementBudget, MovementValidationResult } from './types'

export function validateMovement(input: {
  from: GridPoint
  to: GridPoint
  cellSizePx: number
  metersPerCell: number
  budget: MovementBudget
}): MovementValidationResult {
  if (input.budget.maxMetersPerAction === null) {
    return { allowed: true, position: input.to, metersUsedThisAction: input.budget.metersUsedThisAction }
  }

  if (input.budget.actionsRemaining <= 0) {
    return { allowed: false, reason: 'NO_ACTIONS_REMAINING' }
  }

  const distanceMeters = cellsToMeters(cellDistance(input.from, input.to, input.cellSizePx), input.metersPerCell)
  const remaining = input.budget.maxMetersPerAction - input.budget.metersUsedThisAction

  if (distanceMeters <= remaining) {
    return {
      allowed: true,
      position: input.to,
      metersUsedThisAction: input.budget.metersUsedThisAction + distanceMeters,
    }
  }

  const ratio = remaining <= 0 ? 0 : remaining / distanceMeters
  const clampedPosition: GridPoint = {
    x: input.from.x + (input.to.x - input.from.x) * ratio,
    y: input.from.y + (input.to.y - input.from.y) * ratio,
  }

  return {
    allowed: 'clamped',
    position: clampedPosition,
    metersUsedThisAction: input.budget.maxMetersPerAction,
    requestedPosition: input.to,
  }
}

export function commitMovementAction(budget: MovementBudget): MovementBudget {
  if (budget.actionsRemaining <= 0 || budget.metersUsedThisAction <= 0) return budget

  return {
    ...budget,
    actionsRemaining: budget.actionsRemaining - 1,
    metersUsedThisAction: 0,
  }
}
