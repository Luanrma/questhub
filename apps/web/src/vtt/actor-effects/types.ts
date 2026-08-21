export type ActorEffectPolarity = 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'

export type ActorEffectView = {
  id: string
  actorId: string
  namespace: string
  definitionKey: string | null
  name: string
  description: string | null
  iconUrl: string | null
  polarity: ActorEffectPolarity
  category: string | null
  displayValue: string | null
  schemaVersion: number
  payload: unknown | null
  origin: unknown | null
  createdAt: string
  updatedAt: string
}

export type ActorEffectsResponse = {
  actorId: string
  effects: ActorEffectView[]
}

export type ActorEffectPresentation = {
  iconUrl?: string | null
  originLabel?: string | null
  summary?: string | null
}

export type ActorEffectPresentationResolver = (
  effect: ActorEffectView,
) => ActorEffectPresentation | null

export type ActorEffectsChangedPayload = {
  campaignId: string
  actorId: string
}
