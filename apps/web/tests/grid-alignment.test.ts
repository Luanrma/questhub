import assert from 'node:assert/strict'
import test from 'node:test'
import { feetToMeters, metersToFeet } from '../src/vtt/area-templates/domain/measurement'
import { defaultGridSettings, metersPerCellAllowedValues, normalizeGridSettings, normalizeMetersPerCell } from '../src/vtt/grid'
import { scaleGridSettings, scenePointToRenderedPixels, tokenGridPositionFromPixelCenter, tokenPixelPosition } from '../src/vtt/table/domain/boardMath'
import type { VttPlayerToken } from '../src/vtt/table/domain/types'

const token: VttPlayerToken = {
  id: 'token-1', characterId: null, name: 'Token', avatarUrl: null, color: null, size: 1,
  ownerUserId: null, ownerName: null, controllerMemberId: null, controllerUserId: null,
  role: 'GENERIC', canCustomizeAppearance: false, hidden: false, rotation: 0, layer: 'TOKEN',
  position: { x: 3.5, y: 2.5 },
}

test('grid fine adjustment is normalized and scales only with local zoom', () => {
  const settings = normalizeGridSettings({ ...defaultGridSettings, offsetX: 7, offsetY: -5 })
  assert.equal(settings.offsetX, 7)
  assert.equal(settings.offsetY, -5)
  const zoomed = scaleGridSettings(settings, 150)
  assert.equal(zoomed.offsetX, 10.5)
  assert.equal(zoomed.offsetY, -7.5)
})

test('tokens remain relative to grid size and fine adjustment', () => {
  const first = tokenPixelPosition(token, 32, { x: 0, y: 0 })
  const adjusted = tokenPixelPosition(token, 40, { x: 6, y: -4 })
  assert.notDeepEqual(adjusted, first)
  const center = { x: adjusted.x + 20, y: adjusted.y + 20 }
  const logical = tokenGridPositionFromPixelCenter(center, { width: 1000, height: 1000 }, 40, 'square', { x: 6, y: -4 })
  assert.deepEqual(logical, token.position)
})

test('wall scene coordinates ignore grid size and fine adjustment', () => {
  const point = { x: 240, y: 180 }
  const before = scenePointToRenderedPixels(point, 1)
  const afterGridCalibration = scenePointToRenderedPixels(point, 1)
  assert.deepEqual(afterGridCalibration, before)
  assert.deepEqual(scenePointToRenderedPixels(point, 1.5), { x: 360, y: 270 })
})

test('grid physical scale uses only coherent discrete meter values', () => {
  assert.deepEqual(metersPerCellAllowedValues, [
    0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,
    5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
  ])

  for (const shape of ['square', 'hex'] as const) {
    const settings = normalizeGridSettings({ ...defaultGridSettings, shape, metersPerCell: 1.524 })
    assert.equal(settings.metersPerCell, 1.5)
  }
})

test('legacy grid scales normalize to the nearest allowed value and prefer the lower value on ties', () => {
  assert.equal(normalizeMetersPerCell(0.01), 0.5)
  assert.equal(normalizeMetersPerCell(1.75), 1.5)
  assert.equal(normalizeMetersPerCell(6.26), 6.5)
  assert.equal(normalizeMetersPerCell(150), 10)
})

test('grid visual size is clamped to 50-200px and new settings use canonical defaults', () => {
  assert.equal(defaultGridSettings.size, 100)
  assert.equal(defaultGridSettings.metersPerCell, 1.5)
  assert.equal(normalizeGridSettings({ ...defaultGridSettings, size: 24 }).size, 50)
  assert.equal(normalizeGridSettings({ ...defaultGridSettings, size: 250 }).size, 200)
})

test('grid and effect areas share the same meters and feet conversion', () => {
  assert.equal(feetToMeters(5), 1.524)
  assert.ok(Math.abs(metersToFeet(feetToMeters(5)) - 5) < Number.EPSILON)
})
