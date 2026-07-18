import type { VttGridSettings } from '../../grid'
import type { VttGridBounds, VttPlayerToken, VttWallSegment } from '../../table/domain/types'

export type AreaShape = 'CIRCLE' | 'CONE' | 'LINE' | 'ORTHOGONAL' | 'RING' | 'POLYGON' | 'TARGET'
export type AreaVolumeShape = 'NONE' | 'SPHERE' | 'CYLINDER' | 'CUBE' | 'CUSTOM'
export type MeasurementMode = 'WORLD_UNIT' | 'GRID_CELLS'
export type AreaOriginMode = 'SOURCE_TOKEN' | 'TARGET_TOKEN' | 'FREE_POINT' | 'GRID_CELL' | 'GRID_INTERSECTION'
export type AreaPlacementMode = 'POINT' | 'DIRECTIONAL' | 'ATTACHED' | 'DRAWN'
export type AreaPropagationMode = 'BLOCKED_BY_WALLS' | 'SPREAD_AROUND_WALLS' | 'IGNORE_WALLS'
export type AreaPersistenceMode = 'PREVIEW_ONLY' | 'INSTANT' | 'PERSISTENT'
export type AreaMovementMode = 'STATIC' | 'FOLLOW_SOURCE' | 'MANUAL'
export type CellInclusionRule = 'ANY_OVERLAP' | 'CENTER_INSIDE' | 'HALF_OR_MORE' | 'FULLY_INSIDE'
export type TokenIntersectionRule = CellInclusionRule | 'COVERED_CELLS' | 'MANUAL'
export type AreaVisibility = 'MASTER_ONLY' | 'ALL_PLAYERS' | 'SELECTED_PLAYERS'
export type AreaVisualEffect = 'DEFAULT' | 'FIRE' | 'ELECTRIC' | 'HEALING' | 'EARTH' | 'VINES' | 'LEAVES'

export type AreaPoint = { x: number; y: number }

export type AreaDimensions = {
  targetCount?: number
  radius?: number
  innerRadius?: number
  length?: number
  width?: number
  startWidth?: number
  endWidth?: number
  angleDegrees?: number
  height?: number
  elevation?: number
  polygonPoints?: AreaPoint[]
}

export type AffectedTokenRingStyle = {
  color: string
  opacity: number
  thicknessPx: number
  gapPx: number
  pulse: boolean
}

export type AreaTemplateStyle = {
  visualEffect: AreaVisualEffect
  fillColor: string
  borderColor: string
  borderWidthPx: number
  opacity: number
  textureAssetId?: string
  showCoveredCells: boolean
  showOrigin: boolean
  showDirectionLine: boolean
  affectedTokenRing: AffectedTokenRingStyle
}

export type AreaTemplateInput = {
  name: string
  description?: string
  category?: string
  tags: string[]
  iconAssetId?: string
  shape: AreaShape
  volumeShape: AreaVolumeShape
  dimensions: AreaDimensions
  measurementMode: MeasurementMode
  measurementUnit?: string
  originMode: AreaOriginMode
  placementMode: AreaPlacementMode
  propagationMode: AreaPropagationMode
  persistenceMode: AreaPersistenceMode
  movementMode: AreaMovementMode
  cellInclusionRule: CellInclusionRule
  tokenIntersectionRule: TokenIntersectionRule
  includesOrigin: boolean
  stopAtFirstObstacle: boolean
  duration?: { rounds?: number; turns?: number; seconds?: number; description?: string }
  style: AreaTemplateStyle
  visibility: AreaVisibility
}

export type CampaignAreaTemplate = AreaTemplateInput & {
  id: string
  campaignId: string
  createdByUserId: string
  createdAt: string
  updatedAt: string
}

export function areaTemplateToInput(template: AreaTemplateInput): AreaTemplateInput {
  return {
    name: template.name,
    description: template.description,
    category: template.category,
    tags: [...template.tags],
    iconAssetId: template.iconAssetId,
    shape: template.shape,
    volumeShape: template.volumeShape,
    dimensions: template.dimensions.polygonPoints
      ? { ...template.dimensions, polygonPoints: template.dimensions.polygonPoints.map((point) => ({ ...point })) }
      : { ...template.dimensions },
    measurementMode: template.measurementMode,
    measurementUnit: template.measurementUnit,
    originMode: template.originMode,
    placementMode: template.placementMode,
    propagationMode: template.propagationMode,
    persistenceMode: template.persistenceMode,
    movementMode: template.movementMode,
    cellInclusionRule: template.cellInclusionRule,
    tokenIntersectionRule: template.tokenIntersectionRule,
    includesOrigin: template.includesOrigin,
    stopAtFirstObstacle: template.stopAtFirstObstacle,
    duration: template.duration ? { ...template.duration } : undefined,
    style: {
      ...template.style,
      visualEffect: template.style.visualEffect ?? 'DEFAULT',
      affectedTokenRing: { ...template.style.affectedTokenRing },
    },
    visibility: template.visibility,
  }
}

export type SceneAreaEffect = {
  id: string
  campaignId: string
  sceneId: string
  templateId?: string
  createdByUserId: string
  sourceTokenId?: string
  targetTokenId?: string
  origin: AreaPoint & { elevation?: number }
  rotationDegrees: number
  scale: number
  configurationSnapshot: CampaignAreaTemplate
  state: 'ACTIVE' | 'RESOLVED' | 'EXPIRED'
  createdAt: string
  expiresAt?: string
}

export type AreaPlacement = {
  key: string
  template: CampaignAreaTemplate
  origin: AreaPoint
  rotationDegrees: number
  scale: number
  selected: boolean
  effectId?: string
}

export type CoveredAreaCell = { id: string; polygon: AreaPoint[] }

export type AreaRenderModel = AreaPlacement & {
  polygon: AreaPoint[]
  innerPolygon?: AreaPoint[]
  coveredCells: CoveredAreaCell[]
  touchedTokenIds: string[]
}

export type AreaCalculationContext = {
  grid: VttGridSettings
  board: VttGridBounds
  tokens: VttPlayerToken[]
  walls: VttWallSegment[]
}

export const defaultAreaTemplateInput: AreaTemplateInput = {
  name: 'Nova area',
  tags: [],
  shape: 'CIRCLE',
  volumeShape: 'NONE',
  dimensions: { radius: 3 },
  measurementMode: 'WORLD_UNIT',
  measurementUnit: 'm',
  originMode: 'GRID_CELL',
  placementMode: 'POINT',
  propagationMode: 'IGNORE_WALLS',
  persistenceMode: 'INSTANT',
  movementMode: 'STATIC',
  cellInclusionRule: 'ANY_OVERLAP',
  tokenIntersectionRule: 'COVERED_CELLS',
  includesOrigin: true,
  stopAtFirstObstacle: false,
  style: {
    visualEffect: 'DEFAULT',
    fillColor: '#f97316',
    borderColor: '#fdba74',
    borderWidthPx: 2,
    opacity: 0.35,
    showCoveredCells: true,
    showOrigin: true,
    showDirectionLine: true,
    affectedTokenRing: { color: '#facc15', opacity: 0.95, thicknessPx: 4, gapPx: 4, pulse: true },
  },
  visibility: 'MASTER_ONLY',
}
