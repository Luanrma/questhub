import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'

const paramsSchema = z.object({
  campaignId: z.string().trim().min(1),
  actorId: z.string().trim().min(1),
})

async function requireMaster(campaignId: string, userId: string) {
  return prisma.campaignMember.findFirst({
    where: {
      campaignId,
      userId,
      role: 'MASTER',
      status: 'ACTIVE',
    },
    select: { id: true },
  })
}

export function registerCampaignActorRoutes(app: FastifyInstance) {
  app.delete('/api/campaigns/:campaignId/actors/:actorId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Ator invalido' })
    if (!(await requireMaster(params.data.campaignId, auth.id))) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode arquivar atores' })
    }

    const actor = await prisma.campaignActor.findFirst({
      where: {
        id: params.data.actorId,
        campaignId: params.data.campaignId,
      },
      select: { id: true },
    })
    if (!actor) return reply.status(404).send({ error: 'Ator nao encontrado' })

    const archivedAt = new Date()
    await prisma.$transaction(async (tx) => {
      await tx.campaignToken.updateMany({
        where: { campaignId: params.data.campaignId, actorId: actor.id },
        data: { actorId: null },
      })
      await tx.campaignActor.update({
        where: { id: actor.id },
        data: {
          archivedAt,
          controllerMemberId: null,
        },
      })
    })

    return reply.send({ ok: true, actorId: actor.id, archivedAt })
  })

  app.post('/api/campaigns/:campaignId/actors/:actorId/restore', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Ator invalido' })
    if (!(await requireMaster(params.data.campaignId, auth.id))) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode restaurar atores' })
    }

    const actor = await prisma.campaignActor.findFirst({
      where: {
        id: params.data.actorId,
        campaignId: params.data.campaignId,
        archivedAt: { not: null },
      },
      select: { id: true },
    })
    if (!actor) return reply.status(404).send({ error: 'Ator arquivado nao encontrado' })

    await prisma.campaignActor.update({
      where: { id: actor.id },
      data: { archivedAt: null },
    })

    return reply.send({ ok: true, actorId: actor.id, archivedAt: null })
  })
}
