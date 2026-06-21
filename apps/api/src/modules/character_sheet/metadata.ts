import type { CharacterSheetEnvelope, CharacterSheetMetadata } from './models'
import { characterSheetEnvelopeSchema } from './schemas'

export function getCharacterSheetMetadata(sheet: unknown): CharacterSheetMetadata | null {
  const parsed = characterSheetEnvelopeSchema.safeParse(sheet)
  if (!parsed.success) return null
  return parsed.data.metadata ?? null
}

export function getCharacterSheetBio(sheet: unknown) {
  const metadata = getCharacterSheetMetadata(sheet)
  if (!metadata) return null
  return metadata.bio ?? null
}

export function withCharacterSheetMetadata(
  sheet: CharacterSheetEnvelope,
  metadata: CharacterSheetMetadata,
): CharacterSheetEnvelope {
  return {
    ...sheet,
    metadata: {
      ...(sheet.metadata ?? {}),
      ...metadata,
    },
  }
}

export function withCharacterSheetMetadataFromUnknown(sheet: unknown, metadata: CharacterSheetMetadata) {
  const parsed = characterSheetEnvelopeSchema.safeParse(sheet)
  if (!parsed.success) return null
  return withCharacterSheetMetadata(parsed.data, metadata)
}
