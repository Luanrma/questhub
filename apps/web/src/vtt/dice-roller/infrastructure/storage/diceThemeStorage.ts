import { defaultDiceThemeColor } from '../../config/constants'

function diceColorStorageKey(campaignId: string) {
  return `questhub:vtt:dice-theme-color:${campaignId}`
}

export function normalizeHexColor(value: string | null) {
  if (!value) return defaultDiceThemeColor
  return /^#[0-9a-f]{6}$/i.test(value) ? value : defaultDiceThemeColor
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
