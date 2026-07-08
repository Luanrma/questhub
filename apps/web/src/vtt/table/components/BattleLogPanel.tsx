import { useEffect, useRef } from 'react'
import { Dices, Info, Sword, Heart as HeartIcon } from 'lucide-react'
import type { VttEncounterLogEntry } from '../domain/types'
import { healthBarLabel } from './HealthBar'

function formatLogTime(createdAt: string): string {
  const date = new Date(createdAt)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

function SystemLogRow({ entry }: { entry: Extract<VttEncounterLogEntry, { type: 'SYSTEM' }> }) {
  return (
    <div className="flex items-start gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1.5">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-zinc-400">
        <Info className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0 flex-1 text-xs text-zinc-400">{entry.message}</span>
      <span className="shrink-0 text-[10px] text-zinc-600">{formatLogTime(entry.createdAt)}</span>
    </div>
  )
}

function HealthLogRow({ entry }: { entry: Extract<VttEncounterLogEntry, { type: 'DAMAGE' | 'HEAL' }> }) {
  const isDamage = entry.type === 'DAMAGE'
  const verb = isDamage ? 'causou' : 'curou'
  const amountText = entry.amount !== null ? `${entry.amount} PV` : ''
  const description = amountText
    ? `${entry.actorName} ${verb} ${amountText} em ${entry.targetName}`
    : `${entry.targetName} ${isDamage ? 'sofreu dano' : 'foi curado'}`

  return (
    <div className={['flex items-start gap-2 rounded-md border px-2 py-1.5', isDamage ? 'border-red-400/20 bg-red-500/[0.07]' : 'border-emerald-400/20 bg-emerald-500/[0.07]'].join(' ')}>
      <span className={['mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full', isDamage ? 'text-red-300' : 'text-emerald-300'].join(' ')}>
        {isDamage ? <Sword className="h-3.5 w-3.5" /> : <HeartIcon className="h-3.5 w-3.5" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-zinc-200">{description}</span>
        {entry.resultingHealth ? (
          <span className="block text-[10px] text-zinc-500">{entry.targetName}: {healthBarLabel(entry.resultingHealth)}</span>
        ) : null}
      </span>
      <span className="shrink-0 text-[10px] text-zinc-600">{formatLogTime(entry.createdAt)}</span>
    </div>
  )
}

function DiceRollLogRow({ entry }: { entry: Extract<VttEncounterLogEntry, { type: 'DICE_ROLL' }> }) {
  return (
    <div className="flex items-start gap-2 rounded-md border border-amber-400/20 bg-amber-500/[0.07] px-2 py-1.5">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-amber-300">
        <Dices className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0 flex-1 text-xs text-zinc-200">
        {entry.actorName} rolou {entry.notation}: <span className="font-semibold text-amber-200">{entry.total}</span>
      </span>
      <span className="shrink-0 text-[10px] text-zinc-600">{formatLogTime(entry.createdAt)}</span>
    </div>
  )
}

function LogEntryRow({ entry }: { entry: VttEncounterLogEntry }) {
  switch (entry.type) {
    case 'SYSTEM':
      return <SystemLogRow entry={entry} />
    case 'DAMAGE':
    case 'HEAL':
      return <HealthLogRow entry={entry} />
    case 'DICE_ROLL':
      return <DiceRollLogRow entry={entry} />
    default:
      return null
  }
}

export function BattleLogPanel({ log }: { log: VttEncounterLogEntry[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    container.scrollTop = container.scrollHeight
  }, [log])

  return (
    <section className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] p-3">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
        <Dices className="h-3.5 w-3.5" />
        Log de Batalha
      </div>
      <div ref={scrollRef} className="grid min-h-0 auto-rows-min gap-1.5 overflow-y-auto pr-1">
        {log.length ? (
          log.map((entry) => <LogEntryRow key={entry.id} entry={entry} />)
        ) : (
          <div className="grid place-items-center py-4 text-center text-[11px] text-zinc-600">
            Nenhum evento registrado ainda.
          </div>
        )}
      </div>
    </section>
  )
}
