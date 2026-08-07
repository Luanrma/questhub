import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  catalogTokenSheetSystemKey,
  getGameSystemCatalogProvider,
  getInventoryCatalogNamespace,
  type GameSystemKey,
} from '../catalog'
import { addInventoryItem, presentInventoryEntry } from './service'
import {
  INVENTORY_QUANTITY_MAX,
  sendCatalogItemSchema,
} from './validation'

const campaignParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
})

const catalogItemParamsSchema = campaignParamsSchema.extend({
  contentId: z.string().trim().min(1),
})

type RecipientActor = {
  id: string
  name: string
  avatarUrl: string | null
  controllerMember: {
    id: string
    userId: string
    role: 'MASTER' | 'PLAYER'
    user: { email: string }
  } | null
}

async function findMaster(campaignId: string, userId: string) {
  return prisma.campaignMember.findFirst({
    where: {
      campaignId,
      userId,
      role: 'MASTER',
      status: 'ACTIVE',
    },
    select: {
      id: true,
      campaign: { select: { gameSystem: true } },
    },
  })
}

export function presentActorInventoryRecipient(actor: RecipientActor) {
  return {
    recipientActorId: actor.id,
    actor: {
      id: actor.id,
      name: actor.name,
      avatarUrl: actor.avatarUrl,
    },
    controller: actor.controllerMember
      ? {
          memberId: actor.controllerMember.id,
          userId: actor.controllerMember.userId,
          email: actor.controllerMember.user.email,
          role: actor.controllerMember.role,
        }
      : null,
  }
}

export function registerInventoryActorRecipientRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/inventory/actor-recipients', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha inválida' })

    const master = await findMaster(params.data.campaignId, auth.id)
    if (!master) return reply.status(403).send({ error: 'Apenas o Mestre pode enviar itens' })

    const gameSystem = master.campaign.gameSystem as GameSystemKey
    const catalogSheetSystemKey = catalogTokenSheetSystemKey(gameSystem)
    const actors = await prisma.campaignActor.findMany({
      where: {
        campaignId: params.data.campaignId,
        archivedAt: null,
        inventory: { isNot: null },
        OR: [
          { characterSheet: { is: null } },
          { characterSheet: { is: { systemKey: { not: catalogSheetSystemKey } } } },
        ],
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        controllerMember: {
          select: {
            id: true,
            userId: true,
            role: true,
            user: { select: { email: true } },
          },
        },
      },
      orderBy: [{ name: 'asc' }, { createdAt: 'asc' }],
    })

    return reply.send({ recipients: actors.map(presentActorInventoryRecipient) })
  })

  app.post('/api/campaigns/:campaignId/catalog/items/:contentId/send-to-actor', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = catalogItemParamsSchema.safeParse(req.params)
    const body = sendCatalogItemSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({
        error: body.success ? 'Item de catálogo inválido' : body.error.flatten(),
      })
    }

    const master = await findMaster(params.data.campaignId, auth.id)
    if (!master) return reply.status(403).send({ error: 'Apenas o Mestre pode enviar itens' })

    const gameSystem = master.campaign.gameSystem as GameSystemKey
    const catalogSheetSystemKey = catalogTokenSheetSystemKey(gameSystem)
    const recipientActor = await prisma.campaignActor.findFirst({
      where: {
        id: body.data.recipientActorId,
        campaignId: params.data.campaignId,
        archivedAt: null,
        inventory: { isNot: null },
        OR: [
          { characterSheet: { is: null } },
          { characterSheet: { is: { systemKey: { not: catalogSheetSystemKey } } } },
        ],
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        controllerMember: {
          select: {
            id: true,
            userId: true,
            role: true,
            user: { select: { email: true } },
          },
        },
      },
    })
    if (!recipientActor) {
      return reply.status(404).send({ error: 'Ator destinatário não encontrado na campanha' })
    }

    const provider = getGameSystemCatalogProvider(gameSystem)
    if (!provider?.getInventoryItemData) {
      return reply.status(409).send({ error: 'O sistema da campanha não permite enviar itens do catálogo' })
    }

    const itemData = await provider.getInventoryItemData({
      campaignId: params.data.campaignId,
      domain: 'ITEMS',
      locale: 'en-US',
      contentId: params.data.contentId,
    })
    if (!itemData) return reply.status(404).send({ error: 'Item não encontrado no catálogo' })

    const result = await addInventoryItem({
      actorId: recipientActor.id,
      gameSystem,
      quantity: body.data.quantity,
      data: itemData,
      stack: true,
      catalogNamespace: getInventoryCatalogNamespace(gameSystem, provider),
      catalogContentId: params.data.contentId,
    })
    if (!result.ok) {
      return reply.status(409).send({
        error: `A quantidade agrupada excederia ${INVENTORY_QUANTITY_MAX}`,
      })
    }

    return reply.status(201).send({
      recipient: presentActorInventoryRecipient(recipientActor),
      entry: presentInventoryEntry(result.entry, gameSystem),
      stacked: result.stacked,
    })
  })
}
