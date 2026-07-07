import { prisma } from '../../../../db/prisma'
import type { SceneHazardInstance } from '../domain/types'

function toSceneHazardInstance(record: {
  id: string
  sceneId: string
  hazardEntryId: string
  name: string
  scope: string
  positionX: number | null
  positionY: number | null
  visibility: string
  state: string
  triggerMode: string
  executionMode: string
  notes: string | null
}): SceneHazardInstance {
  return {
    id: record.id,
    sceneId: record.sceneId,
    hazardEntryId: record.hazardEntryId,
    name: record.name,
    scope: record.scope as SceneHazardInstance['scope'],
    position: record.positionX !== null && record.positionY !== null ? { x: record.positionX, y: record.positionY } : null,
    visibility: record.visibility as SceneHazardInstance['visibility'],
    state: record.state as SceneHazardInstance['state'],
    triggerMode: record.triggerMode as SceneHazardInstance['triggerMode'],
    executionMode: record.executionMode as SceneHazardInstance['executionMode'],
    notes: record.notes,
  }
}

export async function findSceneHazardsByScene(sceneId: string): Promise<SceneHazardInstance[]> {
  const records = await prisma.campaignSceneHazard.findMany({
    where: { sceneId },
    orderBy: { createdAt: 'asc' },
  })
  return records.map(toSceneHazardInstance)
}

export async function findArmedTokenEnterHazardsInScene(sceneId: string): Promise<SceneHazardInstance[]> {
  const records = await prisma.campaignSceneHazard.findMany({
    where: { sceneId, triggerMode: 'ON_TOKEN_ENTER', state: 'ARMED', scope: { in: ['POINT', 'AREA'] } },
  })
  return records.map(toSceneHazardInstance)
}

export async function findSceneHazardsByIds(sceneId: string, hazardIds: string[]): Promise<SceneHazardInstance[]> {
  if (!hazardIds.length) return []

  const records = await prisma.campaignSceneHazard.findMany({
    where: { sceneId, id: { in: hazardIds } },
    orderBy: { createdAt: 'asc' },
  })
  return records.map(toSceneHazardInstance)
}

export async function findSceneHazardWithCampaign(hazardId: string) {
  const record = await prisma.campaignSceneHazard.findUnique({
    where: { id: hazardId },
    include: { scene: { select: { id: true, campaignId: true } } },
  })
  if (!record) return null

  return {
    instance: toSceneHazardInstance(record),
    sceneId: record.scene.id,
    campaignId: record.scene.campaignId,
  }
}

export async function findSceneWithCampaignSystem(sceneId: string, campaignId: string) {
  const scene = await prisma.campaignScene.findFirst({
    where: { id: sceneId, campaignId },
    select: { id: true, campaign: { select: { system: true } } },
  })
  if (!scene) return null

  return { sceneId: scene.id, system: scene.campaign.system }
}
