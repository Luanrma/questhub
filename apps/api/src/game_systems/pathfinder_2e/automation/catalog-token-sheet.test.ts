import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createCatalogTokenSheetEnvelope,
  type CatalogTokenSheetEnvelope,
} from '../../catalog'
import { PATHFINDER_2E_CONTENT_ENTRIES } from '../content_catalog/deliveries'
import { createDefaultPathfinder2eCharacterSheet } from '../character-sheet/defaults'
import { pathfinder2eTokenPresentationProvider } from './token-presentation-provider'
import {
  createPathfinder2eCatalogTokenSheetData,
  parsePathfinder2eCatalogTokenSheetData,
  resolvePathfinder2eCatalogTokenSize,
} from './catalog-token-sheet'

test('Pathfinder catalog Token data initializes current and maximum hit points', () => {
  const data = createPathfinder2eCatalogTokenSheetData({ hitPoints: 42 })

  assert.deepEqual(data, {
    schemaVersion: 1,
    hitPoints: { current: 42, maximum: 42 },
  })
  assert.deepEqual(parsePathfinder2eCatalogTokenSheetData(data), data)
  assert.equal(createPathfinder2eCatalogTokenSheetData({ hitPoints: -1 }), null)
  assert.equal(parsePathfinder2eCatalogTokenSheetData({ hitPoints: 42 }), null)
})

test('Pathfinder projects catalog NPC vitality through the neutral Token resource contract', async () => {
  const data = createPathfinder2eCatalogTokenSheetData({ hitPoints: 42 })
  assert.ok(data)

  const presentation = await pathfinder2eTokenPresentationProvider.buildTokenPresentation({
    campaignId: 'campaign-1',
    tokenId: 'token-1',
    characterSheet: {
      systemKey: 'catalog-token:PATHFINDER_2E',
      schemaVersion: 1,
      updatedAt: new Date('2026-07-29T12:00:00.000Z'),
      data: createCatalogTokenSheetEnvelope({
        domain: 'BESTIARY',
        contentId: 'pf2e:bestiary:test',
        locale: 'pt-BR',
      }, {
        sheet: {
          id: 'pf2e:bestiary:test',
          name: 'Criatura',
          sections: [],
        },
        data,
      }),
    },
    viewer: {
      userId: 'master-1',
      role: 'MASTER',
      controlsToken: true,
    },
  })

  assert.deepEqual(presentation.resources, [
    {
      id: 'primary-vitality',
      slot: 'primary',
      label: 'PV',
      value: 42,
      maximum: 42,
      presentation: 'bar',
      visibility: 'PUBLIC',
    },
  ])
})

test('Pathfinder projects legacy catalog NPC snapshots that predate opaque data', async () => {
  const creature = PATHFINDER_2E_CONTENT_ENTRIES.find(
    (entry) => entry.original.domain === 'BESTIARY'
      && (entry.original.data as { entryType?: unknown }).entryType !== 'HAZARD',
  )
  assert.ok(creature)
  const maximum = (creature.original.data as { hitPoints: number }).hitPoints
  const legacyEnvelope: CatalogTokenSheetEnvelope = {
    kind: 'CATALOG_TOKEN_SHEET',
    version: 1,
    source: {
      domain: 'BESTIARY',
      contentId: creature.original.contentId,
      locale: 'pt-BR',
    },
    sheet: {
      id: creature.original.contentId,
      name: 'Criatura legada',
      sections: [],
    },
  }

  const presentation = await pathfinder2eTokenPresentationProvider.buildTokenPresentation({
    campaignId: 'campaign-1',
    tokenId: 'token-legacy',
    characterSheet: {
      systemKey: 'catalog-token:PATHFINDER_2E',
      schemaVersion: 1,
      updatedAt: new Date('2026-07-29T12:00:00.000Z'),
      data: legacyEnvelope,
    },
    viewer: {
      userId: 'master-1',
      role: 'MASTER',
      controlsToken: true,
    },
  })

  assert.equal(presentation.resources[0]?.value, maximum)
  assert.equal(presentation.resources[0]?.maximum, maximum)
})

