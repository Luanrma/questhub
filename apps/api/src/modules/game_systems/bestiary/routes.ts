import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import { listBestiaryCreatures } from './registry'
import type { GameSystemBestiaryCreature } from './models'

const campaignBestiaryParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

const campaignBestiaryQuerySchema = z.object({
  q: z.string().trim().max(80).optional(),
  limit: z.coerce.number().int().min(1).max(50).default(24),
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
        rarity: creature.rarity,
        size: creature.size,
        traits: creature.traits,
      },
    }
  }

  const ptBR = creature.translations?.ptBR
  return {
    ...creature,
    original: {
      name: creature.name,
      rarity: creature.rarity,
      size: creature.size,
      traits: creature.traits,
    },
    name: ptBR?.name ?? creature.name,
    rarity: ptBR?.rarity ?? creature.rarity,
    size: ptBR?.size ?? creature.size,
    traits: ptBR?.traits ?? creature.traits,
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

    const creatures = listBestiaryCreatures(access.campaign.system, {
      search: query.data.q,
      limit: query.data.limit,
    })

    if (!creatures) return reply.status(404).send({ error: 'Bestiario nao disponivel para este sistema' })

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
      creatures: creatures.map((creature) => localizeCreature(creature, language)),
    })
  })
}
