import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  getGameSystemCatalogProvider,
  type GameSystemKey,
} from '../catalog'
import {
  addInventoryItem,
  presentInventoryEntry,
} from './service'
import {
  addInventoryEntrySchema,
  INVENTORY_QUANTITY_MAX,
  sendCatalogItemSchema,
  updateInventoryEntryQuantitySchema,
} from './validation'

const campaignParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
})

const inventoryParamsSchema = campaignParamsSchema.extend({
  actorId: z.string().trim().min(1),
})

const inventoryEntryParamsSchema = inventoryParamsSchema.extend({
  entryId: z.string().trim().min(1),
})

const catalogItemParamsSchema = campaignParamsSchema.extend({
  contentId: z.string().trim().min(1),
})

async function findActiveMember(campaignId: string, userId: string) {
  return prisma.campaignMember.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: {
      id: true,
      role: true,
      actorId: true,
      campaign: { select: { gameSystem: true } },
    },
  })
}

async function findAuthorizedActor(campaignId: string, actorId: string, userId: string) {
  const member = await findActiveMember(campaignId, userId)
  if (!member) return { actor: null, forbidden: true } as const

  const actor = await prisma.campaignActor.findFirst({
    where: { id: actorId, campaignId },
    select: {
      id: true,
      campaignId: true,
      controllerMemberId: true,
      campaign: { select: { gameSystem: true } },
    },
  })
  if (!actor) return { actor: null, forbidden: false } as const

  const canManage =
    member.role === 'MASTER' ||
    actor.controllerMemberId === member.id ||
    member.actorId === actor.id

  return canManage
    ? { actor, forbidden: false } as const
    : { actor: null, forbidden: true } as const
}

async function ensureInventory(actorId: string) {
  return prisma.inventory.upsert({
    where: { actorId },
    update: {},
    create: { actorId },
    select: { id: true, actorId: true, createdAt: true, updatedAt: true },
  })
}

