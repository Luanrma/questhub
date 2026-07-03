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
  source?: 'CHARACTER' | 'BESTIARY'
  characterId: string | null
  bestiaryCreatureId?: string | null
  name?: string | null
  avatarUrl?: string | null
  tokenBorderColor?: string | null
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
  } | null
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
  const source = token.source === 'BESTIARY' ? 'bestiary' : 'character'

  return {
    id: token.id,
    sceneId: token.sceneId,
    source,
    characterId: source === 'character' ? token.characterId : null,
    bestiaryCreatureId: token.bestiaryCreatureId ?? null,
    name: source === 'bestiary' ? token.name ?? 'NPC' : token.character?.name ?? 'Token',
    avatarUrl: source === 'bestiary' ? token.avatarUrl ?? null : token.character?.avatarUrl ?? null,
    tokenBorderColor: token.tokenBorderColor ?? null,
    ownerUserId: source === 'bestiary' ? '' : token.character?.userId ?? null,
    ownerName: source === 'bestiary' ? 'Mestre' : campaignCharacter?.user?.email ?? null,
    role: source === 'bestiary' ? 'NPC' : campaignCharacter?.role ?? 'PLAYER',
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

