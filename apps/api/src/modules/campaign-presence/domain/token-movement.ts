export type MovementPoint = { x: number; y: number }

const pointTolerance = 0.001

export function movementPathDistance(path: MovementPoint[]) {
  return path.slice(1).reduce((distance, point, index) => {
    const previous = path[index]
    return distance + Math.hypot(point.x - previous.x, point.y - previous.y)
  }, 0)
}

export function movementDurationMs(path: MovementPoint[]) {
  const distance = movementPathDistance(path)
  return Math.round(Math.min(Math.max(450 + 180 * distance ** 0.86, 550), 6000))
}

export function areMovementPointsEqual(a: MovementPoint, b: MovementPoint) {
  return Math.abs(a.x - b.x) <= pointTolerance && Math.abs(a.y - b.y) <= pointTolerance
}

export function pathHasBlockedSegment(
  path: MovementPoint[],
  isBlocked: (start: MovementPoint, end: MovementPoint) => boolean,
) {
  return path.slice(1).some((end, index) => isBlocked(path[index], end))
}
