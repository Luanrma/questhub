import { z } from 'zod'
import type {
  CharacterActiveEffectsEnvelope,
  CharacterActiveEffectsSystemAdapter,
  CharacterSheetEnvelope,
  CharacterSheetMetadata,
  CharacterSheetSystemAdapter,
  CharacterSpellbookEnvelope,
  CharacterSpellbookSystemAdapter,
} from './models'
import { characterActiveEffectsEnvelopeSchema, characterSheetEnvelopeSchema, characterSpellbookEnvelopeSchema } from './schemas'
import { pathfinder2eSheetAdapter } from './pathfinder_2e/character_sheet'
import { pathfinder2eCharacterSpellbookAdapter } from './pathfinder_2e/character_spells'
import { pathfinder2eCharacterActiveEffectsAdapter } from './pathfinder_2e/character_effects'
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
      characterSpellbook: pathfinder2eCharacterSpellbookAdapter,
      characterActiveEffects: pathfinder2eCharacterActiveEffectsAdapter,
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

const spellbookAdapters = new Map<string, CharacterSpellbookSystemAdapter<unknown>>([
  ...[...gameSystemAdapters.values()]
    .filter((adapter): adapter is GameSystemAdapter & { characterSpellbook: CharacterSpellbookSystemAdapter<unknown> } =>
      Boolean(adapter.characterSpellbook),
    )
    .map((adapter) => [adapter.characterSpellbook.system, adapter.characterSpellbook] as const),
])

export function getCharacterSpellbookAdapter(system: string) {
  return spellbookAdapters.get(system)
}

export function buildDefaultCharacterSpellbookEnvelope(system: string): CharacterSpellbookEnvelope {
  const adapter = getCharacterSpellbookAdapter(system)
  if (!adapter) throw new Error(`Unsupported character spellbook system: ${system}`)

  return {
    system: adapter.system,
    version: adapter.version,
    data: {
      [adapter.dataKey]: adapter.defaultSpellbook,
    },
  }
}

export function validateCharacterSpellbookEnvelope(input: unknown): CharacterSpellbookEnvelope {
  const envelope = characterSpellbookEnvelopeSchema.parse(input)
  const adapter = getCharacterSpellbookAdapter(envelope.system)
  if (!adapter) throw new Error(`Unsupported character spellbook system: ${envelope.system}`)

  if (envelope.version !== adapter.version) {
    throw new Error(`Unsupported character spellbook version: ${envelope.version}`)
  }

  const systemData = envelope.data[adapter.dataKey]
  if (systemData === undefined) {
    throw new Error(`Missing character spellbook data block: ${adapter.dataKey}`)
  }

  adapter.schema.parse(systemData)
  return envelope
}

export function safeValidateCharacterSpellbookEnvelope(input: unknown) {
  try {
    return { success: true as const, data: validateCharacterSpellbookEnvelope(input) }
  } catch (error) {
    if (error instanceof z.ZodError) return { success: false as const, error }
    return { success: false as const, error }
  }
}

const activeEffectsAdapters = new Map<string, CharacterActiveEffectsSystemAdapter<unknown>>([
  ...[...gameSystemAdapters.values()]
    .filter((adapter): adapter is GameSystemAdapter & { characterActiveEffects: CharacterActiveEffectsSystemAdapter<unknown> } =>
      Boolean(adapter.characterActiveEffects),
    )
    .map((adapter) => [adapter.characterActiveEffects.system, adapter.characterActiveEffects] as const),
])

export function getCharacterActiveEffectsAdapter(system: string) {
  return activeEffectsAdapters.get(system)
}

export function buildDefaultCharacterActiveEffectsEnvelope(system: string): CharacterActiveEffectsEnvelope {
  const adapter = getCharacterActiveEffectsAdapter(system)
  if (!adapter) throw new Error(`Unsupported character active effects system: ${system}`)

  return {
    system: adapter.system,
    version: adapter.version,
    data: {
      [adapter.dataKey]: adapter.defaultData,
    },
  }
}

export function validateCharacterActiveEffectsEnvelope(input: unknown): CharacterActiveEffectsEnvelope {
  const envelope = characterActiveEffectsEnvelopeSchema.parse(input)
  const adapter = getCharacterActiveEffectsAdapter(envelope.system)
  if (!adapter) throw new Error(`Unsupported character active effects system: ${envelope.system}`)

  if (envelope.version !== adapter.version) {
    throw new Error(`Unsupported character active effects version: ${envelope.version}`)
  }

  const systemData = envelope.data[adapter.dataKey]
  if (systemData === undefined) {
    throw new Error(`Missing character active effects data block: ${adapter.dataKey}`)
  }

  adapter.schema.parse(systemData)
  return envelope
}

export function safeValidateCharacterActiveEffectsEnvelope(input: unknown) {
  try {
    return { success: true as const, data: validateCharacterActiveEffectsEnvelope(input) }
  } catch (error) {
    if (error instanceof z.ZodError) return { success: false as const, error }
    return { success: false as const, error }
  }
}
