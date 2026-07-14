import type { VttGridSettings } from '../../grid'
import type { SceneAreaShape } from '../../../../../../packages/game-system-core/src/shared/scene-geometry'

export type VttSpellAreaOverlay = {
  shape: SceneAreaShape
  color: string
  label: string
  casterTokenId: string | null
  phase: 'PREVIEW' | 'CAST'
}

export type VttSpellAreaChangedPayload = {
  campaignId: string
  area: VttSpellAreaOverlay | null
}

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
  campaignNpcDefinitionId?: string | null
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
  campaignNpcDefinitionId?: string
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

export type VttCombatantHealth = {
  currentHitPoints: number
  maxHitPoints: number
  temporaryHitPoints: number
  state: 'OK' | 'DOWN'
}

export type PublicNpcHealth = {
  state: 'HEALTHY' | 'SCRATCHED' | 'INJURED' | 'BLOODIED' | 'CRITICAL' | 'DOWN'
  percentage?: number
}

export type VttMovementBudget = {
  maxMetersPerAction: number | null
  actionsRemaining: number
  metersUsedThisAction: number
}

export type VttEncounterCreatureParticipant = {
  type: 'creature'
  participantId: string
  tokenId: string
  characterId: string
  source: 'character' | 'bestiary'
  name: string
  avatarUrl: string | null
  initiative: number | null
  health?: VttCombatantHealth | PublicNpcHealth | null
  movement: VttMovementBudget
}

export type VttEncounterHazardParticipant = {
  type: 'hazard'
  participantId: string
  hazardInstanceId: string
  hazardEntryId: string
  name: string
  initiative: number | null
  visibility: 'HIDDEN' | 'REVEALED'
  state: 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
  executionMode: 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'
}

export type VttEncounterParticipant = VttEncounterCreatureParticipant | VttEncounterHazardParticipant

export type VttCombatHealthChangedPayload = {
  campaignId: string
  sceneId: string
  tokenId: string
  health: VttCombatantHealth | PublicNpcHealth
}

export type VttEncounterLogEntryBase = {
  id: string
  createdAt: string
}

export type VttEncounterHealthLogEntry = VttEncounterLogEntryBase & {
  type: 'DAMAGE' | 'HEAL'
  actorName: string
  targetParticipantId: string | null
  targetName: string
  amount: number | null
  resultingHealth: VttCombatantHealth | PublicNpcHealth | null
}

export type VttEncounterDiceRollLogEntry = VttEncounterLogEntryBase & {
  type: 'DICE_ROLL'
  actorName: string
  notation: string
  total: number
}

export type VttEncounterSystemLogEntry = VttEncounterLogEntryBase & {
  type: 'SYSTEM'
  message: string
}

export type VttEncounterLogEntry = VttEncounterHealthLogEntry | VttEncounterDiceRollLogEntry | VttEncounterSystemLogEntry

export type VttEncounterState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttEncounterParticipant[]
  log: VttEncounterLogEntry[]
}

export type VttEncounterChangedPayload = {
  campaignId: string
  encounter: VttEncounterState | null
}

export type SceneHazardVisibility = 'HIDDEN' | 'HINTED' | 'REVEALED'
export type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
export type SceneHazardScope = 'POINT' | 'AREA' | 'SCENE' | 'TARGET'
export type SceneHazardTriggerMode = 'MANUAL' | 'ON_TOKEN_ENTER' | 'ALWAYS_ON'
export type SceneHazardExecutionMode = 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'

export type VttSceneHazard = {
  id: string
  sceneId: string
  hazardEntryId?: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  visibility: SceneHazardVisibility
  state: SceneHazardState
  notes?: string | null
  triggerMode?: SceneHazardTriggerMode
  executionMode?: SceneHazardExecutionMode
}

export type VttHazardsSnapshotPayload = {
  campaignId: string
  sceneId: string | null
  hazards: VttSceneHazard[]
}

export type VttHazardChangedPayload = {
  campaignId: string
  sceneId: string
  hazard: VttSceneHazard
}

export type VttHazardRemovedPayload = {
  campaignId: string
  sceneId: string
  hazardId: string
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
