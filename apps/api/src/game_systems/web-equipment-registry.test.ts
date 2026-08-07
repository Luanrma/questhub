import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const registryFile = path.join(
  process.cwd(),
  'apps',
  'web',
  'src',
  'game-systems',
  'equipment-renderers.tsx',
)

test('equipment renderers are selected by the campaign GameSystemKey', () => {
  const source = readFileSync(registryFile, 'utf8')

  assert.match(source, /Partial\s*<\s*Record\s*<\s*GameSystemKey\s*,/)
  assert.match(source, /equipmentRenderers\s*\[\s*gameSystem\s*\]/)
  assert.doesNotMatch(source, /const\s+equipmentRenderers\s*=\s*\[/)
})

test('the generic equipment bridge resolves the campaign system before mounting a renderer', () => {
  const source = readFileSync(registryFile, 'utf8')

  assert.match(source, /\/inventory\/system/)
  assert.match(source, /if\s*\(!gameSystem\)\s*return null/)
})
