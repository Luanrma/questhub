import test from 'node:test'
import assert from 'node:assert/strict'
import { canOpenCampaignTable, presentCampaignDashboardEntry } from './presenter'

function dashboardEntry(role: 'MASTER' | 'PLAYER') {
  return {
    role,
    status: 'ACTIVE' as const,
    actor: {
      id: role === 'MASTER' ? 'master-actor' : 'player-actor',
      name: role === 'MASTER' ? 'Arion' : 'Lia',
    },
    campaign: {
      id: 'campaign-1',
      title: 'Sombras de Absalom',
      description: 'Campanha semanal',
      inviteCode: 'ABC12345',
      joinPolicy: 'PRIVATE',
      createdAt: new Date('2026-06-29T10:00:00.000Z'),
      members: [
        {
          userId: 'master-user',
          actor: {
            id: 'master-actor',
            name: 'Arion',
          },
        },
      ],
    },
  }
}

test('presentCampaignDashboardEntry exposes inviteCode only for master', () => {
  const master = presentCampaignDashboardEntry(dashboardEntry('MASTER'), {
    isOnline: false,
    sessionState: null,
  })
  const player = presentCampaignDashboardEntry(dashboardEntry('PLAYER'), {
    isOnline: true,
    sessionState: 'ACTIVE',
  })

  assert.equal(master.inviteCode, 'ABC12345')
  assert.equal(player.inviteCode, null)
})

test('presentCampaignDashboardEntry derives gm and current actor fields from CampaignMember', () => {
  const result = presentCampaignDashboardEntry(dashboardEntry('PLAYER'), {
    isOnline: true,
    sessionState: 'PAUSED',
  })

  assert.equal(result.gmName, 'Arion')
  assert.equal(result.gmUserId, 'master-user')
  assert.equal(result.myRole, 'PLAYER')
  assert.equal(result.myStatus, 'ACTIVE')
  assert.equal(result.myActorId, 'player-actor')
  assert.equal(result.myActorName, 'Lia')
  assert.equal(result.isOnline, true)
  assert.equal(result.sessionState, 'PAUSED')
})

test('canOpenCampaignTable allows active master even when campaign is offline', () => {
  assert.equal(canOpenCampaignTable({ role: 'MASTER', status: 'ACTIVE', isOnline: false }), true)
})

test('canOpenCampaignTable allows active player only when campaign is online', () => {
  assert.equal(canOpenCampaignTable({ role: 'PLAYER', status: 'ACTIVE', isOnline: false }), false)
  assert.equal(canOpenCampaignTable({ role: 'PLAYER', status: 'ACTIVE', isOnline: true }), true)
})

test('canOpenCampaignTable blocks inactive members', () => {
  assert.equal(canOpenCampaignTable({ role: 'MASTER', status: 'PENDING', isOnline: true }), false)
  assert.equal(canOpenCampaignTable({ role: 'PLAYER', status: 'REJECTED', isOnline: true }), false)
})
