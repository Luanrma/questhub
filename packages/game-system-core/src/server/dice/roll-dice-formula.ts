import { randomInt } from 'node:crypto'
import type { DiceFormula } from '../../shared/dice/dice-formula'

export type DiceRollResult = { total: number; rolls: number[] }

function defaultRollDie(sides: number): number {
  return randomInt(1, sides + 1)
}

export function rollDiceFormula(formula: DiceFormula, rollDie: (sides: number) => number = defaultRollDie): DiceRollResult {
  if (formula.kind === 'flat') return { total: formula.amount, rolls: [] }

  const rolls = Array.from({ length: formula.count }, () => rollDie(formula.sides))
  const total = rolls.reduce((sum, roll) => sum + roll, 0) + formula.bonus
  return { total, rolls }
}

export function rollD20(rollDie: (sides: number) => number = defaultRollDie): number {
  return rollDiceFormula({ kind: 'dice', count: 1, sides: 20, bonus: 0 }, rollDie).total
}
