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
    let cancelled = false

    setState((current) => ({ ...current, loading: true, error: false }))

    api<TokenActorEffectsResponse>(
      `/api/campaigns/${encodeURIComponent(activeCampaignId)}/tokens/${encodeURIComponent(activeTokenId)}/actor-effects`,
    )
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
        if (cancelled) return
        setState({
          actorId: null,
          effects: [],
          loading: false,
          error: true,
        })
      })

    return () => {
      cancelled = true
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
