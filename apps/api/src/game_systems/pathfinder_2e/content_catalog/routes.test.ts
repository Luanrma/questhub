import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

function routeSource() {
  return readFileSync(
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
}

test('PF2e content catalog route registrar stays inside the game-system boundary', () => {
  const source = routeSource()

  assert.match(source, /export function registerPathfinder2eContentCatalogRoutes/)
  assert.doesNotMatch(source, /from ['"][^'"]*modules\//)
  assert.doesNotMatch(source, /from ['"][^'"]*vtt\//)
})

test('QH-EFF-013 exposes read-only list and exact-definition routes for PF2e Active Effects', () => {
  const source = routeSource()

  assert.match(source, /app\.get\('\/api\/game-systems\/pathfinder-2e\/content\/active-effects'/)
  assert.match(source, /app\.get\('\/api\/game-systems\/pathfinder-2e\/content\/active-effects\/:definitionKey'/)
  assert.match(source, /listPathfinder2eActiveEffectDefinitionViews/)
  assert.match(source, /getPathfinder2eActiveEffectDefinitionView/)
  assert.doesNotMatch(
    source,
    /app\.(?:post|put|patch|delete)\('\/api\/game-systems\/pathfinder-2e\/content\/active-effects/,
  )
})

test('QH-EFF-015 exposes structural references through a read-only PF2e route', () => {
  const source = routeSource()

  assert.match(
    source,
    /app\.get\('\/api\/game-systems\/pathfinder-2e\/content\/active-effect-references\/:contentId'/,
  )
  assert.match(source, /getPathfinder2eActiveEffectReferences/)
  assert.doesNotMatch(
    source,
    /app\.(?:post|put|patch|delete)\('\/api\/game-systems\/pathfinder-2e\/content\/active-effect-references/,
  )
})
