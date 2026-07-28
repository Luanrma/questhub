import test from 'node:test'
import assert from 'node:assert/strict'
import { presentChatMessage } from './presenter'

test('presentChatMessage marks messages sent by current user across controlled actors', () => {
  const createdAt = new Date('2026-06-25T01:00:00.000Z')

  const result = presentChatMessage(
    {
      id: 'message-1',
      campaignId: 'campaign-1',
      actorId: 'character-1',
      userId: 'user-1',
      actorName: 'Pedro',
      role: 'PLAYER',
      content: 'Ola mesa',
      createdAt,
    },
    'user-1',
  )

  assert.equal(result.mine, true)
  assert.equal(result.actorName, 'Pedro')
  assert.equal(result.role, 'PLAYER')
  assert.equal(result.createdAt, createdAt)
})
