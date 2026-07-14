import type { z } from 'zod'
import type { characterSpellbookEnvelopeSchema } from './schemas'

export type CharacterSpellbookEnvelope = z.infer<typeof characterSpellbookEnvelopeSchema>

export type CharacterSpellbookSystemAdapter<TSpellbook> = {
  system: string
  dataKey: string
  version: number
  defaultSpellbook: TSpellbook
  schema: z.ZodType<TSpellbook>
}
