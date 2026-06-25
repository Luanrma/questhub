import test from 'node:test'
import assert from 'node:assert/strict'
import { CHAT_MESSAGE_MAX_LENGTH, chatMessageCreateSchema } from './validation'

test('chatMessageCreateSchema trims content and rejects empty messages', () => {
  const valid = chatMessageCreateSchema.safeParse({
    campaignId: 'campaign-1',
    characterId: 'character-1',
    content: '  Ola  ',
  })

  assert.equal(valid.success, true)
  if (valid.success) assert.equal(valid.data.content, 'Ola')

  const invalid = chatMessageCreateSchema.safeParse({
    campaignId: 'campaign-1',
    characterId: 'character-1',
    content: '   ',
  })

  assert.equal(invalid.success, false)
})

test('chatMessageCreateSchema limits message length', () => {
  const result = chatMessageCreateSchema.safeParse({
    campaignId: 'campaign-1',
    characterId: 'character-1',
    content: 'x'.repeat(CHAT_MESSAGE_MAX_LENGTH + 1),
  })

  assert.equal(result.success, false)
})
