export type GameSystemCapability =
  | 'TOKEN_PRESENTATION'
  | 'TOKEN_RESOURCES'
  | 'TOKEN_INDICATORS'
  | 'TOKEN_ACTIONS'
  | 'AUTOMATED_ACTIONS'
  | 'AREA_EFFECTS'
  | 'INITIATIVE'
  | 'DAMAGE_APPLICATION'
  | 'CHARACTER_SHEET'

export type TokenPresentationVisibility =
  | 'PUBLIC'
  | 'OWNER_AND_MASTER'
  | 'MASTER_ONLY'

export type TokenResourcePresentation = {
  id: string
  slot: 'primary' | 'secondary' | 'tertiary'
  label?: string
  value: number
  maximum?: number
  temporary?: number
  presentation: 'bar' | 'number' | 'segments'
  visibility: TokenPresentationVisibility
  tone?: 'neutral' | 'positive' | 'warning' | 'critical'
}

export type TokenIndicatorPresentation = {
  id: string
  label: string
  value?: string | number
  visibility: TokenPresentationVisibility
  severity?: 'neutral' | 'positive' | 'warning' | 'critical'
}

export type TokenActionPresentation = {
  id: string
  label: string
  group: string
  detail?: string
  imageUrl?: string
  visibility: TokenPresentationVisibility
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

export type TokenPresentationChangedEvent = {
  campaignId: string
  tokenId: string
  sourceUserId?: string
}

export type GameSystemAutomationEventPublisher = {
  publishTokenPresentationChanged(
    event: TokenPresentationChangedEvent,
  ): Promise<void> | void
}

export type GameSystemCharacterSheetEntrySnapshot = {
  id: string
  namespace: string
  typeKey: string
  catalogNamespace: string | null
  catalogContentId: string | null
  schemaVersion: number
  data: unknown
  state: unknown | null
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export type GameSystemCharacterSheetSnapshot = {
  systemKey: string
  schemaVersion: number
  data: unknown
  updatedAt: Date
  entries?: readonly GameSystemCharacterSheetEntrySnapshot[]
}

export type GameSystemTokenPresentationContext = {
  campaignId: string
  tokenId: string
  characterSheet: GameSystemCharacterSheetSnapshot | null
  viewer: {
    userId: string
    role: 'MASTER' | 'PLAYER'
    controlsToken: boolean
  }
}

export type GameSystemTokenPresentationProvider = {
  readonly systemKey: string
  readonly capabilities: readonly GameSystemCapability[]
  buildTokenPresentation(
    context: GameSystemTokenPresentationContext,
  ): Promise<TokenPresentation> | TokenPresentation
}
