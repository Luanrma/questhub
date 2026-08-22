import { useEffect, useState } from 'react'
import { useSession } from '../../contexts/session-context'
import { api } from '../../lib/api'
import type { TokenIdentityChangedPayload } from '../token-presentation/types'
import {
  subscribeLocalActorEffectsChanged,
  type LocalActorEffectsChangedPayload,
} from './localInvalidation'
import type { ActorEffectsChangedPayload, ActorEffectView } from './types'

type TokenActorEffectsResponse = {
  tokenId: string
  actorId: string | null
  effects: ActorEffectView[]
}

type CanonicalEffectPresentation = {
  definitionKey: string
  name: string
  description: string
  iconUrl: string | null
  polarity: ActorEffectView['polarity']
  category: string
}

type CanonicalEffectPresentationsResponse = {
  presentations: CanonicalEffectPresentation[]
}

type TokenActiveEffectsState = {
  actorId: string | null
  effects: ActorEffectView[]
  loading: boolean
  error: boolean
}

const emptyState: TokenActiveEffectsState = {
  actorId: null,
  effects: [],
  loading: false,
  error: false,
}

async function localizeCanonicalEffects(
  campaignId: string,
  effects: ActorEffectView[],
  signal: AbortSignal,
) {
  const definitionKeys = [...new Set(
    effects
      .map((effect) => effect.definitionKey)
      .filter((key): key is string => Boolean(key)),
  )]
  if (!definitionKeys.length) return effects

  try {
    const response = await api<CanonicalEffectPresentationsResponse>(
      `/api/campaigns/${encodeURIComponent(campaignId)}/game-system-effects/presentations?definitionKeys=${encodeURIComponent(definitionKeys.join(','))}&locale=pt-BR`,
      { signal },
    )
    const presentations = new Map(
      response.presentations.map((presentation) => [presentation.definitionKey, presentation]),
    )

    return effects.map((effect) => {
      if (!effect.definitionKey) return effect
      const presentation = presentations.get(effect.definitionKey)
      if (!presentation) return effect
      return {
        ...effect,
        name: presentation.name,
        description: presentation.description || null,
        iconUrl: presentation.iconUrl ?? effect.iconUrl,
        polarity: presentation.polarity,
        category: presentation.category,
      }
    })
  } catch (cause) {
    if (signal.aborted) throw cause
    // Enrichment is presentation-only. A generic Actor Effect remains readable if a
    // game-system presentation provider is unavailable for this campaign.
    return effects
  }
}

export function useTokenActiveEffects(
  campaignId: string | null | undefined,
  tokenId: string | null | undefined,
) {
  const { socket } = useSession()
  const [state, setState] = useState<TokenActiveEffectsState>(emptyState)
  const [refreshVersion, setRefreshVersion] = useState(0)

  useEffect(() => {
    if (!campaignId || !tokenId) {
      setState(emptyState)
      return
    }

    const activeCampaignId = campaignId
    const activeTokenId = tokenId
    const controller = new AbortController()
    let cancelled = false

    setState((current) => ({ ...current, loading: true, error: false }))

    api<TokenActorEffectsResponse>(
      `/api/campaigns/${encodeURIComponent(activeCampaignId)}/tokens/${encodeURIComponent(activeTokenId)}/actor-effects`,
      { signal: controller.signal },
    )
      .then(async (response) => ({
        ...response,
        effects: await localizeCanonicalEffects(activeCampaignId, response.effects, controller.signal),
      }))
      .then((response) => {
        if (cancelled) return
        setState({
          actorId: response.actorId,
          effects: response.effects,
          loading: false,
          error: false,
        })
      })
      .catch(() => {
        if (cancelled || controller.signal.aborted) return
        setState({
          actorId: null,
          effects: [],
          loading: false,
          error: true,
        })
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [campaignId, refreshVersion, tokenId])

  useEffect(() => {
    if (!campaignId || !tokenId) return
    const activeCampaignId = campaignId
    const activeTokenId = tokenId

    function refresh() {
      setRefreshVersion((current) => current + 1)
    }

    function matchesActor(payload: ActorEffectsChangedPayload | LocalActorEffectsChangedPayload) {
      if (payload.campaignId !== activeCampaignId) return false
      return !state.actorId || payload.actorId === state.actorId
    }

    function onEffectsChanged(payload: ActorEffectsChangedPayload) {
      if (!matchesActor(payload)) return
      refresh()
    }

    function onLocalEffectsChanged(payload: LocalActorEffectsChangedPayload) {
      if (!matchesActor(payload)) return
      refresh()
    }

    function onTokenChanged(payload: TokenIdentityChangedPayload) {
      if (payload.campaignId !== activeCampaignId || payload.token.id !== activeTokenId) return
      refresh()
    }

    const unsubscribeLocal = subscribeLocalActorEffectsChanged(onLocalEffectsChanged)
    socket?.on('vtt:actor-effects:changed', onEffectsChanged)
    socket?.on('vtt:token:changed', onTokenChanged)
    socket?.on('connect', refresh)

    return () => {
      unsubscribeLocal()
      socket?.off('vtt:actor-effects:changed', onEffectsChanged)
      socket?.off('vtt:token:changed', onTokenChanged)
      socket?.off('connect', refresh)
    }
  }, [campaignId, socket, state.actorId, tokenId])

  return state
}
