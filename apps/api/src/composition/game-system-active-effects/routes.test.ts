import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { registerGameSystemActiveEffectCompositionRoutes } from './routes'

const routeFile = path.join(
  process.cwd(),
  'apps',
  'api',
  'src',
  'composition',
  'game-system-active-effects',
  'routes.ts',
)

test('game-system active-effect composition route is loadable and registered outside bounded contexts', () => {
  assert.equal(typeof registerGameSystemActiveEffectCompositionRoutes, 'function')
})

test('composition delegates semantic resolution to PF2e and persistence to generic CampaignActorEffect Core', () => {
  const source = readFileSync(routeFile, 'utf8')

  assert.match(source, /resolvePathfinder2eEffectApplication/)
  assert.match(source, /createActorEffect/)
  assert.match(source, /vtt:actor-effects:changed/)
  assert.match(source, /role: 'MASTER'/)
  assert.match(source, /archivedAt: null/)
})

test('composition never mutates mechanical sheet or token state', () => {
  const source = readFileSync(routeFile, 'utf8')
  assert.doesNotMatch(source, /hitPoints|armorClass|savingThrows|spellSlots|campaignToken\.(?:update|delete|create)/)
})
