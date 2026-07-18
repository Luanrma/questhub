import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { PlayerToken } from '../src/vtt/table/components/BoardOverlays'
import type { VttPlayerToken } from '../src/vtt/table/domain/types'

Object.assign(globalThis, { React })

const baseToken: VttPlayerToken = {
  id: 'token-1',
  characterId: null,
  name: 'Aranha',
  avatarUrl: '/tokens/aranha.png',
  color: null,
  size: 1,
  ownerUserId: null,
  ownerName: null,
  controllerMemberId: null,
  controllerUserId: null,
  role: 'GENERIC',
  canCustomizeAppearance: true,
  hidden: false,
  rotation: 0,
  layer: 'TOKEN',
  position: { x: 1, y: 1 },
}

function renderToken(token: VttPlayerToken) {
  return renderToStaticMarkup(
    <PlayerToken
      token={token}
      tokenSize={60}
      gridShape="square"
      gridOffset={{ x: 0, y: 0 }}
      gridAreaRef={{ current: null }}
      canDrag
      isMasterView
      onMove={() => undefined}
      onContextMenu={() => undefined}
    />,
  )
}

test('image token with transparent background has no default border or ring', () => {
  const markup = renderToken(baseToken)

  assert.match(markup, /border-0 shadow-none/)
  assert.doesNotMatch(markup, /ring-black/)
})

test('token with an explicit background keeps the default circular border and ring', () => {
  const markup = renderToken({ ...baseToken, color: '#4f46e5' })

  assert.match(markup, /border-2 shadow-2xl/)
  assert.match(markup, /ring-black/)
})
