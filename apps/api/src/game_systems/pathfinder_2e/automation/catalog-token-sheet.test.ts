import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createCatalogTokenSheetEnvelope,
  type CatalogTokenSheetEnvelope,
} from '../../catalog'
import { PATHFINDER_2E_CONTENT_ENTRIES } from '../content_catalog/deliveries'
import { pathfinder2eTokenPresentationProvider } from './token-presentation-provider'
import {
  createPathfinder2eCatalogTokenSheetData,
  parsePathfinder2eCatalogTokenSheetData,
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
