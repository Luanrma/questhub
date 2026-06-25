import { useEffect, useMemo, useRef, useState } from 'react'
import { BadgeCheck, GripHorizontal, HeartPulse, Save, UserRound, X } from 'lucide-react'
import { Button } from '../../components/Button'
import { api, ApiError } from '../../lib/api'
import { calculateBounds, clamp } from './drag'
import type { CharacterSheetEnvelope, CharacterSheetResponse, GameSystem } from './types'
import { PATHFINDER_2E_PAGE_TITLES, Pathfinder2eSheetForm } from '../pathfinder-2e/character-sheet/Pathfinder2eSheetForm'

type Props = {
  characterId: string
  characterName: string
  system?: GameSystem | null
  onClose: () => void
  onSaved?: (sheet: CharacterSheetEnvelope) => void
}

function getPageTitles(sheet: CharacterSheetEnvelope | null) {
  if (sheet?.system === 'PATHFINDER_2E') return PATHFINDER_2E_PAGE_TITLES
  return ['Ficha']
}

function getPageIcon(title: string) {
  if (title === 'Identidade e Status') return UserRound
  if (title === 'Proficiências') return BadgeCheck
  return HeartPulse
}

function renderSheetForm(page: number, sheet: CharacterSheetEnvelope, onChangeSheet: (sheet: CharacterSheetEnvelope) => void) {
  if (sheet.system === 'PATHFINDER_2E') {
    return <Pathfinder2eSheetForm page={page} sheet={sheet} onChangeSheet={onChangeSheet} />
  }

  return <div className="sheet-message">Sistema de ficha não suportado.</div>
}

export function CharacterSheetModal({ characterId, characterName, system, onClose, onSaved }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [page, setPage] = useState(0)
  const [position, setPosition] = useState({ x: 24, y: 24 })
  const [dragging, setDragging] = useState(false)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, modalX: 0, modalY: 0 })
  const [sheet, setSheet] = useState<CharacterSheetEnvelope | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const pageTitles = useMemo(() => getPageTitles(sheet), [sheet])
  const canSave = Boolean(sheet && !loading && !saving)

  useEffect(() => {
    let cancelled = false

    async function loadSheet() {
      setLoading(true)
      setError(null)

      try {
        const current = await api<CharacterSheetResponse>(`/api/characters/${characterId}/sheet`)
        if (cancelled) return

        if (current.sheet) {
          setSheet(current.sheet)
          return
        }

        const defaultSystem = current.system ?? system ?? 'PATHFINDER_2E'
        const defaultSheet = await api<CharacterSheetEnvelope>(`/api/character-sheets/systems/${defaultSystem}/default`)
        if (!cancelled) setSheet(defaultSheet)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : 'Não foi possível carregar a ficha.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadSheet()

    return () => {
      cancelled = true
    }
  }, [characterId, system])

  useEffect(() => {
    setPage((current) => Math.min(current, pageTitles.length - 1))
  }, [pageTitles.length])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      const nextX = dragStartRef.current.modalX + event.clientX - dragStartRef.current.pointerX
      const nextY = dragStartRef.current.modalY + event.clientY - dragStartRef.current.pointerY
      const bounds = calculateBounds(modalRef.current)
      setPosition({
        x: clamp(nextX, bounds.minX, bounds.maxX),
        y: clamp(nextY, bounds.minY, bounds.maxY),
      })
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
      setPosition((current) => ({
        x: clamp(current.x, bounds.minX, bounds.maxX),
        y: clamp(current.y, bounds.minY, bounds.maxY),
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
      modalX: position.x,
      modalY: position.y,
    }
    setDragging(true)
  }

  async function saveSheet() {
    if (!sheet) return

    setSaving(true)
    setError(null)

    try {
      const saved = await api<{ sheet: CharacterSheetEnvelope }>(`/api/characters/${characterId}/sheet`, {
        method: 'PUT',
        body: JSON.stringify(sheet),
      })
      setSheet(saved.sheet)
      onSaved?.(saved.sheet)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Não foi possível salvar a ficha.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div ref={modalRef} className="character-sheet-window" style={{ left: position.x, top: position.y }}>
        <div className="sheet-drag-bar" onPointerDown={startDrag}>
          <div className="flex min-w-0 items-center gap-3">
            <GripHorizontal className="h-4 w-4 shrink-0" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{characterName}</div>
              <div className="text-xs">{pageTitles[page]}</div>
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
              <div className="sheet-kicker">QuestHub</div>
              <h2>Ficha de Personagem</h2>
            </div>
            <div className="sheet-system-mark">{sheet?.system === 'PATHFINDER_2E' ? 'PF2e' : 'Ficha'}</div>
          </div>

          <div className="sheet-tabs" aria-label="Seções da ficha">
            {pageTitles.map((title, index) => {
              const Icon = getPageIcon(title)
              const active = index === page
              return (
                <button
                  key={title}
                  type="button"
                  className={active ? 'sheet-tab-button sheet-tab-button-active' : 'sheet-tab-button'}
                  title={title}
                  aria-label={title}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setPage(index)}
                >
                  <Icon className="h-5 w-5" />
                </button>
              )
            })}
          </div>

          {loading ? <div className="sheet-message">Carregando ficha...</div> : null}
          {error ? <div className="sheet-error">{error}</div> : null}

          {!loading && sheet ? (
            <div className="sheet-page">
              {renderSheetForm(page, sheet, setSheet)}
            </div>
          ) : null}
        </div>

        <div className="sheet-footer">
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{pageTitles[page]}</div>
          <Button type="button" className="gap-2" disabled={!canSave} onClick={saveSheet}>
            <Save className="h-4 w-4" />
            {saving ? 'Salvando...' : 'Salvar ficha'}
          </Button>
        </div>
      </div>
    </div>
  )
}
