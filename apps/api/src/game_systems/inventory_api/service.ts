import type { Prisma } from '@prisma/client'
import { prisma } from '../../db/prisma'
import {
  getGameSystemCatalogProvider,
  getInventoryCatalogNamespace,
  type GameSystemKey,
} from '../catalog'
import { getGameSystemInventoryPolicy } from '../inventory'
import { findStackableInventoryEntry } from './stacking'
import { INVENTORY_QUANTITY_MAX } from './validation'

export type InventoryEntryRecord = {
  id: string
  inventoryId: string
  quantity: number
  slotIndex: number
  catalogNamespace: string | null
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
    catalogNamespace: entry.catalogNamespace,
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
  catalogNamespace?: string | null
  catalogContentId?: string | null
}) {
  const policy = getGameSystemInventoryPolicy(input.gameSystem)
  const provider = getGameSystemCatalogProvider(input.gameSystem)
  const catalogNamespace = input.catalogContentId
    ? input.catalogNamespace ?? getInventoryCatalogNamespace(input.gameSystem, provider)
    : null

  return prisma.$transaction(async (tx) => {
    const inventory = await tx.inventory.findUnique({
      where: { actorId: input.actorId },
      select: { id: true },
    })
    if (!inventory) throw new Error('ACTOR_INVENTORY_MISSING')

    const existingEntries = await tx.inventoryEntry.findMany({
      where: { inventoryId: inventory.id },
      select: {
        id: true,
        quantity: true,
        slotIndex: true,
        catalogNamespace: true,
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

      const hasCatalogReference = Boolean(current?.catalogNamespace && current.catalogContentId)
      const incomingCatalogReference = Boolean(catalogNamespace && input.catalogContentId)
      const entry = await tx.inventoryEntry.update({
        where: { id: stackable.id },
        data: {
          quantity: { increment: input.quantity },
          ...(!hasCatalogReference && incomingCatalogReference
            ? {
                catalogNamespace,
                catalogContentId: input.catalogContentId,
              }
            : {}),
        },
      })

      return { ok: true, entry, stacked: true } as const
    }

    const occupiedSlots = new Set(existingEntries.map((entry) => entry.slotIndex))
    let slotIndex = 0
    while (occupiedSlots.has(slotIndex)) slotIndex += 1

    const entry = await tx.inventoryEntry.create({
      data: {
        inventoryId: inventory.id,
        quantity: input.quantity,
        slotIndex,
        catalogNamespace,
        catalogContentId: input.catalogContentId ?? null,
        data: input.data as Prisma.InputJsonObject,
      },
    })

    return { ok: true, entry, stacked: false } as const
  })
}
