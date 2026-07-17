import type { Prisma } from '@prisma/client'
import { prisma } from '../../../db/prisma'
import type { AreaRepository } from '../application/ports/area-repository'

export class PrismaAreaRepository implements AreaRepository {
  getCampaignAccess(campaignId: string, userId: string) {
    return prisma.campaignCharacter.findFirst({
      where: { campaignId, userId, status: 'ACTIVE', role: { in: ['MASTER', 'PLAYER'] } },
      select: { role: true, status: true, characterId: true },
    })
  }

  listTemplates(campaignId: string) {
    return prisma.campaignAreaTemplate.findMany({ where: { campaignId }, orderBy: [{ name: 'asc' }, { createdAt: 'asc' }] })
  }

  findTemplate(campaignId: string, templateId: string) {
    return prisma.campaignAreaTemplate.findFirst({ where: { id: templateId, campaignId } })
  }

  createTemplate(data: Prisma.CampaignAreaTemplateUncheckedCreateInput) {
    return prisma.campaignAreaTemplate.create({ data })
  }

  updateTemplate(campaignId: string, templateId: string, data: Prisma.CampaignAreaTemplateUncheckedUpdateInput) {
    return prisma.campaignAreaTemplate.updateMany({ where: { id: templateId, campaignId }, data })
  }

  deleteTemplate(campaignId: string, templateId: string) {
    return prisma.campaignAreaTemplate.deleteMany({ where: { id: templateId, campaignId } })
  }

  findScene(campaignId: string, sceneId: string) {
    return prisma.campaignScene.findFirst({ where: { id: sceneId, campaignId }, select: { id: true } })
  }

  async visibleSceneId(campaignId: string, role: 'MASTER' | 'PLAYER' | 'NPC', characterId: string) {
    if (role === 'MASTER') return null
    const viewState = await prisma.campaignSceneViewState.findUnique({ where: { campaignId }, select: { forcedSceneId: true } })
    if (viewState?.forcedSceneId) return viewState.forcedSceneId
    const token = await prisma.campaignToken.findUnique({ where: { characterId }, select: { campaignId: true, placement: { select: { sceneId: true } } } })
    return token?.campaignId === campaignId ? token.placement?.sceneId ?? null : null
  }

  listEffects(campaignId: string, sceneId: string) {
    return prisma.sceneAreaEffect.findMany({ where: { campaignId, sceneId, state: 'ACTIVE' }, orderBy: { createdAt: 'asc' } })
  }

  findEffect(campaignId: string, sceneId: string, effectId: string) {
    return prisma.sceneAreaEffect.findFirst({ where: { id: effectId, campaignId, sceneId } })
  }

  createEffect(data: Prisma.SceneAreaEffectUncheckedCreateInput) {
    return prisma.sceneAreaEffect.create({ data })
  }

  updateEffect(campaignId: string, sceneId: string, effectId: string, data: Prisma.SceneAreaEffectUncheckedUpdateInput) {
    return prisma.sceneAreaEffect.updateMany({ where: { id: effectId, campaignId, sceneId }, data })
  }

  deleteEffect(campaignId: string, sceneId: string, effectId: string) {
    return prisma.sceneAreaEffect.deleteMany({ where: { id: effectId, campaignId, sceneId } })
  }
}
