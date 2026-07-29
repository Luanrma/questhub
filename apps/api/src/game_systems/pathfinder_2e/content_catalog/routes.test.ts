import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

test('PF2e content catalog route registrar stays inside the game-system boundary', () => {
  const source = readFileSync(
    path.join(
      process.cwd(),
      'apps',
      'api',
      'src',
      'game_systems',
      'pathfinder_2e',
      'content_catalog',
      'routes.ts',
    ),
    'utf8',
  )

  assert.match(source, /export function registerPathfinder2eContentCatalogRoutes/)
  assert.doesNotMatch(source, /from ['"][^'"]*modules\//)
  assert.doesNotMatch(source, /from ['"][^'"]*vtt\//)
})
