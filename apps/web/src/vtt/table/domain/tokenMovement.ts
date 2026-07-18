import type { VttMeasurementPoint } from './types'

const pointEqualityTolerance = 0.001

export function movementPathDistance(points: VttMeasurementPoint[]) {
  return points.slice(1).reduce((distance, point, index) => {
    const previous = points[index]
    return distance + Math.hypot(point.x - previous.x, point.y - previous.y)
  }, 0)
}

export function areMovementPointsEqual(a: VttMeasurementPoint, b: VttMeasurementPoint) {
  return Math.abs(a.x - b.x) <= pointEqualityTolerance && Math.abs(a.y - b.y) <= pointEqualityTolerance
}

export function truncatePathAtPoint(points: VttMeasurementPoint[], point: VttMeasurementPoint) {
  const index = points.findIndex((candidate) => areMovementPointsEqual(candidate, point))
  return index < 0 ? points : points.slice(0, index + 1)
}

export function appendMovementPoint(points: VttMeasurementPoint[], point: VttMeasurementPoint) {
  const last = points[points.length - 1]
  if (last && areMovementPointsEqual(last, point)) return points
  return [...points, point]
}

export function positionAlongMovementPath(points: VttMeasurementPoint[], progress: number): VttMeasurementPoint {
  const first = points[0] ?? { x: 0, y: 0 }
  const last = points[points.length - 1] ?? first
  const distance = movementPathDistance(points)
  if (progress <= 0 || distance === 0) return first
  if (progress >= 1) return last

  let remaining = distance * progress
  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1]
    const end = points[index]
    const segmentDistance = Math.hypot(end.x - start.x, end.y - start.y)
    if (remaining > segmentDistance) {
      remaining -= segmentDistance
      continue
    }
    const segmentProgress = segmentDistance === 0 ? 1 : remaining / segmentDistance
    return {
      x: start.x + (end.x - start.x) * segmentProgress,
      y: start.y + (end.y - start.y) * segmentProgress,
    }
  }

  return last
}

export function smoothMovementProgress(progress: number) {
  const clamped = Math.min(Math.max(progress, 0), 1)
  return -(Math.cos(Math.PI * clamped) - 1) / 2
}
