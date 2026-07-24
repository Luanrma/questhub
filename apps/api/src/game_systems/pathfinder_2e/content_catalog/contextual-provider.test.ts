import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eContextualCatalogProvider } from './contextual-provider'
import { translatePathfinder2eTerm } from './translations/pt-BR/glossary'

test('spell cards preserve the Pathfinder term Rank in pt-BR', async () => {
  const result = await pathfinder2eContextualCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const forceBarrage = result.entries.find((entry) => entry.name === 'Barragem de Força')

  assert.ok(forceBarrage)
  assert.equal(forceBarrage.stats?.some((stat) => stat.label === 'Rank' && stat.value === '1'), true)
  assert.equal(forceBarrage.stats?.some((stat) => stat.label === 'Círculo'), false)
})

test('spell sheets localize damage type and effect kind using spell context', async () => {
  const sheet = await pathfinder2eContextualCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:force-barrage',
  })

  assert.ok(sheet)
  const casting = sheet.sections.find((section) => section.title === 'Conjuração')
  const effects = sheet.sections.find((section) => section.title === 'Dano ou cura')

  assert.equal(casting?.fields.some((field) => field.label === 'Rank' && field.value === '1'), true)
  assert.equal(effects?.fields[0]?.value, '1d4+1 · força · dano')
})

test('item prices preserve GP, SP and CP in cards and sheets', async () => {
  const result = await pathfinder2eContextualCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'ITEMS',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const dogslicerCard = result.entries.find((entry) => entry.name === 'Corta-Cão')

  assert.ok(dogslicerCard)
  assert.equal(
    dogslicerCard.stats?.some((stat) => stat.label === 'Preço' && stat.value === '1 SP'),
    true,
  )

  const dogslicerSheet = await pathfinder2eContextualCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'ITEMS',
    locale: 'pt-BR',
    contentId: 'pf2e:item:equipment-srd:dogslicer',
  })
  const itemInformation = dogslicerSheet?.sections.find((section) => section.title === 'Informações do item')

  assert.equal(
    itemInformation?.fields.some((field) => field.label === 'Preço' && field.value === '1 SP'),
    true,
  )
})

test('pt-BR sheets preserve feet and add the calculated metric distance', async () => {
  const spell = await pathfinder2eContextualCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:force-barrage',
  })
  const casting = spell?.sections.find((section) => section.title === 'Conjuração')

  assert.equal(
    casting?.fields.some((field) => field.label === 'Alcance' && field.value === '120 pés (36 metros)'),
    true,
  )

  const bestiary = await pathfinder2eContextualCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-monster-core:skeleton-guard',
  })
  const movement = bestiary?.sections.find((section) => section.title === 'Percepção e movimento')

  assert.equal(
    movement?.fields.some((field) => field.label === 'Deslocamento' && field.value === '25 pés (7,5 metros)'),
    true,
  )
})

test('glossary resolves the same source term according to domain and category', () => {
  assert.equal(
    translatePathfinder2eTerm('force', 'pt-BR', {
      domain: 'SPELLS',
      category: 'damage-type',
    }),
    'força',
  )
  assert.equal(
    translatePathfinder2eTerm('force', 'pt-BR', {
      domain: 'ITEMS',
      category: 'damage-type',
    }),
    'force',
  )
})
