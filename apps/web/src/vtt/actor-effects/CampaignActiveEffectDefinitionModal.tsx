import { useEffect, useMemo, useState } from 'react'
import { api, ApiError } from '../../lib/api'
import { CAMPAIGN_USER_SETTINGS_CHANGED_EVENT } from '../dice-roller/infrastructure/storage/diceThemeStorage'
import { normalizeActorEffectPresentationText } from './presentationText'
import {
  ActiveEffectDefinitionModal,
  type ActiveEffectDefinitionLocale,
  type ActiveEffectDefinitionLocalization,
  type ActiveEffectDefinitionTag,
} from './ActiveEffectDefinitionModal'
import type { ActorEffectView } from './types'

type Presentation = {
  definitionKey: string
  headerLabel: string
  name: string
  description: string
  descriptionBlocks: readonly string[]
  iconUrl: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  tags: readonly ActiveEffectDefinitionTag[]
  sourceLabel: string | null
  localization: ActiveEffectDefinitionLocalization
  supportedLocales: readonly ActiveEffectDefinitionLocale[]
}

type Response = {
  gameSystem: string
  locale: ActiveEffectDefinitionLocale
  presentation: Presentation
}

type Props = {
  campaignId?: string
  effect: ActorEffectView
  onClose: () => void
}

function fallbackPolarityLabel(effect: ActorEffectView) {
  if (effect.polarity === 'HARMFUL') return 'Prejudicial'
  if (effect.polarity === 'BENEFICIAL') return 'Benéfico'
  return 'Neutro'
}

function fallbackTags(effect: ActorEffectView): ActiveEffectDefinitionTag[] {
  const tags: ActiveEffectDefinitionTag[] = []
  if (effect.category) tags.push({ label: effect.category })
  tags.push({
    label: fallbackPolarityLabel(effect),
    tone: effect.polarity === 'HARMFUL'
      ? 'harmful'
      : effect.polarity === 'BENEFICIAL'
        ? 'beneficial'
        : 'neutral',
  })
  if (effect.displayValue) tags.push({ label: `Valor ${effect.displayValue}`, tone: 'accent' })
  return tags
}

export function CampaignActiveEffectDefinitionModal({ campaignId, effect, onClose }: Props) {
  const [localeOverride, setLocaleOverride] = useState<ActiveEffectDefinitionLocale | null>(null)
  const [resolvedLocale, setResolvedLocale] = useState<ActiveEffectDefinitionLocale>('pt-BR')
  const [presentation, setPresentation] = useState<Presentation | null>(null)
  const [loading, setLoading] = useState(Boolean(campaignId && effect.definitionKey))
  const [error, setError] = useState<string | null>(null)
  const [settingsRevision, setSettingsRevision] = useState(0)
  const canonical = Boolean(campaignId && effect.definitionKey)
  const locale = localeOverride ?? resolvedLocale

  useEffect(() => {
    setLocaleOverride(null)
    setResolvedLocale('pt-BR')
    setPresentation(null)
    setError(null)
  }, [effect.id])

  useEffect(() => {
    if (!campaignId || !effect.definitionKey) {
      setLoading(false)
      return
    }

    const controller = new AbortController()
    setLoading(true)
    setError(null)
    const basePath = `/api/campaigns/${encodeURIComponent(campaignId)}/game-system-effects/definitions/${encodeURIComponent(effect.definitionKey)}`
    const requestPath = localeOverride
      ? `${basePath}?locale=${encodeURIComponent(localeOverride)}`
      : basePath

    api<Response>(requestPath, { signal: controller.signal })
      .then((response) => {
        setPresentation(response.presentation)
        setResolvedLocale(response.locale)
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setPresentation(null)
        setError(cause instanceof ApiError ? cause.message : 'Não foi possível carregar a definição canônica deste efeito.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [campaignId, effect.definitionKey, localeOverride, settingsRevision])

  useEffect(() => {
    if (!campaignId || localeOverride) return

    function onCampaignSettingsChanged(event: Event) {
      const detail = (event as CustomEvent<{ campaignId?: string }>).detail
      if (detail?.campaignId === campaignId) setSettingsRevision((current) => current + 1)
    }

    window.addEventListener(CAMPAIGN_USER_SETTINGS_CHANGED_EVENT, onCampaignSettingsChanged)
    return () => window.removeEventListener(CAMPAIGN_USER_SETTINGS_CHANGED_EVENT, onCampaignSettingsChanged)
  }, [campaignId, localeOverride])

  const fallbackDescription = useMemo(() => {
    const normalized = normalizeActorEffectPresentationText(effect.description)
    return normalized
      ? normalized.split(/\n{2,}|\n/).map((block) => block.trim()).filter(Boolean)
      : []
  }, [effect.description])

  const useFallback = !presentation

  return (
    <ActiveEffectDefinitionModal
      title={presentation?.name ?? effect.name}
      headerLabel={presentation?.headerLabel ?? (canonical ? 'Definição do efeito' : 'Detalhes do efeito')}
      descriptionBlocks={presentation?.descriptionBlocks ?? fallbackDescription}
      iconUrl={presentation?.iconUrl ?? effect.iconUrl}
      polarity={presentation?.polarity ?? effect.polarity}
      tags={presentation?.tags ?? fallbackTags(effect)}
      sourceLabel={presentation?.sourceLabel ?? null}
      locale={locale}
      localization={presentation?.localization ?? null}
      localeEnabled={canonical}
      loading={loading && useFallback}
      error={error}
      onLocaleChange={setLocaleOverride}
      onClose={onClose}
    />
  )
}
