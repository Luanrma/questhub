import test from 'node:test'
import assert from 'node:assert/strict'
import {
  applyDamage,
  applyHeal,
  derivePublicNpcHealth,
  deriveHealthState,
  setCurrentHitPoints,
  setMaxHitPoints,
  setTemporaryHitPoints,
  toCombatantHealth,
} from './health-rules'

test('DAMAGE reduz HP atual', () => {
  const result = applyDamage({ currentHitPoints: 20, maxHitPoints: 20, temporaryHitPoints: 0 }, 6)
  assert.equal(result.currentHitPoints, 14)
})

test('DAMAGE consome temp HP antes do HP atual', () => {
  const result = applyDamage({ currentHitPoints: 20, maxHitPoints: 20, temporaryHitPoints: 5 }, 8)
  assert.equal(result.temporaryHitPoints, 0)
  assert.equal(result.currentHitPoints, 17)
})

test('DAMAGE nao deixa HP negativo', () => {
  const result = applyDamage({ currentHitPoints: 5, maxHitPoints: 20, temporaryHitPoints: 0 }, 99)
  assert.equal(result.currentHitPoints, 0)
})

test('DAMAGE nao deixa temp HP negativo', () => {
  const result = applyDamage({ currentHitPoints: 20, maxHitPoints: 20, temporaryHitPoints: 3 }, 1)
  assert.equal(result.temporaryHitPoints, 2)
})

test('HEAL nao passa do maximo', () => {
  const result = applyHeal({ currentHitPoints: 18, maxHitPoints: 20, temporaryHitPoints: 0 }, 10)
  assert.equal(result.currentHitPoints, 20)
})

test('HEAL tira estado DOWN quando HP sobe acima de 0', () => {
  const result = applyHeal({ currentHitPoints: 0, maxHitPoints: 20, temporaryHitPoints: 0 }, 7)
  assert.equal(result.currentHitPoints, 7)
  assert.equal(deriveHealthState(result.currentHitPoints), 'OK')
})

test('SET_CURRENT satura entre 0 e o maximo', () => {
  assert.equal(setCurrentHitPoints({ currentHitPoints: 10, maxHitPoints: 20, temporaryHitPoints: 0 }, -5).currentHitPoints, 0)
  assert.equal(setCurrentHitPoints({ currentHitPoints: 10, maxHitPoints: 20, temporaryHitPoints: 0 }, 99).currentHitPoints, 20)
})

test('SET_MAX reduz current se current > max', () => {
  const result = setMaxHitPoints({ currentHitPoints: 18, maxHitPoints: 20, temporaryHitPoints: 0 }, 10)
  assert.equal(result.maxHitPoints, 10)
  assert.equal(result.currentHitPoints, 10)
})

test('SET_TEMPORARY aceita 0', () => {
  const result = setTemporaryHitPoints({ currentHitPoints: 18, maxHitPoints: 20, temporaryHitPoints: 5 }, 0)
  assert.equal(result.temporaryHitPoints, 0)
})

test('toCombatantHealth deriva state OK/DOWN a partir do HP atual', () => {
  assert.equal(toCombatantHealth({ currentHitPoints: 1, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'OK')
  assert.equal(toCombatantHealth({ currentHitPoints: 0, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'DOWN')
})

test('derivePublicNpcHealth mapeia faixas percentuais', () => {
  assert.equal(derivePublicNpcHealth({ currentHitPoints: 20, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'HEALTHY')
  assert.equal(derivePublicNpcHealth({ currentHitPoints: 15, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'SCRATCHED')
  assert.equal(derivePublicNpcHealth({ currentHitPoints: 10, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'INJURED')
  assert.equal(derivePublicNpcHealth({ currentHitPoints: 6, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'BLOODIED')
  assert.equal(derivePublicNpcHealth({ currentHitPoints: 1, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'CRITICAL')
  assert.equal(derivePublicNpcHealth({ currentHitPoints: 0, maxHitPoints: 20, temporaryHitPoints: 0 }).state, 'DOWN')
})
