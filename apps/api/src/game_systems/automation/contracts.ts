export type GameSystemCapability =
  | 'TOKEN_PRESENTATION'
  | 'TOKEN_RESOURCES'
  | 'TOKEN_INDICATORS'
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
  visibility: TokenPresentationVisibility
  interaction?: 'instant' | 'target' | 'area' | 'roll'
}

export type TokenPresentation = {
  tokenId: string
  revision: string
  resources: readonly TokenResourcePresentation[]
  indicators: readonly TokenIndicatorPresentation[]
  actions: readonly TokenActionPresentation[]
}

export type GameSystemCharacterSheetSnapshot = {
  systemKey: string
  schemaVersion: number
  data: unknown
  updatedAt: Date
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
