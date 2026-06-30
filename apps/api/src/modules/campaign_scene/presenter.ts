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
  createdAt: Date
  updatedAt: Date
  tokens?: CampaignSceneTokenRecord[]
}

type CampaignSceneTokenRecord = {
  id: string
  sceneId: string
  characterId: string
  hidden: boolean
  positionX: number
  positionY: number
  createdAt: Date
  updatedAt: Date
  character?: {
    id: string
    name: string
    avatarUrl: string | null
    userId: string
    campaigns?: Array<{
      role: 'MASTER' | 'PLAYER' | 'NPC'
      user?: {
        id: string
        email: string
      }
    }>
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

export function presentCampaignSceneToken(token: CampaignSceneTokenRecord) {
  const campaignCharacter = token.character?.campaigns?.[0] ?? null

  return {
    id: token.id,
    sceneId: token.sceneId,
    characterId: token.characterId,
    name: token.character?.name ?? 'Token',
    avatarUrl: token.character?.avatarUrl ?? null,
    ownerUserId: token.character?.userId ?? null,
    ownerName: campaignCharacter?.user?.email ?? null,
    role: campaignCharacter?.role ?? 'PLAYER',
    hidden: token.hidden,
    position: {
      x: token.positionX,
      y: token.positionY,
    },
    createdAt: token.createdAt,
    updatedAt: token.updatedAt,
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
    tokens: scene.tokens?.map(presentCampaignSceneToken) ?? [],
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

