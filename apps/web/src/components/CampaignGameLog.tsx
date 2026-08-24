import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Grip, MessageCircle, PanelRightOpen, Pin, ScrollText } from 'lucide-react'
import { useSession } from '../contexts/session-context'
import { api, ApiError } from '../lib/api'
import { ResizableEdges, type ResizableBox } from './ResizableEdges'
import { CampaignChat } from './CampaignChat'

export type CampaignGameLogEntry = {
  id: string
  campaignId: string
  encounterId: string | null
  eventType: string
  summary: string
  payload: Record<string, unknown>
  createdAt: string
  persistent: boolean
}

function isCampaignGameLogEntry(input: unknown): input is CampaignGameLogEntry {
  if (!input || typeof input !== 'object') return false
  const value = input as Partial<CampaignGameLogEntry>
  return typeof value.id === 'string'
    && typeof value.campaignId === 'string'
    && (typeof value.encounterId === 'string' || value.encounterId === null)
    && typeof value.eventType === 'string'
    && typeof value.summary === 'string'
    && typeof value.createdAt === 'string'
    && typeof value.persistent === 'boolean'
    && Boolean(value.payload && typeof value.payload === 'object')
}

function mergeEntries(...collections: CampaignGameLogEntry[][]) {
  const byId = new Map<string, CampaignGameLogEntry>()
  for (const entries of collections) {
    for (const entry of entries) byId.set(entry.id, entry)
  }
  return [...byId.values()].sort((left, right) => left.createdAt.localeCompare(right.createdAt))
}

function formatTime(value: string) {
  return new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    .format(new Date(value))
}

function diceRolls(entry: CampaignGameLogEntry) {
  if (entry.eventType !== 'DICE_ROLL' || !Array.isArray(entry.payload.rolls)) return []
  return entry.payload.rolls.flatMap((roll) => {
    if (!roll || typeof roll !== 'object') return []
    const value = roll as { sides?: unknown; value?: unknown }
    return typeof value.sides === 'number' && typeof value.value === 'number'
      ? [{ sides: value.sides, value: value.value }]
      : []
  })
}

function initiativeSnapshots(entry: CampaignGameLogEntry) {
  if (!Array.isArray(entry.payload.participants)) return []
  return entry.payload.participants.flatMap((participant) => {
    if (!participant || typeof participant !== 'object') return []
    const value = participant as { name?: unknown; initiative?: unknown }
    return typeof value.name === 'string' && typeof value.initiative === 'number'
      ? [{ name: value.name, initiative: value.initiative }]
      : []
  })
}

function initialFloatingBox(): ResizableBox {
  const width = Math.min(440, window.innerWidth - 32)
  const height = Math.min(620, window.innerHeight - 112)
  return { x: Math.max(16, window.innerWidth - width - 32), y: 72, width, height }
}

