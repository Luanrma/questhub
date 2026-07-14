import { testPredicate } from '../predicates'
import type { Predicate } from '../predicates'
import type { RollOptions } from '../roll-options'
import type { UnknownRuleElement } from './flat-modifier'

/**
 * Raw shape of a Note Rule Element (audited from pf2e-master/packs and
 * cross checked against pf2e-master/src/module/rules/rule-element/roll-note.ts).
 * Notes are chat-display text attached to a roll selector; `text`/`title`
 * are passed through as raw strings without resolving embedded Foundry
 * expressions ("{item|name}") — that substitution belongs to a renderer
 * with real item/actor context, not this substrate.
 */
export type NoteSource = {
  key: 'Note'
  selector: string | string[]
  text: string
  title?: string | null
  predicate?: Predicate
  outcome?: string[]
}

export type SkippedNote = {
  source: NoteSource
  reason: 'predicate-not-satisfied'
}

export type ResolvedNote = {
  selector: string
  text: string
  title: string | null
  outcome: string[] | null
}

export type NoteResolution = {
  resolved: ResolvedNote[]
  skipped: SkippedNote[]
}

function isNoteSource(rule: UnknownRuleElement): rule is NoteSource {
  const selector = (rule as { selector?: unknown }).selector
  const text = (rule as { text?: unknown }).text
  return rule.key === 'Note' && (typeof selector === 'string' || Array.isArray(selector)) && typeof text === 'string'
}

export function resolveNotes(rules: UnknownRuleElement[], rollOptions: RollOptions): NoteResolution {
  const resolved: ResolvedNote[] = []
  const skipped: SkippedNote[] = []

  for (const rule of rules) {
    if (!isNoteSource(rule)) continue

    if (rule.predicate && !testPredicate(rule.predicate, rollOptions)) {
      skipped.push({ source: rule, reason: 'predicate-not-satisfied' })
      continue
    }

    const selectors = Array.isArray(rule.selector) ? rule.selector : [rule.selector]
    for (const selector of selectors) {
      resolved.push({ selector, text: rule.text, title: rule.title ?? null, outcome: rule.outcome ?? null })
    }
  }

  return { resolved, skipped }
}
