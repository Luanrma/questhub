import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Dices, Heart, PanelRightOpen, Pin, RotateCcw, Swords, TriangleAlert, X, Zap } from 'lucide-react'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import type { VttEncounterParticipant, VttEncounterState, VttPlayerToken, VttSceneHazard } from '../domain/types'
import { HazardRoutineHint } from './HazardRoutineHint'
import { HealthBar } from './HealthBar'

function formatMeters(value: number): string {
  return (Math.round(value * 10) / 10).toString().replace('.', ',')
}

function MovementRemaining({
  maxMetersPerAction,
  actionsRemaining,
  metersUsedThisAction,
}: {
  maxMetersPerAction: number | null
  actionsRemaining: number
  metersUsedThisAction: number
}) {
  if (maxMetersPerAction === null) return null

  const remainingThisAction = Math.max(0, maxMetersPerAction - metersUsedThisAction)
  return (
    <span className="block text-[10px] text-cyan-300/80">
      {actionsRemaining} acao{actionsRemaining === 1 ? '' : 's'} - {formatMeters(remainingThisAction)}/{formatMeters(maxMetersPerAction)} m
    </span>
  )
}

const hazardParticipantStateLabels: Record<'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED', string> = {
  ARMED: 'Armado',
  TRIGGERED: 'Disparado',
  ACTIVE: 'Ativo',
  DISABLED: 'Desativado',
  EXPIRED: 'Expirado',
}

type EncounterTrackerDisplayMode = 'sidebar' | 'detached'
type DetachedEncounterTurn = {
  participant: VttEncounterParticipant
  index: number
  active: boolean
}

const detachedModalMinWidth = 520
const detachedModalMaxWidth = 1120
const detachedModalMinHeight = 220
const detachedModalMaxHeight = 420
const detachedActiveCardWidth = 136
const detachedIdleCardWidth = 112
const detachedCardGap = 12
const detachedChromeWidth = 128

