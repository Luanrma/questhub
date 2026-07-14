import type { VttDoorState, VttMeasurementPoint, VttWallSegment } from './types'

const epsilon = 0.000001
const doorTouchTolerance = 0.45

export function isWallBlocking(wall: VttWallSegment) {
  if (wall.kind === 'wall') return true
  return !wall.door?.open
}

export function normalizeDoorState(door: Partial<VttDoorState> | undefined) {
  if (door?.open) return { open: true, locked: false, blocked: false, ajar: false }
  return {
    open: false,
    locked: Boolean(door?.locked),
    blocked: Boolean(door?.blocked),
    ajar: Boolean(door?.ajar),
  }
}

function orientation(a: VttMeasurementPoint, b: VttMeasurementPoint, c: VttMeasurementPoint) {
  const value = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
  if (Math.abs(value) < epsilon) return 0
  return value > 0 ? 1 : 2
}

function isPointOnSegment(a: VttMeasurementPoint, b: VttMeasurementPoint, c: VttMeasurementPoint) {
  return (
    b.x <= Math.max(a.x, c.x) + epsilon &&
    b.x + epsilon >= Math.min(a.x, c.x) &&
    b.y <= Math.max(a.y, c.y) + epsilon &&
    b.y + epsilon >= Math.min(a.y, c.y)
  )
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

function clampParameter(parameter: number) {
  return Math.min(Math.max(parameter, 0), 1)
}

function pointAtParameter(start: VttMeasurementPoint, end: VttMeasurementPoint, parameter: number) {
  return {
    x: start.x + (end.x - start.x) * parameter,
    y: start.y + (end.y - start.y) * parameter,
  }
}

function projectPointToWall(point: VttMeasurementPoint, wall: VttWallSegment) {
  const parameter = clampParameter(segmentParameter(wall.start, wall.end, point))
  const projected = pointAtParameter(wall.start, wall.end, parameter)
  return {
    point: projected,
    parameter,
    distance: segmentLength(point, projected),
  }
}

function nearestWallProjection(point: VttMeasurementPoint, walls: VttWallSegment[], tolerance = doorTouchTolerance) {
  let nearest: { wall: VttWallSegment; point: VttMeasurementPoint; parameter: number; distance: number } | null = null

  for (const wall of walls) {
    if (wall.kind !== 'wall') continue
    const projection = projectPointToWall(point, wall)
    if (projection.distance > tolerance) continue
    if (!nearest || projection.distance < nearest.distance) nearest = { wall, ...projection }
  }

  return nearest
}

function isDoorOnWall(door: VttWallSegment, wall: VttWallSegment) {
  const startProjection = projectPointToWall(door.start, wall)
  const endProjection = projectPointToWall(door.end, wall)
  return wall.kind === 'wall' && startProjection.distance <= doorTouchTolerance && endProjection.distance <= doorTouchTolerance
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

  const replacement: VttWallSegment[] = [
    { ...input.wall, id: input.createId(), start: input.wall.start, end: doorStart },
    { ...input.door, start: doorStart, end: doorEnd },
    { ...input.wall, id: input.createId(), start: doorEnd, end: input.wall.end },
  ].filter((wall) => segmentLength(wall.start, wall.end) > 0.001)

  return input.walls.flatMap((wall) => (wall.id === input.wall.id ? replacement : [wall]))
}

export function createRectangleWallSegments(input: {
  start: VttMeasurementPoint
  end: VttMeasurementPoint
  color?: string
  playerVisible?: boolean
  createId: () => string
}) {
  const topLeft = { x: input.start.x, y: input.start.y }
  const topRight = { x: input.end.x, y: input.start.y }
  const bottomRight = { x: input.end.x, y: input.end.y }
  const bottomLeft = { x: input.start.x, y: input.end.y }

  return [
    { id: input.createId(), kind: 'wall' as const, start: topLeft, end: topRight, color: input.color, playerVisible: Boolean(input.playerVisible) },
    { id: input.createId(), kind: 'wall' as const, start: topRight, end: bottomRight, color: input.color, playerVisible: Boolean(input.playerVisible) },
    { id: input.createId(), kind: 'wall' as const, start: bottomRight, end: bottomLeft, color: input.color, playerVisible: Boolean(input.playerVisible) },
    { id: input.createId(), kind: 'wall' as const, start: bottomLeft, end: topLeft, color: input.color, playerVisible: Boolean(input.playerVisible) },
  ].filter((wall) => segmentLength(wall.start, wall.end) > 0.001)
}

export function applyDoorToWalls(input: {
  walls: VttWallSegment[]
  door: VttWallSegment
  createId: () => string
}) {
  const targetWall = input.walls.find((wall) => isDoorOnWall(input.door, wall))

  if (targetWall) {
    return replaceWallSliceWithDoor({
      walls: input.walls,
      wall: targetWall,
      door: input.door,
      doorStart: projectPointToWall(input.door.start, targetWall).point,
      doorEnd: projectPointToWall(input.door.end, targetWall).point,
      createId: input.createId,
    })
  }

  const startProjection = nearestWallProjection(input.door.start, input.walls)
  const endProjection = nearestWallProjection(input.door.end, input.walls)

  if (startProjection && !endProjection) {
    return replaceWallSliceWithDoor({
      walls: input.walls,
      wall: startProjection.wall,
      door: input.door,
      doorStart: startProjection.point,
      doorEnd: projectPointToWall(input.door.end, startProjection.wall).point,
      createId: input.createId,
    })
  }

  if (!startProjection && endProjection) {
    return replaceWallSliceWithDoor({
      walls: input.walls,
      wall: endProjection.wall,
      door: input.door,
      doorStart: projectPointToWall(input.door.start, endProjection.wall).point,
      doorEnd: endProjection.point,
      createId: input.createId,
    })
  }

  if (!startProjection || !endProjection || startProjection.wall.id === endProjection.wall.id) return input.walls

  return [...input.walls, { ...input.door, start: startProjection.point, end: endProjection.point }]
}

export function segmentsIntersect(
  firstStart: VttMeasurementPoint,
  firstEnd: VttMeasurementPoint,
  secondStart: VttMeasurementPoint,
  secondEnd: VttMeasurementPoint,
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

export function isMovementBlockedByWalls(input: {
  from: VttMeasurementPoint
  to: VttMeasurementPoint
  walls: VttWallSegment[]
}) {
  return input.walls.some((wall) => (
    isWallBlocking(wall) &&
    segmentsIntersect(input.from, input.to, wall.start, wall.end)
  ))
}

export function isMovementPathBlockedByWalls(input: {
  points: VttMeasurementPoint[]
  walls: VttWallSegment[]
}) {
  if (input.points.length < 2) return false

  return input.points.slice(1).some((point, index) =>
    isMovementBlockedByWalls({
      from: input.points[index],
      to: point,
      walls: input.walls,
    }),
  )
}
