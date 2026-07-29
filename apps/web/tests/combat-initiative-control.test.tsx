import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { CombatInitiativeControl } from '../src/vtt/table/components/CombatInitiativeControl'
import type { VttCombatParticipant } from '../src/vtt/table/domain/types'

Object.assign(globalThis, { React })

const participant: VttCombatParticipant = {
  tokenId: 'token-1',
  actorId: null,
  name: 'Aranha mecanica',
  avatarUrl: null,
  color: null,
  initiative: 17,
}

test('master sees only initiative total and a manual adjustment input', () => {
  const markup = renderToStaticMarkup(
    <CombatInitiativeControl
      participant={participant}
      isMaster
      onAdjustment={() => undefined}
    />,
  )

  assert.match(markup, />17</)
  assert.match(markup, /Ajuste de iniciativa de Aranha mecanica/)
  assert.doesNotMatch(markup, /d20/i)
})

test('player sees the initiative total without an editable input', () => {
  const markup = renderToStaticMarkup(
    <CombatInitiativeControl
      participant={participant}
      isMaster={false}
      onAdjustment={() => undefined}
    />,
  )

  assert.match(markup, />17</)
  assert.doesNotMatch(markup, /d20/i)
  assert.doesNotMatch(markup, /<input/)
})
