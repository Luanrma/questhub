import type { VttCombatState } from '../domain/types'
import { createPortal } from 'react-dom'
import { EncounterTurnCarousel } from './EncounterTurnCarousel'

export function EncounterOverlay({
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
  if (!combat.participants[combat.activeTurnIndex]) return null

  const carousel = (
    <EncounterTurnCarousel
      combat={combat}
      isMaster={isMaster}
      onNextTurn={onNextTurn}
      onPreviousTurn={onPreviousTurn}
      onInitiativeAdjustment={onInitiativeAdjustment}
      onRemoveParticipant={onRemoveParticipant}
    />
  )

  const headerSlot = typeof document === 'undefined'
    ? null
    : document.getElementById('campaign-encounter-header-slot')

  if (headerSlot) return createPortal(carousel, headerSlot)

  return (
    <div className="pointer-events-auto absolute left-[76px] right-[68px] top-0 z-50 h-[56px]">
      {carousel}
    </div>
  )
}
