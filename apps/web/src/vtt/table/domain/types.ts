import type { VttGridSettings } from '../../grid'

export type VttToolId = 'select' | 'move' | 'measure' | 'grid' | 'dice' | 'tokens'

export type VttGridBounds = {
  width: number
  height: number
}

export type VttPanOffset = {
  x: number
  y: number
}

export type VttPlayerToken = {
  id: string
  characterId: string
  name: string
  avatarUrl: string | null
  ownerUserId: string
  ownerName: string
  role: 'PLAYER' | 'NPC'
  hidden: boolean
  position: {
    x: number
    y: number
  }
}

export type VttTokenChangedPayload = {
  campaignId: string
  sceneId?: string | null
  token: VttPlayerToken
}

export type VttTokensSnapshotPayload = {
  campaignId: string
  sceneId?: string | null
  tokens: VttPlayerToken[]
  sessionState?: 'ACTIVE' | 'PAUSED' | null
}

export type VttTokenRemovedPayload = {
  campaignId: string
  sceneId?: string | null
  characterId: string
}

export type VttTokenState = {
  campaignId: string | null
  tokens: VttPlayerToken[]
}

export type VttTableScene = {
  id: string
  name: string
  imageUrl: string | null
  fileName: string | null
  assetId: string | null
  width: number
  height: number
  grid: VttGridSettings
  tokens: VttPlayerToken[]
}

export type VttSceneChangedPayload = {
  campaignId: string
  scene: VttTableScene | null
}

export type VttMeasurementPoint = {
  x: number
  y: number
}

export type VttMeasurement =
  | {
      shape: 'square'
      start: VttMeasurementPoint
      end: VttMeasurementPoint
      color: string
    }
  | {
      shape: 'hex'
      points: VttMeasurementPoint[]
      color: string
    }

export type VttMeasurementChangedPayload = {
  campaignId: string
  measurement: VttMeasurement | null
}

export type VttTokenCandidate = {
  characterId: string
  name: string
  avatarUrl: string | null
  role: 'PLAYER' | 'NPC'
  ownerUserId: string
  ownerName: string
}

export type VttTokenContextMenu = {
  token: VttPlayerToken
  x: number
  y: number
}

export type PreparedScene = {
  id: string
  name: string
  imageUrl: string | null
  fileName: string | null
  file: File | null
  assetId: string | null
  storagePath: string | null
  grid: VttGridSettings
  tokens: VttPlayerToken[]
  order: number
  error: string | null
  draft: boolean
}

export type CampaignSceneResponse = {
  id: string
  campaignId: string
  name: string
  order: number
  assetId: string | null
  backgroundUrl: string | null
  backgroundCacheKey: string | null
  grid: unknown
  tokens: VttPlayerToken[]
  createdAt: string
  updatedAt: string
}

export type AssetUploadResponse = {
  id: string
  storagePath: string
  signedUrl: string
}

export type AssetExistsResponse = {
  exists: boolean
  asset: {
    id: string
    storagePath: string
    originalName: string
  } | null
}
