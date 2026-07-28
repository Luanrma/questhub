import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  BrickWall,
  CloudFog,
  CircleMinus,
  CircleUserRound,
  Dice5,
  Eye,
  EyeOff,
  Grid3X3,
  MessageCircle,
  Image as ImageIcon,
  MousePointer2,
  Move,
  Pencil,
  PanelRightClose,
  PanelRightOpen,
  Pause,
  ScrollText,
  Sparkles,
  Swords,
  Trash2,
  Users,
  Wrench,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { CampaignChat } from '../../components/CampaignChat'
import { LoadingScreen } from '../../components/LoadingScreen'
import { CampaignInventoryModal } from '../../game-systems/CampaignInventoryModal'
import { useSession } from '../../contexts/SessionContext'
import { api, apiForm } from '../../lib/api'
import { VttDiceControls } from '../dice-roller'
import {
  AreaOverlay,
  AreaEffectContextMenu,
  AreaTemplatesPanel,
  areaScaleForMeters,
  calculateAreaRender,
  directionDegrees,
  findIntersectingTargetTokenId,
  primaryAreaDimension,
  snapAreaOrigin,
  toggleTargetSelection,
  useAreaTemplates,
  useSharedAreaPreviews,
  type AreaPlacement,
  type CampaignAreaTemplate,
  type SceneAreaEffect,
} from '../area-templates'
import { defaultGridSettings, normalizeGridSettings, type VttGridSettings } from '../grid'
import { FogControlsPanel, type FogSetupDraft } from '../fog-of-war/components/FogControlsPanel'
import { FogLightTokens } from '../fog-of-war/components/FogLightTokens'
import { FogOverlay, FogVisibleLayer } from '../fog-of-war/components/FogOverlay'
import { normalizeFixedLightSources, normalizeSceneFogConfig } from '../fog-of-war/domain/config'
import type { FogLightSourceConfig, TokenVisionConfig } from '../fog-of-war/domain/types'
import { useFogOfWar } from '../fog-of-war/hooks/useFogOfWar'
import { zoomLimits } from './config/constants'
import {
  clampMeasurementPoint,
  clampNumber,
  clampPanOffset,
  getBoardPixelSize,
  getCenteredPanOffset,
  getTokenSize,
  normalizeTableToken,
  normalizeTokenPosition,
  scaleGridSettings,
  tokenGridPositionFromPixelCenter,
} from './domain/boardMath'
import { appendMovementPoint, areMovementPointsEqual, movementPathDistance, truncatePathAtPoint } from './domain/tokenMovement'
import { normalizeTokenRotation } from './domain/tokenTransform'
import {
  filenameEquals,
  getDefaultSceneDimensions,
  isDraftPreparedScene,
  normalizePreparedSceneList,
  preparedSceneToTableScene,
  readImageDimensions,
  revokeSceneImageUrl,
  sceneImageDimensionKey,
  sceneResponseToPreparedScene,
  validateSceneImage,
} from './domain/sceneDomain'
import { applyDoorToWalls, createRectangleWallSegments, doorSnapToleranceInRenderedPixels, isMovementBlockedBySceneWalls, normalizeDoorState } from './domain/wallGeometry'
import { VttGridOverlay, VttGridSettingsModal } from './components/GridControls'
import { ScenePreparationModal, SceneSidebarScenes } from './components/SceneControls'
import { PlayerToken, VttMeasurementOverlay, VttWallsOverlay } from './components/BoardOverlays'
import { CombatTrackerPanel } from './components/CombatTrackerPanel'
import { hasTokenDragData, readTokenDragData, writeTokenDragData } from './infrastructure/tokenDragAndDrop'
import { TokenContextMenu } from './components/TokenContextMenu'
import { TokenImagePickerDialog } from './components/TokenImagePickerDialog'
import { TokenAvatar } from './components/TokenAvatar'
import { getLastTokenColor } from './infrastructure/tokenAppearancePreferences'
import { useSmoothTokenMovement } from './hooks/useSmoothTokenMovement'
import type {
  AssetExistsResponse,
  AssetUploadResponse,
  CampaignPlayer,
  CampaignSceneResponse,
  CampaignToken,
  PreparedScene,
  VttCombatChangedPayload,
  VttCombatState,
  VttGridBounds,
  VttMeasurement,
  VttMeasurementChangedPayload,
  VttMeasurementPoint,
  VttPanOffset,
  VttPlayerToken,
  VttSceneChangedPayload,
  VttTableScene,
  VttTokenCandidate,
  VttTokenChangedPayload,
  VttTokenMovementStartedPayload,
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
  { id: 'move', label: 'Mover', icon: Move },
  { id: 'dice', label: 'Dados', icon: Dice5 },
  { id: 'tokens', label: 'Tokens', icon: CircleUserRound },
  { id: 'grid', label: 'Grid', icon: Grid3X3 },
  { id: 'walls', label: 'Paredes e portas', icon: BrickWall },
  { id: 'fog', label: 'Fog of War', icon: CloudFog },
  { id: 'area-templates', label: 'Templates de Area', icon: Sparkles },
] as const

const defaultWallColor = '#e5e7eb'
const defaultDoorColor = '#f59e0b'

function scaleWallsForZoom(walls: VttWallSegment[], zoomPercent: number): VttWallSegment[] {
  const scale = zoomPercent / 100
  return walls.map((wall) => ({
    ...wall,
    start: { x: wall.start.x * scale, y: wall.start.y * scale },
    end: { x: wall.end.x * scale, y: wall.end.y * scale },
  }))
}

type CampaignOverviewPageProps = {
  gridSettings: VttGridSettings
  gridSettingsOpen: boolean
  canConfigureGrid: boolean
  sessionState: 'ACTIVE' | 'PAUSED' | null
  onGridSettingsChange: (settings: VttGridSettings, options?: { realtime?: boolean; sceneId?: string }) => void
  onGridSettingsOpenChange: (open: boolean) => void
}

type SceneRenderTarget = {
  sceneId: string | null
  imageKey: string | null
  tokenCount: number
}

type RightPanelTab = 'combat' | 'players' | 'session' | 'scenes' | 'chat'

type AreaHandleDragState = {
  effectId: string | null
  pointerId: number
  placement: AreaPlacement
  startClient: { x: number; y: number }
  moved: boolean
}

