import { parseAgentRole, type AgentRole } from '../roles/role-registry'

export type AgentRunRequest = {
  role: AgentRole
  input: string
  contextPaths: string[]
}

export function normalizeAgentRunRequest(input: {
  role: string
  input: string
  contextPaths?: readonly string[]
}): AgentRunRequest {
  const role = parseAgentRole(input.role.trim())
  const task = input.input.trim()

  if (!task) throw new Error('Agent input cannot be empty')

  return {
    role,
    input: task,
    contextPaths: [...(input.contextPaths ?? [])],
  }
}

export function requireOpenAiApiKey(env: NodeJS.ProcessEnv = process.env) {
  const key = env.OPENAI_API_KEY?.trim()
  if (!key) throw new Error('OPENAI_API_KEY is required to execute an Agent')
  return key
}
