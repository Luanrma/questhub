import type { GameSystemDescriptor } from '../catalog'

export const pathfinder2eGameSystemDescriptor = {
  key: 'PATHFINDER_2E',
  slug: 'pathfinder-2e',
  label: 'Pathfinder 2e',
  catalogDomains: [
    { key: 'BESTIARY', slug: 'bestiary', label: 'Bestiário' },
    { key: 'SPELLS', slug: 'spells', label: 'Magias' },
    { key: 'ITEMS', slug: 'items', label: 'Itens' },
  ],
} as const satisfies GameSystemDescriptor
