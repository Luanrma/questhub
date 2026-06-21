import test from 'node:test'
import assert from 'node:assert/strict'
import { buildDefaultCharacterSheetEnvelope, safeValidateCharacterSheetEnvelope } from './registry'
import { PATHFINDER_2E_DATA_KEY, PATHFINDER_2E_SYSTEM } from './pathfinder_2e_sheet'

test('buildDefaultCharacterSheetEnvelope creates a Pathfinder 2e envelope', () => {
  const envelope = buildDefaultCharacterSheetEnvelope(PATHFINDER_2E_SYSTEM, {
    bio: 'Uma exploradora de Absalom.',
  })

  assert.equal(envelope.system, PATHFINDER_2E_SYSTEM)
  assert.equal(envelope.version, 1)
  assert.equal(envelope.metadata?.bio, 'Uma exploradora de Absalom.')
  assert.equal(typeof envelope.data[PATHFINDER_2E_DATA_KEY], 'object')
})

test('safeValidateCharacterSheetEnvelope rejects unsupported systems', () => {
  const result = safeValidateCharacterSheetEnvelope({
    system: 'UNKNOWN_SYSTEM',
    version: 1,
    data: {
      unknown: {},
    },
  })

  assert.equal(result.success, false)
})

test('safeValidateCharacterSheetEnvelope rejects missing system data block', () => {
  const result = safeValidateCharacterSheetEnvelope({
    system: PATHFINDER_2E_SYSTEM,
    version: 1,
    data: {},
  })

  assert.equal(result.success, false)
})

test('safeValidateCharacterSheetEnvelope accepts a valid Pathfinder 2e envelope', () => {
  const envelope = buildDefaultCharacterSheetEnvelope(PATHFINDER_2E_SYSTEM)
  const result = safeValidateCharacterSheetEnvelope(envelope)

  assert.equal(result.success, true)
})
