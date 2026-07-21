import type { FogFixedLightSource, FogLightSourceConfig, SceneFogConfig, TokenVisionConfig } from './types'
import type { VttGridSettings } from '../../grid'

export const defaultSceneFogConfig: SceneFogConfig = {
  enabled: false,
  darkness: false,
  playerFog: { unexploredOpacity: 1, exploredOpacity: 0.5, softEdge: true },
  masterFog: { defaultMode: 'TRANSLUCENT', translucentOpacity: 0.25 },
}

export const defaultTokenVisionConfig: TokenVisionConfig = { rangeMeters: 10 }

export const defaultTokenLightConfig: FogLightSourceConfig = {
  id: 'token-light', enabled: false, rangeMeters: 20, permission: { allowedControllerMemberIds: [] },
}

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}
}

function clamp(value: unknown, min: number, max: number, fallback: number) {
  return typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback
}

export function normalizeSceneFogConfig(value: unknown): SceneFogConfig {
  const source = record(value)
  const playerFog = record(source.playerFog)
  const masterFog = record(source.masterFog)
  return {
    enabled: Boolean(source.enabled),
    darkness: Boolean(source.darkness),
    playerFog: {
      unexploredOpacity: clamp(playerFog.unexploredOpacity, 0, 1, 1),
      exploredOpacity: clamp(playerFog.exploredOpacity, 0, 1, 0.5),
      softEdge: playerFog.softEdge !== false,
    },
    masterFog: { defaultMode: 'TRANSLUCENT', translucentOpacity: clamp(masterFog.translucentOpacity, 0, 1, 0.25) },
  }
}

export function normalizeTokenVisionConfig(value: unknown): TokenVisionConfig {
  const source = record(value)
  const legacyRange = typeof source.normalRangeMeters === 'number' ? source.normalRangeMeters / 2 : undefined
  return { rangeMeters: clamp(source.rangeMeters ?? legacyRange, 0.5, 1000, 10) }
}

export function normalizeFogLightSource(value: unknown, id: string): FogLightSourceConfig {
  const source = record(value)
  const permission = record(source.permission)
  const allowed = Array.isArray(permission.allowedControllerMemberIds)
    ? permission.allowedControllerMemberIds.filter((item): item is string => typeof item === 'string').slice(0, 100) : []
  return {
    id: typeof source.id === 'string' && source.id ? source.id : id,
    enabled: Boolean(source.enabled),
    rangeMeters: clamp(source.rangeMeters, 0.5, 1000, 20),
    permission: { allowedControllerMemberIds: [...new Set(allowed)] },
  }
}

export function normalizeFixedLightSources(value: unknown): FogFixedLightSource[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((item, index) => {
    const source = record(item)
    const position = record(source.position)
    if (typeof position.x !== 'number' || typeof position.y !== 'number') return []
    return [{ ...normalizeFogLightSource(source, `fixed-light-${index + 1}`), position: { x: position.x, y: position.y } }]
  }).slice(0, 256)
}

export function normalizeTokenLightSources(
  tokens: Array<{ id: string; position: { x: number; y: number }; lightConfig: unknown }>,
  grid: VttGridSettings,
): FogFixedLightSource[] {
  return tokens.flatMap((token) => {
    const light = normalizeFogLightSource(token.lightConfig, `token-light:${token.id}`)
    if (!light.enabled) return []
    return [{
      ...light,
      id: `token-light:${token.id}`,
      position: {
        x: token.position.x * grid.size + grid.offsetX,
        y: token.position.y * grid.size + grid.offsetY,
      },
    }]
  })
}
