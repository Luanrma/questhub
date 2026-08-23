import { useEffect, useMemo, useState } from 'react'
import { api } from '../../lib/api'
import { CAMPAIGN_USER_SETTINGS_CHANGED_EVENT } from '../dice-roller/infrastructure/storage/diceThemeStorage'
import type { ActorEffectPolarity, ActorEffectView } from './types'

export type CanonicalActorEffectPresentation = {
  definitionKey: string
  name: string
  iconUrl: string | null
  polarity: ActorEffectPolarity
  category: string | null
  localization: {
    requestedLocale: 'pt-BR' | 'en-US'
    nameLocale: 'pt-BR' | 'en-US'
    descriptionLocale: 'pt-BR' | 'en-US'
  }
}

type PresentationsResponse = {
  locale: 'pt-BR' | 'en-US'
  presentations: CanonicalActorEffectPresentation[]
}

const MAX_DEFINITIONS_PER_REQUEST = 100

function chunks<T>(items: readonly T[], size: number) {
  const result: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size))
  }
  return result
}

export function useCanonicalActorEffectPresentations(
  campaignId: string | null | undefined,
  effects: readonly ActorEffectView[],
) {
  const definitionKeys = useMemo(
    () => [...new Set(
      effects.flatMap((effect) => effect.definitionKey ? [effect.definitionKey] : []),
    )].sort(),
    [effects],
  )
  const keySignature = definitionKeys.join(',')
  const [presentations, setPresentations] = useState<Readonly<Record<string, CanonicalActorEffectPresentation>>>({})
  const [revision, setRevision] = useState(0)

  useEffect(() => {
    if (!campaignId || !keySignature) {
      setPresentations({})
      return
    }

    let cancelled = false
    const batches = chunks(definitionKeys, MAX_DEFINITIONS_PER_REQUEST)

    void Promise.all(batches.map((batch) => {
      const params = new URLSearchParams({ definitionKeys: batch.join(',') })
      return api<PresentationsResponse>(
        `/api/campaigns/${encodeURIComponent(campaignId)}/game-system-effects/presentations?${params.toString()}`,
      )
    }))
      .then((responses) => {
        if (cancelled) return
        const next = Object.fromEntries(
          responses.flatMap((response) => response.presentations)
            .map((presentation) => [presentation.definitionKey, presentation] as const),
        )
        setPresentations(next)
      })
      .catch(() => {
        if (!cancelled) setPresentations({})
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, definitionKeys, keySignature, revision])

  useEffect(() => {
    if (!campaignId) return

    function onCampaignSettingsChanged(event: Event) {
      const detail = (event as CustomEvent<{ campaignId?: string }>).detail
      if (detail?.campaignId !== campaignId) return
      setRevision((current) => current + 1)
    }

    window.addEventListener(CAMPAIGN_USER_SETTINGS_CHANGED_EVENT, onCampaignSettingsChanged)
    return () => window.removeEventListener(CAMPAIGN_USER_SETTINGS_CHANGED_EVENT, onCampaignSettingsChanged)
  }, [campaignId])

  return presentations
}
