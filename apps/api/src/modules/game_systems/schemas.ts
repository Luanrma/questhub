import { z } from 'zod'
import { CHARACTER_SHEET_BIO_MAX_LENGTH } from './constants'

export const characterSheetMetadataSchema = z
  .object({
    bio: z.string().trim().max(CHARACTER_SHEET_BIO_MAX_LENGTH).nullable().optional(),
  })
  .strict()

export const characterSheetEnvelopeSchema = z
  .object({
    system: z.string().trim().min(1),
    version: z.number().int().positive(),
    metadata: characterSheetMetadataSchema.optional(),
    data: z.record(z.string(), z.unknown()),
  })
  .strict()
