import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const webRoot = path.join(root, 'apps', 'web', 'src')
const panelFile = path.join(webRoot, 'vtt', 'actor-effects', 'ActorActiveEffectsPanel.tsx')
const hookFile = path.join(webRoot, 'vtt', 'actor-effects', 'useActorActiveEffects.ts')
const contextHookFile = path.join(webRoot, 'vtt', 'actor-effects', 'useCharacterSheetActorContext.ts')
const typesFile = path.join(webRoot, 'vtt', 'actor-effects', 'types.ts')
const workspaceFile = path.join(webRoot, 'game-systems', 'CampaignCharacterSheetWorkspace.tsx')
const renderersFile = path.join(webRoot, 'game-systems', 'character-sheet-renderers.tsx')
const asideFile = path.join(webRoot, 'components', 'Aside.tsx')

function read(file: string) {
  return readFileSync(file, 'utf8')
}

test('full character sheets mount the generic actor effects panel outside the renderer scroll area', () => {
  const source = read(workspaceFile)
  const panelIndex = source.indexOf('<ActorActiveEffectsPanel')
  const rendererScrollIndex = source.indexOf('data-sheet-active-page')

  assert.match(source, /useCharacterSheetActorContext\([\s\S]*state\.presentation === 'FULL'/)
  assert.match(source, /state\.presentation === 'FULL' && actorId/)
  assert.ok(panelIndex >= 0 && rendererScrollIndex >= 0 && panelIndex < rendererScrollIndex)
  assert.match(source, /canManage=\{role === 'MASTER'\}/)
  assert.match(source, /resolvePresentation=\{resolveActorEffectPresentation\}/)
})

test('campaign role reaches the sheet workspace only to drive visual mutation controls', () => {
  const source = read(asideFile)

  assert.match(source, /<CampaignCharacterSheetWorkspace[\s\S]*role=\{role\}/)
})

test('active effect summary is compact, capped at six and has no horizontal scroller', () => {
  const source = read(panelFile)

  assert.match(source, /effects\.slice\(0, 6\)/)
  assert.match(source, /\+\{hiddenCount\} Ver todos/)
  assert.match(source, /flex-wrap/)
  assert.doesNotMatch(source, /overflow-x-(?:auto|scroll)/)
  assert.match(source, /Nenhum efeito ativo/)
  assert.match(source, /Tentar novamente/)
})

test('manual create and update bodies expose only presentation fields approved by QH-EFF-002', () => {
  const source = read(panelFile)
  const bodyMatch = source.match(/const body = \{([\s\S]*?)\n    \}/)

  assert.ok(bodyMatch, 'manual effect mutation body must exist')
  const body = bodyMatch[1]
  assert.match(body, /name:/)
  assert.match(body, /description:/)
  assert.match(body, /iconUrl:/)
  assert.match(body, /polarity:/)
  assert.match(body, /category:/)
  assert.match(body, /displayValue:/)
  assert.doesNotMatch(body, /namespace|definitionKey|schemaVersion|payload|origin/)
  assert.match(source, /window\.confirm/)
  assert.match(source, /method: 'DELETE'/)
})

test('actor effect realtime refresh filters campaign and actor and never polls', () => {
  const source = read(hookFile)

  assert.match(source, /'vtt:actor-effects:changed'/)
  assert.match(source, /payload\.campaignId !== activeCampaignId \|\| payload\.actorId !== activeActorId/)
  assert.match(source, /socket\?\.on\('connect', refresh\)/)
  assert.doesNotMatch(source, /setInterval|setTimeout/)
})

test('sheet actor context is resolved by Core and not by a concrete game-system renderer', () => {
  const contextSource = read(contextHookFile)
  const rendererSource = read(renderersFile)

  assert.match(contextSource, /character-sheets\/\$\{encodeURIComponent\(sheetId\)\}\/context/)
  assert.match(rendererSource, /resolveActorEffectPresentation\?: ActorEffectPresentationResolver/)
  assert.doesNotMatch(rendererSource, /onActorResolved/)
})

test('generic actor effects UI contains no concrete game-system semantics', () => {
  const source = [read(panelFile), read(hookFile), read(contextHookFile), read(typesFile)].join('\n')

  assert.doesNotMatch(source, /PATHFINDER|PF2E|Frightened|\bCondition\b|\bSpell\b/)
})

test('raw opaque payload and origin are never rendered as user-facing JSON', () => {
  const source = read(panelFile)

  assert.doesNotMatch(source, /JSON\.stringify\((?:effect\.)?(?:payload|origin)/)
  assert.doesNotMatch(source, /<pre[^>]*>[\s\S]*(?:payload|origin)/)
  assert.match(source, /questhub:manual-effects:v1/)
  assert.match(source, /'Manual'/)
})
