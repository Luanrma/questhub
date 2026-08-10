import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  canMutateActorInventory,
  canReadActorInventory,
} from '../../lib/actor-inventory-authorization'
import {
  catalogTokenSheetSystemKey,
  getGameSystemCatalogProvider,
  getInventoryCatalogNamespace,
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
  updateInventoryEntrySlotSchema,
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
      campaign: { select: { gameSystem: true } },
    },
  })
}

async function findAuthorizedActor(campaignId: string, actorId: string, userId: string) {
  const member = await findActiveMember(campaignId, userId)
  if (!member) return { actor: null, forbidden: true, role: null } as const

  const actor = await prisma.campaignActor.findFirst({
    where: { id: actorId, campaignId },
    select: {
      id: true,
      campaignId: true,
      controllerMemberId: true,
      token: { select: { id: true } },
      characterSheet: { select: { systemKey: true } },
      campaign: { select: { gameSystem: true } },
    },
  })
  if (!actor) return { actor: null, forbidden: false, role: member.role } as const
  if (
    actor.characterSheet?.systemKey
    === catalogTokenSheetSystemKey(actor.campaign.gameSystem as GameSystemKey)
  ) {
    return { actor: null, forbidden: false, role: member.role } as const
  }

  const canAccess = canReadActorInventory({
    role: member.role,
    memberId: member.id,
    controllerMemberId: actor.controllerMemberId,
    hasLinkedToken: actor.token !== null,
  })

  return canAccess
    ? { actor, forbidden: false, role: member.role } as const
    : { actor: null, forbidden: true, role: member.role } as const
}

async function findActorInventory(actorId: string) {
  return prisma.inventory.findUnique({
    where: { actorId },
    select: { id: true, actorId: true, createdAt: true, updatedAt: true },
  })
}

