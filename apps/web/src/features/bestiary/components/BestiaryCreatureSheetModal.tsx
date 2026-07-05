import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { GripHorizontal, X } from 'lucide-react'
import { Pathfinder2eBestiarySheetView } from '../../../game-systems/pathfinder-2e/bestiary/Pathfinder2eBestiarySheetView'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import { Button } from '../../../components/Button'
import { api, ApiError } from '../../../lib/api'
import { calculateBounds, clamp } from '../../../game-systems/character-sheet/drag'
import { readStoredCampaignUserSettings } from '../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'
import type { BestiaryEntry } from '../types'

type Props = {
  campaignId: string
  creatureId: string
  initialCreature?: BestiaryEntry | null
  onClose: () => void
}

function getSystemMark(system: string) {
  if (system === 'PATHFINDER_2E') return 'PF2e'
  return 'Ficha'
}

function renderCreatureSheet(creature: BestiaryEntry) {
  if (creature.system === 'PATHFINDER_2E') {
    return <Pathfinder2eBestiarySheetView creature={creature} />
  }

  return <div className="sheet-message">Ficha de bestiario nao suportada para este sistema.</div>
}

export function BestiaryCreatureSheetModal({ campaignId, creatureId, initialCreature, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, modalX: 0, modalY: 0 })
  const [box, setBox] = useState<ResizableBox>(() => ({
    x: 24,
    y: 24,
    width: Math.min(1100, window.innerWidth - 24),
    height: Math.min(760, window.innerHeight - 24),
  }))
  const [dragging, setDragging] = useState(false)
  const [creature, setCreature] = useState<BestiaryEntry | null>(initialCreature ?? null)
  const [loading, setLoading] = useState(!initialCreature)
  const [error, setError] = useState<string | null>(null)
  const [language, setLanguage] = useState<'pt-BR' | 'original'>(() => readStoredCampaignUserSettings(campaignId).gameContent.language)
  const [reloadKey, setReloadKey] = useState(0)

  const title = creature?.name ?? 'Ficha de Bestiario'
  const systemMark = useMemo(() => getSystemMark(creature?.system ?? ''), [creature?.system])

  useEffect(() => {
    if (creature?.id === creatureId && reloadKey === 0) return

    let cancelled = false

    async function loadCreature() {
      setLoading(true)
      setError(null)

      try {
        const response = await api<BestiaryEntry>(
          `/api/campaigns/${campaignId}/bestiary/${encodeURIComponent(creatureId)}?language=${encodeURIComponent(language)}`,
        )
        if (cancelled) return
        setCreature(response)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof ApiError ? err.message : 'Nao foi possivel carregar a ficha do bestiario.')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void loadCreature()

    return () => {
      cancelled = true
    }
  }, [campaignId, creature?.id, creatureId, language, reloadKey])

  function updateLanguage(nextLanguage: 'pt-BR' | 'original') {
    if (nextLanguage === language) return
    setLanguage(nextLanguage)
    setReloadKey((current) => current + 1)
  }

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
              <div className="text-xs">Ficha de bestiario</div>
            </div>
          </div>
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
            className="sheet-icon-button"
            title="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="sheet-paper">
          <div className="sheet-paper-header">
            <div>
              <div className="sheet-kicker">Bestiario</div>
              <h2>Ficha de Bestiario</h2>
            </div>
            <div className="flex items-start gap-4">
              <label className="sheet-language-select">
                <span>Idioma</span>
                <select
                  value={language}
                  onChange={(event) => updateLanguage(event.target.value === 'original' ? 'original' : 'pt-BR')}
                >
                  <option value="pt-BR">pt-BR</option>
                  <option value="original">Original</option>
                </select>
              </label>
              <div className="sheet-system-mark">{systemMark}</div>
            </div>
          </div>

          {loading ? <div className="sheet-message">Carregando ficha...</div> : null}
          {error ? <div className="sheet-error">{error}</div> : null}
          {!loading && creature ? <div className="sheet-page">{renderCreatureSheet(creature)}</div> : null}
        </div>

        <div className="sheet-footer">
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{creature?.display.subtitle ?? 'Catalogo de bestiario'}</div>
          <Button type="button" variant="ghost" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null

  return createPortal(modal, document.body)
}
