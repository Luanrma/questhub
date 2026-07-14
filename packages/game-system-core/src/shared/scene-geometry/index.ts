export type ScenePoint = { x: number; y: number }

export type SceneGridCell = { column: number; row: number }

export type SceneGridBounds = { columns: number; rows: number }

export type SceneAreaShape =
  | { kind: 'BURST'; center: ScenePoint; radiusCells: number }
  | { kind: 'EMANATION'; center: ScenePoint; radiusCells: number }
  | { kind: 'CONE'; origin: ScenePoint; directionRadians: number; lengthCells: number }
  | { kind: 'LINE'; origin: ScenePoint; directionRadians: number; lengthCells: number; widthCells: number }
  | { kind: 'CUBE'; origin: ScenePoint; sizeCells: number }
  | { kind: 'SQUARE'; origin: ScenePoint; sizeCells: number }
  | { kind: 'CYLINDER'; center: ScenePoint; radiusCells: number }
  | { kind: 'RING'; center: ScenePoint; radiusCells: number; thicknessCells: number }

export type SceneTokenPosition = { id: string; position: ScenePoint }

export function distanceInCells(a: ScenePoint, b: ScenePoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

type BoundingBox = { minColumn: number; maxColumn: number; minRow: number; maxRow: number }

function shapeBoundingBox(shape: SceneAreaShape): BoundingBox {
  switch (shape.kind) {
    case 'BURST':
    case 'CYLINDER': {
      const r = shape.radiusCells
      return boxAround(shape.center, r)
    }
    case 'EMANATION': {
      const r = shape.radiusCells + 0.5
      return boxAround(shape.center, r)
    }
    case 'RING':
      return boxAround(shape.center, shape.radiusCells)
    case 'CONE':
      return boxAround(shape.origin, shape.lengthCells)
    case 'LINE':
      return boxAround(shape.origin, shape.lengthCells + shape.widthCells)
    case 'CUBE':
    case 'SQUARE':
      return {
        minColumn: Math.floor(shape.origin.x),
        maxColumn: Math.ceil(shape.origin.x + shape.sizeCells),
        minRow: Math.floor(shape.origin.y),
        maxRow: Math.ceil(shape.origin.y + shape.sizeCells),
      }
  }
}

function boxAround(center: ScenePoint, radius: number): BoundingBox {
  return {
    minColumn: Math.floor(center.x - radius),
    maxColumn: Math.ceil(center.x + radius),
    minRow: Math.floor(center.y - radius),
    maxRow: Math.ceil(center.y + radius),
  }
}

/** Menor diferenca angular absoluta entre dois angulos, em radianos ([0, PI]). */
function angularDifference(a: number, b: number): number {
  const twoPi = Math.PI * 2
  let diff = (a - b) % twoPi
  if (diff > Math.PI) diff -= twoPi
  if (diff < -Math.PI) diff += twoPi
  return Math.abs(diff)
}

const CONE_HALF_ANGLE = Math.PI / 4

function isCellCenterInside(shape: SceneAreaShape, cellCenter: ScenePoint): boolean {
  switch (shape.kind) {
    case 'BURST':
    case 'CYLINDER':
      return shape.radiusCells > 0 && distanceInCells(cellCenter, shape.center) <= shape.radiusCells
    case 'EMANATION':
      return shape.radiusCells > 0 && distanceInCells(cellCenter, shape.center) <= shape.radiusCells + 0.5
    case 'RING': {
      if (shape.radiusCells <= 0 || shape.thicknessCells <= 0) return false
      const distance = distanceInCells(cellCenter, shape.center)
      return distance > shape.radiusCells - shape.thicknessCells && distance <= shape.radiusCells
    }
    case 'CONE': {
      if (shape.lengthCells <= 0) return false
      const distance = distanceInCells(cellCenter, shape.origin)
      if (distance <= 0 || distance > shape.lengthCells) return false
      const angleToCell = Math.atan2(cellCenter.y - shape.origin.y, cellCenter.x - shape.origin.x)
      return angularDifference(angleToCell, shape.directionRadians) <= CONE_HALF_ANGLE
    }
    case 'LINE': {
      if (shape.lengthCells <= 0 || shape.widthCells <= 0) return false
      const deltaX = cellCenter.x - shape.origin.x
      const deltaY = cellCenter.y - shape.origin.y
      const directionX = Math.cos(shape.directionRadians)
      const directionY = Math.sin(shape.directionRadians)
      const projection = deltaX * directionX + deltaY * directionY
      if (projection <= 0 || projection > shape.lengthCells) return false
      const perpendicular = Math.abs(deltaX * directionY - deltaY * directionX)
      return perpendicular <= shape.widthCells / 2
    }
    case 'CUBE':
    case 'SQUARE': {
      if (shape.sizeCells <= 0) return false
      return (
        cellCenter.x >= shape.origin.x &&
        cellCenter.x <= shape.origin.x + shape.sizeCells &&
        cellCenter.y >= shape.origin.y &&
        cellCenter.y <= shape.origin.y + shape.sizeCells
      )
    }
  }
}

export function computeCoveredCells(shape: SceneAreaShape, bounds: SceneGridBounds): SceneGridCell[] {
  const box = shapeBoundingBox(shape)
  const minColumn = Math.max(0, box.minColumn)
  const maxColumn = Math.min(bounds.columns - 1, box.maxColumn)
  const minRow = Math.max(0, box.minRow)
  const maxRow = Math.min(bounds.rows - 1, box.maxRow)

  const cells: SceneGridCell[] = []
  for (let row = minRow; row <= maxRow; row += 1) {
    for (let column = minColumn; column <= maxColumn; column += 1) {
      const cellCenter = { x: column + 0.5, y: row + 0.5 }
      if (isCellCenterInside(shape, cellCenter)) cells.push({ column, row })
    }
  }
  return cells
}

export function findAffectedTokens(cells: SceneGridCell[], tokens: SceneTokenPosition[]): string[] {
  if (cells.length === 0 || tokens.length === 0) return []

  const covered = new Set(cells.map((cell) => `${cell.column}:${cell.row}`))
  return tokens
    .filter((token) => covered.has(`${Math.floor(token.position.x)}:${Math.floor(token.position.y)}`))
    .map((token) => token.id)
}

// --- Grid hexagonal --------------------------------------------------------
//
// Convencao "odd-r offset" (topo pontudo, linhas impares deslocadas 0.5 para
// a direita), identica a ja usada pelo VTT para posicionar/snapar tokens e
// desenhar a regua de medicao hex (apps/web/src/vtt/table/domain/boardMath.ts:
// hexRowStepUnits/snapHexTokenPosition/hexPolygonPoints). ScenePoint em modo
// hex ja chega nessas unidades (x = coluna + deslocamento da linha, y = linha
// * HEX_ROW_STEP_UNITS) — os mesmos pontos que um token hex realmente ocupa.
//
// Suporte parcial (decisao de produto registrada em
// .ai/scene_geometry/specs.md secao 7): apenas as formas "redondas" (BURST,
// EMANATION, CYLINDER, RING) tem cobertura hex, porque a distancia hexagonal
// (passos inteiros no grid) e bem definida e sem ambiguidade. CONE/LINE/
// SQUARE/CUBE em hex exigiriam uma convencao propria (largura de cone em
// hexagonos, orientacao de quadrado sobre grid hexagonal) que nenhum VTT de
// referencia resolve da mesma forma — deliberadamente fora de escopo aqui,
// nunca aproximado.

export const HEX_ROW_STEP_UNITS = Math.sqrt(3) / 2

const HEX_ROUND_SHAPE_KINDS = new Set<SceneAreaShape['kind']>(['BURST', 'EMANATION', 'CYLINDER', 'RING'])

export function isAreaShapeSupportedOnHexGrid(shapeKind: SceneAreaShape['kind']): boolean {
  return HEX_ROUND_SHAPE_KINDS.has(shapeKind)
}

export function hexCellFromPoint(point: ScenePoint): SceneGridCell {
  const row = Math.round(point.y / HEX_ROW_STEP_UNITS)
  const rowOffset = row % 2 === 0 ? 0 : 0.5
  const column = Math.round(point.x - rowOffset)
  return { column, row }
}

export function hexCellCenter(cell: SceneGridCell): ScenePoint {
  const rowOffset = cell.row % 2 === 0 ? 0 : 0.5
  return { x: cell.column + rowOffset, y: cell.row * HEX_ROW_STEP_UNITS }
}

type HexCubeCoordinate = { x: number; y: number; z: number }

function hexCubeFromCell(cell: SceneGridCell): HexCubeCoordinate {
  const x = cell.column - (cell.row - (cell.row & 1)) / 2
  const z = cell.row
  const y = -x - z
  return { x, y, z }
}

function hexCellFromCube(cube: HexCubeCoordinate): SceneGridCell {
  return { column: cube.x + (cube.z - (cube.z & 1)) / 2, row: cube.z }
}

/** Distancia hexagonal em passos inteiros de hexagono (nao euclidiana). */
export function hexDistanceInCells(a: ScenePoint, b: ScenePoint): number {
  const cubeA = hexCubeFromCell(hexCellFromPoint(a))
  const cubeB = hexCubeFromCell(hexCellFromPoint(b))
  return (Math.abs(cubeA.x - cubeB.x) + Math.abs(cubeA.y - cubeB.y) + Math.abs(cubeA.z - cubeB.z)) / 2
}

/** Disco de raio inteiro (em passos de hexagono) ao redor de uma celula, incluindo a propria celula. */
function hexDiskCells(centerCell: SceneGridCell, radius: number): SceneGridCell[] {
  const roundedRadius = Math.max(0, Math.round(radius))
  const centerCube = hexCubeFromCell(centerCell)
  const cells: SceneGridCell[] = []

  for (let dx = -roundedRadius; dx <= roundedRadius; dx += 1) {
    const dyMin = Math.max(-roundedRadius, -dx - roundedRadius)
    const dyMax = Math.min(roundedRadius, -dx + roundedRadius)
    for (let dy = dyMin; dy <= dyMax; dy += 1) {
      const dz = -dx - dy
      cells.push(hexCellFromCube({ x: centerCube.x + dx, y: centerCube.y + dy, z: centerCube.z + dz }))
    }
  }
  return cells
}

function clampCellsToBounds(cells: SceneGridCell[], bounds: SceneGridBounds): SceneGridCell[] {
  return cells.filter((cell) => cell.column >= 0 && cell.column < bounds.columns && cell.row >= 0 && cell.row < bounds.rows)
}

/**
 * Equivalente hexagonal de `computeCoveredCells` para as formas suportadas
 * (ver `isAreaShapeSupportedOnHexGrid`). Retorna `null` — nunca `[]` — para
 * uma forma nao suportada, para o chamador distinguir "sem cobertura porque
 * o raio e zero" de "esta forma nao existe em grid hexagonal ainda".
 *
 * Nota deliberada sobre EMANATION: o ajuste "+0.5 celula" usado no grid
 * quadrado (`computeCoveredCells`) existe para incluir a propria celula do
 * token em uma distancia euclidiana continua. Em hex, um disco de raio R em
 * passos inteiros ja inclui a celula central (R=0) por construcao, entao o
 * ajuste nao e necessario nem faz sentido em unidades de passo — aplicar o
 * mesmo raio de EMANATION e BURST em hex e a escolha correta, nao um
 * descuido.
 */
export function computeCoveredHexCells(shape: SceneAreaShape, bounds: SceneGridBounds): SceneGridCell[] | null {
  switch (shape.kind) {
    case 'BURST':
    case 'CYLINDER':
    case 'EMANATION': {
      if (shape.radiusCells <= 0) return []
      return clampCellsToBounds(hexDiskCells(hexCellFromPoint(shape.center), shape.radiusCells), bounds)
    }
    case 'RING': {
      if (shape.radiusCells <= 0 || shape.thicknessCells <= 0) return []
      const centerCell = hexCellFromPoint(shape.center)
      const outer = hexDiskCells(centerCell, shape.radiusCells)
      const innerRadius = shape.radiusCells - shape.thicknessCells
      const innerKeys = new Set(hexDiskCells(centerCell, innerRadius).map((cell) => `${cell.column}:${cell.row}`))
      return clampCellsToBounds(
        outer.filter((cell) => !innerKeys.has(`${cell.column}:${cell.row}`)),
        bounds,
      )
    }
    case 'CONE':
    case 'LINE':
    case 'CUBE':
    case 'SQUARE':
      return null
  }
}

export function findAffectedHexTokens(cells: SceneGridCell[], tokens: SceneTokenPosition[]): string[] {
  if (cells.length === 0 || tokens.length === 0) return []

  const covered = new Set(cells.map((cell) => `${cell.column}:${cell.row}`))
  return tokens
    .filter((token) => {
      const cell = hexCellFromPoint(token.position)
      return covered.has(`${cell.column}:${cell.row}`)
    })
    .map((token) => token.id)
}
