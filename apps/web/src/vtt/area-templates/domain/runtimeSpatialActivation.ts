import type { CampaignAreaTemplate } from './types'

type RuntimeTargetToken = {
  id: string
  position: { x: number; y: number }
  size: number
}

type ActiveRuntimeSpatialActivation = {
  templateId: string
  sourceTokenId: string
  maximumDistance?: number
  metersPerCell: number
}

const EPSILON = 0.001
let activeRuntimeSpatialActivation: ActiveRuntimeSpatialActivation | null = null

export function activateRuntimeSpatialTemplate(
  template: CampaignAreaTemplate,
  metersPerCell: number,
) {
  const source = template.runtimeSource
  if (!source || source.kind !== 'TOKEN_ACTION') {
    activeRuntimeSpatialActivation = null
    return
  }

  activeRuntimeSpatialActivation = {
    templateId: template.id,
    sourceTokenId: source.sourceTokenId,
    ...(source.maximumDistance !== undefined
      ? { maximumDistance: source.maximumDistance }
      : {}),
    metersPerCell: Math.max(metersPerCell, EPSILON),
  }
}

export function clearRuntimeSpatialTemplate() {
  activeRuntimeSpatialActivation = null
}

export function hasActiveRuntimeSpatialTemplate() {
  return activeRuntimeSpatialActivation !== null
}

function occupiedGridDistance(
  source: RuntimeTargetToken,
  target: RuntimeTargetToken,
) {
  const centerDistance = Math.max(
    Math.abs(target.position.x - source.position.x),
    Math.abs(target.position.y - source.position.y),
  )
  const occupiedRadius = (source.size + target.size) / 2
  return Math.max(0, centerDistance - occupiedRadius + 1)
}

export function runtimeTargetIsWithinRange(
  targetTokenId: string,
  tokens: readonly RuntimeTargetToken[],
) {
  const activation = activeRuntimeSpatialActivation
  if (!activation || activation.maximumDistance === undefined) return true

  const source = tokens.find((token) => token.id === activation.sourceTokenId)
  const target = tokens.find((token) => token.id === targetTokenId)
  if (!source || !target) return false

  const distanceMeters = occupiedGridDistance(source, target) * activation.metersPerCell
  return distanceMeters <= activation.maximumDistance + EPSILON
}
