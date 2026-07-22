import type { VttDoorState, VttMeasurementPoint, VttWallSegment } from './types'

const epsilon = 0.000001

export const doorSnapToleranceInRenderedPixels = 12

function orientation(a: VttMeasurementPoint, b: VttMeasurementPoint, c: VttMeasurementPoint) {
  const value = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
  if (Math.abs(value) < epsilon) return 0
  return value > 0 ? 1 : 2
}

function isPointOnSegment(a: VttMeasurementPoint, b: VttMeasurementPoint, c: VttMeasurementPoint) {
  return b.x <= Math.max(a.x, c.x) + epsilon && b.x + epsilon >= Math.min(a.x, c.x) &&
    b.y <= Math.max(a.y, c.y) + epsilon && b.y + epsilon >= Math.min(a.y, c.y)
}

function segmentsIntersect(
  firstStart: VttMeasurementPoint,
  firstEnd: VttMeasurementPoint,
  secondStart: VttMeasurementPoint,
  secondEnd: VttMeasurementPoint,
) {
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
  from: VttMeasurementPoint
  to: VttMeasurementPoint
  walls: VttWallSegment[]
}) {
  return input.walls.some((wall) => {
    const blocksMovement = wall.kind === 'wall' || (wall.kind === 'door' ? !wall.door?.open : !wall.window?.open)
    return blocksMovement && segmentsIntersect(input.from, input.to, wall.start, wall.end)
  })
}

export function visibleWallSegmentsForRole(walls: VttWallSegment[], isMaster: boolean) {
  return isMaster ? walls : walls.filter((wall) => wall.playerVisible)
}

export function normalizeDoorState(door: Partial<VttDoorState> | undefined): VttDoorState {
  if (door?.open) return { open: true, locked: false, blocked: false, ajar: false }

  return {
    open: false,
    locked: Boolean(door?.locked),
    blocked: Boolean(door?.blocked),
    ajar: Boolean(door?.ajar),
  }
}

function segmentLength(start: VttMeasurementPoint, end: VttMeasurementPoint) {
  return Math.hypot(end.x - start.x, end.y - start.y)
}

function segmentParameter(start: VttMeasurementPoint, end: VttMeasurementPoint, point: VttMeasurementPoint) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const lengthSquared = dx * dx + dy * dy
  if (lengthSquared <= epsilon) return 0
  return ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared
}

function pointAtParameter(start: VttMeasurementPoint, end: VttMeasurementPoint, parameter: number) {
  return {
    x: start.x + (end.x - start.x) * parameter,
    y: start.y + (end.y - start.y) * parameter,
  }
}

function projectPointToWall(point: VttMeasurementPoint, wall: VttWallSegment) {
  const parameter = Math.min(Math.max(segmentParameter(wall.start, wall.end, point), 0), 1)
  const projected = pointAtParameter(wall.start, wall.end, parameter)

  return {
    point: projected,
    distance: segmentLength(point, projected),
  }
}

function findDoorTargetWall(door: VttWallSegment, walls: VttWallSegment[], snapTolerance: number) {
  let nearest: { wall: VttWallSegment; start: VttMeasurementPoint; end: VttMeasurementPoint; distance: number } | null = null

  for (const wall of walls) {
    if (wall.kind !== 'wall') continue
    const startProjection = projectPointToWall(door.start, wall)
    const endProjection = projectPointToWall(door.end, wall)
    if (startProjection.distance > snapTolerance || endProjection.distance > snapTolerance) continue

    const distance = startProjection.distance + endProjection.distance
    if (!nearest || distance < nearest.distance) {
      nearest = { wall, start: startProjection.point, end: endProjection.point, distance }
    }
  }

  return nearest
}

function replaceWallSliceWithDoor(input: {
  walls: VttWallSegment[]
  wall: VttWallSegment
  door: VttWallSegment
  doorStart: VttMeasurementPoint
  doorEnd: VttMeasurementPoint
  createId: () => string
}) {
  const startParameter = segmentParameter(input.wall.start, input.wall.end, input.doorStart)
  const endParameter = segmentParameter(input.wall.start, input.wall.end, input.doorEnd)
  const firstParameter = Math.min(startParameter, endParameter)
  const secondParameter = Math.max(startParameter, endParameter)
  const doorStart = pointAtParameter(input.wall.start, input.wall.end, firstParameter)
  const doorEnd = pointAtParameter(input.wall.start, input.wall.end, secondParameter)
  if (segmentLength(doorStart, doorEnd) <= 0.001) return input.walls

  const replacement: VttWallSegment[] = [
    { ...input.wall, id: input.createId(), start: input.wall.start, end: doorStart },
    { ...input.door, start: doorStart, end: doorEnd },
    { ...input.wall, id: input.createId(), start: doorEnd, end: input.wall.end },
  ].filter((wall) => segmentLength(wall.start, wall.end) > 0.001)

  return input.walls.flatMap((wall) => wall.id === input.wall.id ? replacement : [wall])
}

export function createRectangleWallSegments(input: {
  start: VttMeasurementPoint
  end: VttMeasurementPoint
  color?: string
  playerVisible?: boolean
  blocksEffects?: boolean
  createId: () => string
}) {
  const topLeft = { x: input.start.x, y: input.start.y }
  const topRight = { x: input.end.x, y: input.start.y }
  const bottomRight = { x: input.end.x, y: input.end.y }
  const bottomLeft = { x: input.start.x, y: input.end.y }

  return [
    { id: input.createId(), kind: 'wall' as const, start: topLeft, end: topRight, color: input.color, playerVisible: Boolean(input.playerVisible), blocksEffects: input.blocksEffects ?? true },
    { id: input.createId(), kind: 'wall' as const, start: topRight, end: bottomRight, color: input.color, playerVisible: Boolean(input.playerVisible), blocksEffects: input.blocksEffects ?? true },
    { id: input.createId(), kind: 'wall' as const, start: bottomRight, end: bottomLeft, color: input.color, playerVisible: Boolean(input.playerVisible), blocksEffects: input.blocksEffects ?? true },
    { id: input.createId(), kind: 'wall' as const, start: bottomLeft, end: topLeft, color: input.color, playerVisible: Boolean(input.playerVisible), blocksEffects: input.blocksEffects ?? true },
  ].filter((wall) => segmentLength(wall.start, wall.end) > 0.001)
}

export function applyDoorToWalls(input: {
  walls: VttWallSegment[]
  door: VttWallSegment
  createId: () => string
  snapTolerance?: number
}) {
  const target = findDoorTargetWall(
    input.door,
    input.walls,
    input.snapTolerance ?? doorSnapToleranceInRenderedPixels,
  )
  if (!target) return input.walls

  return replaceWallSliceWithDoor({
    ...input,
    wall: target.wall,
    doorStart: target.start,
    doorEnd: target.end,
  })
}
