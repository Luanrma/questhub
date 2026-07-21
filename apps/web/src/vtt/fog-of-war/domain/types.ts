export type MasterFogViewMode = 'FULL' | 'TRANSLUCENT' | 'TOKEN_PREVIEW'

export type SceneFogConfig = {
  enabled: boolean
  darkness: boolean
  playerFog: { unexploredOpacity: number; exploredOpacity: number; softEdge: boolean }
  masterFog: { defaultMode: 'TRANSLUCENT'; translucentOpacity: number }
}

export type TokenVisionConfig = {
  rangeMeters: number
}

export type FogLightSourceConfig = {
  id: string
  enabled: boolean
  rangeMeters: number
  permission: { allowedControllerMemberIds: string[] }
}

export type FogFixedLightSource = FogLightSourceConfig & { position: { x: number; y: number } }

export type FogExplorationSnapshot = {
  revision: number
  width: number
  height: number
  mask: Uint8Array
}
