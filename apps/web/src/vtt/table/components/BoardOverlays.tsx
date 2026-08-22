import { useEffect, useRef, useState } from 'react'
import type { VttGridShape } from '../../grid'
import { TokenPresentationOverlay } from '../../token-presentation/TokenPresentationOverlay'
import {
  measurementLabel,
  measurementLabelPoint,
  measurementPointToPixels,
  scenePointToRenderedPixels,
  tokenGridPositionFromPixelCenter,
  tokenPixelPosition,
} from '../domain/boardMath'
import type { VttMeasurement, VttPlayerToken, VttWallSegment } from '../domain/types'
import { resizedTokenSize, rotatedTokenDegrees } from '../domain/tokenTransform'
import { visibleWallSegmentsForRole } from '../domain/wallGeometry'
import { TokenAvatar } from './TokenAvatar'
import type { TargetMarkerStyle } from '../domain/tokenSelection'

export function VttWallsOverlay({ walls, drafts, zoomScale, isMasterView, canOpenWallMenu, onWallContextMenu }: {
  walls: VttWallSegment[]
  drafts: VttWallSegment[]
  zoomScale: number
  isMasterView: boolean
  canOpenWallMenu: boolean
  onWallContextMenu: (wall: VttWallSegment, position: { x: number; y: number }) => void
}) {
  const roleVisibleWalls = visibleWallSegmentsForRole(walls, isMasterView)
  const visibleWalls = drafts.length && isMasterView ? [...roleVisibleWalls, ...drafts] : roleVisibleWalls
  const draftIds = new Set(drafts.map((draft) => draft.id))

  return (
    <svg className="pointer-events-none absolute inset-0 z-[6] h-full w-full overflow-visible">
      {visibleWalls.map((wall) => {
        const start = scenePointToRenderedPixels(wall.start, zoomScale)
        const end = scenePointToRenderedPixels(wall.end, zoomScale)
        const isDoor = wall.kind === 'door'
        const isWindow = wall.kind === 'window'
        const passage = wall.door ?? wall.window
        const isDraft = draftIds.has(wall.id)
        const open = Boolean(passage?.open)
        const stateColor = open
          ? '#34d399'
          : passage?.locked
            ? '#fb7185'
            : passage?.blocked
              ? '#f43f5e'
              : passage?.ajar
                ? '#fbbf24'
                : isWindow ? '#38bdf8' : '#f59e0b'
        const isPassage = isDoor || isWindow
        const stroke = wall.color ?? (isPassage ? stateColor : '#e5e7eb')
        const midpoint = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 }
        const doorLabel = open ? 'A' : passage?.locked ? 'T' : passage?.blocked ? 'O' : passage?.ajar ? 'E' : 'F'

        return (
          <g key={wall.id} opacity={isDraft ? 0.68 : 1}>
            <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#030712" strokeWidth={isPassage ? 9 : 7} strokeLinecap="round" />
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={stroke}
              strokeWidth={isPassage ? 5 : 4}
              strokeDasharray={isDraft || (isPassage && open) || isWindow ? '10 8' : undefined}
              strokeLinecap="round"
            />
            {isPassage ? (
              <>
                <circle cx={midpoint.x} cy={midpoint.y} r="7" fill="#09090b" stroke={stateColor} strokeWidth="2" />
                <text x={midpoint.x} y={midpoint.y + 3.5} fill={stateColor} textAnchor="middle" className="select-none text-[9px] font-black">
                  {doorLabel}
                </text>
              </>
            ) : null}
            {canOpenWallMenu && !isDraft ? (
              <line
                className="pointer-events-auto cursor-context-menu"
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="transparent"
                strokeWidth="18"
                strokeLinecap="round"
                onContextMenu={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  onWallContextMenu(wall, { x: event.clientX, y: event.clientY })
                }}
              />
            ) : null}
          </g>
        )
      })}
    </svg>
  )
}

