import { Prisma } from '@prisma/client'
import { prisma } from '../../../db/prisma'
import type {
  EquipmentResourceLock,
  EquippedItemSnapshot,
  InventoryItemSnapshot,
  InventorySnapshot,
  ItemDefinitionSnapshot,
} from '../domain/types'
import type {
  AddItemInput,
  AddItemResult,
  CreateItemDefinitionInput,
  EquipItemInput,
  EquipItemResult,
  FindOrCreateItemDefinitionFromCatalogInput,
  InventoryRepository,
  ResolvedEquippedItem,
  ResolvedInventoryItem,
  TransferItemInput,
  TransferItemResult,
  UnequipItemResult,
  UpdateItemInput,
  UpdateItemResult,
} from '../application/ports/inventory-repository'

type Db = typeof prisma | Prisma.TransactionClient

const ACTIVE_ITEM_STATES_EXCLUDED = ['CONSUMED', 'DESTROYED', 'DROPPED', 'TRANSFERRED'] as const

/** Mirrors Character.sheet: mechanical/presentation fields live inside a single JSON envelope instead of typed columns. */
type ItemData = {
  name: string
  itemType: string
  rarity: string | null
  level: number | null
  traits: string[]
  bulk: string | null
  priceMinorUnit: number | null
  equipSlot: string | null
  isStackable: boolean
  systemData: unknown
}

function toItemData(input: {
  name: string
  itemType: string
  rarity?: string | null
  level?: number | null
  traits?: string[]
  bulk?: string | null
  priceMinorUnit?: number | null
  equipSlot?: string | null
  isStackable?: boolean
  systemData?: unknown
}): ItemData {
  return {
    name: input.name,
    itemType: input.itemType,
    rarity: input.rarity ?? null,
    level: input.level ?? null,
    traits: input.traits ?? [],
    bulk: input.bulk ?? null,
    priceMinorUnit: input.priceMinorUnit ?? null,
    equipSlot: input.equipSlot ?? null,
    isStackable: input.isStackable ?? false,
    systemData: input.systemData ?? null,
  }
}

function parseItemData(itemData: unknown): ItemData {
  const raw = (itemData ?? {}) as Partial<ItemData>
  return {
    name: raw.name ?? '',
    itemType: raw.itemType ?? '',
    rarity: raw.rarity ?? null,
    level: raw.level ?? null,
    traits: raw.traits ?? [],
    bulk: raw.bulk ?? null,
    priceMinorUnit: raw.priceMinorUnit ?? null,
    equipSlot: raw.equipSlot ?? null,
    isStackable: raw.isStackable ?? false,
    systemData: raw.systemData ?? null,
  }
}

type ItemDefinitionRow = {
  id: string
  system: ItemDefinitionSnapshot['system']
  source: ItemDefinitionSnapshot['source']
  sourcePack: string | null
  sourceId: string | null
  itemData: unknown
}

function toItemDefinitionSnapshot(row: ItemDefinitionRow): ItemDefinitionSnapshot {
  const data = parseItemData(row.itemData)
  return {
    id: row.id,
    system: row.system,
    source: row.source,
    sourcePack: row.sourcePack,
    sourceId: row.sourceId,
    ...data,
  }
}

type EquippedItemRow = {
  id: string
  inventoryItemId: string
  equipmentOptionKey: string
  resourceLocks: unknown
  systemData: unknown
  quantity: number
}

function parseResourceLocks(input: unknown): EquipmentResourceLock[] {
  if (!Array.isArray(input)) return []

  return input.flatMap((entry) => {
    const raw = entry as Partial<EquipmentResourceLock>
    if (typeof raw.resource !== 'string' || typeof raw.amount !== 'number') return []
    return [
      {
        resource: raw.resource,
        amount: raw.amount,
        ...(raw.exclusive === undefined ? {} : { exclusive: raw.exclusive === true }),
      },
    ]
  })
}

function toEquippedItemSnapshot(row: EquippedItemRow): EquippedItemSnapshot {
  return {
    id: row.id,
    inventoryItemId: row.inventoryItemId,
    equipmentOptionKey: row.equipmentOptionKey,
    resourceLocks: parseResourceLocks(row.resourceLocks),
    systemData: row.systemData ?? null,
    quantity: row.quantity,
  }
}

type InventoryItemRow = {
  id: string
  quantity: number
  state: InventoryItemSnapshot['state']
  customName: string | null
  notes: string | null
  itemDefinition: ItemDefinitionRow
  equippedItem: EquippedItemRow | null
}

