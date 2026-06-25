import { z } from 'zod'

export const CHAT_MESSAGE_MAX_LENGTH = 500
export const CHAT_HISTORY_LIMIT = 50

export const chatMessageCreateSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha obrigatoria'),
  characterId: z.string().trim().min(1, 'Personagem obrigatorio'),
  content: z.string().trim().min(1, 'Mensagem obrigatoria').max(CHAT_MESSAGE_MAX_LENGTH, 'Mensagem muito longa'),
})

export const chatCampaignParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})
