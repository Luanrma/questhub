import type {
  Pathfinder2eContentProgramPlan,
  Pathfinder2eContentRoadmap,
  Pathfinder2eContentRound,
  Pathfinder2eRoadmapValidation,
} from './models'

const CORE_PUBLICATIONS = [
  'Pathfinder Player Core',
  'Pathfinder Player Core 2',
  'Pathfinder GM Core',
  'Pathfinder Monster Core',
] as const

const PROGRAMS: readonly Pathfinder2eContentProgramPlan[] = [
  {
    id: 'CORE_REMASTER',
    order: 1,
    title: 'Core Remaster',
    strategy: 'LEVEL_BANDS',
    description: 'Conteúdo principal Remaster dividido por níveis e ranks.',
  },
  {
    id: 'NPC_CORE',
    order: 2,
    title: 'NPC Core',
    strategy: 'LEVEL_BANDS',
    description: 'NPCs e conteúdos editoriais associados divididos por faixas de nível.',
  },
  {
    id: 'RULEBOOKS',
    order: 3,
    title: 'Rulebooks adicionais',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Livros de regras processados por ordem editorial.',
  },
  {
    id: 'LOST_OMENS',
    order: 4,
    title: 'Lost Omens',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Publicações Lost Omens processadas individualmente e em ordem editorial.',
  },
  {
    id: 'STANDALONE_ADVENTURES',
    order: 5,
    title: 'Aventuras independentes',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Aventuras independentes processadas por publicação.',
  },
  {
    id: 'ADVENTURE_PATHS',
    order: 6,
    title: 'Adventure Paths',
    strategy: 'SERIES_AND_VOLUME',
    description: 'Adventure Paths processados por série e volume.',
  },
  {
    id: 'PATHFINDER_SOCIETY',
    order: 7,
    title: 'Pathfinder Society',
    strategy: 'SEASON_AND_SCENARIO',
    description: 'Conteúdo processado por temporada e cenário.',
  },
  {
    id: 'LEGACY_OGL',
    order: 8,
    title: 'Legacy/OGL',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Conteúdo legado processado por último e sem mistura silenciosa com Remaster.',
  },
]

function coreRound(
  id: string,
  order: number,
  title: string,
  bestiaryLevel: Readonly<{ min: number; max: number }>,
  spellRank: Readonly<{ min: number; max: number }>,
  itemLevel: Readonly<{ min: number; max: number }>,
): Pathfinder2eContentRound {
  return {
    id,
    order,
    kind: 'CONTENT',
    program: 'CORE_REMASTER',
    title,
    status: 'PLANNED',
    locales: ['en-US', 'pt-BR'],
    selection: {
      bestiary: { publications: CORE_PUBLICATIONS, level: bestiaryLevel, maxEntries: 20 },
      spells: { publications: CORE_PUBLICATIONS, rank: spellRank, maxEntries: 30 },
      items: { publications: CORE_PUBLICATIONS, level: itemLevel, maxEntries: 40 },
    },
    frozenEntryIds: { bestiary: [], spells: [], items: [] },
  }
}

const firstRound: Pathfinder2eContentRound = {
  ...coreRound(
    'pf2e-core-remaster-01',
    1,
    'Core Remaster — início de jogo',
    { min: -1, max: 2 },
    { min: 0, max: 1 },
    { min: 0, max: 1 },
  ),
  status: 'REVIEWING',
  frozenEntryIds: {
    bestiary: [
      'pf2e:bestiary:pathfinder-monster-core:goblin-warrior',
      'pf2e:bestiary:pathfinder-monster-core:skeleton-guard',
      'pf2e:bestiary:pathfinder-monster-core:wolf',
    ],
    spells: [
      'pf2e:spell:spells-srd:electric-arc',
      'pf2e:spell:spells-srd:force-barrage',
      'pf2e:spell:spells-srd:heal',
    ],
    items: [
      'pf2e:item:equipment-srd:dogslicer',
      'pf2e:item:equipment-srd:leather-armor',
      'pf2e:item:equipment-srd:shortbow',
    ],
  },
}

