export type SceneFogConfig = {
  enabled: boolean
  darkness: boolean
  playerFog: {
    unexploredOpacity: number
    exploredOpacity: number
    softEdge: boolean
  }
  masterFog: {
    defaultMode: 'TRANSLUCENT'
    translucentOpacity: number
  }
}

export type TokenVisionConfig = { rangeMeters: number }

export type FogLightSourceConfig = {
  id: string
  enabled: boolean
  rangeMeters: number
  permission: { allowedControllerMemberIds: string[] }
}

export type FogFixedLightSource = FogLightSourceConfig & { position: { x: number; y: number } }

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

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

function clamp(value: unknown, minimum: number, maximum: number, fallback: number) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return fallback
  return Math.min(maximum, Math.max(minimum, value))
}

export function normalizeSceneFogConfig(value: unknown): SceneFogConfig {
  if (!isRecord(value)) return structuredClone(defaultSceneFogConfig)
  const playerFog = isRecord(value.playerFog) ? value.playerFog : {}
  const masterFog = isRecord(value.masterFog) ? value.masterFog : {}
  return {
    enabled: Boolean(value.enabled),
    darkness: Boolean(value.darkness),
    playerFog: {
      unexploredOpacity: clamp(playerFog.unexploredOpacity, 0, 1, 1),
      exploredOpacity: clamp(playerFog.exploredOpacity, 0, 1, 0.5),
      softEdge: playerFog.softEdge !== false,
    },
    masterFog: {
      defaultMode: 'TRANSLUCENT',
      translucentOpacity: clamp(masterFog.translucentOpacity, 0, 1, 0.25),
    },
  }
}

export function normalizeTokenVisionConfig(value: unknown): TokenVisionConfig {
  if (!isRecord(value)) return structuredClone(defaultTokenVisionConfig)
  const legacyRange = typeof value.normalRangeMeters === 'number' ? value.normalRangeMeters / 2 : undefined
  return { rangeMeters: clamp(value.rangeMeters ?? legacyRange, 0.5, 1000, 10) }
}

export function normalizeFogLightSource(value: unknown, fallbackId: string): FogLightSourceConfig {
  if (!isRecord(value)) return { ...structuredClone(defaultTokenLightConfig), id: fallbackId }
  const permission = isRecord(value.permission) ? value.permission : {}
  const allowed = Array.isArray(permission.allowedControllerMemberIds)
    ? [...new Set(permission.allowedControllerMemberIds.filter((item): item is string => typeof item === 'string' && item.length > 0))].slice(0, 100)
    : []
  return {
    id: typeof value.id === 'string' && value.id.trim() ? value.id.trim().slice(0, 200) : fallbackId,
    enabled: Boolean(value.enabled),
    rangeMeters: clamp(value.rangeMeters, 0.5, 1000, 20),
    permission: { allowedControllerMemberIds: allowed },
  }
}

export function normalizeFixedLightSources(value: unknown): FogFixedLightSource[] {
  if (!Array.isArray(value)) return []
  return value.slice(0, 256).flatMap((item, index) => {
    if (!isRecord(item) || !isRecord(item.position)) return []
    const x = item.position.x
    const y = item.position.y
    if (typeof x !== 'number' || !Number.isFinite(x) || x < 0) return []
    if (typeof y !== 'number' || !Number.isFinite(y) || y < 0) return []
    return [{ ...normalizeFogLightSource(item, `fixed-light-${index + 1}`), position: { x, y } }]
  })
}
