import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  canAccessCampaignDiary,
  presentCampaignDiary,
  presentCampaignScene,
  presentCampaignSceneViewState,
} from './presenter'

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
    tokens: [
      {
        id: 'token-1',
        sceneId: 'scene-1',
        characterId: 'character-1',
        hidden: false,
        positionX: 3.5,
        positionY: 4.5,
        createdAt: now,
        updatedAt: now,
        character: {
          id: 'character-1',
          name: 'Aria',
          avatarUrl: null,
          userId: 'user-1',
          campaigns: [
            {
              role: 'PLAYER',
              user: {
                id: 'user-1',
                email: 'player@example.com',
              },
            },
          ],
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

test('presentCampaignDiary maps free campaign diary', () => {
  const result = presentCampaignDiary({
    id: 'diary-1',
    campaignId: 'campaign-1',
    title: 'Cena 2',
    content: 'Anotacoes',
    createdById: 'user-1',
    lastEditedBy: 'user-1',
    createdAt: now,
    updatedAt: now,
  })

  assert.equal(result.title, 'Cena 2')
  assert.equal(result.content, 'Anotacoes')
})

test('only active masters can access campaign diaries', () => {
  assert.equal(canAccessCampaignDiary({ role: 'MASTER', status: 'ACTIVE' }), true)
  assert.equal(canAccessCampaignDiary({ role: 'PLAYER', status: 'ACTIVE' }), false)
  assert.equal(canAccessCampaignDiary({ role: 'MASTER', status: 'PENDING' }), false)
})