function toInventoryItemSnapshot(row: InventoryItemRow): InventoryItemSnapshot {
  return {
    id: row.id,
    itemDefinition: toItemDefinitionSnapshot(row.itemDefinition),
    quantity: row.quantity,
    state: row.state,
    customName: row.customName,
    notes: row.notes,
    equipped: row.equippedItem ? toEquippedItemSnapshot(row.equippedItem) : null,
  }
}

type InventoryRow = {
  id: string
  campaignId: string
  campaignCharacterId: string
  campaignCharacter: { characterId: string }
  items: InventoryItemRow[]
}

function toInventorySnapshot(row: InventoryRow): InventorySnapshot {
  const items = row.items.map(toInventoryItemSnapshot)
  return {
    id: row.id,
    campaignId: row.campaignId,
    characterId: row.campaignCharacter.characterId,
    campaignCharacterId: row.campaignCharacterId,
    items,
    equippedItems: items.flatMap((item) => (item.equipped ? [item.equipped] : [])),
  }
}

async function loadInventorySnapshotById(db: Db, inventoryId: string): Promise<InventorySnapshot> {
  const row = await db.inventory.findUniqueOrThrow({
    where: { id: inventoryId },
    include: {
      campaignCharacter: { select: { characterId: true } },
      items: {
        where: { state: { notIn: [...ACTIVE_ITEM_STATES_EXCLUDED] } },
        include: { itemDefinition: true, equippedItem: true },
        orderBy: { createdAt: 'asc' },
      },
    },
  })
  return toInventorySnapshot(row)
}

async function getOrCreateForCampaignCharacter(
  campaignId: string,
  campaignCharacterId: string,
): Promise<InventorySnapshot> {
  let inventory = await prisma.inventory.findUnique({ where: { campaignCharacterId } })

  if (!inventory) {
    try {
      inventory = await prisma.inventory.create({ data: { campaignId, campaignCharacterId } })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        inventory = await prisma.inventory.findUniqueOrThrow({ where: { campaignCharacterId } })
      } else {
        throw error
      }
    }
  }

  return loadInventorySnapshotById(prisma, inventory.id)
}

async function findInventoryItemById(inventoryItemId: string): Promise<ResolvedInventoryItem | null> {
  const row = await prisma.inventoryItem.findUnique({
    where: { id: inventoryItemId },
    include: {
      itemDefinition: true,
      equippedItem: true,
      inventory: { select: { id: true, campaignId: true, campaignCharacterId: true } },
    },
  })
  if (!row) return null

  return {
    ...toInventoryItemSnapshot(row),
    inventoryId: row.inventory.id,
    campaignId: row.inventory.campaignId,
    campaignCharacterId: row.inventory.campaignCharacterId,
  }
}

async function findEquippedItemById(equippedItemId: string): Promise<ResolvedEquippedItem | null> {
  const row = await prisma.equippedItem.findUnique({
    where: { id: equippedItemId },
    include: { campaignCharacter: { select: { campaignId: true } } },
  })
  if (!row) return null

  return {
    id: row.id,
    inventoryItemId: row.inventoryItemId,
    campaignCharacterId: row.campaignCharacterId,
    campaignId: row.campaignCharacter.campaignId,
    equipmentOptionKey: row.equipmentOptionKey,
    resourceLocks: parseResourceLocks(row.resourceLocks),
    systemData: row.systemData ?? null,
    quantity: row.quantity,
  }
}

async function findItemDefinitionById(
  campaignId: string,
  itemDefinitionId: string,
): Promise<ItemDefinitionSnapshot | null> {
  const row = await prisma.campaignItemDefinition.findFirst({ where: { id: itemDefinitionId, campaignId } })
  return row ? toItemDefinitionSnapshot(row) : null
}

async function createItemDefinition(input: CreateItemDefinitionInput): Promise<ItemDefinitionSnapshot> {
  const row = await prisma.campaignItemDefinition.create({
    data: {
      campaignId: input.campaignId,
      system: input.system,
      source: 'CUSTOM',
      itemData: toItemData(input) as unknown as Prisma.InputJsonValue,
      createdByUserId: input.createdByUserId,
    },
  })
  return toItemDefinitionSnapshot(row)
}

