import { useEffect, useRef, useState } from 'react'
import type { VttGridShape } from '../../grid'
import type { VttTokenMovementSpeed } from '../../dice-roller/infrastructure/storage/diceThemeStorage'
import {
  hexPolygonPoints,
  measurementLabel,
  measurementLabelPoint,
  measurementPointToPixels,
  squareMeasurementPoints,
  tokenGridPositionFromPixelCenter,
  tokenPixelPosition,
} from '../domain/boardMath'
import type { VttMeasurement, VttMeasurementPoint, VttPlayerToken } from '../domain/types'

function tokenMovementDurationMs(totalDistance: number, speed: VttTokenMovementSpeed) {
  if (speed === 'instant') return 0

  const msPerGridUnitBySpeed: Record<Exclude<VttTokenMovementSpeed, 'instant'>, number> = {
    fast: 230,
    default: 360,
    cinematic: 550,
  }
  const msPerGridUnit = msPerGridUnitBySpeed[speed]

  return Math.min(Math.max(totalDistance * msPerGridUnit, 550), speed === 'cinematic' ? 6500 : 4500)
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
  const squarePoints = measurement.shape === 'square' ? squareMeasurementPoints(measurement) : []

  return (
    <>
      <svg className="pointer-events-none absolute inset-0 z-[7] h-full w-full overflow-visible">
        {measurement.shape === 'square' ? (
          <>
            {squarePoints.slice(1).map((point, index) => {
              const previousPoint = squarePoints[index]
              const start = measurementPointToPixels(previousPoint, gridSize)
              const end = measurementPointToPixels(point, gridSize)

              return (
                <line
                  key={`${previousPoint.x}-${previousPoint.y}-${point.x}-${point.y}-${index}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="8 6"
                />
              )
            })}
            {squarePoints.map((point, index) => (
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
  canOpenContextMenu,
  isMasterView,
  onMove,
  onContextMenu,
  selectedForEncounter = false,
  selectedForMeasuredMovement = false,
  onEncounterSelectionToggle,
  onEncounterSelectionDrop,
  onMeasureFromToken,
  movementPath,
  movementSpeed = 'default',
  onMovementPathComplete,
  isCombatTurn = false,
}: {
  token: VttPlayerToken
  tokenSize: number
  gridShape: VttGridShape
  gridAreaRef: React.RefObject<HTMLDivElement | null>
  canDrag: boolean
  canOpenContextMenu: boolean
  isMasterView: boolean
  onMove: (position: VttPlayerToken['position']) => void
  onContextMenu: (token: VttPlayerToken, position: { x: number; y: number }) => void
  selectedForEncounter?: boolean
  selectedForMeasuredMovement?: boolean
  onEncounterSelectionToggle?: (token: VttPlayerToken) => void
  onEncounterSelectionDrop?: (token: VttPlayerToken) => void
  onMeasureFromToken?: (event: React.PointerEvent<HTMLButtonElement>, token: VttPlayerToken) => void
  movementPath?: VttMeasurementPoint[]
  movementSpeed?: VttTokenMovementSpeed
  onMovementPathComplete?: () => void
  isCombatTurn?: boolean
}) {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, tokenX: 0, tokenY: 0 })
  const encounterDragMovedRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)
  const onMovementPathCompleteRef = useRef(onMovementPathComplete)
  const [dragging, setDragging] = useState(false)
  const [encounterDragging, setEncounterDragging] = useState(false)
  const [visualPosition, setVisualPosition] = useState(token.position)
  const initial = token.name.trim().charAt(0).toUpperCase() || '?'
  const position = tokenPixelPosition({ ...token, position: visualPosition }, tokenSize)

  useEffect(() => {
    onMovementPathCompleteRef.current = onMovementPathComplete
  }, [onMovementPathComplete])

  useEffect(() => {
    if (dragging || encounterDragging) {
      setVisualPosition(token.position)
      return
    }

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    if (!movementPath || movementPath.length < 2) {
      setVisualPosition(token.position)
      return
    }

    const path = movementPath
    const segmentLengths = path.slice(1).map((point, index) => {
      const previousPoint = path[index]
      return Math.hypot(point.x - previousPoint.x, point.y - previousPoint.y)
    })
    const totalDistance = segmentLengths.reduce((total, distance) => total + distance, 0)

    if (totalDistance <= 0) {
      setVisualPosition(token.position)
      onMovementPathCompleteRef.current?.()
      return
    }

    const durationMs = tokenMovementDurationMs(totalDistance, movementSpeed)
    if (durationMs <= 0) {
      setVisualPosition(token.position)
      onMovementPathCompleteRef.current?.()
      return
    }

    const startedAt = window.performance.now()

    function positionAtDistance(distance: number) {
      let travelled = 0

      for (let index = 0; index < segmentLengths.length; index += 1) {
        const segmentLength = segmentLengths[index]
        const segmentStart = path[index]
        const segmentEnd = path[index + 1]

        if (travelled + segmentLength < distance) {
          travelled += segmentLength
          continue
        }

        const progress = segmentLength === 0 ? 1 : (distance - travelled) / segmentLength
        return {
          x: segmentStart.x + (segmentEnd.x - segmentStart.x) * progress,
          y: segmentStart.y + (segmentEnd.y - segmentStart.y) * progress,
        }
      }

      return path[path.length - 1]
    }

    function animate(now: number) {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      setVisualPosition(positionAtDistance(totalDistance * progress))

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(animate)
        return
      }

      animationFrameRef.current = null
      setVisualPosition(token.position)
      onMovementPathCompleteRef.current?.()
    }

    animationFrameRef.current = window.requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [dragging, encounterDragging, movementPath, movementSpeed, token.position, token.position.x, token.position.y])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (encounterDragging) {
        const movedX = Math.abs(event.clientX - dragStartRef.current.pointerX)
        const movedY = Math.abs(event.clientY - dragStartRef.current.pointerY)
        if (movedX > 4 || movedY > 4) encounterDragMovedRef.current = true
        return
      }

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

    function onPointerUp(event: PointerEvent) {
      if (encounterDragging && onEncounterSelectionDrop) {
        const dropTarget = document.elementFromPoint(event.clientX, event.clientY)
        if (dropTarget?.closest('[data-encounter-dropzone="true"]')) {
          onEncounterSelectionDrop(token)
        }
      }
      setDragging(false)
      setEncounterDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging, encounterDragging, gridAreaRef, gridShape, onEncounterSelectionDrop, onMove, token, tokenSize])

  function startDrag(event: React.PointerEvent<HTMLButtonElement>) {
    if (event.ctrlKey && onMeasureFromToken) {
      onMeasureFromToken(event, token)
      return
    }

    if (event.shiftKey && onEncounterSelectionToggle && onEncounterSelectionDrop) {
      event.preventDefault()
      event.stopPropagation()
      event.currentTarget.setPointerCapture(event.pointerId)
      encounterDragMovedRef.current = false
      dragStartRef.current = {
        pointerX: event.clientX,
        pointerY: event.clientY,
        tokenX: position.x,
        tokenY: position.y,
      }
      setEncounterDragging(true)
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
    if (!canOpenContextMenu) return

    event.preventDefault()
    onContextMenu(token, { x: event.clientX, y: event.clientY })
  }

  function toggleEncounterSelection(event: React.MouseEvent<HTMLButtonElement>) {
    if (!event.shiftKey || !onEncounterSelectionToggle) return

    event.preventDefault()
    event.stopPropagation()
    if (encounterDragMovedRef.current) {
      encounterDragMovedRef.current = false
      return
    }
    onEncounterSelectionToggle(token)
  }

  return (
    <button
      type="button"
      title={`Token de ${token.name}`}
      className={[
        'absolute z-[5] grid place-items-center overflow-visible rounded-full border-2 shadow-2xl outline-none',
        dragging || encounterDragging ? 'transition-none' : 'transition-[left,top,opacity,box-shadow,border-color] duration-300 ease-out',
        encounterDragging
          ? 'cursor-copy border-red-200 ring-4 ring-red-400/45'
          : dragging
          ? 'cursor-grabbing border-indigo-200 ring-4 ring-indigo-400/35'
            : canDrag
              ? 'cursor-grab border-indigo-300/80 ring-2 ring-black/50 hover:ring-indigo-300/40'
              : isMasterView
                ? 'cursor-context-menu border-zinc-200/70 ring-2 ring-black/50 hover:ring-indigo-300/40'
                : canOpenContextMenu
                  ? 'cursor-context-menu border-zinc-200/70 ring-2 ring-black/50 hover:ring-indigo-300/40'
                  : 'cursor-default border-zinc-200/70 ring-2 ring-black/50',
        isCombatTurn ? 'border-red-200 ring-4 ring-red-400/50' : '',
        selectedForMeasuredMovement ? 'border-orange-200 ring-4 ring-orange-300/70 shadow-orange-500/30' : '',
        token.hidden && isMasterView ? 'opacity-35 saturate-50' : '',
      ].join(' ')}
      style={{
        left: position.x,
        top: position.y,
        width: tokenSize,
        height: tokenSize,
        borderColor: token.tokenBorderColor ?? undefined,
      }}
      onPointerDown={startDrag}
      onClick={toggleEncounterSelection}
      onContextMenu={openContextMenu}
    >
      {selectedForEncounter ? (
        <span className="pointer-events-none absolute inset-0 z-10 overflow-visible">
          <span className="absolute left-1/2 top-[-13px] h-0 w-0 -translate-x-1/2 border-x-[5px] border-t-[7px] border-x-transparent border-t-red-400" />
          <span className="absolute bottom-[-13px] left-1/2 h-0 w-0 -translate-x-1/2 border-b-[7px] border-x-[5px] border-b-red-400 border-x-transparent" />
          <span className="absolute left-[-13px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[5px] border-l-[7px] border-y-transparent border-l-red-400" />
          <span className="absolute right-[-13px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[5px] border-r-[7px] border-y-transparent border-r-red-400" />
        </span>
      ) : null}
      {selectedForMeasuredMovement ? (
        <span className="pointer-events-none absolute inset-[-8px] rounded-full border-2 border-orange-300/80 shadow-[0_0_22px_rgba(251,146,60,0.65)]" />
      ) : null}
      <span className="pointer-events-none grid h-full w-full place-items-center overflow-hidden rounded-full">
        {token.avatarUrl ? (
          <img src={token.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} />
        ) : (
          <span
            className="grid h-full w-full place-items-center text-lg font-bold text-white"
            style={{ backgroundColor: token.tokenBorderColor ?? '#4f46e5' }}
          >
            {initial}
          </span>
        )}
      </span>
    </button>
  )
}
