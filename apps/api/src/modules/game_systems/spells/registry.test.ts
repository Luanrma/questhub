import test from 'node:test'
import assert from 'node:assert/strict'
import { countCampaignSpells, findCampaignSpell, listCampaignSpells } from './registry'

test('listCampaignSpells returns Pathfinder 2e spells ordered by rank', () => {
  const spells = listCampaignSpells('PATHFINDER_2E')

  assert.ok(spells)
  assert.equal(spells.length, 24)
  for (let i = 1; i < spells.length; i += 1) {
    assert.ok(spells[i - 1].display.level && spells[i].display.level)
  }
})

test('listCampaignSpells filters Pathfinder 2e spells by search term', () => {
  const spells = listCampaignSpells('PATHFINDER_2E', { search: 'fireball' })

  assert.ok(spells)
  assert.ok(spells.length > 0)
  assert.ok(spells.every((spell) => spell.name.toLocaleLowerCase().includes('fireball')))
})

test('listCampaignSpells paginates Pathfinder 2e spells', () => {
  const firstPage = listCampaignSpells('PATHFINDER_2E', { limit: 2, offset: 0 })
  const secondPage = listCampaignSpells('PATHFINDER_2E', { limit: 2, offset: 2 })

  assert.equal(firstPage?.length, 2)
  assert.equal(secondPage?.length, 2)
  assert.notDeepEqual(firstPage?.map((spell) => spell.id), secondPage?.map((spell) => spell.id))
})

test('countCampaignSpells counts the complete extracted Pathfinder 2e spell catalog', () => {
  assert.equal(countCampaignSpells('PATHFINDER_2E'), 1716)
  assert.equal(countCampaignSpells('PATHFINDER_2E', { filters: { category: 'ritual' } }), 134)
  assert.equal(countCampaignSpells('PATHFINDER_2E', { filters: { category: 'spell' } }), 1582)
})

test('listCampaignSpells filters Pathfinder 2e spells by category', () => {
  const rituals = listCampaignSpells('PATHFINDER_2E', { filters: { category: 'ritual' }, limit: 200 })

  assert.ok(rituals)
  assert.equal(rituals.length, 134)
  assert.ok(rituals.every((spell) => spell.category === 'ritual'))
})

test('listCampaignSpells filters Pathfinder 2e spells by rank and rarity', () => {
  const spells = listCampaignSpells('PATHFINDER_2E', {
    filters: {
      rank: 1,
      rarity: 'common',
    },
    limit: 500,
  })

  assert.ok(spells)
  assert.ok(spells.length > 0)
  assert.ok(
    spells.every(
      (spell) => (spell.display.level?.value === '1' || spell.display.level?.value === 'Truque') && spell.display.tags.includes('common'),
    ),
  )
})

test('listCampaignSpells includes simplified sheet sections for Pathfinder 2e spells', () => {
  const spells = listCampaignSpells('PATHFINDER_2E', { search: 'fireball' })
  const fireball = spells?.find((spell) => spell.name === 'Fireball')

  assert.ok(fireball)
  assert.ok(fireball.display.sheet)
  assert.ok(fireball.display.sheet.sections.some((section) => section.key === 'casting'))
  assert.ok(fireball.display.sheet.sections.some((section) => section.key === 'targeting'))
  assert.ok(!fireball.display.sheet.sections.some((section) => section.key === 'ritual'))
})

test('listCampaignSpells includes the ritual section only for rituals', () => {
  const rituals = listCampaignSpells('PATHFINDER_2E', { filters: { category: 'ritual' }, limit: 1 })
  const ritual = rituals?.[0]

  assert.ok(ritual)
  assert.ok(ritual.display.sheet?.sections.some((section) => section.key === 'ritual'))
})

test('findCampaignSpell returns a Pathfinder 2e spell by catalog id', () => {
  const spells = listCampaignSpells('PATHFINDER_2E', { search: 'fireball' })
  const fireball = spells?.find((spell) => spell.name === 'Fireball')
  assert.ok(fireball)

  const found = findCampaignSpell('PATHFINDER_2E', fireball.id)

  assert.ok(found)
  assert.equal(found.name, 'Fireball')
  assert.equal(found.category, 'spell')
})

test('findCampaignSpell returns null for an unknown spell id', () => {
  assert.equal(findCampaignSpell('PATHFINDER_2E', 'pf2e:spells:not-a-spell'), null)
})

test('listCampaignSpells returns null for unsupported systems', () => {
  assert.equal(listCampaignSpells('DND_5E'), null)
})
