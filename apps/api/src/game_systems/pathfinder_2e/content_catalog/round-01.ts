import type {
  Pathfinder2eContentTranslation,
  Pathfinder2eImportManifestEntry,
  Pathfinder2eOriginalContentRecord,
  Pathfinder2eRoundCoverage,
  Pathfinder2eSourceLock,
} from './records'
import { calculatePathfinder2eRoundReadiness } from './progress'

export const PATHFINDER_2E_ROUND_01_ID = 'pf2e-core-remaster-01'

export type Pathfinder2eBestiaryPilotData = {
  schemaVersion: 1
  name: string
  level: number
  rarity: string
  size: string
  traits: string[]
  description: string
  armorClass: number
  hitPoints: number
  speedFeet: number
  perception: { modifier: number; senses: string[] }
  saves: { fortitude: number; reflex: number; will: number }
  abilities: { str: number; dex: number; con: number; int: number; wis: number; cha: number }
  skills: Record<string, number>
  languages: string[]
  defenses: { immunities: string[]; resistances: string[]; weaknesses: string[] }
  attacks: Array<{ id: string; name: string; bonus: number; damage: string; traits: string[] }>
  actions: Array<{ id: string; name: string; kind: 'action' | 'reaction' | 'passive'; description: string }>
}

export type Pathfinder2eSpellPilotData = {
  schemaVersion: 1
  name: string
  rank: number
  rarity: string
  traits: string[]
  traditions: string[]
  description: string
  castingTime: string
  range: string
  target: string
  area: string | null
  duration: string
  defense: string | null
  damage: Array<{ formula: string; type: string; kind: 'damage' | 'healing' | 'damage-or-healing' }>
  heightening: string
}

export type Pathfinder2eItemPilotData = {
  schemaVersion: 1
  name: string
  itemType: 'weapon' | 'armor'
  level: number
  rarity: string
  traits: string[]
  description: string
  bulk: number
  price: { gp?: number; sp?: number }
  usage: string
  category: string
  group: string
  damage?: { dice: number; die: string; type: string }
  armor?: { armorClassBonus: number; dexterityCap: number; checkPenalty: number; speedPenaltyFeet: number }
}

export type Pathfinder2ePilotData =
  | Pathfinder2eBestiaryPilotData
  | Pathfinder2eSpellPilotData
  | Pathfinder2eItemPilotData

export type Pathfinder2eRoundContentEntry = {
  roundId: typeof PATHFINDER_2E_ROUND_01_ID
  original: Pathfinder2eOriginalContentRecord<Pathfinder2ePilotData>
  translation: Pathfinder2eContentTranslation
}

export const PATHFINDER_2E_ROUND_01_SOURCE_LOCK: Pathfinder2eSourceLock = {
  provider: 'FOUNDRY_PF2E',
  systemVersion: '8.3.0',
  sourceCommit: '01114da5851f31404078d8020809b13e4000bc4b',
  inputChecksum: 'b25766f9c74d8eef993c10753a709324208df9b4c09514991ea5e65dab0a1fa2',
  importerVersion: 1,
  importedAt: '2026-07-24T01:40:02.000Z',
}

