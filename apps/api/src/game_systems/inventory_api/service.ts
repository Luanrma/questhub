import type { Prisma } from '@prisma/client'
import { prisma } from '../../db/prisma'
import type { GameSystemKey } from '../catalog'
import { getGameSystemInventoryPolicy } from '../inventory'
import { findStackableInventoryEntry } from './stacking'
import { INVENTORY_QUANTITY_MAX, INVENTORY_SLOT_COUNT } from './validation'

export type InventoryEntryRecord = {
  id: string
  inventoryId: string
  quantity: number
  slotIndex: number
  catalogContentId: string | null
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
    slotIndex: entry.slotIndex,
    catalogContentId: entry.catalogContentId,
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
  catalogContentId?: string | null
}) {
  const policy = getGameSystemInventoryPolicy(input.gameSystem)

  return prisma.$transaction(async (tx) => {
    const inventory = await tx.inventory.upsert({
      where: { actorId: input.actorId },
      update: {},
      create: { actorId: input.actorId },
      select: { id: true },
    })

    const existingEntries = await tx.inventoryEntry.findMany({
      where: { inventoryId: inventory.id },
      select: {
        id: true,
        quantity: true,
        slotIndex: true,
        catalogContentId: true,
        data: true,
      },
      orderBy: { createdAt: 'asc' },
    })

    const stackable = findStackableInventoryEntry(
      existingEntries,
      input.data,
      policy,
      input.stack,
    )

    if (stackable) {
      const current = existingEntries.find((candidate) => candidate.id === stackable.id)
      if (current && current.quantity + input.quantity > INVENTORY_QUANTITY_MAX) {
        return { ok: false, reason: 'QUANTITY_EXCEEDED' } as const
      }

      const entry = await tx.inventoryEntry.update({
        where: { id: stackable.id },
        data: {
          quantity: { increment: input.quantity },
          ...(current?.catalogContentId || !input.catalogContentId
            ? {}
            : { catalogContentId: input.catalogContentId }),
        },
      })

      return { ok: true, entry, stacked: true } as const
    }

    const occupiedSlots = new Set(existingEntries.map((entry) => entry.slotIndex))
    const slotIndex = Array.from(
      { length: INVENTORY_SLOT_COUNT },
      (_, index) => index,
    ).find((candidate) => !occupiedSlots.has(candidate))
    if (slotIndex === undefined) return { ok: false, reason: 'INVENTORY_FULL' } as const

    const entry = await tx.inventoryEntry.create({
      data: {
        inventoryId: inventory.id,
        quantity: input.quantity,
        slotIndex,
        catalogContentId: input.catalogContentId ?? null,
        data: input.data as Prisma.InputJsonObject,
      },
    })

    return { ok: true, entry, stacked: false } as const
  })
}
