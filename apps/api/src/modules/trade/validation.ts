import { z } from 'zod'

export const tradeRequestSchema = z.object({
  campaignId: z.string().trim().min(1, 'campaignId obrigatorio'),
  fromActorId: z.string().trim().min(1, 'fromActorId obrigatorio'),
  toActorId: z.string().trim().min(1, 'toActorId obrigatorio'),
  item: z.unknown().optional(),
})

export type TradeCampaignActorLink = {
  campaignId: string
  actorId: string
  userId: string
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT'
}

export type TradeEligibilityInput = {
  authenticatedUserId: string
  campaignId: string
  from: TradeCampaignActorLink | null
  to: TradeCampaignActorLink | null
}

export type TradeEligibilityResult =
  | { ok: true }
  | {
      ok: false
      reason:
        | 'FROM_ACTOR_NOT_FOUND'
        | 'TO_ACTOR_NOT_FOUND'
        | 'FROM_ACTOR_FORBIDDEN'
        | 'FROM_ACTOR_NOT_ACTIVE'
        | 'TO_ACTOR_NOT_ACTIVE'
        | 'DIFFERENT_CAMPAIGN'
        | 'SAME_ACTOR'
    }

export function validateTradeEligibility(input: TradeEligibilityInput): TradeEligibilityResult {
  const { authenticatedUserId, campaignId, from, to } = input

  if (!from) return { ok: false, reason: 'FROM_ACTOR_NOT_FOUND' }
  if (!to) return { ok: false, reason: 'TO_ACTOR_NOT_FOUND' }
  if (from.actorId === to.actorId) return { ok: false, reason: 'SAME_ACTOR' }
  if (from.userId !== authenticatedUserId) return { ok: false, reason: 'FROM_ACTOR_FORBIDDEN' }
  if (from.campaignId !== campaignId || to.campaignId !== campaignId) return { ok: false, reason: 'DIFFERENT_CAMPAIGN' }
  if (from.status !== 'ACTIVE') return { ok: false, reason: 'FROM_ACTOR_NOT_ACTIVE' }
  if (to.status !== 'ACTIVE') return { ok: false, reason: 'TO_ACTOR_NOT_ACTIVE' }

  return { ok: true }
}
