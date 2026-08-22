import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const webRoot = path.join(root, 'apps', 'web', 'src')
const panelFile = path.join(webRoot, 'vtt', 'actor-effects', 'ActorActiveEffectsPanel.tsx')
const hookFile = path.join(webRoot, 'vtt', 'actor-effects', 'useActorActiveEffects.ts')
const tokenEffectHookFile = path.join(webRoot, 'vtt', 'actor-effects', 'useTokenActiveEffects.ts')
const localInvalidationFile = path.join(webRoot, 'vtt', 'actor-effects', 'localInvalidation.ts')
const contextHookFile = path.join(webRoot, 'vtt', 'actor-effects', 'useCharacterSheetActorContext.ts')
const typesFile = path.join(webRoot, 'vtt', 'actor-effects', 'types.ts')
const tokenPresentationOverlayFile = path.join(webRoot, 'vtt', 'token-presentation', 'TokenPresentationOverlay.tsx')
const workspaceFile = path.join(webRoot, 'game-systems', 'CampaignCharacterSheetWorkspace.tsx')
const renderersFile = path.join(webRoot, 'game-systems', 'character-sheet-renderers.tsx')
const pf2eComposerFile = path.join(webRoot, 'game-systems', 'PathfinderActiveEffectComposer.tsx')
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

test('manual create and update bodies expose only generic presentation fields and never require an icon URL', () => {
  const source = read(panelFile)
  const bodyMatch = source.match(/const body = \{([\s\S]*?)\n    \}/)
  assert.ok(bodyMatch, 'manual effect mutation body must exist')
  const body = bodyMatch[1]
  assert.match(body, /name:/)
  assert.match(body, /description:/)
  assert.match(body, /polarity:/)
  assert.match(body, /category:/)
  assert.match(body, /displayValue:/)
  assert.doesNotMatch(body, /iconUrl|namespace|definitionKey|schemaVersion|payload|origin/)
  assert.doesNotMatch(source, /URL do ícone/)
  assert.match(source, /Ícone automático/)
  assert.match(source, /effect\.iconUrl/)
  assert.match(source, /window\.confirm/)
  assert.match(source, /method: 'DELETE'/)
})

