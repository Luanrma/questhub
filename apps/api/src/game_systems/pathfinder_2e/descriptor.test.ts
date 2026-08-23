import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eGameSystemDescriptor } from './descriptor'

test('Pathfinder 2e registers its Compendium domains and neutral capabilities', () => {
  assert.equal(pathfinder2eGameSystemDescriptor.key, 'PATHFINDER_2E')
  assert.deepEqual(
    pathfinder2eGameSystemDescriptor.catalogDomains.map(({ key, slug, label }) => ({ key, slug, label })),
    [
      { key: 'BESTIARY', slug: 'bestiary', label: 'Bestiário' },
      { key: 'SPELLS', slug: 'spells', label: 'Magias' },
      { key: 'ITEMS', slug: 'items', label: 'Itens' },
    ],
  )

  const spells = pathfinder2eGameSystemDescriptor.catalogDomains.find((domain) => domain.key === 'SPELLS')
  const items = pathfinder2eGameSystemDescriptor.catalogDomains.find((domain) => domain.key === 'ITEMS')

  assert.equal(spells?.capabilities?.areaEffectBindingNamespace, 'questhub:pathfinder_2e:spells:v1')
  assert.equal(items?.capabilities?.canSendToActorInventory, true)
})
