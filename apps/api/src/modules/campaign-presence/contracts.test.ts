import assert from 'node:assert/strict'
import test from 'node:test'
import {
  vttCombatAdjustInitiativeSchema,
  vttCombatParticipantsSchema,
  vttGridSettingsSchema,
  vttTokenPlaceSchema,
} from './contracts'

const validTokenPlacement = {
  campaignId: 'campaign-1',
  sceneId: 'scene-1',
  tokenId: 'token-1',
  position: { x: 4.5, y: 6.5 },
}

test('token placement identifies the displayed scene explicitly', () => {
  const result = vttTokenPlaceSchema.safeParse(validTokenPlacement)

  assert.equal(result.success, true)
  if (result.success) assert.equal(result.data.sceneId, 'scene-1')
})

test('token placement without a scene is rejected', () => {
  const placementWithoutScene = {
    campaignId: validTokenPlacement.campaignId,
    tokenId: validTokenPlacement.tokenId,
    position: validTokenPlacement.position,
  }

  assert.equal(vttTokenPlaceSchema.safeParse(placementWithoutScene).success, false)
})

test('initiative adjustment accepts only a bounded manual delta', () => {
  assert.equal(vttCombatAdjustInitiativeSchema.safeParse({
    campaignId: 'campaign-1',
    tokenId: 'token-1',
    initiativeAdjustment: -3,
  }).success, true)
  assert.equal(vttCombatAdjustInitiativeSchema.safeParse({
    campaignId: 'campaign-1',
    tokenId: 'token-1',
    initiative: 17,
  }).success, false)
})

test('active encounter participant commands require unique bounded token ids', () => {
  assert.equal(vttCombatParticipantsSchema.safeParse({
    campaignId: 'campaign-1',
    tokenIds: ['token-1', 'token-2'],
  }).success, true)
  assert.equal(vttCombatParticipantsSchema.safeParse({
    campaignId: 'campaign-1',
    tokenIds: ['token-1', 'token-1'],
  }).success, false)
})

test('realtime grid contract accepts only canonical cell size and distance values', () => {
  const settings = {
    visible: true,
    shape: 'square',
    size: 100,
    offsetX: 0,
    offsetY: 0,
    metersPerCell: 1.5,
    squareMeasurementColor: '#f97316',
    hexMeasurementColor: '#f97316',
    lineWidth: 1,
    color: '#94a3b8',
  }

  assert.equal(vttGridSettingsSchema.safeParse(settings).success, true)
  assert.equal(vttGridSettingsSchema.safeParse({ ...settings, size: 49 }).success, false)
  assert.equal(vttGridSettingsSchema.safeParse({ ...settings, size: 201 }).success, false)
  assert.equal(vttGridSettingsSchema.safeParse({ ...settings, metersPerCell: 1.25 }).success, false)
})
