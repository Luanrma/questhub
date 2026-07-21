import type { VttPlayerToken, VttWallSegment } from '../../table/domain/types'

export type FogPoint = { x: number; y: number }
export type FogSegment = { start: FogPoint; end: FogPoint }

const epsilon = 0.00001
const fullTurn = Math.PI * 2

function normalizedAngle(angle: number) {
  return ((angle % fullTurn) + fullTurn) % fullTurn
}

function passageOpen(wall: VttWallSegment) {
  return wall.kind === 'door' ? Boolean(wall.door?.open) : wall.kind === 'window' ? Boolean(wall.window?.open) : false
}

export function visionBlockingSegments(walls: VttWallSegment[], tokens: VttPlayerToken[], gridSize: number, gridOffset: FogPoint): FogSegment[] {
  const wallSegments = walls.filter((wall) => wall.kind === 'wall' || (wall.kind === 'door' && !passageOpen(wall))).map((wall) => ({ start: wall.start, end: wall.end }))
  return [...wallSegments, ...objectBlockingSegments(tokens, gridSize, gridOffset)]
}

export function lightBlockingSegments(walls: VttWallSegment[], tokens: VttPlayerToken[], gridSize: number, gridOffset: FogPoint): FogSegment[] {
  const wallSegments = walls.filter((wall) => {
    if (wall.kind === 'door') return !passageOpen(wall)
    return !wall.allowsLight
  }).map((wall) => ({ start: wall.start, end: wall.end }))
  return [...wallSegments, ...objectBlockingSegments(tokens, gridSize, gridOffset)]
}

function objectBlockingSegments(tokens: VttPlayerToken[], gridSize: number, gridOffset: FogPoint): FogSegment[] {
  return tokens.flatMap((token) => {
    if (token.layer !== 'OBJECT' || !token.blocksVisionAndLight) return []
    const half = token.size * gridSize / 2
    const center = { x: token.position.x * gridSize + gridOffset.x, y: token.position.y * gridSize + gridOffset.y }
    const points = [
      { x: center.x - half, y: center.y - half }, { x: center.x + half, y: center.y - half },
      { x: center.x + half, y: center.y + half }, { x: center.x - half, y: center.y + half },
    ]
    return points.map((point, index) => ({ start: point, end: points[(index + 1) % points.length] }))
  })
}

function rayIntersection(origin: FogPoint, direction: FogPoint, segment: FogSegment) {
  const segmentDirection = { x: segment.end.x - segment.start.x, y: segment.end.y - segment.start.y }
  const cross = direction.x * segmentDirection.y - direction.y * segmentDirection.x
  if (Math.abs(cross) < epsilon) return null
  const delta = { x: segment.start.x - origin.x, y: segment.start.y - origin.y }
  const rayDistance = (delta.x * segmentDirection.y - delta.y * segmentDirection.x) / cross
  const segmentPosition = (delta.x * direction.y - delta.y * direction.x) / cross
  if (rayDistance < 0 || segmentPosition < 0 || segmentPosition > 1) return null
  return rayDistance
}

export function buildVisibilityPolygon(origin: FogPoint, range: number, segments: FogSegment[], circleSamples = 96): FogPoint[] {
  if (range <= 0) return []
  const nearby = segments.filter((segment) => {
    const minX = Math.min(segment.start.x, segment.end.x) - range
    const maxX = Math.max(segment.start.x, segment.end.x) + range
    const minY = Math.min(segment.start.y, segment.end.y) - range
    const maxY = Math.max(segment.start.y, segment.end.y) + range
    return origin.x >= minX && origin.x <= maxX && origin.y >= minY && origin.y <= maxY
  })
  const angles: number[] = Array.from({ length: circleSamples }, (_, index) => (index / circleSamples) * fullTurn)
  for (const segment of nearby) {
    for (const point of [segment.start, segment.end]) {
      const angle = Math.atan2(point.y - origin.y, point.x - origin.x)
      angles.push(normalizedAngle(angle - epsilon), normalizedAngle(angle), normalizedAngle(angle + epsilon))
    }
  }
  const orderedAngles = angles.sort((left, right) => left - right).filter((angle, index, ordered) => index === 0 || angle - ordered[index - 1] > epsilon / 2)
  return orderedAngles.map((angle) => {
    const direction = { x: Math.cos(angle), y: Math.sin(angle) }
    let distance = range
    for (const segment of nearby) {
      const intersection = rayIntersection(origin, direction, segment)
      if (intersection !== null && intersection < distance) distance = intersection
    }
    return { x: origin.x + direction.x * distance, y: origin.y + direction.y * distance }
  })
}
