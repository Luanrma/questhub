import type { GameSystemBestiaryAdapter, GameSystemBestiaryCreature } from '../../bestiary/models'

export const PATHFINDER_2E_BESTIARY: GameSystemBestiaryCreature[] = [
  {
    id: 'pf2e:pathfinder-monster-core:aapoph-granitescale',
    system: 'PATHFINDER_2E',
    sourcePack: 'pathfinder-monster-core',
    sourceId: 'MXSKccQqbQqQ77Ii',
    name: 'Aapoph Granitescale',
    level: 6,
    rarity: 'common',
    size: 'med',
    traits: ['humanoid', 'mutant', 'serpentfolk'],
    translations: { ptBR: { name: 'Aapoph Escama de Granito', rarity: 'comum', size: 'medio', traits: ['humanoide', 'mutante', 'povo-serpente'] } },
    armorClass: 24,
    hitPoints: 120,
    speed: 25,
    publicationTitle: 'Pathfinder Monster Core',
    remaster: true,
    license: 'ORC',
    token: {
      imageUrl: null,
      fallbackInitials: 'AG',
      borderColor: '#84cc16',
    },
  },
  {
    id: 'pf2e:pathfinder-bestiary:adamantine-golem',
    system: 'PATHFINDER_2E',
    sourcePack: 'pathfinder-bestiary',
    sourceId: 'keCgklXcy4HZgQIL',
    name: 'Adamantine Golem',
    level: 18,
    rarity: 'rare',
    size: 'huge',
    traits: ['construct', 'golem', 'mindless'],
    translations: { ptBR: { name: 'Golem de Adamante', rarity: 'raro', size: 'enorme', traits: ['constructo', 'golem', 'sem mente'] } },
    armorClass: 42,
    hitPoints: 255,
    speed: 30,
    publicationTitle: 'Pathfinder Bestiary',
    remaster: false,
    license: 'OGL',
    token: {
      imageUrl: null,
      fallbackInitials: 'AG',
      borderColor: '#94a3b8',
    },
  },
  {
    id: 'pf2e:pathfinder-bestiary:air-mephit',
    system: 'PATHFINDER_2E',
    sourcePack: 'pathfinder-bestiary',
    sourceId: 'KDRlxdIUADWHI6Vr',
    name: 'Air Mephit',
    level: 1,
    rarity: 'common',
    size: 'sm',
    traits: ['air', 'elemental'],
    translations: { ptBR: { name: 'Mephit do Ar', rarity: 'comum', size: 'pequeno', traits: ['ar', 'elemental'] } },
    armorClass: 16,
    hitPoints: 12,
    speed: 20,
    publicationTitle: 'Pathfinder Bestiary',
    remaster: false,
    license: 'OGL',
    token: {
      imageUrl: null,
      fallbackInitials: 'AM',
      borderColor: '#38bdf8',
    },
  },
  {
    id: 'pf2e:pathfinder-bestiary:barghest',
    system: 'PATHFINDER_2E',
    sourcePack: 'pathfinder-bestiary',
    sourceId: 'x4mlZseBP5bWcy4H',
    name: 'Barghest',
    level: 4,
    rarity: 'common',
    size: 'med',
    traits: ['chaotic', 'evil', 'fiend', 'unholy'],
    translations: { ptBR: { name: 'Barghest', rarity: 'comum', size: 'medio', traits: ['caotico', 'maligno', 'infero', 'profano'] } },
    armorClass: 21,
    hitPoints: 50,
    speed: 25,
    publicationTitle: 'Pathfinder Bestiary',
    remaster: false,
    license: 'OGL',
    token: {
      imageUrl: null,
      fallbackInitials: 'B',
      borderColor: '#ef4444',
    },
  },
  {
    id: 'pf2e:pathfinder-bestiary:balor',
    system: 'PATHFINDER_2E',
    sourcePack: 'pathfinder-bestiary',
    sourceId: '9vNYtJZiseCEf4wt',
    name: 'Balor',
    level: 20,
    rarity: 'common',
    size: 'lg',
    traits: ['chaotic', 'demon', 'evil', 'fiend', 'unholy'],
    translations: { ptBR: { name: 'Balor', rarity: 'comum', size: 'grande', traits: ['caotico', 'demonio', 'maligno', 'infero', 'profano'] } },
    armorClass: 45,
    hitPoints: 480,
    speed: 35,
    publicationTitle: 'Pathfinder Bestiary',
    remaster: false,
    license: 'OGL',
    token: {
      imageUrl: null,
      fallbackInitials: 'B',
      borderColor: '#f97316',
    },
  },
  {
    id: 'pf2e:pathfinder-monster-core:goblin-warrior',
    system: 'PATHFINDER_2E',
    sourcePack: 'pathfinder-monster-core',
    sourceId: 'fLLKuOXwPq1Iq0U4',
    name: 'Goblin Warrior',
    level: -1,
    rarity: 'common',
    size: 'sm',
    traits: ['goblin', 'humanoid'],
    translations: { ptBR: { name: 'Guerreiro Goblin', rarity: 'comum', size: 'pequeno', traits: ['goblin', 'humanoide'] } },
    armorClass: 16,
    hitPoints: 6,
    speed: 25,
    publicationTitle: 'Pathfinder Monster Core',
    remaster: true,
    license: 'ORC',
    token: {
      imageUrl: null,
      fallbackInitials: 'GW',
      borderColor: '#22c55e',
    },
  },
]

function matchesSearch(creature: GameSystemBestiaryCreature, search: string) {
  const normalized = search.trim().toLocaleLowerCase()
  if (!normalized) return true

  return (
    creature.name.toLocaleLowerCase().includes(normalized) ||
    creature.sourcePack.toLocaleLowerCase().includes(normalized) ||
    creature.traits.some((trait) => trait.toLocaleLowerCase().includes(normalized))
  )
}

export const pathfinder2eBestiaryAdapter: GameSystemBestiaryAdapter = {
  system: 'PATHFINDER_2E',
  listCreatures(options) {
    const limit = options?.limit ?? 24
    const search = options?.search ?? ''

    return PATHFINDER_2E_BESTIARY.filter((creature) => matchesSearch(creature, search))
      .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
      .slice(0, limit)
  },
}
