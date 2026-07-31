import {
  BookOpenText,
  ChevronDown,
  CircleDotDashed,
  Crosshair,
  Dices,
  MousePointer2,
  Play,
  Sparkles,
  X,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSession } from '../../../contexts/session-context'
import { requestRuntimeAreaTemplate } from '../../area-templates/infrastructure/runtimeAreaTemplateEvents'
import { tokenActionsForContext } from '../../token-presentation/actionContexts'
import { tokenActionActivationToRuntimeAreaTemplate } from '../../token-presentation/runtimeAreaTemplate'
import { useTokenPresentation } from '../../token-presentation/useTokenPresentation'
import type {
  TokenActionPresentation,
  TokenActionSpatialActivation,
} from '../../token-presentation/types'
import type { VttCombatParticipant } from '../domain/types'
import { useTokenCharacterSheetAccess } from '../hooks/useTokenCharacterSheetAccess'
import { TokenAvatar } from './TokenAvatar'

function actionIcon(interaction: TokenActionPresentation['interaction']) {
  if (interaction === 'roll') return Dices
  if (interaction === 'target') return Crosshair
  if (interaction === 'area') return CircleDotDashed
  return MousePointer2
}

function areaTemplatesPanel() {
  return [...document.querySelectorAll<HTMLElement>('section')].find((section) => (
    section.textContent?.includes('Templates de Area')
  )) ?? null
}

function useFirstAreaTemplate(attempt = 0) {
  const panel = areaTemplatesPanel()
  const useButton = panel
    ? [...panel.querySelectorAll<HTMLButtonElement>('button')].find((button) => (
        button.textContent?.trim() === 'Usar'
      ))
    : null

  if (useButton) {
    useButton.click()
    return
  }
  if (attempt >= 20) return
  window.requestAnimationFrame(() => useFirstAreaTemplate(attempt + 1))
}

function openAreaToolAndUseRuntimeTemplate() {
  const tool = document.querySelector<HTMLButtonElement>('[data-vtt-tool="area-templates"]')
  if (!tool) return false

  if (areaTemplatesPanel()) {
    useFirstAreaTemplate()
    return true
  }

  const placementIsActive = tool.classList.contains('bg-indigo-600')
  if (placementIsActive) {
    tool.click()
    window.setTimeout(() => {
      tool.click()
      useFirstAreaTemplate()
    }, 0)
    return true
  }

  tool.click()
  useFirstAreaTemplate()
  return true
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
  const { me } = useSession()
  const [expandedActionId, setExpandedActionId] = useState<string | null>(null)
  const [activationError, setActivationError] = useState<string | null>(null)
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

  function activateSpatialAction(
    action: TokenActionPresentation,
    activation: TokenActionSpatialActivation,
  ) {
    if (!me) return
    setActivationError(null)
    requestRuntimeAreaTemplate(tokenActionActivationToRuntimeAreaTemplate({
      campaignId,
      createdByUserId: me.id,
      sourceTokenId: participant.tokenId,
      action,
      activation,
    }))
    if (!openAreaToolAndUseRuntimeTemplate()) {
      setActivationError('Expanda a barra de ferramentas do VTT para usar esta ação.')
    }
  }

  function activateAction(action: TokenActionPresentation) {
    const activation = action.activation
    if (!activation || !me) return
    if (activation.kind === 'VARIANTS') {
      setExpandedActionId((current) => current === action.id ? null : action.id)
      return
    }
    activateSpatialAction(action, activation)
  }

  function activateVariant(
    action: TokenActionPresentation,
    activation: TokenActionSpatialActivation,
  ) {
    setExpandedActionId(null)
    activateSpatialAction(action, activation)
  }

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

      {activationError ? (
        <div className="mx-3 mt-3 rounded-lg border border-amber-300/20 bg-amber-500/[0.08] px-3 py-2 text-xs text-amber-100">
          {activationError}
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
                    const activation = action.activation
                    const variants = activation?.kind === 'VARIANTS' ? activation.variants : []
                    const actionable = Boolean(activation && me)
                    const expanded = expandedActionId === action.id
                    return (
                      <div
                        key={action.id}
                        className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.045]"
                      >
                        <button
                          type="button"
                          disabled={!actionable}
                          title={action.detail ? `${action.label} — ${action.detail}` : action.label}
                          className="flex w-full min-w-0 items-center gap-3 px-3 py-2.5 text-left transition enabled:hover:bg-violet-500/10 disabled:cursor-default"
                          onClick={() => activateAction(action)}
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-violet-300/15 bg-violet-500/10 text-violet-200">
                            {action.imageUrl ? (
                              <img src={action.imageUrl} alt="" className="h-full w-full object-cover" />
                            ) : (
                              <Icon className="h-4 w-4" />
                            )}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block break-words text-sm font-semibold leading-5 text-zinc-100">
                              {action.label}
                            </span>
                            {action.detail ? (
                              <span className="block break-words text-xs leading-4 text-zinc-400">
                                {action.detail}
                              </span>
                            ) : null}
                          </span>
                          {actionable ? (
                            variants.length ? (
                              <ChevronDown className={[
                                'h-4 w-4 shrink-0 text-violet-200 transition-transform',
                                expanded ? 'rotate-180' : '',
                              ].join(' ')} />
                            ) : (
                              <Play className="h-4 w-4 shrink-0 text-violet-200" />
                            )
                          ) : null}
                        </button>

                        {expanded && variants.length ? (
                          <div className="grid gap-1.5 border-t border-white/10 p-2">
                            {variants.map((variant) => (
                              <button
                                key={variant.id}
                                type="button"
                                className="flex items-center justify-between gap-3 rounded-lg border border-violet-300/15 bg-violet-500/[0.08] px-3 py-2 text-left text-xs font-semibold text-violet-100 transition hover:bg-violet-500/20"
                                onClick={() => activateVariant(action, variant.activation)}
                              >
                                <span>{variant.label}</span>
                                <Play className="h-3.5 w-3.5 shrink-0" />
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
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
