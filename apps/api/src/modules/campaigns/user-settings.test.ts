import assert from 'node:assert/strict'
import test from 'node:test'
import {
  campaignUserSettingsSchema,
  mergeCampaignUserSettings,
  normalizeCampaignUserSettings,
} from './user-settings'

test('validates Core namespaces while accepting opaque game-system namespaces', () => {
  assert.equal(campaignUserSettingsSchema.safeParse({
    dice: { autoClear: 6, showResultPopup: false },
    inventory: { itemSheetLocale: 'en-US' },
    pathfinder2e: { contentLocale: 'future-value' },
  }).success, true)

  assert.equal(campaignUserSettingsSchema.safeParse({
    dice: { autoClear: 99 },
    pathfinder2e: { contentLocale: 'en-US' },
  }).success, false)

  assert.equal(campaignUserSettingsSchema.safeParse({
    inventory: { itemSheetLocale: 'invalid' },
    pathfinder2e: { contentLocale: 'en-US' },
  }).success, false)
})

test('normalizes Core namespaces without interpreting opaque namespaces', () => {
  const settings = normalizeCampaignUserSettings({
    dice: { autoClear: 6, showResultPopup: false },
    inventory: { itemSheetLocale: 'en-US' },
    pathfinder2e: { contentLocale: 'en-US', futurePreference: true },
  })

  assert.deepEqual(settings.dice, { autoClear: 6, showResultPopup: false })
  assert.deepEqual(settings.inventory, { itemSheetLocale: 'en-US' })
  assert.deepEqual(settings.pathfinder2e, {
    contentLocale: 'en-US',
    futurePreference: true,
  })
})

test('falls back invalid persisted Core settings without discarding opaque namespaces', () => {
  const settings = normalizeCampaignUserSettings({
    dice: { autoClear: 99, showResultPopup: 'invalid' },
    inventory: { itemSheetLocale: 'invalid' },
    someSystem: { arbitrary: 'value' },
  })

  assert.deepEqual(settings.dice, { autoClear: 3, showResultPopup: true })
  assert.deepEqual(settings.inventory, { itemSheetLocale: 'pt-BR' })
  assert.deepEqual(settings.someSystem, { arbitrary: 'value' })
})

test('merges opaque namespaces generically without knowing their schema', () => {
  const settings = mergeCampaignUserSettings(
    {
      dice: { autoClear: 3, showResultPopup: true },
      inventory: { itemSheetLocale: 'pt-BR' },
      pathfinder2e: { contentLocale: 'pt-BR', futurePreference: true },
    },
    {
      pathfinder2e: { contentLocale: 'en-US' },
    },
  )

  assert.deepEqual(settings.pathfinder2e, {
    contentLocale: 'en-US',
    futurePreference: true,
  })
})
