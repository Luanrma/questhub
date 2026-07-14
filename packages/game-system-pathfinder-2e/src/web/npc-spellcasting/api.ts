import type { Pathfinder2eCharacterSpellbookData } from '../character-sheet/spells/types'
import type {
  CampaignNpcDefinitionView,
  NpcCastOptionsResponse,
  NpcCastRequestPayload,
  NpcCastResponse,
  NpcResolveRequestPayload,
  Pathfinder2eResolveResponse,
} from './types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

async function readError(response: Response, fallback: string) {
  const body = await response.json().catch(() => ({}) as { error?: string })
  return new Error(body.error ?? fallback)
}

export async function listNpcDefinitions(campaignId: string): Promise<CampaignNpcDefinitionView[]> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions`, { credentials: 'include' })
  if (!response.ok) throw await readError(response, 'Falha ao carregar NPCs customizados')
  const body = (await response.json()) as { definitions: CampaignNpcDefinitionView[] }
  return body.definitions
}

export async function createNpcDefinition(
  campaignId: string,
  input: { bestiaryCreatureId: string; name: string },
): Promise<CampaignNpcDefinitionView> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
  if (!response.ok) throw await readError(response, 'Falha ao criar NPC customizado')
  return (await response.json()) as CampaignNpcDefinitionView
}

export async function renameNpcDefinition(campaignId: string, definitionId: string, name: string): Promise<CampaignNpcDefinitionView> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) throw await readError(response, 'Falha ao renomear NPC customizado')
  return (await response.json()) as CampaignNpcDefinitionView
}

export async function deleteNpcDefinition(campaignId: string, definitionId: string): Promise<void> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}`, {
    method: 'DELETE',
    credentials: 'include',
  })
  if (!response.ok) throw await readError(response, 'Falha ao excluir NPC customizado')
}

export async function saveNpcSpellbook(
  campaignId: string,
  definitionId: string,
  spellbook: Pathfinder2eCharacterSpellbookData,
): Promise<CampaignNpcDefinitionView> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}/spellbook`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spellbook),
  })
  if (!response.ok) throw await readError(response, 'Falha ao salvar o livro de magias do NPC')
  return (await response.json()) as CampaignNpcDefinitionView
}

export async function fetchNpcCastOptions(campaignId: string, definitionId: string): Promise<NpcCastOptionsResponse> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}/cast-options`, {
    credentials: 'include',
  })
  if (!response.ok) throw await readError(response, 'Falha ao carregar as magias do NPC')
  return (await response.json()) as NpcCastOptionsResponse
}

export async function castNpcSpell(campaignId: string, definitionId: string, payload: NpcCastRequestPayload): Promise<NpcCastResponse> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}/cast`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw await readError(response, 'Falha ao conjurar pelo NPC')
  return (await response.json()) as NpcCastResponse
}

export async function restNpcSpellbook(campaignId: string, definitionId: string): Promise<void> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}/spellbook/rest`, {
    method: 'POST',
    credentials: 'include',
  })
  if (!response.ok) throw await readError(response, 'Falha ao descansar')
}

export async function refocusNpcSpellbook(campaignId: string, definitionId: string): Promise<void> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}/spellbook/refocus`, {
    method: 'POST',
    credentials: 'include',
  })
  if (!response.ok) throw await readError(response, 'Falha ao refocar')
}

export async function resolveNpcSpellCast(
  campaignId: string,
  definitionId: string,
  spellId: string,
  payload: NpcResolveRequestPayload,
): Promise<Pathfinder2eResolveResponse> {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/npc-definitions/${definitionId}/spells/${spellId}/resolve`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw await readError(response, 'Falha ao resolver a magia do NPC')
  return (await response.json()) as Pathfinder2eResolveResponse
}
