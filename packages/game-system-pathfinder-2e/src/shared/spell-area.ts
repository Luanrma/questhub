import type { SceneAreaShape, ScenePoint } from '../../../game-system-core/src/shared/scene-geometry'

/**
 * Politica de distancia PF2e: 5 pes = 1 celula do grid tatico = 1.5 metros.
 * O grid do QuestHub e configurado em metros por celula (`metersPerCell`),
 * entao a conversao passa por metros: cells = (feet / 5) * (1.5 / metersPerCell).
 * Ver .ai/game_systems/pathfinder_2e/spell_casting/specs.md secao 3.
 */
export function pathfinder2eFeetToCells(feet: number, metersPerCell: number): number {
  if (!Number.isFinite(feet) || feet <= 0) return 0
  if (!Number.isFinite(metersPerCell) || metersPerCell <= 0) return 0
  return (feet / 5) * (1.5 / metersPerCell)
}

export type Pathfinder2eSpellRangeProfile =
  | { kind: 'feet'; feet: number }
  | { kind: 'touch' }
  | { kind: 'unlimited' }
  | { kind: 'unsupported'; raw: string }

/**
 * Formatos reais auditados em pf2e-master/packs/spells: "30 feet", "touch",
 * "1 mile"/"10 miles", "varies", "planetary". Qualquer outro texto cai em
 * `unsupported` (a UI mostra o texto e nao aplica validacao de alcance),
 * nunca adivinhado.
 */
export function parsePathfinder2eSpellRange(range: string | undefined | null): Pathfinder2eSpellRangeProfile | null {
  if (!range) return null
  const normalized = range.trim().toLowerCase()
  if (!normalized) return null

  if (normalized === 'touch') return { kind: 'touch' }
  if (normalized === 'planetary' || normalized === 'unlimited') return { kind: 'unlimited' }

  const feetMatch = normalized.match(/^(\d+)\s*(?:feet|foot|ft\.?)$/)
  if (feetMatch) return { kind: 'feet', feet: Number(feetMatch[1]) }

  const mileMatch = normalized.match(/^(\d+)\s*miles?$/)
  if (mileMatch) return { kind: 'feet', feet: Number(mileMatch[1]) * 5280 }

  return { kind: 'unsupported', raw: range }
}

export type Pathfinder2eAreaInput = {
  type: string
  valueFeet: number
}

/**
 * Constroi a forma agnostica de cena a partir da area PF2e. Tipos reais
 * auditados: burst, emanation, cone, line, cylinder, square, cube. Tipo
 * desconhecido retorna null (a UI reporta "area nao suportada" — nunca
 * aproxima com outra forma).
 *
 * `origin` e o ponto de ancoragem em celulas: para emanation e o centro do
 * token conjurador; para as demais, o ponto escolhido no tabuleiro.
 * `directionRadians` so e usado por cone/line.
 */
export function buildPathfinder2eAreaShape(
  area: Pathfinder2eAreaInput,
  origin: ScenePoint,
  directionRadians: number,
  metersPerCell: number,
): SceneAreaShape | null {
  const cells = pathfinder2eFeetToCells(area.valueFeet, metersPerCell)
  if (cells <= 0) return null

  switch (area.type) {
    case 'burst':
      return { kind: 'BURST', center: origin, radiusCells: cells }
    case 'cylinder':
      return { kind: 'CYLINDER', center: origin, radiusCells: cells }
    case 'emanation':
      return { kind: 'EMANATION', center: origin, radiusCells: cells }
    case 'cone':
      return { kind: 'CONE', origin, directionRadians, lengthCells: cells }
    case 'line':
      // Largura padrao de linha PF2e: 5 pes = 1 celula.
      return { kind: 'LINE', origin, directionRadians, lengthCells: cells, widthCells: pathfinder2eFeetToCells(5, metersPerCell) }
    case 'square':
      return { kind: 'SQUARE', origin: { x: origin.x - cells / 2, y: origin.y - cells / 2 }, sizeCells: cells }
    case 'cube':
      return { kind: 'CUBE', origin: { x: origin.x - cells / 2, y: origin.y - cells / 2 }, sizeCells: cells }
    default:
      return null
  }
}
