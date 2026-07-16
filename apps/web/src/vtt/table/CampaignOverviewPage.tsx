import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  BrickWall,
  CircleUserRound,
  Dice5,
  Eye,
  EyeOff,
  Grid3X3,
  MessageCircle,
  MousePointer2,
  Move,
  Ruler,
  PanelRightClose,
  PanelRightOpen,
  Pause,
  ScrollText,
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
import { useSession } from '../../contexts/SessionContext'
import { api, apiForm } from '../../lib/api'
import { VttDiceControls } from '../dice-roller'
import { defaultGridSettings, normalizeGridSettings, type VttGridSettings } from '../grid'
import { questhubCharacterDragType, zoomLimits } from './config/constants'
import {
  areMeasurementPointsEqual,
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
import {
  createPreparedScene,
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
import { applyDoorToWalls, createRectangleWallSegments, normalizeDoorState } from './domain/wallGeometry'
import { VttGridOverlay, VttGridSettingsModal } from './components/GridControls'
import { ScenePreparationModal, SceneSidebarScenes } from './components/SceneControls'
import { PlayerToken, VttMeasurementOverlay, VttWallsOverlay } from './components/BoardOverlays'
import { CombatTrackerPanel } from './components/CombatTrackerPanel'
import type {
  AssetExistsResponse,
  AssetUploadResponse,
  CampaignSceneResponse,
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
  { id: 'measure', label: 'Régua', icon: Ruler },
  { id: 'dice', label: 'Dados', icon: Dice5 },
  { id: 'tokens', label: 'Tokens', icon: CircleUserRound },
  { id: 'grid', label: 'Grid', icon: Grid3X3 },
  { id: 'walls', label: 'Paredes e portas', icon: BrickWall },
] as const

const defaultWallColor = '#e5e7eb'
const defaultDoorColor = '#f59e0b'

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

type SceneRenderTarget = {
  sceneId: string | null
  imageKey: string | null
  tokenCount: number
}

type RightPanelTab = 'combat' | 'players' | 'session' | 'scenes' | 'chat'

export function CampaignOverviewPage({
  gridSettings,
  gridSettingsOpen,
  canConfigureGrid,
  sessionState,
  myCharacter,
  onGridSettingsChange,
  onGridSettingsOpenChange,
}: CampaignOverviewPageProps) {
  const { campaignId } = useParams()
  const { campaigns, socket, connectRealtime } = useSession()
  const boardViewportRef = useRef<HTMLDivElement | null>(null)
  const gridAreaRef = useRef<HTMLDivElement | null>(null)
  const backgroundImageRef = useRef<HTMLImageElement | null>(null)
  const measuringRef = useRef(false)
  const wallDraftStartRef = useRef<VttMeasurementPoint | null>(null)
  const wallUndoStackRef = useRef<VttWallSegment[][]>([])
  const measurementRef = useRef<VttMeasurement | null>(null)
  const measuredMovementCharacterIdRef = useRef<string | null>(null)
  const panningRef = useRef<{ pointerId: number; x: number; y: number } | null>(null)
  const previousCampaignOnlineRef = useRef<{ campaignId: string | null; online: boolean }>({ campaignId: null, online: false })
  const [tokenState, setTokenState] = useState<VttTokenState>({ campaignId: null, tokens: [] })
  const [tokenCandidates, setTokenCandidates] = useState<VttTokenCandidate[]>([])
  const [tokenContextMenu, setTokenContextMenu] = useState<VttTokenContextMenu | null>(null)
  const [gridBounds, setGridBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [viewportBounds, setViewportBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [panOffset, setPanOffset] = useState<VttPanOffset>({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [altNavigationActive, setAltNavigationActive] = useState(false)
  const [activeTool, setActiveTool] = useState<VttToolId | null>('select')
  const [toolsCollapsed, setToolsCollapsed] = useState(false)
  const [measurement, setMeasurement] = useState<VttMeasurement | null>(null)
  const [measuredMovementCharacterId, setMeasuredMovementCharacterId] = useState<string | null>(null)
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
  const [preparedScenes, setPreparedScenes] = useState<PreparedScene[]>([createPreparedScene(1)])
  const [activeScene, setActiveScene] = useState<VttTableScene | null>(null)
  const [sceneSaveError, setSceneSaveError] = useState<string | null>(null)
  const [sceneSuccessMessage, setSceneSuccessMessage] = useState<string | null>(null)
  const [sceneSkippedFiles, setSceneSkippedFiles] = useState<string[]>([])
  const [sceneSaving, setSceneSaving] = useState(false)
  const [sceneDeletingId, setSceneDeletingId] = useState<string | null>(null)
  const [sceneAssetsLoadedCampaignId, setSceneAssetsLoadedCampaignId] = useState<string | null>(null)
  const [sceneRenderTarget, setSceneRenderTarget] = useState<SceneRenderTarget | null>(null)
  const [combatState, setCombatState] = useState<VttCombatState | null>(null)
  const preparedScenesRef = useRef(preparedScenes)
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
    if (tool.id === 'grid' || tool.id === 'tokens' || tool.id === 'walls') return canConfigureGrid
    return true
  })
  const playersCanSeeSceneWalls = Boolean(activeScene?.walls.some((wall) => wall.kind === 'wall' && wall.playerVisible))
  const playerTokens = tokenState.campaignId === campaignId ? tokenState.tokens : []
  const visibleTokens = isMaster ? playerTokens : playerTokens.filter((token) => !token.hidden)
  const positionedCharacterIds = new Set<string>()
  const positionedPlayerOwnerUserIds = new Set<string>()
  preparedScenes.forEach((scene) => {
    scene.tokens.forEach((token) => {
      positionedCharacterIds.add(token.characterId)
      if (token.role === 'PLAYER') positionedPlayerOwnerUserIds.add(token.ownerUserId)
    })
  })
  playerTokens.forEach((token) => {
    positionedCharacterIds.add(token.characterId)
    if (token.role === 'PLAYER') positionedPlayerOwnerUserIds.add(token.ownerUserId)
  })
  const currentSceneTokenCount = playerTokens.length
  const globalTokenCount = positionedCharacterIds.size
  const availableTokenCandidates = tokenCandidates.filter(
    (candidate) =>
      !positionedCharacterIds.has(candidate.characterId) &&
      (candidate.role !== 'PLAYER' || !positionedPlayerOwnerUserIds.has(candidate.ownerUserId)),
  )
  const activeCombat =
    combatState && combatState.campaignId === campaignId ? combatState : null
  const rightPanelSessionStatus = sessionState === 'PAUSED'
    ? { title: 'Sessao pausada', label: null, icon: Pause, className: 'border-amber-300/45 bg-amber-500/20 text-amber-100' }
    : campaign?.isOnline
      ? { title: 'Sessao online', label: 'ON', icon: null, className: 'border-emerald-300/45 bg-emerald-500/20 text-emerald-100' }
      : { title: 'Sessao offline', label: 'OFF', icon: null, className: 'border-red-300/45 bg-red-500/20 text-red-100' }
  const RightPanelSessionStatusIcon = rightPanelSessionStatus.icon
  const activeCombatCharacterId = activeCombat?.participants[activeCombat.activeTurnIndex]?.characterId ?? null
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
  }, [activeTool, campaignId, isMaster])

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
        const index = currentTokens.findIndex((item) => item.characterId === token.characterId)
        if (index === -1) return { campaignId, tokens: [...currentTokens, token] }

        const next = [...currentTokens]
        next[index] = token
        return { campaignId, tokens: next }
      })
      setPreparedScenes((current) =>
        current.map((scene) => {
          if (scene.id !== activeScene?.id) return scene
          const index = scene.tokens.findIndex((item) => item.characterId === payload.token.characterId)
          const tokens = index === -1 ? [...scene.tokens, payload.token] : scene.tokens.map((item) => (item.characterId === payload.token.characterId ? payload.token : item))
          return { ...scene, tokens }
        }),
      )
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
      const isOwnRemovedToken = !isMaster && payload.characterId === myCharacter?.id
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
          tokens: current.tokens.filter((token) => token.characterId !== payload.characterId),
        }
      })
      setPreparedScenes((current) =>
        current.map((scene) =>
          scene.id === activeScene?.id ? { ...scene, tokens: scene.tokens.filter((token) => token.characterId !== payload.characterId) } : scene,
        ),
      )
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

    socket.on('vtt:token:changed', onTokenChanged)
    socket.on('vtt:tokens:snapshot', onTokensSnapshot)
    socket.on('vtt:token:removed', onTokenRemoved)
    socket.on('vtt:measurement:changed', onMeasurementChanged)
    socket.on('vtt:measurement:snapshot', onMeasurementSnapshot)
    socket.on('vtt:scene:changed', onSceneChanged)
    socket.on('vtt:scene:snapshot', onSceneSnapshot)
    socket.on('vtt:combat:changed', onCombatChanged)
    socket.on('vtt:walls:changed', onWallsChanged)

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
      socket.off('vtt:measurement:changed', onMeasurementChanged)
      socket.off('vtt:measurement:snapshot', onMeasurementSnapshot)
      socket.off('vtt:scene:changed', onSceneChanged)
      socket.off('vtt:scene:snapshot', onSceneSnapshot)
      socket.off('vtt:combat:changed', onCombatChanged)
      socket.off('vtt:walls:changed', onWallsChanged)
    }
  }, [socket, campaignId, gridSettings.shape, isMaster, activeScene?.id, myCharacter?.id])

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

          setPreparedScenes((current) => current.map((item) => (item.id === scene.id ? refreshedScene : item)))
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

  function movePlayerToken(token: VttPlayerToken, position: VttPlayerToken['position']) {
    if (!campaignId || !socket) return
    const isOwnerMove = sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER'
    const isMasterMove = Boolean(isMaster)
    if (!isOwnerMove && !isMasterMove) return

    const nextPosition = normalizeTokenPosition(position, gridSettings.shape, gridBounds, tokenSize)
    setTokenState((current) => {
      if (current.campaignId !== campaignId) return current
      return {
        campaignId,
        tokens: current.tokens.map((item) => (item.characterId === token.characterId ? { ...item, position: nextPosition } : item)),
      }
    })
    socket.emit('vtt:token:move', { campaignId, characterId: token.characterId, position: nextPosition })
  }

  function publishMeasurement(nextMeasurement: VttMeasurement | null) {
    if (!realtimeVttEnabled) return
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

  function startMeasurement(event: React.PointerEvent<HTMLDivElement>) {
    const point = getMeasurementPoint(event)
    if (!point) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    measuringRef.current = true

    if (gridSettings.shape === 'hex') {
      publishMeasurement({ shape: 'hex', points: [snapHexMeasurementPoint(point)], color: gridSettings.hexMeasurementColor })
      return
    }

    publishMeasurement({ shape: 'square', start: point, end: point, color: gridSettings.squareMeasurementColor })
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
    publishMeasurement(
      current?.shape === 'square'
        ? { ...current, end: point, color: gridSettings.squareMeasurementColor }
        : { shape: 'square', start: point, end: point, color: gridSettings.squareMeasurementColor },
    )
  }

  function finishMeasurement() {
    measuringRef.current = false
  }

  function beginMeasuredMovement(event: React.PointerEvent<HTMLButtonElement>, token: VttPlayerToken) {
    if (!event.ctrlKey || gridSettings.shape !== 'square' || !realtimeVttEnabled) return
    const canMoveToken = Boolean(isMaster) || (sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER')
    if (!canMoveToken) return
    event.preventDefault()
    event.stopPropagation()
    measuredMovementCharacterIdRef.current = token.characterId
    setMeasuredMovementCharacterId(token.characterId)
    setActiveTool('measure')
    publishMeasurement({
      shape: 'square',
      start: token.position,
      end: token.position,
      color: gridSettings.squareMeasurementColor,
    })
  }

  function confirmMeasuredMovement() {
    const characterId = measuredMovementCharacterIdRef.current
    const currentMeasurement = measurementRef.current
    if (!characterId || currentMeasurement?.shape !== 'square') return false
    const token = visibleTokens.find((item) => item.characterId === characterId)
    if (!token) return false
    movePlayerToken(token, currentMeasurement.end)
    measuredMovementCharacterIdRef.current = null
    setMeasuredMovementCharacterId(null)
    publishMeasurement(null)
    setActiveTool(null)
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

    if (wallKind === 'door') {
      return {
        id: createWallId(),
        kind: 'door',
        start,
        end,
        color: doorColor,
        playerVisible: true,
        door: normalizeDoorState({ ajar: true }),
      }
    }

    return {
      id: createWallId(),
      kind: 'wall',
      start,
      end,
      color: wallColor,
      playerVisible: playersCanSeeSceneWalls,
    }
  }

  function createWallDrafts(start: VttMeasurementPoint, end: VttMeasurementPoint, rectangle: boolean) {
    if (rectangle && wallKind === 'wall') {
      return createRectangleWallSegments({
        start,
        end,
        color: wallColor,
        playerVisible: playersCanSeeSceneWalls,
        createId: createWallId,
      })
    }

    const segment = createWallSegment(start, end)
    return segment ? [segment] : []
  }

  function getWallPoint(event: React.PointerEvent<HTMLElement>) {
    const point = getMeasurementPoint(event)
    if (!point) return null
    return gridSettings.shape === 'hex' ? snapHexMeasurementPoint(point) : point
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
      if (segment.kind === 'door') return applyDoorToWalls({ walls, door: segment, createId: createWallId })
      return [...walls, segment]
    }, { recordUndo: true })
  }

  function updateDoorState(wallId: string, patch: Partial<NonNullable<VttWallSegment['door']>>) {
    updateActiveSceneWalls((walls) => walls.map((wall) => {
      if (wall.id !== wallId || wall.kind !== 'door') return wall
      return { ...wall, door: normalizeDoorState({ ...wall.door, ...patch }) }
    }))
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
    updateActiveSceneWalls((walls) => walls.map((wall) =>
      wall.kind === 'wall' ? { ...wall, playerVisible: visible } : wall,
    ))
  }

  function isEditableKeyboardTarget(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) return false
    const tagName = target.tagName.toLowerCase()
    return target.isContentEditable || tagName === 'input' || tagName === 'textarea' || tagName === 'select'
  }

  function clearTransientTools() {
    measuringRef.current = false
    wallDraftStartRef.current = null
    measurementRef.current = null
    measuredMovementCharacterIdRef.current = null
    setWallDrafts([])
    setWallContextMenu(null)
    setMeasurement(null)
    setMeasuredMovementCharacterId(null)
    setActiveTool(null)
    onGridSettingsOpenChange(false)
    if (campaignId && socket) socket.emit('vtt:measurement:update', { campaignId, measurement: null })
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
        clearTransientTools()
        event.preventDefault()
        return
      }

      if (event.code === 'Space' && !event.repeat && confirmMeasuredMovement()) event.preventDefault()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  function dragTokenCandidate(event: React.DragEvent<HTMLButtonElement>, candidate: VttTokenCandidate) {
    event.dataTransfer.setData(questhubCharacterDragType, candidate.characterId)
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
    if (!characterId) return

    const position = tokenDropPosition(event)
    if (!position) return

    event.preventDefault()
    socket.emit('vtt:token:place', { campaignId, characterId, position })
  }

  function removeToken(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    socket.emit('vtt:token:remove', { campaignId, characterId: token.characterId })
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

    socket.emit('vtt:token:visibility', { campaignId, characterId: token.characterId })
    setTokenContextMenu(null)
  }

  function startCombat() {
    if (!campaignId || !socket || !activeScene || !canStartCombat) return
    socket.emit('vtt:combat:start', { campaignId, sceneId: activeScene.id })
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

  function updateCombatInitiative(characterId: string, initiative: number | null) {
    if (!campaignId || !socket || !isMaster) return
    socket.emit('vtt:combat:update-initiative', { campaignId, characterId, initiative })
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

  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-[#08090c] text-white">
      <section
        className="absolute inset-0 min-h-0 overflow-hidden bg-[#0b0d12]"
        onClick={() => {
          setTokenContextMenu(null)
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
              if (!event.dataTransfer.types.includes(questhubCharacterDragType)) return
              event.preventDefault()
              event.dataTransfer.dropEffect = 'copy'
            }}
            onDrop={dropTokenCandidate}
            onPointerDown={startBoardPan}
            onPointerMove={updateBoardPan}
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
            <VttGridOverlay settings={zoomedGridSettings} />
            <VttWallsOverlay
              walls={activeScene?.walls ?? []}
              drafts={wallDrafts}
              gridSize={tokenSize}
              isMasterView={Boolean(isMaster)}
              canOpenWallMenu={Boolean(isMaster && activeTool !== 'walls')}
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
                  (sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER') ||
                  Boolean(isMaster)
                }
                isMasterView={Boolean(isMaster)}
                onMove={(position) => movePlayerToken(token, position)}
                onMeasureFromToken={beginMeasuredMovement}
                selectedForMeasuredMovement={measuredMovementCharacterId === token.characterId}
                onContextMenu={(contextToken, position) => setTokenContextMenu({ token: contextToken, ...position })}
                isCombatTurn={activeCombatCharacterId === token.characterId}
              />
            ))}
            <VttMeasurementOverlay measurement={measurement} gridSize={tokenSize} metersPerCell={gridSettings.metersPerCell} />
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
                className="absolute inset-0 z-[5] cursor-crosshair"
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
                    title={`${tool.label}${tool.id === 'move' ? ' (Alt)' : tool.id === 'measure' ? ' (Ctrl+clique, Espaco confirma)' : tool.id === 'walls' ? ' (Ctrl+Z desfaz)' : ''}`}
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
                      setWallDrafts([])
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
                campaignId={campaignId}
                character={myCharacter}
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
                  {(['wall', 'door'] as const).map((kind) => (
                    <button key={kind} type="button" className={['rounded-md border px-3 py-2 text-xs font-semibold transition', wallKind === kind ? 'border-sky-300/45 bg-sky-500/20 text-sky-100' : 'border-white/10 text-zinc-300 hover:bg-white/10'].join(' ')} onClick={() => setWallKind(kind)}>
                      {kind === 'wall' ? 'Parede' : 'Porta'}
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
                  Jogadores veem paredes
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
                  {availableTokenCandidates.map((candidate) => (
                    <button
                      key={candidate.characterId}
                      type="button"
                      draggable={masterCanUseVtt}
                      disabled={!masterCanUseVtt}
                      onDragStart={(event) => dragTokenCandidate(event, candidate)}
                      className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-left transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-indigo-600 text-sm font-bold text-white">
                        {candidate.avatarUrl ? <img src={candidate.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} /> : candidate.name.charAt(0).toUpperCase()}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-white">{candidate.name}</span>
                        <span className="block truncate text-[11px] uppercase text-zinc-500">
                          {candidate.role === 'NPC' ? 'NPC' : candidate.ownerName}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {tokenContextMenu && isMaster ? (
              <div
                className="pointer-events-auto fixed z-50 w-56 rounded-lg border border-white/10 bg-[#111217]/95 p-2 text-white shadow-2xl backdrop-blur"
                style={{ left: tokenContextMenu.x, top: tokenContextMenu.y }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="border-b border-white/10 px-2 pb-2">
                  <div className="truncate text-sm font-semibold">{tokenContextMenu.token.name}</div>
                  <div className="truncate text-xs text-zinc-500">Dono: {tokenContextMenu.token.ownerName}</div>
                </div>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => toggleTokenVisibility(tokenContextMenu.token)}
                >
                  {tokenContextMenu.token.hidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  {tokenContextMenu.token.hidden ? 'Tornar visivel' : 'Tornar invisivel'}
                </button>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-200 transition hover:bg-red-500/10 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => removeToken(tokenContextMenu.token)}
                >
                  <Trash2 className="h-4 w-4" />
                  Remover
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
                      { key: 'blocked' as const, label: 'Obstruída', disabled: Boolean(wallContextMenu.wall.door?.open) },
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
            {rightPanelTab === 'players' ? <section className="grid h-full content-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"><div className="flex items-center gap-2 border-b border-white/10 pb-3"><Users className="h-4 w-4 text-indigo-300" /><div><div className="text-sm font-semibold">Participantes</div><div className="text-[11px] uppercase text-zinc-500">{visibleTokens.length} token{visibleTokens.length === 1 ? '' : 's'} na cena</div></div></div><div className="rounded-md border border-white/10 bg-black/20 px-3 py-3 text-xs text-zinc-400">{myCharacter ? `${myCharacter.name} conectado como ${myCharacter.role === 'MASTER' ? 'Mestre' : 'Jogador'}.` : 'Carregando participante atual.'}</div></section> : null}
            {rightPanelTab === 'session' ? <section className="grid h-full content-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"><div className="flex items-center gap-2 border-b border-white/10 pb-3">{campaign?.isOnline ? <Eye className="h-4 w-4 text-emerald-300" /> : <EyeOff className="h-4 w-4 text-zinc-400" />}<div><div className="text-sm font-semibold">Sessao</div><div className="text-[11px] uppercase text-zinc-500">{rightPanelSessionStatus.title}</div></div></div><div className="rounded-md border border-white/10 bg-black/20 px-3 py-3 text-xs leading-relaxed text-zinc-400">{sessionState === 'PAUSED' ? 'Jogadores estao bloqueados na mesa, exceto no chat. O Mestre ainda pode preparar cenas.' : campaign?.isOnline ? 'A mesa esta disponivel para participantes ativos.' : 'A mesa esta em modo de preparacao offline.'}</div></section> : null}
            {rightPanelTab === 'scenes' && isMaster ? <SceneSidebarScenes scenes={preparedScenes} activeSceneId={activeScene?.id ?? null} onSelectScene={selectPreparedScene} onPrepareScene={() => setScenePreparationOpen(true)} /> : null}
            {rightPanelTab === 'chat' && campaignId ? <CampaignChat campaignId={campaignId} characterId={campaign?.myCharacterId} enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE')} className="h-full min-h-0" /> : null}
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