const ROUNDS: readonly Pathfinder2eContentRound[] = [
  firstRound,
  coreRound('pf2e-core-remaster-02', 2, 'Core Remaster — níveis baixos', { min: 3, max: 4 }, { min: 2, max: 2 }, { min: 2, max: 4 }),
  coreRound('pf2e-core-remaster-03', 3, 'Core Remaster — intermediário I', { min: 5, max: 8 }, { min: 3, max: 4 }, { min: 5, max: 8 }),
  coreRound('pf2e-core-remaster-04', 4, 'Core Remaster — intermediário II', { min: 9, max: 12 }, { min: 5, max: 6 }, { min: 9, max: 12 }),
  coreRound('pf2e-core-remaster-05', 5, 'Core Remaster — níveis altos I', { min: 13, max: 16 }, { min: 7, max: 8 }, { min: 13, max: 16 }),
  coreRound('pf2e-core-remaster-06', 6, 'Core Remaster — níveis altos II', { min: 17, max: 25 }, { min: 9, max: 10 }, { min: 17, max: 30 }),
]

export const PATHFINDER_2E_CONTENT_ROADMAP: Pathfinder2eContentRoadmap = {
  schemaVersion: 1,
  baseline: {
    sourceBranch: 'development',
    bestiary: 5_492,
    spells: 1_802,
    items: 5_217,
  },
  roundLimits: {
    bestiary: 20,
    spells: 30,
    items: 40,
  },
  programs: PROGRAMS,
  rounds: ROUNDS,
}

function duplicatedNumbers(values: readonly number[]): number[] {
  return values.filter((value, index) => values.indexOf(value) !== index)
}

function duplicatedStrings(values: readonly string[]): string[] {
  return values.filter((value, index) => values.indexOf(value) !== index)
}

export function validatePathfinder2eContentRoadmap(
  roadmap: Pathfinder2eContentRoadmap = PATHFINDER_2E_CONTENT_ROADMAP,
): Pathfinder2eRoadmapValidation {
  const errors: string[] = []
  const roundIds = roadmap.rounds.map((round) => round.id)
  const roundOrders = roadmap.rounds.map((round) => round.order)
  const programOrders = roadmap.programs.map((program) => program.order)

  for (const duplicate of new Set(duplicatedStrings(roundIds))) errors.push(`duplicate-round-id:${duplicate}`)
  for (const duplicate of new Set(duplicatedNumbers(roundOrders))) errors.push(`duplicate-round-order:${duplicate}`)
  for (const duplicate of new Set(duplicatedNumbers(programOrders))) errors.push(`duplicate-program-order:${duplicate}`)

  for (const round of roadmap.rounds) {
    if (!round.locales.includes('en-US')) errors.push(`${round.id}:missing-en-US`)
    if (!round.locales.includes('pt-BR')) errors.push(`${round.id}:missing-pt-BR`)

    const selections = [round.selection.bestiary, round.selection.spells, round.selection.items]
    if (selections.some((selection) => selection.maxEntries <= 0)) errors.push(`${round.id}:invalid-max-entries`)
    if (selections.some((selection) => selection.publications.length === 0)) errors.push(`${round.id}:missing-publications`)

    const frozenCounts = [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ]
    if (round.status !== 'PLANNED' && frozenCounts.some((count) => count === 0)) {
      errors.push(`${round.id}:non-planned-round-must-freeze-all-domains`)
    }
  }

  return { valid: errors.length === 0, errors }
}

export function getNextPathfinder2eContentRound(
  roadmap: Pathfinder2eContentRoadmap = PATHFINDER_2E_CONTENT_ROADMAP,
): Pathfinder2eContentRound | null {
  return roadmap.rounds
    .slice()
    .sort((left, right) => left.order - right.order || left.id.localeCompare(right.id))
    .find((round) => round.status !== 'PUBLISHED') ?? null
}
