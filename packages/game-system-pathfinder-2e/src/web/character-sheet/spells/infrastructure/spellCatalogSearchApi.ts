import type { Pathfinder2eSpellSearchResult } from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export async function searchCampaignSpells(
  campaignId: string,
  options: { q: string; category?: 'spell' | 'ritual' | 'all'; limit?: number },
): Promise<Pathfinder2eSpellSearchResult[]> {
  const params = new URLSearchParams({ q: options.q })
  if (options.category) params.set('category', options.category)
  if (options.limit) params.set('limit', String(options.limit))

  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/spells/search?${params.toString()}`, {
    credentials: 'include',
  })
  if (!response.ok) throw new Error('Falha ao buscar magias no catalogo')

  const body = (await response.json()) as { results: Pathfinder2eSpellSearchResult[] }
  return body.results
}
