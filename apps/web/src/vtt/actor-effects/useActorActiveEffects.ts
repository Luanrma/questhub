import { useEffect, useState } from 'react'
import { useSession } from '../../contexts/session-context'
import { api, ApiError } from '../../lib/api'
import {
  subscribeLocalActorEffectsChanged,
  type LocalActorEffectsChangedPayload,
} from './localInvalidation'
import type { ActorEffectsChangedPayload, ActorEffectsResponse, ActorEffectView } from './types'

type ActorEffectsState = {
  effects: ActorEffectView[]
  loading: boolean
  error: string | null
}

const emptyState: ActorEffectsState = {
  effects: [],
  loading: false,
  error: null,
}

export function useActorActiveEffects(
  campaignId: string | null | undefined,
  actorId: string | null | undefined,
) {
  const { socket } = useSession()
  const [state, setState] = useState<ActorEffectsState>(emptyState)
  const [refreshVersion, setRefreshVersion] = useState(0)

  useEffect(() => {
    if (!campaignId || !actorId) {
      setState(emptyState)
      return
    }

    const activeCampaignId = campaignId
    const activeActorId = actorId
    let cancelled = false

    setState((current) => ({ ...current, loading: true, error: null }))

    api<ActorEffectsResponse>(
      `/api/campaigns/${encodeURIComponent(activeCampaignId)}/actors/${encodeURIComponent(activeActorId)}/effects`,
    )
      .then((response) => {
        if (cancelled) return
        setState({ effects: response.effects, loading: false, error: null })
      })
      .catch((cause) => {
        if (cancelled) return
        setState((current) => ({
          ...current,
          loading: false,
          error: cause instanceof ApiError ? cause.message : 'Não foi possível carregar os efeitos ativos.',
        }))
      })

    return () => {
      cancelled = true
    }
  }, [actorId, campaignId, refreshVersion])

  useEffect(() => {
    if (!campaignId || !actorId) return
    const activeCampaignId = campaignId
    const activeActorId = actorId

    function refresh() {
      setRefreshVersion((current) => current + 1)
    }

    function onEffectsChanged(payload: ActorEffectsChangedPayload) {
      if (payload.campaignId !== activeCampaignId || payload.actorId !== activeActorId) return
      refresh()
    }

    function onLocalEffectsChanged(payload: LocalActorEffectsChangedPayload) {
      if (payload.campaignId !== activeCampaignId || payload.actorId !== activeActorId) return
      refresh()
    }

    const unsubscribeLocal = subscribeLocalActorEffectsChanged(onLocalEffectsChanged)
    socket?.on('vtt:actor-effects:changed', onEffectsChanged)
    socket?.on('connect', refresh)

    return () => {
      unsubscribeLocal()
      socket?.off('vtt:actor-effects:changed', onEffectsChanged)
      socket?.off('connect', refresh)
    }
  }, [actorId, campaignId, socket])

  return {
    ...state,
    reload: () => setRefreshVersion((current) => current + 1),
  }
}
