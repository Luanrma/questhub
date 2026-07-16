import type { VttDoorState, VttMeasurementPoint, VttWallSegment } from './types'

const epsilon = 0.000001
const doorTouchTolerance = 0.75

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

function nearestWallProjection(point: VttMeasurementPoint, walls: VttWallSegment[]) {
  let nearest: { wall: VttWallSegment; point: VttMeasurementPoint; distance: number } | null = null

  for (const wall of walls) {
    if (wall.kind !== 'wall') continue
    const projection = projectPointToWall(point, wall)
    if (projection.distance > doorTouchTolerance) continue
    if (!nearest || projection.distance < nearest.distance) nearest = { wall, ...projection }
  }

  return nearest
}

function isDoorOnWall(door: VttWallSegment, wall: VttWallSegment) {
  return wall.kind === 'wall'
    && projectPointToWall(door.start, wall).distance <= doorTouchTolerance
    && projectPointToWall(door.end, wall).distance <= doorTouchTolerance
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
}) {
  const targetWall = input.walls.find((wall) => isDoorOnWall(input.door, wall))

  if (targetWall) {
    return replaceWallSliceWithDoor({
      ...input,
      wall: targetWall,
      doorStart: projectPointToWall(input.door.start, targetWall).point,
      doorEnd: projectPointToWall(input.door.end, targetWall).point,
    })
  }

  const startProjection = nearestWallProjection(input.door.start, input.walls)
  const endProjection = nearestWallProjection(input.door.end, input.walls)

  if (startProjection && !endProjection) {
    return replaceWallSliceWithDoor({
      ...input,
      wall: startProjection.wall,
      doorStart: startProjection.point,
      doorEnd: projectPointToWall(input.door.end, startProjection.wall).point,
    })
  }

  if (!startProjection && endProjection) {
    return replaceWallSliceWithDoor({
      ...input,
      wall: endProjection.wall,
      doorStart: projectPointToWall(input.door.start, endProjection.wall).point,
      doorEnd: endProjection.point,
    })
  }

  if (!startProjection || !endProjection || startProjection.wall.id === endProjection.wall.id) return input.walls
  return [...input.walls, { ...input.door, start: startProjection.point, end: endProjection.point }]
}
