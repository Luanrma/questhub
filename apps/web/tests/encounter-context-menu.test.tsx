import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { EncounterTokenMenuAction } from '../src/vtt/table/components/EncounterTokenMenuAction'

Object.assign(globalThis, { React })

function renderMenu(isMaster: boolean, isSelectedForEncounter = false, activeParticipant = false) {
  return renderToStaticMarkup(
    <EncounterTokenMenuAction
      isMaster={isMaster}
      canSend={isMaster}
      selected={isSelectedForEncounter}
      activeParticipant={activeParticipant}
      onSend={() => undefined}
      onRemove={() => undefined}
    />,
  )
}

test('master token menu exposes the action to send a token to the encounter', () => {
  assert.match(renderMenu(true), /Enviar para o encontro/)
})

test('player token menu does not expose encounter management actions', () => {
  assert.doesNotMatch(renderMenu(false), /Enviar para o encontro/)
})

test('master token menu marks a token already selected for the encounter', () => {
  const markup = renderMenu(true, true)

  assert.match(markup, /Token ja selecionado/)
  assert.match(markup, /disabled/)
})

test('master token menu can remove a participant from an active encounter', () => {
  assert.match(renderMenu(true, false, true), /Remover do encontro/)
})
