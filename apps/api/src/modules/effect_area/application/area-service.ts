import { Prisma, type CampaignAreaTemplate } from '@prisma/client'
import { createAreaTemplateSchema, type AreaTemplateInput, type AreaTemplatePatch, type SceneAreaEffectInput, type SceneAreaEffectPatch } from '../presentation/validation'
import { PrismaAreaRepository } from '../infra/area-repository'
import { nextAreaTemplateCopyName } from '../domain/template-name'
import { isAreaEffectToolBindingTemplate } from '../domain/tool-binding'
import type { AreaRepository } from './ports/area-repository'

export class AreaServiceError extends Error {
  constructor(public readonly statusCode: number, message: string, public readonly details?: unknown) {
    super(message)
  }
}

function json(value: unknown): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue
}

function optionalJson(value: unknown): Prisma.InputJsonValue | typeof Prisma.JsonNull {
  return value === undefined ? Prisma.JsonNull : json(value)
}

function templateData(input: AreaTemplateInput) {
  return {
    name: input.name,
    description: input.description ?? null,
    category: input.category ?? null,
    tags: json(input.tags),
    iconAssetId: input.iconAssetId ?? null,
    shape: input.shape,
    volumeShape: input.volumeShape,
    dimensions: json(input.dimensions),
    measurementMode: input.measurementMode,
    measurementUnit: input.measurementUnit ?? null,
    originMode: input.originMode,
    placementMode: input.placementMode,
    propagationMode: input.propagationMode,
    persistenceMode: input.persistenceMode,
    movementMode: input.movementMode,
    cellInclusionRule: input.cellInclusionRule,
    tokenIntersectionRule: input.tokenIntersectionRule,
    includesOrigin: input.includesOrigin,
    stopAtFirstObstacle: input.stopAtFirstObstacle,
    duration: optionalJson(input.duration),
    style: json(input.style),
    visibility: input.visibility,
  }
}

function storedTemplateInput(template: CampaignAreaTemplate, name = template.name): AreaTemplateInput {
  return createAreaTemplateSchema.parse({
    name,
    description: template.description ?? undefined,
    category: template.category ?? undefined,
    tags: template.tags,
    iconAssetId: template.iconAssetId ?? undefined,
    shape: template.shape,
    volumeShape: template.volumeShape,
    dimensions: template.dimensions,
    measurementMode: template.measurementMode,
    measurementUnit: template.measurementUnit ?? undefined,
    originMode: template.originMode,
    placementMode: template.placementMode,
    propagationMode: template.propagationMode,
    persistenceMode: template.persistenceMode,
    movementMode: template.movementMode,
    cellInclusionRule: template.cellInclusionRule,
    tokenIntersectionRule: template.tokenIntersectionRule,
    includesOrigin: template.includesOrigin,
    stopAtFirstObstacle: template.stopAtFirstObstacle,
    duration: template.duration ?? undefined,
    style: template.style,
    visibility: template.visibility,
  })
}

export class AreaService {
  constructor(private readonly repository: AreaRepository = new PrismaAreaRepository()) {}

  async requireAccess(campaignId: string, userId: string, masterOnly = false) {
    const access = await this.repository.getCampaignAccess(campaignId, userId)
    if (!access) throw new AreaServiceError(403, 'Acesso nao liberado')
    if (masterOnly && access.role !== 'MASTER') throw new AreaServiceError(403, 'Apenas o mestre pode gerenciar templates de area')
    return access
  }

  async listTemplates(campaignId: string, userId: string) {
    await this.requireAccess(campaignId, userId)
    const templates = await this.repository.listTemplates(campaignId)
    return templates.filter((template) => !isAreaEffectToolBindingTemplate(template))
  }

  async createTemplate(campaignId: string, userId: string, input: AreaTemplateInput) {
    await this.requireAccess(campaignId, userId, true)
    return this.repository.createTemplate({ campaignId, createdByUserId: userId, ...templateData(input) })
  }

  async updateTemplate(campaignId: string, templateId: string, userId: string, patch: AreaTemplatePatch) {
    await this.requireAccess(campaignId, userId, true)
    const existing = await this.repository.findTemplate(campaignId, templateId)
    if (!existing || isAreaEffectToolBindingTemplate(existing)) {
      throw new AreaServiceError(404, 'Template de area nao encontrado')
    }
    const merged = createAreaTemplateSchema.safeParse({ ...storedTemplateInput(existing), ...patch })
    if (!merged.success) throw new AreaServiceError(400, 'Template de area invalido', merged.error.flatten())
    await this.repository.updateTemplate(campaignId, templateId, templateData(merged.data))
    const updated = await this.repository.findTemplate(campaignId, templateId)
    if (!updated) throw new AreaServiceError(404, 'Template de area nao encontrado')
    return updated
  }