function clampValue(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function getCircularIndex(index: number, length: number) {
  return ((index % length) + length) % length
}

function getDetachedSideSlots(width: number, participantCount: number) {
  if (participantCount <= 1) return 0
  const availableWidth = Math.max(0, width - detachedChromeWidth - detachedActiveCardWidth)
  const sideSlots = Math.floor(availableWidth / (2 * (detachedIdleCardWidth + detachedCardGap)))
  return clampValue(sideSlots, 0, Math.floor((participantCount - 1) / 2))
}

function getDetachedTurns(encounter: VttEncounterState, sideSlots: number): DetachedEncounterTurn[] {
  const participantCount = encounter.participants.length
  if (!participantCount) return []

  const activeTurnIndex = clampValue(encounter.activeTurnIndex, 0, Math.max(0, participantCount - 1))
  const turns: DetachedEncounterTurn[] = []
  const usedIndexes = new Set<number>()

  for (let offset = -sideSlots; offset <= sideSlots; offset += 1) {
    const index = getCircularIndex(activeTurnIndex + offset, participantCount)
    if (usedIndexes.has(index)) continue
    usedIndexes.add(index)
    turns.push({
      participant: encounter.participants[index],
      index,
      active: index === activeTurnIndex,
    })
  }

  return turns
}

export function EncounterTrackerPanel({
  campaignId,
  encounter,
  isMaster,
  canStart,
  tokenCount,
  selectedTokens,
  selectedHazards,
  displayMode = 'sidebar',
  onStart,
  onEnd,
  onRemoveSelectedToken,
  onRemoveSelectedHazard,
  onNextTurn,
  onPreviousTurn,
  onInitiativeChange,
  onTriggerHazard,
  onOpenHealthEditor,
  onQuickAdjustHealth,
  onResetMovement,
  onRemoveParticipant,
  onRollInitiative,
  onDetach,
  onAttach,
}: {
  campaignId?: string
  encounter: VttEncounterState | null
  isMaster: boolean
  canStart: boolean
  tokenCount: number
  selectedTokens: VttPlayerToken[]
  selectedHazards: VttSceneHazard[]
  displayMode?: EncounterTrackerDisplayMode
  onStart: () => void
  onEnd: () => void
  onRemoveSelectedToken: (tokenId: string) => void
  onRemoveSelectedHazard: (hazardId: string) => void
  onNextTurn: () => void
  onPreviousTurn: () => void
  onInitiativeChange: (participantId: string, initiative: number | null) => void
  onTriggerHazard?: (participantId: string) => void
  onOpenHealthEditor?: (tokenId: string, name: string) => void
  onQuickAdjustHealth?: (tokenId: string, operation: 'DAMAGE' | 'HEAL', amount: number) => void
  onResetMovement?: (participantId: string) => void
  onRemoveParticipant?: (participantId: string) => void
  onRollInitiative?: (participantId: string) => void
  onDetach?: () => void
  onAttach?: () => void
}) {
  const activeParticipant = encounter?.participants[encounter.activeTurnIndex] ?? null
  const detached = displayMode === 'detached'
  const [quickHealthAmount, setQuickHealthAmount] = useState(1)

  const title = encounter && activeParticipant ? `Encontro - ${activeParticipant.name}` : 'Encounter Mode'
  const subtitle = encounter
    ? `Rodada ${encounter.round}${activeParticipant ? ' - turno atual' : ''}`
    : `${selectedTokens.length}/${tokenCount} token${tokenCount === 1 ? '' : 's'}${
        selectedHazards.length ? ` + ${selectedHazards.length} hazard${selectedHazards.length === 1 ? '' : 's'}` : ''
      } selecionados`
  const hasSelection = selectedTokens.length > 0 || selectedHazards.length > 0
  const selectedTokenBox = (
    <div
      data-encounter-dropzone="true"
      className={[
        'grid min-h-24 gap-2 rounded-md border border-dashed px-3 py-3',
        hasSelection ? 'border-indigo-300/35 bg-indigo-500/10' : 'border-white/10 bg-black/20',
      ].join(' ')}
    >
      {hasSelection ? (
        detached ? (
          <div className="flex min-h-[104px] items-center gap-3 overflow-x-auto pb-1">
            {selectedTokens.map((token, index) => {
              const initial = token.name.trim().charAt(0).toUpperCase() || '?'

              return (
                <div
                  key={token.id}
                  className="relative grid min-h-[96px] w-[124px] shrink-0 place-items-center gap-1 rounded-md border border-indigo-300/25 bg-indigo-500/12 px-3 py-2 text-center"
                >
                  <span className="absolute left-2 top-2 grid h-4 w-4 place-items-center rounded-full border border-white/10 bg-black/40 text-[10px] text-zinc-500">
                    {index + 1}
                  </span>
                  <button
                    type="button"
                    title="Remover do encontro"
                    className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-md text-zinc-400 transition hover:bg-white/10 hover:text-white"
                    onClick={() => onRemoveSelectedToken(token.id)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <span
                    className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-indigo-600 text-sm font-bold text-white"
                    style={{ backgroundColor: token.tokenBorderColor ?? undefined }}
                  >
                    {token.avatarUrl ? <img src={token.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} /> : initial}
                  </span>
                  <span className="w-full min-w-0">
                    <span className="block truncate text-xs font-semibold text-white">{token.name}</span>
                    <span className="block truncate text-[10px] uppercase text-zinc-500">{token.role === 'NPC' ? 'NPC' : token.ownerName}</span>
                  </span>
                </div>
              )
            })}
            {selectedHazards.map((hazard, index) => (
              <div
                key={hazard.id}
                className="relative grid min-h-[96px] w-[124px] shrink-0 place-items-center gap-1 rounded-md border border-amber-300/25 bg-amber-500/12 px-3 py-2 text-center"
              >
                <span className="absolute left-2 top-2 grid h-4 w-4 place-items-center rounded-full border border-white/10 bg-black/40 text-[10px] text-zinc-500">
                  {selectedTokens.length + index + 1}
                </span>
                <button
                  type="button"
                  title="Remover do encontro"
                  className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-md text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  onClick={() => onRemoveSelectedHazard(hazard.id)}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
                <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-amber-600 text-white">
                  <TriangleAlert className="h-5 w-5" />
                </span>
                <span className="w-full min-w-0">
                  <span className="block truncate text-xs font-semibold text-white">{hazard.name}</span>
                  <span className="block truncate text-[10px] uppercase text-amber-200/70">Hazard</span>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid max-h-36 gap-2 overflow-auto pr-1">
          {selectedTokens.map((token) => {
            const initial = token.name.trim().charAt(0).toUpperCase() || '?'

            return (
              <div key={token.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
                <span
                  className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-indigo-600 text-xs font-bold text-white"
                  style={{ backgroundColor: token.tokenBorderColor ?? undefined }}
                >
                  {token.avatarUrl ? <img src={token.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} /> : initial}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs font-semibold text-white">{token.name}</span>
                  <span className="block truncate text-[10px] uppercase text-zinc-500">{token.role === 'NPC' ? 'NPC' : token.ownerName}</span>
                </span>
                <button
                  type="button"
                  title="Remover do encontro"
                  className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  onClick={() => onRemoveSelectedToken(token.id)}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )
          })}
          {selectedHazards.map((hazard) => (
            <div key={hazard.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-amber-300/20 bg-amber-500/[0.06] px-2 py-1.5">
              <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-amber-600 text-white">
                <TriangleAlert className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-semibold text-white">{hazard.name}</span>
                <span className="block truncate text-[10px] uppercase text-amber-200/70">Hazard</span>
              </span>
              <button
                type="button"
                title="Remover do encontro"
                className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 transition hover:bg-white/10 hover:text-white"
                onClick={() => onRemoveSelectedHazard(hazard.id)}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
          </div>
        )
      ) : (
        <div className="grid place-items-center text-center text-xs leading-relaxed text-zinc-500">
          Arraste tokens visiveis da cena para iniciar um encontro.
        </div>
      )}
    </div>
  )
  const [detachedBox, setDetachedBox] = useState<ResizableBox>(() => ({
    x: Math.max(16, (window.innerWidth - 860) / 2),
    y: 8,
    width: 860,
    height: 272,
  }))
  const detachedSideSlots = getDetachedSideSlots(detachedBox.width, encounter?.participants.length ?? 0)
  const detachedTurns = useMemo(
    () => (encounter ? getDetachedTurns(encounter, detachedSideSlots) : []),
    [encounter, detachedSideSlots],
  )

  if (detached) {
    return (
      <section
        className="pointer-events-auto fixed z-[80] overflow-hidden rounded-lg border border-white/10 bg-[#08090d]/88 text-white shadow-2xl backdrop-blur-xl"
        style={{ left: detachedBox.x, top: detachedBox.y, width: detachedBox.width, height: detachedBox.height }}
      >
        <ResizableEdges
          box={detachedBox}
          setBox={setDetachedBox}
          limits={{ minWidth: detachedModalMinWidth, minHeight: detachedModalMinHeight, maxWidth: detachedModalMaxWidth, maxHeight: detachedModalMaxHeight, viewportMargin: 16 }}
        />
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <Swords className="h-4 w-4 shrink-0 text-red-300" />
            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-2">
                <div className="truncate text-sm font-semibold">{title}</div>
                {encounter ? (
                  <span className="flex shrink-0 items-center gap-1 rounded-full border border-red-300/30 bg-red-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-200">
                    <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-red-400" />
                    Ativo
                  </span>
                ) : null}
              </div>
              <div className="truncate text-[11px] uppercase text-zinc-500">{subtitle}</div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {onAttach ? (
              <button
                type="button"
                title="Pregar na lateral"
                className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/10 hover:text-white"
                onClick={onAttach}
              >
                <Pin className="h-4 w-4" />
              </button>
            ) : null}
            {encounter && isMaster ? (
              <button
                type="button"
                title="Encerrar encontro"
                className="grid h-8 w-8 place-items-center rounded-md text-zinc-300 transition hover:bg-red-500/10 hover:text-red-100"
                onClick={onEnd}
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>

        {!encounter ? (
          <div className="grid gap-3 p-4" style={{ minHeight: detachedBox.height - 57 }}>
            <div className="text-xs leading-relaxed text-zinc-400">
              Selecione tokens da cena para o Encounter Mode.
            </div>
            {isMaster ? selectedTokenBox : null}
            {isMaster ? (
              <button
                type="button"
                disabled={!canStart}
                className="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-red-600 px-3 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-45"
                onClick={onStart}
              >
                <Swords className="h-4 w-4" />
                Iniciar Encontro
              </button>
            ) : (
              <div className="rounded-md border border-dashed border-white/10 px-3 py-3 text-center text-xs text-zinc-500">
                Nenhum encontro ativo.
              </div>
            )}
          </div>
        ) : (
          <div className="grid p-4" style={{ minHeight: detachedBox.height - 57 }}>
            <div className="grid grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-3 self-center">
              {isMaster ? (
                <button
                  type="button"
                  title="Voltar turno"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  onClick={onPreviousTurn}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              ) : (
                <div />
              )}

              <div className="flex min-w-0 items-center justify-center gap-3 overflow-hidden px-2 py-1">
                {detachedTurns.map(({ participant, index, active }) => {
                  const initial = participant.name.trim().charAt(0).toUpperCase() || '?'

                  return (
                    <div
                      key={participant.participantId}
                      className={[
                        'relative grid shrink-0 place-items-center rounded-md border text-center transition',
                        active
                          ? 'min-h-[112px] w-[136px] gap-1.5 border-red-200/80 bg-red-500/18 px-4 py-3 shadow-[0_0_28px_rgba(248,113,113,0.22)]'
                          : 'min-h-[88px] w-[112px] gap-1 border-white/10 bg-white/[0.045] px-3 py-2',
                      ].join(' ')}
                    >
                      <span className="absolute left-2 top-2 grid h-4 w-4 place-items-center rounded-full border border-white/10 bg-black/40 text-[10px] text-zinc-500">
                        {index + 1}
                      </span>
                      <span
                        className={[
                          'grid place-items-center overflow-hidden rounded-full font-bold text-white transition',
                          participant.type === 'hazard' ? 'bg-amber-600' : 'bg-indigo-600',
                          active ? 'h-12 w-12 text-sm ring-2 ring-red-200/70' : 'h-9 w-9 text-xs',
                        ].join(' ')}
                      >
                        {participant.type === 'hazard' ? (
                          <TriangleAlert className={active ? 'h-6 w-6' : 'h-4 w-4'} />
                        ) : participant.avatarUrl ? (
                          <img src={participant.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} />
                        ) : (
                          initial
                        )}
                      </span>
                      <span className="w-full min-w-0">
                        <span className={['block truncate font-semibold text-white', active ? 'text-sm' : 'text-xs'].join(' ')}>{participant.name}</span>
                        {participant.type === 'creature' && participant.health ? (
                          <HealthBar health={participant.health} size="sm" />
                        ) : (
                          <span className={['block uppercase', active ? 'text-[11px] text-red-200' : 'text-[10px] text-zinc-500'].join(' ')}>
                            {active
                              ? 'Agindo agora'
                              : participant.type === 'hazard'
                                ? hazardParticipantStateLabels[participant.state]
                                : 'Aguardando'}
                          </span>
                        )}
                        {active && participant.type === 'creature' ? (
                          <MovementRemaining
                            maxMetersPerAction={participant.movement.maxMetersPerAction}
                            actionsRemaining={participant.movement.actionsRemaining}
                            metersUsedThisAction={participant.movement.metersUsedThisAction}
                          />
                        ) : null}
                      </span>
                      {isMaster && participant.type === 'creature' && onOpenHealthEditor ? (
                        <button
                          type="button"
                          title="Editar HP"
                          className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-md text-red-300 transition hover:bg-red-500/20 hover:text-red-100"
                          onClick={() => onOpenHealthEditor(participant.tokenId, participant.name)}
                        >
                          <Heart className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                      {isMaster && participant.type === 'creature' && active && onResetMovement ? (
                        <button
                          type="button"
                          title="Resetar movimento"
                          className="absolute left-1.5 bottom-1.5 grid h-6 w-6 place-items-center rounded-md text-cyan-300 transition hover:bg-cyan-500/20 hover:text-cyan-100"
                          onClick={() => onResetMovement(participant.participantId)}
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                      {isMaster ? (
                        <div className="flex items-center gap-1">
                          {onRollInitiative ? (
                            <button
                              type="button"
                              title="Rolar iniciativa (1d20)"
                              className={['grid shrink-0 place-items-center rounded-md border border-white/10 bg-black/30 text-amber-300 transition hover:bg-amber-500/15 hover:text-amber-100', active ? 'h-8 w-7' : 'h-7 w-6'].join(' ')}
                              onClick={() => onRollInitiative(participant.participantId)}
                            >
                              <Dices className="h-3.5 w-3.5" />
                            </button>
                          ) : null}
                          <input
                            type="number"
                            inputMode="numeric"
                            title="Iniciativa"
                            value={participant.initiative ?? ''}
                            className={['min-w-0 rounded-md border border-white/10 bg-black/30 px-1 text-center font-semibold text-white outline-none transition focus:border-red-300/60', active ? 'h-8 w-12 text-sm' : 'h-7 w-10 text-xs'].join(' ')}
                            placeholder="-"
                            onChange={(event) => {
                              const value = event.currentTarget.value.trim()
                              const initiative = Number(value)
                              onInitiativeChange(participant.participantId, value && Number.isFinite(initiative) ? initiative : null)
                            }}
                          />
                        </div>
                      ) : null}
                      {isMaster && onRemoveParticipant ? (
                        <button
                          type="button"
                          title="Remover do encontro"
                          className="absolute right-1.5 bottom-1.5 grid h-6 w-6 place-items-center rounded-md text-zinc-400 transition hover:bg-red-500/20 hover:text-red-200"
                          onClick={() => onRemoveParticipant(participant.participantId)}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                      {isMaster &&
                      participant.type === 'hazard' &&
                      participant.state !== 'TRIGGERED' &&
                      participant.state !== 'ACTIVE' &&
                      onTriggerHazard ? (
                        <button
                          type="button"
                          title={participant.executionMode === 'INSTANT' ? 'Disparar hazard' : 'Ativar hazard'}
                          className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-md text-amber-300 transition hover:bg-amber-500/20 hover:text-amber-100"
                          onClick={() => onTriggerHazard(participant.participantId)}
                        >
                          <Zap className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                    </div>
                  )
                })}
              </div>

              {isMaster ? (
                <button
                  type="button"
                  title="Avancar turno"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  onClick={onNextTurn}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        )}
      </section>
    )
  }

  return (
    <section className="max-h-[42vh] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 py-2 pl-3 pr-11">
        <div className="flex min-w-0 items-center gap-2">
          <Swords className="h-4 w-4 shrink-0 text-red-300" />
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2">
              <div className="truncate text-sm font-semibold text-white">{title}</div>
              {encounter ? (
                <span className="flex shrink-0 items-center gap-1 rounded-full border border-red-300/30 bg-red-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-200">
                  <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-red-400" />
                  Ativo
                </span>
              ) : null}
            </div>
            <div className="truncate text-[11px] uppercase text-zinc-500">{subtitle}</div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {onDetach ? (
            <button
              type="button"
              title="Destacar encontro"
              className="grid h-8 w-8 place-items-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
              onClick={onDetach}
            >
              <PanelRightOpen className="h-4 w-4" />
            </button>
          ) : null}
          {encounter && isMaster ? (
            <button
              type="button"
              title="Encerrar encontro"
              className="grid h-8 w-8 place-items-center rounded-md text-zinc-300 transition hover:bg-red-500/10 hover:text-red-100"
              onClick={onEnd}
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      {!encounter ? (
        <div className="grid gap-2 p-3">
          <div className="text-xs leading-relaxed text-zinc-400">
            Selecione tokens da cena para o Encounter Mode.
          </div>
          {isMaster ? selectedTokenBox : null}
          {isMaster ? (
            <button
              type="button"
              disabled={!canStart}
              className="flex h-9 items-center justify-center gap-2 rounded-md bg-red-600 px-3 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-45"
              onClick={onStart}
            >
              <Swords className="h-4 w-4" />
              Iniciar Encontro
            </button>
          ) : (
            <div className="rounded-md border border-dashed border-white/10 px-3 py-3 text-center text-xs text-zinc-500">
              Nenhum encontro ativo.
            </div>
          )}
        </div>
      ) : (
        <div className="grid min-h-0 gap-2 p-3">
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

          <div className="grid max-h-44 gap-1 overflow-auto pr-1">
            {encounter.participants.map((participant, index) => {
              const active = index === encounter.activeTurnIndex
              const initial = participant.name.trim().charAt(0).toUpperCase() || '?'

              return (
                <div
                  key={participant.participantId}
                  className={[
                    'grid grid-cols-[auto_minmax(0,1fr)_100px] items-center gap-2 rounded-md border px-2 py-1.5',
                    active ? 'border-red-300/50 bg-red-500/15' : 'border-white/10 bg-black/15',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full text-xs font-bold text-white',
                      participant.type === 'hazard' ? 'bg-amber-600' : 'bg-indigo-600',
                    ].join(' ')}
                  >
                    {participant.type === 'hazard' ? (
                      <TriangleAlert className="h-4 w-4" />
                    ) : participant.avatarUrl ? (
                      <img src={participant.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} />
                    ) : (
                      initial
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5">
                      <span className="truncate text-sm font-semibold text-white">{participant.name}</span>
                      {isMaster &&
                      participant.type === 'hazard' &&
                      participant.state !== 'TRIGGERED' &&
                      participant.state !== 'ACTIVE' &&
                      onTriggerHazard ? (
                        <button
                          type="button"
                          title={participant.executionMode === 'INSTANT' ? 'Disparar hazard' : 'Ativar hazard'}
                          className="grid h-5 w-5 shrink-0 place-items-center rounded text-amber-300 transition hover:bg-amber-500/20 hover:text-amber-100"
                          onClick={() => onTriggerHazard(participant.participantId)}
                        >
                          <Zap className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                      {isMaster && participant.type === 'creature' && onOpenHealthEditor ? (
                        <button
                          type="button"
                          title="Editar HP"
                          className="grid h-5 w-5 shrink-0 place-items-center rounded text-red-300 transition hover:bg-red-500/20 hover:text-red-100"
                          onClick={() => onOpenHealthEditor(participant.tokenId, participant.name)}
                        >
                          <Heart className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                      {isMaster && participant.type === 'creature' && active && onResetMovement ? (
                        <button
                          type="button"
                          title="Resetar movimento"
                          className="grid h-5 w-5 shrink-0 place-items-center rounded text-cyan-300 transition hover:bg-cyan-500/20 hover:text-cyan-100"
                          onClick={() => onResetMovement(participant.participantId)}
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                      {isMaster && onRemoveParticipant ? (
                        <button
                          type="button"
                          title="Remover do encontro"
                          className="ml-auto grid h-5 w-5 shrink-0 place-items-center rounded text-zinc-500 transition hover:bg-red-500/20 hover:text-red-200"
                          onClick={() => onRemoveParticipant(participant.participantId)}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                    </span>
                    {participant.type === 'creature' && participant.health ? (
                      <HealthBar health={participant.health} size="sm" />
                    ) : (
                      <span className="block text-[11px] text-zinc-500">
                        {active
                          ? 'Agindo agora'
                          : participant.type === 'hazard'
                            ? hazardParticipantStateLabels[participant.state]
                            : 'Aguardando'}
                      </span>
                    )}
                    {active && participant.type === 'creature' ? (
                      <MovementRemaining
                        maxMetersPerAction={participant.movement.maxMetersPerAction}
                        actionsRemaining={participant.movement.actionsRemaining}
                        metersUsedThisAction={participant.movement.metersUsedThisAction}
                      />
                    ) : null}
                  </span>
                  {isMaster ? (
                    <div className="flex items-center gap-1">
                      {onRollInitiative ? (
                        <button
                          type="button"
                          title="Rolar iniciativa (1d20)"
                          className="grid h-8 w-7 shrink-0 place-items-center rounded-md border border-white/10 bg-black/30 text-amber-300 transition hover:bg-amber-500/15 hover:text-amber-100"
                          onClick={() => onRollInitiative(participant.participantId)}
                        >
                          <Dices className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                      <input
                        type="number"
                        inputMode="numeric"
                        title="Iniciativa"
                        value={participant.initiative ?? ''}
                        className="h-8 min-w-0 flex-1 rounded-md border border-white/10 bg-black/30 px-1 text-center text-sm font-semibold text-white outline-none transition focus:border-red-300/60"
                        placeholder="-"
                        onChange={(event) => {
                          const value = event.currentTarget.value.trim()
                          const initiative = Number(value)
                          onInitiativeChange(participant.participantId, value && Number.isFinite(initiative) ? initiative : null)
                        }}
                      />
                    </div>
                  ) : (
                    <span className="text-center text-sm font-semibold text-zinc-200">{participant.initiative ?? '-'}</span>
                  )}
                  {active && isMaster && participant.type === 'creature' && onQuickAdjustHealth ? (
                    <div className="col-span-3 flex items-center gap-1.5 border-t border-white/10 pt-1.5">
                      <input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        title="Quantidade de PV"
                        value={quickHealthAmount}
                        className="h-7 w-16 shrink-0 rounded-md border border-white/10 bg-black/30 px-2 text-center text-xs font-semibold text-white outline-none transition focus:border-red-300/60"
                        onChange={(event) => {
                          const value = Math.max(1, Math.floor(Number(event.currentTarget.value)) || 1)
                          setQuickHealthAmount(value)
                        }}
                      />
                      <button
                        type="button"
                        className="flex h-7 flex-1 items-center justify-center rounded-md bg-red-600 text-[11px] font-semibold text-white transition hover:bg-red-500"
                        onClick={() => onQuickAdjustHealth(participant.tokenId, 'DAMAGE', quickHealthAmount)}
                      >
                        Causar dano
                      </button>
                      <button
                        type="button"
                        className="flex h-7 flex-1 items-center justify-center rounded-md bg-emerald-600 text-[11px] font-semibold text-white transition hover:bg-emerald-500"
                        onClick={() => onQuickAdjustHealth(participant.tokenId, 'HEAL', quickHealthAmount)}
                      >
                        Curar
                      </button>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>

          {isMaster && campaignId && activeParticipant?.type === 'hazard' ? (
            <HazardRoutineHint campaignId={campaignId} hazardEntryId={activeParticipant.hazardEntryId} hazardName={activeParticipant.name} />
          ) : null}
        </div>
      )}
    </section>
  )
}

