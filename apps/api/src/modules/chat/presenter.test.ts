import test from 'node:test'
import assert from 'node:assert/strict'
import { presentChatMessage } from './presenter'

test('presentChatMessage marks messages sent by current actor', () => {
  const createdAt = new Date('2026-06-25T01:00:00.000Z')

  const result = presentChatMessage(
    {
      id: 'message-1',
      campaignId: 'campaign-1',
      actorId: 'actor-1',
      actorName: 'Pedro',
      role: 'PLAYER',
      content: 'Ola mesa',
      createdAt,
    },
    'actor-1',
  )

  assert.equal(result.mine, true)
  assert.equal(result.actorName, 'Pedro')
  assert.equal(result.role, 'PLAYER')
  assert.equal(result.createdAt, createdAt)
})
