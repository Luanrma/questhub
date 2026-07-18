import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, PanelRightOpen, Pin, Swords, X } from 'lucide-react'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import type { VttCombatParticipant, VttCombatState, VttPlayerToken } from '../domain/types'
import { TokenAvatar } from './TokenAvatar'

type CombatTrackerDisplayMode = 'sidebar' | 'detached'
type DetachedCombatTurn = {
  participant: VttCombatParticipant
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

function getDetachedTurns(combat: VttCombatState, sideSlots: number): DetachedCombatTurn[] {
  const participantCount = combat.participants.length
  if (!participantCount) return []

  const activeTurnIndex = clampValue(combat.activeTurnIndex, 0, Math.max(0, participantCount - 1))
  const turns: DetachedCombatTurn[] = []
  const usedIndexes = new Set<number>()

  for (let offset = -sideSlots; offset <= sideSlots; offset += 1) {
    const index = getCircularIndex(activeTurnIndex + offset, participantCount)
    if (usedIndexes.has(index)) continue
    usedIndexes.add(index)
    turns.push({
      participant: combat.participants[index],
      index,
      active: index === activeTurnIndex,
    })
  }

  return turns
}

export function CombatTrackerPanel({
  combat,
  isMaster,
  canStart,
  tokenCount,
  selectedTokens = [],
  displayMode = 'sidebar',
  onStart,
  onEnd,
  onRemoveSelectedToken = () => {},
  onNextTurn,
  onPreviousTurn,
  onInitiativeChange,
  onDetach,
  onAttach,
}: {
  combat: VttCombatState | null
  isMaster: boolean
  canStart: boolean
  tokenCount: number
  selectedTokens?: VttPlayerToken[]
  displayMode?: CombatTrackerDisplayMode
  onStart: () => void
  onEnd: () => void
  onRemoveSelectedToken?: (tokenId: string) => void
  onNextTurn: () => void
  onPreviousTurn: () => void
  onInitiativeChange: (tokenId: string, initiative: number | null) => void
  onDetach?: () => void
  onAttach?: () => void
}) {
  const activeParticipant = combat?.participants[combat.activeTurnIndex] ?? null
  const detached = displayMode === 'detached'

  const title = combat && activeParticipant ? `Encontro - ${activeParticipant.name}` : 'Encounter Mode'
  const subtitle = combat ? `Rodada ${combat.round}${activeParticipant ? ' - turno atual' : ''}` : `${selectedTokens.length}/${tokenCount} token${tokenCount === 1 ? '' : 's'} selecionados`
  const selectedTokenBox = (
    <div
      data-encounter-dropzone="true"
      className={[
        'grid min-h-24 gap-2 rounded-md border border-dashed px-3 py-3',
        selectedTokens.length ? 'border-indigo-300/35 bg-indigo-500/10' : 'border-white/10 bg-black/20',
      ].join(' ')}
    >
      {selectedTokens.length ? (
        detached ? (
          <div className="flex min-h-[104px] items-center gap-3 overflow-x-auto pb-1">
            {selectedTokens.map((token, index) => {

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
                    className="grid h-10 w-10 place-items-center overflow-hidden rounded-full text-sm font-bold text-white"
                  >
                    <TokenAvatar avatarUrl={token.avatarUrl} name={token.name} fallbackSeed={token.id} color={token.color} />
                  </span>
                  <span className="w-full min-w-0">
                    <span className="block truncate text-xs font-semibold text-white">{token.name}</span>
                    <span className="block truncate text-[10px] uppercase text-zinc-500">{token.role === 'NPC' ? 'NPC' : token.ownerName}</span>
                  </span>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid max-h-36 gap-2 overflow-auto pr-1">
          {selectedTokens.map((token) => {

            return (
              <div key={token.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
                <span
                  className="grid h-7 w-7 place-items-center overflow-hidden rounded-full text-xs font-bold text-white"
                >
                  <TokenAvatar avatarUrl={token.avatarUrl} name={token.name} fallbackSeed={token.id} color={token.color} />
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
  const detachedSideSlots = getDetachedSideSlots(detachedBox.width, combat?.participants.length ?? 0)
  const detachedTurns = useMemo(
    () => (combat ? getDetachedTurns(combat, detachedSideSlots) : []),
    [combat, detachedSideSlots],
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
              <div className="truncate text-sm font-semibold">{title}</div>
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
            {combat && isMaster ? (
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

        {!combat ? (
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

                  return (
                    <div
                      key={participant.tokenId}
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
                          active ? 'h-12 w-12 text-sm ring-2 ring-red-200/70' : 'h-9 w-9 text-xs',
                        ].join(' ')}
                      >
                        <TokenAvatar avatarUrl={participant.avatarUrl} name={participant.name} fallbackSeed={participant.tokenId} color={participant.color} />
                      </span>
                      <span className="w-full min-w-0">
                        <span className={['block truncate font-semibold text-white', active ? 'text-sm' : 'text-xs'].join(' ')}>{participant.name}</span>
                        <span className={['block uppercase', active ? 'text-[11px] text-red-200' : 'text-[10px] text-zinc-500'].join(' ')}>
                          {active ? 'Agindo agora' : 'Aguardando'}
                        </span>
                      </span>
                      {isMaster ? (
                        <input
                          type="number"
                          inputMode="numeric"
                          title="Iniciativa"
                          value={participant.initiative ?? ''}
                          className={['rounded-md border border-white/10 bg-black/30 px-2 text-center font-semibold text-white outline-none transition focus:border-red-300/60', active ? 'h-8 w-16 text-sm' : 'h-7 w-14 text-xs'].join(' ')}
                          placeholder="-"
                          onChange={(event) => {
                            const value = event.currentTarget.value.trim()
                            const initiative = Number(value)
                            onInitiativeChange(participant.tokenId, value && Number.isFinite(initiative) ? initiative : null)
                          }}
                        />
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
            <div className="truncate text-sm font-semibold text-white">{title}</div>
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
          {combat && isMaster ? (
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

      {!combat ? (
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
            {combat.participants.map((participant, index) => {
              const active = index === combat.activeTurnIndex

              return (
                <div
                  key={participant.tokenId}
                  className={[
                    'grid grid-cols-[auto_minmax(0,1fr)_72px] items-center gap-2 rounded-md border px-2 py-1.5',
                    active ? 'border-red-300/50 bg-red-500/15' : 'border-white/10 bg-black/15',
                  ].join(' ')}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full text-xs font-bold text-white">
                    <TokenAvatar avatarUrl={participant.avatarUrl} name={participant.name} fallbackSeed={participant.tokenId} color={participant.color} />
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
                        onInitiativeChange(participant.tokenId, value && Number.isFinite(initiative) ? initiative : null)
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
