import type { VttGridSettings } from '../../grid'

export type VttToolId = 'select' | 'move' | 'measure' | 'grid' | 'dice' | 'tokens' | 'walls' | 'area-templates'

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
  characterId: string | null
  name: string
  avatarUrl: string | null
  color: string | null
  size: number
  ownerUserId: string | null
  ownerName: string | null
  controllerMemberId: string | null
  controllerUserId: string | null
  role: 'PLAYER' | 'NPC' | 'GENERIC'
  canCustomizeAppearance: boolean
  hidden: boolean
  rotation: number
  layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
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
  tokenId: string
  characterId: string | null
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
  walls: VttWallSegment[]
}

export type VttSceneChangedPayload = {
  campaignId: string
  scene: VttTableScene | null
}

export type VttMeasurementPoint = {
  x: number
  y: number
}

export type VttDoorState = {
  open: boolean
  locked: boolean
  blocked: boolean
  ajar: boolean
}

export type VttWallSegment = {
  id: string
  kind: 'wall' | 'door'
  start: VttMeasurementPoint
  end: VttMeasurementPoint
  color?: string
  playerVisible: boolean
  blocksEffects: boolean
  door?: VttDoorState
}

export type VttWallsChangedPayload = {
  campaignId: string
  sceneId: string
  walls: VttWallSegment[]
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

export type CampaignToken = {
  id: string
  campaignId: string
  characterId: string | null
  name: string
  avatarUrl: string | null
  color: string | null
  size: number
  canCustomizeAppearance: boolean
  controllerMemberId: string | null
  controllerUserId: string | null
  controllerName: string | null
  characterOwnerUserId: string | null
  category: 'MAIN' | 'SECONDARY' | 'MASTER_ONLY'
  placement: {
    sceneId: string
    hidden: boolean
    position: { x: number; y: number }
    rotation: number
    layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
  } | null
}

export type CampaignPlayer = {
  userId: string
  email: string
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'ACTIVE' | 'PENDING' | 'REJECTED' | 'LEFT' | 'DEAD'
  characterId: string
  characterName: string
}

export type VttTokenContextMenu = {
  token: VttPlayerToken
  x: number
  y: number
}

export type VttCombatParticipant = {
  tokenId: string
  characterId: string | null
  name: string
  avatarUrl: string | null
  color: string | null
  initiative: number | null
}

export type VttCombatState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttCombatParticipant[]
}

export type VttCombatChangedPayload = {
  campaignId: string
  combat: VttCombatState | null
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
  walls: VttWallSegment[]
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
  walls?: unknown
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
