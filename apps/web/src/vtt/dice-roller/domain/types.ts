export type DiceSides = 4 | 6 | 8 | 10 | 12 | 20

export type DiceRollRequest = {
  sides: DiceSides
  value: number
}

export type DiceRollGroup = {
  sides: DiceSides
  count: number
}

export type DiceRollResultGroup = DiceRollGroup & {
  values: number[]
}
