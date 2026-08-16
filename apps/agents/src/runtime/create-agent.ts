import { Agent } from '@openai/agents'
import type { AgentModelPolicy } from '../config/model-policy'
import { AGENT_ROLE_REGISTRY, type AgentRole } from '../roles/role-registry'

export function createQuestHubAgent(input: {
  role: AgentRole
  instructions: string
  policy: AgentModelPolicy
}) {
  const descriptor = AGENT_ROLE_REGISTRY[input.role]

  return new Agent({
    name: descriptor.name,
    instructions: input.instructions,
    model: input.policy.model,
    modelSettings: {
      reasoning: { effort: input.policy.reasoningEffort },
      text: { verbosity: 'low' },
    },
  })
}