export function VttMeasurementOverlay({
  measurement,
  gridSize,
  metersPerCell,
  gridOffset,
}: {
  measurement: VttMeasurement | null
  gridSize: number
  metersPerCell: number
  gridOffset: { x: number; y: number }
}) {
  if (!measurement) return null

  const labelPoint = measurementPointToPixels(measurementLabelPoint(measurement), gridSize, gridOffset)
  const label = measurementLabel(measurement, metersPerCell)
  const color = measurement.color

  return (
    <>
      <svg className="pointer-events-none absolute inset-0 z-[7] h-full w-full overflow-visible">
        <polyline
          points={measurement.points.map((point) => {
            const pixels = measurementPointToPixels(point, gridSize, gridOffset)
            return `${pixels.x},${pixels.y}`
          }).join(' ')}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 6"
        />
        {measurement.points.map((point, index) => {
          const pixels = measurementPointToPixels(point, gridSize, gridOffset)
          return (
            <g key={`${point.x}-${point.y}-${index}`}>
              <circle cx={pixels.x} cy={pixels.y} r="9" fill="#111827" stroke={color} strokeWidth="3" />
              <text x={pixels.x} y={pixels.y + 3.5} fill="#fff" textAnchor="middle" className="select-none text-[9px] font-black">
                {String.fromCharCode(65 + Math.min(index, 25))}
              </text>
            </g>
          )
        })}
      </svg>
      <div className="pointer-events-none absolute z-[9] rounded-md border border-orange-300/40 bg-black/75 px-2 py-1 text-xs font-semibold text-orange-100 shadow-lg" style={{ left: labelPoint.x, top: labelPoint.y, transform: 'translate(-50%, -140%)' }}>
        {label}
      </div>
    </>
  )
}

