import type { z } from 'zod'
import type { characterSheetEnvelopeSchema, characterSheetMetadataSchema } from './schemas'

export type CharacterSheetMetadata = z.infer<typeof characterSheetMetadataSchema>

export type CharacterSheetEnvelope = z.infer<typeof characterSheetEnvelopeSchema>

export type CharacterSheetSystemAdapter<TSheet> = {
  system: string
  dataKey: string
  version: number
  defaultSheet: TSheet
  schema: z.ZodType<TSheet>
}
