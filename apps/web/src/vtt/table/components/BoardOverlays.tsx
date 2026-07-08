import { useEffect, useRef, useState } from 'react'
import { TriangleAlert } from 'lucide-react'
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
import type { PublicNpcHealth, VttCombatantHealth, VttMeasurement, VttMeasurementPoint, VttMovementBudget, VttPlayerToken, VttSceneHazard } from '../domain/types'
import { predictMovement } from '../domain/movementPrediction'
import { HealthBar } from './HealthBar'

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
  isEncounterTurn = false,
  health,
  turnLocked = false,
  movementBudget = null,
  movementGridSize,
  movementMetersPerCell,
  onMovementActionCommit,
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
  isEncounterTurn?: boolean
  health?: VttCombatantHealth | PublicNpcHealth | null
  turnLocked?: boolean
  movementBudget?: VttMovementBudget | null
  movementGridSize?: number
  movementMetersPerCell?: number
  onMovementActionCommit?: () => void
}) {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, tokenX: 0, tokenY: 0 })
  const actionReferencePositionRef = useRef(token.position)
  const actionUsedMetersRef = useRef(0)
  const actionMovedRef = useRef(false)
  const encounterDragMovedRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)
  const onMovementPathCompleteRef = useRef(onMovementPathComplete)
  const [dragging, setDragging] = useState(false)
  const [encounterDragging, setEncounterDragging] = useState(false)
  const [pathAnimating, setPathAnimating] = useState(false)
  const [visualPosition, setVisualPosition] = useState(token.position)
  const initial = token.name.trim().charAt(0).toUpperCase() || '?'
  const position = tokenPixelPosition({ ...token, position: visualPosition }, tokenSize)
  // Durante o passo a passo do movimentPath, o proprio requestAnimationFrame ja interpola a
  // posicao a cada frame. Deixar a transicao CSS de left/top ligada ao mesmo tempo faz o
  // navegador suavizar por cima de um valor que ja esta suavizado, atrasando o token em
  // relacao a barra de vida (que nao tem transicao). Por isso o token e a barra usam a
  // mesma classe transition-none enquanto ha animacao em curso.
  const skipPositionTransition = dragging || encounterDragging || pathAnimating

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
      setPathAnimating(false)
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
      setPathAnimating(false)
      onMovementPathCompleteRef.current?.()
      return
    }

    const durationMs = tokenMovementDurationMs(totalDistance, movementSpeed)
    if (durationMs <= 0) {
      setVisualPosition(token.position)
      setPathAnimating(false)
      onMovementPathCompleteRef.current?.()
      return
    }

    setPathAnimating(true)
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
      setPathAnimating(false)
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

      const candidatePosition = tokenGridPositionFromPixelCenter(tokenCenter, gridBounds, tokenSize, gridShape)

      if (!movementBudget || !movementGridSize || !movementMetersPerCell) {
        onMove(candidatePosition)
        return
      }

      const prediction = predictMovement({
        from: actionReferencePositionRef.current,
        to: candidatePosition,
        cellSizePx: movementGridSize,
        metersPerCell: movementMetersPerCell,
        budget: { ...movementBudget, metersUsedThisAction: actionUsedMetersRef.current },
      })
      actionReferencePositionRef.current = prediction.position
      actionUsedMetersRef.current = prediction.metersUsedThisAction
      if (!prediction.blocked) actionMovedRef.current = true
      onMove(prediction.position)
    }

    function onPointerUp(event: PointerEvent) {
      if (encounterDragging && onEncounterSelectionDrop) {
        const dropTarget = document.elementFromPoint(event.clientX, event.clientY)
        if (dropTarget?.closest('[data-encounter-dropzone="true"]')) {
          onEncounterSelectionDrop(token)
        }
      }
      if (dragging && actionMovedRef.current) {
        onMovementActionCommit?.()
      }
      actionMovedRef.current = false
      setDragging(false)
      setEncounterDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [
    dragging,
    encounterDragging,
    gridAreaRef,
    gridShape,
    onEncounterSelectionDrop,
    onMove,
    onMovementActionCommit,
    token,
    tokenSize,
    movementBudget,
    movementGridSize,
    movementMetersPerCell,
  ])

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
    actionReferencePositionRef.current = token.position
    actionUsedMetersRef.current = movementBudget?.metersUsedThisAction ?? 0
    actionMovedRef.current = false
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
    <>
    <button
      type="button"
      title={turnLocked ? 'Aguarde seu turno para mover este token' : `Token de ${token.name}`}
      className={[
        'absolute z-[5] grid place-items-center overflow-visible rounded-full border-2 shadow-2xl outline-none',
        skipPositionTransition ? 'transition-none' : 'transition-[left,top,opacity,box-shadow,border-color] duration-300 ease-out',
        encounterDragging
          ? 'cursor-copy border-red-200 ring-4 ring-red-400/45'
          : dragging
          ? 'cursor-grabbing border-indigo-200 ring-4 ring-indigo-400/35'
            : canDrag
              ? 'cursor-grab border-indigo-300/80 ring-2 ring-black/50 hover:ring-indigo-300/40'
              : turnLocked
                ? 'cursor-not-allowed border-zinc-500/70 ring-2 ring-black/50 opacity-70'
                : isMasterView
                  ? 'cursor-context-menu border-zinc-200/70 ring-2 ring-black/50 hover:ring-indigo-300/40'
                  : canOpenContextMenu
                    ? 'cursor-context-menu border-zinc-200/70 ring-2 ring-black/50 hover:ring-indigo-300/40'
                    : 'cursor-default border-zinc-200/70 ring-2 ring-black/50',
        isEncounterTurn ? 'border-red-200 ring-4 ring-red-400/50' : '',
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
    {health ? (
      <div
        className={[
          'pointer-events-none absolute z-[5]',
          skipPositionTransition ? 'transition-none' : 'transition-[left,top] duration-300 ease-out',
        ].join(' ')}
        style={{ left: position.x, top: position.y + tokenSize + 3, width: tokenSize }}
      >
        <HealthBar health={health} size="sm" />
      </div>
    ) : null}
    </>
  )
}

