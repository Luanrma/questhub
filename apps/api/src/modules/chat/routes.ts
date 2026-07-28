import type { FastifyInstance } from 'fastify'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { presentChatMessage } from './presenter'
import { CHAT_HISTORY_LIMIT, chatCampaignParamsSchema } from './validation'

export function registerChatRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/chat/messages', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = chatCampaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const currentCampaignMember = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: payload.id,
        status: 'ACTIVE',
      },
      select: { id: true },
    })

    if (!currentCampaignMember) return reply.status(403).send({ error: 'Acesso ao chat nao liberado' })

    const messages = await prisma.chatMessage.findMany({
      where: {
        campaignId: params.data.campaignId,
      },
      select: {
        id: true,
        campaignId: true,
        actorId: true,
        userId: true,
        content: true,
        createdAt: true,
        actor: { select: { name: true } },
        user: {
          select: {
            email: true,
            campaignMembers: {
              where: { campaignId: params.data.campaignId },
              select: { role: true },
              take: 1,
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: CHAT_HISTORY_LIMIT,
    })

    return reply.send(
      messages
        .reverse()
        .map((message) =>
          presentChatMessage(
            {
              id: message.id,
              campaignId: message.campaignId,
              actorId: message.actorId,
              userId: message.userId,
              actorName: message.actor?.name
                ?? (message.user.campaignMembers[0]?.role === 'MASTER' ? 'Mestre' : message.user.email),
              role: message.user.campaignMembers[0]?.role ?? 'PLAYER',
              content: message.content,
              createdAt: message.createdAt,
            },
            payload.id,
          ),
        ),
    )
  })
}
