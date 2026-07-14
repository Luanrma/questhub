import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a TokenLight Rule Element (audited from pf2e-master/packs).
 * `value` mirrors Foundry's own token light data (bright/dim/color/
 * animation) and is passed through unmodified — this is display/lighting
 * configuration, not a mechanical value this substrate needs to compute.
 */
export type TokenLightValue = {
  bright?: number
  dim?: number
  color?: string
  animation?: { type?: string; intensity?: number; speed?: number }
}

export type TokenLightSource = {
  key: 'TokenLight'
  value: TokenLightValue
  predicate?: Predicate
}

export type SkippedTokenLight = {
  source: TokenLightSource
  reason: 'predicate-not-satisfied'
}

export type TokenLightResolution = {
  resolved: TokenLightValue[]
  skipped: SkippedTokenLight[]
}

function isTokenLightSource(rule: UnknownRuleElement): rule is TokenLightSource {
  const value = (rule as { value?: unknown }).value
  return rule.key === 'TokenLight' && typeof value === 'object' && value !== null
}

export function resolveTokenLights(rules: UnknownRuleElement[], rollOptions: RollOptions): TokenLightResolution {
  const resolved: TokenLightValue[] = []
  const skipped: SkippedTokenLight[] = []

  for (const rule of rules) {
    if (!isTokenLightSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    resolved.push(rule.value)
  }

  return { resolved, skipped }
}
