import assert from 'node:assert/strict'
import { test } from 'node:test'
import { campaignSceneGridSchema, campaignSceneWallSchema, createCampaignSceneSchema } from './validation'

test('campaign scene grid accepts square metersPerCell scale', () => {
  const result = campaignSceneGridSchema.parse({
    visible: true,
    shape: 'square',
    size: 32,
    metersPerCell: 1.5,
    squareMeasurementColor: '#facc15',
    lineWidth: 2,
    color: '#ffffff',
  })

  assert.equal(result.shape, 'square')
  assert.equal(result.metersPerCell, 1.5)
})

test('campaign scene grid rejects old squareMeters field', () => {
  assert.throws(() =>
    campaignSceneGridSchema.parse({
      visible: true,
      shape: 'square',
      size: 32,
      squareMeters: 9,
      squareMeasurementColor: '#facc15',
      lineWidth: 2,
      color: '#ffffff',
    }),
  )
})

test('create campaign scene validates basic payload', () => {
  const result = createCampaignSceneSchema.parse({
    name: 'Cena 1',
    backgroundUrl: null,
  })

  assert.equal(result.name, 'Cena 1')
  assert.equal(result.backgroundUrl, null)
})

test('campaign scene door clears closed-only flags when opened', () => {
  const result = campaignSceneWallSchema.parse({
    id: 'door-1',
    kind: 'door',
    start: { x: 1, y: 1 },
    end: { x: 2, y: 1 },
    door: {
      open: true,
      locked: true,
      blocked: true,
      ajar: true,
    },
  })

  assert.equal(result.kind, 'door')
  assert.deepEqual(result.door, {
    open: true,
    locked: false,
    blocked: false,
    ajar: false,
  })
})

test('campaign scene wall rejects zero-length segment', () => {
  assert.throws(() =>
    campaignSceneWallSchema.parse({
      id: 'wall-1',
      kind: 'wall',
      start: { x: 1, y: 1 },
      end: { x: 1, y: 1 },
    }),
  )
})

test('campaign scene wall accepts visual color metadata', () => {
  const result = campaignSceneWallSchema.parse({
    id: 'wall-1',
    kind: 'wall',
    start: { x: 1, y: 1 },
    end: { x: 2, y: 1 },
    color: '#38bdf8',
    playerVisible: true,
  })

  assert.equal(result.color, '#38bdf8')
  assert.equal(result.playerVisible, true)
})

