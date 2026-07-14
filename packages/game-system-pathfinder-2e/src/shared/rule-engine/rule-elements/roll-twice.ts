import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a RollTwice Rule Element (audited from pf2e-master/packs).
 * No dynamic value to worry about here: `keep`/`selector` are always
 * static strings in the real data.
 */
export type RollTwiceSource = {
  key: 'RollTwice'
  keep: 'higher' | 'lower'
  selector: string
  predicate?: Predicate
  removeAfterRoll?: boolean
}

export type SkippedRollTwice = {
  source: RollTwiceSource
  reason: 'predicate-not-satisfied'
}

export type ResolvedRollTwice = {
  keep: 'higher' | 'lower'
  selector: string
  removeAfterRoll: boolean
}

export type RollTwiceResolution = {
  resolved: ResolvedRollTwice[]
  skipped: SkippedRollTwice[]
}

function isRollTwiceSource(rule: UnknownRuleElement): rule is RollTwiceSource {
  const keep = (rule as { keep?: unknown }).keep
  return rule.key === 'RollTwice' && (keep === 'higher' || keep === 'lower') && typeof (rule as { selector?: unknown }).selector === 'string'
}

export function resolveRollTwice(rules: UnknownRuleElement[], rollOptions: RollOptions): RollTwiceResolution {
  const resolved: ResolvedRollTwice[] = []
  const skipped: SkippedRollTwice[] = []

  for (const rule of rules) {
    if (!isRollTwiceSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    resolved.push({ keep: rule.keep, selector: rule.selector, removeAfterRoll: rule.removeAfterRoll ?? false })
  }

  return { resolved, skipped }
}
