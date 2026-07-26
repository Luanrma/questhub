import type { GameSystemKey } from './catalog'

export type GameSystemCharacterSheetManagerStat = {
  label: string
  value: string
}

export type GameSystemCharacterSheetManagerEntry = {
  characterId: string
  name: string
  avatarUrl: string | null
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
  ownerLabel: string
  hasSheet: boolean
  updatedAt: Date | null
  token: {
    id: string
    name: string
  } | null
  subtitle: string | null
  badges: readonly string[]
  stats: readonly GameSystemCharacterSheetManagerStat[]
  warnings: readonly string[]
}

export type GameSystemCharacterSheetManagerProvider = {
  list(params: { campaignId: string }): Promise<readonly GameSystemCharacterSheetManagerEntry[]>
}

const characterSheetManagerProviders = new Map<GameSystemKey, GameSystemCharacterSheetManagerProvider>()

export function registerGameSystemCharacterSheetManagerProvider(
  system: GameSystemKey,
  provider: GameSystemCharacterSheetManagerProvider,
) {
  if (characterSheetManagerProviders.has(system)) {
    throw new Error(`Character sheet manager provider already registered for ${system}`)
  }
  characterSheetManagerProviders.set(system, provider)
}

export function getGameSystemCharacterSheetManagerProvider(system: GameSystemKey) {
  return characterSheetManagerProviders.get(system) ?? null
}