export function PlayerToken({
  token,
  tokenSize,
  gridShape,
  gridOffset,
  gridAreaRef,
  canDrag,
  canSelect,
  canResize,
  canRotate,
  selected = false,
  transformSelected = false,
  isMasterView,
  onMove,
  onSelect,
  onSelectForTransform,
  onResize,
  onRotate,
  onMeasureFromToken,
  selectedForMeasuredMovement = false,
  onContextMenu,
  isCombatTurn = false,
  affectedRing,
  onSelectAsTarget,
  selectedAsTarget = false,
  targeted = false,
  targetMarkerStyle = 'ARROWS',
  onToggleTarget,
  appliedAreaEffectColor,
}: {
  token: VttPlayerToken
  tokenSize: number
  gridShape: VttGridShape
  gridOffset: { x: number; y: number }
  gridAreaRef: React.RefObject<HTMLDivElement | null>
  canDrag: boolean
  canSelect: boolean
  canResize: boolean
  canRotate: boolean
  selected?: boolean
  transformSelected?: boolean
  isMasterView: boolean
  onMove: (position: VttPlayerToken['position']) => void
  onSelect: (token: VttPlayerToken) => void
  onSelectForTransform: (token: VttPlayerToken) => void
  onResize: (token: VttPlayerToken, size: number) => void
  onRotate: (token: VttPlayerToken, rotation: number) => void
  onMeasureFromToken?: (event: React.PointerEvent<HTMLButtonElement>, token: VttPlayerToken) => void
  selectedForMeasuredMovement?: boolean
  onContextMenu: (token: VttPlayerToken, position: { x: number; y: number }) => void
  isCombatTurn?: boolean
  affectedRing?: { color: string; opacity: number; thicknessPx: number; gapPx: number; pulse: boolean }
  onSelectAsTarget?: (token: VttPlayerToken) => void
  selectedAsTarget?: boolean
  targeted?: boolean
  targetMarkerStyle?: TargetMarkerStyle
  onToggleTarget?: (token: VttPlayerToken) => void
  appliedAreaEffectColor?: string
}) {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, tokenX: 0, tokenY: 0 })
  const dragMovedRef = useRef(false)
  const transformRef = useRef<
    | { kind: 'resize'; pointerId: number; center: { x: number; y: number }; initialDistance: number; initialSize: number; currentSize: number }
    | { kind: 'rotate'; pointerId: number; center: { x: number; y: number }; previousAngle: number; currentRotation: number }
    | null
  >(null)
  const [dragging, setDragging] = useState(false)
  const [draftSize, setDraftSize] = useState<number | null>(null)
  const [draftRotation, setDraftRotation] = useState<number | null>(null)
  const contextMenuTimerRef = useRef<number | null>(null)
  const renderedSize = transformSelected ? draftSize ?? token.size : token.size
  const renderedRotation = transformSelected ? draftRotation ?? token.rotation : token.rotation
  const displaySize = tokenSize * renderedSize
  const basePosition = tokenPixelPosition(token, tokenSize, gridOffset)
  const position = {
    x: basePosition.x - (displaySize - tokenSize) / 2,
    y: basePosition.y - (displaySize - tokenSize) / 2,
  }
  const hasTransparentImage = Boolean(token.avatarUrl && token.color === null)

  useEffect(() => {
    return () => {
      if (contextMenuTimerRef.current !== null) {
        window.clearTimeout(contextMenuTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      const transform = transformRef.current
      if (!transform || transform.pointerId !== event.pointerId) return
      const deltaX = event.clientX - transform.center.x
      const deltaY = event.clientY - transform.center.y
      if (transform.kind === 'resize') {
        const size = resizedTokenSize(transform.initialSize, transform.initialDistance, Math.hypot(deltaX, deltaY))
        transform.currentSize = size
        setDraftSize(size)
        return
      }
      const currentAngle = Math.atan2(deltaY, deltaX)
      const rotation = rotatedTokenDegrees(transform.currentRotation, transform.previousAngle, currentAngle)
      transform.previousAngle = currentAngle
      transform.currentRotation = rotation
      setDraftRotation(rotation)
    }

    function onPointerUp(event: PointerEvent) {
      const transform = transformRef.current
      if (!transform || transform.pointerId !== event.pointerId) return
      transformRef.current = null
      if (transform.kind === 'resize') {
        onResize(token, transform.currentSize)
        setDraftSize(null)
        return
      }
      onRotate(token, transform.currentRotation)
      setDraftRotation(null)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
    }
  }, [onResize, onRotate, token])

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
      if (Math.hypot(
        event.clientX - dragStartRef.current.pointerX,
        event.clientY - dragStartRef.current.pointerY,
      ) >= 3) {
        dragMovedRef.current = true
      }

      const tokenCenter = {
        x: nextPosition.x + displaySize / 2,
        y: nextPosition.y + displaySize / 2,
      }

      onMove(tokenGridPositionFromPixelCenter(tokenCenter, gridBounds, tokenSize, gridShape, gridOffset))
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
  }, [displaySize, dragging, gridAreaRef, gridOffset, gridShape, onMove, tokenSize])

  function startDrag(event: React.PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0) return
    if (onSelectAsTarget) {
      event.preventDefault()
      event.stopPropagation()
      onSelectAsTarget(token)
      return
    }
    if (event.ctrlKey && onMeasureFromToken) {
      onMeasureFromToken(event, token)
      return
    }
    if (!canDrag) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragMovedRef.current = false
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      tokenX: position.x,
      tokenY: position.y,
    }
    setDragging(true)
  }

  function openContextMenu(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    if (!onToggleTarget) {
      onContextMenu(token, { x: event.clientX, y: event.clientY })
      return
    }

    if (contextMenuTimerRef.current !== null) {
      window.clearTimeout(contextMenuTimerRef.current)
      contextMenuTimerRef.current = null
      onToggleTarget(token)
      return
    }

    const position = { x: event.clientX, y: event.clientY }
    contextMenuTimerRef.current = window.setTimeout(() => {
      contextMenuTimerRef.current = null
      onContextMenu(token, position)
    }, 350)
  }

  function selectToken(event: React.MouseEvent<HTMLButtonElement>) {
    if (!canSelect) return
    event.preventDefault()
    event.stopPropagation()
    if (dragMovedRef.current) {
      dragMovedRef.current = false
      return
    }
    transformRef.current = null
    setDraftSize(null)
    setDraftRotation(null)
    onSelect(token)
  }

  function selectTokenForTransform(event: React.MouseEvent<HTMLButtonElement>) {
    if (!canSelect) return
    event.preventDefault()
    event.stopPropagation()
    transformRef.current = null
    setDraftSize(null)
    setDraftRotation(null)
    onSelectForTransform(token)
  }

  function tokenCenterInViewport() {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null
    return { x: bounds.left + position.x + displaySize / 2, y: bounds.top + position.y + displaySize / 2 }
  }

  function startResize(event: React.PointerEvent<HTMLButtonElement>) {
    if (!canResize || event.button !== 0) return
    const center = tokenCenterInViewport()
    if (!center) return
    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    const initialDistance = Math.max(1, Math.hypot(event.clientX - center.x, event.clientY - center.y))
    transformRef.current = { kind: 'resize', pointerId: event.pointerId, center, initialDistance, initialSize: token.size, currentSize: token.size }
  }

  function startRotation(event: React.PointerEvent<HTMLButtonElement>) {
    if (!canRotate || event.button !== 0) return
    const center = tokenCenterInViewport()
    if (!center) return
    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    transformRef.current = {
      kind: 'rotate',
      pointerId: event.pointerId,
      center,
      previousAngle: Math.atan2(event.clientY - center.y, event.clientX - center.x),
      currentRotation: token.rotation,
    }
  }

  return (<>
    {appliedAreaEffectColor ? <div
      aria-hidden="true"
      className="pointer-events-none absolute z-[8] animate-ping rounded-full"
      style={{
        left: position.x - displaySize * 0.2,
        top: position.y - displaySize * 0.2,
        width: displaySize * 1.4,
        height: displaySize * 1.4,
        border: `6px solid ${appliedAreaEffectColor}`,
        backgroundColor: `${appliedAreaEffectColor}55`,
        boxShadow: `0 0 28px 10px ${appliedAreaEffectColor}`,
      }}
    /> : null}
    {affectedRing ? <div
      aria-hidden="true"
      className={['pointer-events-none absolute z-[6] rounded-full', affectedRing.pulse ? 'animate-pulse' : ''].join(' ')}
      style={{
        left: position.x - affectedRing.gapPx - affectedRing.thicknessPx,
        top: position.y - affectedRing.gapPx - affectedRing.thicknessPx,
        width: displaySize + (affectedRing.gapPx + affectedRing.thicknessPx) * 2,
        height: displaySize + (affectedRing.gapPx + affectedRing.thicknessPx) * 2,
        border: `${affectedRing.thicknessPx}px solid ${affectedRing.color}`,
        opacity: affectedRing.opacity,
        boxShadow: `0 0 12px ${affectedRing.color}`,
      }}
    /> : null}
    {selected ? <div
      aria-label={`${token.name} selecionado`}
      className="pointer-events-none absolute z-[8] rounded-full border border-sky-100/80"
      style={{
        left: position.x - 4,
        top: position.y - 4,
        width: displaySize + 8,
        height: displaySize + 8,
        boxShadow: '0 0 0 1px rgba(56,189,248,0.24), 0 0 10px rgba(125,211,252,0.28)',
      }}
    /> : null}
    {targeted && targetMarkerStyle === 'ARROWS' ? <div
      aria-label={`${token.name} marcado como alvo`}
      className="pointer-events-none absolute z-[9]"
      style={{
        left: position.x,
        top: position.y,
        width: displaySize,
        height: displaySize,
      }}
    >
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 border-x-[7px] border-t-[11px] border-x-transparent border-t-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.9)]" />
      <span className="absolute -right-3 top-1/2 -translate-y-1/2 border-y-[7px] border-r-[11px] border-y-transparent border-r-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.9)]" />
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 border-x-[7px] border-b-[11px] border-x-transparent border-b-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.9)]" />
      <span className="absolute -left-3 top-1/2 -translate-y-1/2 border-y-[7px] border-l-[11px] border-y-transparent border-l-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.9)]" />
    </div> : null}
    {targeted && targetMarkerStyle === 'RETICLE' ? <div
      aria-label={`${token.name} marcado como alvo`}
      className="pointer-events-none absolute z-[9] rounded-full border-2 border-red-300"
      style={{
        left: position.x - 6,
        top: position.y - 6,
        width: displaySize + 12,
        height: displaySize + 12,
        boxShadow: '0 0 0 2px rgba(127,29,29,0.9), 0 0 18px rgba(248,113,113,0.85)',
      }}
    >
      <span className="absolute left-1/2 top-1/2 h-[calc(100%+10px)] -translate-x-1/2 -translate-y-1/2 border-l border-red-200/80" />
      <span className="absolute left-1/2 top-1/2 w-[calc(100%+10px)] -translate-x-1/2 -translate-y-1/2 border-t border-red-200/80" />
    </div> : null}
    <button
      type="button"
      title={`Token de ${token.name}`}
      className={[
        'pointer-events-auto absolute z-[5] grid place-items-center overflow-hidden rounded-full outline-none transition-[border-color,box-shadow,opacity,filter]',
        hasTransparentImage ? 'border-0 shadow-none' : 'border-2 shadow-2xl',
        dragging
          ? `cursor-grabbing ${hasTransparentImage ? '' : 'border-indigo-200 ring-4 ring-indigo-400/35'}`
            : canDrag
              ? `cursor-grab ${hasTransparentImage ? '' : 'border-indigo-300/80 ring-2 ring-black/50 hover:ring-indigo-300/40'}`
              : isMasterView
                ? `cursor-context-menu ${hasTransparentImage ? '' : 'border-zinc-200/70 ring-2 ring-black/50 hover:ring-indigo-300/40'}`
                : `cursor-default ${hasTransparentImage ? '' : 'border-zinc-200/70 ring-2 ring-black/50'}`,
        isCombatTurn ? 'border-red-200 ring-4 ring-red-400/50' : '',
        selectedForMeasuredMovement ? 'border-orange-200 ring-4 ring-orange-400/50' : '',
        selectedAsTarget ? 'border-violet-100 ring-4 ring-violet-400/60' : '',
        token.hidden && isMasterView ? 'opacity-35 saturate-50' : '',
      ].join(' ')}
      style={{
        left: position.x,
        top: position.y,
        width: displaySize,
        height: displaySize,
        transform: `rotate(${renderedRotation}deg)`,
        zIndex: token.layer === 'OBJECT' ? 3 : token.layer === 'OVERLAY' ? 7 : 5,
      }}
      onPointerDown={startDrag}
      onClick={selectToken}
      onDoubleClick={selectTokenForTransform}
      onContextMenu={openContextMenu}
    >
      <span className="grid h-full w-full place-items-center text-lg font-bold text-white">
        <TokenAvatar avatarUrl={token.avatarUrl} name={token.name} fallbackSeed={token.id} color={token.color} />
      </span>
    </button>
    <TokenPresentationOverlay
      tokenId={token.id}
      left={position.x}
      top={position.y}
      size={displaySize}
    />
    {transformSelected && canSelect ? <div
      aria-label={`Controles de transformacao do Token ${token.name}`}
      className="pointer-events-none absolute z-[10] border border-dashed border-violet-200/80"
      style={{
        left: position.x,
        top: position.y,
        width: displaySize,
        height: displaySize,
        transform: `rotate(${renderedRotation}deg)`,
      }}
    >
      {canResize ? ([
        ['-left-2 -top-2', 'noroeste'],
        ['-right-2 -top-2', 'nordeste'],
        ['-right-2 -bottom-2', 'sudeste'],
        ['-left-2 -bottom-2', 'sudoeste'],
      ] as const).map(([className, corner]) => <button
        key={corner}
        type="button"
        title={`Redimensionar Token pelo canto ${corner}`}
        aria-label={`Redimensionar Token pelo canto ${corner}`}
        className={`pointer-events-auto absolute h-4 w-4 rounded-full border-2 border-white bg-violet-500 shadow-[0_0_0_2px_rgba(76,29,149,0.75)] ${className} cursor-nwse-resize`}
        style={{ touchAction: 'none' }}
        onClick={(event) => event.stopPropagation()}
        onPointerDown={startResize}
      />) : null}
      {canRotate ? <>
        <span aria-hidden="true" className="absolute bottom-full left-1/2 h-10 border-l-2 border-dashed border-violet-200/90" />
        <button
          type="button"
          title="Girar Token"
          aria-label="Girar Token"
          className="pointer-events-auto absolute -top-12 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-amber-400 shadow-[0_0_0_2px_rgba(120,53,15,0.8)] cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'none' }}
          onClick={(event) => event.stopPropagation()}
          onPointerDown={startRotation}
        />
      </> : null}
    </div> : null}
  </>)
}
