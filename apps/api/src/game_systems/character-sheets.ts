import type { GameSystemKey } from './catalog'

export type GameSystemCharacterSheetManagerStat = {
  label: string
  value: string
}

export type GameSystemCharacterSheetManagerEntry = {
  sheetId: string
  name: string
  avatarUrl: string | null
  assignedUser: {
    id: string
    label: string
  } | null
  token: {
    id: string
    name: string
  } | null
  updatedAt: Date
  subtitle: string | null
  badges: readonly string[]
  stats: readonly GameSystemCharacterSheetManagerStat[]
  warnings: readonly string[]
}

export type GameSystemDefaultCharacterSheet = {
  systemKey: string
  schemaVersion: number
  data: unknown
}

export type GameSystemCharacterSheetManagerProvider = {
  list(params: { campaignId: string }): Promise<readonly GameSystemCharacterSheetManagerEntry[]>
  createDefault(): GameSystemDefaultCharacterSheet
}

const characterSheetManagerProviders = new Map<GameSystemKey, GameSystemCharacterSheetManagerProvider>()

export function registerGameSystemCharacterSheetManagerProvider(
  system: GameSystemKey,
  provider: GameSystemCharacterSheetManagerProvider,
) {
  if (characterSheetManagerProviders.has(system)) {
    throw new Error(`Actor sheet manager provider already registered for ${system}`)
  }
  characterSheetManagerProviders.set(system, provider)
}

export function getGameSystemCharacterSheetManagerProvider(system: GameSystemKey) {
  return characterSheetManagerProviders.get(system) ?? null
}
