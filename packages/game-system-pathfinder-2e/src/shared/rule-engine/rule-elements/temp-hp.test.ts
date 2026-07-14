import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveTempHp } from './temp-hp'
import type { TempHpSource } from './temp-hp'

// Real TempHP rule elements audited from pf2e-master/packs/spell-effects and conditions.

const STATIC_TEMP_HP: TempHpSource = { key: 'TempHP', value: 30 }
const DYNAMIC_TEMP_HP: TempHpSource = { key: 'TempHP', value: '@item.level' }
const PREDICATED_TEMP_HP: TempHpSource = {
  key: 'TempHP',
  predicate: ['self:effect:cinder-gaze:2'],
  value: '2 * @item.level - 1 + @item.system.context.origin.spellcasting.attribute.mod',
}

test('a static TempHP value resolves', () => {
  const { resolved, skipped } = resolveTempHp([STATIC_TEMP_HP], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ value: 30 }])
})

test('a dynamic (formula) TempHP value is reported as skipped, never evaluated', () => {
  const { resolved, skipped } = resolveTempHp([DYNAMIC_TEMP_HP], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'dynamic-value')
})

test('predicate gating is checked before the dynamic-value check', () => {
  const { skipped } = resolveTempHp([PREDICATED_TEMP_HP], createRollOptions([]))
  assert.equal(skipped[0]?.reason, 'predicate-not-satisfied')
})

test('a non-positive TempHP value is reported as skipped', () => {
  const { resolved, skipped } = resolveTempHp([{ key: 'TempHP', value: 0 }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped[0]?.reason, 'non-positive-value')
})

test('non-TempHP rule elements are ignored', () => {
  const { resolved, skipped } = resolveTempHp([{ key: 'GrantItem', uuid: 'Compendium.pf2e.conditionitems.Item.Quickened' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
