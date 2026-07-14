import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a FastHealing Rule Element (audited from pf2e-master/packs
 * and cross checked against
 * pf2e-master/src/module/rules/rule-element/fast-healing.ts, which
 * defaults `type` to `'fast-healing'`). Most real values are formulas
 * (`"@item.level * 2"`), skipped like TempHP's.
 */
export type FastHealingSource = {
  key: 'FastHealing'
  value: number | string
  predicate?: Predicate
  type?: 'fast-healing' | 'regeneration'
  deactivatedBy?: unknown
}

export type SkippedFastHealing = {
  source: FastHealingSource
  reason: 'dynamic-value' | 'non-positive-value' | 'predicate-not-satisfied'
}

export type ResolvedFastHealing = {
  value: number
  type: 'fast-healing' | 'regeneration'
}

export type FastHealingResolution = {
  resolved: ResolvedFastHealing[]
  skipped: SkippedFastHealing[]
}

function isFastHealingSource(rule: UnknownRuleElement): rule is FastHealingSource {
  const value = (rule as { value?: unknown }).value
  return rule.key === 'FastHealing' && (typeof value === 'number' || typeof value === 'string')
}

export function resolveFastHealing(rules: UnknownRuleElement[], rollOptions: RollOptions): FastHealingResolution {
  const resolved: ResolvedFastHealing[] = []
  const skipped: SkippedFastHealing[] = []

  for (const rule of rules) {
    if (!isFastHealingSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.value !== 'number') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    const value = Math.floor(rule.value)
    if (value <= 0) {
      skipped.push({ source: rule, reason: 'non-positive-value' })
      continue
    }

    resolved.push({ value, type: rule.type ?? 'fast-healing' })
  }

  return { resolved, skipped }
}
