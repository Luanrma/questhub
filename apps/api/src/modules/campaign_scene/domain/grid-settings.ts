export const GRID_SIZE_LIMITS = {
  min: 50,
  max: 200,
  default: 100,
} as const

export const METERS_PER_CELL_LIMITS = {
  min: 0.5,
  max: 10,
  step: 0.5,
  default: 1.5,
} as const

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function normalizeGridSize(value: number) {
  return clamp(Math.round(value), GRID_SIZE_LIMITS.min, GRID_SIZE_LIMITS.max)
}

export function normalizeMetersPerCell(value: number) {
  const boundedValue = clamp(value, METERS_PER_CELL_LIMITS.min, METERS_PER_CELL_LIMITS.max)
  const exactSteps = (boundedValue - METERS_PER_CELL_LIMITS.min) / METERS_PER_CELL_LIMITS.step
  const lowerSteps = Math.floor(exactSteps)
  const normalizedSteps = exactSteps - lowerSteps > 0.5 ? lowerSteps + 1 : lowerSteps
  return METERS_PER_CELL_LIMITS.min + normalizedSteps * METERS_PER_CELL_LIMITS.step
}
