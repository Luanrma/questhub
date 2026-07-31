import test from 'node:test'
import assert from 'node:assert/strict'
import {
  createCatalogTokenSheetEnvelope,
  GAME_SYSTEM_DESCRIPTORS,
  getGameSystemCatalogProvider,
  getGameSystemDescriptor,
  parseCatalogTokenSheetEnvelope,
  registerGameSystemCatalogProvider,
  resolveCatalogTokenSize,
} from './catalog'

test('game system descriptor exposes Pathfinder catalogs without mechanical rules', () => {
  assert.equal(GAME_SYSTEM_DESCRIPTORS.length, 1)

  const descriptor = getGameSystemDescriptor('PATHFINDER_2E')
  assert.ok(descriptor)
  assert.equal(descriptor.label, 'Pathfinder 2e')
  assert.deepEqual(descriptor.catalogDomains, ['BESTIARY', 'SPELLS', 'ITEMS'])
  assert.equal(getGameSystemDescriptor('UNKNOWN'), null)
})

test('a game system can register a neutral catalog provider', async () => {
  assert.equal(getGameSystemCatalogProvider('PATHFINDER_2E'), null)

  registerGameSystemCatalogProvider('PATHFINDER_2E', {
    list() {
      return {
        entries: [
          {
            id: 'creature-1',
            name: 'Catalog entry',
            stats: [{ label: 'Level', value: '1' }],
          },
        ],
        pagination: { page: 1, limit: 24, total: 1, totalPages: 1 },
      }
    },
    get(query) {
      return {
        id: query.contentId,
        name: 'Catalog entry',
        sections: [
          {
            title: 'Details',
            fields: [{ label: 'Value', value: '15' }],
          },
        ],
      }
    },
  })

  const provider = getGameSystemCatalogProvider('PATHFINDER_2E')
  assert.ok(provider)

  const result = await provider.list({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const sheet = await provider.get({
    campaignId: 'campaign-1',
    domain: 'BESTIARY',
    locale: 'pt-BR',
    contentId: 'creature-1',
  })

  assert.equal(result.entries[0]?.name, 'Catalog entry')
  assert.equal(result.pagination.total, 1)
  assert.equal(sheet?.sections[0]?.title, 'Details')
})

test('catalog Token sheet envelope preserves a neutral immutable presentation snapshot', () => {
  const sheet = {
    id: 'creature-1',
    name: 'Catalog creature',
    stats: [{ label: 'Level', value: '1' }],
    sections: [{ title: 'Details', fields: [{ label: 'Value', value: '15' }] }],
  }
  const envelope = createCatalogTokenSheetEnvelope({
    domain: 'BESTIARY',
    contentId: sheet.id,
    locale: 'pt-BR',
  }, {
    sheet,
    data: {
      schemaVersion: 1,
      hitPoints: { current: 15, maximum: 15 },
    },
  })

  assert.deepEqual(parseCatalogTokenSheetEnvelope(envelope), envelope)
  assert.equal(parseCatalogTokenSheetEnvelope({ ...envelope, version: 2 }), null)
  assert.equal(parseCatalogTokenSheetEnvelope({ ...envelope, sheet: { name: 'Missing id' } }), null)
  const { data: _data, ...withoutData } = envelope
  assert.deepEqual(parseCatalogTokenSheetEnvelope(withoutData), withoutData)
})

test('catalog Token defaults accept valid grid sizes and fall back safely', () => {
  const tokenSheet = {
    sheet: { id: 'creature-1', name: 'Creature', sections: [] },
    data: {},
  }

  assert.equal(resolveCatalogTokenSize(tokenSheet), 1)
  assert.equal(resolveCatalogTokenSize({ ...tokenSheet, tokenDefaults: { size: 0.5 } }), 0.5)
  assert.equal(resolveCatalogTokenSize({ ...tokenSheet, tokenDefaults: { size: 4 } }), 4)
  assert.equal(resolveCatalogTokenSize({ ...tokenSheet, tokenDefaults: { size: 0.3 } }), 1)
  assert.equal(resolveCatalogTokenSize({ ...tokenSheet, tokenDefaults: { size: 21 } }), 1)
})
