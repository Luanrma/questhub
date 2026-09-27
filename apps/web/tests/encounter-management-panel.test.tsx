import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { EncounterManagementPanel } from '../src/vtt/table/components/EncounterManagementPanel'
import { EncounterSetupPanel } from '../src/vtt/table/components/EncounterSetupPanel'
import type { VttCombatState } from '../src/vtt/table/domain/types'

Object.assign(globalThis, { React })

const combat: VttCombatState = {
  encounterId: 'encounter-1',
  campaignId: 'campaign-1',
  startedSceneId: null,
  name: 'Conselho real',
  privateNotes: 'O conselheiro está mentindo.',
  turnsActive: false,
  round: 1,
  turnCount: 1,
  activeTurnIndex: 0,
  status: 'ACTIVE',
  participants: [],
}

test('master can start a free encounter without selected tokens', () => {
  const markup = renderToStaticMarkup(
    <EncounterSetupPanel
      isMaster
      canStart
      tokenCount={0}
      selectedTokens={[]}
      pending={false}
      error={null}
      onStart={() => undefined}
      onRemoveSelectedToken={() => undefined}
    />,
  )

  assert.match(markup, /Você pode iniciar sem tokens/)
  assert.match(markup, /Iniciar encontro/)
  assert.doesNotMatch(markup, /disabled=""/)
})

test('player management view never renders private master notes', () => {
  const markup = renderToStaticMarkup(
    <EncounterManagementPanel
      combat={combat}
      isMaster={false}
      pending={false}
      error={null}
      onSave={() => undefined}
      onSetTurns={() => undefined}
      onEnd={() => undefined}
      onRemoveParticipant={() => undefined}
    />,
  )

  assert.match(markup, /Conselho real/)
  assert.match(markup, /Modo livre/)
  assert.doesNotMatch(markup, /O conselheiro está mentindo/)
  assert.doesNotMatch(markup, /Anotações privadas/)
})
