import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Backpack,
  BrickWall,
  CircleUserRound,
  Cloud,
  Dice5,
  Eye,
  EyeOff,
  Grid3X3,
  Heart,
  Maximize2,
  MessageCircle,
  Minimize2,
  MousePointer2,
  Move,
  PanelRightClose,
  PanelRightOpen,
  Pause,
  Pin,
  ScrollText,
  SquareDashedMousePointer,
  Swords,
  Trash2,
  TriangleAlert,
  Users,
  Wand2,
  Wrench,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { CampaignChat } from '../../components/CampaignChat'
import { LoadingScreen } from '../../components/LoadingScreen'
import { CharacterSheetModal } from '../../components/CharacterSheetModal'
import { ResizableEdges, type ResizableBox } from '../../components/ResizableEdges'
import { InventoryModal } from '../../inventory/components/InventoryModal'
import { useSession } from '../../contexts/SessionContext'
import { api, apiForm } from '../../lib/api'
import { BestiaryCreatureSheetModal } from '../../features/bestiary/components/BestiaryCreatureSheetModal'
import {
  PREPARED_BESTIARY_TOKENS_CHANGED_EVENT,
  PREPARED_HAZARDS_CHANGED_EVENT,
  VTT_TABLE_SETTINGS_CHANGED_EVENT,
  normalizeVttTokenMovementSpeed,
  readStoredCampaignUserSettings,
  storeCampaignUserSettings,
  type CampaignUserSettings,
  type VttTokenMovementSpeed,
} from '../dice-roller/infrastructure/storage/diceThemeStorage'
import { VttDiceControls, type VttDiceControlsHandle } from '../dice-roller'
import { defaultGridSettings, normalizeGridSettings, type VttGridSettings } from '../grid'
import { questhubBestiaryDragType, questhubCharacterDragType, questhubHazardDragType, questhubNpcDefinitionDragType, zoomLimits } from './config/constants'
import {
  areMeasurementPointsEqual,
  clampMeasurementPoint,
  clampNumber,
  clampPanOffset,
  getBoardPixelSize,
  getCenteredPanOffset,
  getTokenSize,
  isTokenInsideSelectionArea,
  normalizeTableToken,
  normalizeTokenPosition,
  scaleGridSettings,
  selectionAreaBounds,
  tokenGridPositionFromPixelCenter,
} from './domain/boardMath'
import { predictMovement } from './domain/movementPrediction'
import {
  createPreparedScene,
  filenameEquals,
  getDefaultSceneDimensions,
  isDraftPreparedScene,
  normalizePreparedSceneList,
  normalizeWallSegments,
  preparedSceneToTableScene,
  readImageDimensions,
  revokeSceneImageUrl,
  sceneImageDimensionKey,
  sceneResponseToPreparedScene,
  validateSceneImage,
} from './domain/sceneDomain'
import { applyDoorToWalls, createRectangleWallSegments, isMovementPathBlockedByWalls, normalizeDoorState } from './domain/wallGeometry'
import { VttGridOverlay, VttGridSettingsModal } from './components/GridControls'
import { ScenePreparationModal, SceneSidebarScenes } from './components/SceneControls'
import { HazardMarker, PlayerToken, VttMeasurementOverlay, VttWallsOverlay } from './components/BoardOverlays'
import { SpellAreaOverlayView } from './components/SpellAreaOverlay'
import {
  SpellCastPanel,
  buildPathfinder2eAreaShape,
  castSpell,
  resolveSpellCast,
  pathfinder2eFeetToCells,
  type Pathfinder2eAreaPlacementRequest,
  type Pathfinder2eTargetSelectionRequest,
  type Pathfinder2eResolveResponse,
} from '../../game-systems/pathfinder-2e/spell-casting'
import {
  NpcSpellCastPanel,
  castNpcSpell,
  resolveNpcSpellCast,
  type Pathfinder2eNpcTargetSelectionRequest,
} from '../../game-systems/pathfinder-2e/npc-spellcasting'
import { distanceInCells, hexCellCenter, hexCellFromPoint, hexDistanceInCells } from '../../../../../packages/game-system-core/src/shared/scene-geometry'
import type { SceneAreaShape, ScenePoint } from '../../../../../packages/game-system-core/src/shared/scene-geometry'
import { CombatHealthEditorModal } from './components/CombatHealthEditorModal'
import { EncounterTrackerPanel } from './components/EncounterTrackerPanel'
import { BattleLogPanel } from './components/BattleLogPanel'
import { isExactCombatantHealth } from './components/HealthBar'
import { HazardEncounterPanel } from './components/HazardEncounterPanel'
import { SceneHazardsPanel } from './components/SceneHazardsPanel'
import type {
  AssetExistsResponse,
  AssetUploadResponse,
  CampaignSceneResponse,
  PreparedScene,
  PublicNpcHealth,
  VttCombatantHealth,
  VttCombatHealthChangedPayload,
  VttEncounterChangedPayload,
  VttEncounterState,
  VttGridBounds,
  VttHazardCandidate,
  VttHazardChangedPayload,
  VttHazardRemovedPayload,
  VttHazardsSnapshotPayload,
  VttMeasurement,
  VttMeasurementChangedPayload,
  VttMeasurementPoint,
  VttPanOffset,
  VttPlayerToken,
  VttSceneChangedPayload,
  VttSceneHazard,
  VttSelectionArea,
  VttSpellAreaChangedPayload,
  VttSpellAreaOverlay,
  VttTableScene,
  VttTokenCandidate,
  VttTokenChangedPayload,
  VttTokenContextMenu,
  VttTokenRemovedPayload,
  VttTokenState,
  VttTokensSnapshotPayload,
  VttToolId,
  VttWallSegment,
  VttWallsChangedPayload,
} from './domain/types'

const toolButtons = [
  { id: 'select', label: 'Selecionar', icon: MousePointer2 },
  { id: 'area-select', label: 'Selecao por area', icon: SquareDashedMousePointer },
  { id: 'move', label: 'Mover', icon: Move },
  { id: 'dice', label: 'Dados', icon: Dice5 },
  { id: 'tokens', label: 'Tokens', icon: CircleUserRound },
  { id: 'hazards', label: 'Hazards', icon: TriangleAlert },
  { id: 'walls', label: 'Paredes', icon: BrickWall },
  { id: 'grid', label: 'Grid', icon: Grid3X3 },
] as const

const defaultWallColor = '#e5e7eb'
const defaultDoorColor = '#f59e0b'

const hazardVisibilityLabels: Record<VttSceneHazard['visibility'], string> = {
  HIDDEN: 'Oculto',
  HINTED: 'Sugerido',
  REVEALED: 'Revelado',
}

const hazardStateLabels: Record<VttSceneHazard['state'], string> = {
  ARMED: 'Armado',
  TRIGGERED: 'Disparado',
  ACTIVE: 'Ativo',
  DISABLED: 'Desativado',
  EXPIRED: 'Expirado',
}

const hazardScopeLabels: Record<VttSceneHazard['scope'], string> = {
  POINT: 'Ponto',
  AREA: 'Area',
  SCENE: 'Cena inteira',
  TARGET: 'Alvo',
}

type CampaignOverviewPageProps = {
  gridSettings: VttGridSettings
  gridSettingsOpen: boolean
  canConfigureGrid: boolean
  sessionState: 'ACTIVE' | 'PAUSED' | null
  myCharacter: {
    id: string
    name: string
    avatarUrl: string | null
    role: 'MASTER' | 'PLAYER'
    status: 'ACTIVE' | 'PENDING'
  } | null
  onGridSettingsChange: (settings: VttGridSettings, options?: { realtime?: boolean; sceneId?: string }) => void
  onGridSettingsOpenChange: (open: boolean) => void
}

export type CampaignOverviewPageHandle = {
  syncTableState: () => Promise<void>
}

type SceneRenderTarget = {
  sceneId: string | null
  imageKey: string | null
  tokenCount: number
}

type CharacterTokenSheet = {
  tokenId: string
  characterId: string
  characterName: string
  readOnly: boolean
  identityLocked: boolean
  isGameMaster: boolean
}

type InventoryTokenModal = {
  characterId: string
  characterName: string
}

type RightPanelTab = 'encounter' | 'players' | 'session' | 'scenes' | 'scene-hazards' | 'chat'

type SpellPlacementState = {
  request: Pathfinder2eAreaPlacementRequest
  characterId: string
  casterTokenId: string
  casterName: string
}

type SpellTargetSelectionState = {
  request: Pathfinder2eTargetSelectionRequest
  characterId: string
  casterTokenId: string
  casterName: string
  selectedTokenIds: string[]
}

const SPELL_AREA_COLOR = '#a855f7'
const SPELL_AREA_EMIT_THROTTLE_MS = 50
const SPELL_CAST_FLASH_MS = 2500
const DEGREE_LABEL_PT: Record<Pathfinder2eResolveResponse['results'][number]['degree'], string> = {
  criticalSuccess: 'resistiu com sucesso critico',
  success: 'resistiu com sucesso',
  failure: 'falhou',
  criticalFailure: 'falhou criticamente',
}
// Tipos reais de area PF2e com cobertura hex (formas "redondas" — ver
// .ai/scene_geometry/specs.md secao 7). Cone/linha/quadrado/cubo continuam
// bloqueados em grid hexagonal.
const HEX_SUPPORTED_SPELL_AREA_TYPES = new Set(['burst', 'emanation', 'cylinder'])

function spellShapeAnchor(shape: SceneAreaShape): ScenePoint {
  switch (shape.kind) {
    case 'BURST':
    case 'CYLINDER':
    case 'EMANATION':
    case 'RING':
      return shape.center
    case 'CONE':
    case 'LINE':
      return shape.origin
    case 'CUBE':
    case 'SQUARE':
      return { x: shape.origin.x + shape.sizeCells / 2, y: shape.origin.y + shape.sizeCells / 2 }
  }
}

