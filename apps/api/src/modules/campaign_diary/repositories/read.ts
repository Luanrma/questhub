import { prisma } from '../../../db/prisma'
import type { CampaignDiaryAccess } from '../domain/types'

export function getCampaignDiaryAccess(campaignId: string, userId: string): Promise<CampaignDiaryAccess | null> {
  return prisma.campaignCharacter.findFirst({
    where: {
      campaignId,
      userId,
      status: 'ACTIVE',
      role: { in: ['MASTER', 'PLAYER'] },
    },
    select: {
      role: true,
      status: true,
    },
  })
}

export function listCampaignDiaries(campaignId: string) {
  return prisma.campaignDiary.findMany({
    where: { campaignId },
    orderBy: { updatedAt: 'desc' },
  })
}

export function findCampaignDiary(campaignId: string, diaryId: string) {
  return prisma.campaignDiary.findFirst({
    where: {
      id: diaryId,
      campaignId,
    },
  })
}
