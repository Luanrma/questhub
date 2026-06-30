import type { CampaignDiaryRecord } from './types'

export function presentCampaignDiary(diary: CampaignDiaryRecord) {
  return {
    id: diary.id,
    campaignId: diary.campaignId,
    title: diary.title,
    content: diary.content,
    createdBy: diary.createdById,
    lastEditedBy: diary.lastEditedBy,
    createdAt: diary.createdAt,
    updatedAt: diary.updatedAt,
  }
}
