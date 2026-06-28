import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  CircleUserRound,
  Dice5,
  Eye,
  EyeOff,
  Grid3X3,
  MousePointer2,
  Move,
  Palette,
  Plus,
  Ruler,
  SlidersHorizontal,
  Trash2,
  Users,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CampaignChat } from '../../components/CampaignChat'
import { useSession } from '../../contexts/SessionContext'
import { api } from '../../lib/api'
import { VttDiceControls } from '../../vtt/dice-roller'
import { squareMetersAllowedValues, type VttGridSettings, type VttGridShape } from '../../vtt/grid'

const gridSizeLimits = { min: 24, max: 96 }
const gridLineWidthLimits = { min: 1, max: 4 }

type VttToolId = 'select' | 'move' | 'measure' | 'grid' | 'dice' | 'tokens'

const toolButtons = [
  { id: 'select', label: 'Selecionar', icon: MousePointer2 },
  { id: 'move', label: 'Mover', icon: Move },
  { id: 'measure', label: 'Medir', icon: Ruler },
  { id: 'dice', label: 'Dados', icon: Dice5 },
  { id: 'tokens', label: 'Tokens', icon: CircleUserRound },
  { id: 'grid', label: 'Grid', icon: Grid3X3 },
] as const

function createHexGridDataUrl(settings: VttGridSettings) {
  const hexWidth = settings.size
  const radius = hexWidth / Math.sqrt(3)
  const rowStep = radius * 1.5
  const patternWidth = hexWidth * 2
  const patternHeight = rowStep * 2
  const halfWidth = hexWidth / 2
  const halfRadius = radius / 2

  function hexPath(centerX: number, centerY: number) {
    return [
      `M ${centerX} ${centerY - radius}`,
      `L ${centerX + halfWidth} ${centerY - halfRadius}`,
      `L ${centerX + halfWidth} ${centerY + halfRadius}`,
      `L ${centerX} ${centerY + radius}`,
      `L ${centerX - halfWidth} ${centerY + halfRadius}`,
      `L ${centerX - halfWidth} ${centerY - halfRadius}`,
      'Z',
    ].join(' ')
  }

  const paths = [
    hexPath(0, 0),
    hexPath(hexWidth, 0),
    hexPath(patternWidth, 0),
    hexPath(halfWidth, rowStep),
    hexPath(hexWidth + halfWidth, rowStep),
    hexPath(0, patternHeight),
    hexPath(hexWidth, patternHeight),
    hexPath(patternWidth, patternHeight),
  ]

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${patternWidth}" height="${patternHeight}" viewBox="0 0 ${patternWidth} ${patternHeight}">`,
    `<path d="${paths.join(' ')}" fill="none" stroke="${settings.color}" stroke-width="${settings.lineWidth}" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`,
    '</svg>',
  ].join('')

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

function getGridStyle(settings: VttGridSettings): CSSProperties {
  if (!settings.visible) return { display: 'none' }

  if (settings.shape === 'hex') {
    const radius = settings.size / Math.sqrt(3)
    const rowStep = radius * 1.5

    return {
      backgroundImage: createHexGridDataUrl(settings),
      backgroundSize: `${settings.size * 2}px ${rowStep * 2}px`,
      opacity: 0.72,
    }
  }

  return {
    backgroundImage: [
      `linear-gradient(${settings.color} ${settings.lineWidth}px, transparent ${settings.lineWidth}px)`,
      `linear-gradient(90deg, ${settings.color} ${settings.lineWidth}px, transparent ${settings.lineWidth}px)`,
    ].join(', '),
    backgroundSize: `${settings.size}px ${settings.size}px`,
    opacity: 0.72,
  }
}

function VttGridOverlay({ settings }: { settings: VttGridSettings }) {
  return <div className="absolute inset-0 pointer-events-none" style={getGridStyle(settings)} />
}

