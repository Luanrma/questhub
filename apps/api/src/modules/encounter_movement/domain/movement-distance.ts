import type { GridPoint } from './types'

export function cellDistance(from: GridPoint, to: GridPoint, cellSizePx: number): number {
  const dx = Math.abs(to.x - from.x) / cellSizePx
  const dy = Math.abs(to.y - from.y) / cellSizePx
  return Math.max(dx, dy)
}

export function cellsToMeters(cells: number, metersPerCell: number): number {
  return cells * metersPerCell
}

export function feetToMeters(feet: number, metersPerCell: number): number {
  const cells = feet / 5
  return cellsToMeters(cells, metersPerCell)
}
