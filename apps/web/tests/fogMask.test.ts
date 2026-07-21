import assert from 'node:assert/strict'
import { test } from 'node:test'
import { defaultGridSettings } from '../src/vtt/grid'
import type { VttPlayerToken, VttWallSegment } from '../src/vtt/table/domain/types'
import { normalizeTokenLightSources } from '../src/vtt/fog-of-war/domain/config'
import { computeFogFixedLightMask, computeFogMask, hasFogBit, normalizeExplorationForMask } from '../src/vtt/fog-of-war/domain/mask'

const grid = { ...defaultGridSettings, size: 10, metersPerCell: 1 }
const board = { width: 200, height: 200 }

function token(position: { x: number; y: number }): VttPlayerToken {
  return {
    id: 'observer', characterId: null, name: 'Observer', avatarUrl: null, color: null, size: 1,
    ownerUserId: null, ownerName: null, controllerMemberId: null, controllerUserId: null,
    role: 'PLAYER', canCustomizeAppearance: false, hidden: false, rotation: 0, layer: 'TOKEN',
    visionConfig: {}, lightConfig: {}, blocksVisionAndLight: false, position,
  }
}

function sampleIndex(scenePoint: { x: number; y: number }, dimensions: { width: number; height: number }, sampleBoard = board) {
  const x = Math.min(dimensions.width - 1, Math.floor(scenePoint.x / sampleBoard.width * dimensions.width))
  const y = Math.min(dimensions.height - 1, Math.floor(scenePoint.y / sampleBoard.height * dimensions.height))
  return y * dimensions.width + x
}

function lamp(position: { x: number; y: number }, rangeMeters = 4) {
  return { id: 'lamp', enabled: true, position, rangeMeters, permission: { allowedControllerMemberIds: [] } }
}

test('an enabled token light follows the token center on the current grid', () => {
  const carrier = { ...token({ x: 5, y: 10 }), id: 'carrier', lightConfig: { enabled: true, rangeMeters: 6 } }
  const sources = normalizeTokenLightSources([carrier], grid)

  assert.deepEqual(sources, [{
    id: 'token-light:carrier',
    enabled: true,
    rangeMeters: 6,
    permission: { allowedControllerMemberIds: [] },
    position: { x: 50, y: 100 },
  }])
  assert.deepEqual(normalizeTokenLightSources([{ ...carrier, lightConfig: { enabled: false, rangeMeters: 6 } }], grid), [])
})

test('token vision is circular in all four cardinal directions', () => {
  const observer = token({ x: 10, y: 10 })
  const mask = computeFogMask({ board, grid, token: observer, tokens: [], walls: [], vision: { rangeMeters: 5 }, fixedLights: [], maximumDimension: 160 })

  for (const point of [{ x: 100, y: 60 }, { x: 140, y: 100 }, { x: 100, y: 140 }, { x: 60, y: 100 }]) {
    assert.equal(hasFogBit(mask.visible, sampleIndex(point, mask)), true, `expected ${point.x},${point.y} to be visible`)
  }
})

test('wall vertices with negative angles do not remove the hemisphere above the token', () => {
  const observer = token({ x: 10, y: 10 })
  const wall: VttWallSegment = {
    id: 'upper-right-wall', kind: 'wall', start: { x: 130, y: 50 }, end: { x: 170, y: 50 },
    playerVisible: false, blocksEffects: true, allowsLight: false,
  }
  const mask = computeFogMask({ board, grid, token: observer, tokens: [], walls: [wall], vision: { rangeMeters: 6 }, fixedLights: [], maximumDimension: 160 })

  assert.equal(hasFogBit(mask.visible, sampleIndex({ x: 100, y: 50 }, mask)), true)
})

test('a fixed lamp expands the visible area beyond the token base range', () => {
  const observer = token({ x: 5, y: 10 })
  const fixedLights = [lamp({ x: 90, y: 100 })]
  const fixedLightMask = computeFogFixedLightMask({ board, grid, tokens: [], walls: [], fixedLights, maximumDimension: 160 })
  const withoutLamp = computeFogMask({ board, grid, token: observer, tokens: [], walls: [], vision: { rangeMeters: 4 }, fixedLights: [], maximumDimension: 160 })
  const withLamp = computeFogMask({ board, grid, token: observer, tokens: [], walls: [], vision: { rangeMeters: 4 }, fixedLights, maximumDimension: 160, fixedLightMask })
  const expandedPoint = sampleIndex({ x: 120, y: 100 }, withLamp)

  assert.equal(hasFogBit(withoutLamp.visible, expandedPoint), false)
  assert.equal(hasFogBit(withLamp.visible, expandedPoint), true)
})

