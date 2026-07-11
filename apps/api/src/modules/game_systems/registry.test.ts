import test from 'node:test'
import assert from 'node:assert/strict'
import { buildDefaultCharacterSheetEnvelope, safeValidateCharacterSheetEnvelope } from './registry'
import { PATHFINDER_2E_DATA_KEY, PATHFINDER_2E_SYSTEM } from './pathfinder_2e/character_sheet'

test('buildDefaultCharacterSheetEnvelope creates a Pathfinder 2e envelope', () => {
  const envelope = buildDefaultCharacterSheetEnvelope(PATHFINDER_2E_SYSTEM, {
    bio: 'Uma exploradora de Absalom.',
  })

  assert.equal(envelope.system, PATHFINDER_2E_SYSTEM)
  assert.equal(envelope.version, 3)
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

test('safeValidateCharacterSheetEnvelope accepts Pathfinder 2e V1 and normalizes it for write', () => {
  const result = safeValidateCharacterSheetEnvelope({
    system: PATHFINDER_2E_SYSTEM,
    version: 1,
    data: {
      [PATHFINDER_2E_DATA_KEY]: {
        general: { experience: { current: 0, nextLevel: 0 }, movementMeters: 0 },
        identity: {
          level: 1,
          ancestry: 'Elf',
          heritage: 'Arctic Elf',
          background: 'Acolyte',
          className: 'Fighter',
        },
        attributes: {
          strength: 10,
          dexterity: 10,
          constitution: 10,
          intelligence: 10,
          wisdom: 10,
          charisma: 10,
        },
        hitPoints: { maximum: 0, current: 0, temporary: 0, wounded: 0, dying: 0, doomed: 0 },
        armorClass: 10,
        initiative: 0,
        perception: { rank: 0, value: 0 },
        savingThrows: {
          fortitude: { rank: 0, value: 0 },
          reflex: { rank: 0, value: 0 },
          will: { rank: 0, value: 0 },
        },
        skills: {
          acrobatics: { rank: 0, value: 0 },
          arcana: { rank: 0, value: 0 },
          athletics: { rank: 0, value: 0 },
          crafting: { rank: 0, value: 0 },
          deception: { rank: 0, value: 0 },
          diplomacy: { rank: 0, value: 0 },
          intimidation: { rank: 0, value: 0 },
          medicine: { rank: 0, value: 0 },
          nature: { rank: 0, value: 0 },
          occultism: { rank: 0, value: 0 },
          performance: { rank: 0, value: 0 },
          religion: { rank: 0, value: 0 },
          society: { rank: 0, value: 0 },
          stealth: { rank: 0, value: 0 },
          survival: { rank: 0, value: 0 },
          thievery: { rank: 0, value: 0 },
        },
        notes: '',
      },
    },
  })

  assert.equal(result.success, true)
  if (!result.success) return
  assert.equal(result.data.version, 3)
  const pathfinder2e = result.data.data[PATHFINDER_2E_DATA_KEY] as {
    identity: { class?: { id?: string } }
    armorClass: { manualAdjustment: number }
    armorProficiencies: { unarmored: number }
  }
  assert.equal(pathfinder2e.identity.class?.id, 'pf2e:class:fighter')
  assert.deepEqual(pathfinder2e.armorClass, { manualAdjustment: 0 })
  assert.equal(pathfinder2e.armorProficiencies.unarmored, 2)
})
