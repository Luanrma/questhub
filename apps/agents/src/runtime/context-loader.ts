import { readFile, realpath } from 'node:fs/promises'
import path from 'node:path'
import { AGENT_ROLE_REGISTRY, type AgentRole } from '../roles/role-registry'

export const GLOBAL_AGENT_CONTEXT_PATHS = [
  'AGENTS.md',
  'docs/PROJECT_CONSTITUTION.md',
  'docs/governance/SOURCE_OF_TRUTH.md',
  'docs/ARCHITECTURE.md',
] as const

type LoadAgentContextOptions = {
  role: AgentRole
  repoRoot?: string
  additionalContextPaths?: readonly string[]
}

function toPosixPath(value: string) {
  return value.split(path.sep).join('/')
}

function assertAllowedAdditionalContext(relativePath: string) {
  const normalized = toPosixPath(path.normalize(relativePath)).replace(/^\.\//, '')
  const allowedRoot = normalized.startsWith('docs/') || normalized.startsWith('.ai/')
  const sensitive = normalized.startsWith('.env')
    || normalized.includes('/.env')
    || normalized.startsWith('.git/')
    || normalized.startsWith('node_modules/')

  if (!allowedRoot || sensitive || !normalized.endsWith('.md')) {
    throw new Error(
      `Context path is not allowed: ${relativePath}. Only Markdown under docs/ or .ai/ is allowed.`,
    )
  }

  return normalized
}

async function resolveRepositoryFile(
  repoRoot: string,
  relativePath: string,
  options: { additional: boolean },
) {
  const normalized = options.additional
    ? assertAllowedAdditionalContext(relativePath)
    : toPosixPath(path.normalize(relativePath)).replace(/^\.\//, '')

  const realRepoRoot = await realpath(repoRoot)
  const requestedPath = path.resolve(realRepoRoot, normalized)
  const realRequestedPath = await realpath(requestedPath).catch(() => {
    throw new Error(`Context file not found: ${relativePath}`)
  })
  const relation = path.relative(realRepoRoot, realRequestedPath)

  if (relation.startsWith('..') || path.isAbsolute(relation)) {
    throw new Error(`Context path escapes repository root: ${relativePath}`)
  }

  return {
    relativePath: toPosixPath(path.relative(realRepoRoot, realRequestedPath)),
    absolutePath: realRequestedPath,
  }
}

export async function loadAgentInstructions({
  role,
  repoRoot = process.cwd(),
  additionalContextPaths = [],
}: LoadAgentContextOptions) {
  const descriptor = AGENT_ROLE_REGISTRY[role]
  const requiredPaths = [
    ...GLOBAL_AGENT_CONTEXT_PATHS,
    descriptor.instructionPath,
  ]

  const resolvedRequired = await Promise.all(
    requiredPaths.map((relativePath) => resolveRepositoryFile(repoRoot, relativePath, { additional: false })),
  )
  const resolvedAdditional = await Promise.all(
    additionalContextPaths.map((relativePath) => resolveRepositoryFile(repoRoot, relativePath, { additional: true })),
  )

  const unique = new Map<string, { relativePath: string; absolutePath: string }>()
  for (const entry of [...resolvedRequired, ...resolvedAdditional]) {
    unique.set(entry.absolutePath, entry)
  }

  const sections = await Promise.all(
    [...unique.values()].map(async (entry) => ({
      path: entry.relativePath,
      content: await readFile(entry.absolutePath, 'utf8'),
    })),
  )

  const instructions = sections
    .map((section) => `\n--- QUESTHUB CONTEXT: ${section.path} ---\n${section.content.trim()}\n`)
    .join('\n')

  return {
    instructions: [
      'You are running inside the QuestHub governed agent runtime.',
      'Treat the following repository documents as your supplied working context and obey their authority order.',
      instructions,
    ].join('\n\n'),
    contextPaths: sections.map((section) => section.path),
  }
}
