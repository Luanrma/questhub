import assert from 'node:assert/strict'
import test from 'node:test'
import { areaPreviewUpdateSchema, createAreaTemplateSchema, createSceneAreaEffectSchema, updateSceneAreaEffectSchema } from './validation'

const validTemplate = {
  name: 'Bola de fogo',
  tags: ['magia'],
  shape: 'CIRCLE',
  volumeShape: 'NONE',
  dimensions: { radius: 6 },
  measurementMode: 'GRID_CELLS',
  originMode: 'GRID_CELL',
  placementMode: 'POINT',
  propagationMode: 'BLOCKED_BY_WALLS',
  persistenceMode: 'PERSISTENT',
  movementMode: 'STATIC',
  cellInclusionRule: 'ANY_OVERLAP',
  tokenIntersectionRule: 'ANY_OVERLAP',
  includesOrigin: true,
  stopAtFirstObstacle: false,
  style: {
    fillColor: '#ff6600',
    borderColor: '#ffaa00',
    borderWidthPx: 2,
    opacity: 0.4,
    showCoveredCells: true,
    showOrigin: true,
    showDirectionLine: false,
    affectedTokenRing: { color: '#ffff00', opacity: 1, thicknessPx: 4, gapPx: 3, pulse: true },
  },
  visibility: 'MASTER_ONLY',
}

test('area template validation accepts a complete campaign-owned configuration payload', () => {
  const parsed = createAreaTemplateSchema.safeParse(validTemplate)
  assert.equal(parsed.success, true)
  if (parsed.success) assert.equal(parsed.data.style.visualEffect, 'DEFAULT')
})

test('area template validation accepts supported visual effects and rejects unsupported effects', () => {
  for (const visualEffect of ['FIRE', 'ELECTRIC', 'HEALING', 'EARTH', 'VINES', 'LEAVES']) {
    assert.equal(createAreaTemplateSchema.safeParse({
      ...validTemplate,
      style: { ...validTemplate.style, visualEffect },
    }).success, true)
  }
  assert.equal(createAreaTemplateSchema.safeParse({
    ...validTemplate,
    style: { ...validTemplate.style, visualEffect: 'SMOKE' },
  }).success, false)
})

test('area template validation accepts covered cells as token intersection rule', () => {
  assert.equal(createAreaTemplateSchema.safeParse({
    ...validTemplate,
    tokenIntersectionRule: 'COVERED_CELLS',
  }).success, true)
})

test('area template validation limits names to 60 members', () => {
  assert.equal(createAreaTemplateSchema.safeParse({ ...validTemplate, name: 'A'.repeat(60) }).success, true)
  assert.equal(createAreaTemplateSchema.safeParse({ ...validTemplate, name: 'A'.repeat(61) }).success, false)
})

test('area template validation requires dimensions for the selected shape', () => {
  const parsed = createAreaTemplateSchema.safeParse({ ...validTemplate, shape: 'LINE', dimensions: { length: 6 } })
  assert.equal(parsed.success, false)
})

test('area preview accepts a compact ephemeral placement and clear command', () => {
  assert.equal(areaPreviewUpdateSchema.safeParse({
    campaignId: 'campaign-1',
    sceneId: 'scene-1',
    preview: {
      templateId: 'template-1',
      origin: { x: 2.5, y: 3.5 },
      rotationDegrees: 45,
      scale: 1,
      selectedTargetIds: ['token-1'],
    },
  }).success, true)
  assert.equal(areaPreviewUpdateSchema.safeParse({ campaignId: 'campaign-1', sceneId: 'scene-1', preview: null }).success, true)
})

test('area template validation stores meters and rejects mutable display units', () => {
  assert.equal(createAreaTemplateSchema.safeParse({ ...validTemplate, measurementUnit: 'm' }).success, true)
  assert.equal(createAreaTemplateSchema.safeParse({ ...validTemplate, measurementUnit: 'ft' }).success, false)
  assert.equal(createAreaTemplateSchema.safeParse({ ...validTemplate, measurementUnit: 'yards' }).success, false)
})

test('area template validation rejects the removed rectangle shape', () => {
  assert.equal(createAreaTemplateSchema.safeParse({
    ...validTemplate,
    shape: 'RECTANGLE',
    dimensions: { length: 6, width: 2 },
  }).success, false)
})

test('orthogonal template requires radius and square-cell point placement', () => {
  const orthogonalTemplate = {
    ...validTemplate,
    shape: 'ORTHOGONAL',
    dimensions: { radius: 9 },
    originMode: 'GRID_CELL',
    placementMode: 'POINT',
    tokenIntersectionRule: 'COVERED_CELLS',
  }
  assert.equal(createAreaTemplateSchema.safeParse(orthogonalTemplate).success, true)
  assert.equal(createAreaTemplateSchema.safeParse({ ...orthogonalTemplate, dimensions: {} }).success, false)
  assert.equal(createAreaTemplateSchema.safeParse({ ...orthogonalTemplate, tokenIntersectionRule: 'ANY_OVERLAP' }).success, true)
})

test('target template requires a bounded target count and manual instantaneous selection', () => {
  const targetTemplate = {
    ...validTemplate,
    shape: 'TARGET',
    dimensions: { targetCount: 3 },
    originMode: 'TARGET_TOKEN',
    placementMode: 'POINT',
    persistenceMode: 'INSTANT',
    tokenIntersectionRule: 'MANUAL',
  }
  assert.equal(createAreaTemplateSchema.safeParse(targetTemplate).success, true)
  assert.equal(createAreaTemplateSchema.safeParse({ ...targetTemplate, dimensions: { targetCount: 0 } }).success, false)
  assert.equal(createAreaTemplateSchema.safeParse({ ...targetTemplate, persistenceMode: 'PERSISTENT' }).success, false)
})

test('scene effect input rejects invalid scale and non-finite coordinates', () => {
  assert.equal(createSceneAreaEffectSchema.safeParse({
    templateId: 'template-1',
    origin: { x: Number.NaN, y: 4 },
    rotationDegrees: 0,
    scale: 0,
  }).success, false)
  assert.equal(createSceneAreaEffectSchema.safeParse({
    templateId: 'template-1',
    origin: { x: 2, y: 4 },
    rotationDegrees: 12.5,
    scale: 1,
  }).success, false)
})

test('scene effect update accepts geometry changes and rejects empty payload', () => {
  assert.equal(updateSceneAreaEffectSchema.safeParse({ rotationDegrees: 45, scale: 1.5 }).success, true)
  assert.equal(updateSceneAreaEffectSchema.safeParse({ rotationDegrees: 45.5 }).success, false)
  assert.equal(updateSceneAreaEffectSchema.safeParse({}).success, false)
})
