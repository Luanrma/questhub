import { memo, useId, useRef, type CSSProperties } from 'react'
import type { Socket } from 'socket.io-client'
import { useVttDiceRoller } from '../hooks/useVttDiceRoller'
import { VttDicePanel } from './VttDicePanel'

type VttDiceCharacter = {
  id: string
}

type VttDiceControlsProps = {
  campaignId: string
  character: VttDiceCharacter | null
  socket: Socket | null
  enabled: boolean
  open?: boolean
  clearSignal?: number
  onClose?: () => void
  className?: string
}

const diceRollZoneStyle: CSSProperties = {
  position: 'absolute',
  pointerEvents: 'none',
  overflow: 'hidden',
  top: '8rem',
  bottom: '8rem',
  left: '7rem',
  right: '7rem',
  zIndex: 10,
}

export const VttDiceControls = memo(function VttDiceControls({
  campaignId,
  character,
  socket,
  enabled,
  open = true,
  clearSignal = 0,
  onClose,
  className = '',
}: VttDiceControlsProps) {
  const reactId = useId()
  const containerIdRef = useRef(`vtt-dice-box-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const diceRoller = useVttDiceRoller({
    campaignId,
    character,
    socket,
    enabled,
    clearSignal,
    containerId: containerIdRef.current,
    containerRef,
  })

  return (
    <div className={className}>
      <div className={['pointer-events-none absolute inset-0 z-0', diceRoller.visibleCount || diceRoller.rolling ? 'opacity-100' : 'opacity-0'].join(' ')}>
        <div ref={containerRef} id={containerIdRef.current} style={diceRollZoneStyle} />
      </div>

      {open ? (
        <VttDicePanel
          canRollDice={diceRoller.canRollDice}
          command={diceRoller.command}
          diceThemeColor={diceRoller.diceThemeColor}
          initializing={diceRoller.initializing}
          quantities={diceRoller.quantities}
          remainingSlots={diceRoller.remainingSlots}
          rolling={diceRoller.rolling}
          selectedCount={diceRoller.selectedCount}
          visibleCount={diceRoller.visibleCount}
          warning={diceRoller.warning}
          onClear={diceRoller.clearDice}
          onClose={onClose}
          onCommandChange={diceRoller.updateCommand}
          onQuantityChange={diceRoller.setQuantity}
          onRoll={() => void diceRoller.rollDice()}
          onThemeColorChange={diceRoller.updateDiceThemeColor}
        />
      ) : null}
    </div>
  )
})
