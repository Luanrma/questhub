import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const moduleRoot = path.join(root, 'apps', 'api', 'src', 'modules', 'campaign_actor_effects')
const routesFile = path.join(moduleRoot, 'routes.ts')
const serviceFile = path.join(moduleRoot, 'service.ts')
const serverFile = path.join(root, 'apps', 'api', 'src', 'server.ts')

function read(file: string) {
  return readFileSync(file, 'utf8')
}

test('active effect API exposes the approved actor-scoped CRUD routes', () => {
  const source = read(routesFile)

  assert.match(source, /app\.get\('\/api\/campaigns\/:campaignId\/actors\/:actorId\/effects'/)
  assert.match(source, /app\.post\('\/api\/campaigns\/:campaignId\/actors\/:actorId\/effects'/)
  assert.match(source, /app\.patch\('\/api\/campaigns\/:campaignId\/actors\/:actorId\/effects\/:effectId'/)
  assert.match(source, /app\.delete\('\/api\/campaigns\/:campaignId\/actors\/:actorId\/effects\/:effectId'/)
})

test('actor access is campaign-scoped and excludes archived actors', () => {
  const source = read(routesFile)

  assert.match(source, /where:\s*\{[\s\S]*id: actorId,[\s\S]*campaignId,[\s\S]*archivedAt: null/)
  assert.match(source, /status: 'ACTIVE'/)
  assert.match(source, /canReadActorEffects/)
  assert.match(source, /canMutateActorEffects/)
})

test('manual HTTP creation fixes namespace and origin on the backend', () => {
  const source = read(routesFile)
  const service = read(serviceFile)

  assert.match(service, /MANUAL_ACTOR_EFFECT_NAMESPACE = 'questhub:manual-effects:v1'/)
  assert.match(service, /MANUAL_ACTOR_EFFECT_ORIGIN = \{ type: 'MANUAL' \}/)
  assert.match(source, /namespace: MANUAL_ACTOR_EFFECT_NAMESPACE/)
  assert.match(source, /definitionKey: null/)
  assert.match(source, /payload: null/)
  assert.match(source, /origin: MANUAL_ACTOR_EFFECT_ORIGIN/)
  assert.doesNotMatch(source, /body\.data\.(?:namespace|definitionKey|schemaVersion|payload|origin)/)
})

test('effect identity and opaque game-system state stay immutable through PATCH', () => {
  const source = read(serviceFile)
  const updateTypeStart = source.indexOf('export type UpdateActorEffectPresentationInput')
  const updateFunctionStart = source.indexOf('export async function updateActorEffectPresentation')
  const updateType = source.slice(updateTypeStart, updateFunctionStart)

  assert.doesNotMatch(updateType, /actorId|namespace|definitionKey|schemaVersion|payload|origin/)
  assert.match(updateType, /name\?: string/)
  assert.match(updateType, /polarity\?: CampaignActorEffectPolarity/)
  assert.match(updateType, /displayValue\?: string \| null/)
})

test('effect mutation publishes one generic campaign invalidation contract', () => {
  const source = read(routesFile)

  assert.match(source, /'vtt:actor-effects:changed'/)
  assert.match(source, /campaignRoom\(campaignId\)/)
  assert.match(source, /campaignId,[\s\S]*actorId,/)
  assert.equal(
    [...source.matchAll(/publishActorEffectsChanged\(io,/g)].length,
    3,
    'POST, PATCH and DELETE must each publish invalidation',
  )
})

test('active effect service is generic and does not create removal history', () => {
  const source = read(serviceFile)
  const routes = read(routesFile)

  assert.doesNotMatch(source, /game_systems|PATHFINDER|PF2E|Frightened|Spell/i)
  assert.doesNotMatch(routes, /game_systems|PATHFINDER|PF2E|Frightened|Spell/i)
  assert.doesNotMatch(source, /removedAt|endedAt|deletedAt/)
  assert.match(source, /prisma\.campaignActorEffect\.delete/)
})

test('VTT server registers actor effect routes with realtime transport', () => {
  const source = read(serverFile)

  assert.match(source, /registerCampaignActorEffectRoutes/)
  assert.match(source, /registerCampaignActorEffectRoutes\(app, presence\.io\)/)
})
