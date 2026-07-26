export type CharacterSheetDerivation<TDerived> = {
  derived: TDerived
  warnings: readonly string[]
}

export interface CharacterSheetRuntimeAdapter<TData, TDerived> {
  readonly systemKey: string
  readonly schemaVersion: number

  createDefault(): TData
  migrate(input: unknown): unknown
  parse(input: unknown): TData
  derive(data: TData): CharacterSheetDerivation<TDerived>
}

export type CharacterSheetRuntimeResult<TData, TDerived> = {
  systemKey: string
  schemaVersion: number
  data: TData
  derived: TDerived
  warnings: readonly string[]
}

export type AreaTemplateShape = 'circle' | 'cone' | 'line' | 'rectangle' | 'polygon'

export type GameSystemInteractionRequest =
  | {
      type: 'PLACE_AREA_TEMPLATE'
      interactionId: string
      shape: AreaTemplateShape
      dimensions: Readonly<Record<string, number>>
      maximumDistance?: number
      payload?: unknown
    }
  | {
      type: 'SELECT_TOKENS'
      interactionId: string
      minimum: number
      maximum?: number
      payload?: unknown
    }
  | {
      type: 'REQUEST_ROLL'
      interactionId: string
      formula: string
      label: string
      payload?: unknown
    }

export type GameSystemVisualInstruction =
  | { type: 'TOKEN_HIGHLIGHT'; tokenId: string; payload?: unknown }
  | { type: 'AREA_ANIMATION'; templateId: string; payload?: unknown }

export type GameSystemResolutionPlan = {
  actionId: string
  interactions?: readonly GameSystemInteractionRequest[]
  visuals?: readonly GameSystemVisualInstruction[]
  mutations?: readonly unknown[]
  messages?: readonly unknown[]
}
