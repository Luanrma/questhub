import { useRef, useState } from 'react'
import { Backpack } from 'lucide-react'

type Point = { x: number; y: number }

type Props = {
  campaignId: string
  actorId: string
  actorName: string
  onRestore: () => void
}

function storageKey(campaignId: string, actorId: string) {
  return `questhub:inventory-backpack-position:${campaignId}:${actorId}`
}

function defaultPosition(): Point {
  if (typeof window === 'undefined') return { x: 32, y: 96 }
  return { x: Math.max(16, window.innerWidth - 88), y: Math.max(80, window.innerHeight - 112) }
}

function readPosition(campaignId: string, actorId: string) {
  if (typeof window === 'undefined') return defaultPosition()
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey(campaignId, actorId)) ?? '')
    if (typeof parsed?.x === 'number' && typeof parsed?.y === 'number') return parsed as Point
  } catch {
    // A posição visual pode voltar ao padrão sem bloquear o inventário.
  }
  return defaultPosition()
}

function clampPosition(point: Point): Point {
  if (typeof window === 'undefined') return point
  return {
    x: Math.max(8, Math.min(window.innerWidth - 72, point.x)),
    y: Math.max(76, Math.min(window.innerHeight - 72, point.y)),
  }
}

export function FloatingInventoryBackpack({
  campaignId,
  actorId,
  actorName,
  onRestore,
}: Props) {
  const [position, setPosition] = useState(() => readPosition(campaignId, actorId))
  const dragRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    origin: Point
    moved: boolean
  } | null>(null)

  return (
    <button
      type="button"
      title={`Abrir inventário de ${actorName}`}
      aria-label={`Abrir inventário de ${actorName}`}
      className="pointer-events-auto fixed z-[115] grid h-16 w-16 touch-none place-items-center rounded-2xl border border-indigo-300/35 bg-[#151425]/95 text-indigo-100 shadow-[0_18px_55px_rgba(0,0,0,0.65)] backdrop-blur transition hover:scale-105 hover:border-indigo-200/70 hover:bg-indigo-500/20"
      style={{ left: position.x, top: position.y }}
      onClick={(event) => event.stopPropagation()}
      onPointerDown={(event) => {
        event.stopPropagation()
        event.currentTarget.setPointerCapture(event.pointerId)
        dragRef.current = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          origin: position,
          moved: false,
        }
      }}
      onPointerMove={(event) => {
        const drag = dragRef.current
        if (!drag || drag.pointerId !== event.pointerId) return
        const deltaX = event.clientX - drag.startX
        const deltaY = event.clientY - drag.startY
        if (Math.hypot(deltaX, deltaY) > 4) drag.moved = true
        setPosition(clampPosition({
          x: drag.origin.x + deltaX,
          y: drag.origin.y + deltaY,
        }))
      }}
      onPointerUp={(event) => {
        const drag = dragRef.current
        if (!drag || drag.pointerId !== event.pointerId) return
        dragRef.current = null
        const nextPosition = clampPosition(position)
        try {
          window.localStorage.setItem(storageKey(campaignId, actorId), JSON.stringify(nextPosition))
        } catch {
          // A posição visual pode permanecer somente em memória.
        }
        if (!drag.moved) onRestore()
      }}
    >
      <Backpack className="h-8 w-8" />
      <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#151425] bg-emerald-400" />
    </button>
  )
}
