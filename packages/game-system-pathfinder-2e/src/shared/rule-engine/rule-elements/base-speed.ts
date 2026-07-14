import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a BaseSpeed Rule Element (audited from pf2e-master/packs
 * and cross checked against
 * pf2e-master/src/module/rules/rule-element/base-speed.ts). The large
 * majority of real examples resolve `value` from `@actor.attributes...`
 * formulas, which this resolver does not evaluate — see `skipped`.
 */
export type BaseSpeedSource = {
  key: 'BaseSpeed'
  selector: string
  value: number | string
  predicate?: Predicate
}

export type SkippedBaseSpeed = {
  source: BaseSpeedSource
  reason: 'dynamic-value' | 'predicate-not-satisfied'
}

export type ResolvedBaseSpeed = {
  /** Movement type, with a trailing "-speed" suffix stripped (real system normalization). */
  selector: string
  value: number
}

export type BaseSpeedResolution = {
  resolved: ResolvedBaseSpeed[]
  skipped: SkippedBaseSpeed[]
}

function isBaseSpeedSource(rule: UnknownRuleElement): rule is BaseSpeedSource {
  const value = (rule as { value?: unknown }).value
  return rule.key === 'BaseSpeed' && typeof (rule as { selector?: unknown }).selector === 'string' && (typeof value === 'number' || typeof value === 'string')
}

function normalizeSelector(selector: string): string {
  return selector.trim().replace(/-speed$/, '')
}

export function resolveBaseSpeeds(rules: UnknownRuleElement[], rollOptions: RollOptions): BaseSpeedResolution {
  const resolved: ResolvedBaseSpeed[] = []
  const skipped: SkippedBaseSpeed[] = []

  for (const rule of rules) {
    if (!isBaseSpeedSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.value !== 'number') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    resolved.push({ selector: normalizeSelector(rule.selector), value: rule.value })
  }

  return { resolved, skipped }
}