async function presentResolvedInventoryEntry(
  entry: Parameters<typeof presentInventoryEntry>[0],
  gameSystem: GameSystemKey,
) {
  if (entry.catalogNamespace && entry.catalogContentId) {
    return presentInventoryEntry(entry, gameSystem)
  }

  const provider = getGameSystemCatalogProvider(gameSystem)
  const resolvedContentId = await provider?.resolveInventoryItemContentId?.(entry.data) ?? null
  if (!resolvedContentId) return presentInventoryEntry(entry, gameSystem)

  const catalogNamespace = getInventoryCatalogNamespace(gameSystem, provider)
  await prisma.inventoryEntry.update({
    where: { id: entry.id },
    data: { catalogNamespace, catalogContentId: resolvedContentId },
  })

  return presentInventoryEntry({
    ...entry,
    catalogNamespace,
    catalogContentId: resolvedContentId,
  }, gameSystem)
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
    } as const
    const catalogSheetSystemKey = catalogTokenSheetSystemKey(
      member.campaign.gameSystem as GameSystemKey,
    )
    const hasInventoryCapability = {
      inventory: { isNot: null },
      OR: [
        { characterSheet: { is: null } },
        { characterSheet: { is: { systemKey: { not: catalogSheetSystemKey } } } },
      ],
    } as const

    const actors = member.role === 'MASTER'
      ? await prisma.campaignActor.findMany({
          where: {
            campaignId: params.data.campaignId,
            ...hasInventoryCapability,
          },
          select: actorSelect,
          orderBy: [{ name: 'asc' }, { createdAt: 'asc' }],
        })
      : await prisma.campaignActor.findMany({
          where: {
            campaignId: params.data.campaignId,
            controllerMemberId: member.id,
            token: { isNot: null },
            ...hasInventoryCapability,
          },
          select: actorSelect,
          orderBy: [{ name: 'asc' }, { createdAt: 'asc' }],
        })

    return reply.send({
      role: member.role,
      actors: actors.map((actor) => {
        const owner = actor.controllerMember
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
    const campaign = await prisma.campaign.findUnique({
      where: { id: params.data.campaignId },
      select: { gameSystem: true },
    })
    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })
    const catalogSheetSystemKey = catalogTokenSheetSystemKey(
      campaign.gameSystem as GameSystemKey,
    )

    const recipientActors = await prisma.campaignActor.findMany({
      where: {
        campaignId: params.data.campaignId,
        controllerMember: {
          is: {
            role: 'PLAYER',
            status: 'ACTIVE',
          },
        },
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
            user: { select: { email: true } },
          },
        },
      },
      orderBy: [{ name: 'asc' }, { createdAt: 'asc' }],
    })

    return reply.send({
      recipients: recipientActors.flatMap((actor) => actor.controllerMember
        ? [{
            recipientActorId: actor.id,
            memberId: actor.controllerMember.id,
            userId: actor.controllerMember.userId,
            email: actor.controllerMember.user.email,
            actor: {
              id: actor.id,
              name: actor.name,
              avatarUrl: actor.avatarUrl,
            },
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

    const inventory = await findActorInventory(access.actor.id)
    if (!inventory) {
      return reply.status(404).send({ error: 'Este ator nao possui inventario' })
    }

    const gameSystem = access.actor.campaign.gameSystem as GameSystemKey
    const entries = await prisma.inventoryEntry.findMany({
      where: { inventoryId: inventory.id },
      orderBy: { slotIndex: 'asc' },
    })

    return reply.send({
      id: inventory.id,
      actorId: inventory.actorId,
      entries: await Promise.all(
        entries.map((entry) => presentResolvedInventoryEntry(entry, gameSystem)),
      ),
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
    if (!canMutateActorInventory(access.role)) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode alterar inventarios' })
    }

    const gameSystem = access.actor.campaign.gameSystem as GameSystemKey
    const result = await addInventoryItem({
      actorId: access.actor.id,
      gameSystem,
      quantity: body.data.quantity,
      data: body.data.data,
      stack: body.data.stack,
    })

    if (!result.ok) {
      return reply.status(409).send({
        error: `A quantidade agrupada excederia ${INVENTORY_QUANTITY_MAX}`,
      })
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
    if (!canMutateActorInventory(access.role)) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode alterar inventarios' })
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

  app.patch('/api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId/slot', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = inventoryEntryParamsSchema.safeParse(req.params)
    const body = updateInventoryEntrySlotSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({ error: body.success ? 'Entrada de inventario invalida' : body.error.flatten() })
    }

    const access = await findAuthorizedActor(params.data.campaignId, params.data.actorId, auth.id)
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({ error: access.forbidden ? 'Sem permissao para reorganizar este inventario' : 'Ator nao encontrado' })
    }

    const result = await prisma.$transaction(async (tx) => {
      const source = await tx.inventoryEntry.findFirst({
        where: {
          id: params.data.entryId,
          inventory: { actorId: access.actor.id },
        },
      })
      if (!source) return null
      if (source.slotIndex === body.data.slotIndex) return [source]

      const target = await tx.inventoryEntry.findFirst({
        where: {
          inventoryId: source.inventoryId,
          slotIndex: body.data.slotIndex,
        },
      })

      await tx.$executeRawUnsafe(
        'SET CONSTRAINTS "InventoryEntry_inventoryId_slotIndex_key" DEFERRED',
      )
      const movedSource = await tx.inventoryEntry.update({
        where: { id: source.id },
        data: { slotIndex: body.data.slotIndex },
      })
      if (!target) return [movedSource]

      const movedTarget = await tx.inventoryEntry.update({
        where: { id: target.id },
        data: { slotIndex: source.slotIndex },
      })
      return [movedSource, movedTarget]
    })

    if (!result) return reply.status(404).send({ error: 'Entrada de inventario nao encontrada' })

    const gameSystem = access.actor.campaign.gameSystem as GameSystemKey
    return reply.send({
      entries: await Promise.all(
        result.map((entry) => presentResolvedInventoryEntry(entry, gameSystem)),
      ),
    })
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
    if (!canMutateActorInventory(access.role)) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode alterar inventarios' })
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

    const recipientActor = await prisma.campaignActor.findFirst({
      where: {
        id: body.data.recipientActorId,
        campaignId: params.data.campaignId,
        controllerMember: {
          is: {
            role: 'PLAYER',
            status: 'ACTIVE',
          },
        },
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        controllerMember: {
          select: {
            id: true,
            userId: true,
            user: { select: { email: true } },
          },
        },
      },
    })
    if (!recipientActor?.controllerMember) {
      return reply.status(404).send({ error: 'Ator destinatario nao encontrado na campanha' })
    }

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
      recipient: {
        recipientActorId: recipientActor.id,
        memberId: recipientActor.controllerMember.id,
        userId: recipientActor.controllerMember.userId,
        email: recipientActor.controllerMember.user.email,
        actor: {
          id: recipientActor.id,
          name: recipientActor.name,
          avatarUrl: recipientActor.avatarUrl,
        },
      },
      entry: presentInventoryEntry(result.entry, gameSystem),
      stacked: result.stacked,
    })
  })
}
