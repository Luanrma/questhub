export type GameSystemKey = 'PATHFINDER_2E'
export type GameSystemCatalogDomain = string
export type GameSystemContentLocale = 'en-US' | 'pt-BR'

export type GameSystemCatalogDomainCapabilities = {
  canSendToActorInventory?: boolean
  areaEffectBindingNamespace?: string
}

export type GameSystemCatalogDomainDescriptor = {
  key: GameSystemCatalogDomain
  slug: string
  label: string
  capabilities?: GameSystemCatalogDomainCapabilities
}

export type GameSystemOption = {
  key: GameSystemKey
  label: string
  description: string
}

export const GAME_SYSTEM_OPTIONS: readonly GameSystemOption[] = [
  {
    key: 'PATHFINDER_2E',
    label: 'Pathfinder 2e',
    description: 'Pathfinder Segunda Edição — Remaster',
  },
]

export function getGameSystemOption(key: string | null | undefined) {
  return GAME_SYSTEM_OPTIONS.find((option) => option.key === key) ?? null
}
