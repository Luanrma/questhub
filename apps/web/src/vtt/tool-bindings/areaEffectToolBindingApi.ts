import { api } from '../../lib/api'
import type { AreaEffectToolBindingConfiguration, ToolBindingSource } from '../token-presentation/types'

export const AREA_EFFECT_TOOL_KEY = 'VTT_AREA_EFFECT'

export type AreaEffectToolBinding = {
  id: string
  toolKey: typeof AREA_EFFECT_TOOL_KEY
  source: ToolBindingSource
  schemaVersion: number
  configuration: AreaEffectToolBindingConfiguration
  updatedAt: string
}

function sourceQuery(source: ToolBindingSource) {
  return new URLSearchParams({
    kind: source.kind,
    namespace: source.namespace,
    id: source.id,
  }).toString()
}

function endpoint(campaignId: string) {
  return `/api/campaigns/${encodeURIComponent(campaignId)}/tool-bindings/${AREA_EFFECT_TOOL_KEY}`
}

export const areaEffectToolBindingApi = {
  async get(campaignId: string, source: ToolBindingSource) {
    return api<{ binding: AreaEffectToolBinding | null }>(
      `${endpoint(campaignId)}?${sourceQuery(source)}`,
    )
  },

  async save(input: {
    campaignId: string
    source: ToolBindingSource
    name: string
    configuration: AreaEffectToolBindingConfiguration
  }) {
    return api<{ binding: AreaEffectToolBinding }>(endpoint(input.campaignId), {
      method: 'PUT',
      body: JSON.stringify({
        source: input.source,
        name: input.name,
        configuration: input.configuration,
      }),
    })
  },

  async remove(campaignId: string, source: ToolBindingSource) {
    return api<void>(`${endpoint(campaignId)}?${sourceQuery(source)}`, {
      method: 'DELETE',
    })
  },
}
