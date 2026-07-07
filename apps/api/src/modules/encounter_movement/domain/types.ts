export type GridPoint = { x: number; y: number }

export type MovementBudget = {
  maxMetersPerAction: number | null
  actionsRemaining: number
  metersUsedThisAction: number
}

export type MovementValidationResult =
  | { allowed: true; position: GridPoint; metersUsedThisAction: number }
  | { allowed: false; reason: 'NOT_ACTIVE_TURN' | 'TOKEN_NOT_IN_ENCOUNTER' | 'NO_ACTIONS_REMAINING' }
  | {
      allowed: 'clamped'
      position: GridPoint
      metersUsedThisAction: number
      requestedPosition: GridPoint
    }
