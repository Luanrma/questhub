import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BedDouble, Focus, GripHorizontal, Sparkles, Wand2, X } from 'lucide-react'
import { fetchCastOptions, castSpell, restSpellbook, refocusSpellbook } from '../infrastructure/spellCastingApi'
import { clampFloatingPanelPosition } from '../../shared/floatingPanel'
import type { FloatingPanelPosition } from '../../shared/floatingPanel'
import type {
  Pathfinder2eCastOptionsResponse,
  Pathfinder2eCastRequestPayload,
  Pathfinder2eCastSourcePayload,
  Pathfinder2eCastableSpellView,
} from '../types'

const CATEGORY_LABELS: Record<string, string> = {
  PREPARED: 'Preparada',
  SPONTANEOUS: 'Espontanea',
  INNATE: 'Inata',
  FOCUS: 'Foco',
}

export type Pathfinder2eAreaPlacementRequest = {
  spellName: string
  area: { type: string; valueFeet: number }
  rangeFeet: number | null
  rangeKind: Pathfinder2eCastableSpellView['rangeKind']
  cast: {
    revision: number
    entryId: string
    spellId: string
    source: Pathfinder2eCastSourcePayload
  } & Pick<Pathfinder2eCastRequestPayload, 'clientCastId'>
}

export type Pathfinder2eTargetSelectionRequest = {
  spellName: string
  targetProfile: Extract<Pathfinder2eCastableSpellView['targetProfile'], { kind: 'count' }>
  rangeFeet: number | null
  rangeKind: Pathfinder2eCastableSpellView['rangeKind']
  resolution: Pathfinder2eCastableSpellView['resolution']
  cast: {
    revision: number
    entryId: string
    spellId: string
    source: Pathfinder2eCastSourcePayload
  } & Pick<Pathfinder2eCastRequestPayload, 'clientCastId'>
}

type Props = {
  characterId: string
  casterName: string
  casterContext: { sceneId: string; casterTokenId: string } | null
  onClose: () => void
  onRequestAreaPlacement: (request: Pathfinder2eAreaPlacementRequest) => void
  onRequestTargetSelection: (request: Pathfinder2eTargetSelectionRequest) => void
  onCastCommitted: (result: { spellName: string; consumed: string }) => void
}

