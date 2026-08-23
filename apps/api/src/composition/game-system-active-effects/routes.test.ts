import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import type { registerGameSystemActiveEffectCompositionRoutes } from './routes'

type CompositionRouteRegistration = typeof registerGameSystemActiveEffectCompositionRoutes

const routeFile = path.join(
  process.cwd(),
  'apps',
  'api',
  'src',
  'composition',
  'game-system-active-effects',
  'routes.ts',
)

test('game-system active-effect composition route stays in the TypeScript contract without booting auth runtime', () => {
  const isRegistrationFunction: CompositionRouteRegistration extends (...args: any[]) => unknown
    ? true
    : false = true
  assert.equal(isRegistrationFunction, true)
})

test('composition delegates semantic resolution to PF2e and persistence to generic CampaignActorEffect Core', () => {
  const source = readFileSync(routeFile, 'utf8')

  assert.match(source, /resolvePathfinder2eEffectApplication/)
  assert.match(source, /createActorEffect/)
  assert.match(source, /vtt:actor-effects:changed/)
  assert.match(source, /role: 'MASTER'/)
  assert.match(source, /archivedAt: null/)
})

test('manual definition discovery uses the canonical query contract and the effective user locale', () => {
  const source = readFileSync(routeFile, 'utf8')

  assert.match(source, /listPathfinder2eActiveEffectDefinitionViews/)
  assert.match(source, /resolvePathfinder2eContentLocale/)
  assert.match(source, /locale,/)
  assert.match(source, /conditionValue\?\.isValued/)
  assert.doesNotMatch(source, /searchPathfinder2eEffectDefinitions/)
})

test('canonical effect presentation derives locale from campaign user settings with pt-BR default and explicit override support', () => {
  const source = readFileSync(routeFile, 'utf8')

  assert.match(source, /campaignUserSettings\.findUnique/)
  assert.match(source, /settings\.pathfinder2e/)
  assert.match(source, /pathfinder2e\.contentLocale === 'en-US' \? 'en-US' : 'pt-BR'/)
  assert.match(source, /if \(override\) return override/)
  assert.match(source, /definitionDetailQuerySchema = z\.object\(\{[\s\S]*locale: localeSchema\.optional\(\)/)
  assert.match(source, /definitionPresentationsQuerySchema = z\.object\(\{[\s\S]*locale: localeSchema\.optional\(\)/)
})

test('batch canonical presentations use one effective locale for every requested definition key', () => {
  const source = readFileSync(routeFile, 'utf8')
  const presentationsStart = source.indexOf("app.get('/api/campaigns/:campaignId/game-system-effects/presentations'")
  const detailStart = source.indexOf("app.get('/api/campaigns/:campaignId/game-system-effects/definitions/:definitionKey'", presentationsStart)
  assert.ok(presentationsStart >= 0 && detailStart > presentationsStart)

  const route = source.slice(presentationsStart, detailStart)
  assert.match(route, /const locale = await resolvePathfinder2eContentLocale/)
  assert.match(route, /getPathfinder2eActiveEffectDefinitionView\(definitionKey, locale\)/)
  assert.match(route, /locale,[\s\S]*presentations,/)
})

test('canonical effect detail is exposed through a read-only campaign composition seam', () => {
  const source = readFileSync(routeFile, 'utf8')

  assert.match(
    source,
    /app\.get\('\/api\/campaigns\/:campaignId\/game-system-effects\/definitions\/:definitionKey'/,
  )
  assert.match(source, /definitionDetailQuerySchema/)
  assert.match(source, /z\.enum\(\['pt-BR', 'en-US'\]\)/)
  assert.match(source, /findAccessibleCampaign/)
  assert.match(source, /getPathfinder2eActiveEffectDefinitionView/)
  assert.match(source, /definitionPresentation\(definition\)/)
})

test('canonical effect detail presentation contains no mutation or actor target contract', () => {
  const source = readFileSync(routeFile, 'utf8')
  const detailStart = source.indexOf("app.get('/api/campaigns/:campaignId/game-system-effects/definitions/:definitionKey'")
  const candidateStart = source.indexOf("app.get('/api/campaigns/:campaignId/game-system-effects/candidates'", detailStart)
  assert.ok(detailStart >= 0 && candidateStart > detailStart)

  const detailRoute = source.slice(detailStart, candidateStart)
  assert.doesNotMatch(detailRoute, /createActorEffect|publishActorEffectsChanged|findMasterCampaign|actorId/)
  assert.doesNotMatch(detailRoute, /app\.(?:post|patch|delete)\(/)
})

test('composition never mutates mechanical sheet or token state', () => {
  const source = readFileSync(routeFile, 'utf8')
  assert.doesNotMatch(source, /hitPoints|armorClass|savingThrows|spellSlots|campaignToken\.(?:update|delete|create)/)
})
