import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_MONSTER_CORE_BESTIARY_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
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
  {
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
  {
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
]
