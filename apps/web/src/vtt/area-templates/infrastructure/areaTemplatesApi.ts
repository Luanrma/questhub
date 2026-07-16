import { api } from '../../../lib/api'
import { areaTemplateToInput, type AreaTemplateInput, type CampaignAreaTemplate, type SceneAreaEffect } from '../domain/types'

const campaignPath = (campaignId: string) => `/api/campaigns/${encodeURIComponent(campaignId)}`

export const areaTemplatesApi = {
  listTemplates(campaignId: string) {
    return api<CampaignAreaTemplate[]>(`${campaignPath(campaignId)}/area-templates`)
  },
  createTemplate(campaignId: string, input: AreaTemplateInput) {
    return api<CampaignAreaTemplate>(`${campaignPath(campaignId)}/area-templates`, { method: 'POST', body: JSON.stringify(areaTemplateToInput(input)) })
  },
  updateTemplate(campaignId: string, templateId: string, input: AreaTemplateInput) {
    return api<CampaignAreaTemplate>(`${campaignPath(campaignId)}/area-templates/${encodeURIComponent(templateId)}`, { method: 'PATCH', body: JSON.stringify(areaTemplateToInput(input)) })
  },
  duplicateTemplate(campaignId: string, templateId: string) {
    return api<CampaignAreaTemplate>(`${campaignPath(campaignId)}/area-templates/${encodeURIComponent(templateId)}/duplicate`, { method: 'POST' })
  },
  deleteTemplate(campaignId: string, templateId: string) {
    return api<{ ok: true }>(`${campaignPath(campaignId)}/area-templates/${encodeURIComponent(templateId)}`, { method: 'DELETE' })
  },
  listEffects(campaignId: string, sceneId: string) {
    return api<SceneAreaEffect[]>(`${campaignPath(campaignId)}/scenes/${encodeURIComponent(sceneId)}/area-effects`)
  },
  createEffect(campaignId: string, sceneId: string, input: { templateId: string; origin: { x: number; y: number }; rotationDegrees: number; scale: number }) {
    return api<SceneAreaEffect>(`${campaignPath(campaignId)}/scenes/${encodeURIComponent(sceneId)}/area-effects`, { method: 'POST', body: JSON.stringify(input) })
  },
  updateEffect(campaignId: string, sceneId: string, effectId: string, input: { origin?: { x: number; y: number }; rotationDegrees?: number; scale?: number }) {
    return api<SceneAreaEffect>(`${campaignPath(campaignId)}/scenes/${encodeURIComponent(sceneId)}/area-effects/${encodeURIComponent(effectId)}`, { method: 'PATCH', body: JSON.stringify(input) })
  },
  deleteEffect(campaignId: string, sceneId: string, effectId: string) {
    return api<{ ok: true }>(`${campaignPath(campaignId)}/scenes/${encodeURIComponent(sceneId)}/area-effects/${encodeURIComponent(effectId)}`, { method: 'DELETE' })
  },
}
