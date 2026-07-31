import type {
  TokenActionActivation,
  TokenActionSpatialActivation,
  TokenActionVisualEffect,
} from '../../automation/contracts'
import type { Pathfinder2eCharacterSpellPresentation } from '../character-spells/domain'

const pathfinderFeetToMeters = 0.3

export type Pathfinder2eSpellSpatialMode = {
  id: string
  label: string
  activation: TokenActionSpatialActivation
}

export type Pathfinder2eSpellSpatialProfile =
  | {
      status: 'RESOLVED'
      source: 'OVERRIDE' | 'INFERRED'
      modes: readonly Pathfinder2eSpellSpatialMode[]
    }
  | {
      status: 'UNRESOLVED'
      reason: string
    }

function feetToMeters(feet: number) {
  return Math.round(feet * pathfinderFeetToMeters * 1000) / 1000
}

function parseRangeMeters(range: string) {
  const normalized = range.trim().toLocaleLowerCase('en-US')
  if (normalized === 'touch') return feetToMeters(5)
  const match = normalized.match(/^(\d+(?:\.\d+)?)\s*(?:feet|foot|ft\.?)(?:\s|$)/)
  return match ? feetToMeters(Number(match[1])) : undefined
}

function inferVisualEffect(
  spell: Pathfinder2eCharacterSpellPresentation,
): TokenActionVisualEffect | undefined {
  const traits = new Set(spell.traits.map((trait) => trait.toLocaleLowerCase('en-US')))
  const damageTypes = new Set(spell.damage.map((damage) => damage.type.toLocaleLowerCase('en-US')))
  const effectKinds = new Set(spell.damage.map((damage) => damage.kind))

  if (traits.has('fire') || damageTypes.has('fire')) return 'FIRE'
  if (traits.has('electricity') || damageTypes.has('electricity')) return 'ELECTRIC'
  if (
    traits.has('healing')
    || effectKinds.has('healing')
    || effectKinds.has('damage-or-healing')
  ) return 'HEALING'
  if (traits.has('earth')) return 'EARTH'
  if (traits.has('plant') || traits.has('wood')) return 'VINES'
  return undefined
}

function inferAreaActivation(
  spell: Pathfinder2eCharacterSpellPresentation,
): TokenActionSpatialActivation | null {
  if (!spell.area) return null
  const normalized = spell.area.trim().toLocaleLowerCase('en-US')
  const match = normalized.match(/(\d+(?:\.\d+)?)-foot\s+(burst|emanation|cone|line)\b/)
  if (!match) return null

  const size = feetToMeters(Number(match[1]))
  const areaKind = match[2]
  const maximumOriginDistance = parseRangeMeters(spell.range)
  const visualEffect = inferVisualEffect(spell)

  if (areaKind === 'burst') {
    return {
      kind: 'AREA_PLACEMENT',
      ...(maximumOriginDistance !== undefined ? { maximumOriginDistance } : {}),
      template: {
        shape: 'CIRCLE',
        originMode: 'FREE_POINT',
        placementMode: 'POINT',
        dimensions: { radius: size },
        ...(visualEffect ? { visualEffect } : {}),
      },
    }
  }

  if (areaKind === 'emanation') {
    return {
      kind: 'AREA_PLACEMENT',
      template: {
        shape: 'CIRCLE',
        originMode: 'SOURCE_TOKEN',
        placementMode: 'POINT',
        dimensions: { radius: size },
        ...(visualEffect ? { visualEffect } : {}),
      },
    }
  }

  if (areaKind === 'cone') {
    return {
      kind: 'AREA_PLACEMENT',
      template: {
        shape: 'CONE',
        originMode: 'SOURCE_TOKEN',
        placementMode: 'DIRECTIONAL',
        dimensions: {
          length: size,
          endWidth: size,
        },
        ...(visualEffect ? { visualEffect } : {}),
      },
    }
  }

  return {
    kind: 'AREA_PLACEMENT',
    template: {
      shape: 'LINE',
      originMode: 'SOURCE_TOKEN',
      placementMode: 'DIRECTIONAL',
      dimensions: {
        length: size,
        width: feetToMeters(5),
      },
      ...(visualEffect ? { visualEffect } : {}),
    },
  }
}

