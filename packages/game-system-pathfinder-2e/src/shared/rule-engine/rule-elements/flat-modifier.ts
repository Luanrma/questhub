import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { Modifier, Pathfinder2eModifierType } from '../modifiers'

/**
 * Raw shape of a FlatModifier Rule Element as found in the PF2e compendium
 * (audited from pf2e-master/packs/spell-effects and conditions, not
 * invented from documentation). `value` and `selector` can both carry
 * dynamic Foundry expressions ("{item|...}", "@item.level" formulas) that
 * this resolver deliberately does not evaluate — see skipped reasons below.
 */
export type UnknownRuleElement = Record<string, unknown> & { key: string }

export type FlatModifierSource = {
  key: 'FlatModifier'
  selector: string | string[]
  type: Pathfinder2eModifierType
  value: number | string | Record<string, unknown>
  predicate?: Predicate
  slug?: string
  label?: string
}

export type SkippedFlatModifier = {
  source: FlatModifierSource
  reason: 'dynamic-value' | 'dynamic-selector' | 'predicate-not-satisfied'
}

export type FlatModifierResolution = {
  modifiers: Modifier[]
  skipped: SkippedFlatModifier[]
}

function isFlatModifierSource(rule: UnknownRuleElement): rule is FlatModifierSource {
  return rule.key === 'FlatModifier' && (typeof (rule as { selector?: unknown }).selector === 'string' || Array.isArray((rule as { selector?: unknown }).selector))
}

function isDynamicSelector(selector: string): boolean {
  return selector.startsWith('{') && selector.endsWith('}')
}

function slugFor(source: FlatModifierSource, selector: string, index: number): string {
  return source.slug ?? `flat-modifier:${selector}:${index}`
}

/**
 * Resolves the FlatModifier Rule Elements found in a list of raw rule
 * elements against a roll option context. Only numeric, statically-named
 * selectors are resolved into Modifiers; anything requiring a Foundry
 * expression evaluator (dynamic value formulas, "{item|...}" selectors) is
 * reported in `skipped` instead of silently dropped or guessed at.
 */
export function resolveFlatModifiers(rules: UnknownRuleElement[], rollOptions: RollOptions): FlatModifierResolution {
  const modifiers: Modifier[] = []
  const skipped: SkippedFlatModifier[] = []
  let index = 0

  for (const rule of rules) {
    if (!isFlatModifierSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    if (typeof rule.value !== 'number') {
      skipped.push({ source: rule, reason: 'dynamic-value' })
      continue
    }

    const selectors = Array.isArray(rule.selector) ? rule.selector : [rule.selector]
    const dynamicSelectors = selectors.filter(isDynamicSelector)
    if (dynamicSelectors.length > 0) {
      skipped.push({ source: rule, reason: 'dynamic-selector' })
      continue
    }

    for (const selector of selectors) {
      modifiers.push({
        slug: slugFor(rule, selector, index),
        label: rule.label ?? rule.slug ?? selector,
        selector,
        type: rule.type,
        value: rule.value,
        predicate: rule.predicate,
      })
      index += 1
    }
  }

  return { modifiers, skipped }
}
