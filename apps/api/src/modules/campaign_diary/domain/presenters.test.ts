import assert from 'node:assert/strict'
import { test } from 'node:test'
import { canAccessCampaignDiary } from './policy'
import { presentCampaignDiary } from './presenters'

const now = new Date('2026-06-30T00:00:00.000Z')

test('presentCampaignDiary maps free campaign diary', () => {
  const result = presentCampaignDiary({
    id: 'diary-1',
    campaignId: 'campaign-1',
    title: 'Cena 2',
    content: 'Anotacoes',
    createdById: 'user-1',
    lastEditedBy: 'user-1',
    createdAt: now,
    updatedAt: now,
  })

  assert.equal(result.title, 'Cena 2')
  assert.equal(result.content, 'Anotacoes')
})

test('only active masters can access campaign diaries', () => {
  assert.equal(canAccessCampaignDiary({ role: 'MASTER', status: 'ACTIVE' }), true)
  assert.equal(canAccessCampaignDiary({ role: 'PLAYER', status: 'ACTIVE' }), false)
  assert.equal(canAccessCampaignDiary({ role: 'MASTER', status: 'PENDING' }), false)
})