const entries: Pathfinder2eRoundContentEntry[] = [
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:bestiary:pathfinder-monster-core:goblin-warrior',
      domain: 'BESTIARY',
      locale: 'en-US',
      sourceHash: 'git-blob:d242458d376fb3f258e8a9c20cc7e2f500c298a1',
      translatableHash: 'git-blob:d242458d376fb3f258e8a9c20cc7e2f500c298a1',
      source: {
        provider: 'FOUNDRY_PF2E',
        sourcePack: 'pathfinder-monster-core',
        sourceId: 'fLLKuOXwPq1Iq0U4',
        slug: 'goblin-warrior',
        publicationTitle: 'Pathfinder Monster Core',
        license: 'ORC',
        remaster: true,
      },
      data: {
        schemaVersion: 1,
        name: 'Goblin Warrior',
        level: -1,
        rarity: 'common',
        size: 'small',
        traits: ['goblin', 'humanoid'],
        description: 'Frontline goblin fighters prefer to battle in large groups and overwhelm enemies through numbers and mobility.',
        armorClass: 16,
        hitPoints: 6,
        speedFeet: 25,
        perception: { modifier: 2, senses: ['darkvision'] },
        saves: { fortitude: 5, reflex: 7, will: 3 },
        abilities: { str: 0, dex: 3, con: 1, int: 0, wis: -1, cha: 1 },
        skills: { acrobatics: 5, athletics: 2, nature: 1, stealth: 5 },
        languages: ['goblin', 'common'],
        defenses: { immunities: [], resistances: [], weaknesses: [] },
        attacks: [
          { id: 'CnmgzGmi2Avq67QA', name: 'Dogslicer', bonus: 7, damage: '1d6 slashing', traits: ['agile', 'backstabber', 'finesse'] },
          { id: '4EXgRMqNIRLXxB1c', name: 'Shortbow', bonus: 7, damage: '1d6 piercing', traits: ['deadly-d10', 'reload-0'] },
        ],
        actions: [
          {
            id: 'czwGWW73rkPW7vBg',
            name: 'Goblin Scuttle',
            kind: 'reaction',
            description: 'When a goblin ally ends a move action adjacent to the warrior, the warrior Steps.',
          },
        ],
      },
    },
    translation: {
      contentId: 'pf2e:bestiary:pathfinder-monster-core:goblin-warrior',
      locale: 'pt-BR',
      sourceTranslatableHash: 'git-blob:d242458d376fb3f258e8a9c20cc7e2f500c298a1',
      version: 1,
      status: 'MACHINE_DRAFT',
      fields: {
        name: 'Guerreiro Goblin',
        description: 'Combatentes goblins da linha de frente preferem lutar em grandes grupos e subjugar seus inimigos usando superioridade numérica e mobilidade.',
        size: 'Pequeno',
        traits: { goblin: 'goblin', humanoid: 'humanoide' },
        senses: { darkvision: 'visão no escuro' },
        languages: { goblin: 'goblin', common: 'comum' },
        attacks: {
          CnmgzGmi2Avq67QA: { name: 'Corta-Cão', damage: '1d6 cortante' },
          '4EXgRMqNIRLXxB1c': { name: 'Arco Curto', damage: '1d6 perfurante' },
        },
        actions: {
          czwGWW73rkPW7vBg: {
            name: 'Debandada Goblin',
            description: 'Quando um aliado goblin termina uma ação de movimento adjacente ao guerreiro, o guerreiro dá um Passo.',
          },
        },
      },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:bestiary:pathfinder-monster-core:wolf',
      domain: 'BESTIARY',
      locale: 'en-US',
      sourceHash: 'git-blob:d93e78ff6feddaf9c7114e900bc13c718bc924c9',
      translatableHash: 'git-blob:d93e78ff6feddaf9c7114e900bc13c718bc924c9',
      source: {
        provider: 'FOUNDRY_PF2E',
        sourcePack: 'pathfinder-monster-core',
        sourceId: 'BN5Lb6IsQ9Wyu3rL',
        slug: 'wolf',
        publicationTitle: 'Pathfinder Monster Core',
        license: 'ORC',
        remaster: true,
      },
      data: {
        schemaVersion: 1,
        name: 'Wolf',
        level: 1,
        rarity: 'common',
        size: 'medium',
        traits: ['animal'],
        description: 'Wolves hunt in packs, surround vulnerable prey, and gain an advantage when allies are close to the same target.',
        armorClass: 15,
        hitPoints: 24,
        speedFeet: 35,
        perception: { modifier: 7, senses: ['low-light-vision', 'scent-imprecise-30'] },
        saves: { fortitude: 6, reflex: 9, will: 5 },
        abilities: { str: 2, dex: 4, con: 1, int: -4, wis: 2, cha: -2 },
        skills: { acrobatics: 7, athletics: 6, stealth: 7, survival: 7 },
        languages: [],
        defenses: { immunities: [], resistances: [], weaknesses: [] },
        attacks: [
          { id: 'NX0owCPUZbsVJ4az', name: 'Jaws', bonus: 9, damage: '1d6+2 piercing', traits: ['unarmed', 'knockdown'] },
        ],
        actions: [
          {
            id: 'GhRRqxvK6T21zheo',
            name: 'Pack Attack',
            kind: 'passive',
            description: "The wolf's Strikes deal 1d4 extra damage to creatures within reach of at least two of the wolf's allies.",
          },
          { id: 'dB4Pr3yiNKH32fE8', name: 'Knockdown', kind: 'action', description: 'Standard bestiary Knockdown action.' },
        ],
      },
    },
    translation: {
      contentId: 'pf2e:bestiary:pathfinder-monster-core:wolf',
      locale: 'pt-BR',
      sourceTranslatableHash: 'git-blob:d93e78ff6feddaf9c7114e900bc13c718bc924c9',
      version: 1,
      status: 'MACHINE_DRAFT',
      fields: {
        name: 'Lobo',
        description: 'Lobos caçam em matilhas, cercam presas vulneráveis e obtêm vantagem quando seus aliados estão próximos do mesmo alvo.',
        size: 'Médio',
        traits: { animal: 'animal' },
        senses: { 'low-light-vision': 'visão na penumbra', 'scent-imprecise-30': 'faro impreciso 9 metros' },
        attacks: { NX0owCPUZbsVJ4az: { name: 'Mandíbulas', damage: '1d6+2 perfurante' } },
        actions: {
          GhRRqxvK6T21zheo: {
            name: 'Ataque em Matilha',
            description: 'Os Golpes do lobo causam 1d4 de dano adicional a criaturas ao alcance de pelo menos dois aliados do lobo.',
          },
          dB4Pr3yiNKH32fE8: { name: 'Derrubar', description: 'Ação padronizada de Derrubar do bestiário.' },
        },
      },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:bestiary:pathfinder-monster-core:skeleton-guard',
      domain: 'BESTIARY',
      locale: 'en-US',
      sourceHash: 'git-blob:fb28b14a418faa3e0db57c8a3bc534ba4643dd97',
      translatableHash: 'git-blob:fb28b14a418faa3e0db57c8a3bc534ba4643dd97',
      source: {
        provider: 'FOUNDRY_PF2E',
        sourcePack: 'pathfinder-monster-core',
        sourceId: 'trchDxbDR2TiPMxT',
        slug: 'skeleton-guard',
        publicationTitle: 'Pathfinder Monster Core',
        license: 'ORC',
        remaster: true,
      },
      data: {
        schemaVersion: 1,
        name: 'Skeleton Guard',
        level: -1,
        rarity: 'common',
        size: 'medium',
        traits: ['mindless', 'skeleton', 'undead', 'unholy'],
        description: 'Skeleton guards are among the most common animated undead and are usually created to protect a location.',
        armorClass: 16,
        hitPoints: 4,
        speedFeet: 25,
        perception: { modifier: 2, senses: ['darkvision'] },
        saves: { fortitude: 2, reflex: 8, will: 2 },
        abilities: { str: 2, dex: 4, con: 0, int: -5, wis: 0, cha: 0 },
        skills: { acrobatics: 6, athletics: 3 },
        languages: [],
        defenses: {
          immunities: ['death-effects', 'disease', 'paralyzed', 'poison', 'unconscious', 'bleed'],
          resistances: ['cold 5', 'electricity 5', 'fire 5', 'piercing 5', 'slashing 5'],
          weaknesses: [],
        },
        attacks: [
          { id: 'jL9PDQ27Dz6UAMOH', name: 'Scimitar', bonus: 6, damage: '1d6+2 slashing', traits: ['forceful', 'sweep'] },
          { id: 'EzSKWtWM2tSTtZwA', name: 'Claw', bonus: 6, damage: '1d4+2 slashing', traits: ['agile', 'finesse', 'unarmed'] },
          { id: '7ODNVUAaNraSivsT', name: 'Shortbow', bonus: 6, damage: '1d6 piercing', traits: ['deadly-d10', 'reload-0'] },
        ],
        actions: [
          { id: 'm25t326n1Ovt0t5U', name: 'Void Healing', kind: 'passive', description: 'The creature is healed by void effects and harmed by vitality effects.' },
        ],
      },
    },
    translation: {
      contentId: 'pf2e:bestiary:pathfinder-monster-core:skeleton-guard',
      locale: 'pt-BR',
      sourceTranslatableHash: 'git-blob:fb28b14a418faa3e0db57c8a3bc534ba4643dd97',
      version: 1,
      status: 'MACHINE_DRAFT',
      fields: {
        name: 'Guarda Esqueleto',
        description: 'Guardas esqueletos estão entre os mortos-vivos animados mais comuns e normalmente são criados para proteger um local.',
        size: 'Médio',
        traits: { mindless: 'sem mente', skeleton: 'esqueleto', undead: 'morto-vivo', unholy: 'profano' },
        senses: { darkvision: 'visão no escuro' },
        defenses: {
          immunities: ['efeitos de morte', 'doença', 'paralisado', 'veneno', 'inconsciente', 'sangramento'],
          resistances: ['frio 5', 'eletricidade 5', 'fogo 5', 'perfurante 5', 'cortante 5'],
        },
        attacks: {
          jL9PDQ27Dz6UAMOH: { name: 'Cimitarra', damage: '1d6+2 cortante' },
          EzSKWtWM2tSTtZwA: { name: 'Garra', damage: '1d4+2 cortante' },
          '7ODNVUAaNraSivsT': { name: 'Arco Curto', damage: '1d6 perfurante' },
        },
        actions: {
          m25t326n1Ovt0t5U: {
            name: 'Cura pelo Vazio',
            description: 'A criatura é curada por efeitos de vazio e ferida por efeitos de vitalidade.',
          },
        },
      },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:spell:spells-srd:electric-arc',
      domain: 'SPELL',
      locale: 'en-US',
      sourceHash: 'git-blob:a6c45ae8e1dd8cf140d9c1396494dbd8b26e82d1',
      translatableHash: 'git-blob:a6c45ae8e1dd8cf140d9c1396494dbd8b26e82d1',
      source: { provider: 'FOUNDRY_PF2E', sourcePack: 'spells-srd', sourceId: 'kBhaPuzLUSwS6vVf', slug: 'electric-arc', publicationTitle: 'Pathfinder Player Core', license: 'ORC', remaster: true },
      data: {
        schemaVersion: 1,
        name: 'Electric Arc',
        rank: 1,
        rarity: 'common',
        traits: ['cantrip', 'concentrate', 'electricity', 'manipulate'],
        traditions: ['arcane', 'primal'],
        description: 'An arc of lightning leaps from one target to another. Each target takes 2d4 electricity damage with a basic Reflex save.',
        castingTime: '2 actions',
        range: '30 feet',
        target: '1 or 2 creatures',
        area: null,
        duration: 'instantaneous',
        defense: 'basic Reflex save',
        damage: [{ formula: '2d4', type: 'electricity', kind: 'damage' }],
        heightening: 'Heightened (+1): damage increases by 1d4.',
      },
    },
    translation: {
      contentId: 'pf2e:spell:spells-srd:electric-arc', locale: 'pt-BR', sourceTranslatableHash: 'git-blob:a6c45ae8e1dd8cf140d9c1396494dbd8b26e82d1', version: 1, status: 'MACHINE_DRAFT',
      fields: {
        name: 'Arco Elétrico',
        description: 'Um arco de eletricidade salta de um alvo para outro. Cada alvo sofre 2d4 de dano elétrico, com um salvamento básico de Reflexos.',
        castingTime: '2 ações', range: '9 metros', target: '1 ou 2 criaturas', duration: 'instantânea', defense: 'salvamento básico de Reflexos', heightening: 'Aprimorada (+1): o dano aumenta em 1d4.',
        traits: { cantrip: 'truque', concentrate: 'concentração', electricity: 'eletricidade', manipulate: 'manipulação' },
        traditions: { arcane: 'arcana', primal: 'primal' },
      },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:spell:spells-srd:force-barrage',
      domain: 'SPELL',
      locale: 'en-US',
      sourceHash: 'git-blob:c92171de982d94a73361f42b3cf5a15426b37258',
      translatableHash: 'git-blob:c92171de982d94a73361f42b3cf5a15426b37258',
      source: { provider: 'FOUNDRY_PF2E', sourcePack: 'spells-srd', sourceId: 'gKKqvLohtrSJj3BM', slug: 'force-barrage', publicationTitle: 'Pathfinder Player Core', license: 'ORC', remaster: true },
      data: {
        schemaVersion: 1,
        name: 'Force Barrage',
        rank: 1,
        rarity: 'common',
        traits: ['concentrate', 'force', 'manipulate'],
        traditions: ['arcane', 'occult'],
        description: 'You fire a shard of solidified magic that automatically hits and deals 1d4+1 force damage. Each additional casting action creates another shard, up to three.',
        castingTime: '1 to 3 actions',
        range: '120 feet',
        target: '1 creature per shard',
        area: null,
        duration: 'instantaneous',
        defense: null,
        damage: [{ formula: '1d4+1', type: 'force', kind: 'damage' }],
        heightening: 'Heightened (+2): fire one additional shard for each action spent.',
      },
    },
    translation: {
      contentId: 'pf2e:spell:spells-srd:force-barrage', locale: 'pt-BR', sourceTranslatableHash: 'git-blob:c92171de982d94a73361f42b3cf5a15426b37258', version: 1, status: 'MACHINE_DRAFT',
      fields: {
        name: 'Barragem de Força',
        description: 'Você dispara um fragmento de magia solidificada que acerta automaticamente e causa 1d4+1 de dano de força. Cada ação adicional de conjuração cria outro fragmento, até o máximo de três.',
        castingTime: '1 a 3 ações', range: '36 metros', target: '1 criatura por fragmento', duration: 'instantânea', heightening: 'Aprimorada (+2): dispare um fragmento adicional para cada ação utilizada.',
        traits: { concentrate: 'concentração', force: 'força', manipulate: 'manipulação' },
        traditions: { arcane: 'arcana', occult: 'ocultista' },
      },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:spell:spells-srd:heal',
      domain: 'SPELL',
      locale: 'en-US',
      sourceHash: 'git-blob:104b9892805d3248b2afea3ecaced5c3c93d53d8',
      translatableHash: 'git-blob:104b9892805d3248b2afea3ecaced5c3c93d53d8',
      source: { provider: 'FOUNDRY_PF2E', sourcePack: 'spells-srd', sourceId: 'rfZpqmj0AIIdkVIs', slug: 'heal', publicationTitle: 'Pathfinder Player Core', license: 'ORC', remaster: true },
      data: {
        schemaVersion: 1,
        name: 'Heal',
        rank: 1,
        rarity: 'common',
        traits: ['healing', 'manipulate', 'vitality'],
        traditions: ['divine', 'primal'],
        description: 'You channel vital energy to restore 1d8 Hit Points to a willing living creature or deal 1d8 vitality damage to an undead target. The number of actions changes range and targets.',
        castingTime: '1 to 3 actions',
        range: 'varies',
        target: '1 willing living creature, 1 undead, or all living and undead creatures in a 30-foot emanation',
        area: '30-foot emanation with 3 actions',
        duration: 'instantaneous',
        defense: 'basic Fortitude save for undead targets',
        damage: [{ formula: '1d8', type: 'vitality', kind: 'damage-or-healing' }],
        heightening: 'Heightened (+1): healing or damage increases by 1d8; the 2-action healing bonus increases by 8.',
      },
    },
    translation: {
      contentId: 'pf2e:spell:spells-srd:heal', locale: 'pt-BR', sourceTranslatableHash: 'git-blob:104b9892805d3248b2afea3ecaced5c3c93d53d8', version: 1, status: 'MACHINE_DRAFT',
      fields: {
        name: 'Curar',
        description: 'Você canaliza energia vital para restaurar 1d8 Pontos de Vida de uma criatura viva voluntária ou causar 1d8 de dano de vitalidade a um alvo morto-vivo. A quantidade de ações altera o alcance e os alvos.',
        castingTime: '1 a 3 ações', range: 'variável', target: '1 criatura viva voluntária, 1 morto-vivo ou todas as criaturas vivas e mortas-vivas em uma emanação de 9 metros', area: 'emanação de 9 metros com 3 ações', duration: 'instantânea', defense: 'salvamento básico de Fortitude para alvos mortos-vivos', heightening: 'Aprimorada (+1): a cura ou o dano aumenta em 1d8; o bônus de cura da versão de 2 ações aumenta em 8.',
        traits: { healing: 'cura', manipulate: 'manipulação', vitality: 'vitalidade' },
        traditions: { divine: 'divina', primal: 'primal' },
      },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:item:equipment-srd:dogslicer',
      domain: 'ITEM',
      locale: 'en-US',
      sourceHash: 'git-blob:f59c0086e1fdf5774dc6015ee4c8e65dd98831f8',
      translatableHash: 'git-blob:f59c0086e1fdf5774dc6015ee4c8e65dd98831f8',
      source: { provider: 'FOUNDRY_PF2E', sourcePack: 'equipment-srd', sourceId: 'olwngGXM3hpgoLEP', slug: 'dogslicer', publicationTitle: 'Pathfinder Player Core', license: 'ORC', remaster: true },
      data: {
        schemaVersion: 1, name: 'Dogslicer', itemType: 'weapon', level: 0, rarity: 'uncommon', traits: ['agile', 'backstabber', 'finesse', 'goblin'],
        description: "A short, curved, crude makeshift blade with holes drilled into it to reduce weight. It is favored by goblins.", bulk: 0.1, price: { sp: 1 }, usage: 'held-in-one-hand', category: 'martial', group: 'sword', damage: { dice: 1, die: 'd6', type: 'slashing' },
      },
    },
    translation: {
      contentId: 'pf2e:item:equipment-srd:dogslicer', locale: 'pt-BR', sourceTranslatableHash: 'git-blob:f59c0086e1fdf5774dc6015ee4c8e65dd98831f8', version: 1, status: 'MACHINE_DRAFT',
      fields: { name: 'Corta-Cão', description: 'Uma lâmina improvisada curta, curva e rudimentar, com furos para reduzir seu peso. É uma arma apreciada por goblins.', itemType: 'arma', rarity: 'incomum', usage: 'empunhada em uma mão', category: 'marcial', group: 'espada', damageType: 'cortante', traits: { agile: 'ágil', backstabber: 'apunhaladora', finesse: 'acuidade', goblin: 'goblin' } },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:item:equipment-srd:shortbow',
      domain: 'ITEM',
      locale: 'en-US',
      sourceHash: 'git-blob:85e9cff7de9660efbd81a485713e39e1dc2fc8d8',
      translatableHash: 'git-blob:85e9cff7de9660efbd81a485713e39e1dc2fc8d8',
      source: { provider: 'FOUNDRY_PF2E', sourcePack: 'equipment-srd', sourceId: 'hIgqLgH3YcLZBeoT', slug: 'shortbow', publicationTitle: 'Pathfinder Player Core', license: 'ORC', remaster: true },
      data: {
        schemaVersion: 1, name: 'Shortbow', itemType: 'weapon', level: 0, rarity: 'common', traits: ['deadly-d10'],
        description: 'A smaller bow made from a single piece of wood and favored by skirmishers and cavalry.', bulk: 1, price: { gp: 3 }, usage: 'held-in-one-plus-hands', category: 'martial', group: 'bow', damage: { dice: 1, die: 'd6', type: 'piercing' },
      },
    },
    translation: {
      contentId: 'pf2e:item:equipment-srd:shortbow', locale: 'pt-BR', sourceTranslatableHash: 'git-blob:85e9cff7de9660efbd81a485713e39e1dc2fc8d8', version: 1, status: 'MACHINE_DRAFT',
      fields: { name: 'Arco Curto', description: 'Um arco menor, feito de uma única peça de madeira e preferido por escaramuçadores e cavaleiros.', itemType: 'arma', rarity: 'comum', usage: 'empunhado em uma ou mais mãos', category: 'marcial', group: 'arco', damageType: 'perfurante', traits: { 'deadly-d10': 'mortal d10' } },
    },
  },
  {
    roundId: PATHFINDER_2E_ROUND_01_ID,
    original: {
      contentId: 'pf2e:item:equipment-srd:leather-armor',
      domain: 'ITEM',
      locale: 'en-US',
      sourceHash: 'git-blob:2b7f4b94cf7653e8b9bbc6ebd4ed9be93566dbc8',
      translatableHash: 'git-blob:2b7f4b94cf7653e8b9bbc6ebd4ed9be93566dbc8',
      source: { provider: 'FOUNDRY_PF2E', sourcePack: 'equipment-srd', sourceId: '4tIVTg9wj56RrveA', slug: 'leather-armor', publicationTitle: 'Pathfinder Player Core', license: 'ORC', remaster: true },
      data: {
        schemaVersion: 1, name: 'Leather Armor', itemType: 'armor', level: 0, rarity: 'common', traits: [],
        description: 'A mix of flexible leather and molded boiled leather that provides protection while preserving mobility.', bulk: 1, price: { gp: 2 }, usage: 'worn-armor', category: 'light', group: 'leather', armor: { armorClassBonus: 1, dexterityCap: 4, checkPenalty: -1, speedPenaltyFeet: 0 },
      },
    },
    translation: {
      contentId: 'pf2e:item:equipment-srd:leather-armor', locale: 'pt-BR', sourceTranslatableHash: 'git-blob:2b7f4b94cf7653e8b9bbc6ebd4ed9be93566dbc8', version: 1, status: 'MACHINE_DRAFT',
      fields: { name: 'Armadura de Couro', description: 'Uma combinação de couro flexível e couro fervido moldado que oferece proteção sem comprometer a mobilidade.', itemType: 'armadura', rarity: 'comum', usage: 'vestida como armadura', category: 'leve', group: 'couro', traits: {} },
    },
  },
]

export const PATHFINDER_2E_ROUND_01_ENTRIES: readonly Pathfinder2eRoundContentEntry[] = entries

export const PATHFINDER_2E_ROUND_01_IMPORT_MANIFEST: readonly Pathfinder2eImportManifestEntry[] = entries.map((entry) => ({
  roundId: entry.roundId,
  contentId: entry.original.contentId,
  domain: entry.original.domain,
  source: entry.original.source,
  status: 'NORMALIZED',
  sourceHash: entry.original.sourceHash,
  normalizationWarnings: [],
}))

const domainCoverage = {
  planned: 3,
  imported: 3,
  normalized: 3,
  translated: 3,
  reviewed: 0,
  stale: 0,
  rejected: 0,
}

export const PATHFINDER_2E_ROUND_01_COVERAGE: Pathfinder2eRoundCoverage = calculatePathfinder2eRoundReadiness({
  roundId: PATHFINDER_2E_ROUND_01_ID,
  bestiary: { ...domainCoverage },
  spells: { ...domainCoverage },
  items: { ...domainCoverage },
})
