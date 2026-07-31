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

export function tokenActionActivationToRuntimeAreaTemplate(input: {
  campaignId: string
  createdByUserId: string
  action: TokenActionPresentation
  activation: TokenActionSpatialActivation
}): CampaignAreaTemplate {
  const visualEffect = input.activation.kind === 'TARGET_SELECTION'
    ? input.activation.visualEffect ?? 'DEFAULT'
    : input.activation.template.visualEffect ?? 'DEFAULT'
  const colors = visualStyles[visualEffect]
  const timestamp = new Date().toISOString()
  const targetSelection = input.activation.kind === 'TARGET_SELECTION'

  return {
    id: `runtime:${input.action.id}:${crypto.randomUUID()}`,
    campaignId: input.campaignId,
    createdByUserId: input.createdByUserId,
    name: input.action.label,
    description: runtimeDescription(input.activation),
    category: 'Ação de Token',
    tags: ['runtime-action', input.action.id],
    shape: targetSelection ? 'TARGET' : input.activation.template.shape,
    volumeShape: 'NONE',
    dimensions: targetSelection
      ? { targetCount: input.activation.maximumTargets }
      : { ...input.activation.template.dimensions },
    measurementMode: 'WORLD_UNIT',
    measurementUnit: 'm',
    originMode: targetSelection
      ? 'TARGET_TOKEN'
      : input.activation.template.originMode,
    placementMode: targetSelection
      ? 'POINT'
      : input.activation.template.placementMode,
    propagationMode: targetSelection ? 'IGNORE_WALLS' : 'BLOCKED_BY_WALLS',
    persistenceMode: 'INSTANT',
    movementMode: 'STATIC',
    cellInclusionRule: 'ANY_OVERLAP',
    tokenIntersectionRule: targetSelection ? 'MANUAL' : 'COVERED_CELLS',
    includesOrigin: !targetSelection && input.activation.template.originMode === 'SOURCE_TOKEN',
    stopAtFirstObstacle: false,
    style: {
      visualEffect,
      fillColor: colors.fillColor,
      borderColor: colors.borderColor,
      borderWidthPx: 2,
      opacity: 0.35,
      showCoveredCells: !targetSelection,
      showOrigin: !targetSelection,
      showDirectionLine: !targetSelection && input.activation.template.placementMode === 'DIRECTIONAL',
      affectedTokenRing: {
        color: colors.ringColor,
        opacity: 0.95,
        thicknessPx: 4,
        gapPx: 4,
        pulse: true,
      },
    },
    visibility: 'MASTER_ONLY',
    createdAt: timestamp,
    updatedAt: timestamp,
  }
}
