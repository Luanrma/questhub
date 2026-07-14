import { z } from 'zod'

export const characterActiveEffectsEnvelopeSchema = z
  .object({
    system: z.string().trim().min(1),
    version: z.number().int().positive(),
    data: z.record(z.string(), z.unknown()),
  })
  .strict()
