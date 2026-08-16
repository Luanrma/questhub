import assert from 'node:assert/strict'
import test from 'node:test'
import { AGENT_ROLES, AGENT_ROLE_REGISTRY, parseAgentRole } from './role-registry'

test('registry contains all supported roles exactly once', () => {
  assert.deepEqual(Object.keys(AGENT_ROLE_REGISTRY).sort(), [...AGENT_ROLES].sort())
  for (const role of AGENT_ROLES) {
    assert.equal(AGENT_ROLE_REGISTRY[role].id, role)
    assert.match(AGENT_ROLE_REGISTRY[role].instructionPath, /^\.ai\/agents\/.+\.md$/)
  }
})

test('invalid role is rejected', () => {
  assert.throws(() => parseAgentRole('orchestrator'), /Unknown agent role/)
})
