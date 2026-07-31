import type { CampaignAreaTemplate } from '../area-templates/domain/types'
import type {
  TokenActionPresentation,
  TokenActionSpatialActivation,
  TokenActionVisualEffect,
} from './types'

const visualStyles: Readonly<Record<
  TokenActionVisualEffect,
  Pick<CampaignAreaTemplate['style'], 'fillColor' | 'borderColor'> & {
    ringColor: string
  }
>> = {
  DEFAULT: { fillColor: '#7c3aed', borderColor: '#c4b5fd', ringColor: '#facc15' },
  FIRE: { fillColor: '#ea580c', borderColor: '#fdba74', ringColor: '#fb923c' },
  ELECTRIC: { fillColor: '#0284c7', borderColor: '#7dd3fc', ringColor: '#38bdf8' },
  HEALING: { fillColor: '#059669', borderColor: '#6ee7b7', ringColor: '#34d399' },
  EARTH: { fillColor: '#92400e', borderColor: '#fbbf24', ringColor: '#d97706' },
  VINES: { fillColor: '#15803d', borderColor: '#86efac', ringColor: '#22c55e' },
  LEAVES: { fillColor: '#4d7c0f', borderColor: '#bef264', ringColor: '#84cc16' },
}

function runtimeDescription(activation: TokenActionSpatialActivation) {
  if (activation.kind === 'TARGET_SELECTION') {
    const targetLabel = activation.maximumTargets === 1
      ? '1 alvo'
      : `até ${activation.maximumTargets} alvos`
    return activation.maximumDistance === undefined
      ? targetLabel
      : `${targetLabel}, alcance máximo de ${activation.maximumDistance} m`
  }

  return activation.maximumOriginDistance === undefined
    ? 'Área criada por uma ação do Token'
    : `Origem limitada a ${activation.maximumOriginDistance} m do Token de origem`
}

function runtimeStyle(
  visualEffect: TokenActionVisualEffect,
  targetSelection: boolean,
  directional: boolean,
): CampaignAreaTemplate['style'] {
  const colors = visualStyles[visualEffect]
  return {
    visualEffect,
    fillColor: colors.fillColor,
    borderColor: colors.borderColor,
    borderWidthPx: 2,
    opacity: 0.35,
    showCoveredCells: !targetSelection,
    showOrigin: !targetSelection,
    showDirectionLine: !targetSelection && directional,
    affectedTokenRing: {
      color: colors.ringColor,
      opacity: 0.95,
      thicknessPx: 4,
      gapPx: 4,
      pulse: true,
    },
  }
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
    description: runtimeDescription(input.activation),
    category: 'Ação de Token',
    tags: ['runtime-action', input.action.id],
    volumeShape: 'NONE' as const,
    measurementMode: 'WORLD_UNIT' as const,
    measurementUnit: 'm',
    persistenceMode: 'INSTANT' as const,
    movementMode: 'STATIC' as const,
    cellInclusionRule: 'ANY_OVERLAP' as const,
    stopAtFirstObstacle: false,
    visibility: 'MASTER_ONLY' as const,
    createdAt: timestamp,
    updatedAt: timestamp,
  }

  if (input.activation.kind === 'TARGET_SELECTION') {
    const activation = input.activation
    const visualEffect = activation.visualEffect ?? 'DEFAULT'
    return {
      ...common,
      shape: 'TARGET',
      dimensions: { targetCount: activation.maximumTargets },
      originMode: 'TARGET_TOKEN',
      placementMode: 'POINT',
      propagationMode: 'IGNORE_WALLS',
      tokenIntersectionRule: 'MANUAL',
      includesOrigin: false,
      style: runtimeStyle(visualEffect, true, false),
      runtimeSource: {
        kind: 'TOKEN_ACTION',
        sourceTokenId: input.sourceTokenId,
        actionId: input.action.id,
        minimumTargets: activation.minimumTargets,
        ...(activation.maximumDistance !== undefined
          ? { maximumDistance: activation.maximumDistance }
          : {}),
      },
    }
  }

  const activation = input.activation
  const visualEffect = activation.template.visualEffect ?? 'DEFAULT'
  return {
    ...common,
    shape: activation.template.shape,
    dimensions: { ...activation.template.dimensions },
    originMode: activation.template.originMode,
    placementMode: activation.template.placementMode,
    propagationMode: 'BLOCKED_BY_WALLS',
    tokenIntersectionRule: 'COVERED_CELLS',
    includesOrigin: activation.template.originMode === 'SOURCE_TOKEN',
    style: runtimeStyle(
      visualEffect,
      false,
      activation.template.placementMode === 'DIRECTIONAL',
    ),
    runtimeSource: {
      kind: 'TOKEN_ACTION',
      sourceTokenId: input.sourceTokenId,
      actionId: input.action.id,
      ...(activation.maximumOriginDistance !== undefined
        ? { maximumOriginDistance: activation.maximumOriginDistance }
        : {}),
    },
  }
}
