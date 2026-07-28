import { z } from 'zod'

export const INVENTORY_QUANTITY_MAX = 1_000_000
export const INVENTORY_GRID_COLUMNS = 10
export const INVENTORY_GRID_ROWS = 10
export const INVENTORY_SLOT_COUNT = INVENTORY_GRID_COLUMNS * INVENTORY_GRID_ROWS

const inventoryQuantitySchema = z
  .number()
  .int('quantity deve ser um numero inteiro')
  .positive('quantity deve ser maior que zero')
  .max(INVENTORY_QUANTITY_MAX, `quantity deve ser menor ou igual a ${INVENTORY_QUANTITY_MAX}`)

export const addInventoryEntrySchema = z.object({
  quantity: inventoryQuantitySchema.default(1),
  data: z.record(z.string(), z.unknown()),
  stack: z.boolean().default(true),
})

export const updateInventoryEntryQuantitySchema = z.object({
  quantity: inventoryQuantitySchema,
})

export const updateInventoryEntrySlotSchema = z.object({
  slotIndex: z.number().int().min(0).max(INVENTORY_SLOT_COUNT - 1),
})

export const sendCatalogItemSchema = z.object({
  recipientActorId: z.string().trim().min(1),
  quantity: inventoryQuantitySchema.default(1),
})
