import assert from 'node:assert/strict'
import test from 'node:test'
import {
  circularEncounterOffset,
  encounterCarouselCardProminence,
  encounterCarouselMaximumVisibleCards,
  encounterCarouselWindow,
  isEncounterCarouselOffsetVisible,
} from '../src/vtt/table/domain/encounterCarousel'

test('encounter carousel caps the visible window at ten participants', () => {
  const window = encounterCarouselWindow(20, 2000, true)

  assert.equal(window.visibleLimit, encounterCarouselMaximumVisibleCards)
  assert.equal(window.leftSlots + window.rightSlots + 1, 10)
})

test('encounter carousel reserves navigation space before showing more cards', () => {
  const withoutNavigation = encounterCarouselWindow(20, 1520, false)
  const withNavigation = encounterCarouselWindow(20, 1520, true)

  assert.equal(withoutNavigation.visibleLimit, 10)
  assert.equal(withNavigation.visibleLimit, 9)
})

test('encounter carousel reveals additional participants only as the active turn moves', () => {
  const { leftSlots, rightSlots } = encounterCarouselWindow(12, 2000)
  const before = Array.from({ length: 12 }, (_, index) => ({
    index,
    offset: circularEncounterOffset(index, 0, 12),
  })).filter((item) => (
    isEncounterCarouselOffsetVisible(item.offset, leftSlots, rightSlots)
  ))
  const after = Array.from({ length: 12 }, (_, index) => ({
    index,
    offset: circularEncounterOffset(index, 1, 12),
  })).filter((item) => (
    isEncounterCarouselOffsetVisible(item.offset, leftSlots, rightSlots)
  ))

  assert.equal(before.length, 10)
  assert.equal(after.length, 10)
  assert.notDeepEqual(
    before.map((item) => item.index),
    after.map((item) => item.index),
  )
})

test('encounter carousel fades cards progressively toward both edges', () => {
  const center = encounterCarouselCardProminence(0)
  const nearest = encounterCarouselCardProminence(1)
  const middle = encounterCarouselCardProminence(3)
  const farthest = encounterCarouselCardProminence(5)

  assert.equal(center, 1)
  assert.ok(nearest > 0.9)
  assert.ok(center > nearest)
  assert.ok(nearest > middle)
  assert.ok(middle > farthest)
  assert.ok(farthest < 0.5)
  assert.equal(encounterCarouselCardProminence(-3), middle)
})
