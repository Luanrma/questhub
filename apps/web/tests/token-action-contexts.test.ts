import assert from 'node:assert/strict'
import test from 'node:test'
import { tokenActionsForContext } from '../src/vtt/token-presentation/actionContexts'
import type { TokenActionPresentation } from '../src/vtt/token-presentation/types'

function action(
  id: string,
  contexts: TokenActionPresentation['contexts'],
): TokenActionPresentation {
  return {
    id,
    label: id,
    group: 'Generic',
    visibility: 'PUBLIC',
    contexts,
  }
}

test('encounter selects actions only through the neutral context contract', () => {
  const actions = [
    action('encounter', ['ENCOUNTER']),
    action('reference', ['REFERENCE']),
    action('shared', ['ENCOUNTER', 'REFERENCE']),
  ]

  assert.deepEqual(
    tokenActionsForContext(actions, 'ENCOUNTER').map((item) => item.id),
    ['encounter', 'shared'],
  )
})
