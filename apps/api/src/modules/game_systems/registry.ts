import { z } from 'zod'
import type { CharacterSheetEnvelope, CharacterSheetMetadata, CharacterSheetSystemAdapter } from './models'
import { characterSheetEnvelopeSchema } from './schemas'
import { pathfinder2eSheetAdapter } from './pathfinder_2e/character_sheet'

const adapters = new Map<string, CharacterSheetSystemAdapter<unknown>>([
  [pathfinder2eSheetAdapter.system, pathfinder2eSheetAdapter],
])

export function getCharacterSheetAdapter(system: string) {
  return adapters.get(system)
}

export function buildDefaultCharacterSheetEnvelope(system: string, metadata?: CharacterSheetMetadata): CharacterSheetEnvelope {
  const adapter = getCharacterSheetAdapter(system)
  if (!adapter) throw new Error(`Unsupported character sheet system: ${system}`)

  return {
    system: adapter.system,
    version: adapter.version,
    ...(metadata ? { metadata } : {}),
    data: {
      [adapter.dataKey]: adapter.defaultSheet,
    },
  }
}

export function validateCharacterSheetEnvelope(input: unknown): CharacterSheetEnvelope {
  const envelope = characterSheetEnvelopeSchema.parse(input)
  const adapter = getCharacterSheetAdapter(envelope.system)
  if (!adapter) throw new Error(`Unsupported character sheet system: ${envelope.system}`)

  if (envelope.version !== adapter.version) {
    throw new Error(`Unsupported character sheet version: ${envelope.version}`)
  }

  const systemData = envelope.data[adapter.dataKey]
  if (systemData === undefined) {
    throw new Error(`Missing character sheet data block: ${adapter.dataKey}`)
  }

  adapter.schema.parse(systemData)
  return envelope
}

export function safeValidateCharacterSheetEnvelope(input: unknown) {
  try {
    return { success: true as const, data: validateCharacterSheetEnvelope(input) }
  } catch (error) {
    if (error instanceof z.ZodError) return { success: false as const, error }
    return { success: false as const, error }
  }
}
