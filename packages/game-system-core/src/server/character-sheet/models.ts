import type { z } from 'zod'
import type { characterSheetEnvelopeSchema, characterSheetMetadataSchema } from './schemas'

export type CharacterSheetMetadata = z.infer<typeof characterSheetMetadataSchema>

export type CharacterSheetEnvelope = z.infer<typeof characterSheetEnvelopeSchema>

export type CharacterSheetHealth = {
  current: number
  max: number
  temporary: number
}

export type CharacterSheetHealthAccessor<TSheet> = {
  read(sheet: TSheet): CharacterSheetHealth
  write(sheet: TSheet, next: CharacterSheetHealth): TSheet
}

export type CharacterSheetMovement = {
  meters: number
}

export type CharacterSheetMovementAccessor<TSheet> = {
  read(sheet: TSheet): CharacterSheetMovement
}

export type CharacterSheetSystemAdapter<TSheet> = {
  system: string
  dataKey: string
  version: number
  defaultSheet: TSheet
  schema: z.ZodType<TSheet>
  health?: CharacterSheetHealthAccessor<TSheet>
  movement?: CharacterSheetMovementAccessor<TSheet>
}
