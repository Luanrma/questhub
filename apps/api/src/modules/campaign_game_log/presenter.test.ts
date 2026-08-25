import assert from 'node:assert/strict'
import test from 'node:test'
import { presentPersistedGameLogEntry } from './presenter'

test('persisted game log entries expose encounter identity and history marker', () => {
  const result = presentPersistedGameLogEntry({
    id: 'entry-1',
    campaignId: 'campaign-1',
    encounterId: 'encounter-1',
    eventType: 'UNKNOWN_FUTURE_EVENT',
    summary: 'Evento futuro.',
    payload: { neutral: true },
    createdAt: new Date('2026-08-24T20:00:00.000Z'),
  })

  assert.equal(result.persistent, true)
  assert.equal(result.encounterId, 'encounter-1')
  assert.equal(result.createdAt, '2026-08-24T20:00:00.000Z')
  assert.deepEqual(result.payload, { neutral: true })
})
