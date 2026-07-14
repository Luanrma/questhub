import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveNotes } from './note'
import type { NoteSource } from './note'

// Real Note rule elements audited from pf2e-master/packs/spell-effects and conditions.

const GRAB_NOTE: NoteSource = {
  key: 'Note',
  selector: 'claw-damage',
  text: 'PF2E.BattleForm.Note.Grab',
  title: '{item|name}',
}

const CRITICAL_OUTCOME_NOTE: NoteSource = {
  key: 'Note',
  outcome: ['criticalSuccess'],
  selector: 'piercing-hymn-damage',
  text: 'PF2E.BattleForm.AngelForm.DeafenedNote',
  title: '{item|name}',
}

const PREDICATED_NOTE: NoteSource = {
  key: 'Note',
  predicate: ['action:squeeze'],
  selector: 'acrobatics',
  text: 'PF2E.BattleForm.AberrantForm.GugSqueezeNote',
  title: '{item|name}',
}

test('a Note resolves with its raw text/title passed through unresolved', () => {
  const { resolved, skipped } = resolveNotes([GRAB_NOTE], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ selector: 'claw-damage', text: 'PF2E.BattleForm.Note.Grab', title: '{item|name}', outcome: null }])
})

test('outcome restriction is preserved as-is', () => {
  const { resolved } = resolveNotes([CRITICAL_OUTCOME_NOTE], createRollOptions([]))
  assert.deepEqual(resolved[0]?.outcome, ['criticalSuccess'])
})

test('a predicate gates whether the note is shown', () => {
  const withoutAction = resolveNotes([PREDICATED_NOTE], createRollOptions([]))
  assert.equal(withoutAction.resolved.length, 0)
  assert.equal(withoutAction.skipped[0]?.reason, 'predicate-not-satisfied')

  const withAction = resolveNotes([PREDICATED_NOTE], createRollOptions(['action:squeeze']))
  assert.equal(withAction.resolved.length, 1)
})

test('an array selector produces one resolved note per selector', () => {
  const source: NoteSource = { key: 'Note', selector: ['claw-damage', 'jaws-damage'], text: 'Some note' }
  const { resolved } = resolveNotes([source], createRollOptions([]))
  assert.deepEqual(
    resolved.map((note) => note.selector),
    ['claw-damage', 'jaws-damage'],
  )
})

test('non-Note rule elements are ignored', () => {
  const { resolved, skipped } = resolveNotes([{ key: 'GrantItem', uuid: 'Compendium.pf2e.conditionitems.Item.Quickened' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
