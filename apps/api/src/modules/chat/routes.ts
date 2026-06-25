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

    const currentCampaignCharacter = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: payload.id,
        status: 'ACTIVE',
      },
      select: {
        characterId: true,
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
        characterId: true,
        content: true,
        createdAt: true,
        character: {
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
              characterId: message.characterId,
              characterName: message.character.name,
              role: message.character.campaigns[0]?.role ?? 'PLAYER',
              content: message.content,
              createdAt: message.createdAt,
            },
            currentCampaignCharacter.characterId,
          ),
        ),
    )
  })
}
