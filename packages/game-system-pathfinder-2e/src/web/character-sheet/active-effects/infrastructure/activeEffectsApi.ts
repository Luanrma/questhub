import type { CharacterActiveEffectsEnvelope, GetCharacterActiveEffectsResponse } from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export class ActiveEffectsConflictError extends Error {
  constructor() {
    super('Os efeitos ativos foram alterados por outra sessao.')
    this.name = 'ActiveEffectsConflictError'
  }
}

export async function fetchCharacterActiveEffects(characterId: string): Promise<GetCharacterActiveEffectsResponse> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/active-effects`, { credentials: 'include' })
  if (!response.ok) throw new Error('Falha ao carregar os efeitos ativos')
  return (await response.json()) as GetCharacterActiveEffectsResponse
}

export async function saveCharacterActiveEffects(
  characterId: string,
  revision: number,
  activeEffects: CharacterActiveEffectsEnvelope,
): Promise<GetCharacterActiveEffectsResponse> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/active-effects`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ revision, activeEffects }),
  })

  if (response.status === 409) throw new ActiveEffectsConflictError()
  if (!response.ok) {
    const body = await response.json().catch(() => ({}) as { error?: string })
    throw new Error(body.error ?? 'Falha ao salvar os efeitos ativos')
  }

  return (await response.json()) as GetCharacterActiveEffectsResponse
}
