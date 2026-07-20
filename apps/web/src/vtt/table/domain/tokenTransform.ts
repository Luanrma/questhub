const MINIMUM_TOKEN_SIZE = 0.25
const MAXIMUM_TOKEN_SIZE = 20
const TOKEN_SIZE_STEP = 0.25

export function normalizeTokenRotation(rotation: number) {
  if (!Number.isFinite(rotation)) return 0
  return ((Math.round(rotation) % 360) + 360) % 360
}

export function resizedTokenSize(initialSize: number, initialDistance: number, currentDistance: number) {
  if (!Number.isFinite(initialDistance) || initialDistance <= 0 || !Number.isFinite(currentDistance)) return initialSize
  const rawSize = initialSize * currentDistance / initialDistance
  const steppedSize = Math.round(rawSize / TOKEN_SIZE_STEP) * TOKEN_SIZE_STEP
  return Math.max(MINIMUM_TOKEN_SIZE, Math.min(MAXIMUM_TOKEN_SIZE, steppedSize))
}

export function rotatedTokenDegrees(currentRotation: number, previousPointerAngle: number, currentPointerAngle: number) {
  const rawDelta = currentPointerAngle - previousPointerAngle
  const shortestDelta = Math.atan2(Math.sin(rawDelta), Math.cos(rawDelta))
  return currentRotation + shortestDelta * 180 / Math.PI
}
