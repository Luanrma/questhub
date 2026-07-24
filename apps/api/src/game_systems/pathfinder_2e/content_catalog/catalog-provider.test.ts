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
    limit: 24,
  })

  assert.equal(ready.pagination.total, 3)
  assert.equal(ready.entries.length, 2)
  assert.equal(ready.pagination.totalPages, 2)
  assert.equal(ready.entries.every((entry) => entry.editorialStatus === null), true)
  assert.equal(review.pagination.total, 0)
  assert.equal(review.entries.length, 0)
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

test('catalog associates the five exact icons available in the local package', async () => {
  const bestiary = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const spells = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const items = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'ITEMS',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })

  assert.equal(
    bestiary.entries.every((entry) => (
      entry.imageUrl === '/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg'
    )),
    true,
  )
  assert.equal(
    spells.entries.find((entry) => entry.name === 'Barragem de Força')?.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/spells/magic-missile.webp',
  )
  assert.equal(spells.entries.find((entry) => entry.name === 'Arco Elétrico')?.imageUrl, null)
  assert.equal(spells.entries.find((entry) => entry.name === 'Curar')?.imageUrl, null)
  assert.equal(
    items.entries.find((entry) => entry.name === 'Corta-Cão')?.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/equipment/weapons/dogslicer.webp',
  )
  assert.equal(items.entries.find((entry) => entry.name === 'Arco Curto')?.imageUrl, null)
  assert.equal(items.entries.find((entry) => entry.name === 'Armadura de Couro')?.imageUrl, null)
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
