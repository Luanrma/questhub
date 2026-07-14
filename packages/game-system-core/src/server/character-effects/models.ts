import type { z } from 'zod'
import type { characterActiveEffectsEnvelopeSchema } from './schemas'

export type CharacterActiveEffectsEnvelope = z.infer<typeof characterActiveEffectsEnvelopeSchema>

export type CharacterActiveEffectsSystemAdapter<TData> = {
  system: string
  dataKey: string
  version: number
  defaultData: TData
  schema: z.ZodType<TData>
}
