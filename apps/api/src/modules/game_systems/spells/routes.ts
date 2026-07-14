import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import { countCampaignSpells, findCampaignSpell, listCampaignSpells } from './registry'
import { toSpellSearchResult } from './search'

const campaignSpellsParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

const campaignSpellParamsSchema = campaignSpellsParamsSchema.extend({
  spellId: z.string().trim().min(1, 'Magia invalida'),
})

const campaignSpellsQuerySchema = z.object({
  q: z.string().trim().max(80).optional(),
  category: z.enum(['spell', 'ritual', 'all']).default('all'),
  rank: z.coerce.number().int().optional(),
  tradition: z.string().trim().max(40).optional(),
  rarity: z.string().trim().max(40).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(20).default(10),
})

const campaignSpellsSearchQuerySchema = z.object({
  q: z.string().trim().max(80).optional(),
  category: z.enum(['spell', 'ritual', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(10).default(8),
})

async function getMasterSpellsAccess(campaignId: string, userId: string) {
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

/**
 * Acesso mais aberto que `getMasterSpellsAccess`: qualquer membro ativo da
 * campanha (jogador ou Mestre), mesma regra ja usada pelo chat
 * (apps/api/src/modules/chat/routes.ts). Uso exclusivo do endpoint de busca
 * minima e do detalhe pontual de uma magia; a listagem navegavel do catalogo completo continua Mestre-apenas.
 */
async function getCampaignMemberSpellsAccess(campaignId: string, userId: string) {
  return prisma.campaignCharacter.findFirst({
    where: {
      campaignId,
      userId,
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

export function registerGameSystemSpellsRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/spells', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSpellsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const query = campaignSpellsQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Busca invalida' })

    const access = await getMasterSpellsAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Apenas o mestre pode acessar o livro de magias da campanha' })

    const filters = {
      category: query.data.category,
      ...(query.data.rank === undefined ? {} : { rank: query.data.rank }),
      ...(query.data.tradition ? { tradition: query.data.tradition } : {}),
      ...(query.data.rarity ? { rarity: query.data.rarity } : {}),
    }

    const entries = listCampaignSpells(access.campaign.system, {
      search: query.data.q,
      filters,
      limit: query.data.limit,
      offset: (query.data.page - 1) * query.data.limit,
    })

    if (!entries) return reply.status(404).send({ error: 'Livro de magias nao disponivel para este sistema' })

    const total = countCampaignSpells(access.campaign.system, { search: query.data.q, filters }) ?? 0

    return reply.send({
      campaignId: access.campaign.id,
      system: access.campaign.system,
      category: query.data.category,
      pagination: {
        page: query.data.page,
        limit: query.data.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / query.data.limit)),
      },
      entries,
    })
  })

  app.get('/api/campaigns/:campaignId/spells/search', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSpellsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const query = campaignSpellsSearchQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Busca invalida' })

    const access = await getCampaignMemberSpellsAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Acesso ao livro de magias da campanha nao liberado' })

    const entries = listCampaignSpells(access.campaign.system, {
      search: query.data.q,
      filters: { category: query.data.category },
      limit: query.data.limit,
    })

    if (!entries) return reply.status(404).send({ error: 'Livro de magias nao disponivel para este sistema' })

    return reply.send({
      campaignId: access.campaign.id,
      results: entries.map(toSpellSearchResult),
    })
  })

  app.get('/api/campaigns/:campaignId/spells/:spellId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSpellParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Magia invalida' })

    const access = await getCampaignMemberSpellsAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Acesso ao livro de magias da campanha nao liberado' })

    const entry = findCampaignSpell(access.campaign.system, params.data.spellId)
    if (!entry) return reply.status(404).send({ error: 'Magia nao encontrada no livro de magias desta campanha' })

    return reply.send(entry)
  })
}
