import { z } from 'zod'

export const tradeRequestSchema = z.object({
  campaignId: z.string().trim().min(1, 'campaignId obrigatorio'),
  fromCharacterId: z.string().trim().min(1, 'fromCharacterId obrigatorio'),
  toCharacterId: z.string().trim().min(1, 'toCharacterId obrigatorio'),
  item: z.unknown().optional(),
})

export type TradeCampaignCharacterLink = {
  campaignId: string
  characterId: string
  userId: string
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
}

export type TradeEligibilityInput = {
  authenticatedUserId: string
  campaignId: string
  from: TradeCampaignCharacterLink | null
  to: TradeCampaignCharacterLink | null
}

export type TradeEligibilityResult =
  | { ok: true }
  | {
      ok: false
      reason:
        | 'FROM_CHARACTER_NOT_FOUND'
        | 'TO_CHARACTER_NOT_FOUND'
        | 'FROM_CHARACTER_FORBIDDEN'
        | 'FROM_CHARACTER_NOT_ACTIVE'
        | 'TO_CHARACTER_NOT_ACTIVE'
        | 'DIFFERENT_CAMPAIGN'
        | 'SAME_CHARACTER'
    }

export function validateTradeEligibility(input: TradeEligibilityInput): TradeEligibilityResult {
  const { authenticatedUserId, campaignId, from, to } = input

  if (!from) return { ok: false, reason: 'FROM_CHARACTER_NOT_FOUND' }
  if (!to) return { ok: false, reason: 'TO_CHARACTER_NOT_FOUND' }
  if (from.characterId === to.characterId) return { ok: false, reason: 'SAME_CHARACTER' }
  if (from.userId !== authenticatedUserId) return { ok: false, reason: 'FROM_CHARACTER_FORBIDDEN' }
  if (from.campaignId !== campaignId || to.campaignId !== campaignId) return { ok: false, reason: 'DIFFERENT_CAMPAIGN' }
  if (from.status !== 'ACTIVE') return { ok: false, reason: 'FROM_CHARACTER_NOT_ACTIVE' }
  if (to.status !== 'ACTIVE') return { ok: false, reason: 'TO_CHARACTER_NOT_ACTIVE' }

  return { ok: true }
}
