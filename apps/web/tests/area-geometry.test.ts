import assert from 'node:assert/strict'
import test from 'node:test'
import { buildAreaPolygon, calculateAreaRender } from '../src/vtt/area-templates/domain/geometry'
import { areaScaleForMeters, primaryAreaDimension } from '../src/vtt/area-templates/domain/instanceMeasurement'
import { areaTemplateForMeterEditor } from '../src/vtt/area-templates/domain/measurement'
import { areaTemplateToInput, defaultAreaTemplateInput, type AreaCalculationContext, type AreaPlacement, type CampaignAreaTemplate } from '../src/vtt/area-templates/domain/types'

function template(overrides: Partial<CampaignAreaTemplate> = {}): CampaignAreaTemplate {
  return {
    ...structuredClone(defaultAreaTemplateInput),
    id: 'template-1',
    campaignId: 'campaign-1',
    createdByUserId: 'master-1',
    createdAt: '2026-07-16T00:00:00.000Z',
    updatedAt: '2026-07-16T00:00:00.000Z',
    ...overrides,
  }
}

const context: AreaCalculationContext = {
  grid: { visible: true, shape: 'square', size: 32, metersPerCell: 1, squareMeasurementColor: '#ffffff', hexMeasurementColor: '#ffffff', lineWidth: 1, color: '#ffffff' },
  board: { width: 320, height: 320 },
  walls: [],
  tokens: [{
    id: 'inside', characterId: null, name: 'Inside', avatarUrl: null, color: null, size: 1,
    ownerUserId: null, ownerName: null, controllerMemberId: null, controllerUserId: null,
    role: 'GENERIC', canCustomizeAppearance: false, hidden: false, rotation: 0, layer: 'TOKEN', position: { x: 3.5, y: 2.5 },
  }],
}

function placement(areaTemplate: CampaignAreaTemplate): AreaPlacement {
  return { key: 'preview', template: areaTemplate, origin: { x: 80, y: 80 }, rotationDegrees: 0, scale: 1, selected: true }
}

test('circle projects covered square cells and detects overlapping tokens', () => {
  const result = calculateAreaRender(placement(template({ dimensions: { radius: 2 } })), context)
  assert.ok(result.coveredCells.length > 4)
  assert.deepEqual(result.touchedTokenIds, ['inside'])
})

test('grid-cell and world-unit dimensions use the configured scene scale', () => {
  const cellArea = buildAreaPolygon(placement(template({ measurementMode: 'GRID_CELLS', dimensions: { radius: 3 } })), { grid: context.grid })
  const cellRadius = Math.max(...cellArea.polygon.map((point) => Math.hypot(point.x - 80, point.y - 80)))
  assert.ok(Math.abs(cellRadius - 96) < 0.001)

  const worldGrid = { ...context.grid, size: 40, metersPerCell: 2 }
  const worldArea = buildAreaPolygon(placement(template({ measurementMode: 'WORLD_UNIT', dimensions: { radius: 6 } })), { grid: worldGrid })
  const worldRadius = Math.max(...worldArea.polygon.map((point) => Math.hypot(point.x - 80, point.y - 80)))
  assert.ok(Math.abs(worldRadius - 120) < 0.001)
})

test('legacy cell dimensions convert to meters without changing their scene size', () => {
  const legacy = template({ measurementMode: 'GRID_CELLS', dimensions: { radius: 3, length: 4, width: 2 } })
  const converted = areaTemplateForMeterEditor(legacy, 0.5)
  assert.equal(converted.measurementMode, 'WORLD_UNIT')
  assert.equal(converted.measurementUnit, 'm')
  assert.deepEqual(converted.dimensions, { radius: 1.5, length: 2, width: 1 })
})

test('instance editor exposes primary dimensions in meters and converts them to scale', () => {
  const circle = primaryAreaDimension(template({ dimensions: { radius: 3 } }), 0.5)
  assert.deepEqual(circle, { label: 'Raio (m)', baseMeters: 3 })
  const legacyCone = primaryAreaDimension(template({ shape: 'CONE', measurementMode: 'GRID_CELLS', dimensions: { length: 6, angleDegrees: 60 } }), 0.5)
  assert.deepEqual(legacyCone, { label: 'Comprimento (m)', baseMeters: 3 })
  assert.equal(areaScaleForMeters(6, legacyCone.baseMeters), 2)
  assert.equal(areaScaleForMeters(1000, legacyCone.baseMeters), 10)
})

test('covered-cell token mode includes a token whose square is touched outside the exact radius', () => {
  const edgeContext: AreaCalculationContext = {
    ...context,
    tokens: [{ ...context.tokens[0], id: 'edge', position: { x: 4.5, y: 1.5 } }],
  }
  const exactTemplate = template({ dimensions: { radius: 1.6 }, tokenIntersectionRule: 'ANY_OVERLAP' })
  assert.deepEqual(calculateAreaRender(placement(exactTemplate), edgeContext).touchedTokenIds, [])

  const gridTemplate = template({ dimensions: { radius: 1.6 }, tokenIntersectionRule: 'COVERED_CELLS' })
  assert.deepEqual(calculateAreaRender(placement(gridTemplate), edgeContext).touchedTokenIds, ['edge'])
})

test('blocking wall removes line of effect to a touched token', () => {
  const blockedContext: AreaCalculationContext = {
    ...context,
    walls: [{ id: 'wall-1', kind: 'wall', start: { x: 3, y: 0 }, end: { x: 3, y: 5 }, playerVisible: false, blocksEffects: true }],
  }
  const blockedTemplate = template({ propagationMode: 'BLOCKED_BY_WALLS', dimensions: { radius: 4 } })
  const blocked = calculateAreaRender(placement(blockedTemplate), blockedContext)
  assert.deepEqual(blocked.touchedTokenIds, [])
  const forwardEdge = blocked.polygon.reduce((closest, point) => Math.abs(point.y - 80) < Math.abs(closest.y - 80) ? point : closest)
  assert.ok(forwardEdge.x <= 96.1)
  const ignoredTemplate = template({ propagationMode: 'IGNORE_WALLS', dimensions: { radius: 4 } })
  assert.deepEqual(calculateAreaRender(placement(ignoredTemplate), blockedContext).touchedTokenIds, ['inside'])
})

test('hexagonal projection emits real hexagon cells', () => {
  const hexContext: AreaCalculationContext = { ...context, grid: { ...context.grid, shape: 'hex' } }
  const result = calculateAreaRender(placement(template({ dimensions: { radius: 2 } })), hexContext)
  assert.ok(result.coveredCells.length > 0)
  assert.ok(result.coveredCells.every((cell) => cell.polygon.length === 6))
})

test('template edit payload excludes server-owned entity fields', () => {
  const input = areaTemplateToInput(template())
  assert.equal('id' in input, false)
  assert.equal('campaignId' in input, false)
  assert.equal('createdByUserId' in input, false)
  assert.equal('createdAt' in input, false)
  assert.equal('updatedAt' in input, false)
})
