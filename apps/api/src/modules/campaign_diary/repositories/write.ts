import { prisma } from '../../../db/prisma'
import type { CreateCampaignDiaryData, UpdateCampaignDiaryData } from '../domain/types'

export function createCampaignDiary(data: CreateCampaignDiaryData) {
  return prisma.campaignDiary.create({
    data: {
      campaignId: data.campaignId,
      title: data.title,
      content: data.content,
      createdById: data.userId,
      lastEditedBy: data.userId,
    },
  })
}

export function updateCampaignDiary(data: UpdateCampaignDiaryData) {
  return prisma.campaignDiary.update({
    where: { id: data.diaryId },
    data: {
      ...(data.title !== undefined ? { title: data.title } : {}),
      ...(data.content !== undefined ? { content: data.content } : {}),
      lastEditedBy: data.userId,
    },
  })
}

export function deleteCampaignDiary(diaryId: string) {
  return prisma.campaignDiary.delete({ where: { id: diaryId } })
}
