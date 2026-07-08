import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { TriangleAlert, X } from 'lucide-react'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import { ApiError, api } from '../../../lib/api'
import { calculateBounds, clamp } from '../../../game-systems/character-sheet/drag'
import type { BestiaryEntry } from '../../../features/bestiary/types'
import type { VttHazardCandidate } from '../domain/types'

type Props = {
  campaignId: string
  candidate: VttHazardCandidate
  notes: string
  onNotesChange: (notes: string) => void
  onClose: () => void
}

export function HazardEncounterPanel({ campaignId, candidate, notes, onNotesChange, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panelX: 0, panelY: 0 })
  const [box, setBox] = useState<ResizableBox>(() => ({
    x: Math.max(16, window.innerWidth - 404),
    y: 24,
    width: 380,
    height: 520,
  }))
  const [dragging, setDragging] = useState(false)
  const [entry, setEntry] = useState<BestiaryEntry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      const nextX = dragStartRef.current.panelX + event.clientX - dragStartRef.current.pointerX
      const nextY = dragStartRef.current.panelY + event.clientY - dragStartRef.current.pointerY
      const bounds = calculateBounds(panelRef.current)
      setBox((current) => ({
        ...current,
        x: clamp(nextX, bounds.minX, bounds.maxX),
        y: clamp(nextY, bounds.minY, bounds.maxY),
      }))
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
  }, [dragging])

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      panelX: box.x,
      panelY: box.y,
    }
    setDragging(true)
  }

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    api<BestiaryEntry>(`/api/campaigns/${campaignId}/bestiary/${encodeURIComponent(candidate.hazardEntryId)}`)
      .then((response) => {
        if (!cancelled) setEntry(response)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof ApiError ? err.message : 'Nao foi possivel carregar a ficha do hazard.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, candidate.hazardEntryId])

  const subtitle = [candidate.level, candidate.rarity, candidate.complexity].filter(Boolean).join(' - ') || 'Encontro manual'

  const panel = (
    <section
      ref={panelRef}
      className="pointer-events-auto fixed z-[85] flex flex-col overflow-hidden rounded-lg border border-amber-300/25 bg-[#0c0a06]/92 text-white shadow-2xl backdrop-blur-xl"
      style={{ left: box.x, top: box.y, width: box.width, height: box.height }}
    >
      <ResizableEdges box={box} setBox={setBox} limits={{ minWidth: 320, minHeight: 360, viewportMargin: 16 }} />

      <div
        className="flex cursor-grab items-center justify-between gap-3 border-b border-amber-300/15 px-4 py-3 active:cursor-grabbing"
        onPointerDown={startDrag}
      >
        <div className="flex min-w-0 items-center gap-2">
          <TriangleAlert className="h-4 w-4 shrink-0 text-amber-300" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{candidate.name}</div>
            <div className="truncate text-[11px] uppercase text-amber-200/70">{subtitle}</div>
          </div>
        </div>
        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          title="Encerrar encontro manual"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-zinc-300 transition hover:bg-red-500/10 hover:text-red-100"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid min-h-0 flex-1 gap-3 overflow-auto p-4">
        {loading ? <div className="text-xs text-zinc-400">Carregando ficha...</div> : null}
        {error ? <div className="text-xs text-red-300">{error}</div> : null}
        {!loading && !error && !entry?.display.sheet?.sections.length ? (
          <div className="text-xs text-zinc-500">Este Hazard nao possui secoes de ficha detalhadas.</div>
        ) : null}
        {!loading
          ? entry?.display.sheet?.sections.map((section) => (
              <div key={section.key} className="grid gap-1.5 rounded-md border border-white/10 bg-white/[0.03] p-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-200/80">{section.title}</div>
                <div className="grid gap-1">
                  {section.entries.map((sectionEntry) => (
                    <div key={sectionEntry.key} className="text-xs text-zinc-300">
                      <span className="font-semibold text-white">{sectionEntry.label}</span>
                      {sectionEntry.value ? <span>: {sectionEntry.value}</span> : null}
                      {sectionEntry.detail ? <div className="text-zinc-400">{sectionEntry.detail}</div> : null}
                    </div>
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>

      <div className="border-t border-amber-300/15 p-3">
        <label className="grid gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Notas do Mestre (disable, efeitos, estado)
          <textarea
            value={notes}
            onChange={(event) => onNotesChange(event.currentTarget.value)}
            rows={3}
            className="min-h-[64px] w-full resize-none rounded-md border border-white/10 bg-black/30 px-2 py-1.5 text-xs font-normal normal-case text-white outline-none transition focus:border-amber-300/60"
            placeholder="Disparado, desativado, estado atual..."
          />
        </label>
      </div>
    </section>
  )

  if (typeof document === 'undefined') return null
  return createPortal(panel, document.body)
}