test('Pathfinder maps every creature size to its default grid footprint', () => {
  assert.equal(resolvePathfinder2eCatalogTokenSize({ size: 'tiny' }), 0.5)
  assert.equal(resolvePathfinder2eCatalogTokenSize({ size: 'small' }), 1)
  assert.equal(resolvePathfinder2eCatalogTokenSize({ size: 'medium' }), 1)
  assert.equal(resolvePathfinder2eCatalogTokenSize({ size: 'large' }), 2)
  assert.equal(resolvePathfinder2eCatalogTokenSize({ size: 'huge' }), 3)
  assert.equal(resolvePathfinder2eCatalogTokenSize({ size: 'gargantuan' }), 4)
  assert.equal(resolvePathfinder2eCatalogTokenSize({ size: 'unknown' }), 1)
  assert.equal(resolvePathfinder2eCatalogTokenSize({}), 1)
})

test('Pathfinder separates NPC reference skills from encounter actions', async () => {
  const creature = PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => {
    if (entry.original.domain !== 'BESTIARY') return false
    const data = entry.original.data as {
      attacks?: unknown[]
      actions?: unknown[]
      spellcasting?: unknown[]
    }
    return Boolean(data.attacks?.length && data.actions?.length && data.spellcasting?.length)
  })
  assert.ok(creature)
  const data = createPathfinder2eCatalogTokenSheetData(creature.original.data)
  assert.ok(data)

  const presentation = await pathfinder2eTokenPresentationProvider.buildTokenPresentation({
    campaignId: 'campaign-1',
    tokenId: 'token-actions',
    characterSheet: {
      systemKey: 'catalog-token:PATHFINDER_2E',
      schemaVersion: 1,
      updatedAt: new Date('2026-07-30T12:00:00.000Z'),
      data: createCatalogTokenSheetEnvelope({
        domain: 'BESTIARY',
        contentId: creature.original.contentId,
        locale: 'pt-BR',
      }, {
        sheet: {
          id: creature.original.contentId,
          name: 'Criatura',
          sections: [],
        },
        data,
      }),
    },
    viewer: {
      userId: 'master-1',
      role: 'MASTER',
      controlsToken: true,
    },
  })

  const groups = new Set(presentation.actions.map((action) => action.group))
  assert.equal(groups.has('Perícias'), true)
  assert.equal(groups.has('Ataques'), true)
  assert.equal(groups.has('Habilidades'), true)
  assert.equal(groups.has('Magias'), true)
  assert.equal(
    presentation.actions.every((action) => action.visibility === 'OWNER_AND_MASTER'),
    true,
  )
  assert.equal(
    presentation.actions
      .filter((action) => action.id.startsWith('skill:'))
      .every((action) => action.contexts.length === 1 && action.contexts[0] === 'REFERENCE'),
    true,
  )
  assert.equal(
    presentation.actions
      .filter((action) => !action.id.startsWith('skill:'))
      .every((action) => action.contexts.length === 1 && action.contexts[0] === 'ENCOUNTER'),
    true,
  )
})

test('Pathfinder keeps derived PLAYER skills as reference-only actions', async () => {
  const sheet = createDefaultPathfinder2eCharacterSheet()
  sheet.identity.level = 1
  sheet.attributes.dexterity = 3
  sheet.skills.acrobatics.rank = 2

  const presentation = await pathfinder2eTokenPresentationProvider.buildTokenPresentation({
    campaignId: 'campaign-1',
    tokenId: 'player-token',
    characterSheet: {
      systemKey: 'pathfinder-2e',
      schemaVersion: 2,
      updatedAt: new Date('2026-07-30T12:00:00.000Z'),
      data: sheet,
    },
    viewer: {
      userId: 'player-1',
      role: 'PLAYER',
      controlsToken: true,
    },
  })

  assert.equal(presentation.actions.length, 16)
  assert.deepEqual(
    presentation.actions.find((action) => action.id === 'skill:acrobatics'),
    {
      id: 'skill:acrobatics',
      label: 'Acrobacia',
      group: 'Perícias',
      detail: '+6',
      interaction: 'roll',
      visibility: 'OWNER_AND_MASTER',
      contexts: ['REFERENCE'],
    },
  )
  assert.equal(presentation.actions.some((action) => action.group === 'Magias'), false)
  assert.equal(
    presentation.actions.every(
      (action) => action.contexts.length === 1 && action.contexts[0] === 'REFERENCE',
    ),
    true,
  )
})
