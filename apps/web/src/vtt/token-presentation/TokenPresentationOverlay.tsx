import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSession } from '../../contexts/SessionContext'
import { api } from '../../lib/api'
import type {
  TokenIndicatorPresentation,
  TokenPresentation,
  TokenPresentationChangedPayload,
  TokenPresentationResponse,
  TokenResourcePresentation,
} from './types'

function resourceFillClass(resource: TokenResourcePresentation) {
  if (resource.tone === 'critical') return 'bg-rose-500'
  if (resource.tone === 'warning') return 'bg-amber-400'
  if (resource.tone === 'positive') return 'bg-emerald-400'

  const maximum = resource.maximum ?? 0
  if (maximum <= 0) return 'bg-sky-400'
  const ratio = resource.value / maximum
  if (ratio <= 0.25) return 'bg-rose-500'
  if (ratio <= 0.5) return 'bg-amber-400'
  return 'bg-emerald-400'
}

function indicatorClass(indicator: TokenIndicatorPresentation) {
  if (indicator.severity === 'critical') return 'border-rose-300/60 bg-rose-950/90 text-rose-100'
  if (indicator.severity === 'warning') return 'border-amber-300/60 bg-amber-950/90 text-amber-100'
  if (indicator.severity === 'positive') return 'border-emerald-300/60 bg-emerald-950/90 text-emerald-100'
  return 'border-zinc-300/40 bg-zinc-950/90 text-zinc-100'
}

function ResourceBar({ resource }: { resource: TokenResourcePresentation }) {
  const maximum = Math.max(0, resource.maximum ?? 0)
  const current = Math.max(0, resource.value)
  const percentage = maximum > 0 ? Math.min(100, (current / maximum) * 100) : 0
  const temporary = Math.max(0, resource.temporary ?? 0)
  const title = [
    resource.label,
    maximum > 0 ? `${current}/${maximum}` : String(current),
    temporary > 0 ? `+${temporary}` : null,
  ].filter(Boolean).join(' ')

  return (
    <div title={title} className="relative h-2 overflow-hidden rounded-full border border-black/80 bg-zinc-950/90 shadow-lg">
      <div className={`h-full transition-[width] duration-200 ${resourceFillClass(resource)}`} style={{ width: `${percentage}%` }} />
      {temporary > 0 && maximum > 0 ? (
        <div
          className="absolute bottom-0 top-0 border-l border-white/70 bg-sky-300/70"
          style={{
            left: `${percentage}%`,
            width: `${Math.min(100 - percentage, (temporary / maximum) * 100)}%`,
          }}
        />
      ) : null}
    </div>
  )
}

export function TokenPresentationOverlay({
  tokenId,
  left,
  top,
  size,
}: {
  tokenId: string
  left: number
  top: number
  size: number
}) {
  const { campaignId } = useParams()
  const { socket } = useSession()
  const [presentation, setPresentation] = useState<TokenPresentation | null>(null)

  useEffect(() => {
    if (!campaignId) {
      setPresentation(null)
      return
    }
    const activeCampaignId = campaignId

    let active = true
    let requestSequence = 0

    async function load() {
      const currentRequest = ++requestSequence
      try {
        const response = await api<TokenPresentationResponse>(
          `/api/campaigns/${encodeURIComponent(activeCampaignId)}/tokens/${encodeURIComponent(tokenId)}/presentation`,
        )
        if (active && currentRequest === requestSequence) {
          setPresentation(response.available ? response.presentation : null)
        }
      } catch {
        // A projection is an enhancement of the board. Keep the last valid value on transient failures.
      }
    }

    function onPresentationChanged(payload: TokenPresentationChangedPayload) {
      if (payload.campaignId !== activeCampaignId || payload.tokenId !== tokenId) return
      void load()
    }

    function onReconnect() {
      void load()
    }

    void load()
    socket?.on('vtt:token-presentation:changed', onPresentationChanged)
    socket?.on('connect', onReconnect)

    return () => {
      active = false
      requestSequence += 1
      socket?.off('vtt:token-presentation:changed', onPresentationChanged)
      socket?.off('connect', onReconnect)
    }
  }, [campaignId, socket, tokenId])

  const resources = useMemo(
    () => presentation?.resources.filter((resource) => resource.presentation === 'bar') ?? [],
    [presentation],
  )
  const indicators = presentation?.indicators ?? []
  if (!resources.length && !indicators.length) return null

  const overlayWidth = Math.max(48, size)
  const overlayLeft = left + (size - overlayWidth) / 2

  return (
    <div className="pointer-events-none absolute z-[9]" style={{ left: overlayLeft, top, width: overlayWidth }}>
      {indicators.length ? (
        <div className="absolute bottom-full left-1/2 mb-1 flex max-w-[180px] -translate-x-1/2 flex-wrap justify-center gap-1">
          {indicators.map((indicator) => (
            <span
              key={indicator.id}
              className={`whitespace-nowrap rounded border px-1.5 py-0.5 text-[9px] font-bold leading-none shadow-lg ${indicatorClass(indicator)}`}
            >
              {indicator.label}{indicator.value !== undefined ? ` ${indicator.value}` : ''}
            </span>
          ))}
        </div>
      ) : null}
      <div className="grid gap-1">
        {resources.map((resource) => <ResourceBar key={resource.id} resource={resource} />)}
      </div>
    </div>
  )
}
