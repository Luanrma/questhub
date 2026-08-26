type DiceRollGroup = {
  sides: 4 | 6 | 8 | 10 | 12 | 20
  count: number
}

export function normalizeDiceRollGroups(groups: DiceRollGroup[]) {
  return [...groups].sort((left, right) => left.sides - right.sides)
}

export function buildDiceRollExpression(groups: DiceRollGroup[], modifier: number) {
  const diceExpression = normalizeDiceRollGroups(groups)
    .map((group) => `${group.count}D${group.sides}`)
    .join(' + ')

  if (modifier === 0) return diceExpression
  return `${diceExpression} ${modifier > 0 ? '+' : '-'} ${Math.abs(modifier)}`
}

export function calculateDiceRollTotal(values: number[], modifier: number) {
  const diceTotal = values.reduce((total, value) => total + value, 0)
  return { diceTotal, total: diceTotal + modifier }
}
