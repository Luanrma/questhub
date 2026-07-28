import type { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import type { GameSystemKey } from '../catalog'
import { getGameSystemInventoryPolicy } from '../inventory'
import { findStackableInventoryEntry } from './stacking'
import {
  addInventoryEntrySchema,
  INVENTORY_QUANTITY_MAX,
  updateInventoryEntryQuantitySchema,
} from './validation'

const inventoryParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
  actorId: z.string().trim().min(1),
})

const inventoryEntryParamsSchema = inventoryParamsSchema.extend({
  entryId: z.string().trim().min(1),
})

function presentInventoryEntry(entry: {
  id: string
  inventoryId: string
  quantity: number
  data: Prisma.JsonValue
  createdAt: Date
  updatedAt: Date
}) {
  return {
    id: entry.id,
    inventoryId: entry.inventoryId,
    quantity: entry.quantity,
    data: entry.data,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
  }
}

async function findAuthorizedActor(campaignId: string, actorId: string, userId: string) {
  const member = await prisma.campaignMember.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: { id: true, role: true, actorId: true },
  })
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

    const inventory = await ensureInventory(access.actor.id)
    const entries = await prisma.inventoryEntry.findMany({
      where: { inventoryId: inventory.id },
      orderBy: { createdAt: 'asc' },
    })

    return reply.send({
      id: inventory.id,
      actorId: inventory.actorId,
      entries: entries.map(presentInventoryEntry),
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

    const policy = getGameSystemInventoryPolicy(access.actor.campaign.gameSystem as GameSystemKey)

    const entry = await prisma.$transaction(async (tx) => {
      const inventory = await tx.inventory.upsert({
        where: { actorId: access.actor.id },
        update: {},
        create: { actorId: access.actor.id },
        select: { id: true },
      })

      const existingEntries = body.data.stack
        ? await tx.inventoryEntry.findMany({
            where: { inventoryId: inventory.id },
            select: { id: true, quantity: true, data: true },
            orderBy: { createdAt: 'asc' },
          })
        : []

      const stackable = findStackableInventoryEntry(
        existingEntries,
        body.data.data,
        policy,
        body.data.stack,
      )

      if (stackable) {
        const current = existingEntries.find((candidate) => candidate.id === stackable.id)
        if (current && current.quantity + body.data.quantity > INVENTORY_QUANTITY_MAX) {
          throw new Error('INVENTORY_QUANTITY_LIMIT')
        }

        return tx.inventoryEntry.update({
          where: { id: stackable.id },
          data: { quantity: { increment: body.data.quantity } },
        })
      }

      return tx.inventoryEntry.create({
        data: {
          inventoryId: inventory.id,
          quantity: body.data.quantity,
          data: body.data.data as Prisma.InputJsonObject,
        },
      })
    }).catch((error: unknown) => {
      if (error instanceof Error && error.message === 'INVENTORY_QUANTITY_LIMIT') return null
      throw error
    })

    if (!entry) {
      return reply.status(409).send({ error: `A quantidade agrupada excederia ${INVENTORY_QUANTITY_MAX}` })
    }

    return reply.status(201).send(presentInventoryEntry(entry))
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

    return reply.send(presentInventoryEntry(updated))
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
}