function inferTargetCount(target: string) {
  const normalized = target.trim().toLocaleLowerCase('en-US')
  const rangedChoice = normalized.match(/^1\s+or\s+(\d+)\s+creatures?\b/)
  if (rangedChoice) return { minimumTargets: 1, maximumTargets: Number(rangedChoice[1]) }

  const upTo = normalized.match(/^up to\s+(\d+)\s+(?:creatures?|targets?|allies|enemies)\b/)
  if (upTo) return { minimumTargets: 1, maximumTargets: Number(upTo[1]) }

  if (normalized.includes(' per ') || normalized.includes(' or all ') || normalized.includes(' or more ')) {
    return null
  }

  if (/^1\s+(?:willing\s+)?(?:living\s+)?(?:creature|target|ally|enemy|undead)\b/.test(normalized)) {
    return { minimumTargets: 1, maximumTargets: 1 }
  }

  return null
}

function inferTargetActivation(
  spell: Pathfinder2eCharacterSpellPresentation,
): TokenActionSpatialActivation | null {
  const count = inferTargetCount(spell.target)
  if (!count) return null
  const maximumDistance = parseRangeMeters(spell.range)
  const visualEffect = inferVisualEffect(spell)
  return {
    kind: 'TARGET_SELECTION',
    ...count,
    ...(maximumDistance !== undefined ? { maximumDistance } : {}),
    ...(visualEffect ? { visualEffect } : {}),
  }
}

function healOverride(
  spell: Pathfinder2eCharacterSpellPresentation,
): Pathfinder2eSpellSpatialProfile {
  const visualEffect: TokenActionVisualEffect = 'HEALING'
  return {
    status: 'RESOLVED',
    source: 'OVERRIDE',
    modes: [
      {
        id: 'one-action',
        label: '1 ação · toque',
        activation: {
          kind: 'TARGET_SELECTION',
          minimumTargets: 1,
          maximumTargets: 1,
          maximumDistance: feetToMeters(5),
          visualEffect,
        },
      },
      {
        id: 'two-actions',
        label: '2 ações · 9 m',
        activation: {
          kind: 'TARGET_SELECTION',
          minimumTargets: 1,
          maximumTargets: 1,
          maximumDistance: feetToMeters(30),
          visualEffect,
        },
      },
      {
        id: 'three-actions',
        label: '3 ações · emanação',
        activation: {
          kind: 'AREA_PLACEMENT',
          template: {
            shape: 'CIRCLE',
            originMode: 'SOURCE_TOKEN',
            placementMode: 'POINT',
            dimensions: { radius: feetToMeters(30) },
            visualEffect,
          },
        },
      },
    ],
  }
}

const spatialOverrides: Readonly<Record<
  string,
  (spell: Pathfinder2eCharacterSpellPresentation) => Pathfinder2eSpellSpatialProfile
>> = {
  'pf2e:spell:spells-srd:heal': healOverride,
}

export function resolvePathfinder2eSpellSpatialProfile(
  spell: Pathfinder2eCharacterSpellPresentation,
): Pathfinder2eSpellSpatialProfile {
  const override = spatialOverrides[spell.contentId]
  if (override) return override(spell)

  const areaActivation = inferAreaActivation(spell)
  if (areaActivation) {
    return {
      status: 'RESOLVED',
      source: 'INFERRED',
      modes: [{ id: 'area', label: 'Usar área', activation: areaActivation }],
    }
  }

  const targetActivation = inferTargetActivation(spell)
  if (targetActivation) {
    return {
      status: 'RESOLVED',
      source: 'INFERRED',
      modes: [{ id: 'targets', label: 'Selecionar alvos', activation: targetActivation }],
    }
  }

  return {
    status: 'UNRESOLVED',
    reason: 'Os textos de alcance, alvo e área não formam um perfil espacial determinístico.',
  }
}

export function projectPathfinder2eSpellActivation(
  spell: Pathfinder2eCharacterSpellPresentation,
): TokenActionActivation | undefined {
  const profile = resolvePathfinder2eSpellSpatialProfile(spell)
  if (profile.status === 'UNRESOLVED' || profile.modes.length === 0) return undefined
  if (profile.modes.length === 1) return profile.modes[0].activation
  return {
    kind: 'VARIANTS',
    variants: profile.modes.map((mode) => ({
      id: mode.id,
      label: mode.label,
      activation: mode.activation,
    })),
  }
}
