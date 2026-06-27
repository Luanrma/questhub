import { useCallback, useState } from 'react'
import type { Socket } from 'socket.io-client'
import { Dice5 } from 'lucide-react'
import { Button } from '../../components/Button'
import { CHAT_LOCAL_MESSAGE_EVENT, type ChatMessage } from '../../components/CampaignChat'
import { DiceModal } from './DiceModal'
import type { DiceSides } from './types'

type VttDiceCharacter = {
  id: string
}

type ChatAck = {
  ok: boolean
  error?: string
  message?: ChatMessage
}

type VttDiceControlsProps = {
  campaignId: string
  character: VttDiceCharacter | null
  socket: Socket | null
  enabled: boolean
}

export function VttDiceControls({ campaignId, character, socket, enabled }: VttDiceControlsProps) {
  const [diceRolling, setDiceRolling] = useState(false)
  const [diceModalOpen, setDiceModalOpen] = useState(false)
  const canRollDice = Boolean(enabled && character?.id && socket)

  const publishRoll = useCallback(
    async ({ sides, value }: { sides: DiceSides; value: number }) => {
      if (!socket || !character?.id) return

      setDiceRolling(true)
      socket.emit('vtt:dice:roll', { campaignId, rolls: [{ sides, value }] })

      try {
        const ack = await new Promise<ChatAck>((resolve, reject) => {
          socket.timeout(5000).emit(
            'chat:message:create',
            { campaignId, characterId: character.id, content: `ROLOU D${sides}: ${value}` },
            (err: Error | null, response?: ChatAck) => {
              if (err) {
                reject(new Error('Tempo esgotado ao publicar rolagem.'))
                return
              }

              resolve(response ?? { ok: false, error: 'Resposta invalida do servidor.' })
            },
          )
        })

        if (!ack.ok || !ack.message) {
          alert(ack.error ?? 'Nao foi possivel publicar a rolagem.')
          return
        }

        window.dispatchEvent(new CustomEvent<ChatMessage>(CHAT_LOCAL_MESSAGE_EVENT, { detail: ack.message }))
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Nao foi possivel publicar a rolagem.'
        alert(message)
      } finally {
        setDiceRolling(false)
      }
    },
    [campaignId, character?.id, socket],
  )

  return (
    <>
      <div className="relative flex items-center gap-2">
        <Button
          type="button"
          variant="primary"
          className="h-9 gap-2 px-3"
          disabled={!canRollDice || diceRolling}
          onClick={() => setDiceModalOpen(true)}
        >
          <Dice5 className="h-4 w-4" />
          Dados 3D
        </Button>
      </div>

      <DiceModal
        isOpen={diceModalOpen}
        disabled={!canRollDice || diceRolling}
        onClose={() => setDiceModalOpen(false)}
        onRollComplete={publishRoll}
      />
    </>
  )
}
