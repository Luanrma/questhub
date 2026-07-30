import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { VttCombatParticipant, VttCombatState } from '../domain/types'
import {
  circularEncounterOffset,
  encounterCarouselCardProminence,
  encounterCarouselCardSpacing,
  encounterCarouselDisplayOffset,
  encounterCarouselWindow,
  isEncounterCarouselOffsetVisible,
} from '../domain/encounterCarousel'
import { CombatInitiativeControl } from './CombatInitiativeControl'
import { TokenAvatar } from './TokenAvatar'

function TurnCard({
  participant,
  active,
  visible,
  offset,
  spacing,
  prominence,
  isMaster,
  onInitiativeAdjustment,
  onRemoveParticipant,
}: {
  participant: VttCombatParticipant
  active: boolean
  visible: boolean
  offset: number
  spacing: number
  prominence: number
  isMaster: boolean
  onInitiativeAdjustment: (tokenId: string, initiativeAdjustment: number) => void
  onRemoveParticipant: (tokenId: string) => void
}) {
  return (
    <article
      aria-current={active ? 'step' : undefined}
      aria-hidden={!visible}
      className={[
        'absolute left-1/2 top-[108px] grid w-[126px] overflow-hidden rounded-xl border text-center transition-[transform,opacity,filter] duration-300 ease-out',
        active
          ? 'z-20 border-red-200/80 bg-gradient-to-b from-red-500/25 to-[#131016] shadow-[0_0_32px_rgba(248,113,113,0.3)]'
          : 'z-10 border-white/10 bg-[#111219]/95 shadow-xl',
        visible ? '' : 'pointer-events-none',
      ].join(' ')}
      style={{
        transform: `translate(calc(-50% + ${offset * spacing}px), -50%) scale(${active ? 1.12 : 0.95})`,
        opacity: visible ? prominence : 0,
        filter: `blur(${visible ? (1 - prominence) * 0.8 : 2}px)`,
      }}
    >
      <div className={['relative overflow-hidden border-b', active ? 'h-[84px] border-red-200/25' : 'h-[72px] border-white/10'].join(' ')}>
        <TokenAvatar
          avatarUrl={participant.avatarUrl}
          name={participant.name}
          fallbackSeed={participant.tokenId}
          color={participant.color}
          className="h-full w-full object-cover"
        />
        {active ? (
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-950/95 to-transparent pb-1 pt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-red-100">
            Agindo agora
          </span>
        ) : null}
        {isMaster ? (
          <button
            type="button"
            title={`Remover ${participant.name} do encontro`}
            aria-label={`Remover ${participant.name} do encontro`}
            className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-md border border-black/30 bg-black/55 text-zinc-300 transition hover:bg-red-600 hover:text-white"
            onClick={() => onRemoveParticipant(participant.tokenId)}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : null}
      </div>
      <div className="grid gap-2 px-2.5 py-2.5">
        <div className="truncate text-[13px] font-semibold text-white">{participant.name}</div>
        <CombatInitiativeControl
          participant={participant}
          isMaster={isMaster}
          compact={!active}
          onAdjustment={(adjustment) => onInitiativeAdjustment(participant.tokenId, adjustment)}
        />
      </div>
    </article>
  )
}

export function EncounterTurnCarousel({
  combat,
  isMaster,
  onNextTurn,
  onPreviousTurn,
  onInitiativeAdjustment,
  onRemoveParticipant,
}: {
  combat: VttCombatState
  isMaster: boolean
  onNextTurn: () => void
  onPreviousTurn: () => void
  onInitiativeAdjustment: (tokenId: string, initiativeAdjustment: number) => void
  onRemoveParticipant: (tokenId: string) => void
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(640)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setViewportWidth(entry.contentRect.width)
    })
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  const activeIndex = Math.min(
    Math.max(0, combat.activeTurnIndex),
    Math.max(0, combat.participants.length - 1),
  )
  const spacing = encounterCarouselCardSpacing
  const { leftSlots, rightSlots } = encounterCarouselWindow(
    combat.participants.length,
    viewportWidth,
    isMaster,
  )
  const participantOffsets = combat.participants.map((_, index) => (
    circularEncounterOffset(index, activeIndex, combat.participants.length)
  ))
  const visibleOffsets = participantOffsets.filter((offset) => (
    isEncounterCarouselOffsetVisible(offset, leftSlots, rightSlots)
  ))
  const leftmostOffset = Math.min(...visibleOffsets, 0)
  const rightmostOffset = Math.max(...visibleOffsets, 0)
  const leftEdgeHalfWidth = leftmostOffset === 0 ? 72 : 62
  const rightEdgeHalfWidth = rightmostOffset === 0 ? 72 : 62
  const navigationGap = 10
  const navigationSize = 36

  return (
    <section className="relative h-full min-h-[56px] min-w-0 overflow-visible">
      <div className="absolute inset-0">
        {isMaster ? (
          <button
            type="button"
            title="Voltar turno"
            className="absolute top-[90px] z-30 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-[#0b0c11]/90 text-zinc-200 shadow-lg backdrop-blur-xl transition-[left,background-color,border-color] duration-300 hover:border-red-300/30 hover:bg-red-500/20 hover:text-white"
            style={{
              left: `calc(50% + ${leftmostOffset * spacing - leftEdgeHalfWidth - navigationGap - navigationSize}px)`,
            }}
            onClick={onPreviousTurn}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        ) : null}

        <div ref={viewportRef} className="absolute inset-0 min-w-0 overflow-visible">
          {combat.participants.map((participant, index) => {
            const offset = participantOffsets[index] ?? 0
            const visible = isEncounterCarouselOffsetVisible(
              offset,
              leftSlots,
              rightSlots,
            )
            const displayOffset = encounterCarouselDisplayOffset(
              offset,
              leftSlots,
              rightSlots,
            )
            const prominence = encounterCarouselCardProminence(offset)
            return (
              <TurnCard
                key={participant.tokenId}
                participant={participant}
                active={index === activeIndex}
                visible={visible}
                offset={displayOffset}
                spacing={spacing}
                prominence={prominence}
                isMaster={isMaster}
                onInitiativeAdjustment={onInitiativeAdjustment}
                onRemoveParticipant={onRemoveParticipant}
              />
            )
          })}
        </div>

        {isMaster ? (
          <button
            type="button"
            title="Avançar turno"
            className="absolute top-[90px] z-30 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-[#0b0c11]/90 text-zinc-200 shadow-lg backdrop-blur-xl transition-[left,background-color,border-color] duration-300 hover:border-red-300/30 hover:bg-red-500/20 hover:text-white"
            style={{
              left: `calc(50% + ${rightmostOffset * spacing + rightEdgeHalfWidth + navigationGap}px)`,
            }}
            onClick={onNextTurn}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </section>
  )
}
