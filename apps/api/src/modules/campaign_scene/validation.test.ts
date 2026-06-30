import assert from 'node:assert/strict'
import { test } from 'node:test'
import { campaignSceneGridSchema, createCampaignSceneSchema } from './validation'

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

