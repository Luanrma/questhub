import assert from 'node:assert/strict'
import test from 'node:test'
import {
  buildCommand,
  normalizeRollLabel,
  parseDiceCommand,
  parseModifierInput,
} from '../src/vtt/dice-roller/domain/diceRollDomain'

test('guided and expression inputs normalize to the same manual roll', () => {
  assert.deepEqual(parseDiceCommand('1d20+7'), {
    groups: [{ sides: 20, count: 1 }],
    modifier: 7,
    expression: '1D20 + 7',
  })
  assert.equal(buildCommand([{ sides: 20, count: 1 }], 7), '1D20 + 7')
  assert.deepEqual(parseModifierInput('+7'), { modifier: 7 })
})

test('manual expressions support multiple dice groups and one final modifier', () => {
  assert.deepEqual(parseDiceCommand('1d20 + 2d6 - 2'), {
    groups: [{ sides: 6, count: 2 }, { sides: 20, count: 1 }],
    modifier: -2,
    expression: '2D6 + 1D20 - 2',
  })
  assert.deepEqual(parseDiceCommand('d8'), {
    groups: [{ sides: 8, count: 1 }],
    modifier: 0,
    expression: '1D8',
  })
})

test('manual expressions reject unsupported arithmetic and invalid dice', () => {
  assert.ok('error' in parseDiceCommand('1d20-1d6'))
  assert.ok('error' in parseDiceCommand('1d20+2+3'))
  assert.ok('error' in parseDiceCommand('2d7'))
  assert.ok('error' in parseDiceCommand('1d20+(3)'))
  assert.ok('error' in parseDiceCommand('41d6'))
})

test('manual roll context normalizes optional labels and validates integer modifiers', () => {
  assert.deepEqual(normalizeRollLabel('  Ataque com espada  '), { label: 'Ataque com espada' })
  assert.deepEqual(normalizeRollLabel('   '), { label: null })
  assert.ok('error' in normalizeRollLabel('x'.repeat(121)))
  assert.deepEqual(parseModifierInput(''), { modifier: 0 })
  assert.deepEqual(parseModifierInput('-2'), { modifier: -2 })
  assert.ok('error' in parseModifierInput('2.5'))
})
