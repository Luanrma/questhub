import test from 'node:test'
import assert from 'node:assert/strict'
import { commitMovementAction, validateMovement } from './movement-validation'
import type { MovementBudget } from './types'

const baseInput = {
  from: { x: 0, y: 0 },
  cellSizePx: 32,
  metersPerCell: 1.5,
}

function budget(overrides: Partial<MovementBudget> = {}): MovementBudget {
  return { maxMetersPerAction: 6, actionsRemaining: 3, metersUsedThisAction: 0, ...overrides }
}

test('permite movimento dentro da acao atual', () => {
  const result = validateMovement({
    ...baseInput,
    to: { x: 96, y: 0 }, // 3 celulas * 1.5m = 4.5m
    budget: budget(),
  })

  assert.equal(result.allowed, true)
  if (result.allowed === true) {
    assert.equal(result.metersUsedThisAction, 4.5)
  }
})

test('clampa quando excede o restante da acao atual', () => {
  const result = validateMovement({
    ...baseInput,
    to: { x: 320, y: 0 }, // 10 celulas * 1.5m = 15m, so ha 6m por acao
    budget: budget(),
  })

  assert.equal(result.allowed, 'clamped')
  if (result.allowed === 'clamped') {
    assert.equal(result.metersUsedThisAction, 6)
    assert.equal(result.position.x, 128) // 6/15 do caminho
    assert.deepEqual(result.requestedPosition, { x: 320, y: 0 })
  }
})

test('bloqueia quando nao ha mais acoes de movimento', () => {
  const result = validateMovement({
    ...baseInput,
    to: { x: 32, y: 0 },
    budget: budget({ actionsRemaining: 0 }),
  })

  assert.deepEqual(result, { allowed: false, reason: 'NO_ACTIONS_REMAINING' })
})

test('velocidade desconhecida (maxMetersPerAction null) nao bloqueia', () => {
  const result = validateMovement({
    ...baseInput,
    to: { x: 999, y: 999 },
    budget: budget({ maxMetersPerAction: null }),
  })

  assert.equal(result.allowed, true)
})

test('commitMovementAction consome 1 acao e zera o gasto da acao quando houve deslocamento', () => {
  const next = commitMovementAction(budget({ actionsRemaining: 3, metersUsedThisAction: 3 }))
  assert.deepEqual(next, { maxMetersPerAction: 6, actionsRemaining: 2, metersUsedThisAction: 0 })
})

test('commitMovementAction nao consome acao se nao houve deslocamento', () => {
  const original = budget({ actionsRemaining: 3, metersUsedThisAction: 0 })
  const next = commitMovementAction(original)
  assert.deepEqual(next, original)
})

test('commitMovementAction nao deixa actionsRemaining negativo', () => {
  const original = budget({ actionsRemaining: 0, metersUsedThisAction: 6 })
  const next = commitMovementAction(original)
  assert.deepEqual(next, original)
})

test('sobrante de uma acao nao usada nao acumula pra proxima (exemplo do usuario: 3m + 5m com velocidade 6m)', () => {
  const input = { cellSizePx: 32, metersPerCell: 1 }
  let current = budget({ maxMetersPerAction: 6, actionsRemaining: 3, metersUsedThisAction: 0 })

  const firstMove = validateMovement({ ...input, from: { x: 0, y: 0 }, to: { x: 96, y: 0 }, budget: current }) // 3 celulas * 1m = 3m
  assert.equal(firstMove.allowed, true)
  if (firstMove.allowed === true) current = { ...current, metersUsedThisAction: firstMove.metersUsedThisAction }
  current = commitMovementAction(current)
  assert.deepEqual(current, { maxMetersPerAction: 6, actionsRemaining: 2, metersUsedThisAction: 0 })

  const secondMove = validateMovement({ ...input, from: { x: 96, y: 0 }, to: { x: 96 + 160, y: 0 }, budget: current }) // 5 celulas * 1m = 5m, ainda dentro dos 6m da nova acao
  assert.equal(secondMove.allowed, true)
  if (secondMove.allowed === true) current = { ...current, metersUsedThisAction: secondMove.metersUsedThisAction }
  current = commitMovementAction(current)
  assert.equal(current.actionsRemaining, 1)
  assert.equal(current.metersUsedThisAction, 0)
})
