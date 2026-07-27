import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eCatalogProvider } from './catalog-provider'
import { pathfinder2eContentCatalogProvider } from './provider'

test('provider exposes pilots and exhaustive bestiary deliveries in pt-BR', async () => {
  const result = await pathfinder2eContentCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    page: 1,
    limit: 100,
  })

  assert.equal(result.pagination.total, 7_517)
  assert.equal(result.entries.length, 100)
  assert.equal(result.entries.every((entry) => entry.stats?.length), true)
})

test('reviewed translations keep traits clean and expose no editorial tag', async () => {
  const result = await pathfinder2eCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    search: 'Guarda Esqueleto',
    page: 1,
    limit: 100,
  })
  const skeleton = result.entries.find((entry) => entry.name === 'Guarda Esqueleto')

  assert.ok(skeleton)
  assert.equal(skeleton.traits?.includes('morto-vivo'), true)
  assert.equal(skeleton.traits?.includes('Tradução revisada'), false)
  assert.equal(skeleton.editorialStatus, null)
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
    search: 'Guarda Esqueleto',
    page: 1,
    limit: 24,
  })
  const englishHeal = await pathfinder2eContentCatalogProvider.list({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'en-US',
    search: 'Heal',
    page: 1,
    limit: 100,
  })

  assert.equal(english.pagination.total, 1_802)
  assert.equal(englishHeal.entries.some((entry) => entry.name === 'Heal'), true)
  assert.equal(portugueseSearch.pagination.total >= 1, true)
  assert.equal(portugueseSearch.entries.some((entry) => entry.name === 'Guarda Esqueleto'), true)
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
  assert.equal(result.pagination.total, 5_698)
  assert.equal(result.pagination.totalPages, 2_849)
})

test('twelfth delivery exposes translated NPC Core and final Player Core 2 spell content', async () => {
  const npc = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-npc-core:urchin',
  })
  const spell = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:resplendent-mansion',
  })

  assert.ok(npc)
  assert.ok(spell)
  assert.notEqual(npc.name, 'Urchin')
  assert.equal(npc.subtitle, 'Pathfinder NPC Core')
  assert.equal(
    npc.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg',
  )
  assert.equal(npc.editorialStatus?.tone, 'review')
  assert.equal(spell.name, 'Mansão Resplandecente')
  assert.equal(spell.subtitle, 'Pathfinder Player Core 2')
  assert.equal(spell.stats?.some((stat) => stat.label === 'Rank' && stat.value === '9'), true)
})

test('provider presents hazards with their own translated Bestiary contract', async () => {
  const contentId = 'pf2e:bestiary:hazards:hidden-pit'
  const sheet = await pathfinder2eContentCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId,
  })
  const contextualSheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId,
  })

  assert.ok(sheet)
  assert.ok(contextualSheet)
  assert.notEqual(sheet.name, 'Hidden Pit')
  assert.equal(sheet.stats?.some((stat) => stat.value === 'Perigo simples'), true)
  assert.deepEqual(
    sheet.sections.map((section) => section.title),
    ['Detecção', 'Desarme', 'Defesas', 'Comportamento', 'Ações e reações'],
  )
  assert.equal(sheet.sections.some((section) => section.title === 'Atributos'), false)
  assert.equal(sheet.sections.some((section) => section.title === 'Percepção e movimento'), false)
  assert.equal(
    contextualSheet.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg',
  )
  assert.equal(
    contextualSheet.sections.some((section) => section.title === 'Desarme'),
    true,
  )
  assert.equal(contextualSheet.traits?.includes('mecânico'), true)
  assert.equal(contextualSheet.traits?.includes('armadilha'), true)
  assert.equal(contextualSheet.traits?.includes('mechanical'), false)
  assert.equal(contextualSheet.traits?.includes('trap'), false)
  assert.equal(sheet.editorialStatus?.tone, 'review')
})

test('Hallucination Powder Trap presents a fully localized disable procedure', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:hazards:hallucination-powder-trap',
  })

  assert.ok(sheet)
  const disableSection = sheet.sections.find((section) => section.title === 'Desarme')
  const actionsSection = sheet.sections.find((section) => section.title === 'Ações e reações')
  assert.deepEqual(disableSection?.fields, [{
    label: 'Procedimento',
    value: 'Ladinagem CD 26 (especialista) para desativar o martelo que atinge a espoleta',
    wide: true,
  }])
  assert.match(actionsSection?.fields[0]?.value ?? '', /salvamento de Vontade CD 24/)
  assert.doesNotMatch(
    `${disableSection?.fields[0]?.value} ${actionsSection?.fields[0]?.value}`,
    /\b(?:check|thevery|thievery|disable|dc:|expert|status penalty)\b/i,
  )
})

