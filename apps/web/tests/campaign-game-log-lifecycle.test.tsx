import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { CampaignCommunicationPanelSlot } from '../src/components/CampaignCommunicationPanelSlot'

Object.assign(globalThis, { React })

test('communication panel remains mounted when another right sidebar tab is active', () => {
  const markup = renderToStaticMarkup(
    <CampaignCommunicationPanelSlot active={false}>
      <span data-testid="communication-panel-state">detached state owner</span>
    </CampaignCommunicationPanelSlot>,
  )

  assert.match(markup, /aria-hidden="true"/)
  assert.match(markup, /class="hidden"/)
  assert.match(markup, /detached state owner/)
})

test('communication panel slot exposes dock content when the chat tab is active', () => {
  const markup = renderToStaticMarkup(
    <CampaignCommunicationPanelSlot active>
      <span>Chat e Log</span>
    </CampaignCommunicationPanelSlot>,
  )

  assert.match(markup, /aria-hidden="false"/)
  assert.match(markup, /class="h-full min-h-0"/)
  assert.match(markup, /Chat e Log/)
})
