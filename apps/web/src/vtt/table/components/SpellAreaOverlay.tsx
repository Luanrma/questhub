import { useMemo } from 'react'
import {
  computeCoveredCells,
  computeCoveredHexCells,
  findAffectedHexTokens,
  findAffectedTokens,
  hexCellCenter,
} from '../../../../../../packages/game-system-core/src/shared/scene-geometry'
import type { ScenePoint } from '../../../../../../packages/game-system-core/src/shared/scene-geometry'
import type { VttGridShape } from '../../grid'
import { hexPolygonPoints } from '../domain/boardMath'
import type { VttPlayerToken, VttSpellAreaOverlay } from '../domain/types'

/**
 * Camada visual da area de magia: pinta as celulas cobertas no grid, destaca
 * os tokens afetados e mostra o rotulo da conjuracao. As celulas e os alvos
 * sao recalculados localmente a partir da forma (payload nunca carrega a
 * lista) — ver .ai/spell_casting/specs.md secao 3.
 */
export function SpellAreaOverlayView({
  area,
  gridSize,
  gridShape,
  boardPixelSize,
  tokens,
  rangeRing,
}: {
  area: VttSpellAreaOverlay | null
  gridSize: number
  gridShape: VttGridShape
  boardPixelSize: { width: number; height: number }
  tokens: VttPlayerToken[]
  rangeRing?: { center: ScenePoint; radiusCells: number; withinRange: boolean } | null
}) {
  const coverage = useMemo(() => {
    if (!area || gridSize <= 0) return null
    const bounds = {
      columns: Math.max(1, Math.floor(boardPixelSize.width / gridSize)),
      rows: Math.max(1, Math.floor(boardPixelSize.height / gridSize)),
    }
    const cells = gridShape === 'hex' ? computeCoveredHexCells(area.shape, bounds) : computeCoveredCells(area.shape, bounds)
    if (!cells) return null

    const tokenPositions = tokens.map((token) => ({ id: token.id, position: token.position }))
    const affectedTokenIds = new Set(
      gridShape === 'hex' ? findAffectedHexTokens(cells, tokenPositions) : findAffectedTokens(cells, tokenPositions),
    )
    return { cells, affectedTokenIds }
  }, [area, gridSize, gridShape, boardPixelSize.width, boardPixelSize.height, tokens])

  if (!area || !coverage) {
    return rangeRing ? (
      <svg className="pointer-events-none absolute inset-0 z-[7] h-full w-full overflow-visible">
        <RangeRing rangeRing={rangeRing} gridSize={gridSize} />
      </svg>
    ) : null
  }

  const labelAnchor = shapeAnchor(area)
  const isCastFlash = area.phase === 'CAST'
  const cellFillOpacity = isCastFlash ? 0.5 : 0.32

  return (
    <>
      <svg className="pointer-events-none absolute inset-0 z-[7] h-full w-full overflow-visible">
        {rangeRing ? <RangeRing rangeRing={rangeRing} gridSize={gridSize} /> : null}
        {gridShape === 'hex'
          ? coverage.cells.map((cell) => (
              <polygon
                key={`${cell.column}:${cell.row}`}
                points={hexPolygonPoints(hexCellCenter(cell), gridSize)}
                fill={area.color}
                fillOpacity={cellFillOpacity}
                stroke={area.color}
                strokeOpacity={0.85}
                strokeWidth={1.5}
              />
            ))
          : coverage.cells.map((cell) => (
              <rect
                key={`${cell.column}:${cell.row}`}
                x={cell.column * gridSize}
                y={cell.row * gridSize}
                width={gridSize}
                height={gridSize}
                fill={area.color}
                fillOpacity={cellFillOpacity}
                stroke={area.color}
                strokeOpacity={0.85}
                strokeWidth={1.5}
              />
            ))}
        {tokens
          .filter((token) => coverage.affectedTokenIds.has(token.id))
          .map((token) => (
            <circle
              key={token.id}
              cx={token.position.x * gridSize}
              cy={token.position.y * gridSize}
              r={gridSize * 0.62}
              fill="none"
              stroke={area.color}
              strokeWidth={3}
              strokeDasharray={isCastFlash ? undefined : '6 4'}
            />
          ))}
      </svg>
      <div
        className="pointer-events-none absolute z-[9] rounded-md border border-white/20 bg-black/80 px-2 py-1 text-xs font-semibold shadow-lg"
        style={{
          left: labelAnchor.x * gridSize,
          top: labelAnchor.y * gridSize,
          transform: 'translate(-50%, -160%)',
          color: area.color,
        }}
      >
        {area.label}
        {coverage.affectedTokenIds.size > 0 ? (
          <span className="ml-1 text-white/80">
            ({coverage.affectedTokenIds.size} {coverage.affectedTokenIds.size === 1 ? 'alvo' : 'alvos'})
          </span>
        ) : null}
      </div>
    </>
  )
}

function RangeRing({
  rangeRing,
  gridSize,
}: {
  rangeRing: { center: ScenePoint; radiusCells: number; withinRange: boolean }
  gridSize: number
}) {
  return (
    <circle
      cx={rangeRing.center.x * gridSize}
      cy={rangeRing.center.y * gridSize}
      r={rangeRing.radiusCells * gridSize}
      fill="none"
      stroke={rangeRing.withinRange ? '#38bdf8' : '#ef4444'}
      strokeOpacity={0.55}
      strokeWidth={2}
      strokeDasharray="10 6"
    />
  )
}

function shapeAnchor(area: VttSpellAreaOverlay): ScenePoint {
  const shape = area.shape
  switch (shape.kind) {
    case 'BURST':
    case 'CYLINDER':
    case 'EMANATION':
    case 'RING':
      return shape.center
    case 'CONE':
    case 'LINE':
      return shape.origin
    case 'CUBE':
    case 'SQUARE':
      return { x: shape.origin.x + shape.sizeCells / 2, y: shape.origin.y }
  }
}
