import { z } from 'zod'

export const CAMPAIGN_DIARY_TITLE_MAX_LENGTH = 120
export const CAMPAIGN_DIARY_CONTENT_MAX_LENGTH = 50000

export const campaignDiaryParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

export const campaignDiaryIdParamsSchema = campaignDiaryParamsSchema.extend({
  diaryId: z.string().trim().min(1, 'Diario invalido'),
})

export const createCampaignDiarySchema = z.object({
  title: z.string().trim().min(1, 'Titulo e obrigatorio').max(CAMPAIGN_DIARY_TITLE_MAX_LENGTH, 'Titulo muito longo'),
  content: z.string().max(CAMPAIGN_DIARY_CONTENT_MAX_LENGTH, 'Diario muito longo').optional(),
})

export const updateCampaignDiarySchema = z.object({
  title: z.string().trim().min(1, 'Titulo e obrigatorio').max(CAMPAIGN_DIARY_TITLE_MAX_LENGTH, 'Titulo muito longo').optional(),
  content: z.string().max(CAMPAIGN_DIARY_CONTENT_MAX_LENGTH, 'Diario muito longo').optional(),
})
