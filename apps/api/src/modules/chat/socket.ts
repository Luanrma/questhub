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

        const campaignMember = await prisma.campaignMember.findFirst({
          where: {
            campaignId: parsed.data.campaignId,
            actorId: parsed.data.actorId,
            userId: user.id,
            status: 'ACTIVE',
          },
          select: {
            role: true,
            actorId: true,
            actor: { select: { name: true } },
          },
        })

        if (!campaignMember) {
          ack?.({ ok: false, error: 'Acesso ao chat nao liberado' })
          return
        }

        if (campaignMember.role === 'NPC') {
          ack?.({ ok: false, error: 'NPC nao envia mensagem no chat' })
          return
        }

        const message = await prisma.chatMessage.create({
          data: {
            campaign: { connect: { id: parsed.data.campaignId } },
            actor: { connect: { id: campaignMember.actorId } },
            user: { connect: { id: user.id } },
            content: parsed.data.content.trim(),
          },
          select: {
            id: true,
            campaignId: true,
            actorId: true,
            content: true,
            createdAt: true,
          },
        })

        const messageForPresentation = {
          ...message,
          actorName: campaignMember.actor.name,
          role: campaignMember.role,
        }
        const presentedForSender = presentChatMessage(messageForPresentation, campaignMember.actorId)
        const presentedForBroadcast = presentChatMessage(messageForPresentation)

        socket.to(`campaign:${parsed.data.campaignId}`).emit('chat:message:created', presentedForBroadcast)
        ack?.({ ok: true, message: presentedForSender })
      } catch {
        ack?.({ ok: false, error: 'Erro ao enviar mensagem' })
      }
    })
  })
}
