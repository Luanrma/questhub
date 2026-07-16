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

export function VttWallsOverlay({ walls, gridSize, isMasterView, editable, draft, onDoorToggle }: {
  walls: VttWallSegment[]
  gridSize: number
  isMasterView: boolean
  editable: boolean
  draft?: Pick<VttWallSegment, 'kind' | 'start' | 'end'> | null
  onDoorToggle?: (wall: VttWallSegment) => void
}) {
  const visibleWalls = isMasterView ? walls : walls.filter((wall) => wall.playerVisible)

  function renderLine(wall: Pick<VttWallSegment, 'id' | 'kind' | 'start' | 'end' | 'color' | 'door'>, preview = false) {
    const isOpenDoor = wall.kind === 'door' && wall.door?.open
    return <line
      key={wall.id}
      x1={wall.start.x * gridSize}
      y1={wall.start.y * gridSize}
      x2={wall.end.x * gridSize}
      y2={wall.end.y * gridSize}
      stroke={wall.color ?? (wall.kind === 'door' ? '#f59e0b' : '#ef4444')}
      strokeWidth={wall.kind === 'door' ? 6 : 4}
      strokeLinecap="round"
      strokeDasharray={preview || isOpenDoor ? '10 7' : undefined}
      opacity={preview ? 0.7 : isOpenDoor ? 0.55 : 0.95}
      className={editable && wall.kind === 'door' ? 'pointer-events-auto cursor-pointer' : undefined}
      onClick={editable && wall.kind === 'door' && onDoorToggle ? () => onDoorToggle(wall as VttWallSegment) : undefined}
    />
  }

  return <svg className="pointer-events-none absolute inset-0 z-[6] h-full w-full overflow-visible">
    {visibleWalls.map((wall) => renderLine(wall))}
    {draft ? renderLine({ id: 'wall-draft', ...draft }, true) : null}
  </svg>
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
  onContextMenu,
  isCombatTurn = false,
}: {
  token: VttPlayerToken
  tokenSize: number
  gridShape: VttGridShape
  gridAreaRef: React.RefObject<HTMLDivElement | null>
  canDrag: boolean
  isMasterView: boolean
  onMove: (position: VttPlayerToken['position']) => void
  onContextMenu: (token: VttPlayerToken, position: { x: number; y: number }) => void
  isCombatTurn?: boolean
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
        isCombatTurn ? 'border-red-200 ring-4 ring-red-400/50' : '',
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
