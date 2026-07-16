import type { VttPlayerToken, VttWallSegment } from '../../table/domain/types'
import type {
  AreaCalculationContext,
  AreaPlacement,
  AreaPoint,
  AreaRenderModel,
  CampaignAreaTemplate,
  CellInclusionRule,
  CoveredAreaCell,
} from './types'

const EPSILON = 0.001
const HEX_ROW_STEP = Math.sqrt(3) / 2

function rotate(point: AreaPoint, degrees: number): AreaPoint {
  const radians = degrees * Math.PI / 180
  const cosine = Math.cos(radians)
  const sine = Math.sin(radians)
  return { x: point.x * cosine - point.y * sine, y: point.x * sine + point.y * cosine }
}

function translate(point: AreaPoint, origin: AreaPoint): AreaPoint {
  return { x: point.x + origin.x, y: point.y + origin.y }
}

function dimensionToPixels(value: number | undefined, template: CampaignAreaTemplate, gridSize: number, metersPerCell: number) {
  const dimension = value ?? 0
  return template.measurementMode === 'GRID_CELLS'
    ? dimension * gridSize
    : dimension / Math.max(metersPerCell, EPSILON) * gridSize
}

function circlePolygon(radius: number, segments = 48) {
  return Array.from({ length: segments }, (_, index) => {
    const angle = index / segments * Math.PI * 2
    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius }
  })
}

export function buildAreaPolygon(placement: AreaPlacement, context: Pick<AreaCalculationContext, 'grid'>) {
  const { template, origin, rotationDegrees, scale } = placement
  const toPixels = (value: number | undefined) => dimensionToPixels(value, template, context.grid.size, context.grid.metersPerCell) * scale
  let local: AreaPoint[]
  let innerLocal: AreaPoint[] | undefined

  switch (template.shape) {
    case 'CIRCLE': {
      local = circlePolygon(toPixels(template.dimensions.radius))
      break
    }
    case 'RING': {
      local = circlePolygon(toPixels(template.dimensions.radius))
      innerLocal = circlePolygon(toPixels(template.dimensions.innerRadius))
      break
    }
    case 'CONE': {
      const length = toPixels(template.dimensions.length)
      const angle = template.dimensions.angleDegrees ?? (Math.atan2(toPixels(template.dimensions.endWidth) / 2, length) * 360 / Math.PI)
      const half = angle / 2 * Math.PI / 180
      const arc = Array.from({ length: 25 }, (_, index) => {
        const current = -half + index / 24 * half * 2
        return { x: Math.cos(current) * length, y: Math.sin(current) * length }
      })
      const startHalfWidth = toPixels(template.dimensions.startWidth) / 2
      local = startHalfWidth > 0
        ? [{ x: 0, y: -startHalfWidth }, ...arc, { x: 0, y: startHalfWidth }]
        : [{ x: 0, y: 0 }, ...arc]
      break
    }
    case 'LINE': {
      const length = toPixels(template.dimensions.length)
      const halfWidth = toPixels(template.dimensions.width) / 2
      local = [{ x: 0, y: -halfWidth }, { x: length, y: -halfWidth }, { x: length, y: halfWidth }, { x: 0, y: halfWidth }]
      break
    }
    case 'RECTANGLE': {
      const length = toPixels(template.dimensions.length)
      const halfWidth = toPixels(template.dimensions.width) / 2
      local = [{ x: 0, y: -halfWidth }, { x: length, y: -halfWidth }, { x: length, y: halfWidth }, { x: 0, y: halfWidth }]
      break
    }
    case 'POLYGON': {
      local = (template.dimensions.polygonPoints ?? []).map((point) => ({ x: toPixels(point.x), y: toPixels(point.y) }))
      break
    }
  }

  const transform = (point: AreaPoint) => translate(rotate(point, rotationDegrees), origin)
  return { polygon: local.map(transform), innerPolygon: innerLocal?.map(transform) }
}

export function pointInPolygon(point: AreaPoint, polygon: AreaPoint[]) {
  let inside = false
  for (let current = 0, previous = polygon.length - 1; current < polygon.length; previous = current++) {
    const a = polygon[current]
    const b = polygon[previous]
    const intersects = (a.y > point.y) !== (b.y > point.y) && point.x < (b.x - a.x) * (point.y - a.y) / (b.y - a.y || EPSILON) + a.x
    if (intersects) inside = !inside
  }
  return inside
}

function orientation(a: AreaPoint, b: AreaPoint, c: AreaPoint) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
}

