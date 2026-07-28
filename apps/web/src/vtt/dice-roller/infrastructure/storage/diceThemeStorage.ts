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

export type InventoryDisplaySettings = {
  itemSheetLocale: 'pt-BR' | 'en-US'
}

export type CampaignUserSettings = {
  dice: DiceDisplaySettings
  inventory: InventoryDisplaySettings
}

export const DICE_DISPLAY_SETTINGS_CHANGED_EVENT = 'questhub:vtt:dice-display-settings-changed'
export const INVENTORY_DISPLAY_SETTINGS_CHANGED_EVENT = 'questhub:inventory-display-settings-changed'

function diceColorStorageKey(campaignId: string) {
  return `questhub:vtt:dice-theme-color:${campaignId}`
}

function diceDisplaySettingsStorageKey(campaignId: string) {
  return `questhub:vtt:dice-display-settings:${campaignId}`
}

function campaignUserSettingsStorageKey(campaignId: string) {
  return `questhub:campaign-user-settings:${campaignId}`
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

export function normalizeCampaignUserSettings(value: unknown): CampaignUserSettings {
  if (!value || typeof value !== 'object') {
    return {
      dice: normalizeDiceDisplaySettings(null),
      inventory: { itemSheetLocale: 'pt-BR' },
    }
  }

  const settings = value as Partial<CampaignUserSettings>
  return {
    ...settings,
    dice: normalizeDiceDisplaySettings(settings.dice),
    inventory: {
      itemSheetLocale: settings.inventory?.itemSheetLocale === 'en-US' ? 'en-US' : 'pt-BR',
    },
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
  return readStoredCampaignUserSettings(campaignId).dice
}

export function readStoredCampaignUserSettings(campaignId: string) {
  if (typeof window === 'undefined') return normalizeCampaignUserSettings(null)

  try {
    const rawCampaignSettings = window.localStorage.getItem(campaignUserSettingsStorageKey(campaignId))
    if (rawCampaignSettings) return normalizeCampaignUserSettings(JSON.parse(rawCampaignSettings))

    const legacyDiceSettings = window.localStorage.getItem(diceDisplaySettingsStorageKey(campaignId))
    return normalizeCampaignUserSettings({
      dice: legacyDiceSettings ? JSON.parse(legacyDiceSettings) : null,
    })
  } catch {
    return normalizeCampaignUserSettings(null)
  }
}

export function storeCampaignUserSettings(campaignId: string, settings: CampaignUserSettings) {
  if (typeof window === 'undefined') return

  try {
    const normalizedSettings = normalizeCampaignUserSettings(settings)
    window.localStorage.setItem(campaignUserSettingsStorageKey(campaignId), JSON.stringify(normalizedSettings))
    window.dispatchEvent(
      new CustomEvent(DICE_DISPLAY_SETTINGS_CHANGED_EVENT, {
        detail: { campaignId, settings: normalizedSettings.dice },
      }),
    )
    window.dispatchEvent(
      new CustomEvent(INVENTORY_DISPLAY_SETTINGS_CHANGED_EVENT, {
        detail: { campaignId, settings: normalizedSettings.inventory },
      }),
    )
  } catch {
    // Preferencia local: falha de storage nao deve bloquear a mesa.
  }
}

export function storeDiceDisplaySettings(campaignId: string, settings: DiceDisplaySettings) {
  const currentSettings = readStoredCampaignUserSettings(campaignId)
  storeCampaignUserSettings(campaignId, {
    ...currentSettings,
    dice: normalizeDiceDisplaySettings(settings),
  })
}

export function readStoredInventoryDisplaySettings(campaignId: string) {
  return readStoredCampaignUserSettings(campaignId).inventory
}

export function storeInventoryDisplaySettings(
  campaignId: string,
  settings: InventoryDisplaySettings,
) {
  const currentSettings = readStoredCampaignUserSettings(campaignId)
  storeCampaignUserSettings(campaignId, {
    ...currentSettings,
    inventory: {
      itemSheetLocale: settings.itemSheetLocale === 'en-US' ? 'en-US' : 'pt-BR',
    },
  })
}
