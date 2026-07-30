import { useEffect, useState } from 'react'
import { useSession } from '../../contexts/session-context'
import { api } from '../../lib/api'
import type {
  TokenIdentityChangedPayload,
  TokenPresentation,
  TokenPresentationChangedPayload,
  TokenPresentationResponse,
} from './types'

type TokenPresentationState = {
  presentation: TokenPresentation | null
  available: boolean
  loading: boolean
  error: boolean
}

const emptyState: TokenPresentationState = {
  presentation: null,
  available: false,
  loading: false,
  error: false,
}

export function useTokenPresentation(
  campaignId: string | null | undefined,
  tokenId: string | null | undefined,
) {
  const { socket } = useSession()
  const [state, setState] = useState<TokenPresentationState>(emptyState)

  useEffect(() => {
    if (!campaignId || !tokenId) return
    const activeCampaignId = campaignId
    const activeTokenId = tokenId
    let active = true
    let requestSequence = 0

    async function load(reset = false) {
      const currentRequest = ++requestSequence
      if (reset) {
        setState({
          presentation: null,
          available: false,
          loading: true,
          error: false,
        })
      }

      try {
        const response = await api<TokenPresentationResponse>(
          `/api/campaigns/${encodeURIComponent(activeCampaignId)}/tokens/${encodeURIComponent(activeTokenId)}/presentation`,
        )
        if (!active || currentRequest !== requestSequence) return
        setState({
          presentation: response.available ? response.presentation : null,
          available: response.available,
          loading: false,
          error: false,
        })
      } catch {
        if (!active || currentRequest !== requestSequence) return
        setState((current) => ({
          ...current,
          loading: false,
          error: true,
        }))
      }
    }

    function onPresentationChanged(payload: TokenPresentationChangedPayload) {
      if (payload.campaignId !== activeCampaignId || payload.tokenId !== activeTokenId) return
      void load()
    }

    function onTokenChanged(payload: TokenIdentityChangedPayload) {
      if (payload.campaignId !== activeCampaignId || payload.token.id !== activeTokenId) return
      void load()
    }

    function onReconnect() {
      void load()
    }

    void load(true)
    socket?.on('vtt:token-presentation:changed', onPresentationChanged)
    socket?.on('vtt:token:changed', onTokenChanged)
    socket?.on('connect', onReconnect)

    return () => {
      active = false
      requestSequence += 1
      socket?.off('vtt:token-presentation:changed', onPresentationChanged)
      socket?.off('vtt:token:changed', onTokenChanged)
      socket?.off('connect', onReconnect)
    }
  }, [campaignId, socket, tokenId])

  if (!campaignId || !tokenId) return emptyState
  return state
}
