import type { FastifyInstance } from 'fastify'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { buildDefaultCharacterSheetEnvelope, safeValidateCharacterSheetEnvelope } from './registry'
import { validatePathfinder2eIdentityWritePolicy } from './character-sheet-policy'

export function registerCharacterSheetRoutes(app: FastifyInstance) {
  app.get('/api/character-sheets/systems/:system/default', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = z.object({ system: z.string().min(1) }).safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Sistema de ficha invalido' })

    try {
      return reply.send(buildDefaultCharacterSheetEnvelope(params.data.system))
    } catch {
      return reply.status(400).send({ error: 'Sistema de ficha nao suportado' })
    }
  })

  app.get('/api/characters/:characterId/sheet', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = z.object({ characterId: z.string().min(1) }).safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await prisma.character.findFirst({
      where: {
        id: params.data.characterId,
        deletedAt: null,
        OR: [
          { userId: payload.id },
          {
            campaigns: {
              some: {
                campaign: {
                  characters: {
                    some: {
                      userId: payload.id,
                      role: 'MASTER',
                      status: 'ACTIVE',
                    },
                  },
                },
              },
            },
          },
        ],
      },
      select: {
        id: true,
        system: true,
        sheet: true,
      },
    })

    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    return reply.send({
      characterId: character.id,
      system: character.system,
      sheet: character.sheet,
    })
  })

  app.put('/api/characters/:characterId/sheet', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = z.object({ characterId: z.string().min(1) }).safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const parsedSheet = safeValidateCharacterSheetEnvelope(req.body ?? {})
    if (!parsedSheet.success) return reply.status(400).send({ error: 'Ficha invalida' })

    const character = await prisma.character.findFirst({
      where: {
        id: params.data.characterId,
        deletedAt: null,
        OR: [
          { userId: payload.id },
          {
            campaigns: {
              some: {
                campaign: {
                  characters: {
                    some: {
                      userId: payload.id,
                      role: 'MASTER',
                      status: 'ACTIVE',
                    },
                  },
                },
              },
            },
          },
        ],
      },
      select: {
        id: true,
        userId: true,
        sheet: true,
        campaigns: {
          select: {
            userId: true,
            role: true,
            status: true,
            campaign: {
              select: {
                system: true,
                characters: {
                  where: {
                    userId: payload.id,
                    role: 'MASTER',
                    status: 'ACTIVE',
                  },
                  select: { id: true },
                  take: 1,
                },
              },
            },
          },
        },
      },
    })

    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const incompatibleCampaign = character.campaigns.find((entry) => entry.campaign.system !== parsedSheet.data.system)
    if (incompatibleCampaign) return reply.status(409).send({ error: 'Ficha incompativel com a campanha vinculada' })

    const isMaster = character.campaigns.some((entry) => entry.campaign.characters.length > 0)
    const isOwner = character.userId === payload.id
    if (parsedSheet.data.system === 'PATHFINDER_2E') {
      const identityPolicy = validatePathfinder2eIdentityWritePolicy({
        previousSheet: character.sheet,
        nextSheet: parsedSheet.data,
        isOwner,
        isMaster,
      })
      if (!identityPolicy.ok) return reply.status(identityPolicy.status).send({ error: identityPolicy.message })
    }

    const updated = await prisma.character.update({
      where: { id: character.id },
      data: {
        system: parsedSheet.data.system as 'DND_5E' | 'PATHFINDER_2E',
        sheet: parsedSheet.data as unknown as Prisma.InputJsonValue,
      },
      select: {
        id: true,
        system: true,
        sheet: true,
        updatedAt: true,
      },
    })

    return reply.send({
      characterId: updated.id,
      system: updated.system,
      sheet: updated.sheet,
      updatedAt: updated.updatedAt,
    })
  })
}
