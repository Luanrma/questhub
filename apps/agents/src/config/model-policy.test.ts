import assert from 'node:assert/strict'
import test from 'node:test'
import { DEFAULT_AGENT_MODEL_POLICY, resolveAgentModelPolicy } from './model-policy'

test('uses the approved default policy per role', () => {
  assert.deepEqual(DEFAULT_AGENT_MODEL_POLICY.ba, {
    model: 'gpt-5.6-terra',
    reasoningEffort: 'medium',
  })
  assert.deepEqual(DEFAULT_AGENT_MODEL_POLICY.architect, {
    model: 'gpt-5.6-sol',
    reasoningEffort: 'high',
  })
  assert.deepEqual(DEFAULT_AGENT_MODEL_POLICY.developer, {
    model: 'gpt-5.6-sol',
    reasoningEffort: 'high',
  })
  assert.deepEqual(DEFAULT_AGENT_MODEL_POLICY['code-reviewer'], {
    model: 'gpt-5.6-sol',
    reasoningEffort: 'high',
  })
  assert.deepEqual(DEFAULT_AGENT_MODEL_POLICY['documentation-auditor'], {
    model: 'gpt-5.6-terra',
    reasoningEffort: 'medium',
  })
  assert.deepEqual(DEFAULT_AGENT_MODEL_POLICY.qa, {
    model: 'gpt-5.6-terra',
    reasoningEffort: 'medium',
  })
})

test('supports per-role model and reasoning overrides', () => {
  const policy = resolveAgentModelPolicy('code-reviewer', {
    QH_AGENT_MODEL_CODE_REVIEWER: 'gpt-5.6-terra',
    QH_AGENT_REASONING_CODE_REVIEWER: 'xhigh',
  })

  assert.deepEqual(policy, {
    model: 'gpt-5.6-terra',
    reasoningEffort: 'xhigh',
  })
})

test('rejects an invalid reasoning override', () => {
  assert.throws(
    () => resolveAgentModelPolicy('qa', { QH_AGENT_REASONING_QA: 'turbo' }),
    /Invalid reasoning effort/,
  )
})
