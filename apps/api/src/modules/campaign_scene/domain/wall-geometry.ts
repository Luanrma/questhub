export type SceneWallPoint = {
  x: number
  y: number
}

export type SceneWallSegment = {
  id: string
  kind: 'wall' | 'door'
  start: SceneWallPoint
  end: SceneWallPoint
  color?: string
  playerVisible?: boolean
  door?: {
    open: boolean
    locked: boolean
    blocked: boolean
    ajar: boolean
  }
}

const epsilon = 0.000001

export function isSceneWallSegment(value: unknown): value is SceneWallSegment {
  if (!value || typeof value !== 'object') return false
  const wall = value as SceneWallSegment
  if (wall.kind !== 'wall' && wall.kind !== 'door') return false
  if (!wall.start || !wall.end) return false
  if (!Number.isFinite(wall.start.x) || !Number.isFinite(wall.start.y)) return false
  if (!Number.isFinite(wall.end.x) || !Number.isFinite(wall.end.y)) return false
  return Math.hypot(wall.end.x - wall.start.x, wall.end.y - wall.start.y) > epsilon
}

export function normalizeSceneWalls(value: unknown): SceneWallSegment[] {
  if (!Array.isArray(value)) return []
  return value.filter(isSceneWallSegment)
}

export function isWallBlockingMovement(wall: SceneWallSegment) {
  if (wall.kind === 'wall') return true
  return !wall.door?.open
}

function orientation(a: SceneWallPoint, b: SceneWallPoint, c: SceneWallPoint) {
  const value = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
  if (Math.abs(value) < epsilon) return 0
  return value > 0 ? 1 : 2
}

function isPointOnSegment(a: SceneWallPoint, b: SceneWallPoint, c: SceneWallPoint) {
  return (
    b.x <= Math.max(a.x, c.x) + epsilon &&
    b.x + epsilon >= Math.min(a.x, c.x) &&
    b.y <= Math.max(a.y, c.y) + epsilon &&
    b.y + epsilon >= Math.min(a.y, c.y)
  )
}

export function sceneWallSegmentsIntersect(
  firstStart: SceneWallPoint,
  firstEnd: SceneWallPoint,
  secondStart: SceneWallPoint,
  secondEnd: SceneWallPoint,
) {
  const firstLength = Math.hypot(firstEnd.x - firstStart.x, firstEnd.y - firstStart.y)
  const secondLength = Math.hypot(secondEnd.x - secondStart.x, secondEnd.y - secondStart.y)
  if (firstLength <= epsilon || secondLength <= epsilon) return false

  const o1 = orientation(firstStart, firstEnd, secondStart)
  const o2 = orientation(firstStart, firstEnd, secondEnd)
  const o3 = orientation(secondStart, secondEnd, firstStart)
  const o4 = orientation(secondStart, secondEnd, firstEnd)

  if (o1 !== o2 && o3 !== o4) return true
  if (o1 === 0 && isPointOnSegment(firstStart, secondStart, firstEnd)) return true
  if (o2 === 0 && isPointOnSegment(firstStart, secondEnd, firstEnd)) return true
  if (o3 === 0 && isPointOnSegment(secondStart, firstStart, secondEnd)) return true
  if (o4 === 0 && isPointOnSegment(secondStart, firstEnd, secondEnd)) return true

  return false
}

export function isMovementBlockedBySceneWalls(input: {
  from: SceneWallPoint
  to: SceneWallPoint
  walls: SceneWallSegment[]
}) {
  return input.walls.some((wall) => (
    isWallBlockingMovement(wall) &&
    sceneWallSegmentsIntersect(input.from, input.to, wall.start, wall.end)
  ))
}

export function isMovementPathBlockedBySceneWalls(input: {
  points: SceneWallPoint[]
  walls: SceneWallSegment[]
}) {
  if (input.points.length < 2) return false

  return input.points.slice(1).some((point, index) =>
    isMovementBlockedBySceneWalls({
      from: input.points[index],
      to: point,
      walls: input.walls,
    }),
  )
}
