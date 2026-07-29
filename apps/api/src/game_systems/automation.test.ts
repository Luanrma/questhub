import assert from 'node:assert/strict'
import test from 'node:test'
import { filterTokenPresentationForViewer } from './automation/registry'
import type { TokenPresentation } from './automation/contracts'

test('the runtime filters projections without exposing sheet data to the VTT', () => {
  const presentation: TokenPresentation = {
    tokenId: 'token-1',
    revision: '1',
    resources: [
      {
        id: 'public',
        slot: 'primary',
        value: 1,
        presentation: 'bar',
        visibility: 'PUBLIC',
      },
      {
        id: 'owner',
        slot: 'secondary',
        value: 2,
        presentation: 'number',
        visibility: 'OWNER_AND_MASTER',
      },
      {
        id: 'master',
        slot: 'tertiary',
        value: 3,
        presentation: 'number',
        visibility: 'MASTER_ONLY',
      },
    ],
    indicators: [],
    actions: [],
  }

  const observerView = filterTokenPresentationForViewer(presentation, {
    role: 'PLAYER',
    controlsToken: false,
  })
  assert.deepEqual(observerView.resources.map((resource) => resource.id), ['public'])

  const ownerView = filterTokenPresentationForViewer(presentation, {
    role: 'PLAYER',
    controlsToken: true,
  })
  assert.deepEqual(ownerView.resources.map((resource) => resource.id), ['public', 'owner'])

  const masterView = filterTokenPresentationForViewer(presentation, {
    role: 'MASTER',
    controlsToken: false,
  })
  assert.deepEqual(masterView.resources.map((resource) => resource.id), ['public', 'owner', 'master'])
})
