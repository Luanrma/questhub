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

test('provider keeps editorial status separate from localized traits', async () => {
  const result = await pathfinder2eContentCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const skeleton = result.entries.find((entry) => entry.name === 'Guarda Esqueleto')

  assert.ok(skeleton)
  assert.equal(skeleton.traits?.includes('morto-vivo'), true)
  assert.equal(skeleton.traits?.includes('Tradução revisada'), false)
  assert.deepEqual(skeleton.editorialStatus, {
    label: 'Tradução revisada',
    tone: 'ready',
  })
})

test('provider exposes a detailed bestiary sheet through the neutral contract', async () => {
  const sheet = await pathfinder2eContentCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-monster-core:skeleton-guard',
  })

  assert.ok(sheet)
  assert.equal(sheet.name, 'Guarda Esqueleto')
  assert.equal(sheet.sections.some((section) => section.title === 'Defesas'), true)
  assert.equal(sheet.sections.some((section) => section.title === 'Ataques'), true)
})

test('provider exposes detailed spell and item sheets', async () => {
  const spell = await pathfinder2eContentCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:electric-arc',
  })
  const item = await pathfinder2eContentCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'ITEMS',
    locale: 'pt-BR',
    contentId: 'pf2e:item:equipment-srd:dogslicer',
  })

  assert.equal(spell?.sections.some((section) => section.title === 'Conjuração'), true)
  assert.equal(item?.sections.some((section) => section.title === 'Arma'), true)
  assert.equal(item?.traits?.includes('ágil'), true)
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
    search: 'morto-vivo',
    page: 1,
    limit: 24,
  })

  assert.equal(english.pagination.total, 3)
  assert.equal(english.entries.some((entry) => entry.name === 'Heal'), true)
  assert.equal(portugueseSearch.pagination.total, 1)
  assert.equal(portugueseSearch.entries[0]?.name, 'Guarda Esqueleto')
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
