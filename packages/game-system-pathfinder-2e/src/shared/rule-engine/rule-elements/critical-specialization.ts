import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a CriticalSpecialization Rule Element (audited from
 * pf2e-master/packs). Enables a weapon's critical specialization effect
 * when its predicate passes; carries no value of its own.
 */
export type CriticalSpecializationSource = {
  key: 'CriticalSpecialization'
  predicate?: Predicate
}

export type SkippedCriticalSpecialization = {
  source: CriticalSpecializationSource
  reason: 'predicate-not-satisfied'
}

export type CriticalSpecializationResolution = {
  /** How many CriticalSpecialization rule elements are currently active. */
  activeCount: number
  skipped: SkippedCriticalSpecialization[]
}

function isCriticalSpecializationSource(rule: UnknownRuleElement): rule is CriticalSpecializationSource {
  return rule.key === 'CriticalSpecialization'
}

export function resolveCriticalSpecialization(rules: UnknownRuleElement[], rollOptions: RollOptions): CriticalSpecializationResolution {
  let activeCount = 0
  const skipped: SkippedCriticalSpecialization[] = []

  for (const rule of rules) {
    if (!isCriticalSpecializationSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    activeCount += 1
  }

  return { activeCount, skipped }
}
