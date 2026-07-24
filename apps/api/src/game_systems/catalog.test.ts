import test from 'node:test'
import assert from 'node:assert/strict'
import {
  GAME_SYSTEM_DESCRIPTORS,
  getGameSystemCatalogProvider,
  getGameSystemDescriptor,
  registerGameSystemCatalogProvider,
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
    list(query) {
      return {
        entries: [
          {
            id: 'creature-1',
            name: query.locale === 'pt-BR' ? 'Lobo' : 'Wolf',
            stats: [{ label: 'Nível', value: '1' }],
          },
        ],
        pagination: { page: 1, limit: 24, total: 1, totalPages: 1 },
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

  assert.equal(result.entries[0]?.name, 'Lobo')
  assert.equal(result.pagination.total, 1)
})
