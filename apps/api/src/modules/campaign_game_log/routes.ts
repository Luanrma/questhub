import type { FastifyInstance } from 'fastify'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { presentPersistedGameLogEntry } from './presenter'
import {
  CAMPAIGN_GAME_LOG_HISTORY_LIMIT,
  campaignGameLogParamsSchema,
  campaignGameLogQuerySchema,
} from './validation'

export function registerCampaignGameLogRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/game-log/entries', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignGameLogParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })
    const query = campaignGameLogQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Filtro de encontro invalido' })

    const member = await prisma.campaignMember.findFirst({
      where: { campaignId: params.data.campaignId, userId: payload.id, status: 'ACTIVE' },
      select: { id: true },
    })
    if (!member) return reply.status(403).send({ error: 'Acesso ao log nao liberado' })

    const entries = await prisma.campaignGameLogEntry.findMany({
      where: {
        campaignId: params.data.campaignId,
        encounterId: query.data.encounterId,
      },
      orderBy: { createdAt: 'desc' },
      take: CAMPAIGN_GAME_LOG_HISTORY_LIMIT,
    })

    return reply.send(entries.reverse().map(presentPersistedGameLogEntry))
  })
}
