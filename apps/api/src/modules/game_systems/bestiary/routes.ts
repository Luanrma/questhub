import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import { countBestiaryEntries, findBestiaryEntry, listBestiaryEntries } from './registry'
import type { GameSystemBestiaryEntry } from './models'

const campaignBestiaryParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

const campaignBestiaryCreatureParamsSchema = campaignBestiaryParamsSchema.extend({
  creatureId: z.string().trim().min(1, 'Criatura invalida'),
})

const campaignBestiaryQuerySchema = z.object({
  q: z.string().trim().max(80).optional(),
  category: z.enum(['npc', 'hazard', 'all']).default('npc'),
  level: z.coerce.number().int().optional(),
  rarity: z.string().trim().max(40).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(20).default(10),
})

const campaignBestiaryCreatureQuerySchema = z.object({
  language: z.enum(['pt-BR', 'original']).optional(),
})

function getGameContentLanguage(settings: unknown): 'pt-BR' | 'original' {
  if (!settings || typeof settings !== 'object') return 'pt-BR'
  const gameContent = (settings as { gameContent?: unknown }).gameContent
  if (!gameContent || typeof gameContent !== 'object') return 'pt-BR'
  return (gameContent as { language?: unknown }).language === 'original' ? 'original' : 'pt-BR'
}

function localizeBestiaryEntry(entry: GameSystemBestiaryEntry, language: 'pt-BR' | 'original') {
  if (language === 'original') {
    return {
      ...entry,
      original: {
        name: entry.name,
        display: entry.display,
      },
    }
  }

  const ptBR = entry.translations?.ptBR
  return {
    ...entry,
    original: {
      name: entry.name,
      display: entry.display,
    },
    name: ptBR?.name ?? entry.name,
    display: {
      ...entry.display,
      ...ptBR?.display,
    },
  }
}

async function getMasterBestiaryAccess(campaignId: string, userId: string) {
  return prisma.campaignCharacter.findFirst({
    where: {
      campaignId,
      userId,
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
}

async function getGameContentLanguageForUser(campaignId: string, userId: string) {
  const settings = await prisma.campaignUserSettings.findUnique({
    where: {
      campaignId_userId: {
        campaignId,
        userId,
      },
    },
    select: { settings: true },
  })

  return getGameContentLanguage(settings?.settings)
}

export function registerBestiaryRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/bestiary', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignBestiaryParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const query = campaignBestiaryQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Busca invalida' })

    const access = await getMasterBestiaryAccess(params.data.campaignId, payload.id)

    if (!access) return reply.status(403).send({ error: 'Apenas o mestre pode acessar o bestiario da campanha' })

    const filters = {
      category: query.data.category,
      ...(query.data.level === undefined ? {} : { level: query.data.level }),
      ...(query.data.rarity ? { rarity: query.data.rarity } : {}),
    }

    const entries = listBestiaryEntries(access.campaign.system, {
      search: query.data.q,
      filters,
      limit: query.data.limit,
      offset: (query.data.page - 1) * query.data.limit,
    })

    if (!entries) return reply.status(404).send({ error: 'Bestiario nao disponivel para este sistema' })

    const total = countBestiaryEntries(access.campaign.system, { search: query.data.q, filters }) ?? 0

    const language = await getGameContentLanguageForUser(params.data.campaignId, payload.id)
    const localizedEntries = entries.map((entry) => localizeBestiaryEntry(entry, language))

    return reply.send({
      campaignId: access.campaign.id,
      system: access.campaign.system,
      language,
      category: query.data.category,
      pagination: {
        page: query.data.page,
        limit: query.data.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / query.data.limit)),
      },
      entries: localizedEntries,
      creatures: localizedEntries.filter((entry) => entry.category === 'npc'),
    })
  })

  app.get('/api/campaigns/:campaignId/bestiary/:creatureId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignBestiaryCreatureParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Criatura invalida' })

    const query = campaignBestiaryCreatureQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Idioma invalido' })

    const access = await getMasterBestiaryAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Apenas o mestre pode acessar o bestiario da campanha' })

    const entry = findBestiaryEntry(access.campaign.system, params.data.creatureId)
    if (!entry) return reply.status(404).send({ error: 'Entrada nao encontrada no bestiario desta campanha' })

    const language = query.data.language ?? (await getGameContentLanguageForUser(params.data.campaignId, payload.id))
    return reply.send(localizeBestiaryEntry(entry, language))
  })
}