export const CampaignOverviewPage = forwardRef<CampaignOverviewPageHandle, CampaignOverviewPageProps>(function CampaignOverviewPage({
  gridSettings,
  gridSettingsOpen,
  canConfigureGrid,
  sessionState,
  myCharacter,
  onGridSettingsChange,
  onGridSettingsOpenChange,
}: CampaignOverviewPageProps, ref) {
  const { campaignId } = useParams()
  const { me, campaigns, socket, connectRealtime } = useSession()
  const boardViewportRef = useRef<HTMLDivElement | null>(null)
  const gridAreaRef = useRef<HTMLDivElement | null>(null)
  const backgroundImageRef = useRef<HTMLImageElement | null>(null)
  const measuringRef = useRef(false)
  const measurementRef = useRef<VttMeasurement | null>(null)
  const measuredMovementTokenIdRef = useRef<string | null>(null)
  const clearMeasurementAfterMovementTokenIdRef = useRef<string | null>(null)
  const panningRef = useRef<{ pointerId: number; x: number; y: number } | null>(null)
  const previousCampaignOnlineRef = useRef<{ campaignId: string | null; online: boolean }>({ campaignId: null, online: false })
  const diceControlsRef = useRef<VttDiceControlsHandle | null>(null)
  const [tokenState, setTokenState] = useState<VttTokenState>({ campaignId: null, tokens: [] })
  const [tokenMovementPaths, setTokenMovementPaths] = useState<Record<string, VttMeasurementPoint[]>>({})
  const [movementSelectedTokenId, setMovementSelectedTokenId] = useState<string | null>(null)
  const [tokenMovementSpeed, setTokenMovementSpeed] = useState<VttTokenMovementSpeed>(() =>
    campaignId ? readStoredCampaignUserSettings(campaignId).vtt.tokenMovementSpeed : 'default',
  )
  const [tokenCandidates, setTokenCandidates] = useState<VttTokenCandidate[]>([])
  const [tokenCandidatesRefreshKey, setTokenCandidatesRefreshKey] = useState(0)
  const [hazardCandidates, setHazardCandidates] = useState<VttHazardCandidate[]>([])
  const [hazardCandidatesRefreshKey, setHazardCandidatesRefreshKey] = useState(0)
  const [tokenContextMenu, setTokenContextMenu] = useState<VttTokenContextMenu | null>(null)
  const [combatHealthByTokenId, setCombatHealthByTokenId] = useState<Record<string, VttCombatantHealth | PublicNpcHealth>>({})
  const [combatHealthEditor, setCombatHealthEditor] = useState<{ tokenId: string; name: string } | null>(null)
  const requestedHealthTokenIdsRef = useRef<Set<string>>(new Set())
  const [sceneHazards, setSceneHazards] = useState<VttSceneHazard[]>([])
  const [hazardInstanceMenu, setHazardInstanceMenu] = useState<{ hazard: VttSceneHazard; x: number; y: number } | null>(null)
  const [bestiarySheetCreatureId, setBestiarySheetCreatureId] = useState<string | null>(null)
  const [activeHazardEncounter, setActiveHazardEncounter] = useState<{ candidate: VttHazardCandidate; notes: string } | null>(null)
  const [characterTokenSheet, setCharacterTokenSheet] = useState<CharacterTokenSheet | null>(null)
  const [inventoryTokenModal, setInventoryTokenModal] = useState<InventoryTokenModal | null>(null)
  const [gridBounds, setGridBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [viewportBounds, setViewportBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [panOffset, setPanOffset] = useState<VttPanOffset>({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [altNavigationActive, setAltNavigationActive] = useState(false)
  const [activeTool, setActiveTool] = useState<VttToolId | null>('select')
  const [toolsCollapsed, setToolsCollapsed] = useState(false)
  const [wallToolKind, setWallToolKind] = useState<VttWallSegment['kind']>('wall')
  const [wallColor, setWallColor] = useState(defaultWallColor)
  const [doorColor, setDoorColor] = useState(defaultDoorColor)
  const [wallDrafts, setWallDrafts] = useState<VttWallSegment[]>([])
  const wallDraftStartRef = useRef<VttMeasurementPoint | null>(null)
  const wallUndoStackRef = useRef<VttWallSegment[][]>([])
  const [wallContextMenu, setWallContextMenu] = useState<{ wall: VttWallSegment; x: number; y: number } | null>(null)
  const [selectionAreaDraft, setSelectionAreaDraft] = useState<VttSelectionArea | null>(null)
  const selectionAreaStartRef = useRef<{ pointerId: number; point: VttMeasurementPoint } | null>(null)
  const [measurement, setMeasurement] = useState<VttMeasurement | null>(null)
  const [diceClearSignal, setDiceClearSignal] = useState(0)
  const [zoomPercent, setZoomPercent] = useState(100)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true)
  const [rightPanelTab, setRightPanelTab] = useState<RightPanelTab>('encounter')
  const [encounterTrackerDetached, setEncounterTrackerDetached] = useState(false)
  const [chatDetached, setChatDetached] = useState(false)
  const [scenePreparationOpen, setScenePreparationOpen] = useState(false)
  const [preparedScenes, setPreparedScenes] = useState<PreparedScene[]>([createPreparedScene(1)])
  const [activeScene, setActiveScene] = useState<VttTableScene | null>(null)
  const [sceneSaveError, setSceneSaveError] = useState<string | null>(null)
  const [sceneSuccessMessage, setSceneSuccessMessage] = useState<string | null>(null)
  const [sceneSkippedFiles, setSceneSkippedFiles] = useState<string[]>([])
  const [sceneSaving, setSceneSaving] = useState(false)
  const [sceneDeletingId, setSceneDeletingId] = useState<string | null>(null)
  const [sceneAssetsLoadedCampaignId, setSceneAssetsLoadedCampaignId] = useState<string | null>(null)
  const [sceneRenderTarget, setSceneRenderTarget] = useState<SceneRenderTarget | null>(null)
  const [encounterState, setEncounterState] = useState<VttEncounterState | null>(null)
  const [spellCastTarget, setSpellCastTarget] = useState<{ characterId: string; tokenId: string; casterName: string } | null>(null)
  const [npcSpellCastTarget, setNpcSpellCastTarget] = useState<{ definitionId: string; tokenId: string; casterName: string } | null>(null)
  const [npcSpellTargetSelection, setNpcSpellTargetSelection] = useState<{
    request: Pathfinder2eNpcTargetSelectionRequest
    definitionId: string
    casterTokenId: string
    casterName: string
    selectedTokenIds: string[]
  } | null>(null)
  const [spellPlacement, setSpellPlacement] = useState<SpellPlacementState | null>(null)
  const [spellTargetSelection, setSpellTargetSelection] = useState<SpellTargetSelectionState | null>(null)
  const [spellArea, setSpellArea] = useState<VttSpellAreaOverlay | null>(null)
  const [spellCastFeedback, setSpellCastFeedback] = useState<string | null>(null)
  const spellAreaEmitAtRef = useRef(0)
  const spellFlashTimeoutRef = useRef<number | null>(null)
  const spellFeedbackTimeoutRef = useRef<number | null>(null)
  const spellCastingBusyRef = useRef(false)
  const [encounterTokenIds, setEncounterTokenIds] = useState<string[]>([])
  const [preselectedEncounterTokenIds, setPreselectedEncounterTokenIds] = useState<string[]>([])
  const [multiSelectedTokenIds, setMultiSelectedTokenIds] = useState<string[]>([])
  const [pendingEncounterHazardIds, setPendingEncounterHazardIds] = useState<string[]>([])
  const preparedScenesRef = useRef(preparedScenes)
  const activeSceneRef = useRef<VttTableScene | null>(null)
  const gridShapeRef = useRef(gridSettings.shape)
  const myCharacterIdRef = useRef<string | null>(myCharacter?.id ?? null)
  const sceneImageDimensionsRef = useRef(new Map<string, VttGridBounds>())
  const onGridSettingsChangeRef = useRef(onGridSettingsChange)
  const [sceneLoadingMessage, setSceneLoadingMessage] = useState<string | null>(null)
  const measurementGridKey = `${gridSettings.shape}:${gridSettings.size}:${gridSettings.metersPerCell}`
  const measurementGridKeyRef = useRef(measurementGridKey)

  const campaign = campaigns.find((item) => item.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const sessionActive = Boolean(campaign?.isOnline && sessionState !== 'PAUSED')
  const masterCanUseVtt = Boolean(isMaster)
  const playerCanUseVtt = Boolean(!isMaster && sessionActive)
  const realtimeVttEnabled = Boolean(sessionActive || masterCanUseVtt)
  const canRollDice = Boolean(
    campaignId &&
      campaign?.myStatus === 'ACTIVE' &&
      myCharacter?.id &&
      socket &&
      (campaign.myRole === 'MASTER' || playerCanUseVtt),
  )
  const activeZoomPercent = clampNumber(zoomPercent, zoomLimits.min, zoomLimits.max)
  const zoomedGridSettings = scaleGridSettings(gridSettings, activeZoomPercent)
  const tokenSize = getTokenSize(zoomedGridSettings)
  const boardPixelSize = getBoardPixelSize(tokenSize, activeZoomPercent, activeScene)
  const clampedPanOffset = clampPanOffset(panOffset, viewportBounds, boardPixelSize)
  const visibleToolButtons = toolButtons.filter((tool) => {
    if (tool.id === 'area-select') return Boolean(isMaster)
    if (tool.id === 'grid' || tool.id === 'tokens' || tool.id === 'hazards' || tool.id === 'walls') return canConfigureGrid
    return true
  })
  const playerTokens = tokenState.campaignId === campaignId ? tokenState.tokens : []
  const visibleTokens = isMaster ? playerTokens : playerTokens.filter((token) => !token.hidden)
  const playersCanSeeSceneWalls = Boolean(activeScene?.walls.some((wall) => wall.kind === 'wall' && wall.playerVisible))
  const spellPlacementRangeRing = (() => {
    if (!spellPlacement) return null
    const { rangeKind, rangeFeet, area } = spellPlacement.request
    if (rangeKind !== 'feet' || !rangeFeet) return null
    // Emanacao/cone/linha partem do proprio conjurador — sem anel de alcance.
    if (area.type === 'emanation' || area.type === 'cone' || area.type === 'line') return null
    const casterToken = playerTokens.find((token) => token.id === spellPlacement.casterTokenId)
    if (!casterToken) return null
    const radiusCells = pathfinder2eFeetToCells(rangeFeet, gridSettings.metersPerCell)
    if (radiusCells <= 0) return null
    const anchor = spellArea ? spellShapeAnchor(spellArea.shape) : casterToken.position
    const measuredDistance =
      gridSettings.shape === 'hex'
        ? hexDistanceInCells(casterToken.position, anchor)
        : distanceInCells(casterToken.position, anchor)
    return {
      center: casterToken.position,
      radiusCells,
      withinRange: measuredDistance <= radiusCells + 0.001,
    }
  })()
  const positionedCharacterIds = new Set<string>()
  const positionedPlayerOwnerUserIds = new Set<string>()
  preparedScenes.forEach((scene) => {
    scene.tokens.forEach((token) => {
      if (token.characterId) positionedCharacterIds.add(token.characterId)
      if (token.role === 'PLAYER') positionedPlayerOwnerUserIds.add(token.ownerUserId)
    })
  })
  playerTokens.forEach((token) => {
    if (token.characterId) positionedCharacterIds.add(token.characterId)
    if (token.role === 'PLAYER') positionedPlayerOwnerUserIds.add(token.ownerUserId)
  })
  const currentSceneTokenCount = playerTokens.length
  const globalTokenCount = positionedCharacterIds.size
  const availableTokenCandidates = tokenCandidates.filter(
    (candidate) =>
      (candidate.source === 'bestiary' || (candidate.characterId && !positionedCharacterIds.has(candidate.characterId))) &&
      (candidate.role !== 'PLAYER' || !positionedPlayerOwnerUserIds.has(candidate.ownerUserId)),
  )
  const availablePlayerTokenCandidates = availableTokenCandidates.filter(
    (candidate) => candidate.source === 'character' && candidate.role === 'PLAYER',
  )
  const availableOtherTokenCandidates = availableTokenCandidates.filter(
    (candidate) => !(candidate.source === 'character' && candidate.role === 'PLAYER'),
  )
  const activeEncounter =
    encounterState && encounterState.campaignId === campaignId ? encounterState : null
  const rightPanelSessionStatus =
    sessionState === 'PAUSED'
      ? {
          title: 'Sessao pausada',
          label: null,
          icon: Pause,
          className: 'border-amber-300/45 bg-amber-500/20 text-amber-100',
        }
      : campaign?.isOnline
        ? {
            title: 'Sessao online',
            label: 'ON',
            icon: null,
            className: 'border-emerald-300/45 bg-emerald-500/20 text-emerald-100',
          }
        : {
            title: 'Sessao offline',
            label: 'OFF',
            icon: null,
            className: 'border-red-300/45 bg-red-500/20 text-red-100',
          }
  const RightPanelSessionStatusIcon = rightPanelSessionStatus.icon
  const activeEncounterParticipant = activeEncounter?.participants[activeEncounter.activeTurnIndex] ?? null
  const activeEncounterTokenId = activeEncounterParticipant?.type === 'creature' ? activeEncounterParticipant.tokenId : null
  const encounterTokenCount = visibleTokens.filter((token) => !token.hidden).length
  const encounterTokens = encounterTokenIds
    .map((tokenId) => visibleTokens.find((token) => token.id === tokenId && !token.hidden))
    .filter((token): token is VttPlayerToken => Boolean(token))
  const preselectedEncounterTokens = preselectedEncounterTokenIds
    .map((tokenId) => visibleTokens.find((token) => token.id === tokenId && !token.hidden))
    .filter((token): token is VttPlayerToken => Boolean(token))
  const multiSelectedTokens = multiSelectedTokenIds
    .map((tokenId) => visibleTokens.find((token) => token.id === tokenId))
    .filter((token): token is VttPlayerToken => Boolean(token))
  const pendingEncounterHazards = pendingEncounterHazardIds
    .map((hazardId) => sceneHazards.find((hazard) => hazard.id === hazardId))
    .filter((hazard): hazard is VttSceneHazard => Boolean(hazard))
  const sceneEffectHazards = sceneHazards.filter((hazard) => hazard.sceneId === activeScene?.id && hazard.scope === 'SCENE')
  const canStartEncounter = Boolean(
    isMaster &&
      masterCanUseVtt &&
      sessionActive &&
      activeScene &&
      !activeEncounter &&
      (encounterTokens.length > 0 || pendingEncounterHazards.length > 0),
  )

  function canOpenCharacterTokenSheet(token: VttPlayerToken) {
    if (token.source !== 'character' || !token.characterId) return false
    if (isMaster) return true
    return Boolean(myCharacter?.role === 'PLAYER' && myCharacter.id === token.characterId)
  }

  function canOpenBestiaryTokenSheet(token: VttPlayerToken) {
    return Boolean(isMaster && token.source === 'bestiary' && token.bestiaryCreatureId)
  }

  function canOpenTokenContextMenu(token: VttPlayerToken) {
    return canOpenCharacterTokenSheet(token) || canOpenBestiaryTokenSheet(token)
  }

  function emitSpellArea(area: VttSpellAreaOverlay | null, throttled = false) {
    setSpellArea(area)
    if (!campaignId || !socket) return
    if (throttled) {
      const now = Date.now()
      if (now - spellAreaEmitAtRef.current < SPELL_AREA_EMIT_THROTTLE_MS) return
      spellAreaEmitAtRef.current = now
    }
    socket.emit('vtt:spell-area:update', { campaignId, area })
  }

  function showSpellCastFeedback(message: string) {
    setSpellCastFeedback(message)
    if (spellFeedbackTimeoutRef.current !== null) window.clearTimeout(spellFeedbackTimeoutRef.current)
    spellFeedbackTimeoutRef.current = window.setTimeout(() => setSpellCastFeedback(null), 5000)
  }

  function createClientResolveId() {
    return globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
  }

  function formatResolutionFeedback(resolution: Pathfinder2eResolveResponse) {
    if (resolution.results.length === 0) return `${resolution.spellName}: nenhum resultado aplicado.`
    const parts = resolution.results.map(
      (result) => `${result.targetName} ${DEGREE_LABEL_PT[result.degree]} (${result.damageApplied} de dano)`,
    )
    return `${resolution.spellName} — DC ${resolution.spellDC}, dano ${resolution.damageRoll.total}: ${parts.join('; ')}.`
  }

  function openSpellCastPanel(token: VttPlayerToken) {
    if (!token.characterId) return
    setTokenContextMenu(null)
    setSpellCastTarget({ characterId: token.characterId, tokenId: token.id, casterName: token.name })
  }

  function beginSpellAreaPlacement(request: Pathfinder2eAreaPlacementRequest) {
    if (!spellCastTarget) return
    if (gridSettings.shape === 'hex' && !HEX_SUPPORTED_SPELL_AREA_TYPES.has(request.area.type)) {
      showSpellCastFeedback('Esta forma de area (cone/linha/quadrado/cubo) ainda nao e suportada em grid hexagonal.')
      return
    }

    const casterToken = playerTokens.find((token) => token.id === spellCastTarget.tokenId)
    if (!casterToken) {
      showSpellCastFeedback('Token do conjurador nao encontrado na cena.')
      return
    }

    const initialShape = buildPathfinder2eAreaShape(
      { type: request.area.type, valueFeet: request.area.valueFeet },
      casterToken.position,
      0,
      gridSettings.metersPerCell,
    )
    if (!initialShape) {
      showSpellCastFeedback(`Tipo de area "${request.area.type}" ainda nao suportado.`)
      return
    }

    const placement: SpellPlacementState = {
      request,
      characterId: spellCastTarget.characterId,
      casterTokenId: spellCastTarget.tokenId,
      casterName: spellCastTarget.casterName,
    }
    setSpellCastTarget(null)
    setSpellPlacement(placement)
    emitSpellArea({
      shape: initialShape,
      color: SPELL_AREA_COLOR,
      label: `${request.spellName} — ${placement.casterName}`,
      casterTokenId: placement.casterTokenId,
      phase: 'PREVIEW',
    })
  }

  function updateSpellPlacement(event: React.PointerEvent<HTMLDivElement>) {
    if (!spellPlacement) return
    const casterToken = playerTokens.find((token) => token.id === spellPlacement.casterTokenId)
    if (!casterToken) return

    const rect = event.currentTarget.getBoundingClientRect()
    const cursor = {
      x: (event.clientX - rect.left) / tokenSize,
      y: (event.clientY - rect.top) / tokenSize,
    }

    const areaType = spellPlacement.request.area.type
    let origin: ScenePoint
    let direction = 0
    if (areaType === 'emanation') {
      origin = casterToken.position
    } else if (areaType === 'cone' || areaType === 'line') {
      origin = casterToken.position
      direction = Math.atan2(cursor.y - origin.y, cursor.x - origin.x)
    } else if (gridSettings.shape === 'hex') {
      // Bursts/cilindros em hex ancoram no centro do hexagono mais proximo.
      origin = hexCellCenter(hexCellFromPoint(cursor))
    } else {
      // Bursts/quadrados PF2e ancoram em intersecoes do grid quadrado.
      origin = { x: Math.round(cursor.x), y: Math.round(cursor.y) }
    }

    const shape = buildPathfinder2eAreaShape(
      { type: areaType, valueFeet: spellPlacement.request.area.valueFeet },
      origin,
      direction,
      gridSettings.metersPerCell,
    )
    if (!shape) return

    emitSpellArea(
      {
        shape,
        color: SPELL_AREA_COLOR,
        label: `${spellPlacement.request.spellName} — ${spellPlacement.casterName}`,
        casterTokenId: spellPlacement.casterTokenId,
        phase: 'PREVIEW',
      },
      true,
    )
  }

  function cancelSpellPlacement() {
    emitSpellArea(null)
    setSpellPlacement(null)
  }

  async function confirmSpellPlacement() {
    if (!spellPlacement || !spellArea || spellCastingBusyRef.current) return
    if (!activeScene) {
      showSpellCastFeedback('Cena ativa nao encontrada para validar a area.')
      return
    }
    if (spellPlacementRangeRing && !spellPlacementRangeRing.withinRange) {
      showSpellCastFeedback('Fora do alcance da magia.')
      return
    }

    spellCastingBusyRef.current = true
    try {
      const result = await castSpell(spellPlacement.characterId, {
        ...spellPlacement.request.cast,
        placement: {
          sceneId: activeScene.id,
          casterTokenId: spellPlacement.casterTokenId,
          shape: spellArea.shape,
        },
      })
      emitSpellArea({ ...spellArea, phase: 'CAST' })
      if (spellFlashTimeoutRef.current !== null) window.clearTimeout(spellFlashTimeoutRef.current)
      spellFlashTimeoutRef.current = window.setTimeout(() => emitSpellArea(null), SPELL_CAST_FLASH_MS)
      showSpellCastFeedback(`${result.spellName} conjurada — consumo: ${result.consumed}`)
    } catch (error) {
      emitSpellArea(null)
      showSpellCastFeedback(error instanceof Error ? error.message : 'Erro ao conjurar')
    } finally {
      spellCastingBusyRef.current = false
      setSpellPlacement(null)
    }
  }

  function beginSpellTargetSelection(request: Pathfinder2eTargetSelectionRequest) {
    if (!spellCastTarget) return
    setSpellCastTarget(null)
    setSpellTargetSelection({
      request,
      characterId: spellCastTarget.characterId,
      casterTokenId: spellCastTarget.tokenId,
      casterName: spellCastTarget.casterName,
      selectedTokenIds: [],
    })
  }

  function toggleSpellTarget(token: VttPlayerToken) {
    setSpellTargetSelection((current) => {
      if (!current) return current
      const alreadySelected = current.selectedTokenIds.includes(token.id)
      if (alreadySelected) {
        return { ...current, selectedTokenIds: current.selectedTokenIds.filter((id) => id !== token.id) }
      }
      if (current.selectedTokenIds.length >= current.request.targetProfile.max) return current
      return { ...current, selectedTokenIds: [...current.selectedTokenIds, token.id] }
    })
  }

  function cancelSpellTargetSelection() {
    setSpellTargetSelection(null)
  }

  async function confirmSpellTargetSelection() {
    if (!spellTargetSelection || spellCastingBusyRef.current) return
    if (spellTargetSelection.selectedTokenIds.length < spellTargetSelection.request.targetProfile.min) return
    if (!activeScene) {
      showSpellCastFeedback('Cena ativa nao encontrada para validar os alvos.')
      return
    }

    spellCastingBusyRef.current = true
    try {
      const result = await castSpell(spellTargetSelection.characterId, {
        ...spellTargetSelection.request.cast,
        caster: { sceneId: activeScene.id, casterTokenId: spellTargetSelection.casterTokenId },
        targets: spellTargetSelection.selectedTokenIds,
      })
      showSpellCastFeedback(`${result.spellName} conjurada — consumo: ${result.consumed}`)

      if (spellTargetSelection.request.resolution.kind === 'basicSaveDamage') {
        try {
          const resolution = await resolveSpellCast(spellTargetSelection.characterId, spellTargetSelection.request.cast.spellId, {
            clientResolveId: createClientResolveId(),
            clientCastId: spellTargetSelection.request.cast.clientCastId,
            entryId: spellTargetSelection.request.cast.entryId,
            sceneId: activeScene.id,
            casterTokenId: spellTargetSelection.casterTokenId,
            targetTokenIds: spellTargetSelection.selectedTokenIds,
          })
          showSpellCastFeedback(formatResolutionFeedback(resolution))
        } catch (resolveError) {
          showSpellCastFeedback(resolveError instanceof Error ? resolveError.message : 'Erro ao resolver a magia')
        }
      }
    } catch (error) {
      showSpellCastFeedback(error instanceof Error ? error.message : 'Erro ao conjurar')
    } finally {
      spellCastingBusyRef.current = false
      setSpellTargetSelection(null)
    }
  }

  function openNpcSpellCastPanel(token: VttPlayerToken) {
    if (!token.campaignNpcDefinitionId) return
    setTokenContextMenu(null)
    setNpcSpellCastTarget({ definitionId: token.campaignNpcDefinitionId, tokenId: token.id, casterName: token.name })
  }

  function beginNpcSpellTargetSelection(request: Pathfinder2eNpcTargetSelectionRequest) {
    if (!npcSpellCastTarget) return
    setNpcSpellCastTarget(null)
    setNpcSpellTargetSelection({
      request,
      definitionId: npcSpellCastTarget.definitionId,
      casterTokenId: npcSpellCastTarget.tokenId,
      casterName: npcSpellCastTarget.casterName,
      selectedTokenIds: [],
    })
  }

  function toggleNpcSpellTarget(token: VttPlayerToken) {
    setNpcSpellTargetSelection((current) => {
      if (!current) return current
      const alreadySelected = current.selectedTokenIds.includes(token.id)
      if (alreadySelected) {
        return { ...current, selectedTokenIds: current.selectedTokenIds.filter((id) => id !== token.id) }
      }
      if (current.selectedTokenIds.length >= current.request.targetProfile.max) return current
      return { ...current, selectedTokenIds: [...current.selectedTokenIds, token.id] }
    })
  }

  function cancelNpcSpellTargetSelection() {
    setNpcSpellTargetSelection(null)
  }

  async function confirmNpcSpellTargetSelection() {
    if (!npcSpellTargetSelection || !campaignId || spellCastingBusyRef.current) return
    if (npcSpellTargetSelection.selectedTokenIds.length < npcSpellTargetSelection.request.targetProfile.min) return
    if (!activeScene) {
      showSpellCastFeedback('Cena ativa nao encontrada para validar os alvos.')
      return
    }

    spellCastingBusyRef.current = true
    try {
      const result = await castNpcSpell(campaignId, npcSpellTargetSelection.definitionId, {
        ...npcSpellTargetSelection.request.cast,
        caster: { sceneId: activeScene.id, casterTokenId: npcSpellTargetSelection.casterTokenId },
        targets: npcSpellTargetSelection.selectedTokenIds,
      })
      showSpellCastFeedback(`${result.spellName} conjurada — consumo: ${result.consumed}`)

      if (npcSpellTargetSelection.request.resolution.kind === 'basicSaveDamage') {
        try {
          const resolution = await resolveNpcSpellCast(
            campaignId,
            npcSpellTargetSelection.definitionId,
            npcSpellTargetSelection.request.cast.spellId,
            {
              entryId: npcSpellTargetSelection.request.cast.entryId,
              sceneId: activeScene.id,
              casterTokenId: npcSpellTargetSelection.casterTokenId,
              targetTokenIds: npcSpellTargetSelection.selectedTokenIds,
            },
          )
          showSpellCastFeedback(formatResolutionFeedback(resolution))
        } catch (resolveError) {
          showSpellCastFeedback(resolveError instanceof Error ? resolveError.message : 'Erro ao resolver a magia')
        }
      }
    } catch (error) {
      showSpellCastFeedback(error instanceof Error ? error.message : 'Erro ao conjurar')
    } finally {
      spellCastingBusyRef.current = false
      setNpcSpellTargetSelection(null)
    }
  }

  async function syncTableState() {
    if (!campaignId || !isMaster) return

    const currentActiveScene = activeSceneRef.current
    const currentPreparedScenes = preparedScenesRef.current

    const scenes = currentPreparedScenes
      .filter((scene) => !isDraftPreparedScene(scene))
      .map((scene) => ({
        id: scene.id,
        grid: currentActiveScene?.id === scene.id ? gridSettings : scene.grid,
        tokens: scene.tokens.map((token) => ({
          id: token.id,
          source: token.source,
          characterId: token.characterId,
          bestiaryCreatureId: token.bestiaryCreatureId ?? null,
          name: token.name,
          avatarUrl: token.avatarUrl,
          tokenBorderColor: token.tokenBorderColor ?? null,
          hidden: token.hidden,
          position: token.position,
        })),
        walls: currentActiveScene?.id === scene.id ? currentActiveScene.walls : scene.walls,
      }))

    const syncedScenes = await api<CampaignSceneResponse[]>(
      `/api/campaigns/${encodeURIComponent(campaignId)}/scenes/table-state`,
      {
        method: 'PUT',
        body: JSON.stringify({
          masterActiveSceneId: currentActiveScene?.id ?? null,
          scenes,
        }),
      },
    )

    setPreparedScenes((current) => {
      current.forEach(revokeSceneImageUrl)
      const next = normalizePreparedSceneList(syncedScenes.map(sceneResponseToPreparedScene))
      preparedScenesRef.current = next
      activeSceneRef.current = currentActiveScene
      return next
    })
  }

  useImperativeHandle(ref, () => ({ syncTableState }), [campaignId, gridSettings, isMaster])

  useEffect(() => {
    setTokenMovementSpeed(campaignId ? readStoredCampaignUserSettings(campaignId).vtt.tokenMovementSpeed : 'default')
  }, [campaignId])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Alt') setAltNavigationActive(true)
    }

    function onKeyUp(event: KeyboardEvent) {
      if (event.key === 'Alt') setAltNavigationActive(false)
    }

    function onWindowBlur() {
      setAltNavigationActive(false)
      panningRef.current = null
      setIsPanning(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', onWindowBlur)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', onWindowBlur)
    }
  }, [])

  useEffect(() => {
    function onVttTableSettingsChanged(event: Event) {
      const detail = (event as CustomEvent<{ campaignId: string; settings: { tokenMovementSpeed?: unknown } }>).detail
      if (!detail || detail.campaignId !== campaignId) return
      setTokenMovementSpeed(normalizeVttTokenMovementSpeed(detail.settings.tokenMovementSpeed))
    }

    window.addEventListener(VTT_TABLE_SETTINGS_CHANGED_EVENT, onVttTableSettingsChanged)
    return () => window.removeEventListener(VTT_TABLE_SETTINGS_CHANGED_EVENT, onVttTableSettingsChanged)
  }, [campaignId])

  useEffect(() => {
    const element = gridAreaRef.current
    if (!element) return

    const updateBounds = () => {
      const bounds = element.getBoundingClientRect()
      setGridBounds({ width: bounds.width, height: bounds.height })
    }
    const animationFrame = window.requestAnimationFrame(updateBounds)
    const observer = new ResizeObserver(updateBounds)
    observer.observe(element)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const element = boardViewportRef.current
    if (!element) return

    const updateBounds = () => {
      const bounds = element.getBoundingClientRect()
      setViewportBounds({ width: bounds.width, height: bounds.height })
    }
    const animationFrame = window.requestAnimationFrame(updateBounds)
    const observer = new ResizeObserver(updateBounds)
    observer.observe(element)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!campaignId) return
    if (campaign?.myRole !== 'MASTER') return
    if (campaign.myStatus !== 'ACTIVE') return
    if (socket) return

    connectRealtime()
  }, [campaign?.myRole, campaign?.myStatus, campaignId, connectRealtime, socket])

  useEffect(() => {
    if (!activeScene) return
    setPanOffset(getCenteredPanOffset(viewportBounds, boardPixelSize))
  }, [activeScene?.id, activeZoomPercent, boardPixelSize.height, boardPixelSize.width, viewportBounds.height, viewportBounds.width])

  useEffect(() => {
    wallUndoStackRef.current = []
    setWallContextMenu(null)
  }, [activeScene?.id])

  useEffect(() => {
    onGridSettingsChangeRef.current = onGridSettingsChange
  }, [onGridSettingsChange])

  useEffect(() => {
    activeSceneRef.current = activeScene
  }, [activeScene])

  useEffect(() => {
    gridShapeRef.current = gridSettings.shape
  }, [gridSettings.shape])

  useEffect(() => {
    myCharacterIdRef.current = myCharacter?.id ?? null
  }, [myCharacter?.id])

  function startSceneLoading(scene: VttTableScene | null, message = 'Carregando cena...') {
    const imageKey = scene?.imageUrl ? sceneImageDimensionKey(scene) : null
    const nextTarget = {
      sceneId: scene?.id ?? null,
      imageKey,
      tokenCount: scene?.tokens.length ?? 0,
    }
    setSceneRenderTarget((current) => {
      if (
        current?.sceneId === nextTarget.sceneId &&
        current.imageKey === nextTarget.imageKey &&
        current.tokenCount === nextTarget.tokenCount
      ) {
        return current
      }

      return nextTarget
    })
    setSceneLoadingMessage((current) => (current === message ? current : message))
  }

  function finishSceneImageLoading(scene: Pick<VttTableScene, 'id' | 'imageUrl'>) {
    const sceneKey = sceneImageDimensionKey(scene)
    if (sceneRenderTarget?.imageKey !== sceneKey) return
    setSceneRenderTarget((current) => (current?.imageKey === sceneKey ? { ...current } : current))
  }

  useEffect(() => {
    if (!sceneRenderTarget) return

    let cancelled = false
    let animationFrame = 0
    let stableFrames = 0
    let attempts = 0

    const isSceneRendered = () => {
      const currentSceneId = activeScene?.id ?? null
      if (currentSceneId !== sceneRenderTarget.sceneId) return false
      if (tokenState.campaignId !== campaignId) return false
      if (tokenState.tokens.length !== sceneRenderTarget.tokenCount) return false

      const viewport = boardViewportRef.current
      const gridArea = gridAreaRef.current
      if (!viewport || !gridArea) return false

      const viewportBounds = viewport.getBoundingClientRect()
      const gridBounds = gridArea.getBoundingClientRect()
      if (viewportBounds.width <= 0 || viewportBounds.height <= 0) return false
      if (gridBounds.width <= 0 || gridBounds.height <= 0) return false

      if (Math.abs(gridBounds.width - boardPixelSize.width) > 1) return false
      if (Math.abs(gridBounds.height - boardPixelSize.height) > 1) return false

      if (!sceneRenderTarget.imageKey) return true
      if (!activeScene || sceneImageDimensionKey(activeScene) !== sceneRenderTarget.imageKey) return false

      const image = backgroundImageRef.current
      return Boolean(image?.complete && image.naturalWidth > 0 && image.naturalHeight > 0)
    }

    const waitForStableRender = () => {
      if (cancelled) return

      attempts += 1
      stableFrames = isSceneRendered() ? stableFrames + 1 : 0

      if (stableFrames >= 4 || attempts >= 180) {
        setSceneLoadingMessage(null)
        setSceneRenderTarget(null)
        return
      }

      animationFrame = window.requestAnimationFrame(waitForStableRender)
    }

    animationFrame = window.requestAnimationFrame(waitForStableRender)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(animationFrame)
    }
  }, [
    activeScene,
    boardPixelSize.height,
    boardPixelSize.width,
    campaignId,
    sceneRenderTarget,
    tokenState.campaignId,
    tokenState.tokens.length,
  ])

  useEffect(() => {
    if (!campaignId || !isMaster || activeTool !== 'tokens') return

    let cancelled = false
    api<VttTokenCandidate[]>(`/api/campaigns/${campaignId}/token-candidates`)
      .then((items) => {
        if (!cancelled) setTokenCandidates(items)
      })
      .catch(() => {
        if (!cancelled) setTokenCandidates([])
      })

    return () => {
      cancelled = true
    }
  }, [activeTool, campaignId, isMaster, tokenCandidatesRefreshKey])

  useEffect(() => {
    if (!campaignId || !isMaster || activeTool !== 'hazards') return

    let cancelled = false
    api<VttHazardCandidate[]>(`/api/campaigns/${campaignId}/hazard-candidates`)
      .then((items) => {
        if (!cancelled) setHazardCandidates(items)
      })
      .catch(() => {
        if (!cancelled) setHazardCandidates([])
      })

    return () => {
      cancelled = true
    }
  }, [activeTool, campaignId, hazardCandidatesRefreshKey, isMaster])

  useEffect(() => {
    if (!campaignId) return

    function onPreparedBestiaryTokensChanged(event: Event) {
      const detail = (event as CustomEvent<{ campaignId: string }>).detail
      if (detail?.campaignId !== campaignId) return
      setTokenCandidatesRefreshKey((current) => current + 1)
    }

    window.addEventListener(PREPARED_BESTIARY_TOKENS_CHANGED_EVENT, onPreparedBestiaryTokensChanged)
    return () => window.removeEventListener(PREPARED_BESTIARY_TOKENS_CHANGED_EVENT, onPreparedBestiaryTokensChanged)
  }, [campaignId])

  useEffect(() => {
    if (!campaignId) return

    function onPreparedHazardsChanged(event: Event) {
      const detail = (event as CustomEvent<{ campaignId: string }>).detail
      if (detail?.campaignId !== campaignId) return
      setHazardCandidatesRefreshKey((current) => current + 1)
    }

    window.addEventListener(PREPARED_HAZARDS_CHANGED_EVENT, onPreparedHazardsChanged)
    return () => window.removeEventListener(PREPARED_HAZARDS_CHANGED_EVENT, onPreparedHazardsChanged)
  }, [campaignId])

  useEffect(() => {
    const online = Boolean(campaign?.isOnline)
    const previous = previousCampaignOnlineRef.current

    if (previous.campaignId !== (campaignId ?? null)) {
      previousCampaignOnlineRef.current = { campaignId: campaignId ?? null, online }
      return
    }

    if (previous.online && !online) {
      setDiceClearSignal((current) => current + 1)
      setEncounterState(null)
    }

    previousCampaignOnlineRef.current = { campaignId: campaignId ?? null, online }
  }, [campaign?.isOnline, campaignId])

  useEffect(() => {
    const availableTokenIds = new Set(visibleTokens.filter((token) => !token.hidden).map((token) => token.id))
    setEncounterTokenIds((current) => {
      const next = current.filter((tokenId) => availableTokenIds.has(tokenId))
      return next.length === current.length ? current : next
    })
    setPreselectedEncounterTokenIds((current) => {
      const next = current.filter((tokenId) => availableTokenIds.has(tokenId))
      return next.length === current.length ? current : next
    })
    setMultiSelectedTokenIds((current) => {
      const next = current.filter((tokenId) => availableTokenIds.has(tokenId))
      return next.length === current.length ? current : next
    })
  }, [activeScene?.id, visibleTokens])

  useEffect(() => {
    if (!activeEncounter) return
    setEncounterTokenIds((current) => (current.length ? [] : current))
    setPendingEncounterHazardIds((current) => (current.length ? [] : current))
  }, [activeEncounter])

  useEffect(() => {
    if (!socket || !campaignId) return
    const currentCampaignId = campaignId

    function applySceneSnapshot(scene: VttTableScene | null) {
      startSceneLoading(scene)

      if (!scene) {
        setActiveScene(null)
        setTokenState({ campaignId: currentCampaignId, tokens: [] })
        if (!isMaster) onGridSettingsChangeRef.current(defaultGridSettings)
        return
      }

      const normalizedScene = { ...scene, walls: normalizeWallSegments(scene.walls) }
      const sceneKey = sceneImageDimensionKey(scene)
      setActiveScene((current) => {
        const cachedDimensions = sceneImageDimensionsRef.current.get(sceneKey)
        const currentDimensions =
          current && sceneImageDimensionKey(current) === sceneKey ? { width: current.width, height: current.height } : null
        const dimensions = cachedDimensions ?? currentDimensions
        const nextScene = dimensions ? { ...normalizedScene, width: dimensions.width, height: dimensions.height } : normalizedScene
        activeSceneRef.current = nextScene
        return nextScene
      })

      const sceneGrid = normalizeGridSettings(scene.grid)
      onGridSettingsChangeRef.current(sceneGrid, { realtime: false, sceneId: scene.id })
      const sceneTokens = scene.tokens.map((token) => normalizeTableToken(token, sceneGrid.shape))
      setTokenState({
        campaignId: currentCampaignId,
        tokens: sceneTokens,
      })
      if (isMaster) {
        setPreparedScenes((current) => {
          const next = current.map((preparedScene) =>
            preparedScene.id === scene.id ? { ...preparedScene, grid: sceneGrid, tokens: sceneTokens, walls: normalizedScene.walls } : preparedScene,
          )
          preparedScenesRef.current = next
          return next
        })
      }
    }

    function onTokenChanged(payload: VttTokenChangedPayload) {
      if (payload.campaignId !== campaignId) return
      const activeSceneId = activeSceneRef.current?.id ?? null
      if (payload.sceneId && payload.sceneId !== activeSceneId) return

      const token = normalizeTableToken(payload.token, gridShapeRef.current)
      if (payload.movementPath && payload.movementPath.length >= 2) {
        setTokenMovementPaths((current) => (current[token.id] ? current : { ...current, [token.id]: payload.movementPath ?? [] }))
      }

      setTokenState((current) => {
        const currentTokens = current.campaignId === campaignId ? current.tokens : []
        const index = currentTokens.findIndex((item) => item.id === token.id)
        if (index === -1) return { campaignId, tokens: [...currentTokens, token] }

        const next = [...currentTokens]
        next[index] = token
        return { campaignId, tokens: next }
      })
      setPreparedScenes((current) =>
        current.map((scene) => {
          if (scene.id !== activeSceneId) return scene
          const index = scene.tokens.findIndex((item) => item.id === payload.token.id)
          const tokens = index === -1 ? [...scene.tokens, payload.token] : scene.tokens.map((item) => (item.id === payload.token.id ? payload.token : item))
          return { ...scene, tokens }
        }),
      )
    }

    function onTokensSnapshot(payload: VttTokensSnapshotPayload) {
      if (payload.campaignId !== campaignId) return
      if (isMaster) return
      if (payload.sceneId && payload.sceneId !== activeSceneRef.current?.id) return
      setTokenState({
        campaignId,
        tokens: payload.tokens.map((token) => normalizeTableToken(token, gridShapeRef.current)),
      })
    }

    function onTokenRemoved(payload: VttTokenRemovedPayload) {
      if (payload.campaignId !== campaignId) return
      const isOwnRemovedToken = !isMaster && payload.characterId === myCharacterIdRef.current
      if (isOwnRemovedToken) {
        setActiveScene(null)
        setTokenState({ campaignId, tokens: [] })
        measurementRef.current = null
        setMeasurement(null)
        return
      }
      if (payload.sceneId && payload.sceneId !== activeSceneRef.current?.id) return
      removeTokenFromLocalScene({ id: payload.tokenId, characterId: payload.characterId ?? null }, payload.sceneId ?? null)
    }

    function onMeasurementChanged(payload: VttMeasurementChangedPayload) {
      if (payload.campaignId !== campaignId) return
      measurementRef.current = payload.measurement
      setMeasurement(payload.measurement)
    }

    function onSceneChanged(payload: VttSceneChangedPayload) {
      if (payload.campaignId !== campaignId) return
      applySceneSnapshot(payload.scene)
    }

    function onMeasurementSnapshot(payload: VttMeasurementChangedPayload) {
      if (payload.campaignId !== campaignId) return
      if (isMaster) return
      measurementRef.current = payload.measurement
      setMeasurement(payload.measurement)
    }

    function onSceneSnapshot(payload: VttSceneChangedPayload) {
      if (payload.campaignId !== campaignId) return
      applySceneSnapshot(payload.scene)
    }

    function onWallsChanged(payload: VttWallsChangedPayload) {
      if (payload.campaignId !== campaignId) return
      if (payload.sceneId !== activeSceneRef.current?.id) return
      const walls = normalizeWallSegments(payload.walls)
      setActiveScene((current) => {
        const next = current && current.id === payload.sceneId ? { ...current, walls } : current
        activeSceneRef.current = next
        return next
      })
      setPreparedScenes((current) => {
        const next = current.map((scene) => (scene.id === payload.sceneId ? { ...scene, walls } : scene))
        preparedScenesRef.current = next
        return next
      })
    }

    function onEncounterChanged(payload: VttEncounterChangedPayload) {
      if (payload.campaignId !== campaignId) return
      setEncounterState(payload.encounter)
    }

    function onHazardsSnapshot(payload: VttHazardsSnapshotPayload) {
      if (payload.campaignId !== campaignId) return
      setSceneHazards(payload.hazards)
    }

    function onHazardChanged(payload: VttHazardChangedPayload) {
      if (payload.campaignId !== campaignId) return
      setSceneHazards((current) => [...current.filter((item) => item.id !== payload.hazard.id), payload.hazard])
    }

    function onHazardRemoved(payload: VttHazardRemovedPayload) {
      if (payload.campaignId !== campaignId) return
      setSceneHazards((current) => current.filter((item) => item.id !== payload.hazardId))
      setHazardInstanceMenu((current) => (current?.hazard.id === payload.hazardId ? null : current))
    }

    function onCombatHealthChanged(payload: VttCombatHealthChangedPayload) {
      if (payload.campaignId !== campaignId) return
      setCombatHealthByTokenId((current) => ({ ...current, [payload.tokenId]: payload.health }))
    }

    function onSpellAreaChanged(payload: VttSpellAreaChangedPayload) {
      if (payload.campaignId !== campaignId) return
      setSpellArea(payload.area)
    }

    socket.on('vtt:spell-area:changed', onSpellAreaChanged)
    socket.on('vtt:token:changed', onTokenChanged)
    socket.on('vtt:tokens:snapshot', onTokensSnapshot)
    socket.on('vtt:token:removed', onTokenRemoved)
    socket.on('vtt:measurement:changed', onMeasurementChanged)
    socket.on('vtt:measurement:snapshot', onMeasurementSnapshot)
    socket.on('vtt:scene:changed', onSceneChanged)
    socket.on('vtt:scene:snapshot', onSceneSnapshot)
    socket.on('vtt:walls:changed', onWallsChanged)
    socket.on('vtt:encounter:changed', onEncounterChanged)
    socket.on('vtt:hazards:snapshot', onHazardsSnapshot)
    socket.on('vtt:hazard:changed', onHazardChanged)
    socket.on('vtt:hazard:removed', onHazardRemoved)
    socket.on('vtt:combat:health:changed', onCombatHealthChanged)

    if (isMaster) {
      socket.emit('vtt:scene:request', { campaignId })
    } else {
      socket.emit('vtt:tokens:request', { campaignId })
      socket.emit('vtt:measurement:request', { campaignId })
      socket.emit('vtt:scene:request', { campaignId })
    }
    socket.emit('vtt:encounter:request', { campaignId })
    socket.emit('vtt:spell-area:request', { campaignId })

    return () => {
      socket.off('vtt:token:changed', onTokenChanged)
      socket.off('vtt:tokens:snapshot', onTokensSnapshot)
      socket.off('vtt:token:removed', onTokenRemoved)
      socket.off('vtt:measurement:changed', onMeasurementChanged)
      socket.off('vtt:measurement:snapshot', onMeasurementSnapshot)
      socket.off('vtt:scene:changed', onSceneChanged)
      socket.off('vtt:scene:snapshot', onSceneSnapshot)
      socket.off('vtt:walls:changed', onWallsChanged)
      socket.off('vtt:encounter:changed', onEncounterChanged)
      socket.off('vtt:hazards:snapshot', onHazardsSnapshot)
      socket.off('vtt:hazard:changed', onHazardChanged)
      socket.off('vtt:hazard:removed', onHazardRemoved)
      socket.off('vtt:combat:health:changed', onCombatHealthChanged)
      socket.off('vtt:spell-area:changed', onSpellAreaChanged)
    }
  }, [socket, campaignId, isMaster])

  useEffect(() => {
    if (!encounterState) return
    setCombatHealthByTokenId((current) => {
      let changed = false
      const next = { ...current }
      for (const participant of encounterState.participants) {
        if (participant.type !== 'creature' || !participant.health) continue
        if (next[participant.tokenId] === participant.health) continue
        next[participant.tokenId] = participant.health
        changed = true
      }
      return changed ? next : current
    })
  }, [encounterState])

  useEffect(() => {
    if (!campaignId || !socket) return
    visibleTokens.forEach((token) => {
      // Gate so pelo resultado (combatHealthByTokenId), nao por um "ja pedi" permanente:
      // se a 1a tentativa se perder (ex.: token ainda nao hidratado no servidor no exato
      // instante do pedido), o efeito tenta de novo no proximo render em vez de travar pra
      // sempre esperando uma resposta que nunca chegou.
      if (combatHealthByTokenId[token.id] !== undefined) return
      socket.emit('vtt:combat:health:request', { campaignId, tokenId: token.id })
    })
  }, [campaignId, socket, visibleTokens, combatHealthByTokenId])

  useEffect(() => {
    if (measurementGridKeyRef.current === measurementGridKey) return
    measurementGridKeyRef.current = measurementGridKey
    measuringRef.current = false
    measurementRef.current = null
    setMeasurement(null)
    if (campaignId && socket) socket.emit('vtt:measurement:update', { campaignId, measurement: null })
  }, [campaignId, measurementGridKey, socket])

  useEffect(() => {
    preparedScenesRef.current = preparedScenes
  }, [preparedScenes])

  useEffect(() => {
    return () => {
      preparedScenesRef.current.forEach((scene) => {
        revokeSceneImageUrl(scene)
      })
    }
  }, [])

  useEffect(() => {
    if (!campaignId || !isMaster) return
    if (sceneAssetsLoadedCampaignId === campaignId) return

    let cancelled = false
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    api<CampaignSceneResponse[]>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes`)
      .then((scenes) => {
        if (cancelled) return

        setPreparedScenes((current) => {
          current.forEach(revokeSceneImageUrl)
          const next = normalizePreparedSceneList(scenes.map(sceneResponseToPreparedScene))
          preparedScenesRef.current = next
          return next
        })
        setSceneAssetsLoadedCampaignId(campaignId)
      })
      .catch((err) => {
        if (!cancelled && scenePreparationOpen) setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel carregar cenas.')
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, isMaster, sceneAssetsLoadedCampaignId, scenePreparationOpen])

  useEffect(() => {
    if (!isMaster || !activeScene) return
    if (preparedScenes.some((scene) => scene.id === activeScene.id && !isDraftPreparedScene(scene))) return
    setActiveScene(null)
    if (campaignId && socket && masterCanUseVtt) socket.emit('vtt:scene:select', { campaignId, scene: null })
  }, [activeScene, campaignId, isMaster, masterCanUseVtt, preparedScenes, socket])

  function publishSceneSelection(scene: VttTableScene | null) {
    if (!campaignId || !socket || !masterCanUseVtt) return
    socket.emit('vtt:scene:select', { campaignId, scene })
  }

  function handleGridSettingsChange(settings: VttGridSettings) {
    onGridSettingsChange(settings, { sceneId: activeScene?.id })
    if (!campaignId || !isMaster || !activeScene) return

    setPreparedScenes((current) =>
      current.map((scene) => (scene.id === activeScene.id ? { ...scene, grid: settings } : scene)),
    )
    setActiveScene((current) => (current ? { ...current, grid: settings } : current))
    if (!campaign?.isOnline) {
      api<CampaignSceneResponse>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(activeScene.id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ grid: settings }),
      }).catch(() => {})
    }
  }

  function persistSceneWalls(sceneId: string, walls: VttWallSegment[]) {
    if (!campaignId || !isMaster) return

    api<CampaignSceneResponse>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(sceneId)}`, {
      method: 'PATCH',
      body: JSON.stringify({ walls }),
    }).catch(() => {})
  }

  function applyActiveSceneWalls(nextWalls: VttWallSegment[]) {
    const currentActiveScene = activeSceneRef.current ?? activeScene
    if (!currentActiveScene || !isMaster) return

    const nextActiveScene = { ...currentActiveScene, walls: nextWalls }
    const nextPreparedScenes = preparedScenesRef.current.map((scene) =>
      scene.id === currentActiveScene.id ? { ...scene, walls: nextWalls } : scene,
    )

    activeSceneRef.current = nextActiveScene
    preparedScenesRef.current = nextPreparedScenes

    setActiveScene((current) => {
      if (!current || current.id !== currentActiveScene.id) return current
      return nextActiveScene
    })
    setPreparedScenes(nextPreparedScenes)
    persistSceneWalls(currentActiveScene.id, nextWalls)
    if (campaignId && socket) socket.emit('vtt:walls:update', { campaignId, sceneId: currentActiveScene.id, walls: nextWalls })
  }

  function updateActiveSceneWalls(updater: (walls: VttWallSegment[]) => VttWallSegment[], options?: { recordUndo?: boolean }) {
    const currentActiveScene = activeSceneRef.current ?? activeScene
    if (!currentActiveScene || !isMaster) return

    const previousWalls = currentActiveScene.walls
    const nextWalls = updater(previousWalls)
    if (options?.recordUndo && nextWalls !== previousWalls) {
      wallUndoStackRef.current = [...wallUndoStackRef.current.slice(-24), previousWalls]
    }
    applyActiveSceneWalls(nextWalls)
  }

  function undoLastWallCreation() {
    if (!isMaster) return false
    const previousWalls = wallUndoStackRef.current.pop()
    if (!previousWalls) return false
    applyActiveSceneWalls(previousWalls)
    setWallContextMenu(null)
    return true
  }

  function createWallId() {
    return `wall:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`
  }

  function createWallSegment(start: VttMeasurementPoint, end: VttMeasurementPoint, kind = wallToolKind): VttWallSegment | null {
    if (Math.hypot(end.x - start.x, end.y - start.y) <= 0.001) return null

    const id = createWallId()
    if (kind === 'door') {
      return {
        id,
        kind: 'door',
        start,
        end,
        color: doorColor,
        door: { open: false, locked: false, blocked: false, ajar: true },
      }
    }

    return { id, kind: 'wall', start, end, color: wallColor, playerVisible: false }
  }

  function createWallDrafts(start: VttMeasurementPoint, end: VttMeasurementPoint, rectangle: boolean) {
    if (rectangle && wallToolKind === 'wall') {
      return createRectangleWallSegments({ start, end, color: wallColor, playerVisible: false, createId: createWallId })
    }

    const segment = createWallSegment(start, end)
    return segment ? [segment] : []
  }

  function updateDoorState(wallId: string, patch: Partial<NonNullable<VttWallSegment['door']>>) {
    updateActiveSceneWalls((walls) =>
      walls.map((wall) => {
        if (wall.id !== wallId || wall.kind !== 'door') return wall
        const nextDoor = normalizeDoorState({ ...wall.door, ...patch })
        return { ...wall, door: nextDoor }
      }),
    )
    setWallContextMenu((current) => {
      if (!current || current.wall.id !== wallId || current.wall.kind !== 'door') return current
      return { ...current, wall: { ...current.wall, door: normalizeDoorState({ ...current.wall.door, ...patch }) } }
    })
  }

  function removeWallSegment(wallId: string) {
    updateActiveSceneWalls((walls) => walls.filter((wall) => wall.id !== wallId), { recordUndo: true })
    setWallContextMenu(null)
  }

  function setPlayerWallVisibility(visible: boolean) {
    updateActiveSceneWalls((walls) =>
      walls.map((wall) => (wall.kind === 'wall' ? { ...wall, playerVisible: visible } : wall)),
    )
  }

  async function selectPreparedScene(sceneId: string) {
    if (!isMaster) return

    const scene = preparedScenes.find((item) => item.id === sceneId)
    if (!scene || isDraftPreparedScene(scene)) return

    setSceneSaveError(null)
    setSceneLoadingMessage('Carregando cena...')

    try {
      const dimensions = scene.imageUrl ? await readImageDimensions(scene.imageUrl) : getDefaultSceneDimensions(scene.grid)
      const nextScene = preparedSceneToTableScene(scene, dimensions)
      sceneImageDimensionsRef.current.set(sceneImageDimensionKey(nextScene), dimensions)
      startSceneLoading(nextScene)

      activeSceneRef.current = nextScene
      setActiveScene(nextScene)
      setTokenState({ campaignId: campaignId ?? null, tokens: scene.tokens.map((token) => normalizeTableToken(token, scene.grid.shape)) })
      onGridSettingsChange(scene.grid, { realtime: false, sceneId: scene.id })
      publishSceneSelection(nextScene)
    } catch (err) {
      if (campaignId) {
        try {
          const refreshedSceneResponse = await api<CampaignSceneResponse>(
            `/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(scene.id)}`,
          )
          const refreshedScene = {
            ...sceneResponseToPreparedScene(refreshedSceneResponse, scene.order - 1),
            name: scene.name,
            order: scene.order,
          }

          const dimensions = refreshedScene.imageUrl ? await readImageDimensions(refreshedScene.imageUrl) : getDefaultSceneDimensions(refreshedScene.grid)
          const nextScene = preparedSceneToTableScene(refreshedScene, dimensions)
          sceneImageDimensionsRef.current.set(sceneImageDimensionKey(nextScene), dimensions)
          startSceneLoading(nextScene)

          setPreparedScenes((current) => {
            const next = current.map((item) => (item.id === scene.id ? refreshedScene : item))
            preparedScenesRef.current = next
            return next
          })
          activeSceneRef.current = nextScene
          setActiveScene(nextScene)
          setTokenState({ campaignId, tokens: refreshedScene.tokens.map((token) => normalizeTableToken(token, refreshedScene.grid.shape)) })
          onGridSettingsChange(refreshedScene.grid, { realtime: false, sceneId: refreshedScene.id })
          publishSceneSelection(nextScene)
          return
        } catch {}
      }

      setSceneLoadingMessage(null)
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel selecionar a cena.')
    }
  }

  function movePlayerToken(
    token: VttPlayerToken,
    position: VttPlayerToken['position'],
    options?: { movementPath?: VttMeasurementPoint[] },
  ) {
    if (!campaignId || !socket) return
    const isOwnerMove = sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER'
    const isMasterMove = Boolean(isMaster)
    if (!isOwnerMove && !isMasterMove) return

    const nextPosition = normalizeTokenPosition(position, gridSettings.shape, gridBounds, tokenSize)
    if (isOwnerMove && activeScene?.walls.length) {
      const movementPathForCollision =
        options?.movementPath && options.movementPath.length >= 2
          ? [...options.movementPath.slice(0, -1), nextPosition]
          : [token.position, nextPosition]
      if (isMovementPathBlockedByWalls({ points: movementPathForCollision, walls: activeScene.walls })) return
    }
    setTokenState((current) => {
      if (current.campaignId !== campaignId) return current
      return {
        campaignId,
        tokens: current.tokens.map((item) => (item.id === token.id ? { ...item, position: nextPosition } : item)),
      }
    })
    const movementPath =
      options?.movementPath && options.movementPath.length >= 2
        ? [...options.movementPath.slice(0, -1), nextPosition]
        : undefined
    if (movementPath) {
      setTokenMovementPaths((current) => ({ ...current, [token.id]: movementPath }))
    }
    socket.emit('vtt:token:move', {
      campaignId,
      tokenId: token.id,
      characterId: token.characterId ?? undefined,
      position: nextPosition,
      movementPath,
    })
  }

  function publishMeasurement(nextMeasurement: VttMeasurement | null) {
    if (!realtimeVttEnabled) return
    if (!nextMeasurement || nextMeasurement.shape !== 'square') {
      measuredMovementTokenIdRef.current = null
      setMovementSelectedTokenId(null)
    }
    measurementRef.current = nextMeasurement
    setMeasurement(nextMeasurement)

    if (!campaignId || !socket) return
    socket.emit('vtt:measurement:update', { campaignId, measurement: nextMeasurement })
  }

  function getMeasurementPoint(event: React.PointerEvent<HTMLElement>) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null

    return clampMeasurementPoint(
      {
        x: (event.clientX - bounds.left) / tokenSize,
        y: (event.clientY - bounds.top) / tokenSize,
      },
      { width: bounds.width / tokenSize, height: bounds.height / tokenSize },
    )
  }

  function getWallPoint(event: React.PointerEvent<HTMLElement>) {
    const point = getMeasurementPoint(event)
    if (!point) return null
    return gridSettings.shape === 'hex' ? snapHexMeasurementPoint(point) : point
  }

  function startAreaSelection(event: React.PointerEvent<HTMLDivElement>) {
    if (!isMaster || !activeScene || event.button !== 0) return false
    const point = getMeasurementPoint(event)
    if (!point) return false

    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    selectionAreaStartRef.current = { pointerId: event.pointerId, point }
    setSelectionAreaDraft({ start: point, end: point })
    return true
  }

  function updateAreaSelection(event: React.PointerEvent<HTMLDivElement>) {
    const start = selectionAreaStartRef.current
    if (!start || start.pointerId !== event.pointerId) return
    const point = getMeasurementPoint(event)
    if (!point) return

    setSelectionAreaDraft({ start: start.point, end: point })
  }

  function finishAreaSelection(event: React.PointerEvent<HTMLDivElement>) {
    const start = selectionAreaStartRef.current
    if (!start || start.pointerId !== event.pointerId) return

    selectionAreaStartRef.current = null
    setSelectionAreaDraft(null)

    const point = getMeasurementPoint(event)
    if (!point) return

    const area = { start: start.point, end: point }
    const selectedTokenIds = visibleTokens.filter((token) => isTokenInsideSelectionArea(token, area)).map((token) => token.id)
    setMultiSelectedTokenIds(selectedTokenIds)
  }

  function cancelAreaSelection(event?: React.PointerEvent<HTMLDivElement>) {
    if (event && selectionAreaStartRef.current?.pointerId !== event.pointerId) return
    selectionAreaStartRef.current = null
    setSelectionAreaDraft(null)
  }

  function startWallDrawing(event: React.PointerEvent<HTMLDivElement>) {
    if (!isMaster || !activeScene || event.button !== 0) return
    const point = getWallPoint(event)
    if (!point) return

    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    wallDraftStartRef.current = point
    setWallDrafts(createWallDrafts(point, point, event.ctrlKey))
  }

  function updateWallDrawing(event: React.PointerEvent<HTMLDivElement>) {
    const start = wallDraftStartRef.current
    if (!start) return
    const point = getWallPoint(event)
    if (!point) return

    setWallDrafts(createWallDrafts(start, point, event.ctrlKey))
  }

  function finishWallDrawing(event: React.PointerEvent<HTMLDivElement>) {
    const start = wallDraftStartRef.current
    wallDraftStartRef.current = null
    setWallDrafts([])
    if (!start) return

    const point = getWallPoint(event)
    if (!point) return

    const segments = createWallDrafts(start, point, event.ctrlKey)
    if (!segments.length) return

    updateActiveSceneWalls((walls) => {
      if (segments.length > 1) return [...walls, ...segments]
      const [segment] = segments
      if (segment.kind === 'door') return applyDoorToWalls({ walls, door: segment, createId: createWallId })
      return [...walls, segment]
    }, { recordUndo: true })
  }

  function snapHexMeasurementPoint(point: VttMeasurementPoint) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return point

    return tokenGridPositionFromPixelCenter(
      {
        x: point.x * tokenSize,
        y: point.y * tokenSize,
      },
      { width: bounds.width, height: bounds.height },
      tokenSize,
      'hex',
    )
  }

  function nextHexMeasurementPoints(points: VttMeasurementPoint[], nextPoint: VttMeasurementPoint) {
    const existingIndex = points.findIndex((point) => areMeasurementPointsEqual(point, nextPoint))
    if (existingIndex >= 0) return points.slice(0, existingIndex + 1)
    return [...points, nextPoint]
  }

  function tokenAtMeasurementPoint(point: VttMeasurementPoint) {
    return visibleTokens.find((token) => Math.abs(token.position.x - point.x) <= 0.5 && Math.abs(token.position.y - point.y) <= 0.5)
  }

  function squareMeasurementPointsFromCurrent(current: VttMeasurement | null) {
    if (current?.shape !== 'square') return null
    if (current.points && current.points.length >= 2) return current.points
    return [current.start, current.end]
  }

  function nextSquareMeasurementPoints(points: VttMeasurementPoint[], nextPoint: VttMeasurementPoint) {
    const existingIndex = points.findIndex((point) => areMeasurementPointsEqual(point, nextPoint))
    if (existingIndex < 0) return [...points, nextPoint]

    const nextPoints = points.slice(0, existingIndex + 1)
    if (nextPoints.length >= 2) return nextPoints

    return [nextPoints[0], nextPoints[0]]
  }

  function appendSquareMeasurementPoint(point: VttMeasurementPoint) {
    const current = measurementRef.current
    const points = squareMeasurementPointsFromCurrent(current)

    if (!points) {
      publishMeasurement({ shape: 'square', start: point, end: point, points: [point, point], color: gridSettings.squareMeasurementColor })
      return
    }

    const nextPoints = nextSquareMeasurementPoints(points, point)
    const start = nextPoints[0]
    const end = nextPoints[nextPoints.length - 1]
    publishMeasurement({ shape: 'square', start, end, points: nextPoints, color: gridSettings.squareMeasurementColor })
  }

  function selectTokenForMeasuredMovement(tokenId: string | null) {
    measuredMovementTokenIdRef.current = tokenId
    setMovementSelectedTokenId(tokenId)
  }

  function startTokenMeasurement(event: React.PointerEvent<HTMLButtonElement>, token: VttPlayerToken) {
    if (!event.ctrlKey || gridSettings.shape !== 'square' || !realtimeVttEnabled) return

    event.preventDefault()
    event.stopPropagation()
    selectTokenForMeasuredMovement(token.id)
    setActiveTool('measure')
    publishMeasurement({
      shape: 'square',
      start: token.position,
      end: token.position,
      points: [token.position, token.position],
      color: gridSettings.squareMeasurementColor,
    })
  }

  function startMeasurement(event: React.PointerEvent<HTMLDivElement>) {
    const point = getMeasurementPoint(event)
    if (!point) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    measuringRef.current = !event.ctrlKey

    if (gridSettings.shape === 'hex') {
      publishMeasurement({ shape: 'hex', points: [snapHexMeasurementPoint(point)], color: gridSettings.hexMeasurementColor })
      return
    }

    if (event.ctrlKey) {
      const token = tokenAtMeasurementPoint(point)
      const currentPoints = squareMeasurementPointsFromCurrent(measurementRef.current)
      if (!currentPoints && token) {
        selectTokenForMeasuredMovement(token.id)
        appendSquareMeasurementPoint(token.position)
        return
      }

      appendSquareMeasurementPoint(token?.position ?? point)
      return
    }

    selectTokenForMeasuredMovement(null)
    publishMeasurement({ shape: 'square', start: point, end: point, points: [point, point], color: gridSettings.squareMeasurementColor })
  }

  function updateMeasurement(event: React.PointerEvent<HTMLDivElement>) {
    if (!measuringRef.current) return

    const point = getMeasurementPoint(event)
    if (!point) return

    if (gridSettings.shape === 'hex') {
      const nextPoint = snapHexMeasurementPoint(point)
      const current = measurementRef.current
      const points = current?.shape === 'hex' ? current.points : []
      const lastPoint = points[points.length - 1]
      if (lastPoint && areMeasurementPointsEqual(lastPoint, nextPoint)) return

      publishMeasurement({ shape: 'hex', points: nextHexMeasurementPoints(points, nextPoint), color: gridSettings.hexMeasurementColor })
      return
    }

    const current = measurementRef.current
    const points = squareMeasurementPointsFromCurrent(current)
    const nextPoints = points ? [...points.slice(0, -1), point] : [point, point]
    publishMeasurement(
      current?.shape === 'square'
        ? { ...current, end: point, points: nextPoints, color: gridSettings.squareMeasurementColor }
        : { shape: 'square', start: point, end: point, points: nextPoints, color: gridSettings.squareMeasurementColor },
    )
  }

  function finishMeasurement() {
    measuringRef.current = false
  }

  function clearToolbarSelectionAndMeasurement() {
    measuringRef.current = false
    wallDraftStartRef.current = null
    selectionAreaStartRef.current = null
    setWallDrafts([])
    setSelectionAreaDraft(null)
    selectTokenForMeasuredMovement(null)
    measurementRef.current = null
    setActiveTool(null)
    setMeasurement(null)
    onGridSettingsOpenChange(false)
    if (campaignId && socket) socket.emit('vtt:measurement:update', { campaignId, measurement: null })
  }

  function collapseToolsToolbar() {
    clearToolbarSelectionAndMeasurement()
    setToolsCollapsed(true)
  }

  function isEditableKeyboardTarget(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) return false
    const tagName = target.tagName.toLowerCase()
    return target.isContentEditable || tagName === 'input' || tagName === 'textarea' || tagName === 'select'
  }

  function confirmMeasuredTokenMove() {
    const tokenId = measuredMovementTokenIdRef.current
    const currentMeasurement = measurementRef.current
    if (!tokenId || currentMeasurement?.shape !== 'square') return false

    const token = visibleTokens.find((item) => item.id === tokenId)
    if (!token) return false

    const points = squareMeasurementPointsFromCurrent(currentMeasurement)
    const requestedDestination = points?.[points.length - 1] ?? currentMeasurement.end

    const budget = movementBudgetForToken(token.id)
    const destination = budget
      ? predictMovement({
          from: token.position,
          to: requestedDestination,
          cellSizePx: gridSettings.size,
          metersPerCell: gridSettings.metersPerCell,
          budget,
        }).position
      : requestedDestination

    const routePoints = points?.length ? points : [currentMeasurement.start, currentMeasurement.end]
    const routeWithDestination =
      routePoints.length >= 2 ? [...routePoints.slice(0, -1), destination] : [token.position, destination]

    if (!isMaster && activeScene?.walls.length && isMovementPathBlockedByWalls({ points: routeWithDestination, walls: activeScene.walls })) {
      return true
    }

    clearMeasurementAfterMovementTokenIdRef.current = token.id
    movePlayerToken(token, destination, { movementPath: points ?? [currentMeasurement.start, currentMeasurement.end] })
    if (destination.x !== token.position.x || destination.y !== token.position.y) {
      commitTokenMovementAction(token.id)
    }
    measuredMovementTokenIdRef.current = null
    return true
  }

  function clearMeasurementAfterTokenMovement(tokenId: string) {
    if (clearMeasurementAfterMovementTokenIdRef.current !== tokenId) return
    clearMeasurementAfterMovementTokenIdRef.current = null
    setMovementSelectedTokenId(null)
    publishMeasurement(null)
    setActiveTool((current) => (current === 'measure' ? null : current))
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z' && !isEditableKeyboardTarget(event.target)) {
        if (undoLastWallCreation()) event.preventDefault()
        return
      }

      if (event.code === 'Escape' && !isEditableKeyboardTarget(event.target)) {
        clearToolbarSelectionAndMeasurement()
        event.preventDefault()
        return
      }

      if (event.code !== 'Space' || event.repeat || isEditableKeyboardTarget(event.target)) return
      if (!confirmMeasuredTokenMove()) return

      event.preventDefault()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  function dragTokenCandidate(event: React.DragEvent<HTMLElement>, candidate: VttTokenCandidate) {
    if (candidate.source === 'bestiary' && candidate.creatureId) {
      event.dataTransfer.setData(questhubBestiaryDragType, candidate.creatureId)
      if (candidate.campaignNpcDefinitionId) {
        event.dataTransfer.setData(questhubNpcDefinitionDragType, candidate.campaignNpcDefinitionId)
      }
    } else if (candidate.characterId) {
      event.dataTransfer.setData(questhubCharacterDragType, candidate.characterId)
    }
    event.dataTransfer.effectAllowed = 'copy'
  }

  function tokenDropPosition(event: React.DragEvent<HTMLElement>) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null

    return normalizeTokenPosition(
      {
        x: (event.clientX - bounds.left) / tokenSize,
        y: (event.clientY - bounds.top) / tokenSize,
      },
      gridSettings.shape,
      { width: bounds.width, height: bounds.height },
      tokenSize,
    )
  }

  function dropTokenCandidate(event: React.DragEvent<HTMLElement>) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    const characterId = event.dataTransfer.getData(questhubCharacterDragType)
    const creatureId = event.dataTransfer.getData(questhubBestiaryDragType)
    const campaignNpcDefinitionId = event.dataTransfer.getData(questhubNpcDefinitionDragType) || undefined
    if (!characterId && !creatureId) return

    const position = tokenDropPosition(event)
    if (!position) return

    event.preventDefault()
    if (creatureId && !campaignNpcDefinitionId) addBestiaryCreatureToToolbar(creatureId)
    socket.emit(
      'vtt:token:place',
      creatureId
        ? { campaignId, source: 'bestiary', creatureId, campaignNpcDefinitionId, position }
        : { campaignId, source: 'character', characterId, position },
    )
  }

  function dragHazardCandidate(event: React.DragEvent<HTMLElement>, candidate: VttHazardCandidate) {
    event.dataTransfer.setData(questhubHazardDragType, candidate.hazardEntryId)
    event.dataTransfer.effectAllowed = 'copy'
  }

  function dropHazardCandidate(event: React.DragEvent<HTMLElement>) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt || !activeScene) return

    const hazardEntryId = event.dataTransfer.getData(questhubHazardDragType)
    if (!hazardEntryId) return

    const position = tokenDropPosition(event)
    if (!position) return

    event.preventDefault()
    socket.emit('vtt:hazard:place', { campaignId, sceneId: activeScene.id, hazardEntryId, position })
  }

  function addSceneEffectHazard(candidate: VttHazardCandidate) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt || !activeScene) return

    socket.emit('vtt:hazard:place', {
      campaignId,
      sceneId: activeScene.id,
      hazardEntryId: candidate.hazardEntryId,
      scope: 'SCENE',
      triggerMode: 'ALWAYS_ON',
      executionMode: 'ONGOING',
    })
  }

  function openHazardInstanceMenu(hazard: VttSceneHazard, position: { x: number; y: number }) {
    if (!isMaster) return
    setHazardInstanceMenu({ hazard, x: position.x, y: position.y })
  }

  function moveHazardInstance(hazard: VttSceneHazard, position: { x: number; y: number }) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return
    socket.emit('vtt:hazard:update', { campaignId, hazardId: hazard.id, position })
  }

  function updateHazardNotesDraft(hazard: VttSceneHazard, notes: string) {
    setHazardInstanceMenu((current) =>
      current?.hazard.id === hazard.id ? { ...current, hazard: { ...current.hazard, notes } } : current,
    )
  }

  function saveHazardNotes(hazard: VttSceneHazard) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return
    socket.emit('vtt:hazard:update', { campaignId, hazardId: hazard.id, notes: hazard.notes ?? null })
  }

  function updateSceneHazardNotes(hazard: VttSceneHazard, notes: string) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return
    socket.emit('vtt:hazard:update', { campaignId, hazardId: hazard.id, notes: notes || null })
  }

  function cycleHazardVisibility(hazard: VttSceneHazard) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    const order: VttSceneHazard['visibility'][] = ['HIDDEN', 'HINTED', 'REVEALED']
    const nextVisibility = order[(order.indexOf(hazard.visibility) + 1) % order.length]
    socket.emit('vtt:hazard:update', { campaignId, hazardId: hazard.id, visibility: nextVisibility })
    setHazardInstanceMenu((current) =>
      current?.hazard.id === hazard.id ? { ...current, hazard: { ...current.hazard, visibility: nextVisibility } } : current,
    )
  }

  function cycleHazardState(hazard: VttSceneHazard) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    const order: VttSceneHazard['state'][] = ['ARMED', 'TRIGGERED', 'ACTIVE', 'DISABLED', 'EXPIRED']
    const nextState = order[(order.indexOf(hazard.state) + 1) % order.length]
    socket.emit('vtt:hazard:update', { campaignId, hazardId: hazard.id, state: nextState })
    setHazardInstanceMenu((current) =>
      current?.hazard.id === hazard.id ? { ...current, hazard: { ...current.hazard, state: nextState } } : current,
    )
  }

  function cycleHazardScope(hazard: VttSceneHazard) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    const nextScope: VttSceneHazard['scope'] = hazard.scope === 'AREA' ? 'POINT' : 'AREA'
    socket.emit('vtt:hazard:update', { campaignId, hazardId: hazard.id, scope: nextScope })
    setHazardInstanceMenu((current) =>
      current?.hazard.id === hazard.id ? { ...current, hazard: { ...current.hazard, scope: nextScope } } : current,
    )
  }

  function toggleHazardTriggerOnTokenEnter(hazard: VttSceneHazard) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    const nextTriggerMode = hazard.triggerMode === 'ON_TOKEN_ENTER' ? 'MANUAL' : 'ON_TOKEN_ENTER'
    socket.emit('vtt:hazard:update', { campaignId, hazardId: hazard.id, triggerMode: nextTriggerMode })
    setHazardInstanceMenu((current) =>
      current?.hazard.id === hazard.id
        ? { ...current, hazard: { ...current.hazard, triggerMode: nextTriggerMode } }
        : current,
    )
  }

  function removeHazardInstance(hazard: VttSceneHazard) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    socket.emit('vtt:hazard:remove', { campaignId, hazardId: hazard.id })
    setHazardInstanceMenu(null)
  }

  function removeTokenFromLocalScene(token: Pick<VttPlayerToken, 'id' | 'characterId'>, sceneId?: string | null) {
    const matchesToken = (item: VttPlayerToken) =>
      item.id === token.id || Boolean(token.characterId && item.characterId === token.characterId)

    setTokenState((current) => {
      if (current.campaignId !== campaignId) return current
      return {
        campaignId,
        tokens: current.tokens.filter((item) => !matchesToken(item)),
      }
    })
    setPreparedScenes((current) =>
      current.map((scene) => {
        if (sceneId && scene.id !== sceneId) return scene
        if (!sceneId && scene.id !== activeSceneRef.current?.id) return scene
        return { ...scene, tokens: scene.tokens.filter((item) => !matchesToken(item)) }
      }),
    )
    setActiveScene((current) => {
      if (!current) return current
      if (sceneId && current.id !== sceneId) return current
      return { ...current, tokens: current.tokens.filter((item) => !matchesToken(item)) }
    })
  }

  function contextActionTokens(fallbackToken: VttPlayerToken) {
    return multiSelectedTokens.length ? multiSelectedTokens : [fallbackToken]
  }

  function contextActionTokenCount(fallbackToken: VttPlayerToken) {
    return contextActionTokens(fallbackToken).length
  }

  function addBestiaryCreatureToToolbar(creatureId: string) {
    if (!campaignId) return

    const currentSettings = readStoredCampaignUserSettings(campaignId)
    if (currentSettings.vtt.preparedBestiaryCreatureIds.includes(creatureId)) return

    const nextIds = Array.from(new Set([...currentSettings.vtt.preparedBestiaryCreatureIds, creatureId]))
    const nextSettings: CampaignUserSettings = {
      ...currentSettings,
      vtt: {
        ...currentSettings.vtt,
        preparedBestiaryCreatureIds: nextIds,
      },
    }

    storeCampaignUserSettings(campaignId, nextSettings)

    void api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { vtt: { preparedBestiaryCreatureIds: nextIds } } }),
    })
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setTokenCandidatesRefreshKey((current) => current + 1)
      })
      .catch(() => {
        storeCampaignUserSettings(campaignId, currentSettings)
        setTokenCandidatesRefreshKey((current) => current + 1)
      })
  }

  function removeTokenCandidateFromToolbar(candidate: VttTokenCandidate) {
    if (!campaignId || candidate.source !== 'bestiary' || !candidate.creatureId) return

    const currentSettings = readStoredCampaignUserSettings(campaignId)
    const nextIds = currentSettings.vtt.preparedBestiaryCreatureIds.filter((creatureId) => creatureId !== candidate.creatureId)
    const nextSettings: CampaignUserSettings = {
      ...currentSettings,
      vtt: {
        ...currentSettings.vtt,
        preparedBestiaryCreatureIds: nextIds,
      },
    }

    setTokenCandidates((current) =>
      current.filter((item) => !(item.source === 'bestiary' && item.creatureId === candidate.creatureId)),
    )
    storeCampaignUserSettings(campaignId, nextSettings)

    void api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { vtt: { preparedBestiaryCreatureIds: nextIds } } }),
    })
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setTokenCandidatesRefreshKey((current) => current + 1)
      })
      .catch(() => {
        storeCampaignUserSettings(campaignId, currentSettings)
        setTokenCandidatesRefreshKey((current) => current + 1)
      })
  }

  function removeHazardCandidateFromToolbar(candidate: VttHazardCandidate) {
    if (!campaignId) return

    const currentSettings = readStoredCampaignUserSettings(campaignId)
    const nextIds = currentSettings.vtt.preparedHazardEntryIds.filter((hazardEntryId) => hazardEntryId !== candidate.hazardEntryId)
    const nextSettings: CampaignUserSettings = {
      ...currentSettings,
      vtt: {
        ...currentSettings.vtt,
        preparedHazardEntryIds: nextIds,
      },
    }

    setHazardCandidates((current) => current.filter((item) => item.hazardEntryId !== candidate.hazardEntryId))
    storeCampaignUserSettings(campaignId, nextSettings)

    void api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { vtt: { preparedHazardEntryIds: nextIds } } }),
    })
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setHazardCandidatesRefreshKey((current) => current + 1)
      })
      .catch(() => {
        storeCampaignUserSettings(campaignId, currentSettings)
        setHazardCandidatesRefreshKey((current) => current + 1)
      })
  }

  function openHazardCandidateSheet(candidate: VttHazardCandidate) {
    setBestiarySheetCreatureId(candidate.hazardEntryId)
  }

  function startHazardEncounter(candidate: VttHazardCandidate) {
    if (!isMaster) return
    setActiveHazardEncounter({ candidate, notes: '' })
  }

  function closeHazardEncounter() {
    setActiveHazardEncounter(null)
  }

  function updateHazardEncounterNotes(notes: string) {
    setActiveHazardEncounter((current) => (current ? { ...current, notes } : current))
  }

  function removeToken(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    const tokens = contextActionTokens(token)
    tokens.forEach((item) => {
      socket.emit('vtt:token:remove', { campaignId, tokenId: item.id, characterId: item.characterId ?? undefined })
      removeTokenFromLocalScene(item, activeScene?.id ?? null)
    })
    setMultiSelectedTokenIds([])
    setPreselectedEncounterTokenIds((current) => current.filter((tokenId) => !tokens.some((item) => item.id === tokenId)))
    setTokenContextMenu(null)
  }

  function removeTokens(scope: 'scene' | 'global') {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return
    if (scope === 'scene' && !activeScene) return

    const hasTokens = scope === 'scene' ? currentSceneTokenCount > 0 : globalTokenCount > 0
    if (!hasTokens) return

    const confirmed = window.confirm(
      scope === 'scene'
        ? 'Remover todos os tokens da cena atual?'
        : 'Remover todos os tokens de todas as cenas da campanha?',
    )
    if (!confirmed) return

    if (scope === 'scene') {
      const sceneId = activeScene?.id
      if (!sceneId) return
      socket.emit('vtt:tokens:remove-bulk', { campaignId, scope, sceneId })
      setTokenState({ campaignId, tokens: [] })
      setPreparedScenes((current) => current.map((scene) => (scene.id === sceneId ? { ...scene, tokens: [] } : scene)))
      setActiveScene((current) => (current?.id === sceneId ? { ...current, tokens: [] } : current))
      return
    }

    socket.emit('vtt:tokens:remove-bulk', { campaignId, scope })
    setTokenState({ campaignId, tokens: [] })
    setPreparedScenes((current) => current.map((scene) => (isDraftPreparedScene(scene) ? scene : { ...scene, tokens: [] })))
    setActiveScene((current) => (current ? { ...current, tokens: [] } : current))
  }

  function toggleTokenVisibility(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    contextActionTokens(token).forEach((item) => {
      socket.emit('vtt:token:visibility', { campaignId, tokenId: item.id, characterId: item.characterId ?? undefined })
    })
    setTokenContextMenu(null)
  }

  function openCombatHealthEditor(tokenId: string, name: string) {
    if (!isMaster) return
    setCombatHealthEditor({ tokenId, name })
    setTokenContextMenu(null)
    if (campaignId && socket) {
      requestedHealthTokenIdsRef.current.add(tokenId)
      socket.emit('vtt:combat:health:request', { campaignId, tokenId })
    }
  }

  function adjustCombatHealth(tokenId: string, operation: 'DAMAGE' | 'HEAL', amount: number, note?: string) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt || amount <= 0) return
    socket.emit('vtt:combat:health:adjust', { campaignId, tokenId, operation, amount, note })
  }

  function saveCombatHealth(
    tokenId: string,
    patch: { currentHitPoints?: number; maxHitPoints?: number; temporaryHitPoints?: number },
    note?: string,
  ) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return
    if (patch.currentHitPoints === undefined && patch.maxHitPoints === undefined && patch.temporaryHitPoints === undefined) return
    socket.emit('vtt:combat:health:set', { campaignId, tokenId, ...patch, note })
  }

  function resetParticipantMovement(participantId: string) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return
    socket.emit('vtt:combat:movement:reset', { campaignId, participantId })
  }

  function commitTokenMovementAction(tokenId: string) {
    if (!campaignId || !socket) return
    socket.emit('vtt:combat:movement:commit', { campaignId, tokenId })
  }

  function movementBudgetForToken(tokenId: string) {
    if (!activeEncounter) return null
    const participant = activeEncounter.participants.find((item) => item.type === 'creature' && item.tokenId === tokenId)
    return participant?.type === 'creature' ? participant.movement : null
  }

  function openBestiaryTokenSheet(token: VttPlayerToken) {
    if (!canOpenBestiaryTokenSheet(token)) return
    if (token.source !== 'bestiary' || !token.bestiaryCreatureId) return
    setBestiarySheetCreatureId(token.bestiaryCreatureId)
    setTokenContextMenu(null)
  }

  function openCharacterTokenSheet(token: VttPlayerToken) {
    if (!canOpenCharacterTokenSheet(token) || !token.characterId) return
    setCharacterTokenSheet({
      tokenId: token.id,
      characterId: token.characterId,
      characterName: token.name,
      readOnly: !isMaster && token.ownerUserId !== me?.id,
      identityLocked: !isMaster,
      isGameMaster: isMaster,
    })
    setTokenContextMenu(null)
  }

  function openInventoryModal(token: VttPlayerToken) {
    if (!canOpenCharacterTokenSheet(token) || !token.characterId) return
    setInventoryTokenModal({ characterId: token.characterId, characterName: token.name })
    setTokenContextMenu(null)
  }

  function isTokenInActiveEncounter(tokenId: string) {
    return Boolean(
      activeEncounter?.participants.some((participant) => participant.type === 'creature' && participant.tokenId === tokenId),
    )
  }

  function isHazardInActiveEncounter(hazardInstanceId: string) {
    return Boolean(
      activeEncounter?.participants.some(
        (participant) => participant.type === 'hazard' && participant.hazardInstanceId === hazardInstanceId,
      ),
    )
  }

  function addTokensToEncounter(tokens: VttPlayerToken[]) {
    if (!isMaster) return
    const tokenIds = tokens.filter((token) => !token.hidden && !isTokenInActiveEncounter(token.id)).map((token) => token.id)
    if (!tokenIds.length) return

    if (activeEncounter) {
      if (!campaignId || !socket) return
      socket.emit('vtt:encounter:join', { campaignId, tokenIds, hazardInstanceIds: [] })
      return
    }

    setEncounterTokenIds((current) => {
      const next = [...current]
      tokenIds.forEach((tokenId) => {
        if (!next.includes(tokenId)) next.push(tokenId)
      })
      return next.length === current.length ? current : next
    })
  }

  function toggleTokenEncounterPreselection(token: VttPlayerToken) {
    if (!isMaster || token.hidden) return
    setPreselectedEncounterTokenIds((current) =>
      current.includes(token.id) ? current.filter((tokenId) => tokenId !== token.id) : [...current, token.id],
    )
  }

  function addEncounterDragSelectionToBox(token: VttPlayerToken) {
    if (!isMaster || token.hidden) return
    const selectedTokens = preselectedEncounterTokens.length
      ? preselectedEncounterTokens
      : [token]
    const tokens = selectedTokens.some((item) => item.id === token.id) ? selectedTokens : [...selectedTokens, token]
    addTokensToEncounter(tokens)
  }

  function addContextTokenSelectionToEncounter(token: VttPlayerToken) {
    if (multiSelectedTokens.length) {
      addTokensToEncounter(multiSelectedTokens)
      setTokenContextMenu(null)
      return
    }

    const selectedTokens = preselectedEncounterTokens.length ? preselectedEncounterTokens : [token]
    const tokens = selectedTokens.some((item) => item.id === token.id) ? selectedTokens : [...selectedTokens, token]
    addTokensToEncounter(tokens)
    setTokenContextMenu(null)
  }

  function startEncounter() {
    if (!campaignId || !socket || !activeScene || !canStartEncounter) return
    socket.emit('vtt:encounter:start', {
      campaignId,
      sceneId: activeScene.id,
      tokenIds: encounterTokens.map((token) => token.id),
      hazardInstanceIds: pendingEncounterHazardIds,
    })
  }

  function addHazardInstanceToEncounterSelection(hazard: VttSceneHazard) {
    if (!isMaster || isHazardInActiveEncounter(hazard.id)) return
    setHazardInstanceMenu(null)

    if (activeEncounter) {
      if (!campaignId || !socket) return
      socket.emit('vtt:encounter:join', { campaignId, tokenIds: [], hazardInstanceIds: [hazard.id] })
      return
    }

    setPendingEncounterHazardIds((current) => (current.includes(hazard.id) ? current : [...current, hazard.id]))
  }

  function removeHazardFromEncounterSelection(hazardId: string) {
    setPendingEncounterHazardIds((current) => current.filter((id) => id !== hazardId))
  }

  function endEncounter() {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:encounter:end', { campaignId })
  }

  function nextEncounterTurn() {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:encounter:next-turn', { campaignId })
  }

  function previousEncounterTurn() {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:encounter:previous-turn', { campaignId })
  }

  function updateEncounterInitiative(participantId: string, initiative: number | null, options?: { activateHighest?: boolean }) {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:encounter:update-initiative', {
      campaignId,
      participantId,
      initiative,
      activateHighest: Boolean(options?.activateHighest),
    })
  }

  function updateEncounterInitiativeFromRoll(participantId: string, initiative: number) {
    updateEncounterInitiative(participantId, initiative, { activateHighest: true })
  }

  function removeEncounterParticipant(participantId: string) {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:encounter:remove-participant', { campaignId, participantId })
  }

  function rollInitiative(participantId: string) {
    if (!isMaster) return
    diceControlsRef.current?.rollForInitiative(participantId)
  }

  function rollAllEncounterInitiatives() {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:encounter:roll-all-initiatives', { campaignId })
  }

  function triggerHazardParticipant(participantId: string) {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:encounter:trigger-hazard', { campaignId, participantId })
  }

  function changeZoom(direction: -1 | 1) {
    setZoomPercent((current) => {
      return clampNumber(current + direction * zoomLimits.step, zoomLimits.min, zoomLimits.max)
    })
  }

  function handleBoardWheel(event: React.WheelEvent<HTMLDivElement>) {
    if (!event.altKey) return
    event.preventDefault()
    changeZoom(event.deltaY < 0 ? 1 : -1)
  }

  function openRightPanelTab(tab: RightPanelTab) {
    setRightPanelTab(tab)
    setRightPanelCollapsed(false)
    if (tab === 'chat') setChatDetached(false)
  }

  function startBoardPan(event: React.PointerEvent<HTMLDivElement>) {
    const shortcutAreaSelection =
      isMaster &&
      activeScene &&
      event.ctrlKey &&
      event.button === 0 &&
      event.target === event.currentTarget &&
      activeTool !== 'measure' &&
      activeTool !== 'walls'
    if (shortcutAreaSelection && startAreaSelection(event)) return

    if (!event.shiftKey && event.target === event.currentTarget) {
      setPreselectedEncounterTokenIds([])
      setMultiSelectedTokenIds([])
    }
    const altPan = event.altKey
    if (activeTool !== 'move' && !altPan) return
    if (event.button !== 0) return
    if (!altPan && event.target !== event.currentTarget) return

    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    panningRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY }
    setIsPanning(true)
  }

  function updateBoardPan(event: React.PointerEvent<HTMLDivElement>) {
    if (selectionAreaStartRef.current?.pointerId === event.pointerId) {
      updateAreaSelection(event)
      return
    }

    const currentPan = panningRef.current
    if (!currentPan || currentPan.pointerId !== event.pointerId) return

    const deltaX = event.clientX - currentPan.x
    const deltaY = event.clientY - currentPan.y
    panningRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY }

    setPanOffset((current) => {
      const safeCurrent = clampPanOffset(current, viewportBounds, boardPixelSize)
      return clampPanOffset({ x: safeCurrent.x + deltaX, y: safeCurrent.y + deltaY }, viewportBounds, boardPixelSize)
    })
  }

  function finishBoardPan(event: React.PointerEvent<HTMLDivElement>) {
    if (selectionAreaStartRef.current?.pointerId === event.pointerId) {
      finishAreaSelection(event)
      return
    }

    if (panningRef.current?.pointerId !== event.pointerId) return

    panningRef.current = null
    setIsPanning(false)
  }

  async function uploadSceneImage(sceneId: string, file: File) {
    const validationError = validateSceneImage(file)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    const hasLocalDuplicate = preparedScenes.some((scene) => scene.id !== sceneId && filenameEquals(scene.fileName, file.name))
    if (hasLocalDuplicate) {
      const message = `${file.name} ja esta carregado nesta campanha.`
      window.alert(message)
      setPreparedScenes((current) => current.map((scene) => (scene.id === sceneId ? { ...scene, error: message } : scene)))
      return
    }

    if (campaignId) {
      try {
        const exists = await api<AssetExistsResponse>(
          `/api/assets/exists?campaignId=${encodeURIComponent(campaignId)}&filename=${encodeURIComponent(file.name)}&mimeType=${encodeURIComponent(file.type)}`,
        )
        if (exists.exists) {
          const message = `${file.name} ja esta carregado nesta campanha.`
          window.alert(message)
          setPreparedScenes((current) => current.map((scene) => (scene.id === sceneId ? { ...scene, error: message } : scene)))
          return
        }
      } catch (err) {
        setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel validar o arquivo.')
        return
      }
    }

    const targetScene = preparedScenes.find((scene) => scene.id === sceneId)
    if (campaignId && targetScene && !isDraftPreparedScene(targetScene)) {
      if (validationError) {
        setPreparedScenes((current) => current.map((scene) => (scene.id === sceneId ? { ...scene, error: validationError } : scene)))
        return
      }

      setSceneSaving(true)
      try {
        const formData = new FormData()
        formData.append('file', file)

        const asset = await apiForm<AssetUploadResponse>(`/api/assets?campaignId=${encodeURIComponent(campaignId)}`, formData)
        const persistedScene = await api<CampaignSceneResponse>(
          `/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(sceneId)}`,
          {
            method: 'PATCH',
            body: JSON.stringify({
              assetId: asset.id,
              backgroundUrl: asset.signedUrl,
              backgroundCacheKey: asset.storagePath,
            }),
          },
        )
        const updatedScene = {
          ...sceneResponseToPreparedScene(persistedScene, targetScene.order - 1),
          name: targetScene.name,
          order: targetScene.order,
          fileName: file.name,
        }
        const updatedDimensions = updatedScene.imageUrl
          ? await readImageDimensions(updatedScene.imageUrl).catch(() => getDefaultSceneDimensions(updatedScene.grid))
          : getDefaultSceneDimensions(updatedScene.grid)
        const updatedTableScene = preparedSceneToTableScene(updatedScene, updatedDimensions)

        setPreparedScenes((current) =>
          normalizePreparedSceneList(
            current
              .filter((scene) => !isDraftPreparedScene(scene))
              .map((scene) => (scene.id === sceneId ? updatedScene : scene)),
          ),
        )
        setActiveScene((current) => {
          if (!current || current.id !== sceneId) return current
          return updatedTableScene
        })
        if (activeScene?.id === sceneId) publishSceneSelection(updatedTableScene)
        setSceneSuccessMessage(`${file.name} vinculado com sucesso.`)
      } catch (err) {
        setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel vincular a imagem.')
      } finally {
        setSceneSaving(false)
      }
      return
    }

    setPreparedScenes((current) => {
      const sceneIndex = current.findIndex((scene) => scene.id === sceneId)
      if (sceneIndex === -1) return current

      const currentScene = current[sceneIndex]
      const nextScenes = [...current]

      if (validationError) {
        nextScenes[sceneIndex] = { ...currentScene, error: validationError }
        return nextScenes
      }

      revokeSceneImageUrl(currentScene)

      nextScenes[sceneIndex] = {
        ...currentScene,
        imageUrl: URL.createObjectURL(file),
        fileName: file.name,
        file,
        assetId: null,
        storagePath: null,
        error: null,
      }

      const hasEmptySceneAfterCurrent = nextScenes.slice(sceneIndex + 1).some((scene) => !scene.imageUrl)
      if (!hasEmptySceneAfterCurrent) {
        const nextSceneNumber = nextScenes.length + 1
        nextScenes.push(createPreparedScene(nextSceneNumber))
      }

      return nextScenes
    })
  }

  async function createEmptyPreparedScene() {
    if (!campaignId || !isMaster || sceneSaving) return

    const persistedScenes = preparedScenes.filter((scene) => !isDraftPreparedScene(scene))
    const nextSceneNumber = persistedScenes.length + 1

    setSceneSaving(true)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    try {
      const persistedScene = await api<CampaignSceneResponse>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes`, {
        method: 'POST',
        body: JSON.stringify({
          name: `Cena${nextSceneNumber}`,
          grid: defaultGridSettings,
        }),
      })

      setPreparedScenes((current) =>
        normalizePreparedSceneList([...current.filter((scene) => !isDraftPreparedScene(scene)), sceneResponseToPreparedScene(persistedScene, nextSceneNumber - 1)]),
      )
      setSceneSuccessMessage(`${persistedScene.name} criada com sucesso.`)
    } catch (err) {
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel criar a cena.')
    } finally {
      setSceneSaving(false)
    }
  }

  async function savePreparedScenes() {
    if (!campaignId || !isMaster || sceneSaving) return

    const pendingScenes = preparedScenes.filter((scene) => scene.file && !scene.assetId)
    if (!pendingScenes.length) return

    setSceneSaving(true)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])
    const skippedFiles: string[] = []
    const uploadedFiles: string[] = []

    try {
      for (const scene of pendingScenes) {
        if (!scene.file) continue

        const exists = await api<AssetExistsResponse>(
          `/api/assets/exists?campaignId=${encodeURIComponent(campaignId)}&filename=${encodeURIComponent(scene.file.name)}&mimeType=${encodeURIComponent(scene.file.type)}`,
        )

        if (exists.exists && exists.asset) {
          skippedFiles.push(scene.file.name)
          setPreparedScenes((current) =>
            current.map((item) =>
              item.id === scene.id
                ? {
                    ...item,
                    assetId: exists.asset?.id ?? null,
                    storagePath: exists.asset?.storagePath ?? null,
                    file: null,
                    error: null,
                  }
                : item,
            ),
          )
          continue
        }

        const formData = new FormData()
        formData.append('file', scene.file)

        const asset = await apiForm<AssetUploadResponse>(`/api/assets?campaignId=${encodeURIComponent(campaignId)}`, formData)
        const persistedScene = await api<CampaignSceneResponse>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes`, {
          method: 'POST',
          body: JSON.stringify({
            name: scene.name,
            order: scene.order,
            assetId: asset.id,
            backgroundUrl: asset.signedUrl,
            backgroundCacheKey: asset.storagePath,
            grid: scene.grid,
          }),
        })
        uploadedFiles.push(scene.file.name)
        setPreparedScenes((current) =>
          current.map((item) =>
            item.id === scene.id
              ? {
                  ...sceneResponseToPreparedScene(persistedScene, persistedScene.order - 1),
                  fileName: scene.file?.name ?? persistedScene.name,
                  file: null,
                  error: null,
                }
              : item,
          ),
        )
      }

      setSceneSkippedFiles(skippedFiles)
      if (uploadedFiles.length === 1) setSceneSuccessMessage(`${uploadedFiles[0]} enviado com sucesso.`)
      if (uploadedFiles.length > 1) setSceneSuccessMessage(`${uploadedFiles.length} arquivos enviados com sucesso.`)
      if (!uploadedFiles.length && skippedFiles.length) setSceneSuccessMessage(null)
    } catch (err) {
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel salvar as cenas.')
    } finally {
      setSceneSaving(false)
    }
  }

  async function deletePreparedScene(sceneId: string) {
    if (sceneDeletingId || sceneSaving) return
    if (!campaignId) return

    const targetScene = preparedScenes.find((scene) => scene.id === sceneId)
    if (!targetScene) return
    if (targetScene.assetId) {
      const confirmed = window.confirm(`Deletar ${targetScene.fileName ?? targetScene.name}? Esta acao remove o asset e o arquivo no Firebase.`)
      if (!confirmed) return
    }

    setSceneDeletingId(sceneId)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    try {
      if (targetScene.assetId) {
        await api<{ ok: true }>(
          `/api/campaigns/${encodeURIComponent(campaignId ?? '')}/scenes/${encodeURIComponent(targetScene.id)}?force=true`,
          { method: 'DELETE' },
        )
        await api<{ ok: true }>(`/api/assets/${encodeURIComponent(targetScene.assetId)}?force=true`, { method: 'DELETE' })
      }

      setPreparedScenes((current) => {
        const sceneToDelete = current.find((scene) => scene.id === sceneId)
        if (sceneToDelete) revokeSceneImageUrl(sceneToDelete)
        return normalizePreparedSceneList(current.filter((scene) => scene.id !== sceneId))
      })
      setSceneSuccessMessage(`${targetScene.fileName ?? targetScene.name} deletado com sucesso.`)
    } catch (err) {
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel deletar a cena.')
    } finally {
      setSceneDeletingId(null)
    }
  }

  function renderTokenCandidateCard(candidate: VttTokenCandidate) {
    return (
      <div
        key={
          candidate.source === 'bestiary'
            ? `bestiary:${candidate.campaignNpcDefinitionId ?? candidate.creatureId}`
            : `character:${candidate.characterId}`
        }
        draggable={masterCanUseVtt}
        onDragStart={(event) => dragTokenCandidate(event, candidate)}
        className={`flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-left transition hover:bg-white/10 ${
          masterCanUseVtt ? 'cursor-grab active:cursor-grabbing' : 'cursor-not-allowed opacity-50'
        }`}
      >
        <span
          className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-indigo-600 text-sm font-bold text-white"
          style={{ backgroundColor: candidate.tokenBorderColor ?? undefined }}
        >
          {candidate.avatarUrl ? <img src={candidate.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} /> : candidate.name.charAt(0).toUpperCase()}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-white">{candidate.name}</span>
          <span className="block truncate text-[11px] uppercase text-zinc-500">
            {candidate.source === 'bestiary'
              ? candidate.campaignNpcDefinitionId
                ? 'NPC customizado'
                : 'Bestiario'
              : candidate.role === 'NPC'
                ? 'NPC'
                : candidate.ownerName}
          </span>
        </span>
        {candidate.source === 'bestiary' && !candidate.campaignNpcDefinitionId ? (
          <button
            type="button"
            title="Remover do toolbar"
            disabled={!masterCanUseVtt}
            className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-md border border-red-300/20 bg-red-500/10 text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              removeTokenCandidateFromToolbar(candidate)
            }}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    )
  }

  function renderHazardCandidateCard(candidate: VttHazardCandidate) {
    return (
      <div
        key={`hazard:${candidate.hazardEntryId}`}
        draggable={masterCanUseVtt && Boolean(activeScene)}
        onDragStart={(event) => dragHazardCandidate(event, candidate)}
        title={activeScene ? 'Arraste para a mesa para posicionar na cena' : undefined}
        className={`flex items-center gap-3 rounded-md border border-amber-300/15 bg-amber-500/[0.06] px-3 py-2 text-left transition hover:bg-amber-500/10 ${
          masterCanUseVtt && activeScene ? 'cursor-grab active:cursor-grabbing' : ''
        }`}
      >
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-amber-300/20 bg-amber-500/20 text-amber-100"
          style={{ borderColor: candidate.tokenBorderColor ?? undefined }}
        >
          <TriangleAlert className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-white">{candidate.name}</span>
          <span className="block truncate text-[11px] uppercase text-amber-200/70">
            {[candidate.level, candidate.rarity, candidate.complexity].filter(Boolean).join(' - ') || 'Hazard'}
          </span>
        </span>
        <button
          type="button"
          title="Abrir ficha"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-sky-300/20 bg-sky-500/10 text-sky-100 transition hover:bg-sky-500/20"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            openHazardCandidateSheet(candidate)
          }}
        >
          <ScrollText className="h-4 w-4" />
        </button>
        <button
          type="button"
          title="Iniciar encontro (manual)"
          disabled={!masterCanUseVtt}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-orange-300/25 bg-orange-500/15 text-orange-100 transition hover:bg-orange-500/25 disabled:cursor-not-allowed disabled:opacity-45"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            startHazardEncounter(candidate)
          }}
        >
          <Swords className="h-4 w-4" />
        </button>
        <button
          type="button"
          title="Adicionar como efeito da cena (sem posicao no mapa)"
          disabled={!masterCanUseVtt || !activeScene}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-500/10 text-cyan-100 transition hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-45"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            addSceneEffectHazard(candidate)
          }}
        >
          <Cloud className="h-4 w-4" />
        </button>
        <button
          type="button"
          title="Remover do toolbar"
          disabled={!masterCanUseVtt}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-red-300/20 bg-red-500/10 text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            removeHazardCandidateFromToolbar(candidate)
          }}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-[#08090c] text-white">
      <section
        className="absolute inset-0 min-h-0 overflow-hidden bg-[#0b0d12]"
        onClick={() => {
          setTokenContextMenu(null)
          setHazardInstanceMenu(null)
          setWallContextMenu(null)
        }}
      >
        <div ref={boardViewportRef} className="absolute inset-0 overflow-hidden">
          <div
            ref={gridAreaRef}
            className={[
              'relative overflow-hidden bg-[#0b0d12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]',
              activeTool === 'move' || altNavigationActive ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : '',
            ].join(' ')}
            style={{
              width: boardPixelSize.width,
              height: boardPixelSize.height,
              transform: `translate(${clampedPanOffset.x}px, ${clampedPanOffset.y}px)`,
            }}
            onDragOver={(event) => {
              if (!isMaster || !masterCanUseVtt) return
              const hasTokenDrag =
                event.dataTransfer.types.includes(questhubCharacterDragType) ||
                event.dataTransfer.types.includes(questhubBestiaryDragType) ||
                event.dataTransfer.types.includes(questhubHazardDragType)
              if (!hasTokenDrag) return
              event.preventDefault()
              event.dataTransfer.dropEffect = 'copy'
            }}
            onDrop={(event) => {
              if (event.dataTransfer.types.includes(questhubHazardDragType)) {
                dropHazardCandidate(event)
                return
              }
              dropTokenCandidate(event)
            }}
            onPointerDown={startBoardPan}
            onPointerMove={updateBoardPan}
            onPointerUp={finishBoardPan}
            onPointerCancel={(event) => {
              if (selectionAreaStartRef.current?.pointerId === event.pointerId) {
                cancelAreaSelection(event)
                return
              }
              finishBoardPan(event)
            }}
            onWheel={handleBoardWheel}
          >
            {activeScene?.imageUrl ? (
              <img
                ref={backgroundImageRef}
                src={activeScene.imageUrl}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
                draggable={false}
                onLoad={(event) => {
                  const { naturalWidth, naturalHeight } = event.currentTarget
                  if (!naturalWidth || !naturalHeight) {
                    finishSceneImageLoading(activeScene)
                    return
                  }
                  const sceneKey = sceneImageDimensionKey(activeScene)
                  sceneImageDimensionsRef.current.set(sceneKey, { width: naturalWidth, height: naturalHeight })
                  setActiveScene((current) => {
                    if (!current || sceneImageDimensionKey(current) !== sceneKey) return current
                    if (current.width === naturalWidth && current.height === naturalHeight) return current
                    return { ...current, width: naturalWidth, height: naturalHeight }
                  })
                  finishSceneImageLoading(activeScene)
                }}
                onError={() => finishSceneImageLoading(activeScene)}
              />
            ) : (
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />
            )}
            <VttGridOverlay settings={zoomedGridSettings} />
            <VttWallsOverlay
              walls={activeScene?.walls ?? []}
              drafts={wallDrafts}
              gridSize={tokenSize}
              isMasterView={Boolean(isMaster)}
              canOpenWallMenu={Boolean(isMaster)}
              onWallContextMenu={(wall, position) => setWallContextMenu({ wall, ...position })}
            />
            {visibleTokens.map((token) => (
              <PlayerToken
                key={token.id}
                token={token}
                tokenSize={tokenSize}
                gridShape={gridSettings.shape}
                gridAreaRef={gridAreaRef}
                canDrag={
                  (sessionActive &&
                    myCharacter?.id === token.characterId &&
                    myCharacter.role === 'PLAYER' &&
                    (!activeEncounter || activeEncounterTokenId === token.id)) ||
                  Boolean(isMaster)
                }
                turnLocked={Boolean(
                  !isMaster &&
                    activeEncounter &&
                    myCharacter?.id === token.characterId &&
                    activeEncounterTokenId !== token.id,
                )}
                canOpenContextMenu={canOpenTokenContextMenu(token)}
                isMasterView={Boolean(isMaster)}
                onMove={(position) => movePlayerToken(token, position)}
                onContextMenu={(contextToken, position) => setTokenContextMenu({ token: contextToken, ...position })}
                selectedForMultiSelect={Boolean(isMaster && multiSelectedTokenIds.includes(token.id))}
                selectedForEncounter={Boolean(isMaster && preselectedEncounterTokenIds.includes(token.id))}
                selectedForMeasuredMovement={movementSelectedTokenId === token.id}
                onEncounterSelectionToggle={isMaster ? toggleTokenEncounterPreselection : undefined}
                onEncounterSelectionDrop={isMaster ? addEncounterDragSelectionToBox : undefined}
                onMeasureFromToken={startTokenMeasurement}
                movementPath={tokenMovementPaths[token.id]}
                movementSpeed={tokenMovementSpeed}
                onMovementPathComplete={() =>
                  setTokenMovementPaths((current) => {
                    if (!current[token.id]) return current
                    const rest = { ...current }
                    delete rest[token.id]
                    clearMeasurementAfterTokenMovement(token.id)
                    return rest
                  })
                }
                isEncounterTurn={activeEncounterTokenId === token.id}
                health={combatHealthByTokenId[token.id]}
                movementBudget={movementBudgetForToken(token.id)}
                movementGridSize={gridSettings.size}
                movementMetersPerCell={gridSettings.metersPerCell}
                onMovementActionCommit={() => commitTokenMovementAction(token.id)}
                spellTargetSelectionActive={Boolean(spellTargetSelection || npcSpellTargetSelection)}
                selectedAsSpellTarget={Boolean(
                  spellTargetSelection?.selectedTokenIds.includes(token.id) || npcSpellTargetSelection?.selectedTokenIds.includes(token.id),
                )}
                onSpellTargetToggle={spellTargetSelection ? toggleSpellTarget : npcSpellTargetSelection ? toggleNpcSpellTarget : undefined}
              />
            ))}
            {sceneHazards
              .filter((hazard) => hazard.sceneId === activeScene?.id && hazard.position)
              .map((hazard) => (
                <HazardMarker
                  key={hazard.id}
                  hazard={hazard as VttSceneHazard & { position: { x: number; y: number } }}
                  tokenSize={tokenSize}
                  canControl={Boolean(isMaster && masterCanUseVtt)}
                  onOpenMenu={openHazardInstanceMenu}
                  onMove={moveHazardInstance}
                />
              ))}
            <VttMeasurementOverlay measurement={measurement} gridSize={tokenSize} metersPerCell={gridSettings.metersPerCell} />
            <SpellAreaOverlayView
              area={spellArea}
              gridSize={tokenSize}
              gridShape={gridSettings.shape}
              boardPixelSize={boardPixelSize}
              tokens={visibleTokens}
              rangeRing={spellPlacement ? spellPlacementRangeRing : null}
            />
            {selectionAreaDraft ? (
              <div
                className="pointer-events-none absolute z-[9] rounded-sm border border-sky-200/80 bg-sky-400/15 shadow-[0_0_20px_rgba(56,189,248,0.22)]"
                style={(() => {
                  const bounds = selectionAreaBounds(selectionAreaDraft)
                  return {
                    left: bounds.left * tokenSize,
                    top: bounds.top * tokenSize,
                    width: Math.max(1, (bounds.right - bounds.left) * tokenSize),
                    height: Math.max(1, (bounds.bottom - bounds.top) * tokenSize),
                  }
                })()}
              />
            ) : null}
            {activeTool === 'area-select' && isMaster && activeScene ? (
              <div
                className="absolute inset-0 z-[8] cursor-crosshair"
                onPointerDown={startAreaSelection}
                onPointerMove={updateAreaSelection}
                onPointerUp={finishAreaSelection}
                onPointerCancel={cancelAreaSelection}
              />
            ) : null}
            {activeTool === 'measure' && realtimeVttEnabled ? (
              <div
                className="absolute inset-0 z-[8] cursor-crosshair"
                onPointerDown={startMeasurement}
                onPointerMove={updateMeasurement}
                onPointerUp={finishMeasurement}
                onPointerCancel={finishMeasurement}
              />
            ) : null}
            {activeTool === 'walls' && isMaster && activeScene ? (
              <div
                className="absolute inset-0 z-[8] cursor-crosshair"
                onPointerDown={startWallDrawing}
                onPointerMove={updateWallDrawing}
                onPointerUp={finishWallDrawing}
                onPointerCancel={() => {
                  wallDraftStartRef.current = null
                  setWallDrafts([])
                }}
              />
            ) : null}
            {spellPlacement ? (
              <div
                className="absolute inset-0 z-[8] cursor-crosshair"
                onPointerMove={updateSpellPlacement}
                onClick={(event) => {
                  event.stopPropagation()
                  void confirmSpellPlacement()
                }}
                onContextMenu={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  cancelSpellPlacement()
                }}
              />
            ) : null}
          </div>
        </div>

        {sceneLoadingMessage ? <LoadingScreen message={sceneLoadingMessage} /> : null}

        <div className="pointer-events-none absolute inset-0 z-10 flex min-h-[560px] flex-col">
          <div className="relative flex-1">
            {toolsCollapsed ? (
              <button
                type="button"
                title="Expandir ferramentas"
                aria-label="Expandir ferramentas"
                className="pointer-events-auto absolute left-24 top-5 z-40 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/45 text-zinc-200 shadow-2xl backdrop-blur transition hover:bg-white/10 hover:text-white"
                onClick={() => setToolsCollapsed(false)}
              >
                <Wrench className="h-4 w-4" />
              </button>
            ) : (
              <div className="pointer-events-auto absolute left-24 top-5 z-40 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
                <button
                  type="button"
                  title="Recolher ferramentas"
                  aria-label="Recolher ferramentas"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  onClick={collapseToolsToolbar}
                >
                  <Wrench className="h-4 w-4" />
                </button>
                <span className="mx-1 my-1 w-px bg-white/10" aria-hidden="true" />
                {visibleToolButtons.map((tool) => {
                  const Icon = tool.icon
                  const active = tool.id === 'grid' ? gridSettingsOpen : activeTool === tool.id
                  const disabled = sessionState === 'PAUSED' && !isMaster && tool.id !== 'select'

                  return (
                    <button
                      key={tool.label}
                      type="button"
                      title={tool.label}
                      disabled={disabled}
                      className={[
                        'flex h-10 w-10 items-center justify-center rounded-md transition disabled:cursor-not-allowed disabled:opacity-45',
                        active ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                      ].join(' ')}
                      onClick={() => {
                        if (disabled) return
                        if (tool.id === 'grid') {
                          onGridSettingsOpenChange(!gridSettingsOpen)
                          if (!gridSettingsOpen) setActiveTool(null)
                          return
                        }

                        onGridSettingsOpenChange(false)
                        measuringRef.current = false
                        wallDraftStartRef.current = null
                        selectionAreaStartRef.current = null
                        setWallDrafts([])
                        setSelectionAreaDraft(null)
                        setWallContextMenu(null)
                        setActiveTool((current) => (current === tool.id ? null : tool.id))
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  )
                })}
              </div>
            )}

            {campaignId ? (
              <VttDiceControls
                ref={diceControlsRef}
                campaignId={campaignId}
                character={myCharacter}
                socket={socket}
                enabled={canRollDice}
                open={activeTool === 'dice'}
                clearSignal={diceClearSignal}
                onClose={() => setActiveTool(null)}
                onInitiativeRolled={updateEncounterInitiativeFromRoll}
                className="pointer-events-none absolute inset-0 z-20"
              />
            ) : null}

            {gridSettingsOpen && canConfigureGrid ? (
              <VttGridSettingsModal
                settings={gridSettings}
                onChange={handleGridSettingsChange}
                onClose={() => onGridSettingsOpenChange(false)}
              />
            ) : null}

            {activeTool === 'tokens' && isMaster ? (
              <div className="pointer-events-auto absolute left-24 top-20 z-30 w-[min(360px,calc(100vw-128px))] rounded-lg border border-white/10 bg-black/65 p-3 text-white shadow-2xl backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase text-zinc-400">
                    <CircleUserRound className="h-4 w-4 text-indigo-300" />
                    Tokens
                  </div>
                  <button
                    type="button"
                    title="Fechar tokens"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setActiveTool(null)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {sessionState === 'PAUSED' ? (
                  <div className="mb-3 rounded-md border border-amber-300/30 bg-amber-400/10 px-3 py-2 text-xs font-semibold text-amber-100">
                    Sessao pausada. Players estao bloqueados; o Mestre ainda pode gerenciar tokens.
                  </div>
                ) : null}

                <div className="mb-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    title="Remover todos os tokens da cena atual"
                    disabled={!masterCanUseVtt || !activeScene || currentSceneTokenCount === 0}
                    className="flex items-center justify-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 px-3 py-2 text-center text-xs font-semibold text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45"
                    onClick={() => removeTokens('scene')}
                  >
                    <Trash2 className="h-4 w-4" />
                    Cena ({currentSceneTokenCount})
                  </button>
                  <button
                    type="button"
                    title="Remover todos os tokens da campanha"
                    disabled={!masterCanUseVtt || globalTokenCount === 0}
                    className="flex items-center justify-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 px-3 py-2 text-center text-xs font-semibold text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45"
                    onClick={() => removeTokens('global')}
                  >
                    <Trash2 className="h-4 w-4" />
                    Todos ({globalTokenCount})
                  </button>
                </div>

                <div className="grid max-h-[360px] gap-2 overflow-auto pr-1">
                  {!availableTokenCandidates.length ? (
                    <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-sm text-zinc-500">
                      Nenhum token disponivel.
                    </div>
                  ) : null}
                  {availablePlayerTokenCandidates.map(renderTokenCandidateCard)}
                  {availablePlayerTokenCandidates.length && availableOtherTokenCandidates.length ? (
                    <div className="flex items-center gap-3 py-1" aria-hidden="true">
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="h-px flex-1 bg-white/10" />
                    </div>
                  ) : null}
                  {availableOtherTokenCandidates.map(renderTokenCandidateCard)}
                </div>
              </div>
            ) : null}

            {activeTool === 'hazards' && isMaster ? (
              <div className="pointer-events-auto absolute left-24 top-20 z-30 flex max-h-[calc(100vh-6rem)] w-[min(380px,calc(100vw-128px))] flex-col overflow-hidden rounded-lg border border-amber-300/15 bg-black/70 p-3 text-white shadow-2xl backdrop-blur">
                <div className="mb-3 flex shrink-0 items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase text-amber-200/80">
                    <TriangleAlert className="h-4 w-4 text-amber-300" />
                    Hazards
                  </div>
                  <button
                    type="button"
                    title="Fechar hazards"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setActiveTool(null)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mb-3 shrink-0 rounded-md border border-amber-300/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
                  Hazards preparados ficam aqui para consulta rapida do Mestre. Eles nao criam tokens NPC.
                </div>

                <div className="grid min-h-0 flex-1 gap-2 overflow-y-auto overflow-x-hidden pr-1">
                  {!hazardCandidates.length ? (
                    <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-sm text-zinc-500">
                      Nenhum hazard preparado.
                    </div>
                  ) : null}
                  {hazardCandidates.map(renderHazardCandidateCard)}
                </div>
              </div>
            ) : null}

            {activeTool === 'walls' && isMaster ? (
              <div className="pointer-events-auto absolute left-24 top-20 z-30 w-[min(320px,calc(100vw-128px))] rounded-lg border border-white/10 bg-black/70 p-3 text-white shadow-2xl backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase text-zinc-300">
                    <BrickWall className="h-4 w-4 text-sky-300" />
                    Paredes
                  </div>
                  <button
                    type="button"
                    title="Fechar paredes"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setActiveTool(null)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2">
                  {[
                    { id: 'wall' as const, label: 'Parede' },
                    { id: 'door' as const, label: 'Porta' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={[
                        'rounded-md border px-3 py-2 text-sm font-semibold transition',
                        wallToolKind === item.id
                          ? 'border-sky-300/45 bg-sky-500/20 text-sky-100'
                          : 'border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/10 hover:text-white',
                      ].join(' ')}
                      onClick={() => setWallToolKind(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2">
                  <label className="flex items-center justify-between gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-2 text-xs text-zinc-300">
                    Parede
                    <input
                      type="color"
                      value={wallColor}
                      className="h-7 w-9 cursor-pointer rounded border border-white/10 bg-transparent"
                      onChange={(event) => setWallColor(event.currentTarget.value)}
                    />
                  </label>
                  <label className="flex items-center justify-between gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-2 text-xs text-zinc-300">
                    Porta
                    <input
                      type="color"
                      value={doorColor}
                      className="h-7 w-9 cursor-pointer rounded border border-white/10 bg-transparent"
                      onChange={(event) => setDoorColor(event.currentTarget.value)}
                    />
                  </label>
                </div>

                <label className="mb-3 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-sky-500"
                    checked={playersCanSeeSceneWalls}
                    onChange={(event) => setPlayerWallVisibility(event.currentTarget.checked)}
                  />
                  Jogadores veem paredes
                </label>

                <div className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs leading-relaxed text-zinc-400">
                  Clique e arraste na cena para criar um segmento. Ctrl + arraste no modo Parede cria um retangulo.
                </div>

                <button
                  type="button"
                  disabled={!activeScene?.walls.length}
                  className="mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 px-3 text-xs font-semibold text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45"
                  onClick={() => updateActiveSceneWalls(() => [])}
                >
                  <Trash2 className="h-4 w-4" />
                  Limpar paredes da cena
                </button>
              </div>
            ) : null}

            {spellCastTarget ? (
              <SpellCastPanel
                characterId={spellCastTarget.characterId}
                casterName={spellCastTarget.casterName}
                casterContext={activeScene ? { sceneId: activeScene.id, casterTokenId: spellCastTarget.tokenId } : null}
                onClose={() => setSpellCastTarget(null)}
                onRequestAreaPlacement={beginSpellAreaPlacement}
                onRequestTargetSelection={beginSpellTargetSelection}
                onCastCommitted={({ spellName, consumed }) => showSpellCastFeedback(`${spellName} conjurada — consumo: ${consumed}`)}
              />
            ) : null}

            {npcSpellCastTarget && campaignId ? (
              <NpcSpellCastPanel
                campaignId={campaignId}
                definitionId={npcSpellCastTarget.definitionId}
                casterName={npcSpellCastTarget.casterName}
                onClose={() => setNpcSpellCastTarget(null)}
                onRequestTargetSelection={beginNpcSpellTargetSelection}
                onCastCommitted={({ spellName, consumed }) => showSpellCastFeedback(`${spellName} conjurada — consumo: ${consumed}`)}
              />
            ) : null}

            {spellCastFeedback && typeof document !== 'undefined'
              ? createPortal(
                  <div className="pointer-events-none fixed left-1/2 top-20 z-[100] -translate-x-1/2 rounded-md border border-purple-300/30 bg-black/85 px-3 py-1.5 text-sm text-purple-100 shadow-xl">
                    {spellCastFeedback}
                  </div>,
                  document.body,
                )
              : null}

            {spellPlacement ? (
              <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md border border-purple-300/30 bg-black/85 px-3 py-1.5 text-xs text-purple-100 shadow-xl">
                Posicione a area de {spellPlacement.request.spellName} — clique para conjurar, botao direito cancela
              </div>
            ) : null}

            {spellTargetSelection ? (
              <div className="pointer-events-auto fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-md border border-purple-300/30 bg-black/85 px-3 py-2 text-xs text-purple-100 shadow-xl">
                <span>
                  Selecione{' '}
                  {spellTargetSelection.request.targetProfile.min === spellTargetSelection.request.targetProfile.max
                    ? spellTargetSelection.request.targetProfile.min
                    : `${spellTargetSelection.request.targetProfile.min}-${spellTargetSelection.request.targetProfile.max}`}{' '}
                  alvo(s) para {spellTargetSelection.request.spellName} — {spellTargetSelection.selectedTokenIds.length} selecionado(s)
                </span>
                <button
                  type="button"
                  className="rounded bg-purple-500/30 px-2 py-1 font-semibold text-purple-100 transition hover:bg-purple-500/50 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={spellTargetSelection.selectedTokenIds.length < spellTargetSelection.request.targetProfile.min}
                  onClick={() => void confirmSpellTargetSelection()}
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  className="rounded border border-white/20 px-2 py-1 text-zinc-300 transition hover:bg-white/10"
                  onClick={cancelSpellTargetSelection}
                >
                  Cancelar
                </button>
              </div>
            ) : null}

            {npcSpellTargetSelection ? (
              <div className="pointer-events-auto fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-md border border-purple-300/30 bg-black/85 px-3 py-2 text-xs text-purple-100 shadow-xl">
                <span>
                  Selecione{' '}
                  {npcSpellTargetSelection.request.targetProfile.min === npcSpellTargetSelection.request.targetProfile.max
                    ? npcSpellTargetSelection.request.targetProfile.min
                    : `${npcSpellTargetSelection.request.targetProfile.min}-${npcSpellTargetSelection.request.targetProfile.max}`}{' '}
                  alvo(s) para {npcSpellTargetSelection.request.spellName} — {npcSpellTargetSelection.selectedTokenIds.length} selecionado(s)
                </span>
                <button
                  type="button"
                  className="rounded bg-purple-500/30 px-2 py-1 font-semibold text-purple-100 transition hover:bg-purple-500/50 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={npcSpellTargetSelection.selectedTokenIds.length < npcSpellTargetSelection.request.targetProfile.min}
                  onClick={() => void confirmNpcSpellTargetSelection()}
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  className="rounded border border-white/20 px-2 py-1 text-zinc-300 transition hover:bg-white/10"
                  onClick={cancelNpcSpellTargetSelection}
                >
                  Cancelar
                </button>
              </div>
            ) : null}

            {tokenContextMenu && canOpenTokenContextMenu(tokenContextMenu.token) ? (
              <div
                className="pointer-events-auto fixed z-50 w-56 rounded-lg border border-white/10 bg-[#111217]/95 p-2 text-white shadow-2xl backdrop-blur"
                style={{ left: tokenContextMenu.x, top: tokenContextMenu.y }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="border-b border-white/10 px-2 pb-2">
                  <div className="truncate text-sm font-semibold">{tokenContextMenu.token.name}</div>
                  <div className="truncate text-xs text-zinc-500">Dono: {tokenContextMenu.token.ownerName}</div>
                  {multiSelectedTokens.length ? (
                    <div className="mt-1 truncate text-xs font-semibold text-cyan-200">
                      {multiSelectedTokens.length} tokens multiselecionados
                    </div>
                  ) : null}
                </div>
                {canOpenBestiaryTokenSheet(tokenContextMenu.token) ? (
                  <button
                    type="button"
                    className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                    onClick={() => openBestiaryTokenSheet(tokenContextMenu.token)}
                  >
                    <ScrollText className="h-4 w-4" />
                    Ficha
                  </button>
                ) : null}
                {canOpenCharacterTokenSheet(tokenContextMenu.token) ? (
                  <button
                    type="button"
                    className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                    onClick={() => openCharacterTokenSheet(tokenContextMenu.token)}
                  >
                    <ScrollText className="h-4 w-4" />
                    Ficha
                  </button>
                ) : null}
                {canOpenCharacterTokenSheet(tokenContextMenu.token) ? (
                  <button
                    type="button"
                    className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                    onClick={() => openInventoryModal(tokenContextMenu.token)}
                  >
                    <Backpack className="h-4 w-4" />
                    Mochila
                  </button>
                ) : null}
                {canOpenCharacterTokenSheet(tokenContextMenu.token) ? (
                  <button
                    type="button"
                    className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                    onClick={() => openSpellCastPanel(tokenContextMenu.token)}
                  >
                    <Wand2 className="h-4 w-4" />
                    Lancar magia
                  </button>
                ) : null}
                {isMaster && tokenContextMenu.token.campaignNpcDefinitionId ? (
                  <button
                    type="button"
                    className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                    onClick={() => openNpcSpellCastPanel(tokenContextMenu.token)}
                  >
                    <Wand2 className="h-4 w-4 text-purple-300" />
                    Lancar magia (NPC)
                  </button>
                ) : null}
                {isMaster ? (
                  <>
                    <button
                      type="button"
                      disabled={!masterCanUseVtt}
                      className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={() => openCombatHealthEditor(tokenContextMenu.token.id, tokenContextMenu.token.name)}
                    >
                      <Heart className="h-4 w-4" />
                      Editar HP
                    </button>
                    <button
                      type="button"
                      disabled={
                        !masterCanUseVtt ||
                        contextActionTokens(tokenContextMenu.token).every((token) => token.hidden || isTokenInActiveEncounter(token.id))
                      }
                      className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={() => addContextTokenSelectionToEncounter(tokenContextMenu.token)}
                    >
                      <Swords className="h-4 w-4" />
                      Enviar p/ Encontro{contextActionTokenCount(tokenContextMenu.token) > 1 ? ` (${contextActionTokenCount(tokenContextMenu.token)})` : ''}
                    </button>
                    <button
                      type="button"
                      disabled={!masterCanUseVtt}
                      className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={() => toggleTokenVisibility(tokenContextMenu.token)}
                    >
                      {tokenContextMenu.token.hidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      {contextActionTokenCount(tokenContextMenu.token) > 1
                        ? `Alternar invisibilidade (${contextActionTokenCount(tokenContextMenu.token)})`
                        : tokenContextMenu.token.hidden
                          ? 'Tornar visivel'
                          : 'Tornar invisivel'}
                    </button>
                    <button
                      type="button"
                      disabled={!masterCanUseVtt}
                      className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-200 transition hover:bg-red-500/10 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={() => removeToken(tokenContextMenu.token)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Remover{contextActionTokenCount(tokenContextMenu.token) > 1 ? ` (${contextActionTokenCount(tokenContextMenu.token)})` : ''}
                    </button>
                  </>
                ) : null}
              </div>
            ) : null}

            {hazardInstanceMenu && isMaster ? (
              <div
                className="pointer-events-auto fixed z-50 w-56 rounded-lg border border-amber-300/15 bg-[#111217]/95 p-2 text-white shadow-2xl backdrop-blur"
                style={{ left: hazardInstanceMenu.x, top: hazardInstanceMenu.y }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="border-b border-amber-300/15 px-2 pb-2">
                  <div className="truncate text-sm font-semibold">{hazardInstanceMenu.hazard.name}</div>
                  <div className="truncate text-xs text-zinc-500">
                    {hazardScopeLabels[hazardInstanceMenu.hazard.scope]} - {hazardVisibilityLabels[hazardInstanceMenu.hazard.visibility]} - {hazardStateLabels[hazardInstanceMenu.hazard.state]}
                  </div>
                </div>
                <button
                  type="button"
                  disabled={
                    !masterCanUseVtt ||
                    pendingEncounterHazardIds.includes(hazardInstanceMenu.hazard.id) ||
                    isHazardInActiveEncounter(hazardInstanceMenu.hazard.id)
                  }
                  className={[
                    'mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition disabled:cursor-not-allowed disabled:opacity-50',
                    hazardInstanceMenu.hazard.executionMode === 'ENCOUNTER_PARTICIPANT'
                      ? 'bg-red-500/15 text-red-100 hover:bg-red-500/25'
                      : 'text-zinc-200 hover:bg-white/10 hover:text-white',
                  ].join(' ')}
                  onClick={() => addHazardInstanceToEncounterSelection(hazardInstanceMenu.hazard)}
                >
                  <Swords className="h-4 w-4" />
                  Enviar p/ Encontro
                </button>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => cycleHazardVisibility(hazardInstanceMenu.hazard)}
                >
                  {hazardInstanceMenu.hazard.visibility === 'HIDDEN' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  Visibilidade: {hazardVisibilityLabels[hazardInstanceMenu.hazard.visibility]}
                </button>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => cycleHazardState(hazardInstanceMenu.hazard)}
                >
                  <TriangleAlert className="h-4 w-4" />
                  Estado: {hazardStateLabels[hazardInstanceMenu.hazard.state]}
                </button>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  title="Area ainda funciona como um ponto ate o editor de raio/poligono existir (Fase D)"
                  className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => cycleHazardScope(hazardInstanceMenu.hazard)}
                >
                  <Maximize2 className="h-4 w-4" />
                  Escopo: {hazardScopeLabels[hazardInstanceMenu.hazard.scope]}
                </button>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  title="Dispara sozinho quando um token passa por cima desta celula"
                  className={[
                    'mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition disabled:cursor-not-allowed disabled:opacity-50',
                    hazardInstanceMenu.hazard.triggerMode === 'ON_TOKEN_ENTER'
                      ? 'bg-amber-500/15 text-amber-100 hover:bg-amber-500/25'
                      : 'text-zinc-200 hover:bg-white/10 hover:text-white',
                  ].join(' ')}
                  onClick={() => toggleHazardTriggerOnTokenEnter(hazardInstanceMenu.hazard)}
                >
                  <Zap className="h-4 w-4" />
                  Disparar ao pisar: {hazardInstanceMenu.hazard.triggerMode === 'ON_TOKEN_ENTER' ? 'Ligado' : 'Desligado'}
                </button>
                <div className="mt-2 grid gap-1 border-t border-amber-300/15 pt-2">
                  <label className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Notas do Mestre</label>
                  <textarea
                    value={hazardInstanceMenu.hazard.notes ?? ''}
                    disabled={!masterCanUseVtt}
                    rows={2}
                    className="min-h-[48px] w-full resize-none rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-white outline-none transition focus:border-amber-300/60 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Disparado, desativado, estado..."
                    onClick={(event) => event.stopPropagation()}
                    onChange={(event) => updateHazardNotesDraft(hazardInstanceMenu.hazard, event.currentTarget.value)}
                    onBlur={() => saveHazardNotes(hazardInstanceMenu.hazard)}
                  />
                </div>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-200 transition hover:bg-red-500/10 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => removeHazardInstance(hazardInstanceMenu.hazard)}
                >
                  <Trash2 className="h-4 w-4" />
                  Remover da cena
                </button>
              </div>
            ) : null}

            {wallContextMenu && isMaster ? (
              <div
                className="pointer-events-auto fixed z-50 w-56 overflow-hidden rounded-lg border border-white/10 bg-[#111218] p-2 text-white shadow-2xl"
                style={{ left: wallContextMenu.x, top: wallContextMenu.y }}
                onClick={(event) => event.stopPropagation()}
                onContextMenu={(event) => event.preventDefault()}
              >
                <div className="border-b border-white/10 px-2 pb-2">
                  <div className="truncate text-sm font-semibold">{wallContextMenu.wall.kind === 'door' ? 'Porta' : 'Parede'}</div>
                  <div className="truncate text-xs text-zinc-500">
                    {wallContextMenu.wall.kind === 'door' ? 'Status da passagem' : 'Barreira da cena'}
                  </div>
                </div>
                {wallContextMenu.wall.kind === 'door'
                  ? [
                      { key: 'open' as const, label: 'Aberta', disabled: false },
                      { key: 'locked' as const, label: 'Trancada', disabled: Boolean(wallContextMenu.wall.door?.open) },
                      { key: 'blocked' as const, label: 'Obstruida', disabled: Boolean(wallContextMenu.wall.door?.open) },
                      { key: 'ajar' as const, label: 'Encostada', disabled: Boolean(wallContextMenu.wall.door?.open) },
                    ].map((item) => (
                      <label key={item.key} className="mt-2 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-200 transition hover:bg-white/10">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-sky-500"
                          disabled={item.disabled}
                          checked={Boolean(wallContextMenu.wall.door?.[item.key])}
                          onChange={(event) => updateDoorState(wallContextMenu.wall.id, { [item.key]: event.currentTarget.checked })}
                        />
                        {item.label}
                      </label>
                    ))
                  : null}
                <button
                  type="button"
                  className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 px-3 text-xs font-semibold text-red-100 transition hover:bg-red-500/20"
                  onClick={() => removeWallSegment(wallContextMenu.wall.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  {wallContextMenu.wall.kind === 'door' ? 'Remover porta' : 'Remover parede'}
                </button>
              </div>
            ) : null}

            <div
              className="pointer-events-auto absolute top-5 z-40 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur"
              style={{ right: rightPanelCollapsed ? 80 : 344 }}
            >
              <button
                type="button"
                title="Diminuir zoom"
                disabled={activeZoomPercent <= zoomLimits.min}
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
                onClick={() => changeZoom(-1)}
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <div className="flex h-10 min-w-16 items-center justify-center px-3 text-xs font-semibold text-zinc-200">{activeZoomPercent}%</div>
              <button
                type="button"
                title="Aumentar zoom"
                disabled={activeZoomPercent >= zoomLimits.max}
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
                onClick={() => changeZoom(1)}
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            {scenePreparationOpen && isMaster ? (
              <ScenePreparationModal
                scenes={preparedScenes}
                saving={sceneSaving}
                deletingSceneId={sceneDeletingId}
                error={sceneSaveError}
                successMessage={sceneSuccessMessage}
                skippedFiles={sceneSkippedFiles}
                onCreateScene={createEmptyPreparedScene}
                onUpload={uploadSceneImage}
                onSave={savePreparedScenes}
                onDelete={deletePreparedScene}
                onClose={() => setScenePreparationOpen(false)}
              />
            ) : null}
          </div>
        </div>
      </section>

      <aside
        className={[
          'absolute inset-y-0 right-0 z-40 min-h-0 overflow-hidden border-l border-white/10 bg-[#101116]/95 shadow-2xl backdrop-blur transition-[width] max-xl:border-l',
          rightPanelCollapsed
            ? 'w-[56px] p-2'
            : 'w-[320px] p-3',
        ].join(' ')}
      >
        <div className={rightPanelCollapsed ? 'flex h-full min-h-0 flex-col items-center gap-3' : 'hidden'}>
          <button
            type="button"
            title="Expandir painel lateral"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/10 hover:text-white"
            onClick={() => setRightPanelCollapsed(false)}
          >
            <PanelRightOpen className="h-4 w-4" />
          </button>
          <div className="grid gap-2">
            <div
              title={rightPanelSessionStatus.title}
              aria-label={rightPanelSessionStatus.title}
              className={[
                'grid h-10 w-10 place-items-center rounded-lg border text-[10px] font-bold uppercase',
                rightPanelSessionStatus.className,
              ].join(' ')}
            >
              {RightPanelSessionStatusIcon ? (
                <RightPanelSessionStatusIcon className="h-4 w-4" />
              ) : (
                rightPanelSessionStatus.label
              )}
            </div>
            <button
              type="button"
              title="Encounter Mode"
              className={[
                'grid h-10 w-10 place-items-center rounded-lg border transition',
                rightPanelTab === 'encounter' || activeEncounter
                  ? 'border-red-300/40 bg-red-500/20 text-red-100'
                  : 'border-white/10 bg-white/[0.04] text-zinc-400 hover:bg-white/10 hover:text-white',
              ].join(' ')}
              onClick={() => openRightPanelTab('encounter')}
            >
              <Swords className="h-4 w-4" />
            </button>
            <button
              type="button"
              title="Jogadores"
              className={[
                'grid h-10 w-10 place-items-center rounded-lg border transition',
                rightPanelTab === 'players'
                  ? 'border-indigo-300/40 bg-indigo-500/20 text-indigo-100'
                  : 'border-white/10 bg-white/[0.04] text-zinc-400 hover:bg-white/10 hover:text-white',
              ].join(' ')}
              onClick={() => openRightPanelTab('players')}
            >
              <Users className="h-4 w-4" />
            </button>
            {isMaster ? (
              <button
                type="button"
                title="Cenas"
                className={[
                  'grid h-10 w-10 place-items-center rounded-lg border transition',
                  rightPanelTab === 'scenes'
                    ? 'border-purple-300/40 bg-purple-500/20 text-purple-100'
                    : 'border-white/10 bg-white/[0.04] text-purple-300 hover:bg-white/10 hover:text-purple-200',
                ].join(' ')}
                onClick={() => openRightPanelTab('scenes')}
              >
                <ScrollText className="h-4 w-4" />
              </button>
            ) : null}
            {isMaster ? (
              <button
                type="button"
                title="Hazards da Cena"
                className={[
                  'grid h-10 w-10 place-items-center rounded-lg border transition',
                  rightPanelTab === 'scene-hazards'
                    ? 'border-cyan-300/40 bg-cyan-500/20 text-cyan-100'
                    : 'border-white/10 bg-white/[0.04] text-cyan-300 hover:bg-white/10 hover:text-cyan-200',
                ].join(' ')}
                onClick={() => openRightPanelTab('scene-hazards')}
              >
                <Cloud className="h-4 w-4" />
              </button>
            ) : null}
            <button
              type="button"
              title="Chat"
              className={[
                'grid h-10 w-10 place-items-center rounded-lg border transition',
                rightPanelTab === 'chat'
                  ? 'border-indigo-300/40 bg-indigo-500/20 text-indigo-100'
                  : 'border-white/10 bg-white/[0.04] text-indigo-200 hover:bg-white/10 hover:text-white',
              ].join(' ')}
              onClick={() => openRightPanelTab('chat')}
            >
              <MessageCircle className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className={rightPanelCollapsed ? 'hidden h-full min-h-0 flex-col gap-3' : 'relative flex h-full min-h-0 flex-col gap-3'}>
          <button
            type="button"
            title="Recolher painel lateral"
            className="absolute right-0 top-0 z-10 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-[#15161c] text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onClick={() => setRightPanelCollapsed(true)}
          >
            <PanelRightClose className="h-4 w-4" />
          </button>

          <div className="flex shrink-0 items-center gap-2 pr-10">
            <div
              title={rightPanelSessionStatus.title}
              aria-label={rightPanelSessionStatus.title}
              className={[
                'grid h-9 w-9 place-items-center rounded-md border text-[10px] font-bold uppercase',
                rightPanelSessionStatus.className,
              ].join(' ')}
            >
              {RightPanelSessionStatusIcon ? (
                <RightPanelSessionStatusIcon className="h-4 w-4" />
              ) : (
                rightPanelSessionStatus.label
              )}
            </div>
            {[
              { id: 'encounter' as const, title: 'Encounter Mode', icon: Swords },
              { id: 'players' as const, title: 'Jogadores', icon: Users },
              ...(isMaster ? [{ id: 'scenes' as const, title: 'Cenas', icon: ScrollText }] : []),
              ...(isMaster ? [{ id: 'scene-hazards' as const, title: 'Hazards da Cena', icon: Cloud }] : []),
              { id: 'chat' as const, title: 'Chat', icon: MessageCircle },
            ].map((item) => {
              const Icon = item.icon
              const active = rightPanelTab === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  title={item.title}
                  aria-label={item.title}
                  className={[
                    'grid h-9 w-9 place-items-center rounded-md border transition',
                    active
                      ? 'border-indigo-300/45 bg-indigo-600 text-white'
                      : 'border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/10 hover:text-white',
                  ].join(' ')}
                  onClick={() => setRightPanelTab(item.id)}
                >
                  <Icon className="h-4 w-4" />
                </button>
              )
            })}
          </div>

          <div
            className={[
              'min-h-0 flex-1 overflow-hidden',
              rightPanelTab === 'encounter' && !encounterTrackerDetached ? 'flex flex-col gap-2' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {rightPanelTab === 'encounter' && !encounterTrackerDetached ? (
              <>
                <EncounterTrackerPanel
                  campaignId={campaignId}
                  encounter={activeEncounter}
                  isMaster={Boolean(isMaster)}
                  canStart={canStartEncounter}
                  tokenCount={encounterTokenCount}
                  selectedTokens={encounterTokens}
                  selectedHazards={pendingEncounterHazards}
                  onStart={startEncounter}
                  onEnd={endEncounter}
                  onRemoveSelectedToken={(tokenId) =>
                    setEncounterTokenIds((current) => current.filter((selectedTokenId) => selectedTokenId !== tokenId))
                  }
                  onRemoveSelectedHazard={removeHazardFromEncounterSelection}
                  onNextTurn={nextEncounterTurn}
                  onPreviousTurn={previousEncounterTurn}
                  onInitiativeChange={updateEncounterInitiative}
                  onTriggerHazard={triggerHazardParticipant}
                  onOpenHealthEditor={openCombatHealthEditor}
                  onResetMovement={resetParticipantMovement}
                  onRemoveParticipant={removeEncounterParticipant}
                  onRollInitiative={rollInitiative}
                  onRollAllInitiatives={rollAllEncounterInitiatives}
                  onDetach={() => setEncounterTrackerDetached(true)}
                />
                {activeEncounter?.status === 'ACTIVE' ? <BattleLogPanel log={activeEncounter.log} /> : null}
              </>
            ) : null}

            {rightPanelTab === 'encounter' && encounterTrackerDetached ? (
              <div className="grid h-full place-items-center rounded-lg border border-dashed border-white/10 bg-white/[0.025] px-4 text-center text-xs text-zinc-500">
                Encounter Mode esta destacado em um modal.
              </div>
            ) : null}

            {rightPanelTab === 'players' ? (
              <section className="grid h-full content-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <Users className="h-4 w-4 text-indigo-300" />
                  <div>
                    <div className="text-sm font-semibold text-white">Jogadores</div>
                    <div className="text-[11px] uppercase text-zinc-500">Mesa ativa</div>
                  </div>
                </div>
                <div className="rounded-md border border-white/10 bg-black/20 px-3 py-3 text-xs text-zinc-400">
                  {myCharacter ? `${myCharacter.name} conectado como ${myCharacter.role === 'MASTER' ? 'Mestre' : 'Player'}.` : 'Carregando participante atual.'}
                </div>
              </section>
            ) : null}

            {rightPanelTab === 'session' ? (
              <section className="grid h-full content-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  {campaign?.isOnline ? <Eye className="h-4 w-4 text-emerald-300" /> : <EyeOff className="h-4 w-4 text-zinc-400" />}
                  <div>
                    <div className="text-sm font-semibold text-white">Sessao</div>
                    <div className="text-[11px] uppercase text-zinc-500">{sessionState === 'PAUSED' ? 'Pausada' : campaign?.isOnline ? 'Online' : 'Offline'}</div>
                  </div>
                </div>
                <div className="rounded-md border border-white/10 bg-black/20 px-3 py-3 text-xs leading-relaxed text-zinc-400">
                  {sessionState === 'PAUSED'
                    ? 'Players estao bloqueados na mesa, exceto chat. O Mestre ainda pode preparar a cena.'
                    : campaign?.isOnline
                      ? 'A mesa esta online para participantes ativos.'
                      : 'A sessao ainda nao foi retomada.'}
                </div>
              </section>
            ) : null}

            {rightPanelTab === 'scenes' && isMaster ? (
              <SceneSidebarScenes
                scenes={preparedScenes}
                activeSceneId={activeScene?.id ?? null}
                onSelectScene={selectPreparedScene}
                onPrepareScene={() => setScenePreparationOpen(true)}
              />
            ) : null}

            {rightPanelTab === 'scene-hazards' && isMaster ? (
              <SceneHazardsPanel
                hazards={sceneEffectHazards}
                canControl={Boolean(masterCanUseVtt)}
                hasActiveEncounter={Boolean(activeEncounter)}
                pendingEncounterHazardIds={pendingEncounterHazardIds}
                onOpenSheet={(hazardEntryId) => setBestiarySheetCreatureId(hazardEntryId)}
                onCycleVisibility={cycleHazardVisibility}
                onCycleState={cycleHazardState}
                onUpdateNotes={updateSceneHazardNotes}
                onRemove={removeHazardInstance}
                onSendToEncounter={addHazardInstanceToEncounterSelection}
              />
            ) : null}

            {rightPanelTab === 'chat' ? (
              campaignId && !chatDetached ? (
                <CampaignChat
                  campaignId={campaignId}
                  characterId={campaign?.myCharacterId}
                  enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE' && socket)}
                  className="h-full min-h-0"
                  headerAction={
                    <button
                      type="button"
                      title="Destacar chat"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
                      onClick={() => setChatDetached(true)}
                    >
                      <PanelRightOpen className="h-4 w-4" />
                    </button>
                  }
                />
              ) : (
                <div className="grid h-full place-items-center rounded-lg border border-dashed border-white/10 text-center text-xs text-zinc-500">
                  Chat destacado em um modal.
                </div>
              )
            ) : null}
          </div>
        </div>
      </aside>

      {campaignId && bestiarySheetCreatureId ? (
        <BestiaryCreatureSheetModal
          campaignId={campaignId}
          creatureId={bestiarySheetCreatureId}
          onClose={() => setBestiarySheetCreatureId(null)}
        />
      ) : null}

      {campaignId && isMaster && activeHazardEncounter ? (
        <HazardEncounterPanel
          campaignId={campaignId}
          candidate={activeHazardEncounter.candidate}
          notes={activeHazardEncounter.notes}
          onNotesChange={updateHazardEncounterNotes}
          onClose={closeHazardEncounter}
        />
      ) : null}

      {characterTokenSheet ? (
        <CharacterSheetModal
          characterId={characterTokenSheet.characterId}
          characterName={characterTokenSheet.characterName}
          readOnly={characterTokenSheet.readOnly}
          identityLocked={characterTokenSheet.identityLocked}
          isGameMaster={characterTokenSheet.isGameMaster}
          campaignId={campaignId}
          socket={socket}
          onSaved={() => {
            if (campaignId && socket) {
              socket.emit('vtt:combat:health:request', { campaignId, tokenId: characterTokenSheet.tokenId })
            }
          }}
          onClose={() => setCharacterTokenSheet(null)}
        />
      ) : null}

      {inventoryTokenModal && campaignId ? (
        <InventoryModal
          campaignId={campaignId}
          characterId={inventoryTokenModal.characterId}
          characterName={inventoryTokenModal.characterName}
          isMaster={isMaster}
          canManage
          socket={socket}
          onClose={() => setInventoryTokenModal(null)}
        />
      ) : null}


      {combatHealthEditor ? (
        <CombatHealthEditorModal
          combatantName={combatHealthEditor.name}
          initialHealth={(() => {
            const known = combatHealthByTokenId[combatHealthEditor.tokenId]
            return known && isExactCombatantHealth(known) ? known : null
          })()}
          onApplyDamage={(amount, note) => adjustCombatHealth(combatHealthEditor.tokenId, 'DAMAGE', amount, note)}
          onApplyHeal={(amount, note) => adjustCombatHealth(combatHealthEditor.tokenId, 'HEAL', amount, note)}
          onSaveValues={(patch, note) => saveCombatHealth(combatHealthEditor.tokenId, patch, note)}
          onClose={() => setCombatHealthEditor(null)}
        />
      ) : null}

      {chatDetached && campaignId && typeof document !== 'undefined'
        ? createPortal(
            <DetachedChatModal
              campaignId={campaignId}
              characterId={campaign?.myCharacterId ?? undefined}
              enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE' && socket)}
              onClose={() => setChatDetached(false)}
              onAttach={() => {
                setChatDetached(false)
                setRightPanelCollapsed(false)
                setRightPanelTab('chat')
              }}
            />,
            document.body,
          )
        : null}

      {encounterTrackerDetached && typeof document !== 'undefined'
        ? createPortal(
            <EncounterTrackerPanel
              campaignId={campaignId}
              encounter={activeEncounter}
              isMaster={Boolean(isMaster)}
              canStart={canStartEncounter}
              tokenCount={encounterTokenCount}
              selectedTokens={encounterTokens}
              selectedHazards={pendingEncounterHazards}
              displayMode="detached"
              onStart={startEncounter}
              onEnd={endEncounter}
              onRemoveSelectedToken={(tokenId) =>
                setEncounterTokenIds((current) => current.filter((selectedTokenId) => selectedTokenId !== tokenId))
              }
              onRemoveSelectedHazard={removeHazardFromEncounterSelection}
              onNextTurn={nextEncounterTurn}
              onPreviousTurn={previousEncounterTurn}
              onInitiativeChange={updateEncounterInitiative}
              onTriggerHazard={triggerHazardParticipant}
              onOpenHealthEditor={openCombatHealthEditor}
              onRemoveParticipant={removeEncounterParticipant}
              onRollInitiative={rollInitiative}
              onRollAllInitiatives={rollAllEncounterInitiatives}
              onAttach={() => {
                setEncounterTrackerDetached(false)
                setRightPanelCollapsed(false)
              }}
            />,
            document.body,
          )
        : null}
    </div>
  )
})

function DetachedChatModal({
  campaignId,
  characterId,
  enabled,
  onClose,
  onAttach,
}: {
  campaignId: string
  characterId: string | undefined
  enabled: boolean
  onClose: () => void
  onAttach: () => void
}) {
  const getInitialBox = (): ResizableBox => {
    if (typeof window === 'undefined') return { x: 24, y: 72, width: 420, height: 560 }
    const width = Math.min(480, Math.max(360, window.innerWidth * 0.32))
    const height = Math.min(680, Math.max(420, window.innerHeight * 0.68))
    return {
      x: Math.max(16, window.innerWidth - width - 88),
      y: Math.max(16, (window.innerHeight - height) / 2),
      width,
      height,
    }
  }
  const [box, setBox] = useState<ResizableBox>(getInitialBox)
  const [restoredBox, setRestoredBox] = useState<ResizableBox | null>(null)
  const maximized =
    typeof window !== 'undefined' &&
    box.x <= 16 &&
    box.y <= 16 &&
    box.width >= window.innerWidth - 32 &&
    box.height >= window.innerHeight - 32

  function startDrag(event: React.PointerEvent<HTMLElement>) {
    if (maximized) return
    event.preventDefault()
    const startX = event.clientX
    const startY = event.clientY
    const startBox = box

    function onPointerMove(pointerEvent: globalThis.PointerEvent) {
      const margin = 16
      const nextX = clampNumber(pointerEvent.clientX - startX + startBox.x, margin, window.innerWidth - startBox.width - margin)
      const nextY = clampNumber(pointerEvent.clientY - startY + startBox.y, margin, window.innerHeight - startBox.height - margin)
      setBox({ ...startBox, x: nextX, y: nextY })
    }

    function onPointerUp() {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }

  function toggleMaximized() {
    if (typeof window === 'undefined') return

    if (maximized && restoredBox) {
      setBox(restoredBox)
      setRestoredBox(null)
      return
    }

    setRestoredBox(box)
    setBox({
      x: 16,
      y: 16,
      width: window.innerWidth - 32,
      height: window.innerHeight - 32,
    })
  }

  return (
    <section
      className="pointer-events-auto fixed z-[80] overflow-hidden rounded-lg border border-white/10 bg-[#08090d]/92 text-white shadow-2xl backdrop-blur-xl"
      style={{ left: box.x, top: box.y, width: box.width, height: box.height }}
    >
      <ResizableEdges
        box={box}
        setBox={setBox}
        limits={{ minWidth: 360, minHeight: 380, maxWidth: 1120, maxHeight: 820, viewportMargin: 16 }}
      />
      <div
        className="flex cursor-grab items-center justify-between gap-3 border-b border-white/10 px-4 py-3 active:cursor-grabbing"
        onPointerDown={startDrag}
      >
        <div className="flex min-w-0 items-center gap-3">
          <MessageCircle className="h-4 w-4 shrink-0 text-indigo-300" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">Chat</div>
            <div className="truncate text-[11px] uppercase text-zinc-500">Mesa ativa</div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2" onPointerDown={(event) => event.stopPropagation()}>
          <button
            type="button"
            title="Retornar para sidebar"
            className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onClick={onAttach}
          >
            <Pin className="h-4 w-4" />
          </button>
          <button
            type="button"
            title={maximized ? 'Encolher chat' : 'Expandir chat'}
            className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onClick={toggleMaximized}
          >
            {maximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
          <button
            type="button"
            title="Fechar chat"
            className="grid h-8 w-8 place-items-center rounded-md text-zinc-300 transition hover:bg-red-500/10 hover:text-red-100"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <CampaignChat
        campaignId={campaignId}
        characterId={characterId}
        enabled={enabled}
        hideHeader
        className="h-[calc(100%-57px)] min-h-0 rounded-none border-0 bg-transparent"
      />
    </section>
  )
}


