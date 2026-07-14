import type { GameSystemSpellEntry, GameSystemSpellEntryCategory } from './models'

export type GameSystemSpellSearchResult = {
  id: string
  name: string
  category: GameSystemSpellEntryCategory
  rank: string | null
  tags: string[]
}

/**
 * Projecao deliberadamente minima para o endpoint de busca aberto a
 * qualquer membro da campanha (nao so o Mestre) — ver
 * .ai/game_systems/pathfinder_2e/spells/specs.md secao 4.1. Nunca inclui
 * `source`, `systemData` ou os campos ricos de `display`
 * (`subtitle`/`stats`/`sheet`), que continuam Mestre-apenas.
 */
export function toSpellSearchResult(entry: GameSystemSpellEntry): GameSystemSpellSearchResult {
  return {
    id: entry.id,
    name: entry.name,
    category: entry.category,
    rank: entry.display.level?.value ?? null,
    tags: entry.display.tags,
  }
}
