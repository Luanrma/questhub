import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import type { GameSystemKey } from '../catalog'
import {
  filterTokenPresentationForViewer,
  getGameSystemTokenPresentationProvider,
} from './registry'

const tokenPresentationParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
  tokenId: z.string().trim().min(1),
})

export function registerGameSystemAutomationRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/tokens/:tokenId/presentation', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = tokenPresentationParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Token invalido' })

    const member = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: auth.id,
        status: 'ACTIVE',
      },
      select: {
        role: true,
        campaign: { select: { gameSystem: true } },
      },
    })
    if (!member) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const token = await prisma.campaignToken.findFirst({
      where: {
        id: params.data.tokenId,
        campaignId: params.data.campaignId,
      },
      select: {
        id: true,
        controllerMember: { select: { userId: true } },
        actor: {
          select: {
            controllerMember: { select: { userId: true } },
            characterSheet: {
              select: {
                systemKey: true,
                schemaVersion: true,
                data: true,
                updatedAt: true,
              },
            },
          },
        },
      },
    })
    if (!token) return reply.status(404).send({ error: 'Token nao encontrado' })

    const provider = getGameSystemTokenPresentationProvider(
      member.campaign.gameSystem as GameSystemKey,
    )
    if (!provider) {
      return reply.send({
        available: false,
        capabilities: [],
        presentation: null,
      })
    }

    const controlsToken = member.role === 'MASTER'
      || token.controllerMember?.userId === auth.id
      || token.actor?.controllerMember?.userId === auth.id
    const viewer = {
      userId: auth.id,
      role: member.role,
      controlsToken,
    } as const

    const presentation = await provider.buildTokenPresentation({
      campaignId: params.data.campaignId,
      tokenId: token.id,
      characterSheet: token.actor?.characterSheet ?? null,
      viewer,
    })

    return reply.send({
      available: true,
      capabilities: provider.capabilities,
      presentation: filterTokenPresentationForViewer(presentation, viewer),
    })
  })
}
