import type {
  Pathfinder2eCastOptionsResponse,
  Pathfinder2eCastRequestPayload,
  Pathfinder2eCastResponse,
  Pathfinder2eResolveRequestPayload,
  Pathfinder2eResolveResponse,
} from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export class SpellCastConflictError extends Error {
  constructor() {
    super('O livro de magias foi alterado por outra sessao.')
    this.name = 'SpellCastConflictError'
  }
}

async function readError(response: Response, fallback: string) {
  const body = await response.json().catch(() => ({}) as { error?: string })
  return new Error(body.error ?? fallback)
}

export async function fetchCastOptions(characterId: string): Promise<Pathfinder2eCastOptionsResponse> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/cast-options`, { credentials: 'include' })
  if (!response.ok) throw await readError(response, 'Falha ao carregar as magias conjuraveis')
  return (await response.json()) as Pathfinder2eCastOptionsResponse
}

export async function castSpell(
  characterId: string,
  payload: Pathfinder2eCastRequestPayload,
): Promise<Pathfinder2eCastResponse> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/cast`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (response.status === 409) throw new SpellCastConflictError()
  if (!response.ok) throw await readError(response, 'Falha ao conjurar a magia')
  return (await response.json()) as Pathfinder2eCastResponse
}

export async function resolveSpellCast(
  characterId: string,
  spellId: string,
  payload: Pathfinder2eResolveRequestPayload,
): Promise<Pathfinder2eResolveResponse> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/spells/${spellId}/resolve`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw await readError(response, 'Falha ao resolver a magia')
  return (await response.json()) as Pathfinder2eResolveResponse
}

export async function restSpellbook(characterId: string, revision: number): Promise<{ revision: number }> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/spellbook/rest`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ revision }),
  })

  if (response.status === 409) throw new SpellCastConflictError()
  if (!response.ok) throw await readError(response, 'Falha ao descansar')
  return (await response.json()) as { revision: number }
}

export async function refocusSpellbook(characterId: string, revision: number): Promise<{ revision: number }> {
  const response = await fetch(`${API_URL}/api/characters/${characterId}/spellbook/refocus`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ revision }),
  })

  if (response.status === 409) throw new SpellCastConflictError()
  if (!response.ok) throw await readError(response, 'Falha ao refocar')
  return (await response.json()) as { revision: number }
}
