import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { EncounterTurnCarousel } from '../src/vtt/table/components/EncounterTurnCarousel'
import type { VttCombatState } from '../src/vtt/table/domain/types'

Object.assign(globalThis, { React })

const combat: VttCombatState = {
  campaignId: 'campaign-1',
  sceneId: 'scene-1',
  round: 2,
  turnCount: 4,
  activeTurnIndex: 0,
  status: 'ACTIVE',
  participants: [
    {
      tokenId: 'token-1',
      actorId: null,
      name: 'A Besta',
      avatarUrl: null,
      color: '#7f1d1d',
      initiative: 18,
    },
    {
      tokenId: 'token-2',
      actorId: null,
      name: 'Pedro',
      avatarUrl: null,
      color: '#1e3a8a',
      initiative: 14,
    },
  ],
}

test('active encounter renders suspended cards without the old clipped modal', () => {
  const markup = renderToStaticMarkup(
    <EncounterTurnCarousel
      combat={combat}
      isMaster
      onNextTurn={() => undefined}
      onPreviousTurn={() => undefined}
      onInitiativeAdjustment={() => undefined}
      onRemoveParticipant={() => undefined}
    />,
  )

  assert.match(markup, /min-h-\[56px\]/)
  assert.match(markup, /overflow-visible/)
  assert.doesNotMatch(markup, /h-\[218px\]/)
  assert.match(markup, /w-\[126px\]/)
  assert.match(markup, /top-\[108px\]/)
  assert.match(markup, /top-\[90px\]/)
  assert.doesNotMatch(markup, /Rodada 2/)
  assert.match(markup, /aria-current="step"/)
  assert.match(markup, /Agindo agora/)
})
