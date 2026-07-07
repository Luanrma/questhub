import test from 'node:test'
import assert from 'node:assert/strict'
import { cellDistance, cellsToMeters, feetToMeters } from './movement-distance'

test('cellDistance conta movimento ortogonal em celulas', () => {
  const distance = cellDistance({ x: 0, y: 0 }, { x: 96, y: 0 }, 32)
  assert.equal(distance, 3)
})

test('cellDistance conta diagonal como 1 celula, igual ortogonal', () => {
  const distance = cellDistance({ x: 0, y: 0 }, { x: 32, y: 32 }, 32)
  assert.equal(distance, 1)
})

test('cellDistance usa a maior distancia entre eixos para diagonais irregulares', () => {
  const distance = cellDistance({ x: 0, y: 0 }, { x: 96, y: 32 }, 32)
  assert.equal(distance, 3)
})

test('cellsToMeters multiplica celulas pela escala da cena', () => {
  assert.equal(cellsToMeters(5, 1.5), 7.5)
  assert.equal(cellsToMeters(5, 1), 5)
})

test('feetToMeters converte via quadrado de 5 pes', () => {
  assert.equal(feetToMeters(25, 1.5), 7.5)
  assert.equal(feetToMeters(30, 1.5), 9)
  assert.equal(feetToMeters(25, 1), 5)
})
