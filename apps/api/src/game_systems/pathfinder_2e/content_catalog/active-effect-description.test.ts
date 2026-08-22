import assert from 'node:assert/strict'
import test from 'node:test'
import { presentPathfinder2eActiveEffectDescription } from './active-effect-description'

test('Active Effect description presentation removes HTML and preserves paragraph grouping', () => {
  const result = presentPathfinder2eActiveEffectDescription(
    '<p>Primeiro parágrafo.</p><p>Segundo parágrafo com <strong>destaque</strong>.</p>',
    'pt-BR',
  )

  assert.equal(result.description, 'Primeiro parágrafo.\n\nSegundo parágrafo com destaque.')
  assert.deepEqual(result.descriptionBlocks, [
    'Primeiro parágrafo.',
    'Segundo parágrafo com destaque.',
  ])
  assert.equal(result.description.includes('<p>'), false)
})

test('Active Effect description presentation converts supported Foundry macros to readable text', () => {
  const result = presentPathfinder2eActiveEffectDescription(
    '<p>Você deve obter sucesso em @Check[flat|dc:5|showDC:all] antes de @Compendium[pf2e.actionspf2e.example]{Agir}.</p>',
    'pt-BR',
  )

  assert.equal(result.description.includes('@Check['), false)
  assert.equal(result.description.includes('@Compendium['), false)
  assert.match(result.description, /teste simples CD 5/)
  assert.match(result.description, /Agir/)
})

test('Active Effect description presentation discards executable markup', () => {
  const result = presentPathfinder2eActiveEffectDescription(
    '<p>Seguro.</p><script>alert(1)</script><style>body{display:none}</style>',
    'en-US',
  )

  assert.equal(result.description, 'Seguro.')
  assert.equal(result.description.includes('alert'), false)
  assert.equal(result.description.includes('display:none'), false)
})
