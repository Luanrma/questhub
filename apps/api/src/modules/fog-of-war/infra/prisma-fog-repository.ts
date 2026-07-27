import type { Prisma } from '@prisma/client'
import { prisma } from '../../../db/prisma'
import type { FogRepository } from '../application/ports/fog-repository'
import type { FogFixedLightSource, FogLightSourceConfig, SceneFogConfig, TokenVisionConfig } from '../domain/config'
import type { FogExplorationMask } from '../domain/exploration-mask'

function json(value: unknown): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue
}

export class PrismaFogRepository implements FogRepository {
  async findAccess(campaignId: string, userId: string) {
    const [character, member] = await Promise.all([
      prisma.campaignMember.findFirst({
        where: { campaignId, userId, status: 'ACTIVE', role: { in: ['MASTER', 'PLAYER'] } },
        select: { role: true },
      }),
      prisma.campaignMember.findUnique({
        where: { campaignId_userId: { campaignId, userId } },
        select: { id: true },
      }),
    ])
    if (!character || (character.role !== 'MASTER' && character.role !== 'PLAYER')) return null
    return { role: character.role, memberId: member?.id ?? null }
  }

  async sceneExists(campaignId: string, sceneId: string) {
    return Boolean(await prisma.campaignScene.findFirst({ where: { id: sceneId, campaignId }, select: { id: true } }))
  }

  async findToken(campaignId: string, tokenId: string) {
    return prisma.campaignToken.findFirst({
      where: { id: tokenId, campaignId },
      select: {
        id: true,
        campaignId: true,
        controllerMemberId: true,
        visionConfig: true,
        lightConfig: true,
        placement: { select: { sceneId: true, layer: true } },
      },
    })
  }

  async updateScene(input: { sceneId: string; fogConfig: SceneFogConfig; fixedLightSources: FogFixedLightSource[] }) {
    await prisma.campaignScene.update({
      where: { id: input.sceneId },
      data: { fogConfig: json(input.fogConfig), fixedLightSources: json(input.fixedLightSources) },
    })
  }

  async updateTokenVision(tokenId: string, visionConfig: TokenVisionConfig) {
    await prisma.campaignToken.update({ where: { id: tokenId }, data: { visionConfig: json(visionConfig) } })
  }

  async updateTokenLight(tokenId: string, lightConfig: FogLightSourceConfig) {
    await prisma.campaignToken.update({ where: { id: tokenId }, data: { lightConfig: json(lightConfig) } })
  }

  async updatePlacementOcclusion(tokenId: string, blocksVisionAndLight: boolean) {
    await prisma.campaignTokenPlacement.update({ where: { tokenId }, data: { blocksVisionAndLight } })
  }

  async getExploration(sceneId: string, tokenId: string): Promise<FogExplorationMask | null> {
    const record = await prisma.campaignFogExploration.findUnique({
      where: { sceneId_tokenId: { sceneId, tokenId } },
      select: { revision: true, maskWidth: true, maskHeight: true, mask: true },
    })
    if (!record || !record.mask || record.maskWidth < 1 || record.maskHeight < 1) return null
    return { revision: record.revision, width: record.maskWidth, height: record.maskHeight, mask: Uint8Array.from(record.mask) }
  }

  async saveExploration(sceneId: string, tokenId: string, exploration: FogExplorationMask) {
    await prisma.campaignFogExploration.upsert({
      where: { sceneId_tokenId: { sceneId, tokenId } },
      create: {
        sceneId,
        tokenId,
        revision: exploration.revision,
        maskWidth: exploration.width,
        maskHeight: exploration.height,
        mask: Uint8Array.from(exploration.mask),
      },
      update: {
        revision: exploration.revision,
        maskWidth: exploration.width,
        maskHeight: exploration.height,
        mask: Uint8Array.from(exploration.mask),
      },
    })
  }

  async listSceneExplorations(sceneId: string) {
    const records = await prisma.campaignFogExploration.findMany({
      where: { sceneId },
      select: { tokenId: true, revision: true, maskWidth: true, maskHeight: true, mask: true },
    })
    return records.flatMap((record) => record.mask && record.maskWidth > 0 && record.maskHeight > 0
      ? [{ tokenId: record.tokenId, exploration: { revision: record.revision, width: record.maskWidth, height: record.maskHeight, mask: Uint8Array.from(record.mask) } }]
      : [])
  }
}