function CampaignGameLogList({ entries, loading, error, scrollPositionRef, className = '' }: {
  entries: CampaignGameLogEntry[]
  loading: boolean
  error: string | null
  scrollPositionRef: React.MutableRefObject<number>
  className?: string
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = scrollRef.current
    if (!element) return
    element.scrollTop = scrollPositionRef.current || element.scrollHeight
  }, [scrollPositionRef])

  useEffect(() => {
    const element = scrollRef.current
    if (!element || scrollPositionRef.current > 0) return
    element.scrollTop = element.scrollHeight
  }, [entries.length, scrollPositionRef])

  return (
    <div
      ref={scrollRef}
      onScroll={(event) => { scrollPositionRef.current = event.currentTarget.scrollTop }}
      className={['min-h-0 flex-1 space-y-2 overflow-auto p-3', className].join(' ')}
    >
      {loading ? <div className="text-sm text-zinc-500">Carregando histórico...</div> : null}
      {error ? <div className="rounded-md border border-red-300/20 bg-red-500/10 px-3 py-2 text-xs text-red-200">{error}</div> : null}
      {!loading && !entries.length ? (
        <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-sm text-zinc-500">
          Nenhum evento mecânico ainda.
        </div>
      ) : null}
      {entries.map((entry) => {
        const rolls = diceRolls(entry)
        const initiatives = initiativeSnapshots(entry)
        return (
          <article key={entry.id} className="rounded-lg border border-white/10 bg-black/25 px-3 py-2">
            <div className="mb-1 flex items-center justify-between gap-2 text-[10px] uppercase tracking-wide text-zinc-500">
              <time>{formatTime(entry.createdAt)}</time>
              <span className={entry.persistent ? 'text-emerald-300' : 'text-amber-300'}>
                {entry.persistent ? 'Histórico' : 'Temporário'}
              </span>
            </div>
            <div className="text-sm leading-relaxed text-zinc-200">{entry.summary}</div>
            {rolls.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {rolls.map((roll, index) => (
                  <span key={`${entry.id}-${index}`} className="rounded border border-indigo-300/20 bg-indigo-500/10 px-2 py-1 text-xs font-semibold text-indigo-100">
                    d{roll.sides}: {roll.value}
                  </span>
                ))}
              </div>
            ) : null}
            {initiatives.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {initiatives.map((participant, index) => (
                  <span key={`${entry.id}-initiative-${index}`} className="rounded border border-amber-300/20 bg-amber-500/10 px-2 py-1 text-xs font-semibold text-amber-100">
                    {participant.name}: {participant.initiative}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

export function CampaignCommunicationPanel({ campaignId, chatEnabled }: {
  campaignId: string
  chatEnabled: boolean
}) {
  const { socket } = useSession()
  const [entries, setEntries] = useState<CampaignGameLogEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selected, setSelected] = useState<'chat' | 'log'>('chat')
  const [detached, setDetached] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [box, setBox] = useState<ResizableBox>(initialFloatingBox)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panelX: 0, panelY: 0 })
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    let cancelled = false
    api<CampaignGameLogEntry[]>(`/api/campaigns/${campaignId}/game-log/entries`)
      .then((history) => {
        if (!cancelled) setEntries((current) => mergeEntries(history.filter(isCampaignGameLogEntry), current))
      })
      .catch((reason) => {
        if (!cancelled) setError(reason instanceof ApiError ? reason.message : 'Não foi possível carregar o histórico.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [campaignId])

  useEffect(() => {
    if (!socket) return
    function onEntryCreated(input: unknown) {
      if (!isCampaignGameLogEntry(input) || input.campaignId !== campaignId) return
      setEntries((current) => mergeEntries(current, [input]))
    }
    socket.on('game-log:entry:created', onEntryCreated)
    return () => { socket.off('game-log:entry:created', onEntryCreated) }
  }, [campaignId, socket])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return
      setBox((current) => ({
        ...current,
        x: Math.max(16, Math.min(window.innerWidth - current.width - 16, dragStartRef.current.panelX + event.clientX - dragStartRef.current.pointerX)),
        y: Math.max(16, Math.min(window.innerHeight - current.height - 16, dragStartRef.current.panelY + event.clientY - dragStartRef.current.pointerY)),
      }))
    }
    function onPointerUp() { setDragging(false) }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging])

  function detachLog() {
    setDetached(true)
    setSelected('chat')
  }

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return
    dragStartRef.current = { pointerX: event.clientX, pointerY: event.clientY, panelX: box.x, panelY: box.y }
    setDragging(true)
  }

  const selector = (
    <div className="flex items-center rounded-md border border-white/10 bg-black/25 p-1">
      <button type="button" onClick={() => setSelected('chat')} className={['flex flex-1 items-center justify-center gap-2 rounded px-3 py-1.5 text-xs font-semibold transition', selected === 'chat' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:bg-white/10 hover:text-white'].join(' ')}>
        <MessageCircle className="h-3.5 w-3.5" /> Chat
      </button>
      <button type="button" onClick={() => setSelected('log')} disabled={detached} className={['flex flex-1 items-center justify-center gap-2 rounded px-3 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40', selected === 'log' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:bg-white/10 hover:text-white'].join(' ')}>
        <ScrollText className="h-3.5 w-3.5" /> Log
      </button>
    </div>
  )

  return (
    <section className="flex h-full min-h-0 flex-col gap-2">
      <div className="flex shrink-0 items-center gap-2">
        <div className="min-w-0 flex-1">{selector}</div>
        {selected === 'log' && !detached ? (
          <button type="button" title="Destacar Log" onClick={detachLog} className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:bg-white/10 hover:text-white">
            <PanelRightOpen className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <div className={selected === 'chat' ? 'flex min-h-0 flex-1' : 'hidden'}>
        <CampaignChat campaignId={campaignId} enabled={chatEnabled} hideHeader className="h-full min-h-0 w-full" />
      </div>
      {!detached ? (
        <div className={selected === 'log' ? 'flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]' : 'hidden'}>
          <CampaignGameLogList entries={entries} loading={loading} error={error} scrollPositionRef={scrollPositionRef} />
        </div>
      ) : null}

      {detached ? createPortal(
        <section className="fixed z-[240] flex flex-col overflow-hidden rounded-xl border border-indigo-300/25 bg-[#101116]/95 text-white shadow-2xl backdrop-blur-xl" style={{ left: box.x, top: box.y, width: box.width, height: box.height }}>
          <ResizableEdges box={box} setBox={setBox} limits={{ minWidth: 340, minHeight: 300, maxWidth: 720, maxHeight: 900, viewportMargin: 16 }} />
          <div className="flex cursor-grab items-center justify-between gap-3 border-b border-white/10 bg-black/25 px-3 py-2 active:cursor-grabbing" onPointerDown={startDrag}>
            <div className="flex items-center gap-2 text-sm font-semibold"><Grip className="h-4 w-4 text-zinc-500" /><ScrollText className="h-4 w-4 text-indigo-300" />Log da Mesa</div>
            <button type="button" title="Prender Log no painel" onPointerDown={(event) => event.stopPropagation()} onClick={() => { setDetached(false); setSelected('log') }} className="rounded p-1.5 text-zinc-400 transition hover:bg-white/10 hover:text-white"><Pin className="h-4 w-4" /></button>
          </div>
          <CampaignGameLogList entries={entries} loading={loading} error={error} scrollPositionRef={scrollPositionRef} />
        </section>,
        document.body,
      ) : null}
    </section>
  )
}
