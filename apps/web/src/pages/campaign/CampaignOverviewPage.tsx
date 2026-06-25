import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Grid3X3, MousePointer2, Move, Palette, Plus, Ruler, SlidersHorizontal, Users, X, ZoomIn, ZoomOut } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CampaignChat } from '../../components/CampaignChat'
import { useSession } from '../../contexts/SessionContext'
import type { VttGridSettings, VttGridShape } from '../../vtt/grid'

const gridSizeLimits = { min: 24, max: 96 }
const gridLineWidthLimits = { min: 1, max: 4 }

const toolButtons = [
  { label: 'Selecionar', icon: MousePointer2 },
  { label: 'Mover', icon: Move },
  { label: 'Medir', icon: Ruler },
  { label: 'Grid', icon: Grid3X3 },
]

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

  return (
    <div className="absolute left-24 top-20 z-30 w-[min(360px,calc(100vw-48px))] rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl backdrop-blur">
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
  myCharacter: {
    id: string
    name: string
    avatarUrl: string | null
    role: 'MASTER' | 'PLAYER'
    status: 'ACTIVE' | 'PENDING'
  } | null
  playerTokenRequest: number
  onGridSettingsChange: (settings: VttGridSettings) => void
  onGridSettingsOpenChange: (open: boolean) => void
}

