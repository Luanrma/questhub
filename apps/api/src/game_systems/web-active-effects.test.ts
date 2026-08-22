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
const presentationTextFile = path.join(webRoot, 'vtt', 'actor-effects', 'presentationText.ts')
const sharedDefinitionModalFile = path.join(webRoot, 'vtt', 'actor-effects', 'ActiveEffectDefinitionModal.tsx')
const campaignDefinitionModalFile = path.join(webRoot, 'vtt', 'actor-effects', 'CampaignActiveEffectDefinitionModal.tsx')
const contextHookFile = path.join(webRoot, 'vtt', 'actor-effects', 'useCharacterSheetActorContext.ts')
const typesFile = path.join(webRoot, 'vtt', 'actor-effects', 'types.ts')
const tokenPresentationOverlayFile = path.join(webRoot, 'vtt', 'token-presentation', 'TokenPresentationOverlay.tsx')
const boardOverlaysFile = path.join(webRoot, 'vtt', 'table', 'components', 'BoardOverlays.tsx')
const workspaceFile = path.join(webRoot, 'game-systems', 'CampaignCharacterSheetWorkspace.tsx')
const renderersFile = path.join(webRoot, 'game-systems', 'character-sheet-renderers.tsx')
const pf2eComposerFile = path.join(webRoot, 'game-systems', 'PathfinderActiveEffectComposer.tsx')
const pf2eDefinitionModalFile = path.join(webRoot, 'game-systems', 'PathfinderActiveEffectDefinitionModal.tsx')
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

