import type { GameSystemDescriptor } from '../catalog'

export const pathfinder2eGameSystemDescriptor = {
  key: 'PATHFINDER_2E',
  slug: 'pathfinder-2e',
  label: 'Pathfinder 2e',
  catalogDomains: [
    { key: 'BESTIARY', slug: 'bestiary', label: 'Bestiário', icon: 'swords' },
    {
      key: 'SPELLS',
      slug: 'spells',
      label: 'Magias',
      icon: 'sparkles',
      capabilities: {
        areaEffectBindingNamespace: 'questhub:pathfinder_2e:spells:v1',
      },
    },
    {
      key: 'ITEMS',
      slug: 'items',
      label: 'Itens',
      icon: 'backpack',
      capabilities: {
        canSendToActorInventory: true,
      },
    },
    { key: 'EFFECTS', slug: 'effects', label: 'Efeitos', icon: 'activity' },
  ],
} as const satisfies GameSystemDescriptor
