import type { CampaignAreaTemplate } from '../area-templates/domain/types'
import type {
  TokenActionPresentation,
  TokenActionSpatialActivation,
} from './types'

const defaultStyle: CampaignAreaTemplate['style'] = {
  visualEffect: 'DEFAULT',
  fillColor: '#7c3aed',
  borderColor: '#c4b5fd',
  borderWidthPx: 2,
  opacity: 0.35,
  showCoveredCells: true,
  showOrigin: true,
  showDirectionLine: true,
  affectedTokenRing: {
    color: '#facc15',
    opacity: 0.95,
    thicknessPx: 4,
    gapPx: 4,
    pulse: true,
  },
}

export function tokenActionActivationToRuntimeAreaTemplate(input: {
  campaignId: string
  createdByUserId: string
  sourceTokenId: string
  action: TokenActionPresentation
  activation: TokenActionSpatialActivation
}): CampaignAreaTemplate {
  const timestamp = new Date().toISOString()
  const common = {
    id: `runtime:${input.action.id}:${crypto.randomUUID()}`,
    campaignId: input.campaignId,
    createdByUserId: input.createdByUserId,
    name: input.action.label,
    description: 'Area Effect configurado manualmente para esta ação.',
    category: 'Ação vinculada',
    tags: ['runtime-action', input.action.id],
    volumeShape: 'NONE' as const,
    measurementMode: 'WORLD_UNIT' as const,
    measurementUnit: 'm',
    persistenceMode: 'INSTANT' as const,
    movementMode: 'STATIC' as const,
    stopAtFirstObstacle: false,
    createdAt: timestamp,
    updatedAt: timestamp,
  }

  if (input.activation.kind === 'TARGET_SELECTION') {
    return {
      ...common,
      shape: 'TARGET',
      dimensions: { targetCount: input.activation.maximumTargets },
      originMode: 'TARGET_TOKEN',
      placementMode: 'POINT',
      propagationMode: 'IGNORE_WALLS',
      cellInclusionRule: 'ANY_OVERLAP',
      tokenIntersectionRule: 'MANUAL',
      includesOrigin: false,
      style: {
        ...defaultStyle,
        visualEffect: input.activation.visualEffect ?? 'DEFAULT',
        showCoveredCells: false,
        showOrigin: false,
        showDirectionLine: false,
      },
      visibility: 'MASTER_ONLY',
      runtimeSource: {
        kind: 'TOKEN_ACTION',
        sourceTokenId: input.sourceTokenId,
        actionId: input.action.id,
        minimumTargets: input.activation.minimumTargets,
        ...(input.activation.maximumDistance !== undefined
          ? { maximumDistance: input.activation.maximumDistance }
          : {}),
      },
    }
  }

  const configured = input.activation.template
  const { polygonPoints, ...configuredDimensions } = configured.dimensions
  return {
    ...common,
    shape: configured.shape,
    dimensions: {
      ...configuredDimensions,
      ...(polygonPoints
        ? { polygonPoints: polygonPoints.map((point) => ({ ...point })) }
        : {}),
    },
    originMode: configured.originMode,
    placementMode: configured.placementMode,
    propagationMode: configured.propagationMode ?? 'IGNORE_WALLS',
    cellInclusionRule: configured.cellInclusionRule ?? 'ANY_OVERLAP',
    tokenIntersectionRule: configured.tokenIntersectionRule ?? 'COVERED_CELLS',
    includesOrigin: configured.includesOrigin ?? configured.originMode === 'SOURCE_TOKEN',
    style: {
      ...defaultStyle,
      ...configured.style,
      affectedTokenRing: {
        ...defaultStyle.affectedTokenRing,
        ...configured.style?.affectedTokenRing,
      },
    },
    visibility: configured.visibility ?? 'MASTER_ONLY',
    runtimeSource: {
      kind: 'TOKEN_ACTION',
      sourceTokenId: input.sourceTokenId,
      actionId: input.action.id,
      ...(input.activation.maximumOriginDistance !== undefined
        ? { maximumOriginDistance: input.activation.maximumOriginDistance }
        : {}),
    },
  }
}
