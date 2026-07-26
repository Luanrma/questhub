import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { api, ApiError } from '../lib/api'
import type { GameSystemKey } from './registry'

type CampaignSystemResponse = {
  gameSystem: GameSystemKey
  descriptor: {
    characterSheetPathSegment: string
  }
}

export function CampaignCharacterSheetRedirectPage() {
  const { campaignId, characterId } = useParams()
  const [destination, setDestination] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!campaignId || !characterId) {
      setError('Campanha ou personagem inválido.')
      return
    }

    let cancelled = false
    api<CampaignSystemResponse>(`/api/campaigns/${campaignId}/game-system`)
      .then((response) => {
        if (cancelled) return
        const query = new URLSearchParams({ campaignId })
        setDestination(
          `/characters/${characterId}/${response.descriptor.characterSheetPathSegment}?${query.toString()}`,
        )
      })
      .catch((cause) => {
        if (cancelled) return
        setError(cause instanceof ApiError ? cause.message : 'Não foi possível localizar a ficha do sistema.')
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, characterId])

  if (destination) return <Navigate to={destination} replace />

  return (
    <div className="mx-auto mt-12 max-w-xl rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
      {error ?? 'Localizando a ficha do sistema...'}
    </div>
  )
}
