import { Prisma } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../db/prisma'
import { requireAuth } from '../../../http/auth'
import { canReadActorInventory } from '../../inventory_api/authorization'
import { catalogTokenSheetSystemKey } from '../../catalog'
import {
  buildPathfinder2eEquipmentView,
  transitionPathfinder2eEquipment,
} from './domain'
import { resolvePathfinder2eStoredEquipmentSheet } from './stored-sheet'

const actorParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
  actorId: z.string().trim().min(1),
})

const entryParamsSchema = actorParamsSchema.extend({
  entryId: z.string().trim().min(1),
})

const equipmentBodySchema = z.object({
  carryMode: z.enum(['STOWED', 'HELD', 'WORN']),
  resolveConflicts: z.boolean().optional().default(false),
}).strict()

async function findAccessibleActor(campaignId: string, actorId: string, userId: string) {
  const member = await prisma.campaignMember.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: { id: true, role: true },
  })
  if (!member) return { actor: null, forbidden: true } as const

  const actor = await prisma.campaignActor.findFirst({
    where: { id: actorId, campaignId, archivedAt: null },
    select: {
      id: true,
      controllerMemberId: true,
      token: { select: { id: true } },
      campaign: { select: { gameSystem: true } },
      characterSheet: { select: { systemKey: true, data: true } },
      inventory: {
        select: {
          id: true,
          entries: {
            select: {
              id: true,
              quantity: true,
              data: true,
              state: true,
            },
            orderBy: { slotIndex: 'asc' },
          },
        },
      },
    },
  })
  if (!actor) return { actor: null, forbidden: false } as const
  if (actor.campaign.gameSystem !== 'PATHFINDER_2E') {
    return { actor: null, forbidden: false } as const
  }
  if (
    actor.characterSheet?.systemKey
    === catalogTokenSheetSystemKey(actor.campaign.gameSystem)
  ) {
    return { actor: null, forbidden: false } as const
  }

  const canAccess = canReadActorInventory({
    role: member.role,
    memberId: member.id,
    controllerMemberId: actor.controllerMemberId,
    hasLinkedToken: actor.token !== null,
  })

  return canAccess
    ? { actor, forbidden: false } as const
    : { actor: null, forbidden: true } as const
}

function equipmentView(actor: NonNullable<Awaited<ReturnType<typeof findAccessibleActor>>['actor']>) {
  return buildPathfinder2eEquipmentView(
    actor.inventory?.entries ?? [],
    resolvePathfinder2eStoredEquipmentSheet(actor.characterSheet?.data),
  )
}

export function registerPathfinder2eEquipmentRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/actors/:actorId/equipment/pathfinder-2e', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = actorParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Ator inválido' })

    const access = await findAccessibleActor(
      params.data.campaignId,
      params.data.actorId,
      auth.id,
    )
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({ error: access.forbidden ? 'Sem permissão para acessar os equipamentos' : 'Ator Pathfinder não encontrado' })
    }
    if (!access.actor.inventory) {
      return reply.status(404).send({ error: 'Este ator não possui inventário' })
    }

    return reply.send({ equipment: equipmentView(access.actor) })
  })

  app.patch('/api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId/equipment/pathfinder-2e', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = entryParamsSchema.safeParse(req.params)
    const body = equipmentBodySchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({
        error: body.success ? 'Entrada de inventário inválida' : body.error.flatten(),
      })
    }

    const access = await findAccessibleActor(
      params.data.campaignId,
      params.data.actorId,
      auth.id,
    )
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({ error: access.forbidden ? 'Sem permissão para alterar os equipamentos' : 'Ator Pathfinder não encontrado' })
    }
    if (!access.actor.inventory) {
      return reply.status(404).send({ error: 'Este ator não possui inventário' })
    }

    const transition = transitionPathfinder2eEquipment({
      entries: access.actor.inventory.entries,
      entryId: params.data.entryId,
      carryMode: body.data.carryMode,
      resolveConflicts: body.data.resolveConflicts,
    })
    if (!transition.ok) {
      return reply.status(409).send({
        error: transition.error,
        conflictEntryIds: transition.conflictEntryIds,
      })
    }

    await prisma.$transaction(async (tx) => {
      for (const update of transition.updates) {
        await tx.inventoryEntry.update({
          where: { id: update.entryId },
          data: { state: update.state as Prisma.InputJsonValue },
        })
      }
    })

    const updated = await findAccessibleActor(
      params.data.campaignId,
      params.data.actorId,
      auth.id,
    )
    if (!updated.actor) {
      return reply.status(404).send({ error: 'Ator Pathfinder não encontrado após a atualização' })
    }

    return reply.send({ equipment: equipmentView(updated.actor) })
  })
}
