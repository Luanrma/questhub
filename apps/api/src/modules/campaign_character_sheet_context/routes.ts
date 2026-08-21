import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { canReadActorEffects } from '../campaign_actor_effects/authorization'

const paramsSchema = z.object({
  campaignId: z.string().trim().min(1),
  sheetId: z.string().trim().min(1),
})

export function registerCampaignCharacterSheetContextRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/character-sheets/:sheetId/context', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Ficha invalida' })

    const member = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: auth.id,
        status: 'ACTIVE',
      },
      select: { id: true, role: true },
    })
    if (!member) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const sheet = await prisma.campaignCharacterSheet.findFirst({
      where: {
        id: params.data.sheetId,
        actor: {
          campaignId: params.data.campaignId,
          archivedAt: null,
        },
      },
      select: {
        id: true,
        actor: {
          select: {
            id: true,
            controllerMemberId: true,
          },
        },
      },
    })
    if (!sheet) return reply.status(404).send({ error: 'Ficha nao encontrada' })

    const canRead = canReadActorEffects({
      role: member.role,
      memberId: member.id,
      controllerMemberId: sheet.actor.controllerMemberId,
    })
    if (!canRead) return reply.status(403).send({ error: 'Sem permissao para acessar esta ficha' })

    return reply.send({
      sheetId: sheet.id,
      actorId: sheet.actor.id,
    })
  })
}
