export type GameSystemKey = 'PATHFINDER_2E'
export type GameSystemCatalogDomain = 'BESTIARY' | 'SPELLS' | 'ITEMS'
export type GameSystemContentLocale = 'en-US' | 'pt-BR'

export type GameSystemOption = {
  key: GameSystemKey
  label: string
  description: string
  catalogDomains: readonly GameSystemCatalogDomain[]
}

export const GAME_SYSTEM_OPTIONS: readonly GameSystemOption[] = [
  {
    key: 'PATHFINDER_2E',
    label: 'Pathfinder 2e',
    description: 'Pathfinder Segunda Edição — Remaster',
    catalogDomains: ['BESTIARY', 'SPELLS', 'ITEMS'],
  },
]

export function getGameSystemOption(key: string | null | undefined) {
  return GAME_SYSTEM_OPTIONS.find((option) => option.key === key) ?? null
}

export const catalogDomainLabels: Record<GameSystemCatalogDomain, string> = {
  BESTIARY: 'Bestiário',
  SPELLS: 'Magias',
  ITEMS: 'Itens',
}

export const catalogDomainPaths: Record<GameSystemCatalogDomain, string> = {
  BESTIARY: 'bestiary',
  SPELLS: 'spells',
  ITEMS: 'items',
}
