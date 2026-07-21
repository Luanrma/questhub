import type { VttGridSettings } from '../../grid'
import type { VttPlayerToken, VttWallSegment } from '../../table/domain/types'
import type { FogFixedLightSource, FogExplorationSnapshot, TokenVisionConfig } from './types'
import { buildVisibilityPolygon, lightBlockingSegments, visionBlockingSegments, type FogPoint } from './visibility'

type FogGeometryInput = {
  board: { width: number; height: number }
  grid: VttGridSettings
  tokens: VttPlayerToken[]
  walls: VttWallSegment[]
  fixedLights: FogFixedLightSource[]
  maximumDimension?: number
}

type FogMaskInput = FogGeometryInput & {
  token: VttPlayerToken
  vision: TokenVisionConfig
  darkness?: boolean
  fixedLightMask?: FogFixedLightMask
}

export type FogFixedLightMask = {
  width: number
  height: number
  visible: Uint8Array
  maximumRangePixels: number
}

export type ComputedFogMask = {
  width: number
  height: number
  visible: Uint8Array
}

export function fogMaskDimensions(board: FogGeometryInput['board'], maximumDimension = 192) {
  const scale = Math.min(1, maximumDimension / Math.max(board.width, board.height, 1))
  return { width: Math.max(1, Math.round(board.width * scale)), height: Math.max(1, Math.round(board.height * scale)) }
}

function setBit(mask: Uint8Array, index: number) {
  mask[index >> 3] |= 1 << (index & 7)
}

export function hasFogBit(mask: Uint8Array, index: number) {
  return Boolean(mask[index >> 3] & (1 << (index & 7)))
}

export function unionFogBits(target: Uint8Array, source: Uint8Array) {
  const length = Math.min(target.length, source.length)
  for (let index = 0; index < length; index += 1) target[index] |= source[index]
  return target
}

function intersectFogBits(target: Uint8Array, source: Uint8Array) {
  const length = Math.min(target.length, source.length)
  for (let index = 0; index < length; index += 1) target[index] &= source[index]
  for (let index = length; index < target.length; index += 1) target[index] = 0
  return target
}

function metersToPixels(meters: number, grid: VttGridSettings) {
  return meters / Math.max(0.01, grid.metersPerCell) * grid.size
}

function rasterizePolygon(polygon: FogPoint[], board: FogGeometryInput['board'], dimensions: { width: number; height: number }) {
  const mask = new Uint8Array(Math.ceil(dimensions.width * dimensions.height / 8))
  if (polygon.length < 3) return mask
  const scaleX = board.width / dimensions.width
  const scaleY = board.height / dimensions.height

  for (let y = 0; y < dimensions.height; y += 1) {
    const sceneY = (y + 0.5) * scaleY
    const intersections: number[] = []
    for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index, index += 1) {
      const start = polygon[previous]
      const end = polygon[index]
      if ((start.y > sceneY) === (end.y > sceneY)) continue
      intersections.push(start.x + (sceneY - start.y) * (end.x - start.x) / (end.y - start.y))
    }
    intersections.sort((left, right) => left - right)
    for (let index = 0; index + 1 < intersections.length; index += 2) {
      const first = Math.max(0, Math.ceil(intersections[index] / scaleX - 0.5))
      const last = Math.min(dimensions.width - 1, Math.floor(intersections[index + 1] / scaleX - 0.5))
      for (let x = first; x <= last; x += 1) setBit(mask, y * dimensions.width + x)
    }
  }
  return mask
}

export function computeFogFixedLightMask(input: FogGeometryInput): FogFixedLightMask {
  const dimensions = fogMaskDimensions(input.board, input.maximumDimension)
  const visible = new Uint8Array(Math.ceil(dimensions.width * dimensions.height / 8))
  const lightSegments = lightBlockingSegments(input.walls, input.tokens, input.grid.size, { x: input.grid.offsetX, y: input.grid.offsetY })
  let maximumRangePixels = 0

  for (const source of input.fixedLights) {
    if (!source.enabled || source.rangeMeters <= 0) continue
    const rangePixels = metersToPixels(source.rangeMeters, input.grid)
    maximumRangePixels = Math.max(maximumRangePixels, rangePixels)
    const polygon = buildVisibilityPolygon(source.position, rangePixels, lightSegments, 48)
    unionFogBits(visible, rasterizePolygon(polygon, input.board, dimensions))
  }
  return { ...dimensions, visible, maximumRangePixels }
}

