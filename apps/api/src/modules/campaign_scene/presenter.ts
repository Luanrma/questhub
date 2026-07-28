type DbCampaignSceneGridShape = 'SQUARE' | 'HEX'

type CampaignSceneRecord = {
  id: string
  campaignId: string
  name: string
  order: number
  assetId: string | null
  backgroundUrl: string | null
  backgroundCacheKey: string | null
  gridVisible: boolean
  gridShape: DbCampaignSceneGridShape
  gridSize: number
  gridOffsetX: number
  gridOffsetY: number
  metersPerCell: number
  squareMeasurementColor: string
  hexMeasurementColor: string
  gridLineWidth: number
  gridColor: string
  walls?: unknown
  fogConfig?: unknown
  fixedLightSources?: unknown
  createdAt: Date
  updatedAt: Date
  tokenPlacements?: CampaignTokenPlacementRecord[]
}

type CampaignTokenPlacementRecord = {
  id: string
  tokenId: string
  sceneId: string
  hidden: boolean
  positionX: number
  positionY: number
  rotation: number
  layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
  blocksVisionAndLight?: boolean
  createdAt: Date
  updatedAt: Date
  token: {
    id: string
    actorId: string | null
    name: string
    avatarUrl: string | null
    color: string | null
    size: number
    canCustomizeAppearance: boolean
    visionConfig?: unknown
    lightConfig?: unknown
    actor?: {
      controllerMember: {
        id: string
        userId: string
        role: 'MASTER' | 'PLAYER'
        user: { email: string }
      } | null
    } | null
    controllerMember?: {
      id: string
      userId: string
      role: 'MASTER' | 'PLAYER'
      user: { email: string }
    } | null
  }
}

type CampaignSceneViewStateRecord = {
  campaignId: string
  masterActiveSceneId: string | null
  forcedSceneId: string | null
}

export function presentCampaignSceneGrid(scene: CampaignSceneRecord) {
  if (scene.gridShape === 'HEX') {
    return {
      visible: scene.gridVisible,
      shape: 'hex' as const,
      size: scene.gridSize,
      offsetX: scene.gridOffsetX,
      offsetY: scene.gridOffsetY,
      metersPerCell: scene.metersPerCell,
      hexMeasurementColor: scene.hexMeasurementColor,
      lineWidth: scene.gridLineWidth,
      color: scene.gridColor,
    }
  }

  return {
    visible: scene.gridVisible,
    shape: 'square' as const,
    size: scene.gridSize,
    offsetX: scene.gridOffsetX,
    offsetY: scene.gridOffsetY,
    metersPerCell: scene.metersPerCell,
    squareMeasurementColor: scene.squareMeasurementColor,
    lineWidth: scene.gridLineWidth,
    color: scene.gridColor,
  }
}

export function presentCampaignSceneToken(placement: CampaignTokenPlacementRecord) {
  const token = placement.token
  const effectiveController = token.actor?.controllerMember ?? token.controllerMember

  return {
    id: token.id,
    sceneId: placement.sceneId,
    actorId: token.actorId,
    name: token.name,
    avatarUrl: token.avatarUrl,
    color: token.color,
    size: token.size,
    controllerMemberId: effectiveController?.id ?? null,
    controllerUserId: effectiveController?.userId ?? null,
    controllerName: effectiveController?.user.email ?? null,
    ownerUserId: effectiveController?.userId ?? null,
    ownerName: effectiveController?.user.email ?? null,
    role: effectiveController?.role === 'PLAYER' ? 'PLAYER' : token.actor ? 'NPC' : 'GENERIC',
    canCustomizeAppearance: token.canCustomizeAppearance,
    visionConfig: token.visionConfig ?? {},
    lightConfig: token.lightConfig ?? {},
    hidden: placement.hidden,
    rotation: placement.rotation,
    layer: placement.layer,
    blocksVisionAndLight: placement.blocksVisionAndLight ?? false,
    position: {
      x: placement.positionX,
      y: placement.positionY,
    },
    createdAt: placement.createdAt,
    updatedAt: placement.updatedAt,
  }
}

export function presentCampaignScene(scene: CampaignSceneRecord) {
  return {
    id: scene.id,
    campaignId: scene.campaignId,
    name: scene.name,
    order: scene.order,
    assetId: scene.assetId,
    backgroundUrl: scene.backgroundUrl,
    backgroundCacheKey: scene.backgroundCacheKey,
    grid: presentCampaignSceneGrid(scene),
    tokens: scene.tokenPlacements?.map(presentCampaignSceneToken) ?? [],
    walls: Array.isArray(scene.walls) ? scene.walls : [],
    fogConfig: scene.fogConfig ?? {},
    fixedLightSources: Array.isArray(scene.fixedLightSources) ? scene.fixedLightSources : [],
    createdAt: scene.createdAt,
    updatedAt: scene.updatedAt,
  }
}

export function presentCampaignSceneViewState(viewState: CampaignSceneViewStateRecord | null, campaignId: string) {
  return {
    campaignId,
    masterActiveSceneId: viewState?.masterActiveSceneId ?? null,
    forcedSceneId: viewState?.forcedSceneId ?? null,
  }
}