test('machine-translated exhaustive content is localized and remains editorially pending', async () => {
  const sheet = await pathfinder2eContentCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-monster-core:viper',
  })

  assert.ok(sheet)
  assert.equal(sheet.name, 'Víbora')
  assert.equal(sheet.editorialStatus?.label, 'Tradução em revisão')
  assert.equal(sheet.sections.length > 0, true)
})

test('doubled exhaustive content is available with translation and exact local icon', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:mending',
  })

  assert.ok(sheet)
  assert.notEqual(sheet.name, 'Mending')
  assert.equal(sheet.imageUrl, '/api/game-systems/pathfinder-2e/icons/spells/mending.webp')
  assert.equal(sheet.editorialStatus?.label, 'Tradução em revisão')
})

test('third exhaustive content is available with translation and exact local icon', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:charm',
  })

  assert.ok(sheet)
  assert.notEqual(sheet.name, 'Charm')
  assert.equal(sheet.imageUrl, '/api/game-systems/pathfinder-2e/icons/spells/charm.webp')
  assert.equal(sheet.editorialStatus?.label, 'Tradução em revisão')
})

test('fourth exhaustive content is available from Player Core 2 with translation and exact local icon', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'ITEMS',
    locale: 'pt-BR',
    contentId: 'pf2e:item:equipment-srd:tengu-gale-blade',
  })

  assert.ok(sheet)
  assert.notEqual(sheet.name, 'Tengu Gale Blade')
  assert.equal(sheet.subtitle, 'Pathfinder Player Core 2')
  assert.equal(
    sheet.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/equipment/weapons/tengu-gale-blade.webp',
  )
  assert.equal(sheet.editorialStatus?.label, 'Tradução em revisão')
})

test('fifth exhaustive content is available with translation and exact local icon', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:bind-undead',
  })

  assert.ok(sheet)
  assert.notEqual(sheet.name, 'Bind Undead')
  assert.equal(sheet.subtitle, 'Pathfinder Player Core')
  assert.equal(
    sheet.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/spells/bind-undead.webp',
  )
  assert.equal(sheet.editorialStatus?.label, 'Tradução em revisão')
})

test('sixth exhaustive content is available with translation and exact local icon', async () => {
  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:dinosaur-form',
  })

  assert.ok(sheet)
  assert.notEqual(sheet.name, 'Dinosaur Form')
  assert.equal(sheet.subtitle, 'Pathfinder Player Core')
  assert.equal(
    sheet.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/spells/dinosaur-form.webp',
  )
  assert.equal(sheet.editorialStatus?.tone, 'review')
})

test('seventh exhaustive content exposes the new publication with translation and exact local icon', async () => {
  const spell = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'SPELLS',
    locale: 'pt-BR',
    contentId: 'pf2e:spell:spells-srd:impaling-spike',
  })
  const bestiary = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-monster-core-2:clockwork-spy',
  })

  assert.ok(spell)
  assert.notEqual(spell.name, 'Impaling Spike')
  assert.equal(spell.subtitle, 'Pathfinder Player Core')
  assert.equal(
    spell.imageUrl,
    '/api/game-systems/pathfinder-2e/icons/spells/impaling-spike.webp',
  )
  assert.equal(spell.editorialStatus?.tone, 'review')
  assert.ok(bestiary)
  assert.equal(bestiary.subtitle, 'Pathfinder Monster Core 2')
  assert.equal(bestiary.editorialStatus?.tone, 'review')
})

test('exhaustive bestiary sheets preserve embedded spellcasting as neutral data', async () => {
  const sheet = await pathfinder2eContentCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'pf2e:bestiary:pathfinder-monster-core:gnome-bard',
  })

  const spellcasting = sheet?.sections.find((section) => section.title === 'Conjuração')
  assert.ok(spellcasting)
  assert.equal(spellcasting.fields.some((entry) => entry.value.includes('Rank 1:')), true)
  assert.equal(
    spellcasting.fields.some(
      (entry) =>
        entry.label !== 'Occult Spontaneous Spells' &&
        entry.value.trim().length > 0,
    ),
    true,
  )
})