type VttPlayerToken = {
  id: string
  characterId: string
  name: string
  avatarUrl: string | null
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

function closestGridCenterPosition(bounds: VttGridBounds, gridSize: number, gridShape: VttGridShape) {
  const center = {
    x: bounds.width / 2 / gridSize,
    y: bounds.height / 2 / gridSize,
  }

  return normalizeTokenPosition(center, gridShape, bounds, gridSize)
}

function PlayerToken({
  token,
  tokenSize,
  gridShape,
  gridAreaRef,
  canDrag,
  onMove,
}: {
  token: VttPlayerToken
  tokenSize: number
  gridShape: VttGridShape
  gridAreaRef: React.RefObject<HTMLElement | null>
  canDrag: boolean
  onMove: (position: VttPlayerToken['position']) => void
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

  return (
    <button
      type="button"
      title={`Token de ${token.name}`}
      className={[
        'absolute z-20 grid place-items-center overflow-hidden rounded-full border-2 shadow-2xl outline-none transition',
        dragging
          ? 'cursor-grabbing border-indigo-200 ring-4 ring-indigo-400/35'
          : canDrag
            ? 'cursor-grab border-indigo-300/80 ring-2 ring-black/50 hover:ring-indigo-300/40'
            : 'cursor-default border-zinc-200/70 ring-2 ring-black/50',
      ].join(' ')}
      style={{
        left: position.x,
        top: position.y,
        width: tokenSize,
        height: tokenSize,
      }}
      onPointerDown={startDrag}
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
  myCharacter,
  playerTokenRequest,
  onGridSettingsChange,
  onGridSettingsOpenChange,
}: CampaignOverviewPageProps) {
  const { campaignId } = useParams()
  const { campaigns, socket } = useSession()
  const gridAreaRef = useRef<HTMLElement | null>(null)
  const handledPlayerTokenRequestRef = useRef(0)
  const [tokenState, setTokenState] = useState<VttTokenState>({ campaignId: null, tokens: [] })
  const [gridBounds, setGridBounds] = useState<VttGridBounds>({ width: 0, height: 0 })

  const campaign = campaigns.find((item) => item.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const tokenSize = getTokenSize(gridSettings)
  const visibleToolButtons = canConfigureGrid ? toolButtons : toolButtons.filter((tool) => tool.label !== 'Grid')
  const playerTokens = tokenState.campaignId === campaignId ? tokenState.tokens : []

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
    if (!socket || !campaignId) return

    function onTokenChanged(payload: VttTokenChangedPayload) {
      if (payload.campaignId !== campaignId) return

      setTokenState((current) => {
        const token = { ...payload.token, position: normalizeTokenPosition(payload.token.position, gridSettings.shape) }
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
        tokens: payload.tokens.map((token) => ({ ...token, position: normalizeTokenPosition(token.position, gridSettings.shape) })),
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

    socket.on('vtt:token:changed', onTokenChanged)
    socket.on('vtt:tokens:snapshot', onTokensSnapshot)
    socket.on('vtt:token:removed', onTokenRemoved)
    socket.emit('vtt:tokens:request', { campaignId })

    return () => {
      socket.off('vtt:token:changed', onTokenChanged)
      socket.off('vtt:tokens:snapshot', onTokensSnapshot)
      socket.off('vtt:token:removed', onTokenRemoved)
    }
  }, [socket, campaignId, gridSettings.shape])

  useEffect(() => {
    if (playerTokenRequest <= 0) return
    if (handledPlayerTokenRequestRef.current === playerTokenRequest) return
    if (!myCharacter || myCharacter.role !== 'PLAYER') return
    if (!socket || !campaignId) return
    if (!gridBounds.width || !gridBounds.height) return
    handledPlayerTokenRequestRef.current = playerTokenRequest

    socket.emit('vtt:token:update', {
      campaignId,
      position: closestGridCenterPosition(gridBounds, tokenSize, gridSettings.shape),
    })
  }, [campaignId, gridBounds, gridSettings.shape, myCharacter, playerTokenRequest, socket, tokenSize])

  function movePlayerToken(token: VttPlayerToken, position: VttPlayerToken['position']) {
    if (!campaignId || !socket) return
    if (myCharacter?.id !== token.characterId || myCharacter.role !== 'PLAYER') return

    const nextPosition = normalizeTokenPosition(position, gridSettings.shape, gridBounds, tokenSize)
    setTokenState((current) => {
      if (current.campaignId !== campaignId) return current
      return {
        campaignId,
        tokens: current.tokens.map((item) => (item.characterId === token.characterId ? { ...item, position: nextPosition } : item)),
      }
    })
    socket.emit('vtt:token:update', { campaignId, position: nextPosition })
  }

  return (
    <div className="grid h-full min-h-0 grid-cols-[minmax(0,1fr)_320px] bg-[#08090c] text-white max-xl:grid-cols-1">
      <section ref={gridAreaRef} className="relative min-h-0 overflow-hidden border-r border-white/10 bg-[#0b0d12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />
        <VttGridOverlay settings={gridSettings} />
        {playerTokens.map((token) => (
          <PlayerToken
            key={token.id}
            token={token}
            tokenSize={tokenSize}
            gridShape={gridSettings.shape}
            gridAreaRef={gridAreaRef}
            canDrag={myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER'}
            onMove={(position) => movePlayerToken(token, position)}
          />
        ))}

        <div className="relative z-10 flex h-full min-h-[560px] flex-col">
          <div className="relative flex-1">
            <div className="absolute left-24 top-5 z-30 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              {visibleToolButtons.map((tool, index) => {
                const Icon = tool.icon
                const active = tool.label === 'Grid' ? gridSettingsOpen : index === 0

                return (
                  <button
                    key={tool.label}
                    type="button"
                    title={tool.label}
                    className={[
                      'flex h-10 w-10 items-center justify-center rounded-md transition',
                      active ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                    ].join(' ')}
                    onClick={() => {
                      if (tool.label === 'Grid') onGridSettingsOpenChange(true)
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                )
              })}
            </div>

            {gridSettingsOpen && canConfigureGrid ? (
              <VttGridSettingsModal
                settings={gridSettings}
                onChange={onGridSettingsChange}
                onClose={() => onGridSettingsOpenChange(false)}
              />
            ) : null}

            <div className="absolute right-5 top-5 z-30 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
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

            <div className="absolute inset-x-6 bottom-6 z-30 rounded-lg border border-white/10 bg-black/45 px-4 py-3 backdrop-blur">
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
                  {gridSettings.visible ? `${gridSettings.shape === 'square' ? 'Quadrado' : 'Hex'} ${gridSettings.size}px` : 'Oculto'}
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
