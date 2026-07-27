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

    const currentCampaignCharacter = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: payload.id,
        status: 'ACTIVE',
      },
      select: {
        actorId: true,
      },
    })

    if (!currentCampaignCharacter) return reply.status(403).send({ error: 'Acesso ao chat nao liberado' })

    const messages = await prisma.chatMessage.findMany({
      where: {
        campaignId: params.data.campaignId,
      },
      select: {
        id: true,
        campaignId: true,
        actorId: true,
        content: true,
        createdAt: true,
        actor: {
          select: {
            name: true,
            campaigns: {
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
              actorName: message.actor.name,
              role: message.actor.campaigns[0]?.role ?? 'PLAYER',
              content: message.content,
              createdAt: message.createdAt,
            },
            currentCampaignCharacter.actorId,
          ),
        ),
    )
  })
}
