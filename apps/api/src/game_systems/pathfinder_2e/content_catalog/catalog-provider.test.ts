import assert from 'node:assert/strict'
import test from 'node:test'
import { pathfinder2eCatalogProvider } from './catalog-provider'

test('reviewed filter works without rendering a positive editorial tag', async () => {
  const ready = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    editorialStatus: 'ready',
    page: 1,
    limit: 2,
  })
  const review = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    editorialStatus: 'review',
    page: 1,
    limit: 100,
  })

  assert.equal(ready.pagination.total, 3)
  assert.equal(ready.entries.length, 2)
  assert.equal(ready.pagination.totalPages, 2)
  assert.equal(ready.entries.every((entry) => entry.editorialStatus === null), true)
  assert.equal(review.pagination.total, 1_319)
  assert.equal(review.entries.length, 100)
  assert.equal(
    review.entries.every((entry) => entry.editorialStatus?.label === 'Tradução em revisão'),
    true,
  )
})

test('Bestiary filter separates creatures and hazards before pagination', async () => {
  const all = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    bestiaryType: 'all',
    page: 1,
    limit: 24,
  })
  const creatures = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    bestiaryType: 'creatures',
    page: 1,
    limit: 24,
  })
  const hazards = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    bestiaryType: 'hazards',
    page: 1,
    limit: 24,
  })

  assert.equal(hazards.pagination.total > 0, true)
  assert.equal(all.pagination.total, creatures.pagination.total + hazards.pagination.total)
  assert.equal(
    hazards.entries.every((entry) => entry.stats?.some((stat) => stat.label === 'Tipo')),
    true,
  )
  assert.equal(
    creatures.entries.every((entry) => !entry.stats?.some((stat) => stat.label === 'Tipo')),
    true,
  )
})

test('catalog exposes only QuestHub-local API icon paths', async () => {
  for (const domain of ['BESTIARY', 'SPELLS', 'ITEMS'] as const) {
    const result = await pathfinder2eCatalogProvider.list({
      campaignId: 'campaign-1',
      domain,
      locale: 'pt-BR',
      page: 1,
      limit: 24,
    })

    assert.equal(
      result.entries.every((entry) => (
        entry.imageUrl === null
        || entry.imageUrl?.startsWith('/api/game-systems/pathfinder-2e/icons/')
      )),
      true,
    )
  }
})

test('catalog associates only exact icons available in the local package', async () => {
  const bestiary = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    page: 1,
    limit: 100,
  })

  const getImage = async (
    domain: 'SPELLS' | 'ITEMS',
    contentId: string,
  ) => (
    await pathfinder2eCatalogProvider.get({
      campaignId: 'campaign-1',
      domain,
      locale: 'pt-BR',
      contentId,
    })
  )?.imageUrl

  assert.equal(
    bestiary.entries.every((entry) => (
      entry.imageUrl === '/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg'
      || entry.imageUrl === '/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg'
    )),
    true,
  )
  assert.equal(
    await getImage('SPELLS', 'pf2e:spell:spells-srd:force-barrage'),
    '/api/game-systems/pathfinder-2e/icons/spells/magic-missile.webp',
  )
  assert.equal(await getImage('SPELLS', 'pf2e:spell:spells-srd:electric-arc'), null)
  assert.equal(await getImage('SPELLS', 'pf2e:spell:spells-srd:heal'), null)
  assert.equal(await getImage('SPELLS', 'pf2e:spell:spells-srd:blazing-bolt'), null)
  assert.equal(
    await getImage('SPELLS', 'pf2e:spell:spells-srd:dispel-magic'),
    '/api/game-systems/pathfinder-2e/icons/spells/dispel-magic.webp',
  )
  assert.equal(
    await getImage('SPELLS', 'pf2e:spell:spells-srd:invisibility'),
    '/api/game-systems/pathfinder-2e/icons/spells/invisibility.webp',
  )
  assert.equal(
    await getImage('ITEMS', 'pf2e:item:equipment-srd:dogslicer'),
    '/api/game-systems/pathfinder-2e/icons/equipment/weapons/dogslicer.webp',
  )
  assert.equal(await getImage('ITEMS', 'pf2e:item:equipment-srd:shortbow'), null)
  assert.equal(await getImage('ITEMS', 'pf2e:item:equipment-srd:leather-armor'), null)
  assert.equal(
    await getImage('ITEMS', 'pf2e:item:equipment-srd:full-plate'),
    '/api/game-systems/pathfinder-2e/icons/equipment/armor/fullplate.webp',
  )
  assert.equal(await getImage('ITEMS', 'pf2e:item:equipment-srd:healers-toolkit-expanded'), null)
  assert.equal(await getImage('ITEMS', 'pf2e:item:equipment-srd:spyglass-fine'), null)
})

test('entities without an exact local icon keep their complete detail sheet', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:electric-arc',
  })

  assert.ok(sheet)
  assert.equal(sheet.imageUrl, null)
  assert.equal(sheet.name, 'Arco Elétrico')
  assert.equal(sheet.sections.length > 0, true)
})
