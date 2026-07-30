import assert from 'node:assert/strict'
import test from 'node:test'
import { CampaignPresenceState } from './live-state'

test('campaign VTT live state tracks hydration and pending persistence independently', () => {
  const state = new CampaignPresenceState()

  assert.equal(state.isCampaignVttStateHydrated('campaign-1'), false)
  assert.equal(state.hasDirtyCampaignVttState('campaign-1'), false)

  state.markCampaignVttStateHydrated('campaign-1')
  state.markCampaignVttStateDirty('campaign-1')

  assert.equal(state.isCampaignVttStateHydrated('campaign-1'), true)
  assert.equal(state.hasDirtyCampaignVttState('campaign-1'), true)

  state.clearCampaignVttStateDirty('campaign-1')

  assert.equal(state.isCampaignVttStateHydrated('campaign-1'), true)
  assert.equal(state.hasDirtyCampaignVttState('campaign-1'), false)
})

test('ending a campaign clears VTT hydration and pending persistence markers', () => {
  const state = new CampaignPresenceState()
  state.markCampaignVttStateHydrated('campaign-1')
  state.markCampaignVttStateDirty('campaign-1')

  state.clearCampaignSession('campaign-1')

  assert.equal(state.isCampaignVttStateHydrated('campaign-1'), false)
  assert.equal(state.hasDirtyCampaignVttState('campaign-1'), false)
})

test('target marker layout defaults to arrows and is cleared with the campaign session', () => {
  const state = new CampaignPresenceState()

  assert.equal(state.getCampaignTargetMarkerStyle('campaign-1'), 'ARROWS')

  state.setCampaignTargetMarkerStyle('campaign-1', 'RETICLE')
  assert.equal(state.getCampaignTargetMarkerStyle('campaign-1'), 'RETICLE')

  state.clearCampaignSession('campaign-1')
  assert.equal(state.getCampaignTargetMarkerStyle('campaign-1'), 'ARROWS')
})