function VttGridSettingsModal({
  settings,
  onChange,
  onClose,
}: {
  settings: VttGridSettings
  onChange: (settings: VttGridSettings) => void
  onClose: () => void
}) {
  function updateSetting<Key extends keyof VttGridSettings>(key: Key, value: VttGridSettings[Key]) {
    onChange({ ...settings, [key]: value })
  }

  const squareMetersIndex = Math.max(0, squareMetersAllowedValues.indexOf(settings.squareMeters))

  return (
    <div className="pointer-events-auto absolute left-24 top-20 z-30 w-[min(360px,calc(100vw-48px))] rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-indigo-300" />
          <h2 className="truncate text-sm font-semibold">Configurar grid</h2>
        </div>
        <button
          type="button"
          title="Fechar"
          className="rounded-md p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 p-4">
        <label className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm">
          <span className="text-zinc-200">Mostrar grid</span>
          <input
            type="checkbox"
            className="h-4 w-4 accent-indigo-500"
            checked={settings.visible}
            onChange={(event) => updateSetting('visible', event.target.checked)}
          />
        </label>

        <div className="grid gap-2">
          <span className="text-xs font-semibold uppercase text-zinc-400">Formato</span>
          <div className="grid grid-cols-2 gap-2">
            {[
              ['square', 'Quadrado'],
              ['hex', 'Hexagonal'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={[
                  'rounded-md border px-3 py-2 text-sm font-semibold transition',
                  settings.shape === value
                    ? 'border-indigo-300/40 bg-indigo-500/20 text-indigo-100'
                    : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10 hover:text-white',
                ].join(' ')}
                onClick={() => updateSetting('shape', value as VttGridShape)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <label className="grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-zinc-200">Tamanho</span>
            <span className="text-zinc-400">{settings.size}px</span>
          </div>
          <input
            type="range"
            min={gridSizeLimits.min}
            max={gridSizeLimits.max}
            value={settings.size}
            className="accent-indigo-500"
            onChange={(event) => updateSetting('size', Number(event.target.value))}
          />
        </label>

        {settings.shape === 'square' ? (
          <label className="grid gap-2 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-zinc-200">Area do quadrado</span>
              <span className="text-zinc-400">{settings.squareMeters}m²</span>
            </div>
            <input
              type="range"
              min={0}
              max={squareMetersAllowedValues.length - 1}
              value={squareMetersIndex}
              className="accent-indigo-500"
              onChange={(event) => updateSetting('squareMeters', squareMetersAllowedValues[Number(event.target.value)])}
            />
          </label>
        ) : null}

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            {settings.shape === 'square' ? 'Cor do tracejado' : 'Cor da pintura'}
          </span>
          <input
            type="color"
            value={settings.shape === 'square' ? settings.squareMeasurementColor : settings.hexMeasurementColor}
            className="h-9 w-14 rounded border border-white/10 bg-transparent p-1"
            onChange={(event) =>
              updateSetting(settings.shape === 'square' ? 'squareMeasurementColor' : 'hexMeasurementColor', event.target.value)
            }
          />
        </label>

        <label className="grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-zinc-200">Espessura</span>
            <span className="text-zinc-400">{settings.lineWidth}px</span>
          </div>
          <input
            type="range"
            min={gridLineWidthLimits.min}
            max={gridLineWidthLimits.max}
            value={settings.lineWidth}
            className="accent-indigo-500"
            onChange={(event) => updateSetting('lineWidth', Number(event.target.value))}
          />
        </label>

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            Cor
          </span>
          <input
            type="color"
            value={settings.color}
            className="h-9 w-14 rounded border border-white/10 bg-transparent p-1"
            onChange={(event) => updateSetting('color', event.target.value)}
          />
        </label>
      </div>
    </div>
  )
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
  onGridSettingsChange: (settings: VttGridSettings) => void
  onGridSettingsOpenChange: (open: boolean) => void
}

type VttPlayerToken = {
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

type VttTokenChangedPayload = {
  campaignId: string
  token: VttPlayerToken
}

type VttTokensSnapshotPayload = {
  campaignId: string
  tokens: VttPlayerToken[]
  sessionState?: 'ACTIVE' | 'PAUSED' | null
}

type VttTokenRemovedPayload = {
  campaignId: string
  characterId: string
}

type VttTokenState = {
  campaignId: string | null
  tokens: VttPlayerToken[]
}

type VttGridBounds = {
  width: number
  height: number
}

type VttMeasurementPoint = {
  x: number
  y: number
}

type VttMeasurement =
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

type VttMeasurementChangedPayload = {
  campaignId: string
  measurement: VttMeasurement | null
}

type VttTokenCandidate = {
  characterId: string
  name: string
  avatarUrl: string | null
  role: 'PLAYER' | 'NPC'
  ownerUserId: string
  ownerName: string
}

type VttTokenContextMenu = {
  token: VttPlayerToken
  x: number
  y: number
}

const hexRowStepUnits = Math.sqrt(3) / 2

function getTokenSize(gridSettings: VttGridSettings) {
  return gridSettings.size
}

function clampNumber(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min
  return Math.min(Math.max(value, min), Math.max(min, max))
}

function clampTokenGridPosition(position: VttPlayerToken['position'], bounds: VttGridBounds, gridSize: number) {
  const maxX = bounds.width / gridSize - 0.5
  const maxY = bounds.height / gridSize - 0.5

  return {
    x: clampNumber(position.x, 0.5, maxX),
    y: clampNumber(position.y, 0.5, maxY),
  }
}

function snapSquareTokenPosition(position: VttPlayerToken['position']) {
  return {
    x: Math.floor(position.x) + 0.5,
    y: Math.floor(position.y) + 0.5,
  }
}

function isTokenCenterVisible(center: VttPlayerToken['position'], bounds: VttGridBounds, gridSize: number) {
  const pixelCenter = {
    x: center.x * gridSize,
    y: center.y * gridSize,
  }

  return (
    pixelCenter.x >= gridSize / 2 &&
    pixelCenter.y >= gridSize / 2 &&
    pixelCenter.x <= bounds.width - gridSize / 2 &&
    pixelCenter.y <= bounds.height - gridSize / 2
  )
}

function snapHexTokenPosition(position: VttPlayerToken['position'], bounds?: VttGridBounds, gridSize?: number) {
  const rowEstimate = Math.round(position.y / hexRowStepUnits)
  let closest = { x: 0.5, y: hexRowStepUnits }
  let closestDistance = Number.POSITIVE_INFINITY

  for (let row = Math.max(0, rowEstimate - 3); row <= rowEstimate + 3; row += 1) {
    const rowOffset = row % 2 === 0 ? 0 : 0.5
    const colEstimate = Math.round(position.x - rowOffset)

    for (let col = Math.max(0, colEstimate - 3); col <= colEstimate + 3; col += 1) {
      const candidate = {
        x: col + rowOffset,
        y: row * hexRowStepUnits,
      }

      if (bounds && gridSize && !isTokenCenterVisible(candidate, bounds, gridSize)) continue

      const distance = (candidate.x - position.x) ** 2 + (candidate.y - position.y) ** 2
      if (distance >= closestDistance) continue

      closest = candidate
      closestDistance = distance
    }
  }

  return closest
}

function snapTokenGridPosition(
  position: VttPlayerToken['position'],
  gridShape: VttGridShape,
  bounds?: VttGridBounds,
  gridSize?: number,
) {
  if (gridShape === 'hex') return snapHexTokenPosition(position, bounds, gridSize)
  return snapSquareTokenPosition(position)
}

function normalizeTokenPosition(
  position: VttPlayerToken['position'],
  gridShape: VttGridShape,
  bounds?: VttGridBounds,
  gridSize?: number,
) {
  if (bounds && gridSize) return snapTokenGridPosition(clampTokenGridPosition(position, bounds, gridSize), gridShape, bounds, gridSize)

  return {
    x: Math.max(0, Number.isFinite(position.x) ? position.x : 0),
    y: Math.max(0, Number.isFinite(position.y) ? position.y : 0),
  }
}

function normalizeTableToken(token: VttPlayerToken, gridShape: VttGridShape) {
  return {
    ...token,
    ownerUserId: token.ownerUserId ?? '',
    ownerName: token.ownerName ?? token.name,
    role: token.role ?? 'PLAYER',
    hidden: Boolean(token.hidden),
    position: normalizeTokenPosition(token.position, gridShape),
  }
}

function tokenPixelPosition(token: VttPlayerToken, gridSize: number) {
  return {
    x: token.position.x * gridSize - gridSize / 2,
    y: token.position.y * gridSize - gridSize / 2,
  }
}

function tokenGridPositionFromPixelCenter(
  position: VttPlayerToken['position'],
  bounds: VttGridBounds,
  gridSize: number,
  gridShape: VttGridShape,
) {
  return normalizeTokenPosition(
    {
      x: position.x / gridSize,
      y: position.y / gridSize,
    },
    gridShape,
    bounds,
    gridSize,
  )
}

function clampMeasurementPoint(point: VttMeasurementPoint, bounds: VttGridBounds) {
  return {
    x: clampNumber(point.x, 0, bounds.width),
    y: clampNumber(point.y, 0, bounds.height),
  }
}

function formatMeters(value: number) {
  const precision = value < 10 ? 1 : 0
  return `${value.toFixed(precision).replace('.', ',')} m`
}

function measurementLabel(measurement: VttMeasurement, squareMeters: number) {
  if (measurement.shape === 'hex') {
    const steps = Math.max(0, measurement.points.length - 1)
    return `${steps} ${steps === 1 ? 'passo' : 'passos'}`
  }

  const distanceInGridUnits = Math.hypot(measurement.end.x - measurement.start.x, measurement.end.y - measurement.start.y)
  return formatMeters(distanceInGridUnits * Math.sqrt(squareMeters))
}

function measurementLabelPoint(measurement: VttMeasurement) {
  if (measurement.shape === 'hex') {
    return measurement.points[measurement.points.length - 1] ?? { x: 0, y: 0 }
  }

  return {
    x: (measurement.start.x + measurement.end.x) / 2,
    y: (measurement.start.y + measurement.end.y) / 2,
  }
}

function areMeasurementPointsEqual(a: VttMeasurementPoint, b: VttMeasurementPoint) {
  return Math.abs(a.x - b.x) < 0.5 && Math.abs(a.y - b.y) < 0.5
}

function measurementPointToPixels(point: VttMeasurementPoint, gridSize: number) {
  return {
    x: point.x * gridSize,
    y: point.y * gridSize,
  }
}

function hexPolygonPoints(center: VttMeasurementPoint, gridSize: number) {
  const pixelCenter = measurementPointToPixels(center, gridSize)
  const radius = gridSize / Math.sqrt(3)
  const halfWidth = gridSize / 2
  const halfRadius = radius / 2

  return [
    { x: pixelCenter.x, y: pixelCenter.y - radius },
    { x: pixelCenter.x + halfWidth, y: pixelCenter.y - halfRadius },
    { x: pixelCenter.x + halfWidth, y: pixelCenter.y + halfRadius },
    { x: pixelCenter.x, y: pixelCenter.y + radius },
    { x: pixelCenter.x - halfWidth, y: pixelCenter.y + halfRadius },
    { x: pixelCenter.x - halfWidth, y: pixelCenter.y - halfRadius },
  ]
    .map((point) => `${point.x},${point.y}`)
    .join(' ')
}

function VttMeasurementOverlay({
  measurement,
  gridSize,
  squareMeters,
}: {
  measurement: VttMeasurement | null
  gridSize: number
  squareMeters: number
}) {
  if (!measurement) return null

  const labelPoint = measurementPointToPixels(measurementLabelPoint(measurement), gridSize)
  const label = measurementLabel(measurement, squareMeters)
  const color = measurement.color

  return (
    <>
      <svg className="pointer-events-none absolute inset-0 z-[7] h-full w-full overflow-visible">
        {measurement.shape === 'square' ? (
          <>
            <line
              x1={measurementPointToPixels(measurement.start, gridSize).x}
              y1={measurementPointToPixels(measurement.start, gridSize).y}
              x2={measurementPointToPixels(measurement.end, gridSize).x}
              y2={measurementPointToPixels(measurement.end, gridSize).y}
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
            {[measurement.start, measurement.end].map((point, index) => (
              <circle
                key={index}
                cx={measurementPointToPixels(point, gridSize).x}
                cy={measurementPointToPixels(point, gridSize).y}
                r="5"
                fill={color}
                stroke="#111827"
                strokeWidth="2"
              />
            ))}
          </>
        ) : (
          <>
            {measurement.points.map((point, index) => (
              <polygon
                key={`${point.x}-${point.y}-${index}`}
                points={hexPolygonPoints(point, gridSize)}
                fill={color}
                fillOpacity="0.45"
                stroke={color}
                strokeOpacity="0.9"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            ))}
          </>
        )}
      </svg>
      <div
        className="pointer-events-none absolute z-[9] rounded-md border border-orange-300/40 bg-black/75 px-2 py-1 text-xs font-semibold text-orange-100 shadow-lg"
        style={{ left: labelPoint.x, top: labelPoint.y, transform: 'translate(-50%, -140%)' }}
      >
        {label}
      </div>
    </>
  )
}

function PlayerToken({
  token,
  tokenSize,
  gridShape,
  gridAreaRef,
  canDrag,
  isMasterView,
  onMove,
  onContextMenu,
}: {
  token: VttPlayerToken
  tokenSize: number
  gridShape: VttGridShape
  gridAreaRef: React.RefObject<HTMLElement | null>
  canDrag: boolean
  isMasterView: boolean
  onMove: (position: VttPlayerToken['position']) => void
  onContextMenu: (token: VttPlayerToken, position: { x: number; y: number }) => void
}) {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, tokenX: 0, tokenY: 0 })
  const [dragging, setDragging] = useState(false)
  const initial = token.name.trim().charAt(0).toUpperCase() || '?'
  const position = tokenPixelPosition(token, tokenSize)

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      const bounds = gridAreaRef.current?.getBoundingClientRect()
      if (!bounds) return
      const gridBounds = { width: bounds.width, height: bounds.height }

      const nextPosition = {
        x: dragStartRef.current.tokenX + event.clientX - dragStartRef.current.pointerX,
        y: dragStartRef.current.tokenY + event.clientY - dragStartRef.current.pointerY,
      }

      const tokenCenter = {
        x: nextPosition.x + tokenSize / 2,
        y: nextPosition.y + tokenSize / 2,
      }

      onMove(tokenGridPositionFromPixelCenter(tokenCenter, gridBounds, tokenSize, gridShape))
    }

    function onPointerUp() {
      setDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging, gridAreaRef, gridShape, onMove, tokenSize])

  function startDrag(event: React.PointerEvent<HTMLButtonElement>) {
    if (!canDrag) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      tokenX: position.x,
      tokenY: position.y,
    }
    setDragging(true)
  }

  function openContextMenu(event: React.MouseEvent<HTMLButtonElement>) {
    if (!isMasterView) return

    event.preventDefault()
    onContextMenu(token, { x: event.clientX, y: event.clientY })
  }

  return (
    <button
      type="button"
      title={`Token de ${token.name}`}
      className={[
        'absolute z-[5] grid place-items-center overflow-hidden rounded-full border-2 shadow-2xl outline-none transition',
        dragging
          ? 'cursor-grabbing border-indigo-200 ring-4 ring-indigo-400/35'
          : canDrag
            ? 'cursor-grab border-indigo-300/80 ring-2 ring-black/50 hover:ring-indigo-300/40'
            : isMasterView
              ? 'cursor-context-menu border-zinc-200/70 ring-2 ring-black/50 hover:ring-indigo-300/40'
              : 'cursor-default border-zinc-200/70 ring-2 ring-black/50',
        token.hidden && isMasterView ? 'opacity-35 saturate-50' : '',
      ].join(' ')}
      style={{
        left: position.x,
        top: position.y,
        width: tokenSize,
        height: tokenSize,
      }}
      onPointerDown={startDrag}
      onContextMenu={openContextMenu}
    >
      {token.avatarUrl ? (
        <img src={token.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} />
      ) : (
        <span className="grid h-full w-full place-items-center bg-indigo-600 text-lg font-bold text-white">{initial}</span>
      )}
    </button>
  )
}

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
  const gridAreaRef = useRef<HTMLElement | null>(null)
  const measuringRef = useRef(false)
  const measurementRef = useRef<VttMeasurement | null>(null)
  const previousCampaignOnlineRef = useRef<{ campaignId: string | null; online: boolean }>({ campaignId: null, online: false })
  const [tokenState, setTokenState] = useState<VttTokenState>({ campaignId: null, tokens: [] })
  const [tokenCandidates, setTokenCandidates] = useState<VttTokenCandidate[]>([])
  const [tokenContextMenu, setTokenContextMenu] = useState<VttTokenContextMenu | null>(null)
  const [gridBounds, setGridBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [activeTool, setActiveTool] = useState<VttToolId | null>('select')
  const [measurement, setMeasurement] = useState<VttMeasurement | null>(null)
  const [diceClearSignal, setDiceClearSignal] = useState(0)
  const measurementGridKey = `${gridSettings.shape}:${gridSettings.size}:${gridSettings.squareMeters}`
  const measurementGridKeyRef = useRef(measurementGridKey)

  const campaign = campaigns.find((item) => item.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const sessionActive = Boolean(campaign?.isOnline && sessionState !== 'PAUSED')
  const masterCanUseVtt = Boolean(isMaster && campaign?.isOnline)
  const playerCanUseVtt = Boolean(!isMaster && sessionActive)
  const realtimeVttEnabled = Boolean(sessionActive || masterCanUseVtt)
  const canRollDice = Boolean(
    campaignId &&
      campaign?.myStatus === 'ACTIVE' &&
      myCharacter?.id &&
      socket &&
      (campaign.myRole === 'MASTER' || playerCanUseVtt),
  )
  const tokenSize = getTokenSize(gridSettings)
  const visibleToolButtons = toolButtons.filter((tool) => {
    if (tool.id === 'grid' || tool.id === 'tokens') return canConfigureGrid
    return true
  })
  const playerTokens = tokenState.campaignId === campaignId ? tokenState.tokens : []
  const visibleTokens = isMaster ? playerTokens : playerTokens.filter((token) => !token.hidden)
  const availableTokenCandidates = tokenCandidates.filter(
    (candidate) => !playerTokens.some((token) => token.characterId === candidate.characterId),
  )

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
    if (!campaignId) return
    if (campaign?.myRole !== 'MASTER') return
    if (campaign.myStatus !== 'ACTIVE') return
    if (socket) return

    connectRealtime()
  }, [campaign?.myRole, campaign?.myStatus, campaignId, connectRealtime, socket])

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
    }

    previousCampaignOnlineRef.current = { campaignId: campaignId ?? null, online }
  }, [campaign?.isOnline, campaignId])

  useEffect(() => {
    if (!socket || !campaignId) return

    function onTokenChanged(payload: VttTokenChangedPayload) {
      if (payload.campaignId !== campaignId) return

      setTokenState((current) => {
        const token = normalizeTableToken(payload.token, gridSettings.shape)
        const currentTokens = current.campaignId === campaignId ? current.tokens : []
        const index = currentTokens.findIndex((item) => item.characterId === token.characterId)
        if (index === -1) return { campaignId, tokens: [...currentTokens, token] }

        const next = [...currentTokens]
        next[index] = token
        return { campaignId, tokens: next }
      })
    }

    function onTokensSnapshot(payload: VttTokensSnapshotPayload) {
      if (payload.campaignId !== campaignId) return
      setTokenState({
        campaignId,
        tokens: payload.tokens.map((token) => normalizeTableToken(token, gridSettings.shape)),
      })
    }

    function onTokenRemoved(payload: VttTokenRemovedPayload) {
      if (payload.campaignId !== campaignId) return
      setTokenState((current) => {
        if (current.campaignId !== campaignId) return current
        return {
          campaignId,
          tokens: current.tokens.filter((token) => token.characterId !== payload.characterId),
        }
      })
    }

    function onMeasurementChanged(payload: VttMeasurementChangedPayload) {
      if (payload.campaignId !== campaignId) return
      measurementRef.current = payload.measurement
      setMeasurement(payload.measurement)
    }

    socket.on('vtt:token:changed', onTokenChanged)
    socket.on('vtt:tokens:snapshot', onTokensSnapshot)
    socket.on('vtt:token:removed', onTokenRemoved)
    socket.on('vtt:measurement:changed', onMeasurementChanged)
    socket.on('vtt:measurement:snapshot', onMeasurementChanged)
    socket.emit('vtt:tokens:request', { campaignId })
    socket.emit('vtt:measurement:request', { campaignId })

    return () => {
      socket.off('vtt:token:changed', onTokenChanged)
      socket.off('vtt:tokens:snapshot', onTokensSnapshot)
      socket.off('vtt:token:removed', onTokenRemoved)
      socket.off('vtt:measurement:changed', onMeasurementChanged)
      socket.off('vtt:measurement:snapshot', onMeasurementChanged)
    }
  }, [socket, campaignId, gridSettings.shape])

  useEffect(() => {
    if (measurementGridKeyRef.current === measurementGridKey) return
    measurementGridKeyRef.current = measurementGridKey
    measuringRef.current = false
    measurementRef.current = null
    setMeasurement(null)
    if (campaignId && socket) socket.emit('vtt:measurement:update', { campaignId, measurement: null })
  }, [campaignId, measurementGridKey, socket])

  function movePlayerToken(token: VttPlayerToken, position: VttPlayerToken['position']) {
    if (!campaignId || !socket) return
    const isOwnerMove = sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER'
    const isMasterPausedMove = sessionState === 'PAUSED' && isMaster
    if (!isOwnerMove && !isMasterPausedMove) return

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

  function dragTokenCandidate(event: React.DragEvent<HTMLButtonElement>, candidate: VttTokenCandidate) {
    event.dataTransfer.setData('application/x-questhub-character-id', candidate.characterId)
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

    const characterId = event.dataTransfer.getData('application/x-questhub-character-id')
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

  function toggleTokenVisibility(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    socket.emit('vtt:token:visibility', { campaignId, characterId: token.characterId })
    setTokenContextMenu(null)
  }

  return (
    <div className="grid h-full min-h-0 grid-cols-[minmax(0,1fr)_320px] bg-[#08090c] text-white max-xl:grid-cols-1">
      <section
        ref={gridAreaRef}
        className="relative min-h-0 overflow-hidden border-r border-white/10 bg-[#0b0d12]"
        onClick={() => setTokenContextMenu(null)}
        onDragOver={(event) => {
          if (!isMaster || !masterCanUseVtt) return
          if (!event.dataTransfer.types.includes('application/x-questhub-character-id')) return
          event.preventDefault()
          event.dataTransfer.dropEffect = 'copy'
        }}
        onDrop={dropTokenCandidate}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />
        <VttGridOverlay settings={gridSettings} />
        {visibleTokens.map((token) => (
          <PlayerToken
            key={token.id}
            token={token}
            tokenSize={tokenSize}
            gridShape={gridSettings.shape}
            gridAreaRef={gridAreaRef}
            canDrag={
              (sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER') ||
              (sessionState === 'PAUSED' && Boolean(isMaster))
            }
            isMasterView={Boolean(isMaster)}
            onMove={(position) => movePlayerToken(token, position)}
            onContextMenu={(contextToken, position) => setTokenContextMenu({ token: contextToken, ...position })}
          />
        ))}
        <VttMeasurementOverlay measurement={measurement} gridSize={tokenSize} squareMeters={gridSettings.squareMeters} />
        {activeTool === 'measure' && realtimeVttEnabled ? (
          <div
            className="absolute inset-0 z-[8] cursor-crosshair"
            onPointerDown={startMeasurement}
            onPointerMove={updateMeasurement}
            onPointerUp={finishMeasurement}
            onPointerCancel={finishMeasurement}
          />
        ) : null}

        <div className="pointer-events-none relative z-10 flex h-full min-h-[560px] flex-col">
          <div className="relative flex-1">
            <div className="pointer-events-auto absolute left-24 top-5 z-30 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
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
                      setActiveTool((current) => (current === tool.id ? null : tool.id))
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                )
              })}
            </div>

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
                settings={gridSettings}
                onChange={onGridSettingsChange}
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
                        {candidate.avatarUrl ? <img src={candidate.avatarUrl} alt="" className="h-full w-full object-cover" /> : candidate.name.charAt(0).toUpperCase()}
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

            <div className="pointer-events-auto absolute right-5 top-5 z-30 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              <button
                type="button"
                title="Diminuir zoom"
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <div className="flex h-10 min-w-16 items-center justify-center px-3 text-xs text-zinc-200">100%</div>
              <button
                type="button"
                title="Aumentar zoom"
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            <div className="pointer-events-auto absolute inset-x-6 bottom-6 z-30 rounded-lg border border-white/10 bg-black/45 px-4 py-3 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">Cena sem mapa carregado</div>
                  <div className="text-xs text-zinc-400">Grid pronto para mapas, tokens e medidas.</div>
                </div>
                {isMaster ? (
                  <Button variant="ghost" className="h-9 gap-2 px-3">
                    <Plus className="h-4 w-4" />
                    Preparar cena
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside className="min-h-0 overflow-hidden border-l border-white/10 bg-[#101116] p-5 max-xl:border-l-0 max-xl:border-t">
        <div className="flex h-full min-h-0 flex-col gap-5">
          <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-white">Jogadores</div>
              <Users className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="mt-3 rounded-md border border-dashed border-white/10 px-3 py-5 text-center text-sm text-zinc-500">
              {playerTokens.length ? playerTokens.map((token) => token.name).join(', ') : 'Nenhum token ativo na mesa.'}
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-semibold text-white">Sessão</div>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Rodada</span>
                <span className="text-zinc-200">-</span>
              </div>
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Turno</span>
                <span className="text-zinc-200">Livre</span>
              </div>
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Grid</span>
                <span className="text-zinc-200">
                  {gridSettings.visible
                    ? `${gridSettings.shape === 'square' ? `Quadrado ${gridSettings.size}px - ${gridSettings.squareMeters}m2` : `Hex ${gridSettings.size}px`}`
                    : 'Oculto'}
                </span>
              </div>
            </div>
          </section>

          {campaignId ? (
            <CampaignChat
              campaignId={campaignId}
              characterId={campaign?.myCharacterId}
              enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE')}
            />
          ) : null}
        </div>
      </aside>
    </div>
  )
}
