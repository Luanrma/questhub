import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eGameSystemDescriptor } from './descriptor'

test('Pathfinder 2e registers its Compendium domains and neutral capabilities', () => {
  assert.equal(pathfinder2eGameSystemDescriptor.key, 'PATHFINDER_2E')
  assert.deepEqual(
    pathfinder2eGameSystemDescriptor.catalogDomains.map(({ key, slug, label, icon }) => ({ key, slug, label, icon })),
    [
      { key: 'BESTIARY', slug: 'bestiary', label: 'Bestiário', icon: 'swords' },
      { key: 'SPELLS', slug: 'spells', label: 'Magias', icon: 'sparkles' },
      { key: 'ITEMS', slug: 'items', label: 'Itens', icon: 'backpack' },
      { key: 'EFFECTS', slug: 'effects', label: 'Efeitos', icon: 'activity' },
    ],
  )

  const spells = pathfinder2eGameSystemDescriptor.catalogDomains[1]
  const items = pathfinder2eGameSystemDescriptor.catalogDomains[2]

  assert.equal(spells.capabilities.areaEffectBindingNamespace, 'questhub:pathfinder_2e:spells:v1')
  assert.equal(items.capabilities.canSendToActorInventory, true)
})
