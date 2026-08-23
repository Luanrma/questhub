import type { GameSystemDescriptor } from '../catalog'

export const pathfinder2eGameSystemDescriptor = {
  key: 'PATHFINDER_2E',
  slug: 'pathfinder-2e',
  label: 'Pathfinder 2e',
  catalogDomains: [
    { key: 'BESTIARY', slug: 'bestiary', label: 'Bestiário' },
    {
      key: 'SPELLS',
      slug: 'spells',
      label: 'Magias',
      capabilities: {
        areaEffectBindingNamespace: 'questhub:pathfinder_2e:spells:v1',
      },
    },
    {
      key: 'ITEMS',
      slug: 'items',
      label: 'Itens',
      capabilities: {
        canSendToActorInventory: true,
      },
    },
    { key: 'EFFECTS', slug: 'effects', label: 'Efeitos' },
  ],
} as const satisfies GameSystemDescriptor