function segmentsProperlyIntersect(a: AreaPoint, b: AreaPoint, c: AreaPoint, d: AreaPoint) {
  const first = orientation(a, b, c)
  const second = orientation(a, b, d)
  const third = orientation(c, d, a)
  const fourth = orientation(c, d, b)
  return first * second < -EPSILON && third * fourth < -EPSILON
}

function polygonEdges(polygon: AreaPoint[]) {
  return polygon.map((point, index) => [point, polygon[(index + 1) % polygon.length]] as const)
}

function polygonsOverlap(a: AreaPoint[], b: AreaPoint[]) {
  if (a.some((point) => pointInPolygon(point, b)) || b.some((point) => pointInPolygon(point, a))) return true
  return polygonEdges(a).some(([aStart, aEnd]) => polygonEdges(b).some(([bStart, bEnd]) => segmentsProperlyIntersect(aStart, aEnd, bStart, bEnd)))
}

function polygonCenter(polygon: AreaPoint[]) {
  return polygon.reduce((total, point) => ({ x: total.x + point.x / polygon.length, y: total.y + point.y / polygon.length }), { x: 0, y: 0 })
}

function boundingBox(polygon: AreaPoint[]) {
  return polygon.reduce((box, point) => ({
    minX: Math.min(box.minX, point.x), minY: Math.min(box.minY, point.y),
    maxX: Math.max(box.maxX, point.x), maxY: Math.max(box.maxY, point.y),
  }), { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity })
}

function sampleCoverage(cell: AreaPoint[], area: AreaPoint[], inner?: AreaPoint[]) {
  const box = boundingBox(cell)
  let inside = 0
  const samples = 7
  for (let row = 0; row < samples; row += 1) {
    for (let column = 0; column < samples; column += 1) {
      const point = { x: box.minX + (column + 0.5) / samples * (box.maxX - box.minX), y: box.minY + (row + 0.5) / samples * (box.maxY - box.minY) }
      if (!pointInPolygon(point, cell)) continue
      if (pointInPolygon(point, area) && (!inner || !pointInPolygon(point, inner))) inside += 1
    }
  }
  return inside / (samples * samples)
}

function cellIncluded(cell: AreaPoint[], area: AreaPoint[], inner: AreaPoint[] | undefined, rule: CellInclusionRule) {
  const validPoint = (point: AreaPoint) => pointInPolygon(point, area) && (!inner || !pointInPolygon(point, inner))
  if (rule === 'CENTER_INSIDE') return validPoint(polygonCenter(cell))
  if (rule === 'FULLY_INSIDE') return cell.every(validPoint)
  const coverage = sampleCoverage(cell, area, inner)
  if (rule === 'HALF_OR_MORE') return coverage >= 0.5
  return coverage > 0 || (polygonsOverlap(cell, area) && (!inner || !cell.every((point) => pointInPolygon(point, inner))))
}

function blocksEffects(wall: VttWallSegment) {
  if (wall.blocksEffects !== undefined) return wall.blocksEffects
  return wall.kind === 'wall' || !wall.door?.open
}

function hasLineOfEffect(origin: AreaPoint, target: AreaPoint, walls: VttWallSegment[], gridSize: number) {
  return !walls.some((wall) => {
    if (!blocksEffects(wall)) return false
    const start = { x: wall.start.x * gridSize, y: wall.start.y * gridSize }
    const end = { x: wall.end.x * gridSize, y: wall.end.y * gridSize }
    return segmentsProperlyIntersect(origin, target, start, end)
  })
}

function clipTargetAtWalls(origin: AreaPoint, target: AreaPoint, walls: VttWallSegment[], gridSize: number) {
  const ray = { x: target.x - origin.x, y: target.y - origin.y }
  let closest = 1
  for (const wall of walls) {
    if (!blocksEffects(wall)) continue
    const start = { x: wall.start.x * gridSize, y: wall.start.y * gridSize }
    const segment = { x: (wall.end.x - wall.start.x) * gridSize, y: (wall.end.y - wall.start.y) * gridSize }
    const determinant = ray.x * segment.y - ray.y * segment.x
    if (Math.abs(determinant) < EPSILON) continue
    const offset = { x: start.x - origin.x, y: start.y - origin.y }
    const rayAmount = (offset.x * segment.y - offset.y * segment.x) / determinant
    const segmentAmount = (offset.x * ray.y - offset.y * ray.x) / determinant
    if (rayAmount <= EPSILON || rayAmount >= closest || segmentAmount < 0 || segmentAmount > 1) continue
    closest = rayAmount
  }
  if (closest === 1) return target
  const safeAmount = Math.max(0, closest - EPSILON)
  return { x: origin.x + ray.x * safeAmount, y: origin.y + ray.y * safeAmount }
}

