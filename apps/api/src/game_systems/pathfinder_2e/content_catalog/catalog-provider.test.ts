import assert from 'node:assert/strict'
import test from 'node:test'
import { pathfinder2eCatalogProvider } from './catalog-provider'

test('catalog filters reviewed and review-pending translations before pagination', async () => {
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
  assert.equal(ready.entries.every((entry) => entry.editorialStatus?.tone === 'ready'), true)
  assert.equal(review.pagination.total, 0)
  assert.equal(review.entries.length, 0)
})

test('catalog never exposes external runtime image urls', async () => {
  for (const domain of ['BESTIARY', 'SPELLS', 'ITEMS'] as const) {
    const result = await pathfinder2eCatalogProvider.list({
      campaignId: 'campaign-1',
      domain,
      locale: 'pt-BR',
      page: 1,
      limit: 24,
    })

    assert.equal(
      result.entries.every((entry) => entry.imageUrl === null || entry.imageUrl?.startsWith('/game-systems/pathfinder-2e/')),
      true,
    )
  }
})

test('entities without QuestHub-local assets use the generic fallback', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-monster-core:wolf',
  })

  assert.equal(sheet?.imageUrl, null)
})
