import { forwardRef, memo, useId, useImperativeHandle, useRef, type CSSProperties } from 'react'
import type { Socket } from 'socket.io-client'
import { useVttDiceRoller } from '../hooks/useVttDiceRoller'
import { DiceResultPopup } from './DiceResultPopup'
import { VttDicePanel } from './VttDicePanel'

type VttDiceCharacter = {
  id: string
}

export type VttDiceControlsHandle = {
  rollForInitiative: (participantId: string) => void
}

type VttDiceControlsProps = {
  campaignId: string
  character: VttDiceCharacter | null
  socket: Socket | null
  enabled: boolean
  open?: boolean
  clearSignal?: number
  onClose?: () => void
  onInitiativeRolled?: (participantId: string, total: number) => void
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

export const VttDiceControls = memo(
  forwardRef<VttDiceControlsHandle, VttDiceControlsProps>(function VttDiceControls(
    { campaignId, character, socket, enabled, open = true, clearSignal = 0, onClose, onInitiativeRolled, className = '' },
    ref,
  ) {
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
    onInitiativeRolled,
  })

  useImperativeHandle(ref, () => ({
    rollForInitiative: (participantId: string) => {
      void diceRoller.rollForInitiative(participantId)
    },
  }))

  return (
    <div className={className}>
      <div
        className={[
          'pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-out',
          diceRoller.visibleCount || diceRoller.rolling ? 'opacity-100' : 'opacity-0',
          diceRoller.diceFading ? 'opacity-0' : '',
        ].join(' ')}
      >
        <div ref={containerRef} id={containerIdRef.current} style={diceRollZoneStyle} />
      </div>

      <DiceResultPopup result={diceRoller.resultPopup} visible={diceRoller.displaySettings.showResultPopup} />

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
          showClearButton={diceRoller.displaySettings.autoClear === 'manual'}
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
  }),
)
