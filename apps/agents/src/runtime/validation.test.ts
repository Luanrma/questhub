import assert from 'node:assert/strict'
import test from 'node:test'
import { normalizeAgentRunRequest, requireOpenAiApiKey } from './validation'

test('normalizes a valid run request', () => {
  assert.deepEqual(
    normalizeAgentRunRequest({
      role: 'architect',
      input: '  Review this feature  ',
      contextPaths: ['docs/features/example/spec.md'],
    }),
    {
      role: 'architect',
      input: 'Review this feature',
      contextPaths: ['docs/features/example/spec.md'],
    },
  )
})

test('rejects empty input before remote execution', () => {
  assert.throws(
    () => normalizeAgentRunRequest({ role: 'qa', input: '   ' }),
    /cannot be empty/,
  )
})

test('requires OPENAI_API_KEY before remote execution', () => {
  assert.throws(() => requireOpenAiApiKey({}), /OPENAI_API_KEY is required/)
  assert.equal(requireOpenAiApiKey({ OPENAI_API_KEY: ' test-key ' }), 'test-key')
})
