import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eContentCatalogProvider } from './provider'

test('provider exposes the three starting bestiary entries in pt-BR', async () => {
  const result = await pathfinder2eContentCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })

  assert.equal(result.pagination.total, 3)
  assert.equal(result.entries.some((entry) => entry.name === 'Lobo'), true)
  assert.equal(result.entries.every((entry) => entry.stats?.length), true)
})

test('provider preserves en-US and supports localized search', async () => {
  const english = await pathfinder2eContentCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'en-US',
    page: 1,
    limit: 24,
  })
  const portugueseSearch = await pathfinder2eContentCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    search: 'lobo',
    page: 1,
    limit: 24,
  })

  assert.equal(english.pagination.total, 3)
  assert.equal(english.entries.some((entry) => entry.name === 'Heal'), true)
  assert.equal(portugueseSearch.pagination.total, 1)
  assert.equal(portugueseSearch.entries[0]?.name, 'Lobo')
})

test('provider paginates items independently from delivery naming', async () => {
  const result = await pathfinder2eContentCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'ITEMS',
    locale: 'pt-BR',
    page: 1,
    limit: 2,
  })

  assert.equal(result.entries.length, 2)
  assert.equal(result.pagination.total, 3)
  assert.equal(result.pagination.totalPages, 2)
})
