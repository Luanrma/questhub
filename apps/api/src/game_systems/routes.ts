import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../db/prisma'
import { requireAuth } from '../http/auth'
import {
  GAME_SYSTEM_DESCRIPTORS,
  getGameSystemCatalogProvider,
  getGameSystemDescriptor,
  type GameSystemCatalogDomain,
  type GameSystemContentLocale,
  type GameSystemKey,
} from './catalog'
import { getGameSystemCharacterSheetManagerProvider } from './character-sheets'

const campaignParamsSchema = z.object({ campaignId: z.string().trim().min(1) })
const inviteParamsSchema = z.object({ inviteCode: z.string().trim().min(1) })
const catalogParamsSchema = campaignParamsSchema.extend({
  domain: z.enum(['bestiary', 'spells', 'items']),
})
const catalogQuerySchema = z.object({
  locale: z.enum(['en-US', 'pt-BR']).default('pt-BR'),
  q: z.string().trim().max(120).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(60).default(24),
})

const domainByPath: Record<'bestiary' | 'spells' | 'items', GameSystemCatalogDomain> = {
  bestiary: 'BESTIARY',
  spells: 'SPELLS',
  items: 'ITEMS',
}

async function findAccessibleCampaign(campaignId: string, userId: string) {
  return prisma.campaign.findFirst({
    where: {
      id: campaignId,
      characters: {
        some: {
          userId,
          status: 'ACTIVE',
        },
      },
    },
    select: {
      id: true,
      gameSystem: true,
    },
  })
}

async function findMasterCampaign(campaignId: string, userId: string) {
  return prisma.campaign.findFirst({
    where: {
      id: campaignId,
      characters: {
        some: {
          userId,
          role: 'MASTER',
          status: 'ACTIVE',
        },
      },
    },
    select: {
      id: true,
      gameSystem: true,
    },
  })
}

export function registerGameSystemRoutes(app: FastifyInstance) {
  app.get('/api/game-systems', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    return reply.send(GAME_SYSTEM_DESCRIPTORS)
  })

  app.get('/api/game-systems/campaign-invites/:inviteCode', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = inviteParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Codigo de convite invalido' })

    const campaign = await prisma.campaign.findUnique({
      where: { inviteCode: params.data.inviteCode.toUpperCase() },
      select: { id: true, gameSystem: true },
    })
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    return reply.send({
      campaignId: campaign.id,
      gameSystem: campaign.gameSystem,
      descriptor,
    })
  })

  app.get('/api/campaigns/:campaignId/game-system', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    return reply.send({
      campaignId: campaign.id,
      gameSystem: campaign.gameSystem,
      descriptor,
      catalogAvailable: Boolean(getGameSystemCatalogProvider(campaign.gameSystem as GameSystemKey)),
      characterSheetsAvailable: Boolean(
        getGameSystemCharacterSheetManagerProvider(campaign.gameSystem as GameSystemKey),
      ),
    })
  })

  app.get('/api/campaigns/:campaignId/character-sheets', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const campaign = await findMasterCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(403).send({ error: 'Apenas o Mestre pode gerenciar fichas' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    const provider = getGameSystemCharacterSheetManagerProvider(campaign.gameSystem as GameSystemKey)
    if (!provider) {
      return reply.send({
        available: false,
        system: descriptor,
        entries: [],
      })
    }

    const entries = await provider.list({ campaignId: campaign.id })
    return reply.send({
      available: true,
      system: descriptor,
      entries,
    })
  })

  app.get('/api/campaigns/:campaignId/catalog/:domain', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = catalogParamsSchema.safeParse(req.params)
    const query = catalogQuerySchema.safeParse(req.query ?? {})
    if (!params.success || !query.success) {
      return reply.status(400).send({ error: 'Consulta de catalogo invalida' })
    }

    const campaign = await findAccessibleCampaign(params.data.campaignId, auth.id)
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const descriptor = getGameSystemDescriptor(campaign.gameSystem)
    if (!descriptor) return reply.status(409).send({ error: 'Sistema de jogo nao suportado' })

    const domain = domainByPath[params.data.domain]
    if (!descriptor.catalogDomains.includes(domain)) {
      return reply.status(404).send({ error: 'Catalogo nao disponivel para este sistema' })
    }

    const provider = getGameSystemCatalogProvider(campaign.gameSystem as GameSystemKey)
    if (!provider) {
      return reply.send({
        available: false,
        system: descriptor,
        domain,
        locale: query.data.locale as GameSystemContentLocale,
        entries: [],
        pagination: {
          page: query.data.page,
          limit: query.data.limit,
          total: 0,
          totalPages: 0,
        },
      })
    }

    const result = await provider.list({
      campaignId: campaign.id,
      domain,
      locale: query.data.locale as GameSystemContentLocale,
      search: query.data.q,
      page: query.data.page,
      limit: query.data.limit,
    })

    return reply.send({
      available: true,
      system: descriptor,
      domain,
      locale: query.data.locale,
      ...result,
    })
  })
}
