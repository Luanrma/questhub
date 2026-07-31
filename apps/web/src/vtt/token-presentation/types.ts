export type TokenResourcePresentation = {
  id: string
  slot: 'primary' | 'secondary' | 'tertiary'
  label?: string
  value: number
  maximum?: number
  temporary?: number
  presentation: 'bar' | 'number' | 'segments'
  visibility: 'PUBLIC' | 'OWNER_AND_MASTER' | 'MASTER_ONLY'
  tone?: 'neutral' | 'positive' | 'warning' | 'critical'
}

export type TokenIndicatorPresentation = {
  id: string
  label: string
  value?: string | number
  visibility: 'PUBLIC' | 'OWNER_AND_MASTER' | 'MASTER_ONLY'
  severity?: 'neutral' | 'positive' | 'warning' | 'critical'
}

export type TokenActionVisualEffect =
  | 'DEFAULT'
  | 'FIRE'
  | 'ELECTRIC'
  | 'HEALING'
  | 'EARTH'
  | 'VINES'
  | 'LEAVES'

export type TokenActionTargetSelectionActivation = {
  kind: 'TARGET_SELECTION'
  minimumTargets: number
  maximumTargets: number
  maximumDistance?: number
  visualEffect?: TokenActionVisualEffect
}

export type TokenActionAreaPlacementActivation = {
  kind: 'AREA_PLACEMENT'
  maximumOriginDistance?: number
  template: {
    shape: 'CIRCLE' | 'CONE' | 'LINE'
    originMode: 'SOURCE_TOKEN' | 'FREE_POINT'
    placementMode: 'POINT' | 'DIRECTIONAL'
    dimensions: {
      radius?: number
      length?: number
      width?: number
      startWidth?: number
      endWidth?: number
      angleDegrees?: number
    }
    visualEffect?: TokenActionVisualEffect
  }
}

export type TokenActionSpatialActivation =
  | TokenActionTargetSelectionActivation
  | TokenActionAreaPlacementActivation

export type TokenActionActivation =
  | TokenActionSpatialActivation
  | {
      kind: 'VARIANTS'
      variants: readonly {
        id: string
        label: string
        activation: TokenActionSpatialActivation
      }[]
    }

export type TokenActionPresentation = {
  id: string
  label: string
  group: string
  detail?: string
  imageUrl?: string
  visibility: 'PUBLIC' | 'OWNER_AND_MASTER' | 'MASTER_ONLY'
  interaction?: 'instant' | 'target' | 'area' | 'roll'
  contexts: readonly ('ENCOUNTER' | 'REFERENCE')[]
  activation?: TokenActionActivation
}

export type TokenPresentation = {
  tokenId: string
  revision: string
  resources: readonly TokenResourcePresentation[]
  indicators: readonly TokenIndicatorPresentation[]
  actions: readonly TokenActionPresentation[]
}

export type TokenPresentationResponse = {
  available: boolean
  capabilities: readonly string[]
  presentation: TokenPresentation | null
}

export type TokenPresentationChangedPayload = {
  campaignId: string
  tokenId: string
}

export type TokenIdentityChangedPayload = {
  campaignId: string
  token: {
    id: string
  }
}