function squareCells(box: ReturnType<typeof boundingBox>, context: AreaCalculationContext) {
  const size = context.grid.size
  const minColumn = Math.max(0, Math.floor(box.minX / size))
  const maxColumn = Math.min(Math.ceil(context.board.width / size) - 1, Math.floor(box.maxX / size))
  const minRow = Math.max(0, Math.floor(box.minY / size))
  const maxRow = Math.min(Math.ceil(context.board.height / size) - 1, Math.floor(box.maxY / size))
  const cells: CoveredAreaCell[] = []
  for (let row = minRow; row <= maxRow; row += 1) {
    for (let column = minColumn; column <= maxColumn; column += 1) {
      cells.push({ id: `square:${column}:${row}`, polygon: [
        { x: column * size, y: row * size }, { x: (column + 1) * size, y: row * size },
        { x: (column + 1) * size, y: (row + 1) * size }, { x: column * size, y: (row + 1) * size },
      ] })
    }
  }
  return cells
}

function hexCellPolygon(center: AreaPoint, size: number) {
  const radius = size / Math.sqrt(3)
  return [
    { x: center.x, y: center.y - radius }, { x: center.x + size / 2, y: center.y - radius / 2 },
    { x: center.x + size / 2, y: center.y + radius / 2 }, { x: center.x, y: center.y + radius },
    { x: center.x - size / 2, y: center.y + radius / 2 }, { x: center.x - size / 2, y: center.y - radius / 2 },
  ]
}

function hexCells(box: ReturnType<typeof boundingBox>, context: AreaCalculationContext) {
  const size = context.grid.size
  const rowStep = HEX_ROW_STEP * size
  const minRow = Math.max(0, Math.floor(box.minY / rowStep) - 1)
  const maxRow = Math.min(Math.ceil(context.board.height / rowStep), Math.ceil(box.maxY / rowStep) + 1)
  const cells: CoveredAreaCell[] = []
  for (let row = minRow; row <= maxRow; row += 1) {
    const offset = row % 2 === 0 ? 0 : 0.5
    const minColumn = Math.max(0, Math.floor(box.minX / size - offset) - 1)
    const maxColumn = Math.min(Math.ceil(context.board.width / size), Math.ceil(box.maxX / size - offset) + 1)
    for (let column = minColumn; column <= maxColumn; column += 1) {
      const center = { x: (column + offset) * size, y: row * rowStep }
      cells.push({ id: `hex:${column}:${row}`, polygon: hexCellPolygon(center, size) })
    }
  }
  return cells
}

function distanceToSegment(point: AreaPoint, start: AreaPoint, end: AreaPoint) {
  const lengthSquared = (end.x - start.x) ** 2 + (end.y - start.y) ** 2
  if (!lengthSquared) return Math.hypot(point.x - start.x, point.y - start.y)
  const amount = Math.max(0, Math.min(1, ((point.x - start.x) * (end.x - start.x) + (point.y - start.y) * (end.y - start.y)) / lengthSquared))
  return Math.hypot(point.x - (start.x + amount * (end.x - start.x)), point.y - (start.y + amount * (end.y - start.y)))
}

function tokenCoverage(token: VttPlayerToken, polygon: AreaPoint[], innerPolygon: AreaPoint[] | undefined, gridSize: number) {
  const center = { x: token.position.x * gridSize, y: token.position.y * gridSize }
  const radius = token.size * gridSize / 2
  const centerInside = pointInPolygon(center, polygon) && (!innerPolygon || !pointInPolygon(center, innerPolygon))
  const edgeOverlap = polygonEdges(polygon).some(([start, end]) => distanceToSegment(center, start, end) < radius - EPSILON)
  const areaVertexInside = polygon.some((point) => Math.hypot(point.x - center.x, point.y - center.y) < radius - EPSILON)
  const anyOverlap = centerInside || edgeOverlap || areaVertexInside
  if (!anyOverlap) return { anyOverlap: false, ratio: 0, centerInside, fullyInside: false }

  let covered = 0
  const samples = 11
  let circleSamples = 0
  for (let row = 0; row < samples; row += 1) {
    for (let column = 0; column < samples; column += 1) {
      const point = { x: center.x - radius + (column + 0.5) / samples * radius * 2, y: center.y - radius + (row + 0.5) / samples * radius * 2 }
      if (Math.hypot(point.x - center.x, point.y - center.y) >= radius) continue
      circleSamples += 1
      if (pointInPolygon(point, polygon) && (!innerPolygon || !pointInPolygon(point, innerPolygon))) covered += 1
    }
  }
  const circumferenceInside = Array.from({ length: 24 }, (_, index) => {
    const angle = index / 24 * Math.PI * 2
    const point = { x: center.x + Math.cos(angle) * (radius - EPSILON), y: center.y + Math.sin(angle) * (radius - EPSILON) }
    return pointInPolygon(point, polygon) && (!innerPolygon || !pointInPolygon(point, innerPolygon))
  }).every(Boolean)
  return { anyOverlap, ratio: circleSamples ? covered / circleSamples : 0, centerInside, fullyInside: circumferenceInside }
}

