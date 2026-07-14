import test from 'node:test'
import assert from 'node:assert/strict'
import {
  computeCoveredCells,
  computeCoveredHexCells,
  distanceInCells,
  findAffectedHexTokens,
  findAffectedTokens,
  hexCellCenter,
  hexCellFromPoint,
  hexDistanceInCells,
  isAreaShapeSupportedOnHexGrid,
} from './index'

const BOUNDS = { columns: 20, rows: 20 }

test('burst of radius 1 centered on a cell center covers the plus-shaped cross of 5 cells', () => {
  const cells = computeCoveredCells({ kind: 'BURST', center: { x: 5.5, y: 5.5 }, radiusCells: 1 }, BOUNDS)

  assert.deepEqual(cells, [
    { column: 5, row: 4 },
    { column: 4, row: 5 },
    { column: 5, row: 5 },
    { column: 6, row: 5 },
    { column: 5, row: 6 },
  ])
})

test('emanation of radius 1 covers the full 3x3 block around the token', () => {
  const cells = computeCoveredCells({ kind: 'EMANATION', center: { x: 5.5, y: 5.5 }, radiusCells: 1 }, BOUNDS)

  assert.equal(cells.length, 9)
  assert.deepEqual(cells[0], { column: 4, row: 4 })
  assert.deepEqual(cells[8], { column: 6, row: 6 })
})

test('cone pointing east covers eastward cells within 45 degrees and never the origin cell', () => {
  const cells = computeCoveredCells(
    { kind: 'CONE', origin: { x: 5.5, y: 5.5 }, directionRadians: 0, lengthCells: 3 },
    BOUNDS,
  )

  assert.equal(cells.some((cell) => cell.column === 5 && cell.row === 5), false)
  assert.equal(cells.some((cell) => cell.column === 6 && cell.row === 5), true)
  assert.equal(cells.some((cell) => cell.column === 7 && cell.row === 4), true)
  assert.equal(cells.some((cell) => cell.column === 7 && cell.row === 6), true)
  assert.equal(cells.some((cell) => cell.column === 4 && cell.row === 5), false)
})

test('line of length 4 width 1 pointing east covers a straight row of 4 cells', () => {
  const cells = computeCoveredCells(
    { kind: 'LINE', origin: { x: 5.5, y: 5.5 }, directionRadians: 0, lengthCells: 4, widthCells: 1 },
    BOUNDS,
  )

  assert.deepEqual(cells, [
    { column: 6, row: 5 },
    { column: 7, row: 5 },
    { column: 8, row: 5 },
    { column: 9, row: 5 },
  ])
})

test('square of size 2 anchored on a cell corner covers the 2x2 block', () => {
  const cells = computeCoveredCells({ kind: 'SQUARE', origin: { x: 4, y: 4 }, sizeCells: 2 }, BOUNDS)

  assert.deepEqual(cells, [
    { column: 4, row: 4 },
    { column: 5, row: 4 },
    { column: 4, row: 5 },
    { column: 5, row: 5 },
  ])
})

test('ring covers the outer band and excludes the inner circle', () => {
  const cells = computeCoveredCells(
    { kind: 'RING', center: { x: 10.5, y: 10.5 }, radiusCells: 3, thicknessCells: 1 },
    BOUNDS,
  )

  assert.equal(cells.some((cell) => cell.column === 10 && cell.row === 10), false)
  assert.equal(cells.some((cell) => cell.column === 13 && cell.row === 10), true)
  assert.equal(cells.some((cell) => cell.column === 11 && cell.row === 10), false)
})

test('cells outside the board bounds are never returned', () => {
  const cells = computeCoveredCells({ kind: 'BURST', center: { x: 0.5, y: 0.5 }, radiusCells: 3 }, BOUNDS)

  assert.equal(cells.every((cell) => cell.column >= 0 && cell.row >= 0), true)
})

test('non-positive dimensions produce an empty coverage without throwing', () => {
  assert.deepEqual(computeCoveredCells({ kind: 'BURST', center: { x: 5.5, y: 5.5 }, radiusCells: 0 }, BOUNDS), [])
  assert.deepEqual(
    computeCoveredCells({ kind: 'LINE', origin: { x: 5.5, y: 5.5 }, directionRadians: 0, lengthCells: 0, widthCells: 1 }, BOUNDS),
    [],
  )
})

test('tokens with centers inside covered cells are affected, adjacent ones are not', () => {
  const cells = computeCoveredCells({ kind: 'BURST', center: { x: 5.5, y: 5.5 }, radiusCells: 1 }, BOUNDS)
  const affected = findAffectedTokens(cells, [
    { id: 'inside-center', position: { x: 5.5, y: 5.5 } },
    { id: 'inside-north', position: { x: 5.5, y: 4.5 } },
    { id: 'outside-diagonal', position: { x: 6.5, y: 4.5 } },
    { id: 'far-away', position: { x: 15.5, y: 15.5 } },
  ])

  assert.deepEqual(affected, ['inside-center', 'inside-north'])
})

test('coverage is deterministic: same input produces the identical ordered list', () => {
  const shape = { kind: 'CONE', origin: { x: 8.5, y: 8.5 }, directionRadians: Math.PI / 3, lengthCells: 5 } as const
  assert.deepEqual(computeCoveredCells(shape, BOUNDS), computeCoveredCells(shape, BOUNDS))
})

test('distanceInCells is the euclidean distance', () => {
  assert.equal(distanceInCells({ x: 0, y: 0 }, { x: 3, y: 4 }), 5)
})

