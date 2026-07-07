import type { VttMovementBudget } from './types'

export type GridPoint = { x: number; y: number }

export function cellDistance(from: GridPoint, to: GridPoint, cellSizePx: number): number {
  const dx = Math.abs(to.x - from.x) / cellSizePx
  const dy = Math.abs(to.y - from.y) / cellSizePx
  return Math.max(dx, dy)
}

export function cellsToMeters(cells: number, metersPerCell: number): number {
  return cells * metersPerCell
}

export type MovementPredictionResult = {
  position: GridPoint
  metersUsedThisAction: number
  blocked: boolean
}

export function predictMovement(input: {
  from: GridPoint
  to: GridPoint
  cellSizePx: number
  metersPerCell: number
  budget: VttMovementBudget
}): MovementPredictionResult {
  if (input.budget.maxMetersPerAction === null) {
    return { position: input.to, metersUsedThisAction: input.budget.metersUsedThisAction, blocked: false }
  }

  if (input.budget.actionsRemaining <= 0) {
    return { position: input.from, metersUsedThisAction: input.budget.metersUsedThisAction, blocked: true }
  }

  const distanceMeters = cellsToMeters(cellDistance(input.from, input.to, input.cellSizePx), input.metersPerCell)
  const remaining = input.budget.maxMetersPerAction - input.budget.metersUsedThisAction

  if (distanceMeters <= remaining) {
    return { position: input.to, metersUsedThisAction: input.budget.metersUsedThisAction + distanceMeters, blocked: false }
  }

  const ratio = remaining <= 0 ? 0 : remaining / distanceMeters
  return {
    position: {
      x: input.from.x + (input.to.x - input.from.x) * ratio,
      y: input.from.y + (input.to.y - input.from.y) * ratio,
    },
    metersUsedThisAction: input.budget.maxMetersPerAction,
    blocked: false,
  }
}
