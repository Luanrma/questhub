import type { Socket } from 'socket.io-client'
import { CHAT_LOCAL_MESSAGE_EVENT, type ChatMessage } from '../../../../components/CampaignChat'

type ChatAck = {
  ok: boolean
  error?: string
  message?: ChatMessage
}

type PublishDiceRollChatMessageInput = {
  socket: Socket
  campaignId: string
  characterId: string
  content: string
  diceRoll?: { notation: string; total: number }
}

type PublishDiceRollChatMessageResult =
  | {
      ok: true
    }
  | {
      ok: false
      error: string
    }

export async function publishDiceRollChatMessage({
  socket,
  campaignId,
  characterId,
  content,
  diceRoll,
}: PublishDiceRollChatMessageInput): Promise<PublishDiceRollChatMessageResult> {
  try {
    const payload = diceRoll ? { campaignId, characterId, content, kind: 'DICE_ROLL' as const, diceRoll } : { campaignId, characterId, content }
    const ack = await new Promise<ChatAck>((resolve, reject) => {
      socket.timeout(5000).emit('chat:message:create', payload, (err: Error | null, response?: ChatAck) => {
        if (err) {
          reject(new Error('Tempo esgotado ao publicar rolagem.'))
          return
        }

        resolve(response ?? { ok: false, error: 'Resposta invalida do servidor.' })
      })
    })

    if (!ack.ok || !ack.message) {
      return { ok: false, error: ack.error ?? 'Nao foi possivel publicar a rolagem no chat.' }
    }

    window.dispatchEvent(new CustomEvent<ChatMessage>(CHAT_LOCAL_MESSAGE_EVENT, { detail: ack.message }))
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Nao foi possivel publicar a rolagem no chat.' }
  }
}
