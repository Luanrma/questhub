import assert from 'node:assert/strict'
import { test } from 'node:test'
import { defaultSceneFogConfig, normalizeFogLightSource, normalizeSceneFogConfig, normalizeTokenVisionConfig } from './config'

test('fog is enabled without requiring an ambient preset', () => {
  assert.deepEqual(normalizeSceneFogConfig({ enabled: true }), {
    ...structuredClone(defaultSceneFogConfig),
    enabled: true,
  })
})

test('scene darkness is normalized as an opt-in boolean', () => {
  assert.equal(normalizeSceneFogConfig({ enabled: true, darkness: true }).darkness, true)
  assert.equal(normalizeSceneFogConfig({ enabled: true }).darkness, false)
})

test('legacy scene lighting fields are discarded during normalization', () => {
  const config = normalizeSceneFogConfig({
    enabled: true,
    ambientPreset: 'NIGHT',
    ambientIntensityPercent: 30,
    forcedShareMode: 'REVEAL_ALL',
    thresholds: { fullLightMinPercent: 67, lightPenumbraMinPercent: 34, deepPenumbraMinPercent: 1 },
  })

  assert.equal('ambientPreset' in config, false)
  assert.equal('ambientIntensityPercent' in config, false)
  assert.equal('forcedShareMode' in config, false)
  assert.equal('thresholds' in config, false)
})

test('token vision keeps one range and halves the legacy twenty-meter default', () => {
  assert.deepEqual(normalizeTokenVisionConfig({}), { rangeMeters: 10 })
  assert.deepEqual(normalizeTokenVisionConfig({ rangeMeters: 30 }), { rangeMeters: 30 })
  assert.deepEqual(normalizeTokenVisionConfig({ normalRangeMeters: 20, nightVision: { capable: true } }), { rangeMeters: 10 })
})

test('light sources keep only enabled state, range and permission', () => {
  const source = normalizeFogLightSource({
    id: 'light', enabled: true, rangeMeters: 8, intensityPercent: 35, animation: 'PULSE', color: '#ffffff',
    permission: { allowedControllerMemberIds: ['member'] },
  }, 'fallback')

  assert.deepEqual(source, {
    id: 'light', enabled: true, rangeMeters: 8, permission: { allowedControllerMemberIds: ['member'] },
  })
})
