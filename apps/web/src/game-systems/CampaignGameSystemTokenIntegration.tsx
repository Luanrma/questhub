import { useEffect } from 'react'
import { api } from '../lib/api'
import {
  campaignTokenActionRequestedEvent,
  campaignTokenCapabilitiesRequestedEvent,
  campaignTokenLibraryChangedEvent,
  publishCampaignTokenActionResult,
  publishCampaignTokenCapabilities,
  notifyCampaignTokenLibraryChanged,
  type CampaignTokenActionRequest,
  type CampaignTokenLibraryChanged,
} from '../lib/campaign-token-library-events'

type Props = {
  campaignId: string
  enabled: boolean
}

type TokenCapabilitiesResponse = {
  tokens: Array<{
    tokenId: string
    actions: ['duplicate']
  }>
}

export function CampaignGameSystemTokenIntegration({ campaignId, enabled }: Props) {
  useEffect(() => {
    if (!enabled) {
      publishCampaignTokenCapabilities({ campaignId, tokens: [] })
      return
    }

    let cancelled = false

    async function loadCapabilities() {
      try {
        const response = await api<TokenCapabilitiesResponse>(
          `/api/campaigns/${encodeURIComponent(campaignId)}/game-system/token-capabilities`,
        )
        if (!cancelled) publishCampaignTokenCapabilities({ campaignId, tokens: response.tokens })
      } catch {
        if (!cancelled) publishCampaignTokenCapabilities({ campaignId, tokens: [] })
      }
    }

    function onLibraryChanged(event: Event) {
      const detail = (event as CustomEvent<CampaignTokenLibraryChanged>).detail
      if (detail?.campaignId === campaignId) void loadCapabilities()
    }

    async function onActionRequested(event: Event) {
      const detail = (event as CustomEvent<CampaignTokenActionRequest>).detail
      if (!detail || detail.campaignId !== campaignId || detail.action !== 'duplicate') return

      try {
        await api(
          `/api/campaigns/${encodeURIComponent(campaignId)}/game-system/tokens/${encodeURIComponent(detail.tokenId)}/duplicate`,
          { method: 'POST' },
        )
        if (cancelled) return
        publishCampaignTokenActionResult({ ...detail, ok: true })
        notifyCampaignTokenLibraryChanged(campaignId)
      } catch (cause) {
        if (cancelled) return
        publishCampaignTokenActionResult({
          ...detail,
          ok: false,
          error: cause instanceof Error ? cause.message : 'Nao foi possivel duplicar o Token.',
        })
      }
    }

    void loadCapabilities()
    window.addEventListener(campaignTokenLibraryChangedEvent, onLibraryChanged)
    window.addEventListener(campaignTokenCapabilitiesRequestedEvent, onLibraryChanged)
    window.addEventListener(campaignTokenActionRequestedEvent, onActionRequested)
    return () => {
      cancelled = true
      window.removeEventListener(campaignTokenLibraryChangedEvent, onLibraryChanged)
      window.removeEventListener(campaignTokenCapabilitiesRequestedEvent, onLibraryChanged)
      window.removeEventListener(campaignTokenActionRequestedEvent, onActionRequested)
    }
  }, [campaignId, enabled])

  return null
}
