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
            userId: user.id,
            status: 'ACTIVE',
          },
          select: {
            id: true,
            role: true,
            user: { select: { email: true } },
          },
        })

        if (!campaignMember) {
          ack?.({ ok: false, error: 'Acesso ao chat nao liberado' })
          return
        }

        const actor = parsed.data.actorId
          ? await prisma.campaignActor.findFirst({
              where: {
                id: parsed.data.actorId,
                campaignId: parsed.data.campaignId,
                archivedAt: null,
              },
              select: {
                id: true,
                name: true,
                avatarUrl: true,
                controllerMemberId: true,
              },
            })
          : null

        if (parsed.data.actorId && !actor) {
          ack?.({ ok: false, error: 'Ator nao pertence a esta campanha' })
          return
        }
        if (actor && campaignMember.role !== 'MASTER' && actor.controllerMemberId !== campaignMember.id) {
          ack?.({ ok: false, error: 'Sem permissao para falar por este ator' })
          return
        }

        const authorName = actor?.name
          ?? (campaignMember.role === 'MASTER' ? 'Mestre' : campaignMember.user.email)
        const message = await prisma.chatMessage.create({
          data: {
            campaignId: parsed.data.campaignId,
            actorId: actor?.id ?? null,
            userId: user.id,
            authorName,
            authorRole: campaignMember.role,
            actorNameSnapshot: actor?.name ?? null,
            actorAvatarUrlSnapshot: actor?.avatarUrl ?? null,
            content: parsed.data.content.trim(),
          },
          select: {
            id: true,
            campaignId: true,
            actorId: true,
            userId: true,
            authorName: true,
            authorRole: true,
            actorNameSnapshot: true,
            actorAvatarUrlSnapshot: true,
            content: true,
            createdAt: true,
          },
        })

        const messageForPresentation = {
          id: message.id,
          campaignId: message.campaignId,
          actorId: message.actorId,
          userId: message.userId,
          actorName: message.actorNameSnapshot ?? message.authorName,
          actorAvatarUrl: message.actorAvatarUrlSnapshot,
          role: message.authorRole,
          content: message.content,
          createdAt: message.createdAt,
        }
        const presentedForSender = presentChatMessage(messageForPresentation, user.id)
        const presentedForBroadcast = presentChatMessage(messageForPresentation)

        socket.to(`campaign:${parsed.data.campaignId}`).emit('chat:message:created', presentedForBroadcast)
        ack?.({ ok: true, message: presentedForSender })
      } catch {
        ack?.({ ok: false, error: 'Erro ao enviar mensagem' })
      }
    })
  })
}
