export type ToolBindingSourceKind =
  | 'CATALOG_CONTENT'
  | 'CHARACTER_SHEET_ENTRY'
  | 'TOKEN_ACTION'

export type ToolBindingSource = {
  kind: ToolBindingSourceKind
  namespace: string
  id: string
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
    shape: 'CIRCLE' | 'CONE' | 'LINE' | 'ORTHOGONAL' | 'RING' | 'POLYGON'
    originMode: 'SOURCE_TOKEN' | 'FREE_POINT' | 'GRID_CELL' | 'GRID_INTERSECTION'
    placementMode: 'POINT' | 'DIRECTIONAL' | 'ATTACHED' | 'DRAWN'
    dimensions: {
      radius?: number
      innerRadius?: number
      length?: number
      width?: number
      startWidth?: number
      endWidth?: number
      angleDegrees?: number
      polygonPoints?: readonly { x: number; y: number }[]
    }
    propagationMode?: 'BLOCKED_BY_WALLS' | 'SPREAD_AROUND_WALLS' | 'IGNORE_WALLS'
    cellInclusionRule?: 'ANY_OVERLAP' | 'CENTER_INSIDE' | 'HALF_OR_MORE' | 'FULLY_INSIDE'
    tokenIntersectionRule?: 'ANY_OVERLAP' | 'CENTER_INSIDE' | 'HALF_OR_MORE' | 'FULLY_INSIDE' | 'COVERED_CELLS'
    includesOrigin?: boolean
    style?: {
      visualEffect?: TokenActionVisualEffect
      fillColor?: string
      borderColor?: string
      borderWidthPx?: number
      opacity?: number
      showCoveredCells?: boolean
      showOrigin?: boolean
      showDirectionLine?: boolean
      affectedTokenRing?: {
        color: string
        opacity: number
        thicknessPx: number
        gapPx: number
        pulse: boolean
      }
    }
    visibility?: 'MASTER_ONLY' | 'ALL_PLAYERS'
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

export type AreaEffectToolBindingConfiguration = {
  template: import('../area-templates/domain/types').AreaTemplateInput
  minimumTargets?: number
  maximumDistance?: number
  maximumOriginDistance?: number
}

export type TokenActionToolBindingPresentation = {
  toolKey: string
  defaultSource?: ToolBindingSource
  overrideSource?: ToolBindingSource
  effective?: {
    id: string
    source: ToolBindingSource
    schemaVersion: number
    configuration: AreaEffectToolBindingConfiguration
  }
}

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
  toolBinding?: TokenActionToolBindingPresentation
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
