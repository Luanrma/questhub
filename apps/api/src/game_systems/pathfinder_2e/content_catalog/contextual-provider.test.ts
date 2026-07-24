import test from 'node:test'
import assert from 'node:assert/strict'
import { PATHFINDER_2E_EXHAUSTIVE_08_BESTIARY_ORIGINALS } from './bestiary/original/core-remaster-exhaustive-08'
import { PATHFINDER_2E_EXHAUSTIVE_09_BESTIARY_ORIGINALS } from './bestiary/original/core-remaster-exhaustive-09'
import { PATHFINDER_2E_EXHAUSTIVE_10_BESTIARY_ORIGINALS } from './bestiary/original/core-remaster-exhaustive-10'
import { pathfinder2eContextualCatalogProvider } from './contextual-provider'
import { PATHFINDER_2E_CONTENT_ENTRIES } from './deliveries'
import { resolvePathfinder2eInlineText } from './inline-text'
import { PATHFINDER_2E_EXHAUSTIVE_08_ITEM_ORIGINALS } from './items/original/core-remaster-exhaustive-08'
import { PATHFINDER_2E_EXHAUSTIVE_09_ITEM_ORIGINALS } from './items/original/core-remaster-exhaustive-09'
import { PATHFINDER_2E_EXHAUSTIVE_10_ITEM_ORIGINALS } from './items/original/core-remaster-exhaustive-10'
import {
  hasPathfinder2eTraitTranslation,
  translatePathfinder2eTerm,
  translatePathfinder2eTrait,
} from './translations/pt-BR/glossary'

test('spell cards preserve the Pathfinder term Rank in pt-BR', async () => {
  const result = await pathfinder2eContextualCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    search: 'Barragem de Força',
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
    search: 'Corta-Cão',
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

test('spell sheets resolve Foundry runtime damage expressions instead of exposing source markup', async () => {
  const englishSheet = await pathfinder2eContextualCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'en-US',
    contentId: 'pf2e:spell:spells-srd:grim-tendrils',
  })
  const portugueseSheet = await pathfinder2eContextualCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:grim-tendrils',
  })

  assert.ok(englishSheet)
  assert.ok(portugueseSheet)
  const englishDescription = englishSheet.description ?? ''
  const portugueseDescription = portugueseSheet.description ?? ''
  assert.match(englishDescription, /2d4 void damage and 1 persistent bleed damage/)
  assert.match(portugueseDescription, /2d4 de dano de vazio e 1 de dano persistente de sangramento/)
  assert.doesNotMatch(englishDescription, /@item|\[bleed\]/)
  assert.doesNotMatch(portugueseDescription, /@item|\[bleed\]/)
})

test('inline text resolver calculates Rank expressions and renders area templates as text', () => {
  const source = 'Deal (ceil(@item.rank / 2))d4[persistent,electricity] in a @Template[line|distance:30].'
  const resolved = resolvePathfinder2eInlineText(source, {
    locale: 'en-US',
    itemRank: 3,
  })

  assert.equal(resolved, 'Deal 2d4 persistent electricity damage in a 30-foot line.')
  assert.doesNotMatch(resolved, /@[a-z]|\[[^\]]+\]/i)
})

test('inline text resolver converts source check macros into localized rules text', () => {
  const localizedSkill = resolvePathfinder2eInlineText(
    'check (thevery, dc:26, name:Disable Hammer, traits:action:disable-a-device) (especialista)',
    { locale: 'pt-BR' },
  )
  const localizedSave = resolvePathfinder2eInlineText(
    'check (reflex, dc:41, basic, options:area-effect) save',
    { locale: 'pt-BR' },
  )

  assert.equal(localizedSkill, 'Ladinagem CD 26 (especialista)')
  assert.equal(localizedSave, 'salvamento básico de Reflexos CD 41')
})

test('catalog presentation does not expose runtime source tokens from imported entries', async () => {
  const domainMap = {
    BESTIARY: 'BESTIARY',
    SPELL: 'SPELLS',
    ITEM: 'ITEMS',
  } as const
  const entriesWithRuntimeTokens = PATHFINDER_2E_CONTENT_ENTRIES.filter((entry) => (
    JSON.stringify(entry.original.data).includes('@')
      || JSON.stringify(entry.translation.fields).includes('@')
  ))

  assert.notEqual(entriesWithRuntimeTokens.length, 0)

  for (const entry of entriesWithRuntimeTokens) {
    for (const locale of ['en-US', 'pt-BR'] as const) {
      const sheet = await pathfinder2eContextualCatalogProvider.get({
        campaignId: 'campaign-1',
        domain: domainMap[entry.original.domain],
        locale,
        contentId: entry.original.contentId,
      })
      assert.ok(sheet)

      const presentedText = [
        sheet.name,
        sheet.description,
        ...sheet.sections.flatMap((section) => (
          section.fields.flatMap((field) => [field.label, field.value])
        )),
      ].filter((value): value is string => typeof value === 'string')

      assert.doesNotMatch(
        presentedText.join('\n'),
        /@[a-z][a-z0-9_.]*/i,
        `${entry.original.contentId} (${locale}) exposed source runtime markup`,
      )
    }
  }
})

