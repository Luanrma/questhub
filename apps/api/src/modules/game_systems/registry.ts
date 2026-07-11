import { z } from 'zod'
import type { CharacterSheetEnvelope, CharacterSheetMetadata, CharacterSheetSystemAdapter } from './models'
import { characterSheetEnvelopeSchema } from './schemas'
import { pathfinder2eSheetAdapter } from './pathfinder_2e/character_sheet'
import { pathfinder2eItemAdapter } from './pathfinder_2e/items'
import {
  formatPathfinder2eCurrency,
  fromCopper,
  pathfinder2eInventoryAdapter,
  toCopper,
} from './pathfinder_2e/inventory'
import type {
  CurrencySystemAdapter,
  GameSystemAdapter,
  GameSystemId,
} from './ports'

const pathfinder2eCurrencyAdapter: CurrencySystemAdapter = {
  minorUnitName: 'copper piece',
  format: formatPathfinder2eCurrency,
  breakdown: fromCopper,
  toMinorUnit: toCopper,
}

const gameSystemAdapters = new Map<GameSystemId, GameSystemAdapter>([
  [
    'PATHFINDER_2E',
    {
      id: 'PATHFINDER_2E',
      label: 'Pathfinder 2e',
      version: 1,
      status: 'PLAYABLE',
      characterSheet: pathfinder2eSheetAdapter,
      inventory: pathfinder2eInventoryAdapter,
      currency: pathfinder2eCurrencyAdapter,
      items: pathfinder2eItemAdapter,
    },
  ],
  [
    'DND_5E',
    {
      id: 'DND_5E',
      label: 'D&D 5e',
      version: 1,
      status: 'RESERVED',
    },
  ],
])

export function getGameSystemAdapter(system: string) {
  return gameSystemAdapters.get(system as GameSystemId)
}

const adapters = new Map<string, CharacterSheetSystemAdapter<unknown>>([
  ...[...gameSystemAdapters.values()]
    .filter((adapter): adapter is GameSystemAdapter & { characterSheet: CharacterSheetSystemAdapter<unknown> } =>
      Boolean(adapter.characterSheet),
    )
    .map((adapter) => [adapter.characterSheet.system, adapter.characterSheet] as const),
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

  const supportedVersions = adapter.supportedVersions ?? [adapter.version]
  if (!supportedVersions.includes(envelope.version)) {
    throw new Error(`Unsupported character sheet version: ${envelope.version}`)
  }

  const systemData = envelope.data[adapter.dataKey]
  if (systemData === undefined) {
    throw new Error(`Missing character sheet data block: ${adapter.dataKey}`)
  }

  adapter.schema.parse(systemData)
  return adapter.migrateEnvelopeForWrite?.(envelope) ?? envelope
}

export function safeValidateCharacterSheetEnvelope(input: unknown) {
  try {
    return { success: true as const, data: validateCharacterSheetEnvelope(input) }
  } catch (error) {
    if (error instanceof z.ZodError) return { success: false as const, error }
    return { success: false as const, error }
  }
}
