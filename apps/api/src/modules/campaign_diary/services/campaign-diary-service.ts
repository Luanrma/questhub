import { canAccessCampaignDiary } from '../domain/policy'
import { findCampaignDiary, getCampaignDiaryAccess, listCampaignDiaries } from '../repositories/read'
import { createCampaignDiary, deleteCampaignDiary, updateCampaignDiary } from '../repositories/write'

type CreateDiaryInput = {
  campaignId: string
  title: string
  content?: string
  userId: string
}

type UpdateDiaryInput = {
  campaignId: string
  diaryId: string
  title?: string
  content?: string
  userId: string
}

type DeleteDiaryInput = {
  campaignId: string
  diaryId: string
  userId: string
}

async function ensureMasterAccess(campaignId: string, userId: string) {
  const access = await getCampaignDiaryAccess(campaignId, userId)
  return canAccessCampaignDiary(access)
}

export async function listCampaignDiariesForMaster(campaignId: string, userId: string) {
  if (!(await ensureMasterAccess(campaignId, userId))) return { status: 'forbidden' as const }

  const diaries = await listCampaignDiaries(campaignId)
  return { status: 'ok' as const, diaries }
}

export async function createCampaignDiaryForMaster(input: CreateDiaryInput) {
  if (!(await ensureMasterAccess(input.campaignId, input.userId))) return { status: 'forbidden' as const }

  const diary = await createCampaignDiary({
    campaignId: input.campaignId,
    title: input.title,
    content: input.content ?? '',
    userId: input.userId,
  })

  return { status: 'created' as const, diary }
}

export async function getCampaignDiaryForMaster(campaignId: string, diaryId: string, userId: string) {
  if (!(await ensureMasterAccess(campaignId, userId))) return { status: 'forbidden' as const }

  const diary = await findCampaignDiary(campaignId, diaryId)
  if (!diary) return { status: 'not_found' as const }

  return { status: 'ok' as const, diary }
}

export async function updateCampaignDiaryForMaster(input: UpdateDiaryInput) {
  if (!(await ensureMasterAccess(input.campaignId, input.userId))) return { status: 'forbidden' as const }

  const existing = await findCampaignDiary(input.campaignId, input.diaryId)
  if (!existing) return { status: 'not_found' as const }

  const diary = await updateCampaignDiary({
    diaryId: input.diaryId,
    title: input.title,
    content: input.content,
    userId: input.userId,
  })

  return { status: 'ok' as const, diary }
}

export async function deleteCampaignDiaryForMaster(input: DeleteDiaryInput) {
  if (!(await ensureMasterAccess(input.campaignId, input.userId))) return { status: 'forbidden' as const }

  const existing = await findCampaignDiary(input.campaignId, input.diaryId)
  if (!existing) return { status: 'not_found' as const }

  await deleteCampaignDiary(input.diaryId)
  return { status: 'deleted' as const }
}
