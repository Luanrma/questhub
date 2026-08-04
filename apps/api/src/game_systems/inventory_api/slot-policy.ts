import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import {
  maximumAllowedInventorySlotIndex,
  updateInventoryEntrySlotSchema,
} from './validation'

const slotRoute = '/api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId/slot'

const slotParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
  actorId: z.string().trim().min(1),
  entryId: z.string().trim().min(1),
})

export function registerInventorySlotPolicy(app: FastifyInstance) {
  app.addHook('preHandler', async (req, reply) => {
    if (req.method !== 'PATCH' || req.routeOptions.url !== slotRoute) return

    const params = slotParamsSchema.safeParse(req.params)
    const body = updateInventoryEntrySlotSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) return

    const source = await prisma.inventoryEntry.findFirst({
      where: {
        id: params.data.entryId,
        inventory: { actorId: params.data.actorId },
      },
      select: {
        inventoryId: true,
        slotIndex: true,
      },
    })
    if (!source) return
    if (source.slotIndex === null) {
      return reply.status(409).send({
        error: 'Itens fora da grade devem ser guardados pelo Game System antes de serem movidos',
      })
    }

    const entries = await prisma.inventoryEntry.findMany({
      where: {
        inventoryId: source.inventoryId,
        slotIndex: { not: null },
      },
      select: { slotIndex: true },
    })
    const maximumSlotIndex = maximumAllowedInventorySlotIndex(
      entries
        .map((entry) => entry.slotIndex)
        .filter((slotIndex): slotIndex is number => slotIndex !== null),
    )

    if (body.data.slotIndex > maximumSlotIndex) {
      return reply.status(400).send({
        error: `O inventario pode crescer somente ate o slot ${maximumSlotIndex + 1} neste momento`,
      })
    }
  })
}
