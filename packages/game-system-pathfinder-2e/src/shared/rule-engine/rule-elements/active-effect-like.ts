import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of an ActiveEffectLike Rule Element (audited from
 * pf2e-master/packs and cross checked against
 * pf2e-master/src/module/rules/rule-element/ae-like.ts). This is PF2e's
 * generic "change an arbitrary actor data path" primitive. The real
 * system computes a new value by combining `mode` with the actor's
 * *current* value at `path` (e.g. add/multiply/upgrade against whatever
 * is already there) — this resolver has no actor context to read that
 * current value from, so it only exposes the pending change
 * (mode/path/value) rather than computing a final resolved value.
 */
export const ACTIVE_EFFECT_LIKE_MODES = ['multiply', 'add', 'subtract', 'remove', 'downgrade', 'upgrade', 'override'] as const

export type ActiveEffectLikeMode = (typeof ACTIVE_EFFECT_LIKE_MODES)[number]

export type ActiveEffectLikeSource = {
  key: 'ActiveEffectLike'
  mode: ActiveEffectLikeMode
  path: string
  value: number | string | boolean
  predicate?: Predicate
  phase?: string
  merge?: boolean
}

export type SkippedActiveEffectLike = {
  source: ActiveEffectLikeSource
  reason: 'dynamic-value' | 'predicate-not-satisfied'
}

export type ResolvedActiveEffectLike = {
  mode: ActiveEffectLikeMode
  path: string
  value: number | boolean
  phase: string
  merge: boolean
}

export type ActiveEffectLikeResolution = {
  resolved: ResolvedActiveEffectLike[]
  skipped: SkippedActiveEffectLike[]
}

function isActiveEffectLikeSource(rule: UnknownRuleElement): rule is ActiveEffectLikeSource {
  return (
    rule.key === 'ActiveEffectLike' &&
    ACTIVE_EFFECT_LIKE_MODES.includes((rule as { mode?: unknown }).mode as ActiveEffectLikeMode) &&
    typeof (rule as { path?: unknown }).path === 'string'
  )
}

export function resolveActiveEffectLikes(rules: UnknownRuleElement[], rollOptions: RollOptions): ActiveEffectLikeResolution {
  const resolved: ResolvedActiveEffectLike[] = []
  const skipped: SkippedActiveEffectLike[] = []

  for (const rule of rules) {
    if (!isActiveEffectLikeSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.value === 'string') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    resolved.push({
      mode: rule.mode,
      path: rule.path,
      value: rule.value,
      phase: rule.phase ?? 'applyAEs',
      merge: rule.merge ?? false,
    })
  }

  return { resolved, skipped }
}
