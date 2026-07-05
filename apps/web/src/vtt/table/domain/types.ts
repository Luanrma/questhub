import type { VttGridSettings } from '../../grid'

export type VttToolId = 'select' | 'move' | 'measure' | 'grid' | 'dice' | 'tokens' | 'hazards'

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
  source: 'character' | 'bestiary'
  characterId: string | null
  bestiaryCreatureId?: string | null
  name: string
  avatarUrl: string | null
  tokenBorderColor?: string | null
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
  movementPath?: VttMeasurementPoint[]
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
  tokenId: string
  characterId?: string | null
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
      points?: VttMeasurementPoint[]
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
  source: 'character' | 'bestiary'
  characterId: string | null
  creatureId?: string
  name: string
  avatarUrl: string | null
  tokenBorderColor?: string | null
  role: 'PLAYER' | 'NPC'
  ownerUserId: string
  ownerName: string
}

export type VttHazardCandidate = {
  source: 'hazard'
  hazardEntryId: string
  name: string
  level: string | null
  rarity: string | null
  complexity: string | null
  tokenBorderColor?: string | null
}

export type VttTokenContextMenu = {
  token: VttPlayerToken
  x: number
  y: number
}

export type VttEncounterParticipant = {
  tokenId: string
  characterId: string
  name: string
  avatarUrl: string | null
  initiative: number | null
}

export type VttEncounterState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttEncounterParticipant[]
}

export type VttEncounterChangedPayload = {
  campaignId: string
  encounter: VttEncounterState | null
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
