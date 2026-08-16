export const AGENT_ROLES = [
  'ba',
  'architect',
  'developer',
  'code-reviewer',
  'documentation-auditor',
  'qa',
] as const

export type AgentRole = (typeof AGENT_ROLES)[number]

export type AgentRoleDescriptor = {
  id: AgentRole
  name: string
  instructionPath: string
}

export const AGENT_ROLE_REGISTRY: Record<AgentRole, AgentRoleDescriptor> = {
  ba: {
    id: 'ba',
    name: 'QuestHub Business Analyst',
    instructionPath: '.ai/agents/ba.md',
  },
  architect: {
    id: 'architect',
    name: 'QuestHub Architect',
    instructionPath: '.ai/agents/architect.md',
  },
  developer: {
    id: 'developer',
    name: 'QuestHub Developer',
    instructionPath: '.ai/agents/developer.md',
  },
  'code-reviewer': {
    id: 'code-reviewer',
    name: 'QuestHub Code Reviewer',
    instructionPath: '.ai/agents/code-reviewer.md',
  },
  'documentation-auditor': {
    id: 'documentation-auditor',
    name: 'QuestHub Documentation Auditor',
    instructionPath: '.ai/agents/documentation-auditor.md',
  },
  qa: {
    id: 'qa',
    name: 'QuestHub QA',
    instructionPath: '.ai/agents/qa.md',
  },
}

export function isAgentRole(value: string): value is AgentRole {
  return (AGENT_ROLES as readonly string[]).includes(value)
}

export function parseAgentRole(value: string): AgentRole {
  if (!isAgentRole(value)) {
    throw new Error(`Unknown agent role: ${value}. Valid roles: ${AGENT_ROLES.join(', ')}`)
  }
  return value
}
