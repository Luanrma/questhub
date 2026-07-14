import { z } from 'zod'

export const characterSpellbookEnvelopeSchema = z
  .object({
    system: z.string().trim().min(1),
    version: z.number().int().positive(),
    data: z.record(z.string(), z.unknown()),
  })
  .strict()
