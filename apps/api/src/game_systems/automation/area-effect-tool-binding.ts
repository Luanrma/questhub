import type {
  GameSystemToolBindingSnapshot,
  TokenActionActivation,
  TokenActionToolBindingPresentation,
  ToolBindingSource,
} from './contracts'

export const AREA_EFFECT_TOOL_KEY = 'VTT_AREA_EFFECT'

const areaShapes = ['CIRCLE', 'CONE', 'LINE', 'ORTHOGONAL', 'RING', 'POLYGON'] as const
const originModes = ['SOURCE_TOKEN', 'FREE_POINT', 'GRID_CELL', 'GRID_INTERSECTION'] as const
const placementModes = ['POINT', 'DIRECTIONAL', 'ATTACHED', 'DRAWN'] as const
const propagationModes = ['BLOCKED_BY_WALLS', 'SPREAD_AROUND_WALLS', 'IGNORE_WALLS'] as const
const inclusionRules = ['ANY_OVERLAP', 'CENTER_INSIDE', 'HALF_OR_MORE', 'FULLY_INSIDE'] as const
const intersectionRules = [...inclusionRules, 'COVERED_CELLS'] as const
const visualEffects = ['DEFAULT', 'FIRE', 'ELECTRIC', 'HEALING', 'EARTH', 'VINES', 'LEAVES'] as const

function sameSource(left: ToolBindingSource, right: ToolBindingSource) {
  return left.kind === right.kind
    && left.namespace === right.namespace
    && left.id === right.id
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {}
}

function asNumber(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined
}

function asBoolean(value: unknown) {
  return typeof value === 'boolean' ? value : undefined
}

function asString(value: unknown) {
  return typeof value === 'string' ? value : undefined
}

function oneOf<const Values extends readonly string[]>(value: unknown, values: Values) {
  const parsed = asString(value)
  return parsed && values.includes(parsed) ? parsed as Values[number] : undefined
}

