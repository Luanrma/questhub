import type { CampaignAreaTemplate, SceneAreaEffect } from '@prisma/client'

export function presentAreaTemplate(template: CampaignAreaTemplate) {
  return {
    id: template.id,
    campaignId: template.campaignId,
    createdByUserId: template.createdByUserId,
    name: template.name,
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
    createdAt: template.createdAt.toISOString(),
    updatedAt: template.updatedAt.toISOString(),
  }
}

export function presentSceneAreaEffect(effect: SceneAreaEffect) {
  return {
    id: effect.id,
    campaignId: effect.campaignId,
    sceneId: effect.sceneId,
    templateId: effect.templateId ?? undefined,
    createdByUserId: effect.createdByUserId,
    sourceTokenId: effect.sourceTokenId ?? undefined,
    targetTokenId: effect.targetTokenId ?? undefined,
    origin: {
      x: effect.originX,
      y: effect.originY,
      elevation: effect.originElevation ?? undefined,
    },
    rotationDegrees: effect.rotationDegrees,
    scale: effect.scale,
    configurationSnapshot: effect.configurationSnapshot,
    state: effect.state,
    createdAt: effect.createdAt.toISOString(),
    expiresAt: effect.expiresAt?.toISOString(),
  }
}

