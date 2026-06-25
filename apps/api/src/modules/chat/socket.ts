import type { Server as SocketIOServer } from 'socket.io'
import { prisma } from '../../db/prisma'
import { presentChatMessage } from './presenter'
import { chatMessageCreateSchema } from './validation'

type ChatAck = (response: { ok: boolean; error?: string; message?: ReturnType<typeof presentChatMessage> }) => void

export function registerChatSocketHandlers(io: SocketIOServer) {
  io.on('connection', (socket) => {
    const user = socket.data.user as { id: string } | undefined

    socket.on('chat:message:create', async (input: unknown, ack?: ChatAck) => {
      try {
        if (!user) {
          ack?.({ ok: false, error: 'Nao autenticado' })
          return
        }

        const parsed = chatMessageCreateSchema.safeParse(input)
        if (!parsed.success) {
          ack?.({ ok: false, error: 'Mensagem invalida' })
          return
        }

        const campaignCharacter = await prisma.campaignCharacter.findFirst({
          where: {
            campaignId: parsed.data.campaignId,
            characterId: parsed.data.characterId,
            userId: user.id,
            status: 'ACTIVE',
          },
          select: {
            role: true,
            characterId: true,
            character: { select: { name: true } },
          },
        })

        if (!campaignCharacter) {
          ack?.({ ok: false, error: 'Acesso ao chat nao liberado' })
          return
        }

        if (campaignCharacter.role === 'NPC') {
          ack?.({ ok: false, error: 'NPC nao envia mensagem no chat' })
          return
        }

        const message = await prisma.chatMessage.create({
          data: {
            campaign: { connect: { id: parsed.data.campaignId } },
            character: { connect: { id: campaignCharacter.characterId } },
            user: { connect: { id: user.id } },
            content: parsed.data.content.trim(),
          },
          select: {
            id: true,
            campaignId: true,
            characterId: true,
            content: true,
            createdAt: true,
          },
        })

        const messageForPresentation = {
          ...message,
          characterName: campaignCharacter.character.name,
          role: campaignCharacter.role,
        }
        const presentedForSender = presentChatMessage(messageForPresentation, campaignCharacter.characterId)
        const presentedForBroadcast = presentChatMessage(messageForPresentation)

        socket.to(`campaign:${parsed.data.campaignId}`).emit('chat:message:created', presentedForBroadcast)
        ack?.({ ok: true, message: presentedForSender })
      } catch {
        ack?.({ ok: false, error: 'Erro ao enviar mensagem' })
      }
    })
  })
}
