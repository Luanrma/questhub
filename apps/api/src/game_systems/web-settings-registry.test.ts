import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const registryFile = path.join(
  root,
  'apps',
  'web',
  'src',
  'game-systems',
  'settings-panels.tsx',
)
const genericCampaignSettingsFile = path.join(
  root,
  'apps',
  'web',
  'src',
  'features',
  'campaigns',
  'pages',
  'CampaignSettingsPage.tsx',
)
const genericCampaignRoutesFile = path.join(
  root,
  'apps',
  'api',
  'src',
  'modules',
  'campaigns',
  'routes.ts',
)
const pathfinderSettingsStorageFile = path.join(
  root,
  'apps',
  'web',
  'src',
  'features',
  'pathfinder-2e',
  'character-sheet',
  'infrastructure',
  'pathfinder2eDisplaySettingsStorage.ts',
)

test('game system settings panels are selected by GameSystemKey in the composition shell', () => {
  const source = readFileSync(registryFile, 'utf8')

  assert.match(source, /Partial\s*<\s*Record\s*<\s*GameSystemKey\s*,/)
  assert.match(source, /settingsPanels\s*\[\s*gameSystem\s*\]/)
  assert.match(source, /\/game-system/)
})

test('generic campaign settings page does not name or import Pathfinder', () => {
  const source = readFileSync(genericCampaignSettingsFile, 'utf8')

  assert.match(source, /GameSystemSettingsPanels/)
  assert.doesNotMatch(source, /pathfinder(?:-2e|2e)|PATHFINDER_2E/i)
})

test('generic campaign routes do not interpret Pathfinder user settings', () => {
  const source = readFileSync(genericCampaignRoutesFile, 'utf8')

  assert.doesNotMatch(source, /pathfinder2e/i)
  assert.doesNotMatch(source, /contentLocale/)
})

test('Pathfinder owns the content locale fallback', () => {
  const source = readFileSync(pathfinderSettingsStorageFile, 'utf8')

  assert.match(source, /value\.contentLocale\s*===\s*'en-US'\s*\?\s*'en-US'\s*:\s*'pt-BR'/)
})