export function SpellCastPanel({
  characterId,
  casterName,
  casterContext,
  onClose,
  onRequestAreaPlacement,
  onRequestTargetSelection,
  onCastCommitted,
}: Props) {
  const [options, setOptions] = useState<Pathfinder2eCastOptionsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)

  const panelRef = useRef<HTMLDivElement | null>(null)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panelX: 0, panelY: 0 })
  const [position, setPosition] = useState<FloatingPanelPosition>(() => ({ x: window.innerWidth - 336, y: 64 }))
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return
      const nextX = dragStartRef.current.panelX + event.clientX - dragStartRef.current.pointerX
      const nextY = dragStartRef.current.panelY + event.clientY - dragStartRef.current.pointerY
      setPosition(clampFloatingPanelPosition({ x: nextX, y: nextY }, panelRef.current))
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
      setPosition((current) => clampFloatingPanelPosition(current, panelRef.current))
    }
    keepInsideViewport()
    window.addEventListener('resize', keepInsideViewport)
    return () => window.removeEventListener('resize', keepInsideViewport)
  }, [])

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragStartRef.current = { pointerX: event.clientX, pointerY: event.clientY, panelX: position.x, panelY: position.y }
    setDragging(true)
  }

  const reload = useCallback(() => {
    setLoading(true)
    setError(null)
    fetchCastOptions(characterId)
      .then((response) => setOptions(response))
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : 'Erro ao carregar'))
      .finally(() => setLoading(false))
  }, [characterId])

  useEffect(() => {
    reload()
  }, [reload])

  function createClientCastId() {
    return globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
  }

  async function performCast(entryId: string, spell: Pathfinder2eCastableSpellView, source: Pathfinder2eCastSourcePayload) {
    if (!options) return
    const clientCastId = createClientCastId()

    if (spell.area) {
      onRequestAreaPlacement({
        spellName: spell.name,
        area: spell.area,
        rangeFeet: spell.rangeFeet,
        rangeKind: spell.rangeKind,
        cast: { clientCastId, revision: options.revision, entryId, spellId: spell.spellId, source },
      })
      return
    }

    if (!spell.area && spell.targetProfile.kind === 'count') {
      onRequestTargetSelection({
        spellName: spell.name,
        targetProfile: spell.targetProfile,
        rangeFeet: spell.rangeFeet,
        rangeKind: spell.rangeKind,
        resolution: spell.resolution,
        cast: { clientCastId, revision: options.revision, entryId, spellId: spell.spellId, source },
      })
      return
    }

    setBusy(true)
    setError(null)
    try {
      const result = await castSpell(characterId, {
        clientCastId,
        revision: options.revision,
        entryId,
        spellId: spell.spellId,
        source,
        caster: casterContext ?? undefined,
      })
      setFeedback(`${result.spellName} conjurada — consumo: ${result.consumed}`)
      onCastCommitted({ spellName: result.spellName, consumed: result.consumed })
      reload()
    } catch (castError) {
      setError(castError instanceof Error ? castError.message : 'Erro ao conjurar')
      reload()
    } finally {
      setBusy(false)
    }
  }

  async function performRecovery(action: 'rest' | 'refocus') {
    if (!options) return
    setBusy(true)
    setError(null)
    try {
      if (action === 'rest') {
        await restSpellbook(characterId, options.revision)
        setFeedback('Descanso diario: recursos restaurados')
      } else {
        await refocusSpellbook(characterId, options.revision)
        setFeedback('Refocar: +1 ponto de foco')
      }
      reload()
    } catch (recoveryError) {
      setError(recoveryError instanceof Error ? recoveryError.message : 'Erro ao recuperar recursos')
      reload()
    } finally {
      setBusy(false)
    }
  }

  function castButtons(entryId: string, spell: Pathfinder2eCastableSpellView) {
    const resource = spell.resource

    if (spell.isCantrip) {
      return (
        <CastButton disabled={busy} onClick={() => performCast(entryId, spell, { kind: 'cantrip' })}>
          Conjurar (truque)
        </CastButton>
      )
    }

    if (resource.kind === 'prepared') {
      const freeSlots = resource.slots.filter((slot) => !slot.expended)
      if (freeSlots.length === 0) return <UnavailableNote>slots gastos</UnavailableNote>
      return (
        <>
          {freeSlots.map((slot) => (
            <CastButton
              key={`${slot.rank}:${slot.slotIndex}`}
              disabled={busy}
              onClick={() => performCast(entryId, spell, { kind: 'prepared', rank: slot.rank, slotIndex: slot.slotIndex })}
            >
              {`Conjurar R${slot.rank}`}
            </CastButton>
          ))}
        </>
      )
    }

    if (resource.kind === 'spontaneous') {
      const castableRanks = resource.byRank.filter((slot) => slot.rank >= spell.rank && slot.used < slot.max)
      if (castableRanks.length === 0) return <UnavailableNote>sem slots livres</UnavailableNote>
      return (
        <>
          {castableRanks.map((slot) => (
            <CastButton
              key={slot.rank}
              disabled={busy}
              onClick={() => performCast(entryId, spell, { kind: 'spontaneous', rank: slot.rank })}
            >
              {`R${slot.rank} (${slot.max - slot.used} livre${slot.max - slot.used === 1 ? '' : 's'})`}
            </CastButton>
          ))}
        </>
      )
    }

    if (resource.kind === 'focus') {
      return (
        <CastButton disabled={busy} onClick={() => performCast(entryId, spell, { kind: 'focus' })}>
          Conjurar (1 PF)
        </CastButton>
      )
    }

    if (resource.kind === 'innate') {
      if (resource.usesPerDay === 'at-will') {
        return (
          <CastButton disabled={busy} onClick={() => performCast(entryId, spell, { kind: 'innate' })}>
            Conjurar (a vontade)
          </CastButton>
        )
      }
      const remaining = resource.usesPerDay - resource.used
      if (remaining <= 0) return <UnavailableNote>usos esgotados</UnavailableNote>
      return (
        <CastButton disabled={busy} onClick={() => performCast(entryId, spell, { kind: 'innate' })}>
          {`Conjurar (${remaining}/${resource.usesPerDay})`}
        </CastButton>
      )
    }

    return <UnavailableNote>{resource.kind === 'unavailable' ? resource.reason : 'indisponivel'}</UnavailableNote>
  }

  const panel = (
    <div
      ref={panelRef}
      className="pointer-events-auto fixed z-50 flex max-h-[80vh] w-80 flex-col rounded-lg border border-white/10 bg-[#111217]/95 text-white shadow-2xl backdrop-blur"
      style={{ left: position.x, top: position.y }}
    >
      <div
        className="flex cursor-move items-center justify-between border-b border-white/10 px-3 py-2"
        onPointerDown={startDrag}
      >
        <div className="flex min-w-0 items-center gap-2 text-sm font-semibold">
          <GripHorizontal className="h-4 w-4 shrink-0 text-zinc-500" />
          <Wand2 className="h-4 w-4 shrink-0 text-indigo-300" />
          <span className="truncate">Lancar magia — {casterName}</span>
        </div>
        <button
          type="button"
          className="rounded p-1 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <button
          type="button"
          disabled={busy || loading}
          className="flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => performRecovery('rest')}
        >
          <BedDouble className="h-3.5 w-3.5" /> Descanso diario
        </button>
        <button
          type="button"
          disabled={busy || loading}
          className="flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => performRecovery('refocus')}
        >
          <Focus className="h-3.5 w-3.5" /> Refocar
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-2">
        {loading ? <p className="py-4 text-center text-sm text-zinc-400">Carregando...</p> : null}
        {error ? <p className="rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-xs text-red-200">{error}</p> : null}
        {feedback ? <p className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">{feedback}</p> : null}

        {!loading && options && options.entries.length === 0 ? (
          <p className="py-4 text-center text-sm text-zinc-400">
            Nenhuma entrada de conjuracao no livro de magias deste personagem.
          </p>
        ) : null}

        {options?.entries.map((entry) => (
          <div key={entry.entryId} className="mt-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="truncate">{entry.entryName}</span>
              <span className="text-zinc-500">{CATEGORY_LABELS[entry.category] ?? entry.category}</span>
              {entry.focusPoints ? (
                <span className="ml-auto rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-zinc-300">
                  Foco {entry.focusPoints.points}/{entry.focusPoints.max}
                </span>
              ) : null}
            </div>
            {entry.spells.length === 0 ? (
              <p className="px-1 py-1 text-xs text-zinc-500">Sem magias nesta entrada.</p>
            ) : null}
            {entry.spells.map((spell) => (
              <div key={spell.spellId} className="mt-1 rounded-md border border-white/5 bg-white/[0.03] px-2 py-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-sm font-medium">{spell.name}</span>
                  <span className="shrink-0 text-[10px] text-zinc-500">
                    {spell.isCantrip ? 'Truque' : `Rank ${spell.rank}`}
                  </span>
                </div>
                <div className="mt-0.5 text-[10px] text-zinc-500">
                  {spell.area ? `Area: ${spell.area.type} ${spell.area.valueFeet} ft` : 'Sem area'}
                  {spell.rangeKind === 'feet' && spell.rangeFeet ? ` · Alcance ${spell.rangeFeet} ft` : ''}
                  {spell.rangeKind === 'touch' ? ' · Toque' : ''}
                  {!spell.area && spell.targetProfile.kind === 'count'
                    ? ` · Alvo: ${spell.targetProfile.min === spell.targetProfile.max ? spell.targetProfile.min : `${spell.targetProfile.min}-${spell.targetProfile.max}`}`
                    : ''}
                  {spell.resolution.kind === 'basicSaveDamage' ? ' · Rola dano e salvamento ao conjurar' : ''}
                </div>
                <div className="mt-1 flex flex-wrap gap-1">{castButtons(entry.entryId, spell)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null
  return createPortal(panel, document.body)
}

function CastButton({ disabled, onClick, children }: { disabled: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className="rounded-md bg-indigo-500/20 px-2 py-1 text-xs font-medium text-indigo-200 transition hover:bg-indigo-500/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function UnavailableNote({ children }: { children: React.ReactNode }) {
  return <span className="text-[10px] italic text-zinc-500">{children}</span>
}
