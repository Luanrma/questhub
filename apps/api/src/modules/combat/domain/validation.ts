import { z } from 'zod'

export const vttCombatHealthAdjustSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  operation: z.enum(['DAMAGE', 'HEAL']),
  amount: z.number().int().positive().max(9999),
  note: z.string().max(500).optional(),
})

export const vttCombatHealthSetSchema = z
  .object({
    campaignId: z.string().min(1),
    tokenId: z.string().min(1),
    currentHitPoints: z.number().int().min(0).max(9999).optional(),
    maxHitPoints: z.number().int().min(1).max(9999).optional(),
    temporaryHitPoints: z.number().int().min(0).max(9999).optional(),
    note: z.string().max(500).optional(),
  })
  .refine(
    (input) =>
      input.currentHitPoints !== undefined ||
      input.maxHitPoints !== undefined ||
      input.temporaryHitPoints !== undefined,
  )

export const vttCombatHealthRequestSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
})
