import { pathToFileURL } from 'node:url'
import { runQuestHubAgent } from './runtime/run-agent'

export type AgentCliArgs = {
  role: string
  input: string
  contextPaths: string[]
}

export function parseAgentCliArgs(argv: readonly string[]): AgentCliArgs {
  let role = ''
  let input = ''
  const contextPaths: string[] = []

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    const value = argv[index + 1]

    if (arg === '--role') {
      if (!value) throw new Error('--role requires a value')
      role = value
      index += 1
      continue
    }

    if (arg === '--input') {
      if (!value) throw new Error('--input requires a value')
      input = value
      index += 1
      continue
    }

    if (arg === '--context') {
      if (!value) throw new Error('--context requires a path')
      contextPaths.push(value)
      index += 1
      continue
    }

    throw new Error(`Unknown argument: ${arg}`)
  }

  if (!role) throw new Error('--role is required')
  if (!input.trim()) throw new Error('--input is required')

  return { role, input, contextPaths }
}

async function main() {
  try {
    const args = parseAgentCliArgs(process.argv.slice(2))
    const result = await runQuestHubAgent(args)
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error(`QuestHub Agent runtime error: ${message}`)
    process.exitCode = 1
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  void main()
}
