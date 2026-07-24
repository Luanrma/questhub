import type { Pathfinder2eOriginalContentRecord } from '../../../records'
import type { Pathfinder2eItemData } from '../../types'

export const PATHFINDER_PLAYER_CORE_ARMOR_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    contentId: 'pf2e:item:equipment-srd:leather-armor',
    domain: 'ITEM',
    locale: 'en-US',
    sourceHash: 'git-blob:2b7f4b94cf7653e8b9bbc6ebd4ed9be93566dbc8',
    translatableHash: 'git-blob:2b7f4b94cf7653e8b9bbc6ebd4ed9be93566dbc8',
    source: { sourcePack: 'equipment-srd', sourceId: '4tIVTg9wj56RrveA', slug: 'leather-armor', publicationTitle: 'Pathfinder Player Core', license: 'ORC', remaster: true },
    data: {
      schemaVersion: 1,
      name: 'Leather Armor',
      itemType: 'armor',
      level: 0,
      rarity: 'common',
      traits: [],
      description: 'A mix of flexible leather and molded boiled leather that provides protection while preserving mobility.',
      bulk: 1,
      price: { gp: 2 },
      usage: 'worn-armor',
      category: 'light',
      group: 'leather',
      armor: { armorClassBonus: 1, dexterityCap: 4, checkPenalty: -1, speedPenaltyFeet: 0 },
    },
  },
]
