import { CAMPAIGN_USER_SETTINGS_CHANGED_EVENT } from '../../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'

export type Pathfinder2eDisplaySettings = {
  contentLocale: 'pt-BR' | 'en-US'
}

export const PATHFINDER2E_DISPLAY_SETTINGS_CHANGED_EVENT =
  'questhub:pathfinder2e-display-settings-changed'

function campaignUserSettingsStorageKey(campaignId: string) {
  return `questhub:campaign-user-settings:${campaignId}`
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

export function normalizePathfinder2eDisplaySettings(
  value: unknown,
): Pathfinder2eDisplaySettings {
  if (!isRecord(value)) return { contentLocale: 'pt-BR' }
  return {
    contentLocale: value.contentLocale === 'en-US' ? 'en-US' : 'pt-BR',
  }
}

function readStoredRecord(campaignId: string) {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(campaignUserSettingsStorageKey(campaignId))
    const parsed: unknown = raw ? JSON.parse(raw) : {}
    return isRecord(parsed) ? parsed : {}
  } catch {
    return {}
  }
}

export function readStoredPathfinder2eDisplaySettings(campaignId: string) {
  return normalizePathfinder2eDisplaySettings(readStoredRecord(campaignId).pathfinder2e)
}

export function storePathfinder2eDisplaySettings(
  campaignId: string,
  settings: unknown,
) {
  if (typeof window === 'undefined') return
  const normalized = normalizePathfinder2eDisplaySettings(settings)

  try {
    const current = readStoredRecord(campaignId)
    window.localStorage.setItem(
      campaignUserSettingsStorageKey(campaignId),
      JSON.stringify({ ...current, pathfinder2e: normalized }),
    )
    window.dispatchEvent(new CustomEvent(PATHFINDER2E_DISPLAY_SETTINGS_CHANGED_EVENT, {
      detail: { campaignId, settings: normalized },
    }))
  } catch {
    // Preferência pessoal: falha de storage não deve bloquear a ficha.
  }
}

export function subscribeToPathfinder2eDisplaySettings(
  campaignId: string,
  listener: (settings: Pathfinder2eDisplaySettings) => void,
) {
  function onPathfinderSettingsChanged(event: Event) {
    const detail = (event as CustomEvent<{
      campaignId: string
      settings: Pathfinder2eDisplaySettings
    }>).detail
    if (detail?.campaignId === campaignId) listener(detail.settings)
  }

  function onCampaignSettingsChanged(event: Event) {
    const detail = (event as CustomEvent<{
      campaignId: string
      settings: Record<string, unknown>
    }>).detail
    if (detail?.campaignId !== campaignId) return
    listener(normalizePathfinder2eDisplaySettings(detail.settings.pathfinder2e))
  }

  window.addEventListener(
    PATHFINDER2E_DISPLAY_SETTINGS_CHANGED_EVENT,
    onPathfinderSettingsChanged,
  )
  window.addEventListener(
    CAMPAIGN_USER_SETTINGS_CHANGED_EVENT,
    onCampaignSettingsChanged,
  )

  return () => {
    window.removeEventListener(
      PATHFINDER2E_DISPLAY_SETTINGS_CHANGED_EVENT,
      onPathfinderSettingsChanged,
    )
    window.removeEventListener(
      CAMPAIGN_USER_SETTINGS_CHANGED_EVENT,
      onCampaignSettingsChanged,
    )
  }
}