export function areaEffectBindingToActivation(
  binding: GameSystemToolBindingSnapshot | undefined,
): TokenActionActivation | undefined {
  if (!binding || binding.toolKey !== AREA_EFFECT_TOOL_KEY) return undefined
  const configuration = asRecord(binding.configuration)
  const template = asRecord(configuration.template)
  const shape = asString(template.shape)
  const dimensions = asRecord(template.dimensions)
  const style = asRecord(template.style)
  const effect = oneOf(style.visualEffect, visualEffects)

  if (shape === 'TARGET') {
    const maximumTargets = Math.max(1, Math.trunc(asNumber(dimensions.targetCount) ?? 1))
    const minimumTargets = Math.min(
      maximumTargets,
      Math.max(0, Math.trunc(asNumber(configuration.minimumTargets) ?? 1)),
    )
    const maximumDistance = asNumber(configuration.maximumDistance)
    return {
      kind: 'TARGET_SELECTION',
      minimumTargets,
      maximumTargets,
      ...(maximumDistance !== undefined ? { maximumDistance } : {}),
      ...(effect ? { visualEffect: effect } : {}),
    }
  }

  const areaShape = oneOf(shape, areaShapes)
  const originMode = oneOf(template.originMode, originModes)
  const placementMode = oneOf(template.placementMode, placementModes)
  if (!areaShape || !originMode || !placementMode) return undefined

  const radius = asNumber(dimensions.radius)
  const innerRadius = asNumber(dimensions.innerRadius)
  const length = asNumber(dimensions.length)
  const width = asNumber(dimensions.width)
  const startWidth = asNumber(dimensions.startWidth)
  const endWidth = asNumber(dimensions.endWidth)
  const angleDegrees = asNumber(dimensions.angleDegrees)
  const polygonPoints = Array.isArray(dimensions.polygonPoints)
    ? dimensions.polygonPoints.flatMap((point) => {
        const record = asRecord(point)
        const x = asNumber(record.x)
        const y = asNumber(record.y)
        return x === undefined || y === undefined ? [] : [{ x, y }]
      })
    : undefined
  const maximumOriginDistance = asNumber(configuration.maximumOriginDistance)
  const propagationMode = oneOf(template.propagationMode, propagationModes)
  const cellInclusionRule = oneOf(template.cellInclusionRule, inclusionRules)
  const tokenIntersectionRule = oneOf(template.tokenIntersectionRule, intersectionRules)
  const includesOrigin = asBoolean(template.includesOrigin)
  const fillColor = asString(style.fillColor)
  const borderColor = asString(style.borderColor)
  const borderWidthPx = asNumber(style.borderWidthPx)
  const opacity = asNumber(style.opacity)
  const showCoveredCells = asBoolean(style.showCoveredCells)
  const showOrigin = asBoolean(style.showOrigin)
  const showDirectionLine = asBoolean(style.showDirectionLine)
  const ring = asRecord(style.affectedTokenRing)
  const ringColor = asString(ring.color)
  const ringOpacity = asNumber(ring.opacity)
  const ringThickness = asNumber(ring.thicknessPx)
  const ringGap = asNumber(ring.gapPx)
  const ringPulse = asBoolean(ring.pulse)
  const affectedTokenRing = ringColor
    && ringOpacity !== undefined
    && ringThickness !== undefined
    && ringGap !== undefined
    && ringPulse !== undefined
    ? {
        color: ringColor,
        opacity: ringOpacity,
        thicknessPx: ringThickness,
        gapPx: ringGap,
        pulse: ringPulse,
      }
    : undefined
  const effectiveIncludesOrigin = (areaShape === 'CONE' || areaShape === 'LINE')
    && originMode === 'SOURCE_TOKEN'
    ? false
    : includesOrigin

  return {
    kind: 'AREA_PLACEMENT',
    ...(maximumOriginDistance !== undefined ? { maximumOriginDistance } : {}),
    template: {
      shape: areaShape,
      originMode,
      placementMode,
      dimensions: {
        ...(radius !== undefined ? { radius } : {}),
        ...(innerRadius !== undefined ? { innerRadius } : {}),
        ...(length !== undefined ? { length } : {}),
        ...(width !== undefined ? { width } : {}),
        ...(startWidth !== undefined ? { startWidth } : {}),
        ...(endWidth !== undefined ? { endWidth } : {}),
        ...(angleDegrees !== undefined ? { angleDegrees } : {}),
        ...(polygonPoints ? { polygonPoints } : {}),
      },
      ...(propagationMode ? { propagationMode } : {}),
      ...(cellInclusionRule ? { cellInclusionRule } : {}),
      ...(tokenIntersectionRule ? { tokenIntersectionRule } : {}),
      ...(effectiveIncludesOrigin !== undefined
        ? { includesOrigin: effectiveIncludesOrigin }
        : {}),
      style: {
        ...(effect ? { visualEffect: effect } : {}),
        ...(fillColor ? { fillColor } : {}),
        ...(borderColor ? { borderColor } : {}),
        ...(borderWidthPx !== undefined ? { borderWidthPx } : {}),
        ...(opacity !== undefined ? { opacity } : {}),
        ...(showCoveredCells !== undefined ? { showCoveredCells } : {}),
        ...(showOrigin !== undefined ? { showOrigin } : {}),
        ...(showDirectionLine !== undefined ? { showDirectionLine } : {}),
        ...(affectedTokenRing ? { affectedTokenRing } : {}),
      },
      visibility: template.visibility === 'ALL_PLAYERS' ? 'ALL_PLAYERS' : 'MASTER_ONLY',
    },
  }
}

export function resolveTokenActionToolBinding(input: {
  bindings: readonly GameSystemToolBindingSnapshot[]
  defaultSource?: ToolBindingSource
  overrideSource?: ToolBindingSource
}): {
  activation?: TokenActionActivation
  presentation?: TokenActionToolBindingPresentation
} {
  const overrideSource = input.overrideSource
  const defaultSource = input.defaultSource
  const override = overrideSource
    ? input.bindings.find((binding) => (
        binding.toolKey === AREA_EFFECT_TOOL_KEY
        && sameSource(binding.source, overrideSource)
      ))
    : undefined
  const inherited = defaultSource
    ? input.bindings.find((binding) => (
        binding.toolKey === AREA_EFFECT_TOOL_KEY
        && sameSource(binding.source, defaultSource)
      ))
    : undefined
  const effective = override ?? inherited
  if (!defaultSource && !overrideSource) return {}

  return {
    activation: areaEffectBindingToActivation(effective),
    presentation: {
      toolKey: AREA_EFFECT_TOOL_KEY,
      ...(defaultSource ? { defaultSource } : {}),
      ...(overrideSource ? { overrideSource } : {}),
      ...(effective ? {
        effective: {
          id: effective.id,
          source: effective.source,
          schemaVersion: effective.schemaVersion,
          configuration: effective.configuration,
        },
      } : {}),
    },
  }
}
