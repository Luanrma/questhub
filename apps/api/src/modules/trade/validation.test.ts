import test from 'node:test'
import assert from 'node:assert/strict'
import { tradeRequestSchema, validateTradeEligibility, type TradeCampaignCharacterLink } from './validation'

function activeLink(overrides: Partial<TradeCampaignCharacterLink> = {}): TradeCampaignCharacterLink {
  return {
    campaignId: 'campaign-1',
    characterId: 'character-1',
    userId: 'user-1',
    status: 'ACTIVE',
    ...overrides,
  }
}

test('tradeRequestSchema requires campaign and both character ids', () => {
  assert.equal(tradeRequestSchema.safeParse({}).success, false)
  assert.equal(
    tradeRequestSchema.safeParse({
      campaignId: 'campaign-1',
      fromCharacterId: 'character-1',
      toCharacterId: 'character-2',
    }).success,
    true,
  )
})

test('validateTradeEligibility allows active characters from the same campaign', () => {
  const result = validateTradeEligibility({
    authenticatedUserId: 'user-1',
    campaignId: 'campaign-1',
    from: activeLink({ characterId: 'character-1', userId: 'user-1' }),
    to: activeLink({ characterId: 'character-2', userId: 'user-2' }),
  })

  assert.deepEqual(result, { ok: true })
})

test('validateTradeEligibility rejects trade when origin is not controlled by authenticated user', () => {
  const result = validateTradeEligibility({
    authenticatedUserId: 'user-1',
    campaignId: 'campaign-1',
    from: activeLink({ characterId: 'character-1', userId: 'user-2' }),
    to: activeLink({ characterId: 'character-2', userId: 'user-3' }),
  })

  assert.deepEqual(result, { ok: false, reason: 'FROM_CHARACTER_FORBIDDEN' })
})

test('validateTradeEligibility rejects characters from different campaigns', () => {
  const result = validateTradeEligibility({
    authenticatedUserId: 'user-1',
    campaignId: 'campaign-1',
    from: activeLink({ characterId: 'character-1', userId: 'user-1' }),
    to: activeLink({ campaignId: 'campaign-2', characterId: 'character-2', userId: 'user-2' }),
  })

  assert.deepEqual(result, { ok: false, reason: 'DIFFERENT_CAMPAIGN' })
})

test('validateTradeEligibility rejects non-active origin or destination characters', () => {
  assert.deepEqual(
    validateTradeEligibility({
      authenticatedUserId: 'user-1',
      campaignId: 'campaign-1',
      from: activeLink({ characterId: 'character-1', userId: 'user-1', status: 'PENDING' }),
      to: activeLink({ characterId: 'character-2', userId: 'user-2' }),
    }),
    { ok: false, reason: 'FROM_CHARACTER_NOT_ACTIVE' },
  )

  assert.deepEqual(
    validateTradeEligibility({
      authenticatedUserId: 'user-1',
      campaignId: 'campaign-1',
      from: activeLink({ characterId: 'character-1', userId: 'user-1' }),
      to: activeLink({ characterId: 'character-2', userId: 'user-2', status: 'DEAD' }),
    }),
    { ok: false, reason: 'TO_CHARACTER_NOT_ACTIVE' },
  )
})
