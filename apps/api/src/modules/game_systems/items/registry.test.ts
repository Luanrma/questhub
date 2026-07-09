import test from 'node:test'
import assert from 'node:assert/strict'
import { countCampaignItems, findCampaignItem, listCampaignItems } from './registry'

test('listCampaignItems returns Pathfinder 2e items ordered by level', () => {
  const items = listCampaignItems('PATHFINDER_2E')

  assert.ok(items)
  assert.equal(items.length, 24)
  for (let i = 1; i < items.length; i += 1) {
    assert.ok(items[i - 1].display.level && items[i].display.level)
  }
})

test('listCampaignItems filters Pathfinder 2e items by search term', () => {
  const items = listCampaignItems('PATHFINDER_2E', { search: 'dagger' })

  assert.ok(items)
  assert.ok(items.length > 0)
  assert.ok(items.every((item) => item.name.toLocaleLowerCase().includes('dagger') || item.display.tags.includes('dagger')))
})

test('listCampaignItems paginates Pathfinder 2e items', () => {
  const firstPage = listCampaignItems('PATHFINDER_2E', { limit: 2, offset: 0 })
  const secondPage = listCampaignItems('PATHFINDER_2E', { limit: 2, offset: 2 })

  assert.equal(firstPage?.length, 2)
  assert.equal(secondPage?.length, 2)
  assert.notDeepEqual(firstPage?.map((item) => item.id), secondPage?.map((item) => item.id))
})

test('countCampaignItems counts the complete extracted Pathfinder 2e item catalog', () => {
  assert.equal(countCampaignItems('PATHFINDER_2E'), 5217)
  assert.equal(countCampaignItems('PATHFINDER_2E', { filters: { itemType: 'weapon' } }), 908)
  assert.equal(countCampaignItems('PATHFINDER_2E', { filters: { itemType: 'armor' } }), 165)
})

test('listCampaignItems filters Pathfinder 2e items by itemType', () => {
  const shields = listCampaignItems('PATHFINDER_2E', { filters: { itemType: 'shield' }, limit: 200 })

  assert.ok(shields)
  assert.equal(shields.length, 98)
  assert.ok(shields.every((item) => item.itemType === 'shield'))
})

test('listCampaignItems filters Pathfinder 2e items by level and rarity', () => {
  const items = listCampaignItems('PATHFINDER_2E', {
    filters: {
      level: 0,
      rarity: 'common',
    },
    limit: 500,
  })

  assert.ok(items)
  assert.ok(items.length > 0)
  assert.ok(items.every((item) => item.display.level?.value === '+0' && item.display.tags.includes('common')))
})

test('listCampaignItems includes simplified sheet sections for Pathfinder 2e items', () => {
  const items = listCampaignItems('PATHFINDER_2E', { search: 'dagger' })
  const dagger = items?.find((item) => item.name === 'Dagger')

  assert.ok(dagger)
  assert.ok(dagger.display.sheet)
  assert.ok(dagger.display.sheet.sections.some((section) => section.key === 'details'))
  assert.ok(dagger.display.sheet.sections.some((section) => section.key === 'combat'))
})

test('findCampaignItem returns a Pathfinder 2e item by catalog id', () => {
  const dagger = findCampaignItem('PATHFINDER_2E', 'pf2e:equipment:dagger')

  assert.ok(dagger)
  assert.equal(dagger.name, 'Dagger')
  assert.equal(dagger.itemType, 'weapon')
  assert.ok(dagger.display.sheet?.sections.some((section) => section.key === 'combat'))
})

test('findCampaignItem returns null for an unknown item id', () => {
  assert.equal(findCampaignItem('PATHFINDER_2E', 'pf2e:equipment:not-an-item'), null)
})

test('listCampaignItems returns null for unsupported systems', () => {
  assert.equal(listCampaignItems('DND_5E'), null)
})