async function findOrCreateItemDefinitionFromCatalog(
  input: FindOrCreateItemDefinitionFromCatalogInput,
): Promise<ItemDefinitionSnapshot> {
  const existing = await prisma.campaignItemDefinition.findFirst({
    where: {
      campaignId: input.campaignId,
      source: 'SYSTEM_CATALOG',
      sourcePack: input.sourcePack,
      sourceId: input.sourceId,
    },
  })
  if (existing) return toItemDefinitionSnapshot(existing)

  try {
    const row = await prisma.campaignItemDefinition.create({
      data: {
        campaignId: input.campaignId,
        system: input.system,
        source: 'SYSTEM_CATALOG',
        sourcePack: input.sourcePack,
        sourceId: input.sourceId,
        itemData: toItemData(input) as unknown as Prisma.InputJsonValue,
        createdByUserId: input.createdByUserId,
      },
    })
    return toItemDefinitionSnapshot(row)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      const row = await prisma.campaignItemDefinition.findFirstOrThrow({
        where: {
          campaignId: input.campaignId,
          source: 'SYSTEM_CATALOG',
          sourcePack: input.sourcePack,
          sourceId: input.sourceId,
        },
      })
      return toItemDefinitionSnapshot(row)
    }
    throw error
  }
}

async function addItem(input: AddItemInput): Promise<AddItemResult> {
  return prisma.$transaction(async (tx) => {
    const definition = await tx.campaignItemDefinition.findFirst({
      where: { id: input.itemDefinitionId, campaignId: input.campaignId },
    })
    if (!definition) return { status: 'item_definition_not_found' as const }

    const inventory = await tx.inventory.upsert({
      where: { campaignCharacterId: input.campaignCharacterId },
      create: { campaignId: input.campaignId, campaignCharacterId: input.campaignCharacterId },
      update: {},
    })

    const existingStack = parseItemData(definition.itemData).isStackable
      ? await tx.inventoryItem.findFirst({
          where: { inventoryId: inventory.id, itemDefinitionId: definition.id, state: 'STORED' },
        })
      : null

    let targetItemId: string
    let before: unknown = null
    let after: unknown

    if (existingStack) {
      before = { quantity: existingStack.quantity }
      const updated = await tx.inventoryItem.update({
        where: { id: existingStack.id },
        data: { quantity: { increment: input.quantity } },
      })
      after = { quantity: updated.quantity }
      targetItemId = updated.id
    } else {
      const created = await tx.inventoryItem.create({
        data: {
          inventoryId: inventory.id,
          itemDefinitionId: definition.id,
          quantity: input.quantity,
          customName: input.customName ?? null,
          notes: input.notes ?? null,
        },
      })
      after = { quantity: created.quantity }
      targetItemId = created.id
    }

    await tx.inventoryLedger.create({
      data: {
        campaignId: input.campaignId,
        inventoryId: inventory.id,
        inventoryItemId: targetItemId,
        itemDefinitionId: definition.id,
        actorUserId: input.actorUserId,
        actorCharacterId: input.actorCharacterId,
        type: 'GRANT',
        deltaQuantity: input.quantity,
        before: before as Prisma.InputJsonValue,
        after: after as Prisma.InputJsonValue,
      },
    })

    return { status: 'ok' as const, inventory: await loadInventorySnapshotById(tx, inventory.id) }
  })
}

async function updateItem(input: UpdateItemInput): Promise<UpdateItemResult> {
  return prisma.$transaction(async (tx) => {
    const item = await tx.inventoryItem.findUnique({ where: { id: input.inventoryItemId }, include: { inventory: true } })
    if (!item) return { status: 'not_found' as const }

    const data: Prisma.InventoryItemUpdateInput = {}
    if (input.customName !== undefined) data.customName = input.customName
    if (input.notes !== undefined) data.notes = input.notes
    if (input.quantity !== undefined) data.quantity = input.quantity
    if (input.targetState !== undefined) data.state = input.targetState

    const before = { quantity: item.quantity, state: item.state }
    const updated = await tx.inventoryItem.update({ where: { id: item.id }, data })

    if (input.quantity !== undefined || input.targetState !== undefined) {
      await tx.inventoryLedger.create({
        data: {
          campaignId: item.inventory.campaignId,
          inventoryId: item.inventoryId,
          inventoryItemId: item.id,
          itemDefinitionId: item.itemDefinitionId,
          actorUserId: input.actorUserId,
          actorCharacterId: input.actorCharacterId,
          type: input.ledgerType ?? 'ADJUST_QUANTITY',
          deltaQuantity: input.quantity !== undefined ? input.quantity - item.quantity : null,
          before: before as Prisma.InputJsonValue,
          after: { quantity: updated.quantity, state: updated.state },
        },
      })
    }

    return { status: 'ok' as const, inventory: await loadInventorySnapshotById(tx, item.inventoryId) }
  })
}

