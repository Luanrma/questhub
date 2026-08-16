import assert from 'node:assert/strict'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { loadAgentInstructions } from './context-loader'

async function createFixtureRepo() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'questhub-agents-'))
  const files: Record<string, string> = {
    'AGENTS.md': 'router',
    'docs/PROJECT_CONSTITUTION.md': 'constitution',
    'docs/governance/SOURCE_OF_TRUTH.md': 'source of truth',
    'docs/ARCHITECTURE.md': 'architecture',
    '.ai/agents/ba.md': 'ba role',
    'docs/features/example/spec.md': 'feature spec',
  }

  for (const [relativePath, content] of Object.entries(files)) {
    const absolutePath = path.join(root, relativePath)
    await mkdir(path.dirname(absolutePath), { recursive: true })
    await writeFile(absolutePath, content, 'utf8')
  }

  return root
}

test('loads governed context and explicit documentation', async (t) => {
  const root = await createFixtureRepo()
  t.after(() => rm(root, { recursive: true, force: true }))

  const result = await loadAgentInstructions({
    role: 'ba',
    repoRoot: root,
    additionalContextPaths: ['docs/features/example/spec.md'],
  })

  assert.deepEqual(result.contextPaths, [
    'AGENTS.md',
    'docs/PROJECT_CONSTITUTION.md',
    'docs/governance/SOURCE_OF_TRUTH.md',
    'docs/ARCHITECTURE.md',
    '.ai/agents/ba.md',
    'docs/features/example/spec.md',
  ])
  assert.match(result.instructions, /constitution/)
  assert.match(result.instructions, /ba role/)
  assert.match(result.instructions, /feature spec/)
})

test('rejects additional context outside docs or .ai', async (t) => {
  const root = await createFixtureRepo()
  t.after(() => rm(root, { recursive: true, force: true }))
  await writeFile(path.join(root, '.env'), 'OPENAI_API_KEY=secret', 'utf8')

  await assert.rejects(
    () => loadAgentInstructions({
      role: 'ba',
      repoRoot: root,
      additionalContextPaths: ['.env'],
    }),
    /Context path is not allowed/,
  )
})

test('rejects path traversal', async (t) => {
  const root = await createFixtureRepo()
  t.after(() => rm(root, { recursive: true, force: true }))

  await assert.rejects(
    () => loadAgentInstructions({
      role: 'ba',
      repoRoot: root,
      additionalContextPaths: ['docs/../../outside.md'],
    }),
    /Context path is not allowed|escapes repository root/,
  )
})
