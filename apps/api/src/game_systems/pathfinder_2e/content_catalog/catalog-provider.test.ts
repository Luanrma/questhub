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

test('catalog resolves repository-owned Foundry images from the locked source commit', async () => {
  const spells = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const forceBarrage = spells.entries.find((entry) => entry.name === 'Barragem de Força')
  const electricArc = spells.entries.find((entry) => entry.name === 'Arco Elétrico')

  assert.equal(
    forceBarrage?.imageUrl,
    'https://raw.githubusercontent.com/foundryvtt/pf2e/01114da5851f31404078d8020809b13e4000bc4b/static/icons/spells/magic-missile.webp',
  )
  assert.equal(electricArc?.imageUrl, null)
})

test('bestiary preserves the exact upstream default NPC image', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-monster-core:wolf',
  })

  assert.equal(
    sheet?.imageUrl,
    'https://raw.githubusercontent.com/foundryvtt/pf2e/01114da5851f31404078d8020809b13e4000bc4b/static/icons/default-icons/npc.svg',
  )
})
