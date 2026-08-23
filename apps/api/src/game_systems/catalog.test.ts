import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import {
  createCatalogTokenSheetEnvelope,
  getGameSystemCatalogDomainDescriptor,
  getGameSystemCatalogProvider,
  getGameSystemDescriptor,
  listGameSystemDescriptors,
  parseCatalogTokenSheetEnvelope,
  registerGameSystemCatalogProvider,
  registerGameSystemDescriptor,
  resolveCatalogTokenSize,
} from './catalog'

const descriptor = {
  key: 'PATHFINDER_2E',
  slug: 'pathfinder-2e',
  label: 'Pathfinder 2e',
  catalogDomains: [
    { key: 'CREATURES', slug: 'creatures', label: 'Creatures' },
    { key: 'POWERS', slug: 'powers', label: 'Powers' },
  ],
} as const

test('a game system registers opaque catalog domain descriptors', () => {
  registerGameSystemDescriptor(descriptor)

  assert.equal(listGameSystemDescriptors().length, 1)
  const registered = getGameSystemDescriptor('PATHFINDER_2E')
  assert.ok(registered)
  assert.equal(registered.label, 'Pathfinder 2e')
  assert.deepEqual(registered.catalogDomains, descriptor.catalogDomains)
  assert.deepEqual(getGameSystemCatalogDomainDescriptor(registered, 'powers'), descriptor.catalogDomains[1])
  assert.equal(getGameSystemCatalogDomainDescriptor(registered, 'missing'), null)
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
    domain: 'CREATURES',
    locale: 'pt-BR',
    page: 1,
    limit: 24,
  })
  const sheet = await provider.get({
    campaignId: 'campaign-1',
    domain: 'CREATURES',
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
    domain: 'CREATURES',
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
  assert.equal(parseCatalogTokenSheetEnvelope({ ...envelope, source: { ...envelope.source, domain: '' } }), null)
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

test('shared compendium navigation opens opaque domains as independent standard VTT windows', () => {
  const aside = readFileSync(
    path.join(process.cwd(), 'apps', 'web', 'src', 'components', 'Aside.tsx'),
    'utf8',
  )
  const modal = readFileSync(
    path.join(process.cwd(), 'apps', 'web', 'src', 'game-systems', 'CampaignCatalogModal.tsx'),
    'utf8',
  )
  const entitySheet = readFileSync(
    path.join(process.cwd(), 'apps', 'web', 'src', 'game-systems', 'CatalogEntitySheetModal.tsx'),
    'utf8',
  )
  const resizableEdges = readFileSync(
    path.join(process.cwd(), 'apps', 'web', 'src', 'components', 'ResizableEdges.tsx'),
    'utf8',
  )

  assert.match(aside, /compendiumWindows/)
  assert.match(aside, /catalogDomains\.map\(\(domain\)/)
  assert.match(aside, /domains=\{\[domain\]\}/)
  assert.match(aside, /minimized=\{windowState\.minimized\}/)
  assert.match(aside, /onMinimize=/)
  assert.match(aside, /Maximize2/)
  assert.match(aside, /COMPACT_SIDEBAR_QUERY/)
  assert.match(aside, /leftInset=\{compendiumLeftInset\}/)
  assert.match(aside, /bottomInset=\{compendiumBottomInset\}/)
  assert.match(aside, /bg-zinc-800\/90 p-2 text-white shadow-2xl backdrop-blur/)
  assert.match(aside, /<BookOpen size=\{18\} \/><\/span>\s*<span className="min-w-0 flex-1 truncate">\{domain\.label\}/)
  assert.doesNotMatch(aside, />Aberto</)
  assert.doesNotMatch(aside, /const open = compendiumWindows/)
  assert.doesNotMatch(aside, /\b(?:BESTIARY|SPELLS|ITEMS|EFFECTS)\b/)

  assert.match(modal, /ResizableEdges/)
  assert.match(modal, /Minimize2/)
  assert.match(modal, /minimized\?: boolean/)
  assert.match(modal, /isVisible: \(\) => !minimized/)
  assert.match(modal, /left: box\.x/)
  assert.match(modal, /width: box\.width/)
  assert.match(modal, /aria-modal="false"/)
  assert.match(modal, /campaign-compendium:\$\{campaignId\}:\$\{domainKey/)
  assert.match(modal, /zIndex=\{zIndex \+ 20\}/)
  assert.match(modal, /leftInset=\{leftInset\}/)
  assert.match(modal, /bottomInset=\{bottomInset\}/)
  assert.doesNotMatch(
    modal,
    /fixed inset-y-0 right-0 flex items-center justify-center bg-black\/75/,
  )

  assert.match(resizableEdges, /minX\?: number/)
  assert.match(entitySheet, /leftInset\?: number/)
  assert.match(entitySheet, /bottomInset\?: number/)
  assert.match(entitySheet, /style=\{\{ zIndex, left: leftInset, bottom: bottomInset \}\}/)
  assert.doesNotMatch(entitySheet, /bg-black\/80/)
  assert.doesNotMatch(entitySheet, /backdrop-blur-md/)
})
