import test from 'node:test'
import assert from 'node:assert/strict'
import { tradeRequestSchema, validateTradeEligibility, type TradeCampaignActorLink } from './validation'

function activeActorLink(overrides: Partial<TradeCampaignActorLink> = {}): TradeCampaignActorLink {
  return {
    campaignId: 'campaign-1',
    actorId: 'character-1',
    userId: 'user-1',
    status: 'ACTIVE',
    ...overrides,
  }
}

test('tradeRequestSchema requires campaign and both actor ids', () => {
  assert.equal(tradeRequestSchema.safeParse({}).success, false)
  assert.equal(
    tradeRequestSchema.safeParse({
      campaignId: 'campaign-1',
      fromActorId: 'character-1',
      toActorId: 'character-2',
    }).success,
    true,
  )
})

test('validateTradeEligibility allows active actors from the same campaign', () => {
  const result = validateTradeEligibility({
    authenticatedUserId: 'user-1',
    campaignId: 'campaign-1',
    from: activeActorLink({ actorId: 'character-1', userId: 'user-1' }),
    to: activeActorLink({ actorId: 'character-2', userId: 'user-2' }),
  })

  assert.deepEqual(result, { ok: true })
})

test('validateTradeEligibility rejects trade when origin is not controlled by authenticated user', () => {
  const result = validateTradeEligibility({
    authenticatedUserId: 'user-1',
    campaignId: 'campaign-1',
    from: activeActorLink({ actorId: 'character-1', userId: 'user-2' }),
    to: activeActorLink({ actorId: 'character-2', userId: 'user-3' }),
  })

  assert.deepEqual(result, { ok: false, reason: 'FROM_ACTOR_FORBIDDEN' })
})

test('validateTradeEligibility rejects actors from different campaigns', () => {
  const result = validateTradeEligibility({
    authenticatedUserId: 'user-1',
    campaignId: 'campaign-1',
    from: activeActorLink({ actorId: 'character-1', userId: 'user-1' }),
    to: activeActorLink({ campaignId: 'campaign-2', actorId: 'character-2', userId: 'user-2' }),
  })

  assert.deepEqual(result, { ok: false, reason: 'DIFFERENT_CAMPAIGN' })
})

test('validateTradeEligibility rejects non-active origin or destination actors', () => {
  assert.deepEqual(
    validateTradeEligibility({
      authenticatedUserId: 'user-1',
      campaignId: 'campaign-1',
      from: activeActorLink({ actorId: 'character-1', userId: 'user-1', status: 'PENDING' }),
      to: activeActorLink({ actorId: 'character-2', userId: 'user-2' }),
    }),
    { ok: false, reason: 'FROM_ACTOR_NOT_ACTIVE' },
  )

  assert.deepEqual(
    validateTradeEligibility({
      authenticatedUserId: 'user-1',
      campaignId: 'campaign-1',
      from: activeActorLink({ actorId: 'character-1', userId: 'user-1' }),
      to: activeActorLink({ actorId: 'character-2', userId: 'user-2', status: 'LEFT' }),
    }),
    { ok: false, reason: 'TO_ACTOR_NOT_ACTIVE' },
  )
})
