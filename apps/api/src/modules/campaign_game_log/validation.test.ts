import assert from 'node:assert/strict'
import test from 'node:test'
import { campaignGameLogParamsSchema, campaignGameLogQuerySchema } from './validation'

test('game log history filters only by a non-empty encounter identity', () => {
  assert.equal(campaignGameLogParamsSchema.safeParse({ campaignId: 'campaign-1' }).success, true)
  assert.equal(campaignGameLogQuerySchema.safeParse({}).success, true)
  assert.equal(campaignGameLogQuerySchema.safeParse({ encounterId: 'encounter-1' }).success, true)
  assert.equal(campaignGameLogQuerySchema.safeParse({ encounterId: '   ' }).success, false)
})
