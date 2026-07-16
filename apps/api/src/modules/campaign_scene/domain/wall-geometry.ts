export type SceneWallPoint = { x: number; y: number }

type SceneWallSegmentBase = {
  id: string
  start: SceneWallPoint
  end: SceneWallPoint
  color?: string
  playerVisible: boolean
  blocksEffects: boolean
}

export type SceneWallSegment =
  | (SceneWallSegmentBase & { kind: 'wall' })
  | (SceneWallSegmentBase & { kind: 'door'; door: { open: boolean; locked: boolean; blocked: boolean; ajar: boolean } })

const epsilon = 0.000001

function hasValidSceneWallShape(value: unknown) {
  if (!value || typeof value !== 'object') return false
  const wall = value as { kind?: unknown; start?: Partial<SceneWallPoint>; end?: Partial<SceneWallPoint>; door?: unknown }
  if (wall.kind !== 'wall' && wall.kind !== 'door') return false
  if (!wall.start || !wall.end) return false
  if (!Number.isFinite(wall.start.x) || !Number.isFinite(wall.start.y)) return false
  if (!Number.isFinite(wall.end.x) || !Number.isFinite(wall.end.y)) return false
  if (wall.kind === 'door' && !wall.door) return false

  const start = wall.start as SceneWallPoint
  const end = wall.end as SceneWallPoint
  return Math.hypot(end.x - start.x, end.y - start.y) > epsilon
}

function normalizeSceneWallSegment(value: unknown): SceneWallSegment | null {
  if (!hasValidSceneWallShape(value)) return null

  const wall = value as SceneWallSegment
  if (wall.kind === 'wall') return { ...wall, playerVisible: wall.playerVisible ?? false, blocksEffects: wall.blocksEffects ?? true }
  return {
    ...wall,
    playerVisible: wall.playerVisible ?? false,
    blocksEffects: wall.blocksEffects ?? !wall.door.open,
    door: {
      open: wall.door.open,
      locked: wall.door.locked,
      blocked: wall.door.blocked,
      ajar: wall.door.ajar,
    },
  }
}

export function isSceneWallSegment(value: unknown): value is SceneWallSegment {
  return normalizeSceneWallSegment(value) !== null
}

export function normalizeSceneWalls(value: unknown): SceneWallSegment[] {
  if (!Array.isArray(value)) return []

  const walls: SceneWallSegment[] = []
  for (const item of value) {
    const wall = normalizeSceneWallSegment(item)
    if (wall) walls.push(wall)
  }
  return walls
}

export function isWallBlockingMovement(wall: SceneWallSegment) {
  return wall.kind === 'wall' || !wall.door.open
}

function orientation(a: SceneWallPoint, b: SceneWallPoint, c: SceneWallPoint) {
  const value = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
  if (Math.abs(value) < epsilon) return 0
  return value > 0 ? 1 : 2
}

function isPointOnSegment(a: SceneWallPoint, b: SceneWallPoint, c: SceneWallPoint) {
  return b.x <= Math.max(a.x, c.x) + epsilon && b.x + epsilon >= Math.min(a.x, c.x) &&
    b.y <= Math.max(a.y, c.y) + epsilon && b.y + epsilon >= Math.min(a.y, c.y)
}

export function sceneWallSegmentsIntersect(
  firstStart: SceneWallPoint,
  firstEnd: SceneWallPoint,
  secondStart: SceneWallPoint,
  secondEnd: SceneWallPoint,
) {
  if (Math.hypot(firstEnd.x - firstStart.x, firstEnd.y - firstStart.y) <= epsilon) return false
  if (Math.hypot(secondEnd.x - secondStart.x, secondEnd.y - secondStart.y) <= epsilon) return false

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
  return input.walls.some((wall) => isWallBlockingMovement(wall) &&
    sceneWallSegmentsIntersect(input.from, input.to, wall.start, wall.end))
}

export function isMovementPathBlockedBySceneWalls(input: {
  points: SceneWallPoint[]
  walls: SceneWallSegment[]
}) {
  if (input.points.length < 2) return false
  return input.points.slice(1).some((point, index) => isMovementBlockedBySceneWalls({
    from: input.points[index],
    to: point,
    walls: input.walls,
  }))
}
