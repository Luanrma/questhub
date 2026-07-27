import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_MONSTER_CORE_BESTIARY_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    contentId: 'pf2e:bestiary:pathfinder-monster-core:goblin-warrior',
    locale: 'pt-BR',
    sourceTranslatableHash: 'git-blob:d242458d376fb3f258e8a9c20cc7e2f500c298a1',
    version: 1,
    status: 'REVIEWED',
    fields: {
      name: 'Guerreiro Goblin',
      description: 'Combatentes goblins da linha de frente preferem lutar em grandes grupos e subjugar seus inimigos usando superioridade numérica e mobilidade.',
      size: 'Pequeno',
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
    status: 'REVIEWED',
    fields: {
      name: 'Lobo',
      description: 'Lobos caçam em matilhas, cercam presas vulneráveis e obtêm vantagem quando seus aliados estão próximos do mesmo alvo.',
      size: 'Médio',
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
    status: 'REVIEWED',
    fields: {
      name: 'Guarda Esqueleto',
      description: 'Guardas esqueletos estão entre os mortos-vivos animados mais comuns e normalmente são criados para proteger um local.',
      size: 'Médio',
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
  {
    contentId: 'pf2e:bestiary:pathfinder-monster-core:animated-statue',
    locale: 'pt-BR',
    sourceTranslatableHash: 'sha256:33ec37da557fa2e863d8770ddc4f1a369137f74c4a07602437efb29ceba6a4e3',
    version: 1,
    status: 'MACHINE_DRAFT',
    fields: {
      name: 'Estátua Animada',
      description: 'Estátuas animadas guardam criptas, santuários e edifícios públicos, muitas vezes escondidas entre estátuas comuns até que um intruso atraia sua atenção.',
      size: 'Médio',
      senses: { darkvision: 'visão no escuro' },
      attacks: {
        'animated-statue-fist': { name: 'Punho', damage: '1d8+6 contundente' },
      },
      actions: {
        'animated-statue-construct-armor': {
          name: 'Armadura de Constructo (Dureza 6)',
          description: 'A Dureza reduz o dano em 6. Quando a estátua fica com menos da metade dos Pontos de Vida, ou após sofrer dano de um acerto crítico, sua armadura de constructo se quebra e sua Classe de Armadura é reduzida para 15.',
        },
        'animated-statue-grab': {
          name: 'Agarrar',
          description: 'A estátua animada Agarra uma criatura após um Golpe bem-sucedido.',
        },
      },
    },
  },
  {
    contentId: 'pf2e:bestiary:pathfinder-monster-core:dryad',
    locale: 'pt-BR',
    sourceTranslatableHash: 'sha256:a30a14f39d6218287e7215743ae0112098b7197a2718d987ec17ea8ffe51dc50',
    version: 1,
    status: 'MACHINE_DRAFT',
    fields: {
      name: 'Dríade',
      description: 'Dríades são guardiãs feéricas das árvores e regiões arborizadas. Preferem persuasão e encantamentos, mas defendem seus bosques sagrados quando advertências pacíficas falham.',
      size: 'Médio',
      senses: { 'low-light-vision': 'visão na penumbra' },
      languages: { common: 'comum', elven: 'élfico', fey: 'feérico', muan: 'muan' },
      defenses: { weaknesses: ['ferro frio 5', 'fogo 5'] },
      attacks: {
        'dryad-branch': { name: 'Galho', damage: '1d12+2 contundente' },
      },
      actions: {
        'dryad-nature-empathy': {
          name: 'Empatia com a Natureza',
          description: 'A dríade pode fazer perguntas, receber respostas e usar Diplomacia com animais e plantas.',
        },
        'dryad-constant-spells': {
          name: 'Magias Constantes',
          description: 'A dríade recebe os benefícios das magias constantes listadas em seu bloco de estatísticas original.',
        },
        'dryad-tree-dependent': {
          name: 'Dependente de Árvore',
          description: 'A dríade é vinculada a uma grande árvore. Permanecer a mais de 300 pés dela por 24 horas enfraquece a dríade até que ela retorne.',
        },
        'dryad-tree-meld': {
          name: 'Fundir-se à Árvore',
          description: 'A dríade se funde à árvore vinculada e pode entrar em um espaço vital extradimensional dentro dela com até duas criaturas voluntárias adjacentes.',
        },
      },
    },
  },
  {
    contentId: 'pf2e:bestiary:pathfinder-monster-core:griffon',
    locale: 'pt-BR',
    sourceTranslatableHash: 'sha256:2f27cf00052ef524de50638935eb210fc70a81cc65be96a53fd78ab6416782f1',
    version: 1,
    status: 'MACHINE_DRAFT',
    fields: {
      name: 'Grifo',
      description: 'Grifos são feras majestosas com os quartos traseiros de um grande felino e a cabeça, as asas e os membros dianteiros de uma ave de rapina. Muitas culturas os reverenciam como símbolos de liberdade e força.',
      size: 'Grande',
      senses: {
        darkvision: 'visão no escuro',
        'scent-imprecise-60': 'faro impreciso 60 pés',
      },
      attacks: {
        'griffon-beak': { name: 'Bico', damage: '2d8+4 perfurante' },
        'griffon-talon': { name: 'Garra', damage: '2d6+4 perfurante' },
        'griffon-wing': { name: 'Asa', damage: '2d6+4 contundente' },
      },
      actions: {
        'griffon-flying-strafe': {
          name: 'Rasante Aéreo',
          description: 'O grifo Voa até seu Deslocamento de voo e realiza dois Golpes de garra durante esse movimento, cada um contra uma criatura diferente.',
        },
        'griffon-pounce': {
          name: 'Bote',
          description: 'O grifo Anda e realiza um Golpe de garra ao final do movimento.',
        },
        'griffon-regal-shriek': {
          name: 'Guincho Majestoso',
          description: 'O grifo solta um guincho aterrorizante. Criaturas em uma emanação de 60 pés realizam um salvamento de Vontade e podem ficar assustadas.',
        },
      },
    },
  },
]