test('hexCellFromPoint recovers the exact cell for both even and odd rows', () => {
  const evenRowCenter = hexCellCenter({ column: 5, row: 0 })
  assert.deepEqual(hexCellFromPoint(evenRowCenter), { column: 5, row: 0 })

  const oddRowCenter = hexCellCenter({ column: 5, row: 1 })
  assert.deepEqual(hexCellFromPoint(oddRowCenter), { column: 5, row: 1 })
})

test('hexDistanceInCells treats a cell in the next row as 1 step away (odd-r neighbor)', () => {
  const evenRowCell = hexCellCenter({ column: 5, row: 0 })
  const neighborBelow = hexCellCenter({ column: 5, row: 1 })
  assert.equal(hexDistanceInCells(evenRowCell, neighborBelow), 1)
})

test('hexDistanceInCells is zero for the same cell and grows with distance', () => {
  const origin = hexCellCenter({ column: 5, row: 5 })
  assert.equal(hexDistanceInCells(origin, origin), 0)
  assert.equal(hexDistanceInCells(origin, hexCellCenter({ column: 7, row: 5 })), 2)
})

test('a hex burst of radius 0 covers only its own cell', () => {
  const center = hexCellCenter({ column: 5, row: 5 })
  const cells = computeCoveredHexCells({ kind: 'BURST', center, radiusCells: 0.4 }, BOUNDS)
  assert.deepEqual(cells, [{ column: 5, row: 5 }])
})

test('a hex burst of radius 1 covers the center plus its 6 neighbors', () => {
  const center = hexCellCenter({ column: 5, row: 5 })
  const cells = computeCoveredHexCells({ kind: 'BURST', center, radiusCells: 1 }, BOUNDS)!
  assert.equal(cells.length, 7)
  assert.ok(cells.some((cell) => cell.column === 5 && cell.row === 5))
})

test('a hex emanation of radius 1 also covers exactly 7 cells (no +0.5 adjustment, unlike square)', () => {
  const center = hexCellCenter({ column: 5, row: 5 })
  const burst = computeCoveredHexCells({ kind: 'BURST', center, radiusCells: 1 }, BOUNDS)!
  const emanation = computeCoveredHexCells({ kind: 'EMANATION', center, radiusCells: 1 }, BOUNDS)!
  assert.deepEqual(
    new Set(emanation.map((cell) => `${cell.column}:${cell.row}`)),
    new Set(burst.map((cell) => `${cell.column}:${cell.row}`)),
  )
})

test('a hex ring excludes the inner disk and keeps only the outer band', () => {
  const center = hexCellCenter({ column: 5, row: 5 })
  const cells = computeCoveredHexCells({ kind: 'RING', center, radiusCells: 2, thicknessCells: 1 }, BOUNDS)!
  assert.equal(cells.some((cell) => cell.column === 5 && cell.row === 5), false)
  assert.equal(cells.length > 0, true)
})

test('cone, line, cube and square are not supported on hex grids and return null instead of an approximation', () => {
  assert.equal(isAreaShapeSupportedOnHexGrid('CONE'), false)
  assert.equal(isAreaShapeSupportedOnHexGrid('LINE'), false)
  assert.equal(isAreaShapeSupportedOnHexGrid('SQUARE'), false)
  assert.equal(isAreaShapeSupportedOnHexGrid('CUBE'), false)
  assert.equal(isAreaShapeSupportedOnHexGrid('BURST'), true)
  assert.equal(isAreaShapeSupportedOnHexGrid('EMANATION'), true)
  assert.equal(isAreaShapeSupportedOnHexGrid('CYLINDER'), true)
  assert.equal(isAreaShapeSupportedOnHexGrid('RING'), true)

  const origin = hexCellCenter({ column: 5, row: 5 })
  assert.equal(computeCoveredHexCells({ kind: 'CONE', origin, directionRadians: 0, lengthCells: 3 }, BOUNDS), null)
  assert.equal(computeCoveredHexCells({ kind: 'LINE', origin, directionRadians: 0, lengthCells: 3, widthCells: 1 }, BOUNDS), null)
  assert.equal(computeCoveredHexCells({ kind: 'SQUARE', origin, sizeCells: 2 }, BOUNDS), null)
  assert.equal(computeCoveredHexCells({ kind: 'CUBE', origin, sizeCells: 2 }, BOUNDS), null)
})

test('hex coverage never returns cells outside the board bounds', () => {
  const center = hexCellCenter({ column: 0, row: 0 })
  const cells = computeCoveredHexCells({ kind: 'BURST', center, radiusCells: 3 }, BOUNDS)!
  assert.equal(cells.every((cell) => cell.column >= 0 && cell.row >= 0), true)
})

test('findAffectedHexTokens matches tokens whose hex cell is covered', () => {
  const center = hexCellCenter({ column: 5, row: 5 })
  const cells = computeCoveredHexCells({ kind: 'BURST', center, radiusCells: 1 }, BOUNDS)!
  const neighbor = hexCellCenter({ column: 5, row: 6 })
  const farAway = hexCellCenter({ column: 15, row: 15 })

  const affected = findAffectedHexTokens(cells, [
    { id: 'center-token', position: center },
    { id: 'neighbor-token', position: neighbor },
    { id: 'far-token', position: farAway },
  ])

  assert.deepEqual(affected, ['center-token', 'neighbor-token'])
})
