import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { registerGameSystemActiveEffectCompositionRoutes } from './routes'

test('game-system active-effect composition route is loadable and registered outside bounded contexts', () => {
  assert.equal(typeof registerGameSystemActiveEffectCompositionRoutes, 'function')
})

test('composition delegates semantic resolution to PF2e and persistence to generic CampaignActorEffect Core', () => {
  const source = readFileSync(new URL('./routes.ts', import.meta.url), 'utf8')

  assert.match(source, /resolvePathfinder2eEffectApplication/)
  assert.match(source, /createActorEffect/)
  assert.match(source, /vtt:actor-effects:changed/)
  assert.match(source, /role: 'MASTER'/)
  assert.match(source, /archivedAt: null/)
})

test('composition never mutates mechanical sheet or token state', () => {
  const source = readFileSync(new URL('./routes.ts', import.meta.url), 'utf8')
  assert.doesNotMatch(source, /hitPoints|armorClass|savingThrows|spellSlots|campaignToken\.(?:update|delete|create)/)
})
