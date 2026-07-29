import assert from 'node:assert/strict'
import test from 'node:test'
import { createDefaultPathfinder2eCharacterSheet } from './pathfinder_2e/character-sheet/defaults'
import { pathfinder2eTokenPresentationProvider } from './pathfinder_2e/automation/token-presentation-provider'
import { filterTokenPresentationForViewer } from './automation/registry'
import type { TokenPresentation } from './automation/contracts'

test('Pathfinder projects sheet state through the generic token contract', async () => {
  const data = createDefaultPathfinder2eCharacterSheet()
  data.hitPoints.current = 7
  data.hitPoints.temporary = 3
  data.hitPoints.wounded = 1

  const presentation = await pathfinder2eTokenPresentationProvider.buildTokenPresentation({
    campaignId: 'campaign-1',
    tokenId: 'token-1',
    characterSheet: {
      systemKey: 'pathfinder-2e',
      schemaVersion: data.schemaVersion,
      data,
      updatedAt: new Date('2026-07-29T12:00:00.000Z'),
    },
    viewer: {
      userId: 'user-1',
      role: 'PLAYER',
      controlsToken: true,
    },
  })

  assert.equal(presentation.tokenId, 'token-1')
  assert.equal(presentation.resources.length, 1)
  assert.equal(presentation.resources[0]?.slot, 'primary')
  assert.equal(presentation.resources[0]?.value, 7)
  assert.equal(presentation.resources[0]?.temporary, 3)
  assert.equal((presentation.resources[0]?.maximum ?? 0) > 0, true)
  assert.deepEqual(
    presentation.indicators.map((indicator) => indicator.id),
    ['wounded'],
  )
})

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