function revealObserverFootprint(input: FogMaskInput, dimensions: { width: number; height: number }, origin: FogPoint, visible: Uint8Array) {
  const scaleX = input.board.width / dimensions.width
  const scaleY = input.board.height / dimensions.height
  const radius = Math.max(input.grid.size * input.token.size * 0.55, Math.max(scaleX, scaleY))
  const minX = Math.max(0, Math.floor((origin.x - radius) / scaleX))
  const maxX = Math.min(dimensions.width - 1, Math.ceil((origin.x + radius) / scaleX))
  const minY = Math.max(0, Math.floor((origin.y - radius) / scaleY))
  const maxY = Math.min(dimensions.height - 1, Math.ceil((origin.y + radius) / scaleY))
  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const sceneX = (x + 0.5) * scaleX
      const sceneY = (y + 0.5) * scaleY
      if (Math.hypot(sceneX - origin.x, sceneY - origin.y) <= radius) setBit(visible, y * dimensions.width + x)
    }
  }
}

export function computeFogMask(input: FogMaskInput): ComputedFogMask {
  const dimensions = fogMaskDimensions(input.board, input.maximumDimension)
  const fixedLightMask = input.fixedLightMask?.width === dimensions.width && input.fixedLightMask.height === dimensions.height
    ? input.fixedLightMask
    : computeFogFixedLightMask(input)
  const origin = {
    x: input.token.position.x * input.grid.size + input.grid.offsetX,
    y: input.token.position.y * input.grid.size + input.grid.offsetY,
  }
  const visionRange = metersToPixels(input.vision.rangeMeters, input.grid)
  const visionSegments = visionBlockingSegments(input.walls, input.tokens, input.grid.size, { x: input.grid.offsetX, y: input.grid.offsetY })
  const basePolygon = buildVisibilityPolygon(origin, visionRange, visionSegments, 72)
  const visible = rasterizePolygon(basePolygon, input.board, dimensions)

  if (input.darkness) {
    intersectFogBits(visible, fixedLightMask.visible)
    return { ...dimensions, visible }
  }

  if (fixedLightMask.maximumRangePixels > 0) {
    const extendedPolygon = buildVisibilityPolygon(origin, visionRange + fixedLightMask.maximumRangePixels, visionSegments, 72)
    const extendedSight = rasterizePolygon(extendedPolygon, input.board, dimensions)
    for (let index = 0; index < visible.length; index += 1) {
      visible[index] |= fixedLightMask.visible[index] & extendedSight[index]
    }
  }

  revealObserverFootprint(input, dimensions, origin, visible)
  return { ...dimensions, visible }
}

export function normalizeExplorationForMask(exploration: FogExplorationSnapshot | null, computed: ComputedFogMask) {
  if (exploration && exploration.width === computed.width && exploration.height === computed.height && exploration.mask.length === computed.visible.length) {
    return { ...exploration, mask: exploration.mask.slice() }
  }
  if (exploration && exploration.width > 0 && exploration.height > 0 && exploration.mask.length === Math.ceil(exploration.width * exploration.height / 8)) {
    const mask = new Uint8Array(computed.visible.length)
    for (let sourceY = 0; sourceY < exploration.height; sourceY += 1) {
      for (let sourceX = 0; sourceX < exploration.width; sourceX += 1) {
        if (!hasFogBit(exploration.mask, sourceY * exploration.width + sourceX)) continue
        const targetX = Math.min(computed.width - 1, Math.floor(sourceX / exploration.width * computed.width))
        const targetY = Math.min(computed.height - 1, Math.floor(sourceY / exploration.height * computed.height))
        setBit(mask, targetY * computed.width + targetX)
      }
    }
    if (computed.width > exploration.width || computed.height > exploration.height) {
      for (let targetY = 0; targetY < computed.height; targetY += 1) {
        for (let targetX = 0; targetX < computed.width; targetX += 1) {
          const sourceX = Math.min(exploration.width - 1, Math.floor(targetX / computed.width * exploration.width))
          const sourceY = Math.min(exploration.height - 1, Math.floor(targetY / computed.height * exploration.height))
          if (hasFogBit(exploration.mask, sourceY * exploration.width + sourceX)) setBit(mask, targetY * computed.width + targetX)
        }
      }
    }
    return { revision: exploration.revision, width: computed.width, height: computed.height, mask }
  }
  return { revision: exploration?.revision ?? 0, width: computed.width, height: computed.height, mask: new Uint8Array(computed.visible.length) }
}