test('darkness reveals only illuminated points inside the token maximum vision range', () => {
  const observer = token({ x: 5, y: 10 })
  const fixedLights = [lamp({ x: 90, y: 100 }, 4)]
  const fixedLightMask = computeFogFixedLightMask({ board, grid, tokens: [], walls: [], fixedLights, maximumDimension: 160 })
  const mask = computeFogMask({
    board, grid, token: observer, tokens: [], walls: [], vision: { rangeMeters: 5 }, darkness: true,
    fixedLights, maximumDimension: 160, fixedLightMask,
  })

  assert.equal(hasFogBit(mask.visible, sampleIndex({ x: 80, y: 100 }, mask)), true, 'illuminated point inside vision should be visible')
  assert.equal(hasFogBit(mask.visible, sampleIndex({ x: 40, y: 100 }, mask)), false, 'unlit point near the observer should stay hidden')
  assert.equal(hasFogBit(mask.visible, sampleIndex({ x: 120, y: 100 }, mask)), false, 'light must not extend maximum vision')
})

test('darkness without an active light has an empty current visibility mask', () => {
  const observer = token({ x: 10, y: 10 })
  const mask = computeFogMask({
    board, grid, token: observer, tokens: [], walls: [], vision: { rangeMeters: 5 }, darkness: true,
    fixedLights: [], maximumDimension: 160,
  })

  assert.equal(mask.visible.every((byte) => byte === 0), true)
})

test('a wall still blocks the lamp contribution from the observer', () => {
  const observer = token({ x: 5, y: 10 })
  const fixedLights = [lamp({ x: 110, y: 100 })]
  const wall: VttWallSegment = {
    id: 'wall', kind: 'wall', start: { x: 80, y: 0 }, end: { x: 80, y: 200 },
    playerVisible: false, blocksEffects: true, allowsLight: false,
  }
  const fixedLightMask = computeFogFixedLightMask({ board, grid, tokens: [], walls: [wall], fixedLights, maximumDimension: 160 })
  const mask = computeFogMask({ board, grid, token: observer, tokens: [], walls: [wall], vision: { rangeMeters: 4 }, fixedLights, maximumDimension: 160, fixedLightMask })

  assert.equal(hasFogBit(mask.visible, sampleIndex({ x: 110, y: 100 }, mask)), false)
})

test('cached fixed lights keep thirty observer updates inside the interactive budget', () => {
  const largeBoard = { width: 1600, height: 900 }
  const largeGrid = { ...grid, size: 40, metersPerCell: 5 }
  const fixedLights = [lamp({ x: 800, y: 450 }, 20)]
  const fixedLightMask = computeFogFixedLightMask({ board: largeBoard, grid: largeGrid, tokens: [], walls: [], fixedLights, maximumDimension: 192 })
  const startedAt = performance.now()
  for (let index = 0; index < 30; index += 1) {
    computeFogMask({
      board: largeBoard, grid: largeGrid, token: token({ x: 10 + index / 10, y: 10 }), tokens: [], walls: [],
      vision: { rangeMeters: 20 }, fixedLights, maximumDimension: 192, fixedLightMask,
    })
  }
  const elapsedMilliseconds = performance.now() - startedAt

  assert.ok(elapsedMilliseconds < 400, `thirty updates took ${elapsedMilliseconds.toFixed(1)}ms`)
})

test('exploration is resampled instead of erased when mask dimensions change', () => {
  const legacyMask = new Uint8Array(2)
  legacyMask[0] = 1 << 5
  const normalized = normalizeExplorationForMask(
    { revision: 7, width: 4, height: 4, mask: legacyMask },
    { width: 2, height: 2, visible: new Uint8Array(1) },
  )

  assert.equal(normalized.revision, 7)
  assert.notEqual(normalized.mask[0], 0)
})
