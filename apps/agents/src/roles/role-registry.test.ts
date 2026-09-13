import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
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

test('every versioned role file is registered exactly once', () => {
  const versionedRoles = readdirSync('.ai/agents')
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .sort()

  assert.deepEqual(versionedRoles, [...AGENT_ROLES].sort())
})

test('UX Specialist is registered with its canonical instruction file', () => {
  assert.deepEqual(AGENT_ROLE_REGISTRY['ux-specialist'], {
    id: 'ux-specialist',
    name: 'QuestHub UX Specialist',
    instructionPath: '.ai/agents/ux-specialist.md',
    requiredContextPaths: [
      'docs/skills/impeccable/SKILL.md',
      'docs/skills/impeccable/reference/operate.md',
      'docs/skills/impeccable/reference/craft-floor.md',
      'docs/skills/impeccable/reference/critique.md',
    ],
  })
  assert.equal(parseAgentRole('ux-specialist'), 'ux-specialist')
})
