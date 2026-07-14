import type { RollOptions } from './roll-options'

export type PredicateComparison = [left: string, right: string | number]

export type PredicateStatement =
  | string
  | { and: PredicateStatement[] }
  | { or: PredicateStatement[] }
  | { not: PredicateStatement }
  | { nand: PredicateStatement[] }
  | { nor: PredicateStatement[] }
  | { xor: PredicateStatement[] }
  | { eq: PredicateComparison }
  | { gt: PredicateComparison }
  | { gte: PredicateComparison }
  | { lt: PredicateComparison }
  | { lte: PredicateComparison }

export type Predicate = PredicateStatement[]

function isDynamicResolvable(value: string | number): boolean {
  return typeof value === 'string' && value.startsWith('{') && value.endsWith('}')
}

function numericRollOptionValue(rollOptions: RollOptions, key: string): number | null {
  const prefix = `${key}:`
  for (const option of rollOptions) {
    if (!option.startsWith(prefix)) continue
    const value = Number(option.slice(prefix.length))
    if (Number.isFinite(value)) return value
  }
  return null
}

function resolveComparisonSide(rollOptions: RollOptions, side: string | number): number | null {
  if (typeof side === 'number') return side
  if (isDynamicResolvable(side)) return null
  return numericRollOptionValue(rollOptions, side)
}

function testComparison(rollOptions: RollOptions, [left, right]: PredicateComparison, compare: (a: number, b: number) => boolean): boolean {
  const leftValue = resolveComparisonSide(rollOptions, left)
  const rightValue = resolveComparisonSide(rollOptions, right)
  if (leftValue === null || rightValue === null) return false
  return compare(leftValue, rightValue)
}

export function testPredicateStatement(statement: PredicateStatement, rollOptions: RollOptions): boolean {
  if (typeof statement === 'string') return rollOptions.has(statement)

  if ('and' in statement) return statement.and.every((sub) => testPredicateStatement(sub, rollOptions))
  if ('or' in statement) return statement.or.some((sub) => testPredicateStatement(sub, rollOptions))
  if ('not' in statement) return !testPredicateStatement(statement.not, rollOptions)
  if ('nand' in statement) return !statement.nand.every((sub) => testPredicateStatement(sub, rollOptions))
  if ('nor' in statement) return !statement.nor.some((sub) => testPredicateStatement(sub, rollOptions))
  if ('xor' in statement) return statement.xor.filter((sub) => testPredicateStatement(sub, rollOptions)).length === 1
  if ('eq' in statement) return testComparison(rollOptions, statement.eq, (a, b) => a === b)
  if ('gt' in statement) return testComparison(rollOptions, statement.gt, (a, b) => a > b)
  if ('gte' in statement) return testComparison(rollOptions, statement.gte, (a, b) => a >= b)
  if ('lt' in statement) return testComparison(rollOptions, statement.lt, (a, b) => a < b)
  if ('lte' in statement) return testComparison(rollOptions, statement.lte, (a, b) => a <= b)

  return false
}

export function testPredicate(predicate: Predicate, rollOptions: RollOptions): boolean {
  return predicate.every((statement) => testPredicateStatement(statement, rollOptions))
}
