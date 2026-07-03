import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import { countBestiaryCreatures, listBestiaryCreatures } from './registry'
import type { GameSystemBestiaryCreature } from './models'

const campaignBestiaryParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

const campaignBestiaryQuerySchema = z.object({
  q: z.string().trim().max(80).optional(),
  level: z.coerce.number().int().optional(),
  rarity: z.string().trim().max(40).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(20).default(10),
})

function getGameContentLanguage(settings: unknown): 'pt-BR' | 'original' {
  if (!settings || typeof settings !== 'object') return 'pt-BR'
  const gameContent = (settings as { gameContent?: unknown }).gameContent
  if (!gameContent || typeof gameContent !== 'object') return 'pt-BR'
  return (gameContent as { language?: unknown }).language === 'original' ? 'original' : 'pt-BR'
}

function localizeCreature(creature: GameSystemBestiaryCreature, language: 'pt-BR' | 'original') {
  if (language === 'original') {
    return {
      ...creature,
      original: {
        name: creature.name,
        display: creature.display,
      },
    }
  }

  const ptBR = creature.translations?.ptBR
  return {
    ...creature,
    original: {
      name: creature.name,
      display: creature.display,
    },
    name: ptBR?.name ?? creature.name,
    display: {
      ...creature.display,
      ...ptBR?.display,
    },
  }
}

export function registerBestiaryRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/bestiary', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignBestiaryParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const query = campaignBestiaryQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Busca invalida' })

    const access = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: payload.id,
        role: 'MASTER',
        status: 'ACTIVE',
      },
      select: {
        campaign: {
          select: {
            id: true,
            system: true,
          },
        },
      },
    })

    if (!access) return reply.status(403).send({ error: 'Apenas o mestre pode acessar o bestiario da campanha' })

    const filters = {
      ...(query.data.level === undefined ? {} : { level: query.data.level }),
      ...(query.data.rarity ? { rarity: query.data.rarity } : {}),
    }

    const creatures = listBestiaryCreatures(access.campaign.system, {
      search: query.data.q,
      filters,
      limit: query.data.limit,
      offset: (query.data.page - 1) * query.data.limit,
    })

    if (!creatures) return reply.status(404).send({ error: 'Bestiario nao disponivel para este sistema' })

    const total = countBestiaryCreatures(access.campaign.system, { search: query.data.q, filters }) ?? 0

    const settings = await prisma.campaignUserSettings.findUnique({
      where: {
        campaignId_userId: {
          campaignId: params.data.campaignId,
          userId: payload.id,
        },
      },
      select: { settings: true },
    })
    const language = getGameContentLanguage(settings?.settings)

    return reply.send({
      campaignId: access.campaign.id,
      system: access.campaign.system,
      language,
      pagination: {
        page: query.data.page,
        limit: query.data.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / query.data.limit)),
      },
      creatures: creatures.map((creature) => localizeCreature(creature, language)),
    })
  })
}
