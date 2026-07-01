import { diceOptions } from '../config/constants'
import type { DiceRollGroup, DiceRollResultGroup, DiceSides } from './types'

export type DiceEngineRollResult = {
  sides: number | string
  value: unknown
}

export function isDiceSides(value: number): value is DiceSides {
  return value === 4 || value === 6 || value === 8 || value === 10 || value === 12 || value === 20
}

export function normalizeGroups(groups: DiceRollGroup[]) {
  return diceOptions
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

export function parseDiceCommand(input: string): { groups: DiceRollGroup[]; command: string } | { error: string } {
  const normalized = input.trim().toLowerCase().replace(/\s+/g, '')
  if (!normalized) return { error: 'Informe uma rolagem.' }

  const parts = normalized.split('-').filter(Boolean)
  if (!parts.length || parts.join('-') !== normalized) return { error: 'Use o formato 1d20-5d6-3d10.' }

  const groups: DiceRollGroup[] = []

  for (const part of parts) {
    const match = part.match(/^(\d*)d(\d+)$/)
    if (!match) return { error: 'Use apenas grupos como 1d20, 5d6 ou 3d10.' }

    const count = match[1] ? Number(match[1]) : 1
    const sides = Number(match[2])

    if (!Number.isInteger(count) || count <= 0) return { error: 'A quantidade de dados precisa ser maior que zero.' }
    if (!isDiceSides(sides)) return { error: 'Use apenas D4, D6, D8, D10, D12 ou D20.' }

    groups.push({ sides, count })
  }

  const normalizedGroups = normalizeGroups(groups)
  const command = buildCommand(normalizedGroups)
  return { groups: normalizedGroups, command }
}

export function buildCommand(groups: DiceRollGroup[]) {
  return normalizeGroups(groups)
    .map((group) => `${group.count}d${group.sides}`)
    .join('-')
    .toUpperCase()
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

export function formatChatMessage(command: string, groups: DiceRollResultGroup[]) {
  const total = groups.reduce((sum, group) => sum + group.values.reduce((groupSum, value) => groupSum + value, 0), 0)
  const details = groups.map((group) => `D${group.sides}: ${group.values.join(', ')}`).join(' | ')
  return `ROLOU ${command} | ${details} | TOTAL: ${total}`
}

export function normalizeRollValue(value: unknown, sides: DiceSides) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null
  return Math.max(1, Math.min(sides, Math.round(value)))
}

export function rollFallbackValue(sides: DiceSides) {
  return Math.floor(Math.random() * sides) + 1
}