test('successful manual mutations publish local invalidation as well as reloading the sheet panel', () => {
  const source = read(panelFile)
  const invalidation = read(localInvalidationFile)

  assert.match(source, /publishLocalActorEffectsChanged\(\{ campaignId, actorId \}\)/)
  assert.match(source, /function invalidateAfterMutation\(\)[\s\S]*publishLocalActorEffectsChanged[\s\S]*reload\(\)/)
  assert.ok((source.match(/invalidateAfterMutation\(\)/g) ?? []).length >= 3)
  assert.match(invalidation, /questhub:vtt:actor-effects:changed/)
  assert.match(invalidation, /window\.dispatchEvent\(new CustomEvent/)
  assert.match(invalidation, /campaignId: string/)
  assert.match(invalidation, /actorId: string/)
  assert.doesNotMatch(invalidation, /setInterval|setTimeout/)
})

test('mutation feedback is visible in effect detail and cleared with the overlay', () => {
  const source = read(panelFile)
  assert.match(source, /overlay\.kind === 'detail'[\s\S]*mutationError[\s\S]*canManage/)
  assert.match(source, /function closeOverlay\(\)[\s\S]*setMutationError\(null\)[\s\S]*setOverlay\(null\)/)
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

test('PF2e effect composer is registered in the game-system shell and mounted only for the Master', () => {
  const workspace = read(workspaceFile)
  const renderers = read(renderersFile)
  const composer = read(pf2eComposerFile)

  assert.match(renderers, /PATHFINDER_2E:[\s\S]*ActiveEffectComposer: PathfinderActiveEffectComposer/)
  assert.match(workspace, /role === 'MASTER' && ActiveEffectComposer/)
  assert.match(composer, /game-system-effects\/definitions/)
  assert.match(composer, /actors\/\$\{encodeURIComponent\(actorId\)\}\/game-system-effects/)
  assert.match(composer, /source: \{ type: 'MANUAL', definitionKey: selected\.definitionKey \}/)
})

test('token overlay composes generic actor effects separately from game-system token presentation', () => {
  const overlay = read(tokenPresentationOverlayFile)
  const tokenHook = read(tokenEffectHookFile)

  assert.match(overlay, /useTokenPresentation\(campaignId, tokenId\)/)
  assert.match(overlay, /useTokenActiveEffects\(campaignId, tokenId\)/)
  assert.match(tokenHook, /tokens\/\$\{encodeURIComponent\(activeTokenId\)\}\/actor-effects/)
  assert.doesNotMatch(tokenHook, /game-system-effects/)
})

test('active effects occupy the lane above the token while resources stay below it', () => {
  const overlay = read(tokenPresentationOverlayFile)

  assert.match(overlay, /style=\{\{ left: overlayLeft, top, width: overlayWidth, height: size \}\}/)
  assert.match(overlay, /absolute bottom-full[\s\S]*<ActiveEffectIndicators effects=\{effects\}/)
  assert.match(overlay, /absolute left-0 right-0 top-full mt-1 grid gap-1/)
})

test('token effect summary caps at three plus overflow and preserves all detail instances', () => {
  const overlay = read(tokenPresentationOverlayFile)

  assert.match(overlay, /effects\.slice\(0, 3\)/)
  assert.match(overlay, /\+\{hiddenCount\}/)
  assert.match(overlay, /effects\.map\(\(effect\) =>/)
  assert.match(overlay, /openDetail\(effect\)/)
  assert.match(overlay, /EffectDetailModal/)
  assert.match(overlay, /effect\.displayValue/)
  assert.match(overlay, /effect\.polarity/)
  assert.match(overlay, /effect\.description/)
  assert.match(overlay, /effect\.category/)
})

test('expanded token effects close on outside click and protect their internal pointer interactions', () => {
  const overlay = read(tokenPresentationOverlayFile)

  assert.match(overlay, /document\.addEventListener\('pointerdown', onOutsidePointerDown, true\)/)
  assert.match(overlay, /root\.contains\(event\.target as Node\)/)
  assert.match(overlay, /event\.stopPropagation\(\)[\s\S]*setOpen\(false\)/)
  assert.match(overlay, /onPointerDown=\{\(event\) => event\.stopPropagation\(\)\}/)
})

test('token effect detail is a dedicated read-only modal and never renders opaque fields', () => {
  const overlay = read(tokenPresentationOverlayFile)

  assert.match(overlay, /createPortal\(/)
  assert.match(overlay, /role="dialog"/)
  assert.match(overlay, /Detalhes do efeito/)
  assert.match(overlay, /Valor exibido/)
  assert.match(overlay, /Descrição/)
  assert.doesNotMatch(overlay, /effect\.(?:payload|origin|namespace|definitionKey)/)
  assert.doesNotMatch(overlay, /JSON\.stringify\([^)]*(?:payload|origin)/)
})

test('token actor-effect hook refreshes on socket, local invalidation, token changes and reconnect without polling', () => {
  const source = read(tokenEffectHookFile)

  assert.match(source, /'vtt:actor-effects:changed'/)
  assert.match(source, /subscribeLocalActorEffectsChanged\(onLocalEffectsChanged\)/)
  assert.match(source, /payload\.campaignId !== activeCampaignId/)
  assert.match(source, /payload\.actorId === state\.actorId/)
  assert.match(source, /'vtt:token:changed'/)
  assert.match(source, /payload\.token\.id !== activeTokenId/)
  assert.match(source, /socket\?\.on\('connect', refresh\)/)
  assert.doesNotMatch(source, /setInterval|setTimeout/)
  assert.doesNotMatch(source, /method:\s*'(?:POST|PATCH|DELETE)'/)
})

test('generic actor effects UI contains no concrete game-system semantics', () => {
  const source = [
    read(panelFile),
    read(hookFile),
    read(tokenEffectHookFile),
    read(localInvalidationFile),
    read(contextHookFile),
    read(typesFile),
    read(tokenPresentationOverlayFile),
  ].join('\n')
  assert.doesNotMatch(source, /PATHFINDER|PF2E|Frightened|\bCondition\b|\bSpell\b/)
})

test('raw opaque payload and origin are never rendered as user-facing JSON', () => {
  const source = read(panelFile)
  assert.doesNotMatch(source, /JSON\.stringify\((?:effect\.)?(?:payload|origin)/)
  assert.doesNotMatch(source, /<pre[^>]*>[\s\S]*(?:payload|origin)/)
  assert.match(source, /questhub:manual-effects:v1/)
  assert.match(source, /'Manual'/)
})
