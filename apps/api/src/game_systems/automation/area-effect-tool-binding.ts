import type {
  GameSystemToolBindingSnapshot,
  TokenActionActivation,
  TokenActionToolBindingPresentation,
  ToolBindingSource,
} from './contracts'

export const AREA_EFFECT_TOOL_KEY = 'VTT_AREA_EFFECT'

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

function visualEffect(value: unknown) {
  const parsed = asString(value)
  return parsed && ['DEFAULT', 'FIRE', 'ELECTRIC', 'HEALING', 'EARTH', 'VINES', 'LEAVES'].includes(parsed)
    ? parsed as 'DEFAULT' | 'FIRE' | 'ELECTRIC' | 'HEALING' | 'EARTH' | 'VINES' | 'LEAVES'
    : undefined
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

  if (shape === 'TARGET') {
    const maximumTargets = Math.max(1, Math.trunc(asNumber(dimensions.targetCount) ?? 1))
    return {
      kind: 'TARGET_SELECTION',
      minimumTargets: Math.min(
        maximumTargets,
        Math.max(0, Math.trunc(asNumber(configuration.minimumTargets) ?? 1)),
      ),
      maximumTargets,
      ...(asNumber(configuration.maximumDistance) !== undefined
        ? { maximumDistance: asNumber(configuration.maximumDistance) }
        : {}),
      ...(visualEffect(style.visualEffect)
        ? { visualEffect: visualEffect(style.visualEffect) }
        : {}),
    }
  }

  if (!shape || !['CIRCLE', 'CONE', 'LINE', 'ORTHOGONAL', 'RING', 'POLYGON'].includes(shape)) {
    return undefined
  }

  const originMode = asString(template.originMode)
  const placementMode = asString(template.placementMode)
  if (
    !originMode
    || !['SOURCE_TOKEN', 'FREE_POINT', 'GRID_CELL', 'GRID_INTERSECTION'].includes(originMode)
    || !placementMode
    || !['POINT', 'DIRECTIONAL', 'ATTACHED', 'DRAWN'].includes(placementMode)
  ) {
    return undefined
  }

  const ring = asRecord(style.affectedTokenRing)
  const polygonPoints = Array.isArray(dimensions.polygonPoints)
    ? dimensions.polygonPoints.flatMap((point) => {
        const record = asRecord(point)
        const x = asNumber(record.x)
        const y = asNumber(record.y)
        return x === undefined || y === undefined ? [] : [{ x, y }]
      })
    : undefined

  return {
    kind: 'AREA_PLACEMENT',
    ...(asNumber(configuration.maximumOriginDistance) !== undefined
      ? { maximumOriginDistance: asNumber(configuration.maximumOriginDistance) }
      : {}),
    template: {
      shape: shape as 'CIRCLE' | 'CONE' | 'LINE' | 'ORTHOGONAL' | 'RING' | 'POLYGON',
      originMode: originMode as 'SOURCE_TOKEN' | 'FREE_POINT' | 'GRID_CELL' | 'GRID_INTERSECTION',
      placementMode: placementMode as 'POINT' | 'DIRECTIONAL' | 'ATTACHED' | 'DRAWN',
      dimensions: {
        ...(asNumber(dimensions.radius) !== undefined ? { radius: asNumber(dimensions.radius) } : {}),
        ...(asNumber(dimensions.innerRadius) !== undefined ? { innerRadius: asNumber(dimensions.innerRadius) } : {}),
        ...(asNumber(dimensions.length) !== undefined ? { length: asNumber(dimensions.length) } : {}),
        ...(asNumber(dimensions.width) !== undefined ? { width: asNumber(dimensions.width) } : {}),
        ...(asNumber(dimensions.startWidth) !== undefined ? { startWidth: asNumber(dimensions.startWidth) } : {}),
        ...(asNumber(dimensions.endWidth) !== undefined ? { endWidth: asNumber(dimensions.endWidth) } : {}),
        ...(asNumber(dimensions.angleDegrees) !== undefined ? { angleDegrees: asNumber(dimensions.angleDegrees) } : {}),
        ...(polygonPoints ? { polygonPoints } : {}),
      },
      ...(asString(template.propagationMode)
        ? { propagationMode: asString(template.propagationMode) as 'BLOCKED_BY_WALLS' | 'SPREAD_AROUND_WALLS' | 'IGNORE_WALLS' }
        : {}),
      ...(asString(template.cellInclusionRule)
        ? { cellInclusionRule: asString(template.cellInclusionRule) as 'ANY_OVERLAP' | 'CENTER_INSIDE' | 'HALF_OR_MORE' | 'FULLY_INSIDE' }
        : {}),
      ...(asString(template.tokenIntersectionRule)
        ? { tokenIntersectionRule: asString(template.tokenIntersectionRule) as 'ANY_OVERLAP' | 'CENTER_INSIDE' | 'HALF_OR_MORE' | 'FULLY_INSIDE' | 'COVERED_CELLS' }
        : {}),
      ...(asBoolean(template.includesOrigin) !== undefined
        ? { includesOrigin: asBoolean(template.includesOrigin) }
        : {}),
      style: {
        ...(visualEffect(style.visualEffect) ? { visualEffect: visualEffect(style.visualEffect) } : {}),
        ...(asString(style.fillColor) ? { fillColor: asString(style.fillColor) } : {}),
        ...(asString(style.borderColor) ? { borderColor: asString(style.borderColor) } : {}),
        ...(asNumber(style.borderWidthPx) !== undefined ? { borderWidthPx: asNumber(style.borderWidthPx) } : {}),
        ...(asNumber(style.opacity) !== undefined ? { opacity: asNumber(style.opacity) } : {}),
        ...(asBoolean(style.showCoveredCells) !== undefined ? { showCoveredCells: asBoolean(style.showCoveredCells) } : {}),
        ...(asBoolean(style.showOrigin) !== undefined ? { showOrigin: asBoolean(style.showOrigin) } : {}),
        ...(asBoolean(style.showDirectionLine) !== undefined ? { showDirectionLine: asBoolean(style.showDirectionLine) } : {}),
        ...(asString(ring.color)
          && asNumber(ring.opacity) !== undefined
          && asNumber(ring.thicknessPx) !== undefined
          && asNumber(ring.gapPx) !== undefined
          && asBoolean(ring.pulse) !== undefined
          ? {
              affectedTokenRing: {
                color: asString(ring.color)!,
                opacity: asNumber(ring.opacity)!,
                thicknessPx: asNumber(ring.thicknessPx)!,
                gapPx: asNumber(ring.gapPx)!,
                pulse: asBoolean(ring.pulse)!,
              },
            }
          : {}),
      },
      ...(asString(template.visibility) === 'ALL_PLAYERS'
        ? { visibility: 'ALL_PLAYERS' as const }
        : { visibility: 'MASTER_ONLY' as const }),
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
  const override = input.overrideSource
    ? input.bindings.find((binding) => (
        binding.toolKey === AREA_EFFECT_TOOL_KEY
        && sameSource(binding.source, input.overrideSource!)
      ))
    : undefined
  const inherited = input.defaultSource
    ? input.bindings.find((binding) => (
        binding.toolKey === AREA_EFFECT_TOOL_KEY
        && sameSource(binding.source, input.defaultSource!)
      ))
    : undefined
  const effective = override ?? inherited
  const hasSources = Boolean(input.defaultSource || input.overrideSource)
  if (!hasSources) return {}

  return {
    activation: areaEffectBindingToActivation(effective),
    presentation: {
      toolKey: AREA_EFFECT_TOOL_KEY,
      ...(input.defaultSource ? { defaultSource: input.defaultSource } : {}),
      ...(input.overrideSource ? { overrideSource: input.overrideSource } : {}),
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
