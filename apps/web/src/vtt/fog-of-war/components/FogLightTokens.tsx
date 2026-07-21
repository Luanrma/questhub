import { Lightbulb } from 'lucide-react'
import { useState, type RefObject } from 'react'
import type { FogFixedLightSource } from '../domain/types'

export function FogLightTokens({ lights, zoomPercent, gridSize, metersPerCell, boardRef, onMove }: {
  lights: FogFixedLightSource[]
  zoomPercent: number
  gridSize: number
  metersPerCell: number
  boardRef: RefObject<HTMLDivElement | null>
  onMove: (lightId: string, position: { x: number; y: number }) => void
}) {
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const scale = zoomPercent / 100

  function move(event: React.PointerEvent<HTMLButtonElement>, lightId: string) {
    if (draggingId !== lightId) return
    const bounds = boardRef.current?.getBoundingClientRect()
    if (!bounds) return
    onMove(lightId, {
      x: Math.min(bounds.width / scale, Math.max(0, (event.clientX - bounds.left) / scale)),
      y: Math.min(bounds.height / scale, Math.max(0, (event.clientY - bounds.top) / scale)),
    })
  }

  return <div className="pointer-events-none absolute inset-0 z-[19]">
    {lights.flatMap((light, index) => {
      const rangePixels = light.rangeMeters / Math.max(0.01, metersPerCell) * gridSize
      return [<div
        key={`range:${light.id}`}
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full border border-dashed border-amber-300/60 bg-amber-300/[0.03]"
        style={{
          left: light.position.x * scale - rangePixels,
          top: light.position.y * scale - rangePixels,
          width: rangePixels * 2,
          height: rangePixels * 2,
        }}
      />, <button
      key={light.id}
      type="button"
      title={`Lâmpada ${index + 1} — arraste para reposicionar`}
      aria-label={`Reposicionar lâmpada ${index + 1}`}
      className={[
        'pointer-events-auto absolute grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 shadow-[0_3px_14px_rgba(0,0,0,.65)]',
        light.enabled ? 'border-amber-200 bg-amber-500/90 text-zinc-950' : 'border-zinc-400 bg-zinc-700 text-zinc-300',
        draggingId === light.id ? 'cursor-grabbing ring-4 ring-amber-300/30' : 'cursor-grab hover:scale-110',
      ].join(' ')}
      style={{ left: light.position.x * scale, top: light.position.y * scale, touchAction: 'none' }}
      onPointerDown={(event) => {
        if (event.button !== 0) return
        event.preventDefault()
        event.stopPropagation()
        event.currentTarget.setPointerCapture(event.pointerId)
        setDraggingId(light.id)
      }}
      onPointerMove={(event) => move(event, light.id)}
      onPointerUp={(event) => {
        move(event, light.id)
        setDraggingId(null)
      }}
      onPointerCancel={() => setDraggingId(null)}
      onClick={(event) => event.stopPropagation()}
    ><Lightbulb className="h-4 w-4" /></button>]
    })}
  </div>
}
