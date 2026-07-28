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
    gridOffsetX: 3,
    gridOffsetY: -2,
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
          actorId: 'character-1',
          name: 'Aria',
          avatarUrl: null,
          color: '#4f46e5',
          size: 1,
          canCustomizeAppearance: false,
          actor: {
            controllerMember: {
              id: 'member-1',
              userId: 'user-1',
              role: 'PLAYER',
              user: { email: 'player@example.com' },
            },
          },
          controllerMember: {
            id: 'member-1',
            userId: 'user-1',
            role: 'PLAYER',
            user: { email: 'player@example.com' },
          },
        },
      },
    ],
  })

  assert.equal(result.grid.shape, 'square')
  assert.equal(result.grid.metersPerCell, 1.5)
  assert.equal(result.grid.offsetX, 3)
  assert.equal(result.grid.offsetY, -2)
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

test('presentCampaignScene keeps a generic token without CampaignActor', () => {
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
    gridOffsetX: 0,
    gridOffsetY: 0,
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
        actorId: null,
        name: 'Cavalo',
        avatarUrl: null,
        color: '#78350f',
        size: 2,
        canCustomizeAppearance: false,
        actor: null,
        controllerMember: null,
      },
    }],
  })

  assert.equal(result.tokens[0]?.actorId, null)
  assert.equal(result.tokens[0]?.role, 'GENERIC')
  assert.equal(result.tokens[0]?.name, 'Cavalo')
})
