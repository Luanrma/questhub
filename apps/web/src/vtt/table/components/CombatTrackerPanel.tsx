import { ChevronLeft, ChevronRight, Swords, X } from 'lucide-react'
import type { VttCombatState } from '../domain/types'

export function CombatTrackerPanel({
  combat,
  isMaster,
  canStart,
  tokenCount,
  onStart,
  onEnd,
  onNextTurn,
  onPreviousTurn,
  onInitiativeChange,
}: {
  combat: VttCombatState | null
  isMaster: boolean
  canStart: boolean
  tokenCount: number
  onStart: () => void
  onEnd: () => void
  onNextTurn: () => void
  onPreviousTurn: () => void
  onInitiativeChange: (characterId: string, initiative: number | null) => void
}) {
  const activeParticipant = combat?.participants[combat.activeTurnIndex] ?? null

  return (
    <section className="shrink-0 rounded-lg border border-white/10 bg-white/[0.035]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <Swords className="h-4 w-4 shrink-0 text-red-300" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">Combate</div>
            <div className="truncate text-[11px] text-zinc-500">
              {combat ? `Rodada ${combat.round}` : `${tokenCount} token${tokenCount === 1 ? '' : 's'} na cena`}
            </div>
          </div>
        </div>

        {combat && isMaster ? (
          <button
            type="button"
            title="Encerrar combate"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-zinc-300 transition hover:bg-red-500/10 hover:text-red-100"
            onClick={onEnd}
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {!combat ? (
        <div className="grid gap-2 p-3">
          <div className="text-xs leading-relaxed text-zinc-400">
            Inicie um tracker simples com os tokens visiveis da cena atual.
          </div>
          {isMaster ? (
            <button
              type="button"
              disabled={!canStart}
              className="flex h-9 items-center justify-center gap-2 rounded-md bg-red-600 px-3 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-45"
              onClick={onStart}
            >
              <Swords className="h-4 w-4" />
              Iniciar combate
            </button>
          ) : (
            <div className="rounded-md border border-dashed border-white/10 px-3 py-3 text-center text-xs text-zinc-500">
              Nenhum combate ativo.
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-3 p-3">
          <div className="rounded-md border border-red-300/20 bg-red-500/10 px-3 py-2">
            <div className="text-[11px] font-semibold uppercase text-red-100/70">Turno atual</div>
            <div className="truncate text-sm font-semibold text-red-50">{activeParticipant?.name ?? 'Sem participante'}</div>
          </div>

          {isMaster ? (
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="flex h-8 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] text-xs font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white"
                onClick={onPreviousTurn}
              >
                <ChevronLeft className="h-4 w-4" />
                Voltar
              </button>
              <button
                type="button"
                className="flex h-8 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] text-xs font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white"
                onClick={onNextTurn}
              >
                Avancar
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ) : null}

          <div className="grid max-h-52 gap-1 overflow-auto pr-1">
            {combat.participants.map((participant, index) => {
              const active = index === combat.activeTurnIndex
              const initial = participant.name.trim().charAt(0).toUpperCase() || '?'

              return (
                <div
                  key={participant.characterId}
                  className={[
                    'grid grid-cols-[auto_minmax(0,1fr)_72px] items-center gap-2 rounded-md border px-2 py-2',
                    active ? 'border-red-300/50 bg-red-500/15' : 'border-white/10 bg-black/15',
                  ].join(' ')}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {participant.avatarUrl ? <img src={participant.avatarUrl} alt="" className="h-full w-full object-cover" /> : initial}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-white">{participant.name}</span>
                    <span className="block text-[11px] text-zinc-500">{active ? 'Agindo agora' : 'Aguardando'}</span>
                  </span>
                  {isMaster ? (
                    <input
                      type="number"
                      inputMode="numeric"
                      title="Iniciativa"
                      value={participant.initiative ?? ''}
                      className="h-8 min-w-0 rounded-md border border-white/10 bg-black/30 px-2 text-center text-sm font-semibold text-white outline-none transition focus:border-red-300/60"
                      placeholder="-"
                      onChange={(event) => {
                        const value = event.currentTarget.value.trim()
                        const initiative = Number(value)
                        onInitiativeChange(participant.characterId, value && Number.isFinite(initiative) ? initiative : null)
                      }}
                    />
                  ) : (
                    <span className="text-center text-sm font-semibold text-zinc-200">{participant.initiative ?? '-'}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
