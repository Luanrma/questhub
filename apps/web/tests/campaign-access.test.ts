import assert from 'node:assert/strict'
import { test } from 'node:test'
import { canOpenCampaignTable } from '../src/features/campaigns/domain/campaignAccess'

test('active master can open an offline campaign table', () => {
  assert.equal(canOpenCampaignTable({ role: 'MASTER', status: 'ACTIVE', isOnline: false }), true)
})

test('active player can open only an online campaign table', () => {
  assert.equal(canOpenCampaignTable({ role: 'PLAYER', status: 'ACTIVE', isOnline: false }), false)
  assert.equal(canOpenCampaignTable({ role: 'PLAYER', status: 'ACTIVE', isOnline: true }), true)
})

test('inactive campaign members cannot open the table', () => {
  assert.equal(canOpenCampaignTable({ role: 'PLAYER', status: 'PENDING', isOnline: true }), false)
  assert.equal(canOpenCampaignTable({ role: 'PLAYER', status: 'REJECTED', isOnline: true }), false)
  assert.equal(canOpenCampaignTable({ role: 'MASTER', status: 'LEFT', isOnline: true }), false)
})
