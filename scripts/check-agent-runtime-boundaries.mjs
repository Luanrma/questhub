import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const agentsRoot = path.join(root, 'apps', 'agents')
const productRoots = [
  path.join(root, 'apps', 'api', 'src'),
  path.join(root, 'apps', 'web', 'src'),
]

function collectFiles(directory, extensions = ['.ts', '.tsx', '.js', '.mjs']) {
  if (!existsSync(directory)) return []
  return readdirSync(directory).flatMap((entry) => {
    const entryPath = path.join(directory, entry)
    if (statSync(entryPath).isDirectory()) return collectFiles(entryPath, extensions)
    return extensions.some((extension) => entry.endsWith(extension)) ? [entryPath] : []
  })
}

function relativeImports(sourceFile) {
  const source = readFileSync(sourceFile, 'utf8')
  const pattern = /(?:from\s+|import\s*(?:\(\s*)?)["']([^"']+)["']/g
  return [...source.matchAll(pattern)]
    .map((match) => match[1])
    .filter((specifier) => specifier?.startsWith('.'))
}

function entersRoot(sourceFile, specifier, targetRoot) {
  const resolved = path.resolve(path.dirname(sourceFile), specifier)
  const relative = path.relative(targetRoot, resolved)
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative))
}

const violations = []

for (const productRoot of productRoots) {
  for (const sourceFile of collectFiles(productRoot)) {
    for (const specifier of relativeImports(sourceFile)) {
      if (entersRoot(sourceFile, specifier, agentsRoot)) {
        violations.push(
          `Product runtime imports development agent tooling: ${path.relative(root, sourceFile)} -> ${specifier}`,
        )
      }
    }
  }
}

const createAgentFile = path.join(agentsRoot, 'src', 'runtime', 'create-agent.ts')
if (existsSync(createAgentFile)) {
  const source = readFileSync(createAgentFile, 'utf8')
  if (/\btools\s*:/.test(source)) {
    violations.push('QH-AI-001 Agent must not receive tools')
  }
  if (/\bhandoffs\s*:/.test(source)) {
    violations.push('QH-AI-001 Agent must not receive handoffs')
  }
}

for (const sourceFile of collectFiles(path.join(agentsRoot, 'src')).filter((file) => !file.endsWith('.test.ts'))) {
  const source = readFileSync(sourceFile, 'utf8')
  if (/node:child_process|\bexecSync\b|\bspawnSync\b/.test(source)) {
    violations.push(`Agent runtime cannot execute shell commands: ${path.relative(root, sourceFile)}`)
  }
  if (/@octokit|trello/i.test(source)) {
    violations.push(`Agent runtime cannot include GitHub/Trello write integrations yet: ${path.relative(root, sourceFile)}`)
  }
}

const runAgentFile = path.join(agentsRoot, 'src', 'runtime', 'run-agent.ts')
if (existsSync(runAgentFile)) {
  const source = readFileSync(runAgentFile, 'utf8')
  if (!/maxTurns:\s*QUESTHUB_AGENT_MAX_TURNS/.test(source)) {
    violations.push('Agent runtime must use an explicit maxTurns limit')
  }
  if (!/traceIncludeSensitiveData:\s*false/.test(source)) {
    violations.push('Agent runtime tracing must exclude sensitive context payloads')
  }
}

if (violations.length > 0) {
  console.error('Agent runtime boundary violations found:\n')
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log('Agent runtime boundaries are valid.')