  async duplicateTemplate(campaignId: string, templateId: string, userId: string) {
    await this.requireAccess(campaignId, userId, true)
    const existing = await this.repository.findTemplate(campaignId, templateId)
    if (!existing || isAreaEffectToolBindingTemplate(existing)) {
      throw new AreaServiceError(404, 'Template de area nao encontrado')
    }
    const campaignTemplates = (await this.repository.listTemplates(campaignId))
      .filter((template) => !isAreaEffectToolBindingTemplate(template))
    const name = nextAreaTemplateCopyName(existing.name, campaignTemplates.map((template) => template.name))
    const parsed = storedTemplateInput(existing, name)
    return this.repository.createTemplate({ campaignId, createdByUserId: userId, ...templateData(parsed) })
  }

  async deleteTemplate(campaignId: string, templateId: string, userId: string) {
    await this.requireAccess(campaignId, userId, true)
    const existing = await this.repository.findTemplate(campaignId, templateId)
    if (!existing || isAreaEffectToolBindingTemplate(existing)) {
      throw new AreaServiceError(404, 'Template de area nao encontrado')
    }
    const result = await this.repository.deleteTemplate(campaignId, templateId)
    if (!result.count) throw new AreaServiceError(404, 'Template de area nao encontrado')
  }

  async listEffects(campaignId: string, sceneId: string, userId: string) {
    const access = await this.requireAccess(campaignId, userId)
    const scene = await this.repository.findScene(campaignId, sceneId)
    if (!scene) throw new AreaServiceError(404, 'Cena nao encontrada')
    if (access.role !== 'MASTER') {
      const visibleSceneId = await this.repository.visibleSceneId(campaignId, access.role, access.memberId)
      if (visibleSceneId !== sceneId) throw new AreaServiceError(403, 'Cena nao disponivel para este usuario')
    }
    const effects = await this.repository.listEffects(campaignId, sceneId)
    return access.role === 'MASTER'
      ? effects
      : effects.filter((effect) => (effect.configurationSnapshot as { visibility?: string }).visibility === 'ALL_PLAYERS')
  }

  async createEffect(campaignId: string, sceneId: string, userId: string, input: SceneAreaEffectInput) {
    await this.requireAccess(campaignId, userId, true)
    const [scene, template] = await Promise.all([
      this.repository.findScene(campaignId, sceneId),
      this.repository.findTemplate(campaignId, input.templateId),
    ])
    if (!scene) throw new AreaServiceError(404, 'Cena nao encontrada')
    if (!template) throw new AreaServiceError(404, 'Template de area nao encontrado')
    if (template.persistenceMode !== 'PERSISTENT') throw new AreaServiceError(409, 'Somente templates persistentes criam instancias na cena')

    const snapshot = {
      ...template,
      tags: template.tags,
      dimensions: template.dimensions,
      duration: template.duration ?? undefined,
      style: template.style,
      createdAt: template.createdAt.toISOString(),
      updatedAt: template.updatedAt.toISOString(),
    }
    return this.repository.createEffect({
      campaignId,
      sceneId,
      templateId: template.id,
      createdByUserId: userId,
      sourceTokenId: input.sourceTokenId,
      targetTokenId: input.targetTokenId,
      originX: input.origin.x,
      originY: input.origin.y,
      originElevation: input.origin.elevation,
      rotationDegrees: input.rotationDegrees,
      scale: input.scale,
      configurationSnapshot: json(snapshot),
      state: 'ACTIVE',
    })
  }

  async deleteEffect(campaignId: string, sceneId: string, effectId: string, userId: string) {
    await this.requireAccess(campaignId, userId, true)
    const result = await this.repository.deleteEffect(campaignId, sceneId, effectId)
    if (!result.count) throw new AreaServiceError(404, 'Instancia de area nao encontrada')
  }

  async updateEffect(campaignId: string, sceneId: string, effectId: string, userId: string, patch: SceneAreaEffectPatch) {
    await this.requireAccess(campaignId, userId, true)
    const existing = await this.repository.findEffect(campaignId, sceneId, effectId)
    if (!existing) throw new AreaServiceError(404, 'Instancia de area nao encontrada')
    await this.repository.updateEffect(campaignId, sceneId, effectId, {
      ...(patch.origin ? {
        originX: patch.origin.x,
        originY: patch.origin.y,
        originElevation: patch.origin.elevation ?? null,
      } : {}),
      ...(patch.rotationDegrees !== undefined ? { rotationDegrees: patch.rotationDegrees } : {}),
      ...(patch.scale !== undefined ? { scale: patch.scale } : {}),
    })
    const updated = await this.repository.findEffect(campaignId, sceneId, effectId)
    if (!updated) throw new AreaServiceError(404, 'Instancia de area nao encontrada')
    return updated
  }
}