test('sheet management stays separate from the canonical read-only detail modal', () => {
  const source = read(panelFile)

  assert.match(source, /CampaignActiveEffectDefinitionModal/)
  assert.match(source, /function openDetail\(effect: ActorEffectView/)
  assert.match(source, /function openEdit\(effect: ActorEffectView/)
  assert.match(source, /removeEffect\(effect\)/)
  assert.doesNotMatch(source, /kind: 'detail'/)
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

test('PF2e application publishes same-tab actor invalidation immediately after a successful POST', () => {
  const composer = read(pf2eComposerFile)

  assert.match(composer, /publishLocalActorEffectsChanged/)
  assert.match(
    composer,
    /await api<ActorEffectView>\([\s\S]*method: 'POST'[\s\S]*publishLocalActorEffectsChanged\(\{ campaignId, actorId \}\)/,
  )
  assert.match(composer, /summary: normalizeActorEffectPresentationText\(effect\.description\)/)
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
  const boardOverlays = read(boardOverlaysFile)

  assert.match(overlay, /style=\{\{ left: overlayLeft, top, width: overlayWidth, height: size \}\}/)
  assert.match(overlay, /absolute bottom-full[\s\S]*<ActiveEffectIndicators campaignId=\{campaignId\} effects=\{effects\}/)
  assert.match(overlay, /absolute left-0 right-0 top-full mt-1 grid gap-1/)
  assert.match(boardOverlays, /<TokenPresentationOverlay[\s\S]*top=\{position\.y\}[\s\S]*size=\{displaySize\}/)
  assert.doesNotMatch(boardOverlays, /<TokenPresentationOverlay[\s\S]*top=\{position\.y \+ displaySize/)
})

test('token effect summary caps at three and the expanded list stays compact without horizontal scrolling', () => {
  const overlay = read(tokenPresentationOverlayFile)

  assert.match(overlay, /effects\.slice\(0, 3\)/)
  assert.match(overlay, /\+\{hiddenCount\}/)
  assert.match(overlay, /effects\.map\(\(effect\) =>/)
  assert.match(overlay, /openDetail\(effect\)/)
  assert.match(overlay, /CampaignActiveEffectDefinitionModal/)
  assert.match(overlay, /effect\.displayValue/)
  assert.match(overlay, /effect\.polarity/)
  assert.match(overlay, /effect\.category/)
  assert.match(overlay, /overflow-y-auto overflow-x-hidden/)
  assert.doesNotMatch(overlay, /overflow-x-(?:auto|scroll)/)
  assert.doesNotMatch(overlay, /effect\.description/)
})

test('expanded token effects close on outside click and protect their internal pointer interactions', () => {
  const overlay = read(tokenPresentationOverlayFile)

  assert.match(overlay, /document\.addEventListener\('pointerdown', onOutsidePointerDown, true\)/)
  assert.match(overlay, /root\.contains\(event\.target as Node\)/)
  assert.match(overlay, /event\.stopPropagation\(\)[\s\S]*setOpen\(false\)/)
  assert.match(overlay, /onPointerDown=\{\(event\) => event\.stopPropagation\(\)\}/)
})

test('sheet, token and content references converge on the same shared definition card', () => {
  const panel = read(panelFile)
  const overlay = read(tokenPresentationOverlayFile)
  const campaignDefinition = read(campaignDefinitionModalFile)
  const pf2eDefinition = read(pf2eDefinitionModalFile)
  const sharedDefinition = read(sharedDefinitionModalFile)

  assert.match(panel, /<CampaignActiveEffectDefinitionModal[\s\S]*campaignId=\{campaignId\}[\s\S]*effect=\{selectedDetailEffect\}/)
  assert.match(overlay, /<CampaignActiveEffectDefinitionModal[\s\S]*campaignId=\{campaignId\}[\s\S]*effect=\{selectedEffect\}/)
  assert.match(campaignDefinition, /<ActiveEffectDefinitionModal/)
  assert.match(pf2eDefinition, /<ActiveEffectDefinitionModal/)
  assert.match(campaignDefinition, /game-system-effects\/definitions\/\$\{encodeURIComponent\(effect\.definitionKey\)\}\?locale=\$\{locale\}/)
  assert.match(campaignDefinition, /localeEnabled=\{canonical\}/)
  assert.match(pf2eDefinition, /localeEnabled/)
  assert.match(sharedDefinition, /Português \(Brasil\)/)
  assert.match(sharedDefinition, /English \(US\)/)
  assert.match(sharedDefinition, /descriptionBlocks\.map/)
  assert.match(sharedDefinition, /createPortal\(/)
  assert.doesNotMatch(sharedDefinition, /dangerouslySetInnerHTML/)
})

test('token effect canonical lookup falls back safely for manual or unavailable definitions', () => {
  const source = read(campaignDefinitionModalFile)
  const presentationText = read(presentationTextFile)

  assert.match(source, /if \(!campaignId \|\| !effect\.definitionKey\)/)
  assert.match(source, /normalizeActorEffectPresentationText\(effect\.description\)/)
  assert.match(source, /presentation\?\.descriptionBlocks \?\? fallbackDescription/)
  assert.match(source, /presentation\?\.name \?\? effect\.name/)
  assert.match(presentationText, /executableBlocks/)
  assert.match(presentationText, /remainingTags/)
  assert.doesNotMatch(source, /dangerouslySetInnerHTML/)
  assert.doesNotMatch(source, /JSON\.stringify\([^)]*(?:payload|origin)/)
})

test('closing token effect detail restores the expanded effect list', () => {
  const overlay = read(tokenPresentationOverlayFile)

  assert.match(overlay, /function closeDetail\(\)[\s\S]*setSelectedEffect\(null\)[\s\S]*setOpen\(true\)/)
  assert.match(overlay, /<CampaignActiveEffectDefinitionModal[\s\S]*onClose=\{closeDetail\}/)
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
    read(presentationTextFile),
    read(sharedDefinitionModalFile),
    read(campaignDefinitionModalFile),
    read(contextHookFile),
    read(typesFile),
    read(tokenPresentationOverlayFile),
  ].join('\n')
  assert.doesNotMatch(source, /PATHFINDER|PF2E|Frightened|\bCondition\b|\bSpell\b/)
})

test('raw opaque payload, origin and internal namespaces never become user-facing detail', () => {
  const source = [read(panelFile), read(campaignDefinitionModalFile)].join('\n')
  assert.doesNotMatch(source, /JSON\.stringify\((?:effect\.)?(?:payload|origin)/)
  assert.doesNotMatch(source, /<pre[^>]*>[\s\S]*(?:payload|origin)/)
  assert.doesNotMatch(source, /questhub:manual-effects:v1/)
})
