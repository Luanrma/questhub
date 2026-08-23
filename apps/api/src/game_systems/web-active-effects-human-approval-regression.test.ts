import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { getPathfinder2eActiveEffectDefinitionView } from './pathfinder_2e/content_catalog/active-effect-query'

const root = process.cwd()
const webRoot = path.join(root, 'apps', 'web', 'src')
const tokenOverlayFile = path.join(webRoot, 'vtt', 'token-presentation', 'TokenPresentationOverlay.tsx')
const actorPanelFile = path.join(webRoot, 'vtt', 'actor-effects', 'ActorActiveEffectsPanel.tsx')
const composerFile = path.join(webRoot, 'game-systems', 'PathfinderActiveEffectComposer.tsx')
const DENY_FATE = 'bestiary-effects:1UHjPz8hgdnrN3zL'

function read(file: string) {
  return readFileSync(file, 'utf8')
}

test('Deny Fate is canonically harmful and localized without changing identity', () => {
  const definition = getPathfinder2eActiveEffectDefinitionView(DENY_FATE, 'pt-BR')
  assert.ok(definition)
  assert.equal(definition.definitionKey, DENY_FATE)
  assert.equal(definition.name, 'Efeito: Negar o Destino')
  assert.equal(definition.polarity, 'HARMFUL')
  assert.equal(definition.kind, 'effect')
})

test('token and sheet prefer canonical polarity and category over stale persisted presentation', () => {
  const token = read(tokenOverlayFile)
  const panel = read(actorPanelFile)

  assert.match(token, /polarity: canonical\?\.polarity \?\? effect\.polarity/)
  assert.match(token, /category: canonical\?\.category \?\? effect\.category/)
  assert.match(token, /effectPolarityLabel\(presentation\.polarity\)/)
  assert.match(token, /effectCategoryLabel\(presentation\.category\)/)
  assert.match(token, /resolvedPolarity=\{presentation\.polarity\}/)

  assert.match(panel, /polarity: canonical\?\.polarity \?\? effect\.polarity/)
  assert.match(panel, /category: canonical\?\.category \?\? effect\.category/)
  assert.match(panel, /polarityPresentation\[presentation\.polarity\]/)
  assert.match(panel, /resolvedPolarity=\{presentation\.polarity\}/)
})

test('PF2e effect application modal escapes sheet clipping and keeps actions visible', () => {
  const composer = read(composerFile)

  assert.match(composer, /import \{ createPortal \} from 'react-dom'/)
  assert.match(composer, /createPortal\([\s\S]*document\.body/)
  assert.match(composer, /z-\[360\]/)
  assert.match(composer, /role="dialog"/)
  assert.match(composer, /aria-modal="true"/)
  assert.match(composer, /data-pf2e-effect-definition-list/)
  assert.match(composer, /min-h-0 flex-1 overflow-y-auto overflow-x-hidden/)
  assert.match(composer, /data-pf2e-effect-apply-footer/)
  assert.match(composer, /<footer className="shrink-0/)
  assert.match(composer, /Aplicar efeito/)
})
