import { z } from 'zod'

export type DiceUserSettings = {
  autoClear: number | 'manual'
  showResultPopup: boolean
}

export type InventoryUserSettings = {
  itemSheetLocale: 'pt-BR' | 'en-US'
}

export type CampaignUserSettingsPayload = Record<string, unknown> & {
  dice: DiceUserSettings
  inventory: InventoryUserSettings
}

const defaultCampaignUserSettings = {
  dice: {
    autoClear: 3 as number | 'manual',
    showResultPopup: true,
  },
  inventory: {
    itemSheetLocale: 'pt-BR' as 'pt-BR' | 'en-US',
  },
}

const diceUserSettingsSchema = z.object({
  autoClear: z.union([z.literal('manual'), z.number().int().min(3).max(10)]).optional(),
  showResultPopup: z.boolean().optional(),
})

const inventoryUserSettingsSchema = z.object({
  itemSheetLocale: z.enum(['pt-BR', 'en-US']).optional(),
})

export const campaignUserSettingsSchema = z.object({}).passthrough()

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

export function normalizeCampaignUserSettings(value: unknown): CampaignUserSettingsPayload {
  const settings = isRecord(value) ? value : {}
  const parsedDice = diceUserSettingsSchema.safeParse(settings.dice)
  const parsedInventory = inventoryUserSettingsSchema.safeParse(settings.inventory)
  const dice = parsedDice.success ? parsedDice.data : {}
  const inventory = parsedInventory.success ? parsedInventory.data : {}

  return {
    ...settings,
    dice: {
      autoClear: dice.autoClear ?? defaultCampaignUserSettings.dice.autoClear,
      showResultPopup: dice.showResultPopup ?? defaultCampaignUserSettings.dice.showResultPopup,
    },
    inventory: {
      itemSheetLocale: inventory.itemSheetLocale
        ?? defaultCampaignUserSettings.inventory.itemSheetLocale,
    },
  }
}

export function mergeCampaignUserSettings(
  current: unknown,
  next: unknown,
): CampaignUserSettingsPayload {
  const currentSettings = normalizeCampaignUserSettings(current)
  const nextRecord = isRecord(next) ? next : {}
  const merged: Record<string, unknown> = { ...currentSettings }

  for (const [namespace, value] of Object.entries(nextRecord)) {
    if (namespace === 'dice' || namespace === 'inventory') continue

    const currentValue = currentSettings[namespace]
    merged[namespace] = isRecord(currentValue) && isRecord(value)
      ? { ...currentValue, ...value }
      : value
  }

  const nextDice = isRecord(nextRecord.dice) ? nextRecord.dice : {}
  const nextInventory = isRecord(nextRecord.inventory) ? nextRecord.inventory : {}

  merged.dice = {
    ...currentSettings.dice,
    ...nextDice,
  }
  merged.inventory = {
    ...currentSettings.inventory,
    ...nextInventory,
  }

  return normalizeCampaignUserSettings(merged)
}
