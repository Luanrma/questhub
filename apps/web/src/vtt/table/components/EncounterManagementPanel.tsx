import { ClipboardList, Play, Save, Square, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import type { VttCombatState } from '../domain/types'
import { TokenAvatar } from './TokenAvatar'

export function EncounterManagementPanel({ combat, isMaster, pending, error, onSave, onSetTurns, onEnd, onRemoveParticipant }: {
  combat: VttCombatState
  isMaster: boolean
  pending: boolean
  error: string | null
  onSave: (details: { name: string; privateNotes: string }) => void
  onSetTurns: (active: boolean) => void
  onEnd: () => void
  onRemoveParticipant: (tokenId: string) => void
}) {
  const [name, setName] = useState(combat.name)
  const [privateNotes, setPrivateNotes] = useState(combat.privateNotes ?? '')

  const dirty = name.trim() !== combat.name || privateNotes !== (combat.privateNotes ?? '')
  const validName = name.trim().length > 0 && name.trim().length <= 120

  return (
    <section className="grid max-h-full gap-3 overflow-auto rounded-lg border border-white/10 bg-white/[0.035] p-3">
      <header className="flex items-start gap-2 border-b border-white/10 pb-3">
        <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-semibold text-white">{combat.name}</h2>
          <p className="text-[10px] uppercase tracking-wide text-zinc-500">{combat.turnsActive ? `Turnos ativos · rodada ${combat.round}` : 'Modo livre'}</p>
        </div>
      </header>

      {isMaster ? (
        <div className="grid gap-3">
          <label className="grid gap-1 text-xs font-medium text-zinc-300">Nome<input value={name} maxLength={120} className="h-9 rounded-md border border-white/10 bg-black/25 px-3 text-sm text-white outline-none focus:border-indigo-300/60" onChange={(event) => setName(event.target.value)} /></label>
          <label className="grid gap-1 text-xs font-medium text-zinc-300">Anotações privadas<textarea value={privateNotes} maxLength={20_000} rows={5} className="resize-y rounded-md border border-white/10 bg-black/25 px-3 py-2 text-sm text-white outline-none focus:border-indigo-300/60" onChange={(event) => setPrivateNotes(event.target.value)} /></label>
          <button type="button" disabled={!dirty || !validName || pending} className="flex h-9 items-center justify-center gap-2 rounded-md border border-indigo-300/30 bg-indigo-500/15 text-xs font-semibold text-indigo-100 disabled:cursor-not-allowed disabled:opacity-40" onClick={() => onSave({ name: name.trim(), privateNotes })}><Save className="h-3.5 w-3.5" /> Salvar alterações</button>
        </div>
      ) : null}

      <div className="grid gap-2">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-zinc-500"><span>Participantes</span><span>{combat.participants.length}</span></div>
        {combat.participants.length ? combat.participants.map((participant) => (
          <div key={participant.tokenId} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-white/10 bg-black/20 p-2">
            <TokenAvatar avatarUrl={participant.avatarUrl} name={participant.name} fallbackSeed={participant.tokenId} color={participant.color} className="h-8 w-8 rounded-md object-cover" />
            <span className="truncate text-xs font-medium text-zinc-100">{participant.name}</span>
            {isMaster ? <button type="button" aria-label={`Remover ${participant.name} do encontro`} className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 hover:bg-red-500/10 hover:text-red-100" onClick={() => onRemoveParticipant(participant.tokenId)}><X className="h-3.5 w-3.5" /></button> : null}
          </div>
        )) : <p className="rounded-md border border-dashed border-white/10 px-3 py-4 text-center text-xs text-zinc-500">Nenhum participante. Adicione tokens da cena quando precisar.</p>}
      </div>

      {error ? <p role="alert" className="text-xs text-red-300">{error}</p> : null}
      {isMaster ? (
        <div className="grid gap-2 border-t border-white/10 pt-3">
          <button type="button" disabled={pending || (!combat.turnsActive && combat.participants.length === 0)} className="flex h-9 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.05] text-xs font-semibold text-zinc-100 disabled:cursor-not-allowed disabled:opacity-40" onClick={() => onSetTurns(!combat.turnsActive)}>{combat.turnsActive ? <Square className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{combat.turnsActive ? 'Desativar turnos' : 'Ativar turnos'}</button>
          {!combat.turnsActive && combat.participants.length === 0 ? <p className="text-[11px] text-zinc-500">Adicione um participante para ativar turnos.</p> : null}
          <button type="button" disabled={pending} className="flex h-9 items-center justify-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 text-xs font-semibold text-red-200 hover:bg-red-500/20 disabled:opacity-40" onClick={onEnd}><Trash2 className="h-3.5 w-3.5" /> Encerrar encontro</button>
        </div>
      ) : null}
    </section>
  )
}
