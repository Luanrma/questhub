import type { Predicate } from './predicates'

export type Pathfinder2eModifierType = 'circumstance' | 'status' | 'item' | 'untyped'

export type Modifier = {
  slug: string
  label: string
  selector: string
  type: Pathfinder2eModifierType
  value: number
  predicate?: Predicate
  enabled?: boolean
}

export type StackingResult = {
  total: number
  applied: Modifier[]
}

const NAMED_TYPES: Exclude<Pathfinder2eModifierType, 'untyped'>[] = ['circumstance', 'status', 'item']

export function applyStackingRules(modifiers: Modifier[]): StackingResult {
  const byType = new Map<Pathfinder2eModifierType, Modifier[]>()
  for (const modifier of modifiers) {
    const group = byType.get(modifier.type)
    if (group) group.push(modifier)
    else byType.set(modifier.type, [modifier])
  }

  const applied: Modifier[] = []
  let total = 0

  for (const modifier of byType.get('untyped') ?? []) {
    applied.push(modifier)
    total += modifier.value
  }

  for (const type of NAMED_TYPES) {
    const group = byType.get(type) ?? []
    const bonuses = group.filter((modifier) => modifier.value > 0)
    const penalties = group.filter((modifier) => modifier.value < 0)

    if (bonuses.length > 0) {
      const best = bonuses.reduce((max, modifier) => (modifier.value > max.value ? modifier : max))
      applied.push(best)
      total += best.value
    }

    if (penalties.length > 0) {
      const worst = penalties.reduce((min, modifier) => (modifier.value < min.value ? modifier : min))
      applied.push(worst)
      total += worst.value
    }
  }

  return { total, applied }
}
