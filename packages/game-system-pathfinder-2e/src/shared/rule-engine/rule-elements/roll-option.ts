import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a RollOption Rule Element as found in the PF2e compendium,
 * cross checked against the real Foundry system source at
 * pf2e-master/src/module/rules/rule-element/roll-option/{data,rule-element}.ts.
 * Only the static, non-interactive subset is resolved here: `toggleable`
 * and `suboptions` require actor-persisted UI selection state this
 * substrate does not have, and `value` as a resolvable formula (a string
 * other than a plain boolean) is not evaluated — see skipped reasons.
 */
export type RollOptionSource = {
  key: 'RollOption'
  domain: string
  option: string
  value?: boolean
  predicate?: Predicate
  toggleable?: boolean | 'totm'
  suboptions?: unknown
  count?: boolean
}

export type SkippedRollOption = {
  source: RollOptionSource
  reason: 'dynamic-option' | 'predicate-not-satisfied' | 'toggleable-not-resolved' | 'suboptions-not-resolved' | 'count-not-resolved'
}

export type ResolvedRollOption = {
  domain: string
  option: string
  active: boolean
}

export type RollOptionResolution = {
  resolved: ResolvedRollOption[]
  skipped: SkippedRollOption[]
}

function isRollOptionSource(rule: UnknownRuleElement): rule is RollOptionSource {
  return rule.key === 'RollOption' && typeof (rule as { domain?: unknown }).domain === 'string' && typeof (rule as { option?: unknown }).option === 'string'
}

function containsDynamicSegment(value: string): boolean {
  return /\{[^}]*\}/.test(value)
}

/** Reproduces the real #resolveOption sanitization from rule-element.ts. */
function sanitizeOption(rawOption: string): string {
  return rawOption
    .replace(/[^-:\w]/g, '')
    .replace(/:+/g, ':')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Resolves the RollOption Rule Elements found in a list of raw rule
 * elements against a roll option context, producing the option strings
 * that should be added to (or explicitly withheld from) that context.
 * `domain` is exposed as metadata rather than folded into `option` — in
 * the real system it buckets which roll asks for which options, it is not
 * a string prefix baked into the option value itself.
 */
export function resolveRollOptions(rules: UnknownRuleElement[], rollOptions: RollOptions): RollOptionResolution {
  const resolved: ResolvedRollOption[] = []
  const skipped: SkippedRollOption[] = []

  for (const rule of rules) {
    if (!isRollOptionSource(rule)) continue

    if (rule.toggleable) {
      skipped.push({ source: rule, reason: 'toggleable-not-resolved' })
      continue
    }
    if (rule.suboptions) {
      skipped.push({ source: rule, reason: 'suboptions-not-resolved' })
      continue
    }
    if (rule.count) {
      skipped.push({ source: rule, reason: 'count-not-resolved' })
      continue
    }
    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }
    if (containsDynamicSegment(rule.option)) {
      skipped.push({ source: rule, reason: 'dynamic-option' })
      continue
    }

    resolved.push({ domain: rule.domain, option: sanitizeOption(rule.option), active: rule.value ?? true })
  }

  return { resolved, skipped }
}
