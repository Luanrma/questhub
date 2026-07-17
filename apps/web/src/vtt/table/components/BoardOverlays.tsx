import { useEffect, useRef, useState } from 'react'
import type { VttGridShape } from '../../grid'
import {
  hexPolygonPoints,
  measurementLabel,
  measurementLabelPoint,
  measurementPointToPixels,
  tokenGridPositionFromPixelCenter,
  tokenPixelPosition,
} from '../domain/boardMath'
import type { VttMeasurement, VttPlayerToken, VttWallSegment } from '../domain/types'

export function VttWallsOverlay({ walls, drafts, gridSize, isMasterView, canOpenWallMenu, onWallContextMenu }: {
  walls: VttWallSegment[]
  drafts: VttWallSegment[]
  gridSize: number
  isMasterView: boolean
  canOpenWallMenu: boolean
  onWallContextMenu: (wall: VttWallSegment, position: { x: number; y: number }) => void
}) {
  const roleVisibleWalls = isMasterView ? walls : walls.filter((wall) => wall.kind === 'door' || wall.playerVisible)
  const visibleWalls = drafts.length && isMasterView ? [...roleVisibleWalls, ...drafts] : roleVisibleWalls
  const draftIds = new Set(drafts.map((draft) => draft.id))

  return (
    <svg className="pointer-events-none absolute inset-0 z-[6] h-full w-full overflow-visible">
      {visibleWalls.map((wall) => {
        const start = measurementPointToPixels(wall.start, gridSize)
        const end = measurementPointToPixels(wall.end, gridSize)
        const isDoor = wall.kind === 'door'
        const isDraft = draftIds.has(wall.id)
        const open = Boolean(wall.door?.open)
        const stateColor = open
          ? '#34d399'
          : wall.door?.locked
            ? '#fb7185'
            : wall.door?.blocked
              ? '#f43f5e'
              : wall.door?.ajar
                ? '#fbbf24'
                : '#f59e0b'
        const stroke = wall.color ?? (isDoor ? stateColor : '#e5e7eb')
        const midpoint = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 }
        const doorLabel = open ? 'A' : wall.door?.locked ? 'T' : wall.door?.blocked ? 'O' : wall.door?.ajar ? 'E' : 'F'

        return (
          <g key={wall.id} opacity={isDraft ? 0.68 : 1}>
            <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#030712" strokeWidth={isDoor ? 9 : 7} strokeLinecap="round" />
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={stroke}
              strokeWidth={isDoor ? 5 : 4}
              strokeDasharray={isDraft || (isDoor && open) ? '10 8' : undefined}
              strokeLinecap="round"
            />
            {isDoor ? (
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
}: {
  measurement: VttMeasurement | null
  gridSize: number
  metersPerCell: number
}) {
  if (!measurement) return null

  const labelPoint = measurementPointToPixels(measurementLabelPoint(measurement), gridSize)
  const label = measurementLabel(measurement, metersPerCell)
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
  gridAreaRef,
  canDrag,
  isMasterView,
  onMove,
  onMeasureFromToken,
  selectedForMeasuredMovement = false,
  onContextMenu,
  isCombatTurn = false,
  affectedRing,
}: {
  token: VttPlayerToken
  tokenSize: number
  gridShape: VttGridShape
  gridAreaRef: React.RefObject<HTMLDivElement | null>
  canDrag: boolean
  isMasterView: boolean
  onMove: (position: VttPlayerToken['position']) => void
  onMeasureFromToken?: (event: React.PointerEvent<HTMLButtonElement>, token: VttPlayerToken) => void
  selectedForMeasuredMovement?: boolean
  onContextMenu: (token: VttPlayerToken, position: { x: number; y: number }) => void
  isCombatTurn?: boolean
  affectedRing?: { color: string; opacity: number; thicknessPx: number; gapPx: number; pulse: boolean }
}) {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, tokenX: 0, tokenY: 0 })
  const [dragging, setDragging] = useState(false)
  const initial = token.name.trim().charAt(0).toUpperCase() || '?'
  const displaySize = tokenSize * token.size
  const basePosition = tokenPixelPosition(token, tokenSize)
  const position = {
    x: basePosition.x - (displaySize - tokenSize) / 2,
    y: basePosition.y - (displaySize - tokenSize) / 2,
  }

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
        x: nextPosition.x + displaySize / 2,
        y: nextPosition.y + displaySize / 2,
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
  }, [displaySize, dragging, gridAreaRef, gridShape, onMove, tokenSize])

  function startDrag(event: React.PointerEvent<HTMLButtonElement>) {
    if (event.ctrlKey && onMeasureFromToken) {
      onMeasureFromToken(event, token)
      return
    }
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
    event.preventDefault()
    onContextMenu(token, { x: event.clientX, y: event.clientY })
  }

  return (<>
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
        isCombatTurn ? 'border-red-200 ring-4 ring-red-400/50' : '',
        selectedForMeasuredMovement ? 'border-orange-200 ring-4 ring-orange-400/50' : '',
        token.hidden && isMasterView ? 'opacity-35 saturate-50' : '',
      ].join(' ')}
      style={{
        left: position.x,
        top: position.y,
        width: displaySize,
        height: displaySize,
        transform: `rotate(${token.rotation}deg)`,
        zIndex: token.layer === 'OBJECT' ? 3 : token.layer === 'OVERLAY' ? 7 : 5,
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
  </>)
}