function tokenSpacePolygon(token: VttPlayerToken, gridSize: number) {
  const center = { x: token.position.x * gridSize, y: token.position.y * gridSize }
  const halfSize = token.size * gridSize / 2
  return [
    { x: center.x - halfSize, y: center.y - halfSize },
    { x: center.x + halfSize, y: center.y - halfSize },
    { x: center.x + halfSize, y: center.y + halfSize },
    { x: center.x - halfSize, y: center.y + halfSize },
  ]
}

function tokenOccupiesCoveredCell(token: VttPlayerToken, coveredCells: CoveredAreaCell[], gridSize: number) {
  const tokenSpace = tokenSpacePolygon(token, gridSize)
  return coveredCells.some((cell) => sampleCoverage(cell.polygon, tokenSpace) > 0 || sampleCoverage(tokenSpace, cell.polygon) > 0)
}

function touchedTokens(placement: AreaPlacement, polygon: AreaPoint[], innerPolygon: AreaPoint[] | undefined, coveredCells: CoveredAreaCell[], context: AreaCalculationContext) {
  return context.tokens.filter((token) => {
    const center = { x: token.position.x * context.grid.size, y: token.position.y * context.grid.size }
    if (placement.template.propagationMode === 'BLOCKED_BY_WALLS' && !hasLineOfEffect(placement.origin, center, context.walls, context.grid.size)) return false
    if (placement.template.tokenIntersectionRule === 'COVERED_CELLS') return tokenOccupiesCoveredCell(token, coveredCells, context.grid.size)
    const coverage = tokenCoverage(token, polygon, innerPolygon, context.grid.size)
    switch (placement.template.tokenIntersectionRule) {
      case 'CENTER_INSIDE': return coverage.centerInside
      case 'HALF_OR_MORE': return coverage.ratio >= 0.5
      case 'FULLY_INSIDE': return coverage.fullyInside
      case 'MANUAL':
      case 'ANY_OVERLAP': return coverage.anyOverlap
    }
  }).map((token) => token.id)
}

export function calculateAreaRender(placement: AreaPlacement, context: AreaCalculationContext): AreaRenderModel {
  const built = buildAreaPolygon(placement, context)
  const polygon = placement.template.propagationMode === 'BLOCKED_BY_WALLS'
    ? built.polygon.map((point) => clipTargetAtWalls(placement.origin, point, context.walls, context.grid.size))
    : built.polygon
  const innerPolygon = built.innerPolygon
  const candidates = !context.grid.visible ? [] : context.grid.shape === 'hex' ? hexCells(boundingBox(polygon), context) : squareCells(boundingBox(polygon), context)
  const coveredCells = candidates.filter((cell) => {
    if (!cellIncluded(cell.polygon, polygon, innerPolygon, placement.template.cellInclusionRule)) return false
    if (placement.template.propagationMode !== 'BLOCKED_BY_WALLS') return true
    return hasLineOfEffect(placement.origin, polygonCenter(cell.polygon), context.walls, context.grid.size)
  })
  return { ...placement, polygon, innerPolygon, coveredCells, touchedTokenIds: touchedTokens(placement, polygon, innerPolygon, coveredCells, context) }
}

export function snapAreaOrigin(point: AreaPoint, template: CampaignAreaTemplate, context: AreaCalculationContext) {
  if (template.originMode === 'FREE_POINT') return point
  const size = context.grid.size
  if (template.originMode === 'GRID_INTERSECTION') return { x: Math.round(point.x / size) * size, y: Math.round(point.y / size) * size }
  if (context.grid.shape === 'hex') {
    const row = Math.max(0, Math.round(point.y / (HEX_ROW_STEP * size)))
    const offset = row % 2 === 0 ? 0 : 0.5
    const column = Math.max(0, Math.round(point.x / size - offset))
    return { x: (column + offset) * size, y: row * HEX_ROW_STEP * size }
  }
  return { x: (Math.floor(point.x / size) + 0.5) * size, y: (Math.floor(point.y / size) + 0.5) * size }
}

export function directionDegrees(origin: AreaPoint, pointer: AreaPoint) {
  return Math.atan2(pointer.y - origin.y, pointer.x - origin.x) * 180 / Math.PI
}
