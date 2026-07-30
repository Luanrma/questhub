import assert from 'node:assert/strict'
import { test } from 'node:test'
import { campaignSceneGridSchema, createCampaignSceneSchema, defaultCampaignSceneGrid } from './validation'

test('campaign scene grid accepts square metersPerCell scale', () => {
  const result = campaignSceneGridSchema.parse({
    visible: true,
    shape: 'square',
    size: 100,
    offsetX: 8,
    offsetY: -6,
    metersPerCell: 1.5,
    squareMeasurementColor: '#facc15',
    lineWidth: 2,
    color: '#ffffff',
  })

  assert.equal(result.shape, 'square')
  assert.equal(result.metersPerCell, 1.5)
  assert.equal(result.offsetX, 8)
  assert.equal(result.offsetY, -6)
})

test('campaign scene grid rejects old squareMeters field', () => {
  assert.throws(() =>
    campaignSceneGridSchema.parse({
      visible: true,
      shape: 'square',
      size: 100,
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

test('campaign scene grid enforces canonical visual and distance ranges', () => {
  const baseGrid = {
    ...defaultCampaignSceneGrid,
    visible: true,
  }

  assert.equal(defaultCampaignSceneGrid.size, 100)
  assert.equal(defaultCampaignSceneGrid.metersPerCell, 1.5)
  assert.equal(campaignSceneGridSchema.safeParse({ ...baseGrid, size: 50, metersPerCell: 0.5 }).success, true)
  assert.equal(campaignSceneGridSchema.safeParse({ ...baseGrid, size: 200, metersPerCell: 10 }).success, true)
  assert.equal(campaignSceneGridSchema.safeParse({ ...baseGrid, size: 49 }).success, false)
  assert.equal(campaignSceneGridSchema.safeParse({ ...baseGrid, size: 201 }).success, false)
  assert.equal(campaignSceneGridSchema.safeParse({ ...baseGrid, metersPerCell: 1.25 }).success, false)
})

