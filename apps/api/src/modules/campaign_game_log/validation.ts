import { z } from 'zod'

export const CAMPAIGN_GAME_LOG_HISTORY_LIMIT = 250

export const campaignGameLogParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
})

export const campaignGameLogQuerySchema = z.object({
  encounterId: z.string().trim().min(1).optional(),
})
