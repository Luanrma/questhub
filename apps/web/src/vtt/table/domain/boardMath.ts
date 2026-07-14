import type { VttGridSettings, VttGridShape } from '../../grid'
import { boardGridLimits } from '../config/constants'
import type { VttGridBounds, VttMeasurement, VttMeasurementPoint, VttPanOffset, VttPlayerToken, VttSelectionArea, VttTableScene } from './types'

const hexRowStepUnits = Math.sqrt(3) / 2

export function getTokenSize(gridSettings: VttGridSettings) {
  return gridSettings.size
}

export function scaleGridSettings(settings: VttGridSettings, zoomPercent: number): VttGridSettings {
  const scale = zoomPercent / 100

  return {
    ...settings,
    size: settings.size * scale,
    lineWidth: Math.max(1, settings.lineWidth * scale),
  }
}

export function getDefaultBoardPixelSize(gridSize: number, gridShape: VttGridShape = 'square') {
  if (gridShape === 'hex') {
    return {
      width: boardGridLimits.columns * gridSize,
      height: (boardGridLimits.rows * hexRowStepUnits + 0.5) * gridSize,
    }
  }

  return {
    width: boardGridLimits.columns * gridSize,
    height: boardGridLimits.rows * gridSize,
  }
}

export function getBoardPixelSize(gridSize: number, zoomPercent: number, scene: VttTableScene | null) {
  if (!scene) return getDefaultBoardPixelSize(gridSize)

  const scale = zoomPercent / 100
  return {
    width: scene.width * scale,
    height: scene.height * scale,
  }
}

export function clampPanOffset(offset: VttPanOffset, viewport: VttGridBounds, board: VttGridBounds) {
  if (!viewport.width || !viewport.height || !board.width || !board.height) return offset
  const centeredX = (viewport.width - board.width) / 2
  const centeredY = (viewport.height - board.height) / 2
  const minX = viewport.width >= board.width ? centeredX : viewport.width - board.width
  const maxX = viewport.width >= board.width ? centeredX : 0
  const minY = viewport.height >= board.height ? centeredY : viewport.height - board.height
  const maxY = viewport.height >= board.height ? centeredY : 0

  return {
    x: clampNumber(offset.x, minX, maxX),
    y: clampNumber(offset.y, minY, maxY),
  }
}

export function getCenteredPanOffset(viewport: VttGridBounds, board: VttGridBounds) {
  if (!viewport.width || !viewport.height || !board.width || !board.height) return { x: 0, y: 0 }

  return clampPanOffset(
    {
      x: (viewport.width - board.width) / 2,
      y: (viewport.height - board.height) / 2,
    },
    viewport,
    board,
  )
}

export function clampNumber(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min
  return Math.min(Math.max(value, min), Math.max(min, max))
}

export function clampTokenGridPosition(position: VttPlayerToken['position'], bounds: VttGridBounds, gridSize: number) {
  const maxX = bounds.width / gridSize - 0.5
  const maxY = bounds.height / gridSize - 0.5

  return {
    x: clampNumber(position.x, 0.5, maxX),
    y: clampNumber(position.y, 0.5, maxY),
  }
}

export function snapSquareTokenPosition(position: VttPlayerToken['position']) {
  return {
    x: Math.floor(position.x) + 0.5,
    y: Math.floor(position.y) + 0.5,
  }
}

export function isTokenCenterVisible(center: VttPlayerToken['position'], bounds: VttGridBounds, gridSize: number) {
  const pixelCenter = {
    x: center.x * gridSize,
    y: center.y * gridSize,
  }

  return (
    pixelCenter.x >= gridSize / 2 &&
    pixelCenter.y >= gridSize / 2 &&
    pixelCenter.x <= bounds.width - gridSize / 2 &&
    pixelCenter.y <= bounds.height - gridSize / 2
  )
}

export function snapHexTokenPosition(position: VttPlayerToken['position'], bounds?: VttGridBounds, gridSize?: number) {
  const rowEstimate = Math.round(position.y / hexRowStepUnits)
  let closest = { x: 0.5, y: hexRowStepUnits }
  let closestDistance = Number.POSITIVE_INFINITY

  for (let row = Math.max(0, rowEstimate - 3); row <= rowEstimate + 3; row += 1) {
    const rowOffset = row % 2 === 0 ? 0 : 0.5
    const colEstimate = Math.round(position.x - rowOffset)

    for (let col = Math.max(0, colEstimate - 3); col <= colEstimate + 3; col += 1) {
      const candidate = {
        x: col + rowOffset,
        y: row * hexRowStepUnits,
      }

      if (bounds && gridSize && !isTokenCenterVisible(candidate, bounds, gridSize)) continue

      const distance = (candidate.x - position.x) ** 2 + (candidate.y - position.y) ** 2
      if (distance >= closestDistance) continue

      closest = candidate
      closestDistance = distance
    }
  }

  return closest
}

export function snapTokenGridPosition(
  position: VttPlayerToken['position'],
  gridShape: VttGridShape,
  bounds?: VttGridBounds,
  gridSize?: number,
) {
  if (gridShape === 'hex') return snapHexTokenPosition(position, bounds, gridSize)
  return snapSquareTokenPosition(position)
}

