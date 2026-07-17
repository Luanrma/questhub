import type { CampaignAreaTemplate, Prisma, SceneAreaEffect } from '@prisma/client'

export type AreaCampaignAccess = {
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'ACTIVE' | 'PENDING' | 'REJECTED' | 'LEFT' | 'DEAD'
  characterId: string
}

export interface AreaRepository {
  getCampaignAccess(campaignId: string, userId: string): Promise<AreaCampaignAccess | null>
  listTemplates(campaignId: string): Promise<CampaignAreaTemplate[]>
  findTemplate(campaignId: string, templateId: string): Promise<CampaignAreaTemplate | null>
  createTemplate(data: Prisma.CampaignAreaTemplateUncheckedCreateInput): Promise<CampaignAreaTemplate>
  updateTemplate(campaignId: string, templateId: string, data: Prisma.CampaignAreaTemplateUncheckedUpdateInput): Promise<Prisma.BatchPayload>
  deleteTemplate(campaignId: string, templateId: string): Promise<Prisma.BatchPayload>
  findScene(campaignId: string, sceneId: string): Promise<{ id: string } | null>
  visibleSceneId(campaignId: string, role: 'MASTER' | 'PLAYER' | 'NPC', characterId: string): Promise<string | null>
  listEffects(campaignId: string, sceneId: string): Promise<SceneAreaEffect[]>
  findEffect(campaignId: string, sceneId: string, effectId: string): Promise<SceneAreaEffect | null>
  createEffect(data: Prisma.SceneAreaEffectUncheckedCreateInput): Promise<SceneAreaEffect>
  updateEffect(campaignId: string, sceneId: string, effectId: string, data: Prisma.SceneAreaEffectUncheckedUpdateInput): Promise<Prisma.BatchPayload>
  deleteEffect(campaignId: string, sceneId: string, effectId: string): Promise<Prisma.BatchPayload>
}
