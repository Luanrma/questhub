import assert from 'node:assert/strict'
import { test } from 'node:test'
import { presentCampaignScene, presentCampaignSceneViewState } from './presenter'

const now = new Date('2026-06-30T00:00:00.000Z')

test('presentCampaignScene maps square grid and tokens', () => {
  const result = presentCampaignScene({
    id: 'scene-1',
    campaignId: 'campaign-1',
    name: 'Cena 1',
    order: 1,
    assetId: 'asset-1',
    backgroundUrl: 'https://example.com/map.png',
    backgroundCacheKey: 'asset-1:v1',
    gridVisible: true,
    gridShape: 'SQUARE',
    gridSize: 48,
    metersPerCell: 1.5,
    squareMeasurementColor: '#facc15',
    hexMeasurementColor: '#38bdf8',
    gridLineWidth: 2,
    gridColor: '#ffffff',
    createdAt: now,
    updatedAt: now,
    tokenPlacements: [
      {
        id: 'placement-1',
        tokenId: 'token-1',
        sceneId: 'scene-1',
        hidden: false,
        positionX: 3.5,
        positionY: 4.5,
        rotation: 0,
        layer: 'TOKEN',
        createdAt: now,
        updatedAt: now,
        token: {
          id: 'token-1',
          characterId: 'character-1',
          name: 'Aria',
          avatarUrl: null,
          color: null,
          size: 1,
          canCustomizeAppearance: false,
          character: {
            id: 'character-1',
            userId: 'user-1',
            campaigns: [{ role: 'PLAYER' }],
          },
          controllerMember: {
            id: 'member-1',
            userId: 'user-1',
            user: { email: 'player@example.com' },
          },
        },
      },
    ],
  })

  assert.equal(result.grid.shape, 'square')
  assert.equal(result.grid.metersPerCell, 1.5)
  assert.equal(result.tokens[0]?.position.x, 3.5)
  assert.equal(result.tokens[0]?.name, 'Aria')
})

test('presentCampaignSceneViewState defaults missing state', () => {
  const result = presentCampaignSceneViewState(null, 'campaign-1')

  assert.deepEqual(result, {
    campaignId: 'campaign-1',
    masterActiveSceneId: null,
    forcedSceneId: null,
  })
})

test('presentCampaignScene keeps a generic token without Character', () => {
  const result = presentCampaignScene({
    id: 'scene-1',
    campaignId: 'campaign-1',
    name: 'Cena 1',
    order: 1,
    assetId: null,
    backgroundUrl: null,
    backgroundCacheKey: null,
    gridVisible: true,
    gridShape: 'SQUARE',
    gridSize: 32,
    metersPerCell: 1,
    squareMeasurementColor: '#facc15',
    hexMeasurementColor: '#38bdf8',
    gridLineWidth: 1,
    gridColor: '#ffffff',
    createdAt: now,
    updatedAt: now,
    tokenPlacements: [{
      id: 'placement-1',
      tokenId: 'token-1',
      sceneId: 'scene-1',
      hidden: false,
      positionX: 1,
      positionY: 1,
      rotation: 0,
      layer: 'TOKEN',
      createdAt: now,
      updatedAt: now,
      token: {
        id: 'token-1',
        characterId: null,
        name: 'Cavalo',
        avatarUrl: null,
        color: '#78350f',
        size: 2,
        canCustomizeAppearance: false,
        character: null,
        controllerMember: null,
      },
    }],
  })

  assert.equal(result.tokens[0]?.characterId, null)
  assert.equal(result.tokens[0]?.role, 'GENERIC')
  assert.equal(result.tokens[0]?.name, 'Cavalo')
})
