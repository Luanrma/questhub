import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import type {
  SendCatalogItemToPlayerInput,
  SendCatalogItemToPlayerResult,
} from '../../inventory/application/send-catalog-item-to-player.use-case'
import { countCampaignItems, findCampaignItem, listCampaignItems } from './registry'

const campaignItemsParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

const campaignItemParamsSchema = campaignItemsParamsSchema.extend({
  itemId: z.string().trim().min(1, 'Item invalido'),
})

const campaignItemsQuerySchema = z.object({
  q: z.string().trim().max(80).optional(),
  itemType: z.enum(['weapon', 'armor', 'equipment', 'consumable', 'treasure', 'backpack', 'shield', 'kit', 'all']).default('all'),
  level: z.coerce.number().int().optional(),
  rarity: z.string().trim().max(40).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(20).default(10),
})

const sendItemToPlayerBodySchema = z.object({
  characterId: z.string().trim().min(1, 'Personagem invalido'),
  quantity: z.coerce.number().int().min(1).max(999).optional(),
})

type SendCatalogItemToPlayerFn = (input: SendCatalogItemToPlayerInput) => Promise<SendCatalogItemToPlayerResult>

const sendItemToPlayerErrorResponses: Record<Exclude<SendCatalogItemToPlayerResult['status'], 'ok'>, { code: number; error: string }> = {
  forbidden: { code: 403, error: 'Apenas o mestre pode enviar itens do catalogo para um jogador' },
  target_not_found: { code: 404, error: 'Personagem nao encontrado nesta campanha' },
  target_not_active_player: { code: 400, error: 'O item so pode ser enviado para um jogador ativo da campanha' },
  catalog_item_not_found: { code: 404, error: 'Item nao encontrado no catalogo desta campanha' },
  invalid_quantity: { code: 400, error: 'Quantidade invalida' },
}

async function getMasterItemsAccess(campaignId: string, userId: string) {
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

export function registerGameSystemItemsRoutes(app: FastifyInstance, deps: { sendCatalogItemToPlayer: SendCatalogItemToPlayerFn }) {
  app.get('/api/campaigns/:campaignId/items', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignItemsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const query = campaignItemsQuerySchema.safeParse(req.query)
    if (!query.success) return reply.status(400).send({ error: 'Busca invalida' })

    const access = await getMasterItemsAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Apenas o mestre pode acessar o catalogo de itens da campanha' })

    const filters = {
      itemType: query.data.itemType,
      ...(query.data.level === undefined ? {} : { level: query.data.level }),
      ...(query.data.rarity ? { rarity: query.data.rarity } : {}),
    }

    const entries = listCampaignItems(access.campaign.system, {
      search: query.data.q,
      filters,
      limit: query.data.limit,
      offset: (query.data.page - 1) * query.data.limit,
    })

    if (!entries) return reply.status(404).send({ error: 'Catalogo de itens nao disponivel para este sistema' })

    const total = countCampaignItems(access.campaign.system, { search: query.data.q, filters }) ?? 0

    return reply.send({
      campaignId: access.campaign.id,
      system: access.campaign.system,
      itemType: query.data.itemType,
      pagination: {
        page: query.data.page,
        limit: query.data.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / query.data.limit)),
      },
      entries,
    })
  })

  app.get('/api/campaigns/:campaignId/items/:itemId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignItemParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Item invalido' })

    const access = await getMasterItemsAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Apenas o mestre pode acessar o catalogo de itens da campanha' })

    const entry = findCampaignItem(access.campaign.system, params.data.itemId)
    if (!entry) return reply.status(404).send({ error: 'Item nao encontrado no catalogo desta campanha' })

    return reply.send(entry)
  })

  app.post('/api/campaigns/:campaignId/items/:itemId/send-to-player', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignItemParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Item invalido' })

    const body = sendItemToPlayerBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const result = await deps.sendCatalogItemToPlayer({
      campaignId: params.data.campaignId,
      actorUserId: payload.id,
      catalogItemId: params.data.itemId,
      targetCharacterId: body.data.characterId,
      quantity: body.data.quantity,
    })

    if (result.status !== 'ok') {
      const { code, error } = sendItemToPlayerErrorResponses[result.status]
      return reply.status(code).send({ error })
    }

    return reply.status(201).send({ ok: true, itemDefinitionId: result.itemDefinition.id })
  })
}
