import { snapAreaOrigin as snapConfiguredAreaOrigin } from './geometry'
import type {
  AreaCalculationContext,
  AreaPoint,
  CampaignAreaTemplate,
} from './types'

function sourceTokenCenter(
  template: CampaignAreaTemplate,
  context: AreaCalculationContext,
): AreaPoint | null {
  const sourceTokenId = template.runtimeSource?.sourceTokenId
  if (!sourceTokenId) return null
  const token = context.tokens.find((candidate) => candidate.id === sourceTokenId)
  if (!token) return null
  return {
    x: token.position.x * context.grid.size + context.grid.offsetX,
    y: token.position.y * context.grid.size + context.grid.offsetY,
  }
}

function clampToMaximumOriginDistance(
  point: AreaPoint,
  source: AreaPoint,
  maximumDistance: number,
  context: AreaCalculationContext,
): AreaPoint {
  const maximumPixels = maximumDistance
    / Math.max(context.grid.metersPerCell, 0.001)
    * context.grid.size
  const delta = { x: point.x - source.x, y: point.y - source.y }
  const distance = Math.hypot(delta.x, delta.y)
  if (distance <= maximumPixels || distance <= 0.001) return point
  const scale = maximumPixels / distance
  return {
    x: source.x + delta.x * scale,
    y: source.y + delta.y * scale,
  }
}

export function snapAreaOrigin(
  point: AreaPoint,
  template: CampaignAreaTemplate,
  context: AreaCalculationContext,
) {
  const source = sourceTokenCenter(template, context)
  if (template.originMode === 'SOURCE_TOKEN' && source) return source

  const snapped = snapConfiguredAreaOrigin(point, template, context)
  const maximumOriginDistance = template.runtimeSource?.maximumOriginDistance
  if (
    template.originMode !== 'FREE_POINT'
    || !source
    || maximumOriginDistance === undefined
  ) {
    return snapped
  }

  return clampToMaximumOriginDistance(
    snapped,
    source,
    maximumOriginDistance,
    context,
  )
}
