import {
  BookOpenText,
  CircleDotDashed,
  Crosshair,
  Dices,
  MousePointer2,
  Sparkles,
  X,
} from 'lucide-react'
import { useMemo } from 'react'
import { tokenActionsForContext } from '../../token-presentation/actionContexts'
import { useTokenPresentation } from '../../token-presentation/useTokenPresentation'
import type { TokenActionPresentation } from '../../token-presentation/types'
import type { VttCombatParticipant } from '../domain/types'
import { useTokenCharacterSheetAccess } from '../hooks/useTokenCharacterSheetAccess'
import { TokenAvatar } from './TokenAvatar'

function actionIcon(interaction: TokenActionPresentation['interaction']) {
  if (interaction === 'roll') return Dices
  if (interaction === 'target') return Crosshair
  if (interaction === 'area') return CircleDotDashed
  return MousePointer2
}

export function EncounterActionPanel({
  campaignId,
  participant,
  round,
  turnCount,
  isMaster,
  onEnd,
}: {
  campaignId: string
  participant: VttCombatParticipant
  round: number
  turnCount: number
  isMaster: boolean
  onEnd: () => void
}) {
  const { presentation, available, loading, error } = useTokenPresentation(
    campaignId,
    participant.tokenId,
  )
  const {
    sheet,
    loading: sheetLoading,
    error: sheetError,
    openSheet,
  } = useTokenCharacterSheetAccess(campaignId, participant.tokenId)
  const groups = useMemo(() => {
    const grouped = new Map<string, TokenActionPresentation[]>()
    const encounterActions = tokenActionsForContext(
      presentation?.actions ?? [],
      'ENCOUNTER',
    )
    for (const action of encounterActions) {
      const actions = grouped.get(action.group) ?? []
      actions.push(action)
      grouped.set(action.group, actions)
    }
    return [...grouped.entries()]
  }, [presentation])

  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-violet-300/20 bg-[#0c0d13]/94 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <header className="flex shrink-0 items-center gap-3 border-b border-white/10 px-3 py-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-violet-300/20 bg-violet-500/15 text-violet-200">
          <Sparkles className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-white">Ações</span>
          <span className="block truncate text-[10px] uppercase tracking-wide text-zinc-500">
            {participant.name}
          </span>
        </span>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <span className="rounded-full border border-red-300/20 bg-red-500/[0.08] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-red-100">
            Rodada {round} · Turno {turnCount}
          </span>
          {isMaster ? (
            <button
              type="button"
              title="Encerrar encontro"
              aria-label="Encerrar encontro"
              className="grid h-8 w-8 place-items-center rounded-full border border-red-300/20 bg-red-500/[0.08] text-red-200 transition hover:bg-red-500/20"
              onClick={onEnd}
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </header>

      <div className="shrink-0 p-3 pb-0">
        <div className="relative h-64 overflow-hidden rounded-xl border border-violet-300/20 bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,0.22),transparent_58%),rgba(0,0,0,0.28)] shadow-inner">
          <TokenAvatar
            avatarUrl={participant.avatarUrl}
            name={participant.name}
            fallbackSeed={participant.tokenId}
            color={participant.color}
            className="h-full w-full object-contain p-2"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-12">
            <div className="truncate text-base font-semibold text-white">{participant.name}</div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-200">
              Agindo agora
            </div>
          </div>
        </div>
      </div>

      {sheetLoading ? (
        <div className="mx-3 mt-3 flex h-11 shrink-0 items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.035] text-sm text-zinc-500">
          <BookOpenText className="h-5 w-5" />
          Localizando ficha...
        </div>
      ) : sheet ? (
        <button
          type="button"
          className="mx-3 mt-3 flex h-11 shrink-0 items-center justify-center gap-2.5 rounded-lg border border-violet-300/25 bg-violet-500/10 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/20"
          onClick={openSheet}
        >
          <BookOpenText className="h-5 w-5" />
          Abrir ficha
        </button>
      ) : sheetError ? (
        <div className="mx-3 mt-3 shrink-0 text-center text-xs text-amber-200/70">
          A ficha está temporariamente indisponível.
        </div>
      ) : null}

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {loading ? (
          <div className="grid h-full place-items-center text-center text-sm text-zinc-500">
            Carregando ações...
          </div>
        ) : error ? (
          <div className="grid h-full place-items-center rounded-lg border border-amber-300/15 bg-amber-500/[0.06] px-4 text-center text-sm leading-relaxed text-amber-100/70">
            Não foi possível carregar as ações deste Token.
          </div>
        ) : !available ? (
          <div className="grid h-full place-items-center rounded-lg border border-dashed border-white/10 px-4 text-center text-sm leading-relaxed text-zinc-500">
            O sistema da campanha não publicou ações para este Token.
          </div>
        ) : groups.length === 0 ? (
          <div className="grid h-full place-items-center rounded-lg border border-dashed border-white/10 px-4 text-center text-sm leading-relaxed text-zinc-500">
            Nenhuma ação de encontro está disponível para este Token.
          </div>
        ) : (
          <div className="grid gap-4">
            {groups.map(([group, actions]) => (
              <section key={group} className="grid gap-2">
                <h3 className="px-1 text-xs font-bold uppercase tracking-[0.16em] text-violet-200/80">
                  {group}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {actions.map((action) => {
                    const Icon = actionIcon(action.interaction)
                    return (
                      <article
                        key={action.id}
                        title={action.detail ? `${action.label} — ${action.detail}` : action.label}
                        className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-violet-300/15 bg-violet-500/10 text-violet-200">
                          {action.imageUrl ? (
                            <img src={action.imageUrl} alt="" className="h-full w-full object-cover" />
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block break-words text-sm font-semibold leading-5 text-zinc-100">
                            {action.label}
                          </span>
                          {action.detail ? (
                            <span className="block break-words text-xs leading-4 text-zinc-400">
                              {action.detail}
                            </span>
                          ) : null}
                        </span>
                      </article>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
