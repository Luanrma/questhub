import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'

const paramsSchema = z.object({
  campaignId: z.string().trim().min(1),
})

export function registerInventorySystemRoute(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/inventory/system', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha inválida' })

    const member = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: auth.id,
        status: 'ACTIVE',
      },
      select: {
        campaign: { select: { gameSystem: true } },
      },
    })
    if (!member) return reply.status(403).send({ error: 'Acesso não liberado' })

    return reply.send({ gameSystem: member.campaign.gameSystem })
  })
}
