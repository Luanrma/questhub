import test from 'node:test'
import assert from 'node:assert/strict'
import { presentChatMessage } from './presenter'

test('presentChatMessage marks messages sent by current character', () => {
  const createdAt = new Date('2026-06-25T01:00:00.000Z')

  const result = presentChatMessage(
    {
      id: 'message-1',
      campaignId: 'campaign-1',
      characterId: 'character-1',
      characterName: 'Pedro',
      role: 'PLAYER',
      content: 'Ola mesa',
      createdAt,
    },
    'character-1',
  )

  assert.equal(result.mine, true)
  assert.equal(result.characterName, 'Pedro')
  assert.equal(result.role, 'PLAYER')
  assert.equal(result.createdAt, createdAt)
})
