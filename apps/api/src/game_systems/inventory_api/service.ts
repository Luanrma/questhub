import type { Prisma } from '@prisma/client'
import { prisma } from '../../db/prisma'
import type { GameSystemKey } from '../catalog'
import { getGameSystemInventoryPolicy } from '../inventory'
import { findStackableInventoryEntry } from './stacking'
import { INVENTORY_QUANTITY_MAX } from './validation'

export type InventoryEntryRecord = {
  id: string
  inventoryId: string
  quantity: number
  data: Prisma.JsonValue
  createdAt: Date
  updatedAt: Date
}

export function presentInventoryEntry(entry: InventoryEntryRecord, gameSystem: GameSystemKey) {
  const policy = getGameSystemInventoryPolicy(gameSystem)

  return {
    id: entry.id,
    inventoryId: entry.inventoryId,
    quantity: entry.quantity,
    data: entry.data,
    presentation: policy?.present?.(entry.data) ?? null,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
  }
}

export async function addInventoryItem(input: {
  actorId: string
  gameSystem: GameSystemKey
  quantity: number
  data: Record<string, unknown>
  stack: boolean
}) {
  const policy = getGameSystemInventoryPolicy(input.gameSystem)

  return prisma.$transaction(async (tx) => {
    const inventory = await tx.inventory.upsert({
      where: { actorId: input.actorId },
      update: {},
      create: { actorId: input.actorId },
      select: { id: true },
    })

    const existingEntries = input.stack
      ? await tx.inventoryEntry.findMany({
          where: { inventoryId: inventory.id },
          select: { id: true, quantity: true, data: true },
          orderBy: { createdAt: 'asc' },
        })
      : []

    const stackable = findStackableInventoryEntry(
      existingEntries,
      input.data,
      policy,
      input.stack,
    )

    if (stackable) {
      const current = existingEntries.find((candidate) => candidate.id === stackable.id)
      if (current && current.quantity + input.quantity > INVENTORY_QUANTITY_MAX) return null

      const entry = await tx.inventoryEntry.update({
        where: { id: stackable.id },
        data: { quantity: { increment: input.quantity } },
      })

      return { entry, stacked: true }
    }

    const entry = await tx.inventoryEntry.create({
      data: {
        inventoryId: inventory.id,
        quantity: input.quantity,
        data: input.data as Prisma.InputJsonObject,
      },
    })

    return { entry, stacked: false }
  })
}
