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
  state: Prisma.JsonValue | null
  createdAt: Date
  updatedAt: Date
}

type AddInventoryItemFailureReason = 'QUANTITY_EXCEEDED'

export function presentInventoryEntry(entry: InventoryEntryRecord, gameSystem: GameSystemKey) {
  const policy = getGameSystemInventoryPolicy(gameSystem)
  const provider = getGameSystemCatalogProvider(gameSystem)
  const basePresentation = policy?.present?.(entry.data) ?? null
  const resolvedImageUrl = entry.catalogContentId
    ? provider?.resolveInventoryItemImageUrl?.(entry.catalogContentId) ?? null
    : null
  const catalogImageUrl = typeof resolvedImageUrl === 'string' ? resolvedImageUrl : null
  const presentation = basePresentation
    ? {
        ...basePresentation,
        imageUrl: basePresentation.imageUrl ?? catalogImageUrl,
      }
    : null
  const inBackpack = policy?.isBackpackItem?.(entry.state) ?? entry.slotIndex >= 0

  return {
    id: entry.id,
    inventoryId: entry.inventoryId,
    quantity: entry.quantity,
    slotIndex: entry.slotIndex,
    inBackpack,
    catalogNamespace: entry.catalogNamespace,
    catalogContentId: entry.catalogContentId,
    data: entry.data,
    state: entry.state,
    presentation,
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
    const inventories = await tx.$queryRaw<Array<{ id: string }>>`
      SELECT "id"
      FROM "Inventory"
      WHERE "actorId" = ${input.actorId}
      FOR UPDATE
    `
    const inventory = inventories[0]
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
        state: true,
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
        return {
          ok: false,
          reason: 'QUANTITY_EXCEEDED' as AddInventoryItemFailureReason,
        } as const
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
