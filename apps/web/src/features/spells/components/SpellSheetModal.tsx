import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { GripHorizontal, X } from 'lucide-react'
import { Pathfinder2eSpellSheetView } from '../../../game-systems/pathfinder-2e/spells/Pathfinder2eSpellSheetView'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import { Button } from '../../../components/Button'
import { api, ApiError } from '../../../lib/api'
import { calculateBounds, clamp } from '../../../components/windowDrag'
import type { CampaignSpellEntry } from '../types'

type Props = {
  campaignId: string
  spellId: string
  initialSpell?: CampaignSpellEntry | null
  onClose: () => void
}

function getSystemMark(system: string) {
  if (system === 'PATHFINDER_2E') return 'PF2e'
  return 'Ficha'
}

function renderSpellSheet(spell: CampaignSpellEntry) {
  if (spell.system === 'PATHFINDER_2E') {
    return <Pathfinder2eSpellSheetView spell={spell} />
  }

  return <div className="sheet-message">Ficha de magia nao suportada para este sistema.</div>
}

export function SpellSheetModal({ campaignId, spellId, initialSpell, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, modalX: 0, modalY: 0 })
  const [box, setBox] = useState<ResizableBox>(() => ({
    x: 24,
    y: 24,
    width: Math.min(1100, window.innerWidth - 24),
    height: Math.min(760, window.innerHeight - 24),
  }))
  const [dragging, setDragging] = useState(false)
  const [spell, setSpell] = useState<CampaignSpellEntry | null>(initialSpell ?? null)
  const [loading, setLoading] = useState(!initialSpell)
  const [error, setError] = useState<string | null>(null)

  const title = spell?.name ?? 'Ficha de Magia'
  const systemMark = getSystemMark(spell?.system ?? '')

  useEffect(() => {
    if (spell?.id === spellId) return

    let cancelled = false

    async function loadSpell() {
      setLoading(true)
      setError(null)

      try {
        const response = await api<CampaignSpellEntry>(`/api/campaigns/${campaignId}/spells/${encodeURIComponent(spellId)}`)
        if (cancelled) return
        setSpell(response)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof ApiError ? err.message : 'Nao foi possivel carregar a ficha da magia.')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void loadSpell()

    return () => {
      cancelled = true
    }
  }, [campaignId, spell?.id, spellId])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      const nextX = dragStartRef.current.modalX + event.clientX - dragStartRef.current.pointerX
      const nextY = dragStartRef.current.modalY + event.clientY - dragStartRef.current.pointerY
      const bounds = calculateBounds(modalRef.current)
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

  useEffect(() => {
    function keepInsideViewport() {
      const bounds = calculateBounds(modalRef.current)
      setBox((current) => ({
        ...current,
        x: clamp(current.x, bounds.minX, bounds.maxX),
        y: clamp(current.y, bounds.minY, bounds.maxY),
        width: Math.min(current.width, window.innerWidth - 24),
        height: Math.min(current.height, window.innerHeight - 24),
      }))
    }

    keepInsideViewport()
    window.addEventListener('resize', keepInsideViewport)

    return () => {
      window.removeEventListener('resize', keepInsideViewport)
    }
  }, [])

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      modalX: box.x,
      modalY: box.y,
    }
    setDragging(true)
  }

  const modal = (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div ref={modalRef} className="character-sheet-window" style={{ left: box.x, top: box.y, width: box.width, height: box.height }}>
        <ResizableEdges box={box} setBox={setBox} limits={{ minWidth: 680, minHeight: 520, viewportMargin: 12 }} />
        <div className="sheet-drag-bar" onPointerDown={startDrag}>
          <div className="flex min-w-0 items-center gap-3">
            <GripHorizontal className="h-4 w-4 shrink-0" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{title}</div>
              <div className="text-xs">Ficha de magia</div>
            </div>
          </div>
          <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={onClose} className="sheet-icon-button" title="Fechar">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="sheet-paper">
          <div className="sheet-paper-header">
            <div>
              <div className="sheet-kicker">Livro de Magias</div>
              <h2>Ficha de Magia</h2>
            </div>
            <div className="flex items-start gap-4">
              <div className="sheet-system-mark">{systemMark}</div>
            </div>
          </div>

          {loading ? <div className="sheet-message">Carregando ficha...</div> : null}
          {error ? <div className="sheet-error">{error}</div> : null}
          {!loading && spell ? <div className="sheet-page">{renderSpellSheet(spell)}</div> : null}
        </div>

        <div className="sheet-footer">
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{spell?.display.subtitle ?? 'Livro de magias'}</div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null

  return createPortal(modal, document.body)
}
