import test from 'node:test'
import assert from 'node:assert/strict'
import { buildPathfinder2eAreaShape, parsePathfinder2eSpellRange, pathfinder2eFeetToCells } from './spell-area'

test('20-foot burst equals 4 tactical cells at the PF2e default of 1.5 meters per cell', () => {
  assert.equal(pathfinder2eFeetToCells(20, 1.5), 4)
})

test('20-foot burst equals 6 cells when the grid uses 1 meter per cell', () => {
  assert.equal(pathfinder2eFeetToCells(20, 1), 6)
})

test('non-positive feet or metersPerCell produce zero cells', () => {
  assert.equal(pathfinder2eFeetToCells(0, 1), 0)
  assert.equal(pathfinder2eFeetToCells(30, 0), 0)
})

test('parses the real range formats found in the compendium', () => {
  assert.deepEqual(parsePathfinder2eSpellRange('30 feet'), { kind: 'feet', feet: 30 })
  assert.deepEqual(parsePathfinder2eSpellRange('touch'), { kind: 'touch' })
  assert.deepEqual(parsePathfinder2eSpellRange('1 mile'), { kind: 'feet', feet: 5280 })
  assert.deepEqual(parsePathfinder2eSpellRange('planetary'), { kind: 'unlimited' })
  assert.deepEqual(parsePathfinder2eSpellRange('varies'), { kind: 'unsupported', raw: 'varies' })
  assert.equal(parsePathfinder2eSpellRange(undefined), null)
  assert.equal(parsePathfinder2eSpellRange(''), null)
})

test('builds a burst shape from a Fireball-style area (20-foot burst)', () => {
  const shape = buildPathfinder2eAreaShape({ type: 'burst', valueFeet: 20 }, { x: 10.5, y: 10.5 }, 0, 1.5)
  assert.deepEqual(shape, { kind: 'BURST', center: { x: 10.5, y: 10.5 }, radiusCells: 4 })
})

test('builds a line shape with the standard 5-foot width', () => {
  const shape = buildPathfinder2eAreaShape({ type: 'line', valueFeet: 60 }, { x: 5.5, y: 5.5 }, Math.PI / 2, 1.5)
  assert.deepEqual(shape, {
    kind: 'LINE',
    origin: { x: 5.5, y: 5.5 },
    directionRadians: Math.PI / 2,
    lengthCells: 12,
    widthCells: 1,
  })
})

test('square and cube areas are centered on the chosen point', () => {
  const shape = buildPathfinder2eAreaShape({ type: 'square', valueFeet: 10 }, { x: 8, y: 8 }, 0, 1.5)
  assert.deepEqual(shape, { kind: 'SQUARE', origin: { x: 7, y: 7 }, sizeCells: 2 })
})

test('unknown area type returns null instead of guessing another shape', () => {
  assert.equal(buildPathfinder2eAreaShape({ type: 'wall', valueFeet: 20 }, { x: 0, y: 0 }, 0, 1.5), null)
})