export function registerInventoryRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/inventory/actors', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const member = await findActiveMember(params.data.campaignId, auth.id)
    if (!member) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const actorSelect = {
      id: true,
      name: true,
      avatarUrl: true,
      controllerMember: {
        select: {
          id: true,
          userId: true,
          role: true,
          status: true,
          user: { select: { email: true } },
        },
      },
      mainForMember: {
        select: {
          id: true,
          userId: true,
          role: true,
          status: true,
          user: { select: { email: true } },
        },
      },
    } as const

    const actors = member.role === 'MASTER'
      ? await prisma.campaignActor.findMany({
          where: { campaignId: params.data.campaignId },
          select: actorSelect,
          orderBy: [{ name: 'asc' }, { createdAt: 'asc' }],
        })
      : await prisma.campaignActor.findMany({
          where: {
            campaignId: params.data.campaignId,
            OR: [
              { controllerMemberId: member.id },
              ...(member.actorId ? [{ id: member.actorId }] : []),
            ],
          },
          select: actorSelect,
          orderBy: [{ name: 'asc' }, { createdAt: 'asc' }],
        })

    return reply.send({
      role: member.role,
      actors: actors.map((actor) => {
        const owner = actor.mainForMember ?? actor.controllerMember
        return {
          id: actor.id,
          name: actor.name,
          avatarUrl: actor.avatarUrl,
          owner: owner
            ? {
                memberId: owner.id,
                userId: owner.userId,
                email: owner.user.email,
                role: owner.role,
                active: owner.status === 'ACTIVE',
              }
            : null,
        }
      }),
    })
  })

  app.get('/api/campaigns/:campaignId/inventory/recipients', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const master = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: auth.id,
        role: 'MASTER',
        status: 'ACTIVE',
      },
      select: { id: true },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o Mestre pode enviar itens' })

    const recipients = await prisma.campaignMember.findMany({
      where: {
        campaignId: params.data.campaignId,
        role: 'PLAYER',
        status: 'ACTIVE',
        actorId: { not: null },
      },
      select: {
        id: true,
        userId: true,
        user: { select: { email: true } },
        actor: { select: { id: true, name: true, avatarUrl: true } },
      },
      orderBy: { joinedAt: 'asc' },
    })

    return reply.send({
      recipients: recipients.flatMap((recipient) => recipient.actor
        ? [{
            memberId: recipient.id,
            userId: recipient.userId,
            email: recipient.user.email,
            actor: recipient.actor,
          }]
        : []),
    })
  })

  app.get('/api/campaigns/:campaignId/actors/:actorId/inventory', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = inventoryParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Inventario invalido' })

    const access = await findAuthorizedActor(params.data.campaignId, params.data.actorId, auth.id)
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({ error: access.forbidden ? 'Sem permissao para acessar este inventario' : 'Ator nao encontrado' })
    }

    const gameSystem = access.actor.campaign.gameSystem as GameSystemKey
    const inventory = await ensureInventory(access.actor.id)
    const entries = await prisma.inventoryEntry.findMany({
      where: { inventoryId: inventory.id },
      orderBy: { createdAt: 'asc' },
    })

    return reply.send({
      id: inventory.id,
      actorId: inventory.actorId,
      entries: entries.map((entry) => presentInventoryEntry(entry, gameSystem)),
      createdAt: inventory.createdAt,
      updatedAt: inventory.updatedAt,
    })
  })

  app.post('/api/campaigns/:campaignId/actors/:actorId/inventory/entries', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = inventoryParamsSchema.safeParse(req.params)
    const body = addInventoryEntrySchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Inventario invalido' : body.error.flatten() })
    }

    const access = await findAuthorizedActor(params.data.campaignId, params.data.actorId, auth.id)
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({ error: access.forbidden ? 'Sem permissao para alterar este inventario' : 'Ator nao encontrado' })
    }

    const gameSystem = access.actor.campaign.gameSystem as GameSystemKey
    const result = await addInventoryItem({
      actorId: access.actor.id,
      gameSystem,
      quantity: body.data.quantity,
      data: body.data.data,
      stack: body.data.stack,
    })

    if (!result) {
      return reply.status(409).send({ error: `A quantidade agrupada excederia ${INVENTORY_QUANTITY_MAX}` })
    }

    return reply.status(201).send({
      ...presentInventoryEntry(result.entry, gameSystem),
      stacked: result.stacked,
    })
  })

  app.patch('/api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = inventoryEntryParamsSchema.safeParse(req.params)
    const body = updateInventoryEntryQuantitySchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Entrada de inventario invalida' : body.error.flatten() })
    }

    const access = await findAuthorizedActor(params.data.campaignId, params.data.actorId, auth.id)
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({ error: access.forbidden ? 'Sem permissao para alterar este inventario' : 'Ator nao encontrado' })
    }

    const existing = await prisma.inventoryEntry.findFirst({
      where: {
        id: params.data.entryId,
        inventory: { actorId: access.actor.id },
      },
      select: { id: true },
    })
    if (!existing) return reply.status(404).send({ error: 'Entrada de inventario nao encontrada' })

    const updated = await prisma.inventoryEntry.update({
      where: { id: existing.id },
      data: { quantity: body.data.quantity },
    })

    return reply.send(presentInventoryEntry(
      updated,
      access.actor.campaign.gameSystem as GameSystemKey,
    ))
  })

  app.delete('/api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = inventoryEntryParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Entrada de inventario invalida' })

    const access = await findAuthorizedActor(params.data.campaignId, params.data.actorId, auth.id)
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({ error: access.forbidden ? 'Sem permissao para alterar este inventario' : 'Ator nao encontrado' })
    }

    const existing = await prisma.inventoryEntry.findFirst({
      where: {
        id: params.data.entryId,
        inventory: { actorId: access.actor.id },
      },
      select: { id: true },
    })
    if (!existing) return reply.status(404).send({ error: 'Entrada de inventario nao encontrada' })

    await prisma.inventoryEntry.delete({ where: { id: existing.id } })
    return reply.status(204).send()
  })

  app.post('/api/campaigns/:campaignId/catalog/items/:contentId/send', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = catalogItemParamsSchema.safeParse(req.params)
    const body = sendCatalogItemSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Item de catalogo invalido' : body.error.flatten() })
    }

    const master = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.data.campaignId,
        userId: auth.id,
        role: 'MASTER',
        status: 'ACTIVE',
      },
      select: {
        id: true,
        campaign: { select: { gameSystem: true } },
      },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o Mestre pode enviar itens' })

    const recipient = await prisma.campaignMember.findFirst({
      where: {
        id: body.data.recipientMemberId,
        campaignId: params.data.campaignId,
        role: 'PLAYER',
        status: 'ACTIVE',
      },
      select: {
        id: true,
        userId: true,
        user: { select: { email: true } },
        actor: { select: { id: true, name: true, avatarUrl: true } },
      },
    })
    if (!recipient) return reply.status(404).send({ error: 'Jogador nao encontrado na campanha' })
    if (!recipient.actor) return reply.status(409).send({ error: 'O jogador ainda nao possui um ator principal' })

    const gameSystem = master.campaign.gameSystem as GameSystemKey
    const provider = getGameSystemCatalogProvider(gameSystem)
    if (!provider?.getInventoryItemData) {
      return reply.status(409).send({ error: 'O sistema da campanha nao permite enviar itens do catalogo' })
    }

    const itemData = await provider.getInventoryItemData({
      campaignId: params.data.campaignId,
      domain: 'ITEMS',
      locale: 'en-US',
      contentId: params.data.contentId,
    })
    if (!itemData) return reply.status(404).send({ error: 'Item nao encontrado no catalogo' })

    const result = await addInventoryItem({
      actorId: recipient.actor.id,
      gameSystem,
      quantity: body.data.quantity,
      data: itemData,
      stack: true,
    })
    if (!result) {
      return reply.status(409).send({ error: `A quantidade agrupada excederia ${INVENTORY_QUANTITY_MAX}` })
    }

    return reply.status(201).send({
      recipient: {
        memberId: recipient.id,
        userId: recipient.userId,
        email: recipient.user.email,
        actor: recipient.actor,
      },
      entry: presentInventoryEntry(result.entry, gameSystem),
      stacked: result.stacked,
    })
  })
}
