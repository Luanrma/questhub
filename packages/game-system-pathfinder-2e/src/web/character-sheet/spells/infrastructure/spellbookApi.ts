import type { CharacterSpellbookEnvelope, GetCharacterSpellbookResponse } from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export class SpellbookConflictError extends Error {
  constructor() {
    super('O livro de magias foi alterado por outra sessao.')
    this.name = 'SpellbookConflictError'
  }
}

export async function fetchCharacterSpellbook(characterId: string): Promise<GetCharacterSpellbookResponse> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/spellbook`, { credentials: 'include' })
  if (!response.ok) throw new Error('Falha ao carregar o livro de magias')
  return (await response.json()) as GetCharacterSpellbookResponse
}

export async function saveCharacterSpellbook(
  characterId: string,
  revision: number,
  spellbook: CharacterSpellbookEnvelope,
): Promise<GetCharacterSpellbookResponse> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/spellbook`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ revision, spellbook }),
  })

  if (response.status === 409) throw new SpellbookConflictError()
  if (!response.ok) {
    const body = await response.json().catch(() => ({}) as { error?: string })
    throw new Error(body.error ?? 'Falha ao salvar o livro de magias')
  }

  return (await response.json()) as GetCharacterSpellbookResponse
}
