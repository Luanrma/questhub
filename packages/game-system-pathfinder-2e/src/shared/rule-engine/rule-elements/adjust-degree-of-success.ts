import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of an AdjustDegreeOfSuccess Rule Element (audited from
 * pf2e-master/packs and cross checked against
 * pf2e-master/src/module/rules/rule-element/adjust-degree-of-success.ts).
 * Note: at least one real compendium entry misspells the `adjustment`
 * field as `adjusment` — such entries do not match this resolver's shape
 * (same as the real Foundry schema, which requires the correctly-spelled
 * field) and are silently ignored, exactly like any other non-matching
 * rule element.
 */
export type Pathfinder2eDegreeOutcome = 'all' | 'criticalFailure' | 'failure' | 'success' | 'criticalSuccess'

export type Pathfinder2eDegreeAdjustmentAmount =
  | 'one-degree-better'
  | 'one-degree-worse'
  | 'two-degrees-better'
  | 'two-degrees-worse'
  | 'to-critical-failure'
  | 'to-failure'
  | 'to-success'
  | 'to-critical-success'

export type AdjustDegreeOfSuccessSource = {
  key: 'AdjustDegreeOfSuccess'
  selector: string
  adjustment: Partial<Record<Pathfinder2eDegreeOutcome, Pathfinder2eDegreeAdjustmentAmount>>
  predicate?: Predicate
}

export type SkippedAdjustDegreeOfSuccess = {
  source: AdjustDegreeOfSuccessSource
  reason: 'dynamic-selector' | 'predicate-not-satisfied'
}

export type ResolvedAdjustDegreeOfSuccess = {
  selector: string
  adjustment: Partial<Record<Pathfinder2eDegreeOutcome, Pathfinder2eDegreeAdjustmentAmount>>
}

export type AdjustDegreeOfSuccessResolution = {
  resolved: ResolvedAdjustDegreeOfSuccess[]
  skipped: SkippedAdjustDegreeOfSuccess[]
}

function isAdjustDegreeOfSuccessSource(rule: UnknownRuleElement): rule is AdjustDegreeOfSuccessSource {
  const adjustment = (rule as { adjustment?: unknown }).adjustment
  return rule.key === 'AdjustDegreeOfSuccess' && typeof (rule as { selector?: unknown }).selector === 'string' && typeof adjustment === 'object' && adjustment !== null
}

function containsDynamicSegment(value: string): boolean {
  return /\{[^}]*\}/.test(value)
}

export function resolveAdjustDegreeOfSuccess(rules: UnknownRuleElement[], rollOptions: RollOptions): AdjustDegreeOfSuccessResolution {
  const resolved: ResolvedAdjustDegreeOfSuccess[] = []
  const skipped: SkippedAdjustDegreeOfSuccess[] = []

  for (const rule of rules) {
    if (!isAdjustDegreeOfSuccessSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (containsDynamicSegment(rule.selector)) {
      skipped.push({ source: rule, reason: 'dynamic-selector' })
      continue
    }

    resolved.push({ selector: rule.selector, adjustment: rule.adjustment })
  }

  return { resolved, skipped }
}