test('spell cards translate the detection trait through the central glossary', async () => {
  const sheet = await pathfinder2eContextualCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:detect-magic',
  })

  assert.ok(sheet)
  assert.equal(sheet.traits?.includes('detecção'), true)
  assert.equal(sheet.traits?.includes('detection'), false)
})

test('central glossary translates the requested Pathfinder traits', () => {
  const expectedTranslations = {
    sonic: 'sônico',
    air: 'ar',
    move: 'mover',
    holy: 'sagrado',
    acid: 'ácido',
    light: 'luz',
    void: 'vazio',
    curse: 'maldição',
    poison: 'veneno',
    summon: 'invocação',
    spirit: 'espírito',
    incapacitation: 'incapacitação',
    sleep: 'dormir',
    water: 'água',
    polymorph: 'polimorfo',
    sanctified: 'santificado',
    prediction: 'previsão',
    nonlethal: 'não letal',
    fortune: 'fortuna',
    linguistic: 'linguística',
    cold: 'frio',
    olfactory: 'olfativo',
    darkness: 'escuridão',
    earth: 'terra',
    morph: 'transformar',
    misfortune: 'infortúnio',
  } as const

  for (const [source, expected] of Object.entries(expectedTranslations)) {
    assert.equal(translatePathfinder2eTrait(source, 'pt-BR', 'SPELLS'), expected)
  }
})

test('central glossary explicitly covers Bestiary entity, attack, and Item traits', () => {
  const domainMap = {
    BESTIARY: 'BESTIARY',
    ITEM: 'ITEMS',
  } as const
  const uncovered: string[] = []

  const pendingOriginals = [
    ...PATHFINDER_2E_EXHAUSTIVE_08_BESTIARY_ORIGINALS,
    ...PATHFINDER_2E_EXHAUSTIVE_09_BESTIARY_ORIGINALS,
    ...PATHFINDER_2E_EXHAUSTIVE_10_BESTIARY_ORIGINALS,
    ...PATHFINDER_2E_EXHAUSTIVE_08_ITEM_ORIGINALS,
    ...PATHFINDER_2E_EXHAUSTIVE_09_ITEM_ORIGINALS,
    ...PATHFINDER_2E_EXHAUSTIVE_10_ITEM_ORIGINALS,
  ]
  const originals = [
    ...PATHFINDER_2E_CONTENT_ENTRIES.map((entry) => entry.original),
    ...pendingOriginals,
  ]

  for (const original of originals) {
    if (original.domain === 'SPELL') continue

    const data = original.data as {
      traits?: string[]
      attacks?: Array<{ traits?: string[] }>
      actions?: Array<{ traits?: string[] }>
    }
    const traits = [
      ...(data.traits ?? []),
      ...(data.attacks ?? []).flatMap((attack) => attack.traits ?? []),
      ...(data.actions ?? []).flatMap((action) => action.traits ?? []),
    ]

    for (const trait of traits) {
      if (!hasPathfinder2eTraitTranslation(trait, domainMap[original.domain])) {
        uncovered.push(`${original.domain}:${trait}`)
      }
    }
  }

  assert.deepEqual([...new Set(uncovered)].sort(), [])
  assert.equal(translatePathfinder2eTrait('aberration', 'pt-BR', 'BESTIARY'), 'aberração')
  assert.equal(translatePathfinder2eTrait('amphibious', 'pt-BR', 'BESTIARY'), 'anfíbio')
  assert.equal(translatePathfinder2eTrait('consumable', 'pt-BR', 'ITEMS'), 'consumível')
  assert.equal(translatePathfinder2eTrait('reach-15', 'pt-BR', 'BESTIARY'), 'alcance 15 pés')
  assert.equal(translatePathfinder2eTrait('versatile-p', 'pt-BR', 'ITEMS'), 'versátil perfurante')
})
