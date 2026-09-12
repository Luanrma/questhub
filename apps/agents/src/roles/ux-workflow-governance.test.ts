import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const read = (path: string) => readFileSync(path, 'utf8')

test('governed workflow places conditional UX Review before Architecture Review', () => {
  const router = read('AGENTS.md')
  const workflow = read('docs/governance/AUTONOMOUS_WORKFLOW.md')
  const projectMap = read('docs/PROJECT_MAP.md')

  for (const source of [router, workflow, projectMap]) {
    assert.match(source, /UX REVIEW/)
    assert.match(source, /UX REVIEW[\s\S]*ARCHITECTURE REVIEW/)
  }
})

test('feature and pull request templates expose UX applicability', () => {
  const featureTemplate = read('docs/features/_TEMPLATE.md')
  const pullRequestTemplate = read('.github/pull_request_template.md')

  assert.match(featureTemplate, /UX review required: `YES \| NO`/)
  assert.match(featureTemplate, /UX REVIEW: `APPROVED \| N\/A \| BLOCKED`/)
  assert.match(pullRequestTemplate, /UX REVIEW ou N\/A/)
})
