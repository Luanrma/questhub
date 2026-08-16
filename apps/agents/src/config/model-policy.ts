import type { AgentRole } from '../roles/role-registry'

export type AgentReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'

export type AgentModelPolicy = {
  model: string
  reasoningEffort: AgentReasoningEffort
}

export const DEFAULT_AGENT_MODEL_POLICY: Record<AgentRole, AgentModelPolicy> = {
  ba: { model: 'gpt-5.6-terra', reasoningEffort: 'medium' },
  architect: { model: 'gpt-5.6-sol', reasoningEffort: 'high' },
  developer: { model: 'gpt-5.6-sol', reasoningEffort: 'high' },
  'code-reviewer': { model: 'gpt-5.6-sol', reasoningEffort: 'high' },
  'documentation-auditor': { model: 'gpt-5.6-terra', reasoningEffort: 'medium' },
  qa: { model: 'gpt-5.6-terra', reasoningEffort: 'medium' },
}

const VALID_REASONING = new Set<AgentReasoningEffort>([
  'none', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max',
])

function envRoleSuffix(role: AgentRole) {
  return role.replaceAll('-', '_').toUpperCase()
}

export function resolveAgentModelPolicy(
  role: AgentRole,
  env: NodeJS.ProcessEnv = process.env,
): AgentModelPolicy {
  const defaults = DEFAULT_AGENT_MODEL_POLICY[role]
  const suffix = envRoleSuffix(role)
  const model = env[`QH_AGENT_MODEL_${suffix}`]?.trim() || defaults.model
  const rawReasoning = env[`QH_AGENT_REASONING_${suffix}`]?.trim()

  if (rawReasoning && !VALID_REASONING.has(rawReasoning as AgentReasoningEffort)) {
    throw new Error(`Invalid reasoning effort: ${rawReasoning}`)
  }

  return {
    model,
    reasoningEffort: (rawReasoning as AgentReasoningEffort | undefined) ?? defaults.reasoningEffort,
  }
}
