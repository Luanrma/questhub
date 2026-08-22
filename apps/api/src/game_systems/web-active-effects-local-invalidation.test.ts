import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const webRoot = path.join(process.cwd(), 'apps', 'web', 'src', 'vtt', 'actor-effects')
const actorHook = readFileSync(path.join(webRoot, 'useActorActiveEffects.ts'), 'utf8')
const tokenHook = readFileSync(path.join(webRoot, 'useTokenActiveEffects.ts'), 'utf8')
const localInvalidation = readFileSync(path.join(webRoot, 'localInvalidation.ts'), 'utf8')

test('QH-EFF-014 same-tab invalidation refreshes both sheet and Token through the generic actor-effect event', () => {
  assert.match(localInvalidation, /questhub:vtt:actor-effects:changed/)

  assert.match(actorHook, /subscribeLocalActorEffectsChanged\(onLocalEffectsChanged\)/)
  assert.match(actorHook, /payload\.campaignId === activeCampaignId && payload\.actorId === activeActorId/)
  assert.match(actorHook, /unsubscribeLocal\(\)/)

  assert.match(tokenHook, /subscribeLocalActorEffectsChanged\(onLocalEffectsChanged\)/)
  assert.match(tokenHook, /payload\.campaignId !== activeCampaignId/)
  assert.match(tokenHook, /payload\.actorId === state\.actorId/)

  assert.doesNotMatch(actorHook, /setInterval|setTimeout/)
  assert.doesNotMatch(tokenHook, /setInterval|setTimeout/)
})