async function equipItem(input: EquipItemInput): Promise<EquipItemResult> {
  return prisma.$transaction(async (tx) => {
    const item = await tx.inventoryItem.findUnique({
      where: { id: input.inventoryItemId },
      include: { inventory: true, equippedItem: true, itemDefinition: true },
    })
    if (!item) return { status: 'not_found' as const }
    if (item.equippedItem) return { status: 'already_equipped' as const }

    const currentEquipment = await tx.equippedItem.findMany({
      where: { campaignCharacterId: item.inventory.campaignCharacterId },
    })

    const validation = input.validateEquipment({
      itemDefinition: toItemDefinitionSnapshot(item.itemDefinition),
      currentEquipment: currentEquipment.map((equipped) => ({
        inventoryItemId: equipped.inventoryItemId,
        equipmentOptionKey: equipped.equipmentOptionKey,
        resourceLocks: parseResourceLocks(equipped.resourceLocks),
        systemData: equipped.systemData ?? null,
      })),
    })

    if (!validation.ok) {
      return validation.code === 'EQUIPMENT_CONFLICT'
        ? { status: 'equipment_conflict' as const }
        : { status: 'invalid_equipment_option' as const }
    }

    let equippedInventoryItemId = item.id

    if (item.quantity > 1) {
      const before = { quantity: item.quantity }
      const decremented = await tx.inventoryItem.update({
        where: { id: item.id },
        data: { quantity: { decrement: 1 } },
      })
      await tx.inventoryLedger.create({
        data: {
          campaignId: item.inventory.campaignId,
          inventoryId: item.inventoryId,
          inventoryItemId: item.id,
          itemDefinitionId: item.itemDefinitionId,
          actorUserId: input.actorUserId,
          actorCharacterId: input.actorCharacterId,
          type: 'SPLIT_STACK',
          deltaQuantity: -1,
          before,
          after: { quantity: decremented.quantity },
        },
      })

      const split = await tx.inventoryItem.create({
        data: {
          inventoryId: item.inventoryId,
          itemDefinitionId: item.itemDefinitionId,
          quantity: 1,
          state: 'EQUIPPED',
          customName: item.customName,
          notes: item.notes,
        },
      })
      equippedInventoryItemId = split.id
    } else {
      await tx.inventoryItem.update({ where: { id: item.id }, data: { state: 'EQUIPPED' } })
    }

    try {
      const equipped = await tx.equippedItem.create({
        data: {
          campaignCharacterId: item.inventory.campaignCharacterId,
          inventoryItemId: equippedInventoryItemId,
          equipmentOptionKey: validation.optionKey,
          resourceLocks: validation.resourceUsage as unknown as Prisma.InputJsonValue,
          systemData: (validation.systemData ?? null) as Prisma.InputJsonValue,
        },
      })

      await tx.inventoryLedger.create({
        data: {
          campaignId: item.inventory.campaignId,
          inventoryId: item.inventoryId,
          inventoryItemId: equippedInventoryItemId,
          itemDefinitionId: item.itemDefinitionId,
          actorUserId: input.actorUserId,
          actorCharacterId: input.actorCharacterId,
          type: 'EQUIP',
          note: `equipment:${equipped.equipmentOptionKey}`,
        },
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        return { status: 'already_equipped' as const }
      }
      throw error
    }

    return { status: 'ok' as const, inventory: await loadInventorySnapshotById(tx, item.inventoryId) }
  })
}

async function unequipItem(
  equippedItemId: string,
  actorUserId: string,
  actorCharacterId: string | null,
): Promise<UnequipItemResult> {
  return prisma.$transaction(async (tx) => {
    const equipped = await tx.equippedItem.findUnique({
      where: { id: equippedItemId },
      include: { inventoryItem: { include: { inventory: true } } },
    })
    if (!equipped) return { status: 'not_found' as const }

    await tx.equippedItem.delete({ where: { id: equippedItemId } })
    await tx.inventoryItem.update({ where: { id: equipped.inventoryItemId }, data: { state: 'STORED' } })

    await tx.inventoryLedger.create({
      data: {
        campaignId: equipped.inventoryItem.inventory.campaignId,
        inventoryId: equipped.inventoryItem.inventoryId,
        inventoryItemId: equipped.inventoryItemId,
        itemDefinitionId: equipped.inventoryItem.itemDefinitionId,
        actorUserId,
        actorCharacterId,
        type: 'UNEQUIP',
        note: `equipment:${equipped.equipmentOptionKey}`,
      },
    })

    return { status: 'ok' as const, inventory: await loadInventorySnapshotById(tx, equipped.inventoryItem.inventoryId) }
  })
}

async function transferItem(input: TransferItemInput): Promise<TransferItemResult> {
  return prisma.$transaction(async (tx) => {
    const item = await tx.inventoryItem.findUnique({
      where: { id: input.inventoryItemId },
      include: { inventory: true, itemDefinition: true },
    })
    if (!item) return { status: 'not_found' as const }
    if (item.state === 'EQUIPPED') return { status: 'item_equipped' as const }
    if (item.quantity < input.quantity) return { status: 'insufficient_quantity' as const }

    const targetInventory = await tx.inventory.upsert({
      where: { campaignCharacterId: input.toCampaignCharacterId },
      create: { campaignId: item.inventory.campaignId, campaignCharacterId: input.toCampaignCharacterId },
      update: {},
    })

    const remaining = item.quantity - input.quantity
    const sourceBefore = { quantity: item.quantity, state: item.state }

    if (remaining > 0) {
      await tx.inventoryItem.update({ where: { id: item.id }, data: { quantity: remaining } })
    } else {
      await tx.inventoryItem.update({ where: { id: item.id }, data: { quantity: 0, state: 'TRANSFERRED' } })
    }

    await tx.inventoryLedger.create({
      data: {
        campaignId: item.inventory.campaignId,
        inventoryId: item.inventoryId,
        inventoryItemId: item.id,
        itemDefinitionId: item.itemDefinitionId,
        actorUserId: input.actorUserId,
        actorCharacterId: input.actorCharacterId,
        counterpartyInventoryId: targetInventory.id,
        operationId: input.operationId,
        type: 'TRANSFER_OUT',
        deltaQuantity: -input.quantity,
        before: sourceBefore,
        after: { quantity: remaining > 0 ? remaining : 0, state: remaining > 0 ? item.state : 'TRANSFERRED' },
        note: input.note ?? null,
      },
    })

    const existingTarget = parseItemData(item.itemDefinition.itemData).isStackable
      ? await tx.inventoryItem.findFirst({
          where: { inventoryId: targetInventory.id, itemDefinitionId: item.itemDefinitionId, state: 'STORED' },
        })
      : null

    let targetItemId: string
    let targetBefore: unknown = null

    if (existingTarget) {
      targetBefore = { quantity: existingTarget.quantity }
      const updated = await tx.inventoryItem.update({
        where: { id: existingTarget.id },
        data: { quantity: { increment: input.quantity } },
      })
      targetItemId = updated.id
    } else {
      const created = await tx.inventoryItem.create({
        data: {
          inventoryId: targetInventory.id,
          itemDefinitionId: item.itemDefinitionId,
          quantity: input.quantity,
          customName: item.customName,
          notes: item.notes,
        },
      })
      targetItemId = created.id
    }

    await tx.inventoryLedger.create({
      data: {
        campaignId: item.inventory.campaignId,
        inventoryId: targetInventory.id,
        inventoryItemId: targetItemId,
        itemDefinitionId: item.itemDefinitionId,
        actorUserId: input.actorUserId,
        actorCharacterId: input.actorCharacterId,
        counterpartyInventoryId: item.inventoryId,
        operationId: input.operationId,
        type: 'TRANSFER_IN',
        deltaQuantity: input.quantity,
        before: targetBefore as Prisma.InputJsonValue,
        note: input.note ?? null,
      },
    })

    return {
      status: 'ok' as const,
      sourceInventory: await loadInventorySnapshotById(tx, item.inventoryId),
      targetInventory: await loadInventorySnapshotById(tx, targetInventory.id),
    }
  })
}

async function listLedger(inventoryId: string, page: number, limit: number) {
  const skip = (page - 1) * limit
  const [entries, total] = await Promise.all([
    prisma.inventoryLedger.findMany({ where: { inventoryId }, orderBy: { createdAt: 'desc' }, skip, take: limit }),
    prisma.inventoryLedger.count({ where: { inventoryId } }),
  ])

  return {
    entries: entries.map((entry) => ({
      id: entry.id,
      type: entry.type,
      inventoryItemId: entry.inventoryItemId,
      deltaQuantity: entry.deltaQuantity,
      before: entry.before,
      after: entry.after,
      note: entry.note,
      actorUserId: entry.actorUserId,
      actorCharacterId: entry.actorCharacterId,
      createdAt: entry.createdAt,
    })),
    total,
  }
}

export const prismaInventoryRepository: InventoryRepository = {
  getOrCreateForCampaignCharacter,
  findInventoryItemById,
  findEquippedItemById,
  findItemDefinitionById,
  createItemDefinition,
  findOrCreateItemDefinitionFromCatalog,
  addItem,
  updateItem,
  equipItem,
  unequipItem,
  transferItem,
  listLedger,
}
