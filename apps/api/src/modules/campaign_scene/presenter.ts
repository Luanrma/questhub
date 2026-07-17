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
  metersPerCell: number
  squareMeasurementColor: string
  hexMeasurementColor: string
  gridLineWidth: number
  gridColor: string
  walls?: unknown
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
  createdAt: Date
  updatedAt: Date
  token: {
    id: string
    characterId: string | null
    name: string
    avatarUrl: string | null
    color: string | null
    size: number
    canCustomizeAppearance: boolean
    character?: {
      id: string
      userId: string
      campaigns?: Array<{ role: 'MASTER' | 'PLAYER' | 'NPC' }>
    } | null
    controllerMember?: {
      id: string
      userId: string
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
      hexMeasurementColor: scene.hexMeasurementColor,
      lineWidth: scene.gridLineWidth,
      color: scene.gridColor,
    }
  }

  return {
    visible: scene.gridVisible,
    shape: 'square' as const,
    size: scene.gridSize,
    metersPerCell: scene.metersPerCell,
    squareMeasurementColor: scene.squareMeasurementColor,
    lineWidth: scene.gridLineWidth,
    color: scene.gridColor,
  }
}

export function presentCampaignSceneToken(placement: CampaignTokenPlacementRecord) {
  const token = placement.token
  const campaignCharacter = token.character?.campaigns?.[0] ?? null

  return {
    id: token.id,
    sceneId: placement.sceneId,
    characterId: token.characterId,
    name: token.name,
    avatarUrl: token.avatarUrl,
    color: token.color,
    size: token.size,
    controllerMemberId: token.controllerMember?.id ?? null,
    controllerUserId: token.controllerMember?.userId ?? null,
    controllerName: token.controllerMember?.user.email ?? null,
    ownerUserId: token.character?.userId ?? null,
    ownerName: token.controllerMember?.user.email ?? null,
    role: campaignCharacter?.role === 'PLAYER' ? 'PLAYER' : campaignCharacter?.role === 'NPC' ? 'NPC' : 'GENERIC',
    canCustomizeAppearance: token.canCustomizeAppearance,
    hidden: placement.hidden,
    rotation: placement.rotation,
    layer: placement.layer,
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
