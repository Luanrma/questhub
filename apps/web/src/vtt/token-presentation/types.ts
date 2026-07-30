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