export function normalizeTokenPosition(
  position: VttPlayerToken['position'],
  gridShape: VttGridShape,
  bounds?: VttGridBounds,
  gridSize?: number,
) {
  if (bounds && gridSize) return snapTokenGridPosition(clampTokenGridPosition(position, bounds, gridSize), gridShape, bounds, gridSize)

  return {
    x: Math.max(0, Number.isFinite(position.x) ? position.x : 0),
    y: Math.max(0, Number.isFinite(position.y) ? position.y : 0),
  }
}

export function normalizeTableToken(token: VttPlayerToken, gridShape: VttGridShape) {
  return {
    ...token,
    source: token.source ?? 'character',
    ownerUserId: token.ownerUserId ?? '',
    ownerName: token.ownerName ?? token.name,
    role: token.role ?? 'PLAYER',
    hidden: Boolean(token.hidden),
    position: normalizeTokenPosition(token.position, gridShape),
  }
}

export function tokenPixelPosition(token: VttPlayerToken, gridSize: number) {
  return {
    x: token.position.x * gridSize - gridSize / 2,
    y: token.position.y * gridSize - gridSize / 2,
  }
}

export function tokenGridPositionFromPixelCenter(
  position: VttPlayerToken['position'],
  bounds: VttGridBounds,
  gridSize: number,
  gridShape: VttGridShape,
) {
  return normalizeTokenPosition(
    {
      x: position.x / gridSize,
      y: position.y / gridSize,
    },
    gridShape,
    bounds,
    gridSize,
  )
}

export function clampMeasurementPoint(point: VttMeasurementPoint, bounds: VttGridBounds) {
  return {
    x: clampNumber(point.x, 0, bounds.width),
    y: clampNumber(point.y, 0, bounds.height),
  }
}

export function selectionAreaBounds(area: VttSelectionArea) {
  return {
    left: Math.min(area.start.x, area.end.x),
    right: Math.max(area.start.x, area.end.x),
    top: Math.min(area.start.y, area.end.y),
    bottom: Math.max(area.start.y, area.end.y),
  }
}

export function isTokenInsideSelectionArea(token: VttPlayerToken, area: VttSelectionArea) {
  const bounds = selectionAreaBounds(area)
  return (
    token.position.x >= bounds.left &&
    token.position.x <= bounds.right &&
    token.position.y >= bounds.top &&
    token.position.y <= bounds.bottom
  )
}

export function formatMeters(value: number) {
  const precision = value < 10 ? 1 : 0
  return `${value.toFixed(precision).replace('.', ',')} m`
}

export function measurementLabel(measurement: VttMeasurement, metersPerCell: number) {
  if (measurement.shape === 'hex') {
    const steps = Math.max(0, measurement.points.length - 1)
    return `${steps} ${steps === 1 ? 'passo' : 'passos'}`
  }

  const points = squareMeasurementPoints(measurement)
  const distanceInGridUnits = points.reduce((total, point, index) => {
    const previousPoint = points[index - 1]
    if (!previousPoint) return total
    return total + Math.hypot(point.x - previousPoint.x, point.y - previousPoint.y)
  }, 0)
  return formatMeters(distanceInGridUnits * metersPerCell)
}

export function measurementLabelPoint(measurement: VttMeasurement) {
  if (measurement.shape === 'hex') {
    return measurement.points[measurement.points.length - 1] ?? { x: 0, y: 0 }
  }

  const points = squareMeasurementPoints(measurement)
  return points[points.length - 1] ?? measurement.end
}

export function squareMeasurementPoints(measurement: Extract<VttMeasurement, { shape: 'square' }>) {
  if (measurement.points && measurement.points.length >= 2) return measurement.points
  return [measurement.start, measurement.end]
}

export function areMeasurementPointsEqual(a: VttMeasurementPoint, b: VttMeasurementPoint) {
  return Math.abs(a.x - b.x) < 0.5 && Math.abs(a.y - b.y) < 0.5
}

export function measurementPointToPixels(point: VttMeasurementPoint, gridSize: number) {
  return {
    x: point.x * gridSize,
    y: point.y * gridSize,
  }
}

export function hexPolygonPoints(center: VttMeasurementPoint, gridSize: number) {
  const pixelCenter = measurementPointToPixels(center, gridSize)
  const radius = gridSize / Math.sqrt(3)
  const halfWidth = gridSize / 2
  const halfRadius = radius / 2

  return [
    { x: pixelCenter.x, y: pixelCenter.y - radius },
    { x: pixelCenter.x + halfWidth, y: pixelCenter.y - halfRadius },
    { x: pixelCenter.x + halfWidth, y: pixelCenter.y + halfRadius },
    { x: pixelCenter.x, y: pixelCenter.y + radius },
    { x: pixelCenter.x - halfWidth, y: pixelCenter.y + halfRadius },
    { x: pixelCenter.x - halfWidth, y: pixelCenter.y - halfRadius },
  ]
    .map((point) => `${point.x},${point.y}`)
    .join(' ')
}
