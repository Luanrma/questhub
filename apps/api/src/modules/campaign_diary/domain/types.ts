export type CampaignDiaryAccess = {
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'ACTIVE' | 'PENDING' | 'REJECTED' | 'LEFT' | 'DEAD'
}

export type CampaignDiaryRecord = {
  id: string
  campaignId: string
  title: string
  content: string
  createdById: string
  lastEditedBy: string
  createdAt: Date
  updatedAt: Date
}

export type CreateCampaignDiaryData = {
  campaignId: string
  title: string
  content: string
  userId: string
}

export type UpdateCampaignDiaryData = {
  diaryId: string
  title?: string
  content?: string
  userId: string
}
