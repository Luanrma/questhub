import { z } from 'zod'

export const INVENTORY_QUANTITY_MAX = 1_000_000
export const INVENTORY_SLOT_PAGE_SIZE = 100
export const POSTGRES_INTEGER_MAX = 2_147_483_647

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
  slotIndex: z.number().int().min(0).max(POSTGRES_INTEGER_MAX),
})

export function maximumAllowedInventorySlotIndex(slotIndexes: readonly number[]) {
  const highestSlotIndex = slotIndexes.reduce(
    (highest, slotIndex) => Math.max(highest, slotIndex),
    -1,
  )

  if (highestSlotIndex < 0) return INVENTORY_SLOT_PAGE_SIZE - 1

  const occupiedPageCount = Math.floor(highestSlotIndex / INVENTORY_SLOT_PAGE_SIZE) + 1
  return Math.min(
    POSTGRES_INTEGER_MAX,
    ((occupiedPageCount + 1) * INVENTORY_SLOT_PAGE_SIZE) - 1,
  )
}

export const sendCatalogItemSchema = z.object({
  recipientActorId: z.string().trim().min(1),
  quantity: inventoryQuantitySchema.default(1),
})