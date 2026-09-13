import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { AGENT_ROLES } from '../roles/role-registry'
import { loadAgentInstructions } from './context-loader'

const base = 'docs/skills/impeccable'
const skillPaths = ['SKILL.md', 'reference/operate.md', 'reference/craft-floor.md', 'reference/critique.md']

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'questhub-impeccable-'))
  for (const entry of ['AGENTS.md', '.ai', 'docs']) {
    await cp(entry, path.join(root, entry), { recursive: true })
  }
  return root
}

test('UX gets the complete pinned skill content, without duplication from explicit context', async () => {
  const result = await loadAgentInstructions({
    role: 'ux-specialist', additionalContextPaths: [`${base}/SKILL.md`],
  })
  assert.equal(result.contextPaths.length, 9)
  for (const file of skillPaths) {
    const content = (await readFile(`${base}/${file}`, 'utf8')).trim()
    assert.equal(result.contextPaths.filter((p) => p === `${base}/${file}`).length, 1)
    assert.equal(result.instructions.split(content).length, 2)
  }
})

test('each missing mandatory skill file rejects UX loading but leaves other roles usable', async (t) => {
  const root = await fixture()
  t.after(() => rm(root, { recursive: true, force: true }))
  for (const file of skillPaths) {
    const target = path.join(root, base, file)
    const content = await readFile(target)
    await rm(target)
    await assert.rejects(() => loadAgentInstructions({ role: 'ux-specialist', repoRoot: root }), /Context file not found/)
    await writeFile(target, content)
  }
  await rm(path.join(root, base), { recursive: true })
  for (const role of AGENT_ROLES.filter((r) => r !== 'ux-specialist')) {
    const result = await loadAgentInstructions({ role, repoRoot: root })
    assert.equal(result.contextPaths.length, 5)
    assert.equal(result.contextPaths.at(-1), `.ai/agents/${role}.md`)
  }
})

test('mandatory skill symlink cannot read a file outside the repository', async (t) => {
  const root = await fixture()
  const outside = await mkdtemp(path.join(os.tmpdir(), 'questhub-outside-'))
  t.after(() => Promise.all([rm(root, { recursive: true, force: true }), rm(outside, { recursive: true, force: true })]))
  const externalFile = path.join(outside, 'external.md')
  await writeFile(externalFile, 'not repository context')
  await rm(path.join(root, base, 'SKILL.md'))
  await symlink(externalFile, path.join(root, base, 'SKILL.md'))
  await assert.rejects(() => loadAgentInstructions({ role: 'ux-specialist', repoRoot: root }), /escapes repository root/)
})

test('vendored source and license bytes match recorded provenance', async () => {
  const manifest = JSON.parse(await readFile(`${base}/provenance.json`, 'utf8')) as { files: Record<string, { sha256: string }> }
  for (const [file, record] of Object.entries(manifest.files)) {
    const content = await readFile(path.join(base, file))
    assert.equal(createHash('sha256').update(content).digest('hex'), record.sha256, file)
  }
})