export function HazardMarker({
  hazard,
  tokenSize,
  canControl,
  onOpenMenu,
  onMove,
}: {
  hazard: VttSceneHazard & { position: { x: number; y: number } }
  tokenSize: number
  canControl: boolean
  onOpenMenu: (hazard: VttSceneHazard, position: { x: number; y: number }) => void
  onMove: (hazard: VttSceneHazard, position: { x: number; y: number }) => void
}) {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, hazardX: 0, hazardY: 0 })
  const dragMovedRef = useRef(false)
  const [dragging, setDragging] = useState(false)
  const [visualPosition, setVisualPosition] = useState(hazard.position)
  const isHidden = hazard.visibility === 'HIDDEN'

  useEffect(() => {
    if (!dragging) setVisualPosition(hazard.position)
  }, [dragging, hazard.position.x, hazard.position.y])

  useEffect(() => {
    if (!dragging) return

    function onPointerMove(event: PointerEvent) {
      const deltaX = (event.clientX - dragStartRef.current.pointerX) / tokenSize
      const deltaY = (event.clientY - dragStartRef.current.pointerY) / tokenSize
      if (Math.abs(event.clientX - dragStartRef.current.pointerX) > 4 || Math.abs(event.clientY - dragStartRef.current.pointerY) > 4) {
        dragMovedRef.current = true
      }
      setVisualPosition({ x: dragStartRef.current.hazardX + deltaX, y: dragStartRef.current.hazardY + deltaY })
    }

    function onPointerUp() {
      setDragging(false)
      if (dragMovedRef.current) {
        setVisualPosition((current) => {
          onMove(hazard, current)
          return current
        })
      }
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging, hazard, onMove, tokenSize])

  const pixelX = visualPosition.x * tokenSize - tokenSize / 2
  const pixelY = visualPosition.y * tokenSize - tokenSize / 2

  function startDrag(event: React.PointerEvent<HTMLButtonElement>) {
    if (!canControl || event.button !== 0) return
    event.preventDefault()
    event.stopPropagation()
    dragMovedRef.current = false
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      hazardX: hazard.position.x,
      hazardY: hazard.position.y,
    }
    setDragging(true)
  }

  function openMenu(event: React.MouseEvent<HTMLButtonElement>) {
    if (!canControl) return
    event.preventDefault()
    event.stopPropagation()
    if (dragMovedRef.current) {
      dragMovedRef.current = false
      return
    }
    onOpenMenu(hazard, { x: event.clientX, y: event.clientY })
  }

  return (
    <button
      type="button"
      title={hazard.name}
      className={[
        'absolute grid place-items-center rounded-full border-2 text-amber-100 shadow-lg',
        dragging ? 'transition-none' : 'transition-[left,top] duration-150 ease-out',
        isHidden ? 'border-dashed border-amber-300/45 bg-amber-500/10 opacity-70' : 'border-amber-300/80 bg-amber-500/25',
        canControl ? 'cursor-grab active:cursor-grabbing' : 'cursor-default',
      ].join(' ')}
      style={{ left: pixelX, top: pixelY, width: tokenSize, height: tokenSize }}
      onPointerDown={startDrag}
      onClick={openMenu}
      onContextMenu={openMenu}
    >
      <TriangleAlert className="pointer-events-none h-1/2 w-1/2" />
    </button>
  )
}
