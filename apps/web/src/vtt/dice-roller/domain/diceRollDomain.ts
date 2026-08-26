import { ascendingDiceOptions, maxDiceRollModifier } from '../config/constants'
import type { DiceRollComposition, DiceRollGroup, DiceRollResultGroup, DiceSides } from './types'

export type DiceEngineRollResult = {
  sides: number | string
  value: unknown
}

export function isDiceSides(value: number): value is DiceSides {
  return value === 4 || value === 6 || value === 8 || value === 10 || value === 12 || value === 20
}

export function normalizeGroups(groups: DiceRollGroup[]) {
  return ascendingDiceOptions
    .map((sides) => ({
      sides,
      count: groups.filter((group) => group.sides === sides).reduce((total, group) => total + group.count, 0),
    }))
    .filter((group) => group.count > 0)
}

export function rollCount(groups: DiceRollGroup[]) {
  return groups.reduce((total, group) => total + group.count, 0)
}

export function resolveDiceBoxScale(totalDice: number) {
  if (totalDice >= 35) return 4
  if (totalDice >= 25) return 5.5
  if (totalDice >= 15) return 6.5
  return 7
}

export function parseDiceCommand(input: string): Omit<DiceRollComposition, 'label'> | { error: string } {
  const normalized = input.trim().toLowerCase().replace(/\s+/g, '')
  if (!normalized) return { error: 'Informe uma rolagem.' }

  const groups: DiceRollGroup[] = []
  let cursor = normalized
  let modifier = 0

  while (cursor) {
    const match = cursor.match(/^(\d*)d(\d+)/)
    if (!match) return { error: 'Use dados como 1d20 ou 2d6 e um modificador inteiro final.' }

    const count = match[1] ? Number(match[1]) : 1
    const sides = Number(match[2])

    if (!Number.isInteger(count) || count <= 0) return { error: 'A quantidade de dados precisa ser maior que zero.' }
    if (!isDiceSides(sides)) return { error: 'Use apenas D4, D6, D8, D10, D12 ou D20.' }

    groups.push({ sides, count })
    cursor = cursor.slice(match[0].length)
    if (!cursor) break

    const operator = cursor[0]
    if (operator !== '+' && operator !== '-') {
      return { error: 'Separe grupos com + e use + ou - somente no modificador final.' }
    }

    const remainder = cursor.slice(1)
    if (!remainder) return { error: 'Informe um termo depois do operador.' }

    if (operator === '+' && /^(?:\d*)d\d+/.test(remainder)) {
      cursor = remainder
      continue
    }

    if (!/^\d+$/.test(remainder)) {
      return { error: operator === '-'
        ? 'Subtração de dados não é suportada; use apenas um modificador inteiro final.'
        : 'Use no máximo um modificador inteiro no final da expressão.' }
    }

    modifier = Number(`${operator}${remainder}`)
    if (!Number.isSafeInteger(modifier) || modifier > maxDiceRollModifier) return { error: 'O modificador precisa manter o total dentro de um inteiro seguro.' }
    cursor = ''
  }

  const normalizedGroups = normalizeGroups(groups)
  if (rollCount(normalizedGroups) > 40) return { error: 'O limite é de 40 dados.' }
  return {
    groups: normalizedGroups,
    modifier,
    expression: buildCommand(normalizedGroups, modifier),
  }
}

export function buildCommand(groups: DiceRollGroup[], modifier = 0) {
  const diceExpression = normalizeGroups(groups)
    .map((group) => `${group.count}d${group.sides}`)
    .join(' + ')
    .toUpperCase()

  if (!diceExpression || modifier === 0) return diceExpression
  return `${diceExpression} ${modifier > 0 ? '+' : '-'} ${Math.abs(modifier)}`
}

export function parseModifierInput(input: string): { modifier: number } | { error: string } {
  const normalized = input.trim()
  if (!normalized) return { modifier: 0 }
  if (!/^[+-]?\d+$/.test(normalized)) return { error: 'O modificador precisa ser um número inteiro.' }

  const modifier = Number(normalized)
  return Number.isSafeInteger(modifier) && modifier <= maxDiceRollModifier
    ? { modifier }
    : { error: 'O modificador precisa manter o total dentro de um inteiro seguro.' }
}

export function normalizeRollLabel(input: string): { label: string | null } | { error: string } {
  const normalized = input.trim()
  if (!normalized) return { label: null }
  if (normalized.length > 120) return { error: 'A identificação pode ter no máximo 120 caracteres.' }
  return { label: normalized }
}

export function extractRollResults(results: DiceEngineRollResult[], groups: DiceRollGroup[]): DiceRollResultGroup[] {
  const fallbackGroups = groups.map((group) => ({
    ...group,
    values: Array.from({ length: group.count }, () => rollFallbackValue(group.sides)),
  }))

  if (!Array.isArray(results) || !results.length) return fallbackGroups

  const bySides = new Map<DiceSides, number[]>()

  results.forEach((result) => {
    const sides = typeof result.sides === 'number' ? result.sides : Number(result.sides)
    if (!isDiceSides(sides)) return

    const value = normalizeRollValue(result.value, sides)
    if (value === null) return

    bySides.set(sides, [...(bySides.get(sides) ?? []), value])
  })

  return groups.map((group) => {
    const values = bySides.get(group.sides)?.slice(-group.count) ?? []
    while (values.length < group.count) values.push(rollFallbackValue(group.sides))
    return { ...group, values }
  })
}

export function normalizeRollValue(value: unknown, sides: DiceSides) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null
  return Math.max(1, Math.min(sides, Math.round(value)))
}

export function rollFallbackValue(sides: DiceSides) {
  return Math.floor(Math.random() * sides) + 1
}
