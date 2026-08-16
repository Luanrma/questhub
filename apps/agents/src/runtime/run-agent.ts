import { Runner } from '@openai/agents'
import { resolveAgentModelPolicy } from '../config/model-policy'
import { loadAgentInstructions } from './context-loader'
import { createQuestHubAgent } from './create-agent'
import { normalizeAgentRunRequest, requireOpenAiApiKey } from './validation'

export const QUESTHUB_AGENT_MAX_TURNS = 4

export async function runQuestHubAgent(input: {
  role: string
  input: string
  contextPaths?: readonly string[]
  repoRoot?: string
  env?: NodeJS.ProcessEnv
}) {
  const env = input.env ?? process.env
  const request = normalizeAgentRunRequest(input)

  requireOpenAiApiKey(env)

  const policy = resolveAgentModelPolicy(request.role, env)
  const context = await loadAgentInstructions({
    role: request.role,
    repoRoot: input.repoRoot,
    additionalContextPaths: request.contextPaths,
  })
  const agent = createQuestHubAgent({
    role: request.role,
    instructions: context.instructions,
    policy,
  })

  const runner = new Runner({
    workflowName: `QuestHub Agent — ${request.role}`,
    tracingDisabled: env.OPENAI_AGENTS_DISABLE_TRACING === '1',
    traceIncludeSensitiveData: false,
    traceMetadata: {
      role: request.role,
      model: policy.model,
    },
  })

  const result = await runner.run(agent, request.input, {
    maxTurns: QUESTHUB_AGENT_MAX_TURNS,
  })

  return {
    role: request.role,
    model: policy.model,
    reasoningEffort: policy.reasoningEffort,
    contextPaths: context.contextPaths,
    maxTurns: QUESTHUB_AGENT_MAX_TURNS,
    output: result.finalOutput ?? '',
  }
}