export function CampaignOverviewPage({
  gridSettings,
  gridSettingsOpen,
  canConfigureGrid,
  sessionState,
  onGridSettingsChange,
  onGridSettingsOpenChange,
}: CampaignOverviewPageProps) {
  const { campaignId } = useParams()
  const { campaigns, me, socket, connectRealtime } = useSession()
  const boardViewportRef = useRef<HTMLDivElement | null>(null)
  const gridAreaRef = useRef<HTMLDivElement | null>(null)
  const backgroundImageRef = useRef<HTMLImageElement | null>(null)
  const wallDraftStartRef = useRef<VttMeasurementPoint | null>(null)
  const wallUndoStackRef = useRef<VttWallSegment[][]>([])
  const measurementRef = useRef<VttMeasurement | null>(null)
  const measuredMovementTokenIdRef = useRef<string | null>(null)
  const panningRef = useRef<{ pointerId: number; x: number; y: number } | null>(null)
  const previousCampaignOnlineRef = useRef<{ campaignId: string | null; online: boolean }>({ campaignId: null, online: false })
  const [tokenState, setTokenState] = useState<VttTokenState>({ campaignId: null, tokens: [] })
  const { startMovement: startSmoothTokenMovement, movingTokenIds } = useSmoothTokenMovement(
    (tokenId, position) => {
      setTokenState((current) => ({
        ...current,
        tokens: current.tokens.map((token) => token.id === tokenId ? { ...token, position } : token),
      }))
    },
    (tokenId) => {
      if (measurementRef.current?.tokenId !== tokenId) return
      measurementRef.current = null
      setMeasurement(null)
    },
  )
  const [campaignTokens, setCampaignTokens] = useState<CampaignToken[]>([])
  const [tokenCandidates, setTokenCandidates] = useState<VttTokenCandidate[]>([])
  const [campaignPlayers, setCampaignPlayers] = useState<CampaignPlayer[]>([])
  const [tokenContextMenu, setTokenContextMenu] = useState<VttTokenContextMenu | null>(null)
  const [inventoryToken, setInventoryToken] = useState<VttPlayerToken | null>(null)
  const [selectedTokenId, setSelectedTokenId] = useState<string | null>(null)
  const [tokenImageEditTarget, setTokenImageEditTarget] = useState<CampaignToken | null>(null)
  const [tokenDropError, setTokenDropError] = useState<string | null>(null)
  const [gridBounds, setGridBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [viewportBounds, setViewportBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [panOffset, setPanOffset] = useState<VttPanOffset>({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [altNavigationActive, setAltNavigationActive] = useState(false)
  const [activeTool, setActiveTool] = useState<VttToolId | null>('select')
  const [toolsCollapsed, setToolsCollapsed] = useState(false)
  const [measurement, setMeasurement] = useState<VttMeasurement | null>(null)
  const [measuredMovementTokenId, setMeasuredMovementTokenId] = useState<string | null>(null)
  const [wallDrafts, setWallDrafts] = useState<VttWallSegment[]>([])
  const [wallKind, setWallKind] = useState<VttWallSegment['kind']>('wall')
  const [wallColor, setWallColor] = useState(defaultWallColor)
  const [doorColor, setDoorColor] = useState(defaultDoorColor)
  const [wallUndoCount, setWallUndoCount] = useState(0)
  const [wallContextMenu, setWallContextMenu] = useState<{ wall: VttWallSegment; x: number; y: number } | null>(null)
  const [diceClearSignal, setDiceClearSignal] = useState(0)
  const [zoomPercent, setZoomPercent] = useState(100)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true)
  const [rightPanelTab, setRightPanelTab] = useState<RightPanelTab>('combat')
  const [combatTrackerDetached, setCombatTrackerDetached] = useState(false)
  const [scenePreparationOpen, setScenePreparationOpen] = useState(false)
  const [preparedScenes, setPreparedScenes] = useState<PreparedScene[]>([])
  const [activeScene, setActiveScene] = useState<VttTableScene | null>(null)
  const [fogSetupPreview, setFogSetupPreview] = useState<FogSetupDraft | null>(null)
  const [sceneSaveError, setSceneSaveError] = useState<string | null>(null)
  const [sceneSuccessMessage, setSceneSuccessMessage] = useState<string | null>(null)
  const [sceneSkippedFiles, setSceneSkippedFiles] = useState<string[]>([])
  const [sceneSaving, setSceneSaving] = useState(false)
  const [sceneDeletingId, setSceneDeletingId] = useState<string | null>(null)
  const [sceneAssetsLoadedCampaignId, setSceneAssetsLoadedCampaignId] = useState<string | null>(null)
  const [sceneRenderTarget, setSceneRenderTarget] = useState<SceneRenderTarget | null>(null)
  const [combatState, setCombatState] = useState<VttCombatState | null>(null)
  const [activeAreaTemplate, setActiveAreaTemplate] = useState<CampaignAreaTemplate | null>(null)
  const [selectedAreaTargetIds, setSelectedAreaTargetIds] = useState<string[]>([])
  const [appliedAreaEffect, setAppliedAreaEffect] = useState<{ tokenIds: string[]; color: string } | null>(null)
  const [areaTemplatesDetached, setAreaTemplatesDetached] = useState(false)
  const [areaDraftOrigin, setAreaDraftOrigin] = useState<{ x: number; y: number } | null>(null)
  const [areaPointer, setAreaPointer] = useState<{ x: number; y: number } | null>(null)
  const [pendingAreaPlacement, setPendingAreaPlacement] = useState<AreaPlacement | null>(null)
  const [areaCursorPosition, setAreaCursorPosition] = useState<{ x: number; y: number } | null>(null)
  const [editingAreaEffectId, setEditingAreaEffectId] = useState<string | null>(null)
  const [areaEffectContextMenu, setAreaEffectContextMenu] = useState<{
    effectId: string | null
    name: string
    position: { x: number; y: number }
    draftPlacement: AreaPlacement
  } | null>(null)
  const areaHandleDragRef = useRef<AreaHandleDragState | null>(null)
  const targetEffectTimeoutRef = useRef<number | null>(null)
  const [areaHandleDrag, setAreaHandleDrag] = useState<AreaHandleDragState | null>(null)
  const preparedScenesRef = useRef(preparedScenes)
  const sceneImageDimensionsRef = useRef(new Map<string, VttGridBounds>())
  const onGridSettingsChangeRef = useRef(onGridSettingsChange)
  const sceneGridRevisionRef = useRef(0)
  const [sceneLoadingMessage, setSceneLoadingMessage] = useState<string | null>(null)
  const measurementGridKey = `${gridSettings.shape}:${gridSettings.size}:${gridSettings.offsetX}:${gridSettings.offsetY}:${gridSettings.metersPerCell}`
  const measurementGridKeyRef = useRef(measurementGridKey)

  const campaign = campaigns.find((item) => item.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const areaLibrary = useAreaTemplates(campaignId, activeScene?.id, Boolean(campaignId && campaign?.myStatus === 'ACTIVE'), socket)
  const sessionActive = Boolean(campaign?.isOnline && sessionState !== 'PAUSED')
  const masterCanUseVtt = Boolean(isMaster)
  const shouldLoadTokenManagement = Boolean(isMaster && (activeTool === 'tokens' || tokenContextMenu))
  const playerCanUseVtt = Boolean(!isMaster && sessionActive)
  const canUseAreaTemplates = Boolean(isMaster || playerCanUseVtt)
  const realtimeVttEnabled = Boolean(sessionActive || masterCanUseVtt)
  const sharedAreaPreviews = useSharedAreaPreviews(campaignId, activeScene?.id, socket, sessionActive)
  const canRollDice = Boolean(
    campaignId &&
      campaign?.myStatus === 'ACTIVE' &&
      socket &&
      (campaign.myRole === 'MASTER' || playerCanUseVtt),
  )
  const activeZoomPercent = clampNumber(zoomPercent, zoomLimits.min, zoomLimits.max)
  const zoomedGridSettings = scaleGridSettings(gridSettings, activeZoomPercent)
  const gridRenderKey = [
    zoomedGridSettings.visible,
    zoomedGridSettings.shape,
    zoomedGridSettings.size,
    zoomedGridSettings.lineWidth,
    zoomedGridSettings.color,
  ].join(':')
  const tokenSize = getTokenSize(zoomedGridSettings)
  const boardPixelSize = getBoardPixelSize(tokenSize, activeZoomPercent, activeScene, gridSettings.shape)
  const clampedPanOffset = clampPanOffset(panOffset, viewportBounds, boardPixelSize)
  const visibleToolButtons = toolButtons.filter((tool) => {
    if (tool.id === 'area-templates') return canUseAreaTemplates
    if (tool.id === 'grid' || tool.id === 'tokens' || tool.id === 'walls' || tool.id === 'fog') return canConfigureGrid
    return true
  })
  const playersCanSeeSceneWalls = Boolean(activeScene?.walls.length && activeScene.walls.every((wall) => wall.playerVisible))
  const playerTokens = tokenState.campaignId === campaignId ? tokenState.tokens : []
  const visibleTokens = isMaster ? playerTokens : playerTokens.filter((token) => !token.hidden)
  const selectedToken = visibleTokens.find((token) => token.id === selectedTokenId) ?? null
  const fogPreviewTokens = fogSetupPreview?.token
    ? visibleTokens.map((token) => token.id === fogSetupPreview.token?.id ? {
      ...token,
      visionConfig: fogSetupPreview.token.visionConfig,
      blocksVisionAndLight: fogSetupPreview.token.blocksVisionAndLight,
      } : token)
    : visibleTokens
  const fogPreviewScene = activeScene && fogSetupPreview ? {
    ...activeScene,
    fogConfig: fogSetupPreview.fogConfig,
    fixedLightSources: fogSetupPreview.fixedLights,
  } : activeScene
  const controlledVisionTokens = fogPreviewTokens.filter((token) => token.controllerUserId === me?.id)
  const fogVisionToken = isMaster
    ? fogPreviewTokens.find((token) => token.id === selectedTokenId) ?? null
    : controlledVisionTokens[0] ?? null
  const scaledSceneWalls = useMemo(() => scaleWallsForZoom(activeScene?.walls ?? [], activeZoomPercent), [activeScene?.walls, activeZoomPercent])
  const fog = useFogOfWar({
    campaignId,
    scene: fogPreviewScene,
    tokens: fogPreviewTokens,
    walls: scaledSceneWalls,
    grid: zoomedGridSettings,
    board: boardPixelSize,
    zoomPercent: activeZoomPercent,
    visionToken: fogVisionToken,
    isMaster: Boolean(isMaster),
    sessionState,
  })
  const resetLocalFogExploration = fog.resetLocalExploration
  const flushFogExploration = fog.flush
  const persistentAreaPlacements = useMemo<AreaPlacement[]>(() => areaLibrary.effects.map((effect) => ({
    key: `effect-${effect.id}`,
    effectId: effect.id,
    template: effect.configurationSnapshot,
    origin: { x: effect.origin.x * tokenSize + zoomedGridSettings.offsetX, y: effect.origin.y * tokenSize + zoomedGridSettings.offsetY },
    rotationDegrees: effect.rotationDegrees,
    scale: effect.scale,
    selected: false,
  })), [areaLibrary.effects, tokenSize, zoomedGridSettings.offsetX, zoomedGridSettings.offsetY])
  const displayedPersistentAreaPlacements = useMemo(() => {
    const menu = areaEffectContextMenu
    return persistentAreaPlacements.map((placement) => {
      if (areaHandleDrag && areaHandleDrag.effectId === placement.effectId) return areaHandleDrag.placement
      if (menu?.effectId && menu.effectId === placement.effectId) return menu.draftPlacement
      return placement
    })
  }, [areaEffectContextMenu, areaHandleDrag, persistentAreaPlacements])
  const previewAreaPlacement = useMemo<AreaPlacement | null>(() => {
    if (activeTool !== 'area-templates' || !activeAreaTemplate) return null
    if (pendingAreaPlacement) return areaEffectContextMenu?.effectId === null ? areaEffectContextMenu.draftPlacement : pendingAreaPlacement
    if (activeAreaTemplate.placementMode !== 'DIRECTIONAL' || !areaDraftOrigin || !areaPointer) return null
    return {
      key: 'area-preview',
      template: activeAreaTemplate,
      origin: areaDraftOrigin,
      rotationDegrees: directionDegrees(areaDraftOrigin, areaPointer),
      scale: 1,
      selected: true,
    }
  }, [activeAreaTemplate, activeTool, areaDraftOrigin, areaEffectContextMenu, areaPointer, pendingAreaPlacement])
  const remoteAreaPlacements = useMemo<AreaPlacement[]>(() => sharedAreaPreviews.remotePreviews.flatMap((preview) => {
    const template = areaLibrary.templates.find((candidate) => candidate.id === preview.templateId)
    if (!template || template.shape === 'TARGET') return []
    return [{
      key: `remote-preview-${preview.previewId}`,
      template,
      origin: {
        x: preview.origin.x * tokenSize + zoomedGridSettings.offsetX,
        y: preview.origin.y * tokenSize + zoomedGridSettings.offsetY,
      },
      rotationDegrees: preview.rotationDegrees,
      scale: preview.scale,
      selected: false,
    }]
  }), [areaLibrary.templates, sharedAreaPreviews.remotePreviews, tokenSize, zoomedGridSettings.offsetX, zoomedGridSettings.offsetY])

  useEffect(() => {
    if (!sessionActive || activeTool !== 'area-templates' || !activeAreaTemplate) {
      sharedAreaPreviews.publishPreview(null)
      return
    }
    if (activeAreaTemplate.shape === 'TARGET') {
      if (!selectedAreaTargetIds.length) {
        sharedAreaPreviews.publishPreview(null)
        return
      }
      sharedAreaPreviews.publishPreview({
        templateId: activeAreaTemplate.id,
        origin: { x: 0, y: 0 },
        rotationDegrees: 0,
        scale: 1,
        selectedTargetIds: selectedAreaTargetIds,
      })
      return
    }
    const placement = pendingAreaPlacement ?? previewAreaPlacement
    if (!placement) {
      sharedAreaPreviews.publishPreview(null)
      return
    }
    sharedAreaPreviews.publishPreview({
      templateId: placement.template.id,
      origin: {
        x: (placement.origin.x - zoomedGridSettings.offsetX) / tokenSize,
        y: (placement.origin.y - zoomedGridSettings.offsetY) / tokenSize,
      },
      rotationDegrees: placement.rotationDegrees,
      scale: placement.scale,
      selectedTargetIds: [],
    })
  }, [
    activeAreaTemplate,
    activeTool,
    pendingAreaPlacement,
    previewAreaPlacement,
    selectedAreaTargetIds,
    sessionActive,
    sharedAreaPreviews.publishPreview,
    tokenSize,
    zoomedGridSettings.offsetX,
    zoomedGridSettings.offsetY,
  ])
  const renderedAreas = useMemo(() => {
    const context = { grid: zoomedGridSettings, board: gridBounds, tokens: visibleTokens, walls: scaleWallsForZoom(activeScene?.walls ?? [], activeZoomPercent) }
    return [...displayedPersistentAreaPlacements.filter((placement) => placement.effectId !== editingAreaEffectId), ...remoteAreaPlacements, ...(previewAreaPlacement ? [previewAreaPlacement] : [])].map((placement) => calculateAreaRender(placement, context))
  }, [activeScene?.walls, activeZoomPercent, displayedPersistentAreaPlacements, editingAreaEffectId, gridBounds, previewAreaPlacement, remoteAreaPlacements, visibleTokens, zoomedGridSettings])
  const affectedTokenRings = useMemo(() => {
    const rings = new Map<string, CampaignAreaTemplate['style']['affectedTokenRing']>()
    for (const area of renderedAreas) for (const tokenId of area.touchedTokenIds) rings.set(tokenId, area.template.style.affectedTokenRing)
    if (activeTool === 'area-templates' && activeAreaTemplate?.shape === 'TARGET') {
      for (const tokenId of selectedAreaTargetIds) rings.set(tokenId, activeAreaTemplate.style.affectedTokenRing)
    }
    for (const preview of sharedAreaPreviews.remotePreviews) {
      const template = areaLibrary.templates.find((candidate) => candidate.id === preview.templateId)
      if (!template || template.shape !== 'TARGET') continue
      for (const tokenId of preview.selectedTargetIds) rings.set(tokenId, template.style.affectedTokenRing)
    }
    return rings
  }, [activeAreaTemplate, activeTool, areaLibrary.templates, renderedAreas, selectedAreaTargetIds, sharedAreaPreviews.remotePreviews])
  const previewAreaRender = renderedAreas.find((area) => area.selected)
  const currentSceneTokenCount = playerTokens.length
  const placedCampaignTokenCount = campaignTokens.filter((token) => token.placement).length
  const availableCampaignTokens = campaignTokens.filter((token) => !token.placement)
  const activeCombat =
    combatState && combatState.campaignId === campaignId ? combatState : null
  const rightPanelSessionStatus = sessionState === 'PAUSED'
    ? { title: 'Sessao pausada', label: null, icon: Pause, className: 'border-amber-300/45 bg-amber-500/20 text-amber-100' }
    : campaign?.isOnline
      ? { title: 'Sessao online', label: 'ON', icon: null, className: 'border-emerald-300/45 bg-emerald-500/20 text-emerald-100' }
      : { title: 'Sessao offline', label: 'OFF', icon: null, className: 'border-red-300/45 bg-red-500/20 text-red-100' }
  const RightPanelSessionStatusIcon = rightPanelSessionStatus.icon
  const activeCombatTokenId = activeCombat?.participants[activeCombat.activeTurnIndex]?.tokenId ?? null
  const combatTokenCount = visibleTokens.filter((token) => !token.hidden).length
  const canStartCombat = Boolean(isMaster && masterCanUseVtt && activeScene && combatTokenCount > 0 && !activeCombat)

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
    if (activeTool !== 'area-templates' || !activeAreaTemplate || pendingAreaPlacement) return
    function followAreaCursor(event: PointerEvent) {
      setAreaCursorPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('pointermove', followAreaCursor)
    return () => window.removeEventListener('pointermove', followAreaCursor)
  }, [activeAreaTemplate, activeTool, pendingAreaPlacement])

  useEffect(() => () => {
    if (targetEffectTimeoutRef.current !== null) window.clearTimeout(targetEffectTimeoutRef.current)
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
    onGridSettingsChangeRef.current = onGridSettingsChange
  }, [onGridSettingsChange])

  function startSceneLoading(scene: VttTableScene | null, message = 'Carregando cena...') {
    const imageKey = scene?.imageUrl ? sceneImageDimensionKey(scene) : null
    setSceneRenderTarget({
      sceneId: scene?.id ?? null,
      imageKey,
      tokenCount: scene?.tokens.length ?? 0,
    })
    setSceneLoadingMessage(message)
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
    if (!campaignId || !shouldLoadTokenManagement) return

    let cancelled = false
    void api<CampaignToken[]>(`/api/campaigns/${campaignId}/tokens`)
      .then((tokens) => { if (!cancelled) setCampaignTokens(tokens) })
      .catch(() => { if (!cancelled) setCampaignTokens([]) })
    void api<VttTokenCandidate[]>(`/api/campaigns/${campaignId}/token-candidates`)
      .then((candidates) => { if (!cancelled) setTokenCandidates(candidates) })
      .catch(() => { if (!cancelled) setTokenCandidates([]) })
    void api<CampaignPlayer[]>(`/api/campaigns/${campaignId}/players`)
      .then((players) => {
        if (!cancelled) setCampaignPlayers(players.filter((player) => player.role === 'PLAYER' && player.status === 'ACTIVE'))
      })
      .catch(() => { if (!cancelled) setCampaignPlayers([]) })

    return () => {
      cancelled = true
    }
  }, [campaignId, shouldLoadTokenManagement])

  useEffect(() => {
    const online = Boolean(campaign?.isOnline)
    const previous = previousCampaignOnlineRef.current

    if (previous.campaignId !== (campaignId ?? null)) {
      previousCampaignOnlineRef.current = { campaignId: campaignId ?? null, online }
      return
    }

    if (previous.online && !online) {
      setDiceClearSignal((current) => current + 1)
      setCombatState(null)
    }

    previousCampaignOnlineRef.current = { campaignId: campaignId ?? null, online }
  }, [campaign?.isOnline, campaignId])

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

      const sceneKey = sceneImageDimensionKey(scene)
      setActiveScene((current) => {
        const cachedDimensions = sceneImageDimensionsRef.current.get(sceneKey)
        const currentDimensions =
          current && sceneImageDimensionKey(current) === sceneKey ? { width: current.width, height: current.height } : null
        const dimensions = cachedDimensions ?? currentDimensions
        return dimensions ? { ...scene, width: dimensions.width, height: dimensions.height } : scene
      })

      const sceneGrid = normalizeGridSettings(scene.grid)
      onGridSettingsChangeRef.current(sceneGrid, { realtime: false, sceneId: scene.id })
      const sceneTokens = scene.tokens.map((token) => normalizeTableToken(token, sceneGrid.shape))
      setTokenState({
        campaignId: currentCampaignId,
        tokens: sceneTokens,
      })
      if (isMaster) {
        setPreparedScenes((current) =>
          current.map((preparedScene) =>
            preparedScene.id === scene.id ? { ...preparedScene, grid: sceneGrid, tokens: sceneTokens } : preparedScene,
          ),
        )
      }
    }

    function onTokenChanged(payload: VttTokenChangedPayload) {
      if (payload.campaignId !== campaignId) return
      if (payload.sceneId && payload.sceneId !== activeScene?.id) return

      setTokenState((current) => {
        const token = normalizeTableToken(payload.token, gridSettings.shape)
        const currentTokens = current.campaignId === campaignId ? current.tokens : []
        const index = currentTokens.findIndex((item) => item.id === token.id)
        if (index === -1) return { campaignId, tokens: [...currentTokens, token] }

        const next = [...currentTokens]
        next[index] = token
        return { campaignId, tokens: next }
      })
      setPreparedScenes((current) =>
        current.map((scene) => {
          if (scene.id !== activeScene?.id) return scene
          const index = scene.tokens.findIndex((item) => item.id === payload.token.id)
          const tokens = index === -1 ? [...scene.tokens, payload.token] : scene.tokens.map((item) => (item.id === payload.token.id ? payload.token : item))
          return { ...scene, tokens }
        }),
      )
      setCampaignTokens((current) => current.map((token) =>
        token.id === payload.token.id
          ? {
              ...token,
              actorId: payload.token.actorId,
              name: payload.token.name,
              avatarUrl: payload.token.avatarUrl,
              controllerMemberId: payload.token.controllerMemberId,
              controllerUserId: payload.token.controllerUserId,
              canCustomizeAppearance: payload.token.canCustomizeAppearance,
              visionConfig: payload.token.visionConfig,
              lightConfig: payload.token.lightConfig,
              placement: payload.sceneId
                ? {
                    sceneId: payload.sceneId,
                    hidden: payload.token.hidden,
                    position: payload.token.position,
                    rotation: payload.token.rotation,
                    layer: payload.token.layer,
                    blocksVisionAndLight: payload.token.blocksVisionAndLight,
                  }
                : token.placement,
            }
          : token,
      ))
    }

    function onTokensSnapshot(payload: VttTokensSnapshotPayload) {
      if (payload.campaignId !== campaignId) return
      if (isMaster) return
      if (payload.sceneId && payload.sceneId !== activeScene?.id) return
      setTokenState({
        campaignId,
        tokens: payload.tokens.map((token) => normalizeTableToken(token, gridSettings.shape)),
      })
    }

    function onTokenRemoved(payload: VttTokenRemovedPayload) {
      if (payload.campaignId !== campaignId) return
      setCampaignTokens((current) => current.map((token) =>
        token.id === payload.tokenId ? { ...token, placement: null } : token,
      ))
      setPreparedScenes((current) =>
        current.map((scene) =>
          scene.id === payload.sceneId ? { ...scene, tokens: scene.tokens.filter((token) => token.id !== payload.tokenId) } : scene,
        ),
      )
      const isOwnRemovedToken = !isMaster && payload.tokenId === fogVisionToken?.id
      if (isOwnRemovedToken) {
        setActiveScene(null)
        setTokenState({ campaignId, tokens: [] })
        measurementRef.current = null
        setMeasurement(null)
        return
      }
      if (payload.sceneId && payload.sceneId !== activeScene?.id) return
      setTokenState((current) => {
        if (current.campaignId !== campaignId) return current
        return {
          campaignId,
          tokens: current.tokens.filter((token) => token.id !== payload.tokenId),
        }
      })
    }

    function onTokenMetadataChanged(payload: {
      campaignId: string
      token: CampaignToken
      previousControllerUserId: string | null
    }) {
      if (payload.campaignId !== campaignId) return
      applyCampaignTokenUpdate(payload.token)
      const controllerChanged = payload.previousControllerUserId !== payload.token.controllerUserId
      const currentUserAffected = payload.previousControllerUserId === me?.id || payload.token.controllerUserId === me?.id
      if (!isMaster && controllerChanged && currentUserAffected) {
        socket?.emit('vtt:scene:request', { campaignId })
      }
    }

    function onTokenDeleted(payload: { campaignId: string; tokenId: string }) {
      if (payload.campaignId !== campaignId) return
      setCampaignTokens((current) => current.filter((token) => token.id !== payload.tokenId))
      setTokenState((current) => ({
        ...current,
        tokens: current.tokens.filter((token) => token.id !== payload.tokenId),
      }))
      setTokenContextMenu((current) => current?.token.id === payload.tokenId ? null : current)
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

    function onTokenMovementStarted(payload: VttTokenMovementStartedPayload) {
      if (payload.campaignId !== campaignId || payload.sceneId !== activeScene?.id) return
      if (measuredMovementTokenIdRef.current === payload.tokenId) {
        measuredMovementTokenIdRef.current = null
        setMeasuredMovementTokenId(null)
      }
      startSmoothTokenMovement(payload)
    }

    function onSceneSnapshot(payload: VttSceneChangedPayload) {
      if (payload.campaignId !== campaignId) return
      applySceneSnapshot(payload.scene)
    }

    function onCombatChanged(payload: VttCombatChangedPayload) {
      if (payload.campaignId !== campaignId) return
      setCombatState(payload.combat)
    }

    function onWallsChanged(payload: VttWallsChangedPayload) {
      if (payload.campaignId !== campaignId || payload.sceneId !== activeScene?.id) return
      setActiveScene((current) => current?.id === payload.sceneId ? { ...current, walls: payload.walls } : current)
      setPreparedScenes((current) => current.map((scene) =>
        scene.id === payload.sceneId ? { ...scene, walls: payload.walls } : scene,
      ))
    }

    function onFogSceneConfigured(payload: { campaignId: string; sceneId: string; fogConfig: unknown; fixedLightSources: unknown }) {
      if (payload.campaignId !== campaignId) return
      const fixedLightSources = normalizeFixedLightSources(payload.fixedLightSources)
      setActiveScene((current) => current?.id === payload.sceneId ? { ...current, fogConfig: payload.fogConfig, fixedLightSources } : current)
      setPreparedScenes((current) => current.map((scene) => scene.id === payload.sceneId ? { ...scene, fogConfig: payload.fogConfig, fixedLightSources } : scene))
    }

    function onFogTokenVisionConfigured(payload: { campaignId: string; tokenId: string; visionConfig: unknown }) {
      if (payload.campaignId !== campaignId) return
      updateFogToken(payload.tokenId, { visionConfig: payload.visionConfig })
    }

    function onFogLightToggled(payload: { campaignId: string; tokenId: string; lightConfig: unknown }) {
      if (payload.campaignId !== campaignId) return
      updateFogToken(payload.tokenId, { lightConfig: payload.lightConfig })
    }

    function onFogPlacementOcclusionConfigured(payload: { campaignId: string; tokenId: string; blocksVisionAndLight: boolean }) {
      if (payload.campaignId !== campaignId) return
      updateFogToken(payload.tokenId, { blocksVisionAndLight: payload.blocksVisionAndLight })
    }

    function onFogExplorationReset(payload: { campaignId: string; sceneId: string }) {
      if (payload.campaignId !== campaignId || payload.sceneId !== activeScene?.id) return
      resetLocalFogExploration()
    }

    function onFogExplorationFlushRequest(payload: { campaignId: string }, ack?: () => void) {
      if (payload.campaignId !== campaignId) return ack?.()
      void flushFogExploration().finally(() => ack?.())
    }

    socket.on('vtt:token:changed', onTokenChanged)
    socket.on('vtt:tokens:snapshot', onTokensSnapshot)
    socket.on('vtt:token:removed', onTokenRemoved)
    socket.on('vtt:token:metadata-changed', onTokenMetadataChanged)
    socket.on('vtt:token:deleted', onTokenDeleted)
    socket.on('vtt:measurement:changed', onMeasurementChanged)
    socket.on('vtt:measurement:snapshot', onMeasurementSnapshot)
    socket.on('vtt:token:movement-started', onTokenMovementStarted)
    socket.on('vtt:scene:changed', onSceneChanged)
    socket.on('vtt:scene:snapshot', onSceneSnapshot)
    socket.on('vtt:combat:changed', onCombatChanged)
    socket.on('vtt:walls:changed', onWallsChanged)
    socket.on('fog:scene:configured', onFogSceneConfigured)
    socket.on('fog:token:vision:configured', onFogTokenVisionConfigured)
    socket.on('fog:light:toggled', onFogLightToggled)
    socket.on('fog:placement:occlusion:configured', onFogPlacementOcclusionConfigured)
    socket.on('fog:exploration:reset', onFogExplorationReset)
    socket.on('fog:exploration:flush-request', onFogExplorationFlushRequest)

    if (isMaster) {
      socket.emit('vtt:scene:request', { campaignId })
    } else {
      socket.emit('vtt:tokens:request', { campaignId })
      socket.emit('vtt:measurement:request', { campaignId })
      socket.emit('vtt:scene:request', { campaignId })
    }
    socket.emit('vtt:combat:request', { campaignId })

    return () => {
      socket.off('vtt:token:changed', onTokenChanged)
      socket.off('vtt:tokens:snapshot', onTokensSnapshot)
      socket.off('vtt:token:removed', onTokenRemoved)
      socket.off('vtt:token:metadata-changed', onTokenMetadataChanged)
      socket.off('vtt:token:deleted', onTokenDeleted)
      socket.off('vtt:measurement:changed', onMeasurementChanged)
      socket.off('vtt:measurement:snapshot', onMeasurementSnapshot)
      socket.off('vtt:token:movement-started', onTokenMovementStarted)
      socket.off('vtt:scene:changed', onSceneChanged)
      socket.off('vtt:scene:snapshot', onSceneSnapshot)
      socket.off('vtt:combat:changed', onCombatChanged)
      socket.off('vtt:walls:changed', onWallsChanged)
      socket.off('fog:scene:configured', onFogSceneConfigured)
      socket.off('fog:token:vision:configured', onFogTokenVisionConfigured)
      socket.off('fog:light:toggled', onFogLightToggled)
      socket.off('fog:placement:occlusion:configured', onFogPlacementOcclusionConfigured)
      socket.off('fog:exploration:reset', onFogExplorationReset)
      socket.off('fog:exploration:flush-request', onFogExplorationFlushRequest)
    }
  }, [socket, campaignId, gridSettings.shape, isMaster, activeScene?.id, me?.id, fogVisionToken?.id, startSmoothTokenMovement, resetLocalFogExploration, flushFogExploration])

  useEffect(() => {
    if (measurementGridKeyRef.current === measurementGridKey) return
    measurementGridKeyRef.current = measurementGridKey
    if (measurementRef.current && movingTokenIds.has(measurementRef.current.tokenId)) return
    measurementRef.current = null
    setMeasurement(null)
    if (campaignId && socket) socket.emit('vtt:measurement:update', { campaignId, measurement: null })
  }, [campaignId, measurementGridKey, movingTokenIds, socket])

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
          return normalizePreparedSceneList(scenes.map(sceneResponseToPreparedScene))
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
    const nextSettings = normalizeGridSettings(settings)
    const gridRevision = sceneGridRevisionRef.current + 1
    sceneGridRevisionRef.current = gridRevision
    onGridSettingsChange(nextSettings, { sceneId: activeScene?.id })
    if (!campaignId || !isMaster || !activeScene) return

    setPreparedScenes((current) =>
      current.map((scene) => (scene.id === activeScene.id ? { ...scene, grid: nextSettings } : scene)),
    )
    setActiveScene((current) => {
      if (!current) return current
      if (current.imageUrl) return { ...current, grid: nextSettings }

      return {
        ...current,
        ...getDefaultSceneDimensions(nextSettings),
        grid: nextSettings,
      }
    })
    if (!campaign?.isOnline) {
      api<CampaignSceneResponse>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(activeScene.id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ grid: nextSettings }),
      })
        .then((scene) => {
          if (sceneGridRevisionRef.current !== gridRevision) return
          const persistedGrid = normalizeGridSettings(scene.grid)

          onGridSettingsChange(persistedGrid, { realtime: false, sceneId: scene.id })
          setPreparedScenes((current) =>
            current.map((preparedScene) =>
              preparedScene.id === scene.id ? { ...preparedScene, grid: persistedGrid } : preparedScene,
            ),
          )
          setActiveScene((current) => {
            if (!current || current.id !== scene.id) return current
            if (current.imageUrl) return { ...current, grid: persistedGrid }

            return {
              ...current,
              ...getDefaultSceneDimensions(persistedGrid),
              grid: persistedGrid,
            }
          })
        })
        .catch(() => undefined)
    }
  }

  async function selectPreparedScene(sceneId: string) {
    if (!isMaster) return

    const scene = preparedScenes.find((item) => item.id === sceneId)
    if (!scene || isDraftPreparedScene(scene)) return

    setSceneSaveError(null)
    setSceneLoadingMessage('Carregando cena...')
    const selectionGridRevision = sceneGridRevisionRef.current

    try {
      const dimensions = scene.imageUrl ? await readImageDimensions(scene.imageUrl) : getDefaultSceneDimensions(scene.grid)
      if (sceneGridRevisionRef.current !== selectionGridRevision) {
        setSceneLoadingMessage(null)
        return
      }
      const nextScene = preparedSceneToTableScene(scene, dimensions)
      sceneImageDimensionsRef.current.set(sceneImageDimensionKey(nextScene), dimensions)
      startSceneLoading(nextScene)

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
          if (sceneGridRevisionRef.current !== selectionGridRevision) {
            setSceneLoadingMessage(null)
            return
          }
          const nextScene = preparedSceneToTableScene(refreshedScene, dimensions)
          sceneImageDimensionsRef.current.set(sceneImageDimensionKey(nextScene), dimensions)
          startSceneLoading(nextScene)

          setPreparedScenes((current) => current.map((item) => (item.id === scene.id ? refreshedScene : item)))
          setActiveScene(nextScene)
          setTokenState({ campaignId, tokens: refreshedScene.tokens.map((token) => normalizeTableToken(token, refreshedScene.grid.shape)) })
          onGridSettingsChange(refreshedScene.grid, { realtime: false, sceneId: refreshedScene.id })
          publishSceneSelection(nextScene)
          return
        } catch {
          // A falha do refresh cai no tratamento generico da selecao abaixo.
        }
      }

      setSceneLoadingMessage(null)
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel selecionar a cena.')
    }
  }

  function movePlayerToken(token: VttPlayerToken, position: VttPlayerToken['position']) {
    if (!campaignId || !socket) return
    const isOwnerMove = sessionActive && token.controllerUserId === me?.id && campaign?.myRole === 'PLAYER'
    const isMasterMove = Boolean(isMaster)
    if (!isOwnerMove && !isMasterMove) return

    const nextPosition = normalizeTokenPosition(position, gridSettings.shape, gridBounds, tokenSize)
    const previousPosition = token.position
    if (isOwnerMove && activeScene) {
      const toScenePixels = (point: VttPlayerToken['position']) => ({
        x: point.x * gridSettings.size + gridSettings.offsetX,
        y: point.y * gridSettings.size + gridSettings.offsetY,
      })
      if (isMovementBlockedBySceneWalls({
        from: toScenePixels(previousPosition),
        to: toScenePixels(nextPosition),
        walls: activeScene.walls,
      })) return
    }
    const fogCheckpoint = fog.createExplorationCheckpoint()
    setTokenState((current) => {
      if (current.campaignId !== campaignId) return current
      return {
        campaignId,
        tokens: current.tokens.map((item) => (item.id === token.id ? { ...item, position: nextPosition } : item)),
      }
    })
    socket.emit('vtt:token:move', { campaignId, tokenId: token.id, position: nextPosition }, (response: { ok: boolean }) => {
      if (response.ok) return
      setTokenState((current) => ({ ...current, tokens: current.tokens.map((item) => item.id === token.id ? { ...item, position: previousPosition } : item) }))
      fog.restoreExplorationCheckpoint(fogCheckpoint)
    })
  }

  function publishMeasurement(nextMeasurement: VttMeasurement | null) {
    if (!realtimeVttEnabled) return
    measurementRef.current = nextMeasurement
    setMeasurement(nextMeasurement)

    if (!campaignId || !socket) return
    socket.emit('vtt:measurement:update', { campaignId, measurement: nextMeasurement })
  }

  function getMeasurementPoint(event: { clientX: number; clientY: number }) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null

    const clamped = clampMeasurementPoint(
      {
        x: (event.clientX - bounds.left - zoomedGridSettings.offsetX) / tokenSize,
        y: (event.clientY - bounds.top - zoomedGridSettings.offsetY) / tokenSize,
      },
      { width: bounds.width / tokenSize, height: bounds.height / tokenSize },
    )
    return normalizeTokenPosition(clamped, gridSettings.shape, { width: bounds.width, height: bounds.height }, tokenSize)
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

  function startNextMeasuredSegment(event: React.PointerEvent<HTMLDivElement>) {
    if (!measuredMovementTokenIdRef.current || event.button !== 0) return
    const point = getMeasurementPoint(event)
    const current = measurementRef.current
    if (!point || !current) return

    event.preventDefault()
    event.stopPropagation()
    const existingIndex = current.points.findIndex((candidate) => areMovementPointsEqual(candidate, point))
    const lastIndex = current.points.length - 1
    if (existingIndex >= 0 && existingIndex < lastIndex) {
      publishMeasurement({ ...current, points: truncatePathAtPoint(current.points, point) })
      return
    }

    const lastPoint = current.points[lastIndex]
    const toScenePixels = (movementPoint: VttMeasurementPoint) => ({
      x: movementPoint.x * gridSettings.size + gridSettings.offsetX,
      y: movementPoint.y * gridSettings.size + gridSettings.offsetY,
    })
    if (activeScene && isMovementBlockedBySceneWalls({
      from: toScenePixels(lastPoint),
      to: toScenePixels(point),
      walls: activeScene.walls,
    })) return

    const points = appendMovementPoint(current.points, point)
    if (points !== current.points) publishMeasurement({ ...current, points })
  }

  function beginMeasuredMovement(event: React.PointerEvent<HTMLButtonElement>, token: VttPlayerToken) {
    if (event.button !== 0 || !event.ctrlKey || !realtimeVttEnabled || !activeScene || movingTokenIds.has(token.id)) return
    const canMoveToken = Boolean(isMaster) || (sessionActive && token.controllerUserId === me?.id && campaign?.myRole === 'PLAYER')
    if (!canMoveToken) return
    if (!isMaster && activeCombatTokenId && activeCombatTokenId !== token.id) return
    event.preventDefault()
    event.stopPropagation()
    measuredMovementTokenIdRef.current = token.id
    setMeasuredMovementTokenId(token.id)
    publishMeasurement({
      tokenId: token.id,
      sceneId: activeScene.id,
      points: [token.position],
      color: gridSettings.shape === 'square' ? gridSettings.squareMeasurementColor : gridSettings.hexMeasurementColor,
    })
  }

  function confirmMeasuredMovement() {
    const tokenId = measuredMovementTokenIdRef.current
    const currentMeasurement = measurementRef.current
    if (!tokenId || !currentMeasurement || currentMeasurement.points.length < 2 || !socket || !campaignId) return false
    if (movementPathDistance(currentMeasurement.points) <= 0.001) return false
    socket.emit('vtt:token:move-path', {
      campaignId,
      tokenId,
      sceneId: currentMeasurement.sceneId,
      path: currentMeasurement.points,
    }, (response: { ok: true } | { ok: false; error: { code: string; message: string } }) => {
      if (!response.ok) setSceneSaveError(response.error.message)
    })
    return true
  }

  function publishWalls(walls: VttWallSegment[]) {
    if (!campaignId || !socket || !activeScene || !isMaster) return
    setActiveScene((current) => current ? { ...current, walls } : current)
    setPreparedScenes((current) => current.map((scene) =>
      scene.id === activeScene.id ? { ...scene, walls } : scene,
    ))
    socket.emit('vtt:walls:update', { campaignId, sceneId: activeScene.id, walls })
  }

  function updateActiveSceneWalls(
    updater: (walls: VttWallSegment[]) => VttWallSegment[],
    options?: { recordUndo?: boolean },
  ) {
    if (!activeScene || !isMaster) return
    const previousWalls = activeScene.walls
    const nextWalls = updater(previousWalls)
    if (nextWalls === previousWalls) return

    if (options?.recordUndo) {
      wallUndoStackRef.current = [...wallUndoStackRef.current.slice(-24), previousWalls]
      setWallUndoCount(wallUndoStackRef.current.length)
    }
    publishWalls(nextWalls)
  }

  function undoLastWallCreation() {
    if (!isMaster) return false
    const previousWalls = wallUndoStackRef.current.pop()
    if (!previousWalls) return false
    setWallUndoCount(wallUndoStackRef.current.length)
    publishWalls(previousWalls)
    setWallContextMenu(null)
    return true
  }

  function createWallId() {
    return globalThis.crypto.randomUUID()
  }

  function createWallSegment(start: VttMeasurementPoint, end: VttMeasurementPoint): VttWallSegment | null {
    if (Math.hypot(end.x - start.x, end.y - start.y) <= 0.001) return null

    if (wallKind === 'door' || wallKind === 'window') {
      const passage = normalizeDoorState({ ajar: true })
      return {
        id: createWallId(),
        kind: wallKind,
        start,
        end,
        color: wallKind === 'window' ? '#38bdf8' : doorColor,
        playerVisible: playersCanSeeSceneWalls,
        blocksEffects: true,
        allowsLight: wallKind === 'window',
        ...(wallKind === 'door' ? { door: passage } : { window: passage }),
      }
    }

    return {
      id: createWallId(),
      kind: 'wall',
      start,
      end,
      color: wallColor,
      playerVisible: playersCanSeeSceneWalls,
      blocksEffects: true,
    }
  }

  function createWallDrafts(start: VttMeasurementPoint, end: VttMeasurementPoint, rectangle: boolean) {
    if (rectangle && wallKind === 'wall') {
      return createRectangleWallSegments({
        start,
        end,
        color: wallColor,
        playerVisible: playersCanSeeSceneWalls,
        blocksEffects: true,
        createId: createWallId,
      })
    }

    const segment = createWallSegment(start, end)
    return segment ? [segment] : []
  }

  function getWallPoint(event: React.PointerEvent<HTMLElement>) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null
    const zoomScale = activeZoomPercent / 100
    const renderedPoint = { x: event.clientX - bounds.left, y: event.clientY - bounds.top }
    if (gridSettings.shape !== 'hex') return { x: renderedPoint.x / zoomScale, y: renderedPoint.y / zoomScale }
    const logicalPoint = {
      x: (renderedPoint.x - zoomedGridSettings.offsetX) / tokenSize,
      y: (renderedPoint.y - zoomedGridSettings.offsetY) / tokenSize,
    }
    const snapped = snapHexMeasurementPoint(logicalPoint)
    return {
      x: (snapped.x * tokenSize + zoomedGridSettings.offsetX) / zoomScale,
      y: (snapped.y * tokenSize + zoomedGridSettings.offsetY) / zoomScale,
    }
  }

  function startWall(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || !activeScene || !isMaster) return
    const point = getWallPoint(event)
    if (!point) return
    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    wallDraftStartRef.current = point
    setWallDrafts(createWallDrafts(point, point, event.ctrlKey))
  }

  function updateWall(event: React.PointerEvent<HTMLDivElement>) {
    const start = wallDraftStartRef.current
    if (!start) return
    const point = getWallPoint(event)
    if (!point) return
    setWallDrafts(createWallDrafts(start, point, event.ctrlKey))
  }

  function finishWall(event: React.PointerEvent<HTMLDivElement>) {
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
      if (segment.kind === 'door' || segment.kind === 'window') return applyDoorToWalls({
        walls,
        door: segment,
        createId: createWallId,
        snapTolerance: doorSnapToleranceInRenderedPixels / (activeZoomPercent / 100),
      })
      return [...walls, segment]
    }, { recordUndo: true })
  }

  function updateDoorState(wallId: string, patch: Partial<NonNullable<VttWallSegment['door']>>) {
    updateActiveSceneWalls((walls) => walls.map((wall) => {
      if (wall.id !== wallId || wall.kind === 'wall') return wall
      return wall.kind === 'door'
        ? { ...wall, door: normalizeDoorState({ ...wall.door, ...patch }) }
        : { ...wall, window: normalizeDoorState({ ...wall.window, ...patch }) }
    }))
    setWallContextMenu((current) => {
      if (!current || current.wall.id !== wallId || current.wall.kind === 'wall') return current
      return current.wall.kind === 'door'
        ? { ...current, wall: { ...current.wall, door: normalizeDoorState({ ...current.wall.door, ...patch }) } }
        : { ...current, wall: { ...current.wall, window: normalizeDoorState({ ...current.wall.window, ...patch }) } }
    })
  }

  function getAreaPoint(event: React.PointerEvent<HTMLElement>) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null
    return {
      x: clampNumber(event.clientX - bounds.left, 0, bounds.width),
      y: clampNumber(event.clientY - bounds.top, 0, bounds.height),
    }
  }

  function useAreaTemplate(template: CampaignAreaTemplate) {
    setEditingAreaEffectId(null)
    setActiveAreaTemplate(template)
    setAreaDraftOrigin(null)
    setAreaPointer(null)
    setPendingAreaPlacement(null)
    setSelectedAreaTargetIds([])
    setActiveTool('area-templates')
    onGridSettingsOpenChange(false)
  }

  function cancelAreaPlacement() {
    setActiveAreaTemplate(null)
    setAreaDraftOrigin(null)
    setAreaPointer(null)
    setPendingAreaPlacement(null)
    setAreaCursorPosition(null)
    setEditingAreaEffectId(null)
    setAreaEffectContextMenu(null)
    setAreaHandleDragState(null)
    setSelectedAreaTargetIds([])
  }

  function updateFogToken(tokenId: string, patch: Partial<VttPlayerToken>) {
    setTokenState((current) => ({ ...current, tokens: current.tokens.map((token) => token.id === tokenId ? { ...token, ...patch } : token) }))
    setPreparedScenes((current) => current.map((scene) => ({ ...scene, tokens: scene.tokens.map((token) => token.id === tokenId ? { ...token, ...patch } : token) })))
    setActiveScene((current) => current ? { ...current, tokens: current.tokens.map((token) => token.id === tokenId ? { ...token, ...patch } : token) } : current)
    setCampaignTokens((current) => current.map((token) => token.id === tokenId ? { ...token, ...patch } : token))
    setTokenContextMenu((current) => current?.token.id === tokenId ? { ...current, token: { ...current.token, ...patch } } : current)
  }

  async function configureTokenFog(tokenId: string, visionConfig: TokenVisionConfig, lightConfig: FogLightSourceConfig) {
    if (!campaignId || !isMaster) throw new Error('Somente o Mestre pode configurar visão e iluminação.')
    const encodedTokenId = encodeURIComponent(tokenId)
    const [visionResult, lightResult] = await Promise.all([
      api<{ visionConfig: unknown }>(`/api/campaigns/${encodeURIComponent(campaignId)}/tokens/${encodedTokenId}/vision`, {
        method: 'PATCH',
        body: JSON.stringify({ visionConfig }),
      }),
      api<{ lightConfig: unknown }>(`/api/campaigns/${encodeURIComponent(campaignId)}/tokens/${encodedTokenId}/light`, {
        method: 'PATCH',
        body: JSON.stringify({ lightConfig }),
      }),
    ])
    updateFogToken(tokenId, { visionConfig: visionResult.visionConfig, lightConfig: lightResult.lightConfig })
  }

  async function applyFogSetup(draft: FogSetupDraft) {
    if (!campaignId || !activeScene || !isMaster) throw new Error('Cena indisponível para configuração.')
    const sceneId = activeScene.id
    const explorationCheckpoint = fog.createExplorationCheckpoint()
    const requests: Promise<unknown>[] = [
      api(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(sceneId)}/fog`, {
        method: 'PATCH',
        body: JSON.stringify({ fogConfig: draft.fogConfig, fixedLightSources: draft.fixedLights }),
      }),
    ]
    if (draft.token) {
      const tokenId = encodeURIComponent(draft.token.id)
      requests.push(
        api(`/api/campaigns/${encodeURIComponent(campaignId)}/tokens/${tokenId}/vision`, { method: 'PATCH', body: JSON.stringify({ visionConfig: draft.token.visionConfig }) }),
        api(`/api/campaigns/${encodeURIComponent(campaignId)}/tokens/${tokenId}/placement-occlusion`, { method: 'PATCH', body: JSON.stringify({ blocksVisionAndLight: draft.token.blocksVisionAndLight }) }),
      )
    }
    await Promise.all(requests)
    setActiveScene((current) => current?.id === sceneId ? { ...current, fogConfig: draft.fogConfig, fixedLightSources: draft.fixedLights } : current)
    setPreparedScenes((current) => current.map((scene) => scene.id === sceneId ? { ...scene, fogConfig: draft.fogConfig, fixedLightSources: draft.fixedLights } : scene))
    if (draft.token) updateFogToken(draft.token.id, {
      visionConfig: draft.token.visionConfig,
      blocksVisionAndLight: draft.token.blocksVisionAndLight,
    })
    fog.restoreExplorationCheckpoint(explorationCheckpoint)
    setFogSetupPreview(null)
  }

  function moveFogLight(lightId: string, position: { x: number; y: number }) {
    setFogSetupPreview((current) => current ? {
      ...current,
      fixedLights: current.fixedLights.map((light) => light.id === lightId ? { ...light, position } : light),
    } : current)
  }

  function resetFogExploration() {
    if (!campaignId || !activeScene || !isMaster) return
    if (socket) {
      socket.emit('fog:exploration:reset', { campaignId, sceneId: activeScene.id }, (response: { ok: boolean }) => {
        if (!response.ok) setSceneSaveError('Não foi possível apagar a exploração da cena.')
      })
      return
    }
    void api(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(activeScene.id)}/fog/exploration`, { method: 'DELETE' })
      .then(() => resetLocalFogExploration())
      .catch(() => setSceneSaveError('Não foi possível apagar a exploração da cena.'))
  }

  function toggleAreaTarget(token: VttPlayerToken) {
    if (activeAreaTemplate?.shape !== 'TARGET') return
    const targetCount = activeAreaTemplate.dimensions.targetCount ?? 1
    setSelectedAreaTargetIds((current) => toggleTargetSelection(current, token.id, targetCount))
  }

  function showAppliedAreaEffect(tokenIds: string[], color: string) {
    if (tokenIds.length === 0) return
    if (targetEffectTimeoutRef.current !== null) window.clearTimeout(targetEffectTimeoutRef.current)
    setAppliedAreaEffect({ tokenIds: [...tokenIds], color })
    targetEffectTimeoutRef.current = window.setTimeout(() => {
      setAppliedAreaEffect(null)
      targetEffectTimeoutRef.current = null
    }, 900)
  }

  function confirmAreaTargets() {
    if (activeAreaTemplate?.shape !== 'TARGET' || selectedAreaTargetIds.length === 0) return
    const selectedNames = visibleTokens.filter((token) => selectedAreaTargetIds.includes(token.id)).map((token) => token.name)
    showAppliedAreaEffect(selectedAreaTargetIds, activeAreaTemplate.style.affectedTokenRing.color)
    setSceneSuccessMessage(`${activeAreaTemplate.name}: ${selectedNames.join(', ')}.`)
    cancelAreaPlacement()
  }

  async function confirmAreaPlacement(placement: AreaPlacement) {
    if (!activeScene) return
    if (editingAreaEffectId) {
      const updated = await areaLibrary.updateEffect(editingAreaEffectId, {
        origin: { x: (placement.origin.x - zoomedGridSettings.offsetX) / tokenSize, y: (placement.origin.y - zoomedGridSettings.offsetY) / tokenSize },
        rotationDegrees: Math.round(placement.rotationDegrees),
        scale: placement.scale,
      })
      if (!updated) return
      setSceneSuccessMessage(`${placement.template.name} atualizada.`)
    } else if (placement.template.persistenceMode === 'PERSISTENT' && isMaster) {
      const created = await areaLibrary.createEffect({
        templateId: placement.template.id,
        origin: { x: (placement.origin.x - zoomedGridSettings.offsetX) / tokenSize, y: (placement.origin.y - zoomedGridSettings.offsetY) / tokenSize },
        rotationDegrees: Math.round(placement.rotationDegrees),
        scale: placement.scale,
      })
      if (!created) return
      setSceneSuccessMessage(`${placement.template.name} adicionada a cena.`)
    }
    const context = { grid: zoomedGridSettings, board: gridBounds, tokens: visibleTokens, walls: scaleWallsForZoom(activeScene.walls, activeZoomPercent) }
    const touchedTokenIds = calculateAreaRender(placement, context).touchedTokenIds
    showAppliedAreaEffect(touchedTokenIds, placement.template.style.affectedTokenRing.color)
    cancelAreaPlacement()
  }

  function openAreaEffectMenu(event: React.MouseEvent, effect: SceneAreaEffect | null, placement: AreaPlacement) {
    event.preventDefault()
    event.stopPropagation()
    setAreaEffectContextMenu({
      effectId: effect?.id ?? null,
      name: placement.template.name,
      position: { x: event.clientX, y: event.clientY },
      draftPlacement: { ...placement },
    })
  }

  function startAreaEffectReposition(effect: SceneAreaEffect) {
    setEditingAreaEffectId(effect.id)
    setActiveAreaTemplate(effect.configurationSnapshot)
    setAreaDraftOrigin(null)
    setAreaPointer(null)
    setPendingAreaPlacement(null)
    setAreaEffectContextMenu(null)
    setActiveTool('area-templates')
  }

  function areaEffectMenuPlacement(input: { rotationDegrees: number; dimensionMeters: number }) {
    const menu = areaEffectContextMenu
    if (!menu) return null
    const dimension = primaryAreaDimension(menu.draftPlacement.template, gridSettings.metersPerCell)
    return {
      ...menu.draftPlacement,
      rotationDegrees: Math.round(input.rotationDegrees),
      scale: areaScaleForMeters(input.dimensionMeters, dimension.baseMeters),
    }
  }

  function previewAreaEffectMenu(input: { rotationDegrees: number; dimensionMeters: number }) {
    const placement = areaEffectMenuPlacement(input)
    if (!placement) return
    setAreaEffectContextMenu((current) => current ? { ...current, draftPlacement: placement } : current)
  }

  async function saveAreaEffectMenu(input: { rotationDegrees: number; dimensionMeters: number }) {
    const menu = areaEffectContextMenu
    const placement = areaEffectMenuPlacement(input)
    if (!menu || !placement) return
    if (!menu.effectId) {
      setPendingAreaPlacement(placement)
      setAreaEffectContextMenu(null)
      return
    }
    const updated = await areaLibrary.updateEffect(menu.effectId, {
      rotationDegrees: placement.rotationDegrees,
      scale: placement.scale,
    })
    if (updated) setAreaEffectContextMenu(null)
  }

  function setAreaHandleDragState(next: AreaHandleDragState | null) {
    areaHandleDragRef.current = next
    setAreaHandleDrag(next)
  }

  function startAreaHandleDrag(event: React.PointerEvent<HTMLButtonElement>, placement: AreaPlacement, effectId: string | null) {
    if (event.button !== 0) return
    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    setAreaEffectContextMenu(null)
    setAreaHandleDragState({ effectId, pointerId: event.pointerId, placement, startClient: { x: event.clientX, y: event.clientY }, moved: false })
  }

  function moveAreaHandleDrag(event: React.PointerEvent<HTMLButtonElement>) {
    const drag = areaHandleDragRef.current
    if (!drag || drag.pointerId !== event.pointerId || !activeScene) return
    const moved = drag.moved || Math.hypot(event.clientX - drag.startClient.x, event.clientY - drag.startClient.y) >= 4
    if (!moved) return
    const point = getAreaPoint(event)
    if (!point) return
    const context = { grid: zoomedGridSettings, board: gridBounds, tokens: visibleTokens, walls: scaleWallsForZoom(activeScene.walls, activeZoomPercent) }
    const placement = { ...drag.placement, origin: snapAreaOrigin(point, drag.placement.template, context) }
    setAreaHandleDragState({ ...drag, placement, moved: true })
    if (!drag.effectId) setPendingAreaPlacement(placement)
  }

  function finishAreaHandleDrag(event: React.PointerEvent<HTMLButtonElement>) {
    const drag = areaHandleDragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    event.preventDefault()
    event.stopPropagation()
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    setAreaHandleDragState(null)
    if (!drag.moved) {
      if (drag.placement.template.placementMode !== 'DIRECTIONAL') return
      if (drag.effectId) {
        const effect = areaLibrary.effects.find((item) => item.id === drag.effectId)
        if (effect) startAreaEffectReposition(effect)
        return
      }
      setActiveAreaTemplate(drag.placement.template)
      setAreaDraftOrigin(null)
      setAreaPointer(null)
      setPendingAreaPlacement(null)
      setAreaEffectContextMenu(null)
      setActiveTool('area-templates')
      return
    }
    if (!drag.effectId) {
      setPendingAreaPlacement(drag.placement)
      return
    }
    void areaLibrary.updateEffect(drag.effectId, {
      origin: { x: (drag.placement.origin.x - zoomedGridSettings.offsetX) / tokenSize, y: (drag.placement.origin.y - zoomedGridSettings.offsetY) / tokenSize },
    })
  }

  function updateAreaPreview(event: React.PointerEvent<HTMLDivElement>) {
    if (pendingAreaPlacement) return
    const point = getAreaPoint(event)
    if (point) setAreaPointer(point)
  }

  function placeArea(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || !activeAreaTemplate || !activeScene || pendingAreaPlacement) return
    const point = getAreaPoint(event)
    if (!point) return
    if (activeAreaTemplate.shape === 'TARGET') {
      const tokenId = findIntersectingTargetTokenId(point, visibleTokens, tokenSize)
      const token = visibleTokens.find((candidate) => candidate.id === tokenId)
      if (!token) return
      event.preventDefault()
      event.stopPropagation()
      toggleAreaTarget(token)
      return
    }
    event.preventDefault()
    event.stopPropagation()
    const context = { grid: zoomedGridSettings, board: gridBounds, tokens: visibleTokens, walls: scaleWallsForZoom(activeScene.walls, activeZoomPercent) }
    if (activeAreaTemplate.placementMode === 'DIRECTIONAL' && !areaDraftOrigin) {
      const origin = snapAreaOrigin(point, activeAreaTemplate, context)
      setAreaDraftOrigin(origin)
      setAreaPointer(point)
      return
    }
    const origin = areaDraftOrigin ?? snapAreaOrigin(point, activeAreaTemplate, context)
    setPendingAreaPlacement({
      key: 'area-confirm',
      template: activeAreaTemplate,
      origin,
      rotationDegrees: activeAreaTemplate.placementMode === 'DIRECTIONAL' ? Math.round(directionDegrees(origin, point)) : 0,
      scale: 1,
      selected: true,
    })
  }

  function handleBoardPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (activeTool === 'move' || event.altKey || altNavigationActive) {
      startBoardPan(event)
      return
    }
    if (activeTool === 'area-templates' && activeAreaTemplate) placeArea(event)
  }

  function handleBoardPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (panningRef.current) {
      updateBoardPan(event)
      return
    }
    if (activeTool === 'area-templates' && activeAreaTemplate) updateAreaPreview(event)
  }

  function updateWallEffectBlocking(wallId: string, blocksEffects: boolean) {
    updateActiveSceneWalls((walls) => walls.map((wall) => wall.id === wallId ? { ...wall, blocksEffects } : wall))
    setWallContextMenu((current) => current?.wall.id === wallId ? { ...current, wall: { ...current.wall, blocksEffects } } : current)
  }

  function removeWallSegment(wallId: string) {
    updateActiveSceneWalls((walls) => walls.filter((wall) => wall.id !== wallId), { recordUndo: true })
    setWallContextMenu(null)
  }

  function setPlayerWallVisibility(visible: boolean) {
    updateActiveSceneWalls((walls) => walls.map((wall) => ({ ...wall, playerVisible: visible })))
  }

  function isEditableKeyboardTarget(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) return false
    const tagName = target.tagName.toLowerCase()
    return target.isContentEditable || tagName === 'input' || tagName === 'textarea' || tagName === 'select'
  }

  function clearTransientTools() {
    const preserveMovementLine = Boolean(
      measurementRef.current && movingTokenIds.has(measurementRef.current.tokenId),
    )
    wallDraftStartRef.current = null
    measuredMovementTokenIdRef.current = null
    setWallDrafts([])
    setWallContextMenu(null)
    setSelectedTokenId(null)
    if (!preserveMovementLine) {
      measurementRef.current = null
      setMeasurement(null)
    }
    setMeasuredMovementTokenId(null)
    setActiveAreaTemplate(null)
    setAreaDraftOrigin(null)
    setAreaPointer(null)
    setPendingAreaPlacement(null)
    setAreaCursorPosition(null)
    setEditingAreaEffectId(null)
    setAreaEffectContextMenu(null)
    setAreaHandleDragState(null)
    setActiveTool(null)
    onGridSettingsOpenChange(false)
    if (!preserveMovementLine && campaignId && socket) {
      socket.emit('vtt:measurement:update', { campaignId, measurement: null })
    }
  }

  function collapseToolsToolbar() {
    clearTransientTools()
    setToolsCollapsed(true)
  }

  function openRightPanelTab(tab: RightPanelTab) {
    setRightPanelTab(tab)
    setRightPanelCollapsed(false)
  }

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
    function onKeyDown(event: KeyboardEvent) {
      if (isEditableKeyboardTarget(event.target)) return

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z' && activeTool === 'walls') {
        if (undoLastWallCreation()) event.preventDefault()
        return
      }

      if (event.key === 'Escape') {
        if (activeTool === 'area-templates' && activeAreaTemplate) {
          cancelAreaPlacement()
          event.preventDefault()
          return
        }
        clearTransientTools()
        event.preventDefault()
        return
      }

      if (event.key === 'Enter' && activeTool === 'area-templates' && activeAreaTemplate?.shape === 'TARGET' && selectedAreaTargetIds.length > 0) {
        confirmAreaTargets()
        event.preventDefault()
        return
      }

      if (event.code === 'Space' && !event.repeat && confirmMeasuredMovement()) event.preventDefault()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  function dragCampaignToken(event: React.DragEvent<HTMLElement>, token: CampaignToken) {
    writeTokenDragData(event.dataTransfer, token.id)
    setTokenDropError(null)
  }

  function tokenDropPosition(event: React.DragEvent<HTMLElement>) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null

    return normalizeTokenPosition(
      {
        x: (event.clientX - bounds.left - zoomedGridSettings.offsetX) / tokenSize,
        y: (event.clientY - bounds.top - zoomedGridSettings.offsetY) / tokenSize,
      },
      gridSettings.shape,
      { width: bounds.width, height: bounds.height },
      tokenSize,
    )
  }

  function dropCampaignToken(event: React.DragEvent<HTMLElement>) {
    event.preventDefault()
    if (!campaignId || !isMaster || !masterCanUseVtt) return
    if (!activeScene) {
      setTokenDropError('Selecione ou prepare uma cena antes de posicionar o Token.')
      return
    }

    const tokenId = readTokenDragData(event.dataTransfer)
    if (!tokenId) {
      setTokenDropError('O Token arrastado nao pode ser identificado.')
      return
    }

    const position = tokenDropPosition(event)
    if (!position) {
      setTokenDropError('Nao foi possivel calcular a posicao do Token no grid.')
      return
    }

    const realtimeSocket = socket ?? connectRealtime()
    realtimeSocket.timeout(5000).emit(
      'vtt:token:place',
      { campaignId, sceneId: activeScene.id, tokenId, position },
      (
        timeoutError: Error | null,
        response?: { ok: true } | { ok: false; error: { code: string; message: string } },
      ) => {
        if (timeoutError) {
          setTokenDropError('A conexao com a mesa demorou para responder. Tente novamente.')
          return
        }
        if (!response?.ok) {
          setTokenDropError(response?.error.message ?? 'Nao foi possivel posicionar o Token.')
          return
        }
        setTokenDropError(null)
      },
    )
  }

  function removeToken(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    socket.emit('vtt:token:remove', { campaignId, tokenId: token.id })
    setCampaignTokens((current) => current.map((item) =>
      item.id === token.id ? { ...item, placement: null } : item,
    ))
    setTokenState((current) => ({
      ...current,
      tokens: current.tokens.filter((item) => item.id !== token.id),
    }))
    setPreparedScenes((current) => current.map((scene) => ({
      ...scene,
      tokens: scene.tokens.filter((item) => item.id !== token.id),
    })))
    setActiveScene((current) => current ? {
      ...current,
      tokens: current.tokens.filter((item) => item.id !== token.id),
    } : current)
    setTokenContextMenu(null)
  }

  function selectTokenForTransform(token: VttPlayerToken) {
    clearTransientTools()
    setActiveTool('select')
    setSelectedTokenId(token.id)
  }

  function removeTokens(scope: 'scene' | 'global') {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return
    if (scope === 'scene' && !activeScene) return

    const hasTokens = scope === 'scene' ? currentSceneTokenCount > 0 : placedCampaignTokenCount > 0
    if (!hasTokens) return

    const confirmed = window.confirm(
      scope === 'scene'
        ? 'Remover todos os tokens da cena atual?'
        : 'Remover todos os Tokens de todas as cenas? Os Tokens permanecerao na toolbox.',
    )
    if (!confirmed) return

    if (scope === 'scene') {
      const sceneId = activeScene?.id
      if (!sceneId) return
      socket.emit('vtt:tokens:remove-bulk', { campaignId, scope, sceneId })
      setTokenState({ campaignId, tokens: [] })
      setPreparedScenes((current) => current.map((scene) => (scene.id === sceneId ? { ...scene, tokens: [] } : scene)))
      setActiveScene((current) => (current?.id === sceneId ? { ...current, tokens: [] } : current))
      setCampaignTokens((current) => current.map((token) =>
        token.placement?.sceneId === sceneId ? { ...token, placement: null } : token,
      ))
      return
    }

    socket.emit('vtt:tokens:remove-bulk', { campaignId, scope })
    setCampaignTokens((current) => current.map((token) => ({ ...token, placement: null })))
    setTokenState({ campaignId, tokens: [] })
    setPreparedScenes((current) => current.map((scene) => (isDraftPreparedScene(scene) ? scene : { ...scene, tokens: [] })))
    setActiveScene((current) => (current ? { ...current, tokens: [] } : current))
  }

  function toggleTokenVisibility(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    socket.emit('vtt:token:visibility', { campaignId, tokenId: token.id })
    setTokenContextMenu(null)
  }

  function setTokenRotation(token: VttPlayerToken, rotation: number) {
    if (!campaignId || !socket) return
    const canRotate = Boolean(isMaster) || (sessionActive && token.controllerUserId === me?.id)
    if (!canRotate) return
    const normalizedRotation = normalizeTokenRotation(rotation)
    setTokenState((current) => ({
      ...current,
      tokens: current.tokens.map((item) => item.id === token.id ? { ...item, rotation: normalizedRotation } : item),
    }))
    setTokenContextMenu((current) => current?.token.id === token.id
      ? { ...current, token: { ...current.token, rotation: normalizedRotation } }
      : current)
    socket.emit('vtt:token:rotate', { campaignId, tokenId: token.id, rotation: normalizedRotation })
  }

  function resizeToken(token: VttPlayerToken, size: number) {
    if (!campaignId || !isMaster) return
    setTokenState((current) => ({
      ...current,
      tokens: current.tokens.map((item) => item.id === token.id ? { ...item, size } : item),
    }))
    setCampaignTokens((current) => current.map((item) => item.id === token.id ? { ...item, size } : item))
    void updateCampaignToken(token.id, { size })
  }

  function startCombat() {
    if (!campaignId || !socket || !activeScene || !canStartCombat) return
    socket.emit('vtt:combat:start', {
      campaignId,
      sceneId: activeScene.id,
      tokenIds: visibleTokens.filter((token) => !token.hidden).map((token) => token.id),
    })
  }

  function endCombat() {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:combat:end', { campaignId })
  }

  function nextCombatTurn() {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:combat:next-turn', { campaignId })
  }

  function previousCombatTurn() {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:combat:previous-turn', { campaignId })
  }

  function updateCombatInitiative(tokenId: string, initiative: number | null) {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:combat:update-initiative', { campaignId, tokenId, initiative })
  }

  async function createGenericToken() {
    if (!campaignId || !isMaster) return
    const token = await api<CampaignToken>(`/api/campaigns/${campaignId}/tokens`, {
      method: 'POST',
      body: JSON.stringify({ name: 'Novo Token', color: getLastTokenColor() }),
    })
    setCampaignTokens((current) => [...current, token])
  }

  async function createTokenFromCandidate(candidate: VttTokenCandidate) {
    if (!campaignId || !isMaster) return
    const token = await api<CampaignToken>(`/api/campaigns/${campaignId}/tokens`, {
      method: 'POST',
      body: JSON.stringify({ actorId: candidate.actorId }),
    })
    setCampaignTokens((current) => [...current, token].sort((left, right) => {
      const order = { PLAYER_CONTROLLED: 0, MASTER_ONLY: 1 } as const
      return order[left.category] - order[right.category]
    }))
    setTokenCandidates((current) => current.filter((item) => item.actorId !== candidate.actorId))
  }

  function applyCampaignTokenUpdate(token: CampaignToken) {
    setCampaignTokens((current) => current.map((item) => item.id === token.id ? token : item).sort((left, right) => {
      const order = { PLAYER_CONTROLLED: 0, MASTER_ONLY: 1 } as const
      return order[left.category] - order[right.category]
    }))
    setTokenState((current) => ({
      ...current,
      tokens: current.tokens.map((item) => item.id === token.id ? {
        ...item,
        actorId: token.actorId,
        name: token.name,
        avatarUrl: token.avatarUrl,
        color: token.color,
        size: token.size,
        controllerMemberId: token.controllerMemberId,
        controllerUserId: token.controllerUserId,
        ownerName: token.controllerName,
        canCustomizeAppearance: token.canCustomizeAppearance,
        visionConfig: token.visionConfig,
        lightConfig: token.lightConfig,
      } : item),
    }))
    setTokenContextMenu((current) => current?.token.id === token.id ? {
      ...current,
      token: {
        ...current.token,
        actorId: token.actorId,
        name: token.name,
        avatarUrl: token.avatarUrl,
        color: token.color,
        size: token.size,
        controllerMemberId: token.controllerMemberId,
        controllerUserId: token.controllerUserId,
        ownerName: token.controllerName,
        canCustomizeAppearance: token.canCustomizeAppearance,
        visionConfig: token.visionConfig,
        lightConfig: token.lightConfig,
      },
    } : current)
  }

  async function updateCampaignToken(tokenId: string, changes: Record<string, unknown>) {
    if (!campaignId) return
    const token = await api<CampaignToken>(`/api/campaigns/${campaignId}/tokens/${tokenId}`, {
      method: 'PATCH',
      body: JSON.stringify(changes),
    })
    applyCampaignTokenUpdate(token)
    if ('actorId' in changes) {
      const candidates = await api<VttTokenCandidate[]>(`/api/campaigns/${campaignId}/token-candidates`)
      setTokenCandidates(candidates)
    }
    return token
  }

  function updateCampaignTokenName(token: CampaignToken) {
    const name = window.prompt('Nome do Token:', token.name)?.trim()
    if (name) void updateCampaignToken(token.id, { name })
  }

  async function deleteCampaignToken(token: Pick<VttPlayerToken, 'id' | 'name'>) {
    if (!campaignId || !isMaster) return
    if (!window.confirm(`Excluir o Token “${token.name}”? A ficha vinculada sera preservada.`)) return
    await api(`/api/campaigns/${campaignId}/tokens/${token.id}`, { method: 'DELETE' })
    setCampaignTokens((current) => current.filter((item) => item.id !== token.id))
    setTokenState((current) => ({ ...current, tokens: current.tokens.filter((item) => item.id !== token.id) }))
    setTokenContextMenu(null)
  }

  function changeZoom(direction: -1 | 1) {
    setZoomPercent((current) => {
      return clampNumber(current + direction * zoomLimits.step, zoomLimits.min, zoomLimits.max)
    })
  }

  function startBoardPan(event: React.PointerEvent<HTMLDivElement>) {
    if (activeTool !== 'move' && !event.altKey && !altNavigationActive) return
    if (event.button !== 0) return
    if (event.target !== event.currentTarget) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    panningRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY }
    setIsPanning(true)
  }

  function updateBoardPan(event: React.PointerEvent<HTMLDivElement>) {
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
    const forceDelete = Boolean(targetScene.assetId || targetScene.tokens.length)
    if (forceDelete) {
      const confirmed = window.confirm(`Deletar ${targetScene.fileName ?? targetScene.name}? Esta acao remove a cena${targetScene.tokens.length ? ', seus tokens' : ''}${targetScene.assetId ? ' e o arquivo no Firebase' : ''}.`)
      if (!confirmed) return
    }

    setSceneDeletingId(sceneId)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    try {
      await api<{ ok: true }>(
        `/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(targetScene.id)}${forceDelete ? '?force=true' : ''}`,
        { method: 'DELETE' },
      )

      if (targetScene.assetId) {
        await api<{ ok: true }>(`/api/assets/${encodeURIComponent(targetScene.assetId)}?force=true`, { method: 'DELETE' })
      }

      setPreparedScenes((current) => {
        const sceneToDelete = current.find((scene) => scene.id === sceneId)
        if (sceneToDelete) revokeSceneImageUrl(sceneToDelete)
        return normalizePreparedSceneList(current.filter((scene) => scene.id !== sceneId))
      })
      setActiveScene((current) => (current?.id === sceneId ? null : current))
      setTokenState((current) => (activeScene?.id === sceneId ? { campaignId, tokens: [] } : current))
      if (activeScene?.id === sceneId) publishSceneSelection(null)
      setSceneSuccessMessage(`${targetScene.fileName ?? targetScene.name} deletado com sucesso.`)
    } catch (err) {
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel deletar a cena.')
    } finally {
      setSceneDeletingId(null)
    }
  }

  const areaEffectMenuDimension = areaEffectContextMenu
    ? primaryAreaDimension(areaEffectContextMenu.draftPlacement.template, gridSettings.metersPerCell)
    : null

  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-[#08090c] text-white">
      {activeTool === 'area-templates' && activeAreaTemplate && !pendingAreaPlacement && areaCursorPosition
        ? createPortal(
            <div
              className="pointer-events-none fixed z-[100] grid h-9 w-9 place-items-center rounded-lg border border-violet-200/70 bg-violet-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.8)]"
              style={{ left: areaCursorPosition.x, top: areaCursorPosition.y, transform: 'translate(-50%, -50%)' }}
              aria-hidden="true"
            >
              <Sparkles className="h-4 w-4" />
              {activeAreaTemplate.shape === 'TARGET' ? <span className="absolute -right-2 -top-2 min-w-6 rounded-full border border-violet-100 bg-zinc-950 px-1 py-0.5 text-center text-[9px] font-bold leading-none text-violet-100 shadow-lg">{selectedAreaTargetIds.length}/{activeAreaTemplate.dimensions.targetCount ?? 1}</span> : null}
            </div>,
            document.body,
          )
        : null}
      {areaEffectContextMenu ? (
        <AreaEffectContextMenu
          name={areaEffectContextMenu.name}
          position={areaEffectContextMenu.position}
          rotationDegrees={areaEffectContextMenu.draftPlacement.rotationDegrees}
          dimensionLabel={areaEffectMenuDimension?.label ?? 'Comprimento (m)'}
          dimensionMeters={(areaEffectMenuDimension?.baseMeters ?? 1) * areaEffectContextMenu.draftPlacement.scale}
          minimumDimensionMeters={(areaEffectMenuDimension?.baseMeters ?? 1) * 0.1}
          maximumDimensionMeters={(areaEffectMenuDimension?.baseMeters ?? 1) * 10}
          canRotate={areaEffectContextMenu.draftPlacement.template.shape !== 'CIRCLE' && areaEffectContextMenu.draftPlacement.template.shape !== 'ORTHOGONAL' && areaEffectContextMenu.draftPlacement.template.shape !== 'RING'}
          canReposition={Boolean(areaEffectContextMenu.effectId)}
          canDelete={Boolean(areaEffectContextMenu.effectId)}
          onPreview={previewAreaEffectMenu}
          onSave={(input) => void saveAreaEffectMenu(input)}
          onReposition={() => {
            const effect = areaLibrary.effects.find((item) => item.id === areaEffectContextMenu.effectId)
            if (effect) startAreaEffectReposition(effect)
          }}
          onDelete={() => {
            if (areaEffectContextMenu.effectId) void areaLibrary.deleteEffect(areaEffectContextMenu.effectId)
            setAreaEffectContextMenu(null)
          }}
          onClose={() => setAreaEffectContextMenu(null)}
        />
      ) : null}
      <section
        className="absolute inset-0 min-h-0 overflow-hidden bg-[#0b0d12]"
        onClick={() => {
          setSelectedTokenId(null)
          setTokenContextMenu(null)
          setWallContextMenu(null)
          setAreaEffectContextMenu(null)
        }}
      >
        <div ref={boardViewportRef} className="absolute inset-0 overflow-hidden">
          <div
            ref={gridAreaRef}
            className={[
              'relative overflow-hidden bg-[#0b0d12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]',
              activeTool === 'move' || altNavigationActive ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : '',
              activeTool === 'area-templates' && activeAreaTemplate && !pendingAreaPlacement && !altNavigationActive ? 'cursor-none' : '',
            ].join(' ')}
            style={{
              width: boardPixelSize.width,
              height: boardPixelSize.height,
              transform: `translate(${clampedPanOffset.x}px, ${clampedPanOffset.y}px)`,
            }}
            onDragOver={(event) => {
              if (!isMaster || !masterCanUseVtt || !activeScene) return
              if (!hasTokenDragData(event.dataTransfer)) return
              event.preventDefault()
              event.dataTransfer.dropEffect = 'move'
            }}
            onDrop={dropCampaignToken}
            onPointerDown={handleBoardPointerDown}
            onPointerMove={handleBoardPointerMove}
            onPointerUp={finishBoardPan}
            onPointerCancel={finishBoardPan}
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
            <VttGridOverlay key={gridRenderKey} settings={zoomedGridSettings} />
            <FogVisibleLayer maskUrl={fog.currentMaskUrl}>
              <VttWallsOverlay
                walls={activeScene?.walls ?? []}
                drafts={wallDrafts}
                zoomScale={activeZoomPercent / 100}
                isMasterView={Boolean(isMaster)}
                canOpenWallMenu={Boolean(isMaster && activeTool !== 'walls')}
                onWallContextMenu={(wall, position) => setWallContextMenu({ wall, ...position })}
              />
              <AreaOverlay areas={renderedAreas} />
            </FogVisibleLayer>
            {activeTool === 'area-templates' && activeAreaTemplate?.shape === 'TARGET' ? (
              <div className="pointer-events-auto absolute left-1/2 top-4 z-[20] flex -translate-x-1/2 items-center gap-3 rounded-lg border border-violet-300/30 bg-black/90 px-3 py-2 text-xs text-violet-100 shadow-xl backdrop-blur">
                <span>{selectedAreaTargetIds.length >= (activeAreaTemplate.dimensions.targetCount ?? 1) ? 'Limite de alvos atingido' : 'Clique nos tokens para selecionar alvos'}</span>
                <button type="button" onClick={cancelAreaPlacement} className="rounded border border-white/15 px-2 py-1 text-zinc-200 hover:bg-white/10">Cancelar</button>
                <button type="button" disabled={selectedAreaTargetIds.length === 0} onClick={confirmAreaTargets} className="rounded bg-violet-600 px-2 py-1 font-semibold text-white hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40">Usar</button>
              </div>
            ) : null}
            {isMaster ? displayedPersistentAreaPlacements.filter((placement) => placement.effectId !== editingAreaEffectId).map((placement) => {
              const effect = areaLibrary.effects.find((item) => item.id === placement.effectId)
              if (!effect) return null
              return (
                <button
                  key={`handle-${placement.key}`}
                  type="button"
                  title={placement.template.placementMode === 'DIRECTIONAL' ? `${placement.template.name} — arraste para mover ou clique para redefinir a direção` : `${placement.template.name} — arraste para mover`}
                  className={['absolute z-[10] grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border-2 border-orange-400 bg-zinc-900 text-white shadow-[0_0_14px_rgba(249,115,22,0.7)]', areaHandleDrag?.effectId === effect.id ? 'cursor-grabbing' : 'cursor-grab'].join(' ')}
                  style={{ left: placement.origin.x, top: placement.origin.y }}
                  onPointerDown={(event) => startAreaHandleDrag(event, placement, effect.id)}
                  onPointerMove={moveAreaHandleDrag}
                  onPointerUp={finishAreaHandleDrag}
                  onPointerCancel={finishAreaHandleDrag}
                  onContextMenu={(event) => openAreaEffectMenu(event, effect, placement)}
                >
                  <Sparkles className="h-4 w-4" />
                </button>
              )
            }) : null}
            {pendingAreaPlacement ? (
              <>
                <button
                  type="button"
                  title={pendingAreaPlacement.template.placementMode === 'DIRECTIONAL' ? 'Arraste para mover ou clique para redefinir a direcao' : 'Arraste para mover a area'}
                  className={['absolute z-[10] grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border-2 border-orange-400 bg-zinc-900 text-white shadow-[0_0_18px_rgba(249,115,22,0.85)]', areaHandleDrag?.effectId === null ? 'cursor-grabbing' : 'cursor-grab'].join(' ')}
                  style={{ left: pendingAreaPlacement.origin.x, top: pendingAreaPlacement.origin.y }}
                  onPointerDown={(event) => startAreaHandleDrag(event, pendingAreaPlacement, null)}
                  onPointerMove={moveAreaHandleDrag}
                  onPointerUp={finishAreaHandleDrag}
                  onPointerCancel={finishAreaHandleDrag}
                  onContextMenu={(event) => openAreaEffectMenu(event, null, pendingAreaPlacement)}
                >
                  <Sparkles className="h-5 w-5" />
                </button>
                <div
                  className="pointer-events-auto absolute z-[12] flex w-[136px] gap-1 rounded-lg border border-white/15 bg-black/90 p-1.5 shadow-2xl backdrop-blur"
                  style={{
                    left: pendingAreaPlacement.origin.x < gridBounds.width - 172
                      ? pendingAreaPlacement.origin.x + 30
                      : Math.max(8, pendingAreaPlacement.origin.x - 166),
                    top: clampNumber(pendingAreaPlacement.origin.y - 19, 8, Math.max(8, gridBounds.height - 42)),
                  }}
                >
                  <button type="button" onClick={cancelAreaPlacement} className="h-7 flex-1 rounded border border-white/15 px-1.5 text-[10px] font-semibold text-zinc-200 transition hover:bg-white/10">Cancelar</button>
                  <button type="button" onClick={() => void confirmAreaPlacement(pendingAreaPlacement)} className="h-7 flex-1 rounded bg-violet-600 px-1.5 text-[10px] font-semibold text-white transition hover:bg-violet-500">Usar</button>
                </div>
              </>
            ) : null}
            {previewAreaRender ? (
              <div className="pointer-events-none absolute left-1/2 top-4 z-[9] -translate-x-1/2 rounded-lg border border-orange-300/30 bg-black/80 px-3 py-2 text-center text-xs font-semibold text-orange-100 shadow-xl">
                {previewAreaRender.touchedTokenIds.length} {previewAreaRender.touchedTokenIds.length === 1 ? 'token tocado' : 'tokens tocados'}
                <span className="ml-2 font-normal text-zinc-400">{pendingAreaPlacement ? 'Previa pronta para usar' : 'Clique para fixar a direcao'}</span>
              </div>
            ) : null}
            <FogVisibleLayer maskUrl={fog.currentMaskUrl}>
            {visibleTokens.map((token) => (
              <PlayerToken
                key={token.id}
                token={token}
                tokenSize={tokenSize}
                gridShape={gridSettings.shape}
                gridOffset={{ x: zoomedGridSettings.offsetX, y: zoomedGridSettings.offsetY }}
                gridAreaRef={gridAreaRef}
                canDrag={
                  !movingTokenIds.has(token.id) && (
                    (sessionActive && !activeCombat && token.controllerUserId === me?.id && campaign?.myRole === 'PLAYER') ||
                    Boolean(isMaster)
                  )
                }
                canSelect={
                  !(activeTool === 'area-templates' && activeAreaTemplate?.shape === 'TARGET') &&
                  (Boolean(isMaster) || (sessionActive && token.controllerUserId === me?.id))
                }
                canResize={Boolean(isMaster)}
                canRotate={Boolean(isMaster) || (sessionActive && token.controllerUserId === me?.id)}
                selected={selectedTokenId === token.id}
                isMasterView={Boolean(isMaster)}
                onMove={(position) => movePlayerToken(token, position)}
                onSelect={selectTokenForTransform}
                onResize={resizeToken}
                onRotate={setTokenRotation}
                onMeasureFromToken={beginMeasuredMovement}
                selectedForMeasuredMovement={measuredMovementTokenId === token.id}
                onContextMenu={(contextToken, position) => setTokenContextMenu({ token: contextToken, ...position })}
                isCombatTurn={activeCombatTokenId === token.id}
                affectedRing={affectedTokenRings.get(token.id)}
                appliedAreaEffectColor={appliedAreaEffect?.tokenIds.includes(token.id) ? appliedAreaEffect.color : undefined}
                onSelectAsTarget={activeTool === 'area-templates' && activeAreaTemplate?.shape === 'TARGET' ? toggleAreaTarget : undefined}
                selectedAsTarget={selectedAreaTargetIds.includes(token.id)}
              />
            ))}
              <VttMeasurementOverlay measurement={measurement} gridSize={tokenSize} metersPerCell={gridSettings.metersPerCell} gridOffset={{ x: zoomedGridSettings.offsetX, y: zoomedGridSettings.offsetY }} />
            </FogVisibleLayer>
            <FogOverlay overlayUrl={fog.overlayUrl} masterOpacity={fog.masterOverlayOpacity} />
            {activeTool === 'fog' && isMaster && fogSetupPreview ? <FogLightTokens
              lights={fogSetupPreview.fixedLights}
              zoomPercent={activeZoomPercent}
              gridSize={zoomedGridSettings.size}
              metersPerCell={zoomedGridSettings.metersPerCell}
              boardRef={gridAreaRef}
              onMove={moveFogLight}
            /> : null}
            {measuredMovementTokenId && realtimeVttEnabled ? (
              <div
                className="absolute inset-0 z-[8] cursor-crosshair"
                onPointerDown={startNextMeasuredSegment}
              />
            ) : null}
            {activeTool === 'walls' && isMaster && activeScene ? (
              <div
                className="absolute inset-0 z-[2] cursor-crosshair"
                onPointerDown={startWall}
                onPointerMove={updateWall}
                onPointerUp={finishWall}
                onPointerCancel={finishWall}
              />
            ) : null}
          </div>
        </div>

        {sceneLoadingMessage ? <LoadingScreen message={sceneLoadingMessage} /> : null}

        <div className="pointer-events-none absolute inset-0 z-10 flex min-h-[560px] flex-col">
          <div className="relative flex-1">
            {activeTool === 'fog' && isMaster && activeScene ? <FogControlsPanel
              key={`${activeScene.id}:${selectedToken?.id ?? 'scene'}`}
              sceneFog={normalizeSceneFogConfig(activeScene.fogConfig)}
              fixedLights={normalizeFixedLightSources(activeScene.fixedLightSources)}
              selectedToken={selectedToken}
              masterMode={fog.masterMode}
              onMasterModeChange={fog.setMasterMode}
              onPreview={setFogSetupPreview}
              previewDraft={fogSetupPreview}
              onApply={applyFogSetup}
              onResetExploration={resetFogExploration}
              boardCenter={{ x: activeScene.width / 2, y: activeScene.height / 2 }}
            /> : null}
            {toolsCollapsed ? (
              <button type="button" title="Expandir ferramentas" aria-label="Expandir ferramentas" className="pointer-events-auto absolute left-16 top-5 z-40 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/45 text-zinc-200 shadow-2xl backdrop-blur transition hover:bg-white/10 hover:text-white" onClick={() => setToolsCollapsed(false)}>
                <Wrench className="h-4 w-4" />
              </button>
            ) : (
            <div className="pointer-events-auto absolute left-16 top-5 z-40 flex max-w-[calc(100vw-9rem)] overflow-x-auto rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              <button type="button" title="Recolher ferramentas" aria-label="Recolher ferramentas" className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white" onClick={collapseToolsToolbar}>
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
                    data-vtt-tool={tool.id}
                    aria-label={tool.label}
                    title={`${tool.label}${tool.id === 'move' ? ' (Alt)' : tool.id === 'walls' ? ' (Ctrl+Z desfaz)' : ''}`}
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
                      wallDraftStartRef.current = null
                      setWallDrafts([])
                      setWallContextMenu(null)
                      const preservePendingAreaForNavigation = tool.id === 'move' && Boolean(pendingAreaPlacement)
                      if (!preservePendingAreaForNavigation && (tool.id !== 'area-templates' || activeTool === 'area-templates')) {
                        setActiveAreaTemplate(null)
                        setAreaDraftOrigin(null)
                        setAreaPointer(null)
                        setPendingAreaPlacement(null)
                        setAreaCursorPosition(null)
                        setEditingAreaEffectId(null)
                        setAreaEffectContextMenu(null)
                        setSelectedAreaTargetIds([])
                      }
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
                campaignId={campaignId}
                socket={socket}
                enabled={canRollDice}
                open={activeTool === 'dice'}
                clearSignal={diceClearSignal}
                onClose={() => setActiveTool(null)}
                className="pointer-events-none absolute inset-0 z-20"
              />
            ) : null}

            {gridSettingsOpen && canConfigureGrid ? (
              <VttGridSettingsModal
                key={activeScene?.id ?? 'campaign-grid'}
                settings={gridSettings}
                onChange={handleGridSettingsChange}
                onClose={() => onGridSettingsOpenChange(false)}
              />
            ) : null}

            {activeTool === 'walls' && isMaster ? (
              <div className="pointer-events-auto absolute left-24 top-20 z-30 w-[min(320px,calc(100vw-128px))] rounded-lg border border-white/10 bg-black/70 p-3 text-white shadow-2xl backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase text-zinc-300"><BrickWall className="h-4 w-4 text-sky-300" />Paredes e portas</span>
                  <button type="button" title="Fechar" className="rounded p-1 text-zinc-400 hover:bg-white/10 hover:text-white" onClick={() => setActiveTool(null)}><X className="h-4 w-4" /></button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {(['wall', 'door', 'window'] as const).map((kind) => (
                    <button key={kind} type="button" className={['rounded-md border px-3 py-2 text-xs font-semibold transition', wallKind === kind ? 'border-sky-300/45 bg-sky-500/20 text-sky-100' : 'border-white/10 text-zinc-300 hover:bg-white/10'].join(' ')} onClick={() => setWallKind(kind)}>
                      {kind === 'wall' ? 'Parede' : kind === 'door' ? 'Porta' : 'Janela'}
                    </button>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <label className="flex items-center justify-between gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-2 text-xs text-zinc-300">
                    Parede
                    <input type="color" value={wallColor} className="h-7 w-9 cursor-pointer rounded border border-white/10 bg-transparent" onChange={(event) => setWallColor(event.currentTarget.value)} />
                  </label>
                  <label className="flex items-center justify-between gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-2 text-xs text-zinc-300">
                    Porta
                    <input type="color" value={doorColor} className="h-7 w-9 cursor-pointer rounded border border-white/10 bg-transparent" onChange={(event) => setDoorColor(event.currentTarget.value)} />
                  </label>
                </div>

                <label className="mt-3 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300">
                  <input type="checkbox" className="h-4 w-4 accent-sky-500" checked={playersCanSeeSceneWalls} onChange={(event) => setPlayerWallVisibility(event.currentTarget.checked)} />
                  Jogadores veem marcações de barreiras
                </label>

                <p className="mt-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] leading-4 text-zinc-400">
                  Arraste para criar um segmento. Ctrl + arraste no modo Parede cria um retângulo. Clique com o botão direito em uma parede ou porta para editar.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button type="button" disabled={!wallUndoCount} className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/10 disabled:opacity-40" onClick={undoLastWallCreation}>Desfazer</button>
                  <button type="button" disabled={!activeScene?.walls.length} className="rounded-md border border-red-300/20 px-3 py-2 text-xs font-semibold text-red-200 hover:bg-red-500/10 disabled:opacity-40" onClick={() => updateActiveSceneWalls(() => [], { recordUndo: true })}>Limpar</button>
                </div>
              </div>
            ) : null}

            {canUseAreaTemplates && (areaTemplatesDetached || (activeTool === 'area-templates' && !activeAreaTemplate)) ? (
              <AreaTemplatesPanel
                templates={areaLibrary.templates}
                loading={areaLibrary.loading}
                error={areaLibrary.error}
                activeTemplateId={activeAreaTemplate?.id}
                gridScale={{ metersPerCell: gridSettings.metersPerCell }}
                detached={areaTemplatesDetached}
                canManageTemplates={Boolean(isMaster)}
                onClose={() => {
                  setAreaTemplatesDetached(false)
                  setActiveTool(null)
                  setActiveAreaTemplate(null)
                  setAreaDraftOrigin(null)
                  setAreaPointer(null)
                  setPendingAreaPlacement(null)
                  setAreaCursorPosition(null)
                  setEditingAreaEffectId(null)
                  setAreaEffectContextMenu(null)
                }}
                onUse={useAreaTemplate}
                onSave={areaLibrary.saveTemplate}
                onDuplicate={(id) => void areaLibrary.duplicateTemplate(id)}
                onDelete={(id) => void areaLibrary.deleteTemplate(id)}
                persistentEffects={areaLibrary.effects.map((effect) => ({ id: effect.id, name: effect.configurationSnapshot.name }))}
                onDeleteEffect={(id) => void areaLibrary.deleteEffect(id)}
                onDetachedChange={setAreaTemplatesDetached}
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
                    <CircleMinus className="h-4 w-4" />
                    Cena ({currentSceneTokenCount})
                  </button>
                  <button
                    type="button"
                    title="Remover todos os Tokens de todas as cenas"
                    disabled={!masterCanUseVtt || placedCampaignTokenCount === 0}
                    className="flex items-center justify-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 px-3 py-2 text-center text-xs font-semibold text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-45"
                    onClick={() => removeTokens('global')}
                  >
                    <CircleMinus className="h-4 w-4" />
                    Todos ({placedCampaignTokenCount})
                  </button>
                </div>

                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="mb-3 flex w-full items-center justify-center rounded-md border border-indigo-300/25 bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-100 transition hover:bg-indigo-500/25 disabled:opacity-45"
                  onClick={() => void createGenericToken()}
                >
                  + Criar Token generico
                </button>

                {!activeScene ? (
                  <div className="mb-3 rounded-md border border-amber-300/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-100">
                    Selecione ou prepare uma cena para posicionar Tokens no grid.
                  </div>
                ) : null}
                {tokenDropError ? (
                  <div role="alert" className="mb-3 rounded-md border border-red-300/20 bg-red-500/10 px-3 py-2 text-xs text-red-100">
                    {tokenDropError}
                  </div>
                ) : null}

                <div className="grid max-h-[360px] gap-2 overflow-auto pr-1">
                  {!availableCampaignTokens.length ? (
                    <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-sm text-zinc-500">
                      Nenhum Token fora de cena.
                    </div>
                  ) : null}
                  {availableCampaignTokens.map((token) => (
                    <div
                      key={token.id}
                      className="flex items-center rounded-md border border-white/10 bg-white/[0.04] transition hover:bg-white/10"
                    >
                      <button
                        type="button"
                        title={activeScene ? 'Arraste o Token para o grid' : 'Selecione uma cena antes de posicionar o Token'}
                        aria-label={`Arrastar ${token.name} para o grid`}
                        draggable={Boolean(masterCanUseVtt && activeScene)}
                        disabled={!masterCanUseVtt || !activeScene}
                        onDragStart={(event) => dragCampaignToken(event, token)}
                        className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 text-left enabled:cursor-grab disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full text-sm font-bold text-white">
                          <TokenAvatar avatarUrl={token.avatarUrl} name={token.name} fallbackSeed={token.id} color={token.color} />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-white">{token.name}</span>
                          <span className="block truncate text-[11px] uppercase text-zinc-500">
                            {token.category === 'PLAYER_CONTROLLED' ? 'Controlado por jogador' : 'Somente Mestre'}
                          </span>
                        </span>
                      </button>
                      <span className="flex shrink-0 gap-1 pr-3">
                        <button
                          type="button"
                          title="Alterar nome"
                          disabled={!masterCanUseVtt}
                          draggable={false}
                          className="rounded-md p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white disabled:opacity-40"
                          onClick={() => updateCampaignTokenName(token)}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Alterar imagem"
                          disabled={!masterCanUseVtt}
                          draggable={false}
                          className="rounded-md p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white disabled:opacity-40"
                          onClick={() => setTokenImageEditTarget(token)}
                        >
                          <ImageIcon className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Excluir Token"
                          disabled={!masterCanUseVtt}
                          draggable={false}
                          className="rounded-md p-1.5 text-zinc-400 hover:bg-red-500/15 hover:text-red-200 disabled:opacity-40"
                          onClick={() => void deleteCampaignToken(token)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </span>
                    </div>
                  ))}

                  {tokenCandidates.length ? (
                    <div className="mt-2 border-t border-white/10 pt-2 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                      Fichas sem Token
                    </div>
                  ) : null}
                  {tokenCandidates.map((candidate) => (
                    <button
                      key={candidate.actorId}
                      type="button"
                      disabled={!masterCanUseVtt}
                      onClick={() => void createTokenFromCandidate(candidate)}
                      className="flex items-center gap-3 rounded-md border border-dashed border-white/10 bg-white/[0.02] px-3 py-2 text-left transition hover:bg-white/10 disabled:opacity-50"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full text-sm font-bold text-white">
                        <TokenAvatar avatarUrl={candidate.avatarUrl} name={candidate.name} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-white">{candidate.name}</span>
                        <span className="block truncate text-[11px] uppercase text-zinc-500">Criar Token vinculado</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {tokenContextMenu ? (
              <TokenContextMenu
                key={`${tokenContextMenu.token.id}:${tokenContextMenu.x}:${tokenContextMenu.y}`}
                menu={tokenContextMenu}
                isMaster={Boolean(isMaster)}
                isCurrentController={tokenContextMenu.token.controllerUserId === me?.id}
                masterCanUseVtt={masterCanUseVtt}
                tokenCandidates={tokenCandidates}
                campaignPlayers={campaignPlayers}
                onUpdateToken={(tokenId, changes) => void updateCampaignToken(tokenId, changes)}
                onConfigureFog={configureTokenFog}
                onToggleVisibility={toggleTokenVisibility}
                onRemoveFromScene={removeToken}
                onDelete={(token) => void deleteCampaignToken(token)}
                onOpenInventory={(token) => {
                  setInventoryToken(token)
                  setTokenContextMenu(null)
                }}
              />
            ) : null}

            {inventoryToken?.actorId && campaignId ? (
              <CampaignInventoryModal
                campaignId={campaignId}
                actorId={inventoryToken.actorId}
                readOnly={!isMaster}
                onClose={() => setInventoryToken(null)}
              />
            ) : null}
            {tokenImageEditTarget ? (
              <TokenImagePickerDialog
                tokenName={tokenImageEditTarget.name}
                currentAvatarUrl={tokenImageEditTarget.avatarUrl}
                currentColor={tokenImageEditTarget.color}
                tokenId={tokenImageEditTarget.id}
                onCancel={() => setTokenImageEditTarget(null)}
                onSave={(changes) => void updateCampaignToken(tokenImageEditTarget.id, changes)}
              />
            ) : null}
            {wallContextMenu && isMaster ? (
              <div
                className="pointer-events-auto fixed z-50 w-56 overflow-hidden rounded-lg border border-white/10 bg-[#111218] p-2 text-white shadow-2xl"
                style={{ left: wallContextMenu.x, top: wallContextMenu.y }}
                onClick={(event) => event.stopPropagation()}
                onContextMenu={(event) => event.preventDefault()}
              >
                <div className="border-b border-white/10 px-2 pb-2">
                  <div className="truncate text-sm font-semibold">{wallContextMenu.wall.kind === 'door' ? 'Porta' : wallContextMenu.wall.kind === 'window' ? 'Janela' : 'Parede'}</div>
                  <div className="truncate text-xs text-zinc-500">
                    {wallContextMenu.wall.kind !== 'wall' ? 'Status da passagem' : 'Barreira da cena'}
                  </div>
                </div>
                {wallContextMenu.wall.kind !== 'wall'
                  ? [
                      { key: 'open' as const, label: 'Aberta', disabled: false },
                      { key: 'locked' as const, label: 'Trancada', disabled: Boolean((wallContextMenu.wall.door ?? wallContextMenu.wall.window)?.open) },
                      { key: 'blocked' as const, label: 'Obstruída', disabled: Boolean((wallContextMenu.wall.door ?? wallContextMenu.wall.window)?.open) },
                      { key: 'ajar' as const, label: 'Encostada', disabled: Boolean((wallContextMenu.wall.door ?? wallContextMenu.wall.window)?.open) },
                    ].map((item) => (
                      <label key={item.key} className="mt-2 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-200 transition hover:bg-white/10">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-sky-500"
                          disabled={item.disabled}
                          checked={Boolean((wallContextMenu.wall.door ?? wallContextMenu.wall.window)?.[item.key])}
                          onChange={(event) => updateDoorState(wallContextMenu.wall.id, { [item.key]: event.currentTarget.checked })}
                        />
                        {item.label}
                      </label>
                    ))
                  : null}
                {wallContextMenu.wall.kind === 'wall' ? <label className="mt-2 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-200 transition hover:bg-white/10">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-amber-500"
                    checked={Boolean(wallContextMenu.wall.allowsLight)}
                    onChange={(event) => updateActiveSceneWalls((walls) => walls.map((wall) => wall.id === wallContextMenu.wall.id ? { ...wall, allowsLight: event.currentTarget.checked } : wall))}
                  />
                  Permite passagem de luz
                </label> : null}
                <label className="mt-2 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-200 transition hover:bg-white/10">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-orange-500"
                    checked={wallContextMenu.wall.blocksEffects}
                    onChange={(event) => updateWallEffectBlocking(wallContextMenu.wall.id, event.currentTarget.checked)}
                  />
                  Bloqueia areas e efeitos
                </label>
                <button
                  type="button"
                  className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 px-3 text-xs font-semibold text-red-100 transition hover:bg-red-500/20"
                  onClick={() => removeWallSegment(wallContextMenu.wall.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  {wallContextMenu.wall.kind === 'door' ? 'Remover porta' : wallContextMenu.wall.kind === 'window' ? 'Remover janela' : 'Remover parede'}
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
          <button type="button" title="Expandir painel lateral" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/10 hover:text-white" onClick={() => setRightPanelCollapsed(false)}>
            <PanelRightOpen className="h-4 w-4" />
          </button>
          <div className="grid gap-2">
            <div
              title={rightPanelSessionStatus.title}
              className={['grid h-10 w-10 place-items-center rounded-lg border text-[10px] font-bold uppercase', rightPanelSessionStatus.className].join(' ')}
            >
              {RightPanelSessionStatusIcon ? <RightPanelSessionStatusIcon className="h-4 w-4" /> : rightPanelSessionStatus.label}
            </div>
            {[
              { id: 'combat' as const, title: 'Combate', icon: Swords },
              { id: 'players' as const, title: 'Jogadores', icon: Users },
              { id: 'session' as const, title: 'Sessao', icon: Eye },
              ...(isMaster ? [{ id: 'scenes' as const, title: 'Cenas', icon: ScrollText }] : []),
              { id: 'chat' as const, title: 'Chat', icon: MessageCircle },
            ].map((item) => {
              const Icon = item.icon
              return <button key={item.id} type="button" title={item.title} className={['grid h-10 w-10 place-items-center rounded-lg border transition', rightPanelTab === item.id || (item.id === 'combat' && activeCombat) ? 'border-indigo-300/40 bg-indigo-500/20 text-indigo-100' : 'border-white/10 bg-white/[0.04] text-zinc-400 hover:bg-white/10 hover:text-white'].join(' ')} onClick={() => openRightPanelTab(item.id)}><Icon className="h-4 w-4" /></button>
            })}
          </div>
        </div>

        <div className={rightPanelCollapsed ? 'hidden h-full min-h-0 flex-col gap-3' : 'relative flex h-full min-h-0 flex-col gap-3'}>
          <button type="button" title="Recolher painel lateral" className="absolute right-0 top-0 z-10 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-[#15161c] text-zinc-300 transition hover:bg-white/10 hover:text-white" onClick={() => setRightPanelCollapsed(true)}>
            <PanelRightClose className="h-4 w-4" />
          </button>

          <div className="flex shrink-0 items-center gap-2 pr-10">
            <div title={rightPanelSessionStatus.title} className={['grid h-9 w-9 place-items-center rounded-md border text-[10px] font-bold uppercase', rightPanelSessionStatus.className].join(' ')}>
              {RightPanelSessionStatusIcon ? <RightPanelSessionStatusIcon className="h-4 w-4" /> : rightPanelSessionStatus.label}
            </div>
            {[
              { id: 'combat' as const, title: 'Combate', icon: Swords },
              { id: 'players' as const, title: 'Jogadores', icon: Users },
              { id: 'session' as const, title: 'Sessao', icon: Eye },
              ...(isMaster ? [{ id: 'scenes' as const, title: 'Cenas', icon: ScrollText }] : []),
              { id: 'chat' as const, title: 'Chat', icon: MessageCircle },
            ].map((item) => {
              const Icon = item.icon
              return <button key={item.id} type="button" title={item.title} aria-label={item.title} className={['grid h-9 w-9 place-items-center rounded-md border transition', rightPanelTab === item.id ? 'border-indigo-300/45 bg-indigo-600 text-white' : 'border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/10 hover:text-white'].join(' ')} onClick={() => setRightPanelTab(item.id)}><Icon className="h-4 w-4" /></button>
            })}
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            {rightPanelTab === 'combat' && !combatTrackerDetached ? <CombatTrackerPanel combat={activeCombat} isMaster={Boolean(isMaster)} canStart={canStartCombat} tokenCount={combatTokenCount} onStart={startCombat} onEnd={endCombat} onNextTurn={nextCombatTurn} onPreviousTurn={previousCombatTurn} onInitiativeChange={updateCombatInitiative} onDetach={() => setCombatTrackerDetached(true)} /> : null}
            {rightPanelTab === 'combat' && combatTrackerDetached ? <div className="grid h-full place-items-center rounded-lg border border-dashed border-white/10 px-4 text-center text-xs text-zinc-500">Combate destacado em uma janela.</div> : null}
            {rightPanelTab === 'players' ? <section className="grid h-full content-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"><div className="flex items-center gap-2 border-b border-white/10 pb-3"><Users className="h-4 w-4 text-indigo-300" /><div><div className="text-sm font-semibold">Participantes</div><div className="text-[11px] uppercase text-zinc-500">{visibleTokens.length} token{visibleTokens.length === 1 ? '' : 's'} na cena</div></div></div><div className="rounded-md border border-white/10 bg-black/20 px-3 py-3 text-xs text-zinc-400">{campaign?.myRole === 'MASTER' ? 'Mestre conectado à mesa.' : 'Jogador conectado à mesa.'}</div></section> : null}
            {rightPanelTab === 'session' ? <section className="grid h-full content-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"><div className="flex items-center gap-2 border-b border-white/10 pb-3">{campaign?.isOnline ? <Eye className="h-4 w-4 text-emerald-300" /> : <EyeOff className="h-4 w-4 text-zinc-400" />}<div><div className="text-sm font-semibold">Sessao</div><div className="text-[11px] uppercase text-zinc-500">{rightPanelSessionStatus.title}</div></div></div><div className="rounded-md border border-white/10 bg-black/20 px-3 py-3 text-xs leading-relaxed text-zinc-400">{sessionState === 'PAUSED' ? 'Jogadores estao bloqueados na mesa, exceto no chat. O Mestre ainda pode preparar cenas.' : campaign?.isOnline ? 'A mesa esta disponivel para participantes ativos.' : 'A mesa esta em modo de preparacao offline.'}</div></section> : null}
            {rightPanelTab === 'scenes' && isMaster ? <SceneSidebarScenes scenes={preparedScenes} activeSceneId={activeScene?.id ?? null} onSelectScene={selectPreparedScene} onPrepareScene={() => setScenePreparationOpen(true)} /> : null}
            {rightPanelTab === 'chat' && campaignId ? <CampaignChat campaignId={campaignId} enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE')} className="h-full min-h-0" /> : null}
          </div>
        </div>
      </aside>

      {combatTrackerDetached && typeof document !== 'undefined'
        ? createPortal(
            <CombatTrackerPanel
              combat={activeCombat}
              isMaster={Boolean(isMaster)}
              canStart={canStartCombat}
              tokenCount={combatTokenCount}
              displayMode="detached"
              onStart={startCombat}
              onEnd={endCombat}
              onNextTurn={nextCombatTurn}
              onPreviousTurn={previousCombatTurn}
              onInitiativeChange={updateCombatInitiative}
              onAttach={() => {
                setCombatTrackerDetached(false)
                setRightPanelCollapsed(false)
              }}
            />,
            document.body,
          )
        : null}
    </div>
  )
}
