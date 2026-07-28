import test from 'node:test'
import assert from 'node:assert/strict'
import { presentChatMessage } from './presenter'

test('presentChatMessage marks messages sent by current user across controlled actors', () => {
  const createdAt = new Date('2026-06-25T01:00:00.000Z')

  const result = presentChatMessage(
    {
      id: 'message-1',
      campaignId: 'campaign-1',
      actorId: 'actor-1',
      userId: 'user-1',
      actorName: 'Pedro',
      actorAvatarUrl: '/tokens/pedro.webp',
      role: 'PLAYER',
      content: 'Ola mesa',
      createdAt,
    },
    'user-1',
  )

  assert.equal(result.mine, true)
  assert.equal(result.actorName, 'Pedro')
  assert.equal(result.actorAvatarUrl, '/tokens/pedro.webp')
  assert.equal(result.role, 'PLAYER')
  assert.equal(result.createdAt, createdAt)
})

test('presentChatMessage preserves authorship after the user relation is removed', () => {
  const result = presentChatMessage({
    id: 'message-2',
    campaignId: 'campaign-1',
    actorId: null,
    userId: null,
    actorName: 'Mestre',
    actorAvatarUrl: null,
    role: 'MASTER',
    content: 'Mensagem historica',
    createdAt: new Date('2026-06-25T02:00:00.000Z'),
  }, 'deleted-user')

  assert.equal(result.actorName, 'Mestre')
  assert.equal(result.role, 'MASTER')
  assert.equal(result.mine, false)
})
