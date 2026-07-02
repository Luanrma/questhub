import {
  defaultDiceAutoClearSeconds,
  defaultDiceThemeColor,
  maxDiceAutoClearSeconds,
  minDiceAutoClearSeconds,
} from '../../config/constants'

export type DiceAutoClearPreference = number | 'manual'

export type DiceDisplaySettings = {
  autoClear: DiceAutoClearPreference
  showResultPopup: boolean
}

export const DICE_DISPLAY_SETTINGS_CHANGED_EVENT = 'questhub:vtt:dice-display-settings-changed'

function diceColorStorageKey(campaignId: string) {
  return `questhub:vtt:dice-theme-color:${campaignId}`
}

function diceDisplaySettingsStorageKey(campaignId: string) {
  return `questhub:vtt:dice-display-settings:${campaignId}`
}

export function normalizeHexColor(value: string | null) {
  if (!value) return defaultDiceThemeColor
  return /^#[0-9a-f]{6}$/i.test(value) ? value : defaultDiceThemeColor
}

export function normalizeDiceAutoClearPreference(value: unknown): DiceAutoClearPreference {
  if (value === 'manual') return 'manual'
  if (typeof value !== 'number' || !Number.isFinite(value)) return defaultDiceAutoClearSeconds
  return Math.max(minDiceAutoClearSeconds, Math.min(maxDiceAutoClearSeconds, Math.round(value)))
}

export function normalizeDiceDisplaySettings(value: unknown): DiceDisplaySettings {
  if (!value || typeof value !== 'object') {
    return { autoClear: defaultDiceAutoClearSeconds, showResultPopup: true }
  }

  const settings = value as Partial<DiceDisplaySettings>
  return {
    autoClear: normalizeDiceAutoClearPreference(settings.autoClear),
    showResultPopup: settings.showResultPopup !== false,
  }
}

export function readStoredDiceThemeColor(campaignId: string) {
  if (typeof window === 'undefined') return defaultDiceThemeColor

  try {
    return normalizeHexColor(window.localStorage.getItem(diceColorStorageKey(campaignId)))
  } catch {
    return defaultDiceThemeColor
  }
}

export function storeDiceThemeColor(campaignId: string, color: string) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(diceColorStorageKey(campaignId), normalizeHexColor(color))
  } catch {
    // Configuracao visual local: falha de storage nao deve bloquear a mesa.
  }
}

export function readStoredDiceDisplaySettings(campaignId: string) {
  if (typeof window === 'undefined') return normalizeDiceDisplaySettings(null)

  try {
    const rawValue = window.localStorage.getItem(diceDisplaySettingsStorageKey(campaignId))
    return normalizeDiceDisplaySettings(rawValue ? JSON.parse(rawValue) : null)
  } catch {
    return normalizeDiceDisplaySettings(null)
  }
}

export function storeDiceDisplaySettings(campaignId: string, settings: DiceDisplaySettings) {
  if (typeof window === 'undefined') return

  try {
    const normalizedSettings = normalizeDiceDisplaySettings(settings)
    window.localStorage.setItem(diceDisplaySettingsStorageKey(campaignId), JSON.stringify(normalizedSettings))
    window.dispatchEvent(
      new CustomEvent(DICE_DISPLAY_SETTINGS_CHANGED_EVENT, {
        detail: { campaignId, settings: normalizedSettings },
      }),
    )
  } catch {
    // Preferencia local: falha de storage nao deve bloquear a mesa.
  }
}
