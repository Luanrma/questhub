import type {
  Pathfinder2eContentProgramPlan,
  Pathfinder2eContentRoadmap,
  Pathfinder2eContentRound,
  Pathfinder2eCoverageInventoryEntry,
  Pathfinder2eRoadmapValidation,
} from './models'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS } from './deliveries/core-remaster-exhaustive-01-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_IDS } from './deliveries/core-remaster-exhaustive-02-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_IDS } from './deliveries/core-remaster-exhaustive-03-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS } from './deliveries/core-remaster-exhaustive-04-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_IDS } from './deliveries/core-remaster-exhaustive-05-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS } from './deliveries/core-remaster-exhaustive-06-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS } from './deliveries/core-remaster-exhaustive-07-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_IDS } from './deliveries/core-remaster-exhaustive-08-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_IDS } from './deliveries/core-remaster-exhaustive-09-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_IDS } from './deliveries/core-remaster-exhaustive-10-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IDS } from './deliveries/core-remaster-exhaustive-11-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IDS } from './deliveries/core-remaster-exhaustive-12-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IDS } from './deliveries/core-remaster-exhaustive-13-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IDS } from './deliveries/core-remaster-exhaustive-14-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_IDS } from './deliveries/core-remaster-exhaustive-15-ids'

const CORE_BESTIARY_PUBLICATIONS = ['Pathfinder Monster Core'] as const
const CORE_PLAYER_PUBLICATIONS = ['Pathfinder Player Core'] as const
const CORE_PLAYER_2_PUBLICATIONS = ['Pathfinder Player Core 2'] as const
const CORE_GM_PUBLICATIONS = ['Pathfinder GM Core'] as const
const CORE_BESTIARY_2_PUBLICATIONS = ['Pathfinder Monster Core 2'] as const
const CORE_BESTIARY_2_AND_GM_PUBLICATIONS = [
  'Pathfinder Monster Core 2',
  'Pathfinder GM Core',
] as const
const NPC_CORE_PUBLICATIONS = ['Pathfinder NPC Core'] as const
const RAGE_OF_ELEMENTS_PUBLICATIONS = ['Pathfinder Rage of Elements'] as const

const PROGRAMS: readonly Pathfinder2eContentProgramPlan[] = [
  {
    id: 'CORE_REMASTER',
    order: 1,
    title: 'Core Remaster',
    strategy: 'EXHAUSTIVE_ASCENDING',
    description: 'Conteúdo principal Remaster importado exaustivamente do menor nível ou Rank pendente.',
  },
  {
    id: 'NPC_CORE',
    order: 2,
    title: 'NPC Core',
    strategy: 'EXHAUSTIVE_ASCENDING',
    description: 'NPCs e conteúdos editoriais associados importados exaustivamente em ordem crescente.',
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
      bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, level: bestiaryLevel, maxEntries: 3 },
      spells: { publications: CORE_PLAYER_PUBLICATIONS, rank: spellRank, maxEntries: 3 },
      items: { publications: CORE_PLAYER_PUBLICATIONS, level: itemLevel, maxEntries: 3 },
    },
    frozenEntryIds: { bestiary: [], spells: [], items: [] },
  }
}

const firstRound: Pathfinder2eContentRound = {
  ...coreRound(
    'pf2e-core-remaster-01',
    1,
    'Core Remaster — piloto de início de jogo',
    { min: -1, max: 2 },
    { min: 0, max: 1 },
    { min: 0, max: 1 },
  ),
  status: 'READY',
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

const secondRound: Pathfinder2eContentRound = {
  ...coreRound(
    'pf2e-core-remaster-02',
    2,
    'Core Remaster — piloto de estruturas adicionais',
    { min: 3, max: 4 },
    { min: 2, max: 2 },
    { min: 2, max: 4 },
  ),
  status: 'REVIEWING',
  frozenEntryIds: {
    bestiary: [
      'pf2e:bestiary:pathfinder-monster-core:animated-statue',
      'pf2e:bestiary:pathfinder-monster-core:dryad',
      'pf2e:bestiary:pathfinder-monster-core:griffon',
    ],
    spells: [
      'pf2e:spell:spells-srd:blazing-bolt',
      'pf2e:spell:spells-srd:dispel-magic',
      'pf2e:spell:spells-srd:invisibility',
    ],
    items: [
      'pf2e:item:equipment-srd:full-plate',
      'pf2e:item:equipment-srd:healers-toolkit-expanded',
      'pf2e:item:equipment-srd:spyglass-fine',
    ],
  },
}

const exhaustiveBacklogRound: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-01',
  order: 3,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 01',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 50 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 20 },
    items: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 50 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS,
}

const exhaustiveBacklogRound02: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-02',
  order: 4,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 02',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_IDS,
}

const exhaustiveBacklogRound03: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-03',
  order: 5,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 03',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_IDS,
}

const exhaustiveBacklogRound04: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-04',
  order: 6,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 04',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS,
}

const exhaustiveBacklogRound05: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-05',
  order: 7,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 05',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_IDS,
}

const exhaustiveBacklogRound06: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-06',
  order: 8,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 06',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS,
}

const exhaustiveBacklogRound07: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-07',
  order: 9,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 07',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 18 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS,
}

const exhaustiveBacklogRound08: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-08',
  order: 10,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 08',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_IDS,
}

const exhaustiveBacklogRound09: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-09',
  order: 11,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 09',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_IDS,
}

const exhaustiveBacklogRound10: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-10',
  order: 12,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 10',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_IDS,
}

const exhaustiveBacklogRound11: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-11',
  order: 13,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 11 (hazards)',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_AND_GM_PUBLICATIONS, maxEntries: 78 },
    spells: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IDS,
}

const exhaustiveBacklogRound12: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-12',
  order: 14,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — transição para NPC Core 12',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 4 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IDS,
}

const exhaustiveBacklogRound13: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-13',
  order: 15,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — transição para NPC Core 13',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_GM_PUBLICATIONS, maxEntries: 1 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IDS,
}

const exhaustiveBacklogRound14: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-14',
  order: 16,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — conclusão e transição NPC Core 14',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 71 },
    spells: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 4 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 57 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IDS,
}

const npcCoreBacklogRound15: Pathfinder2eContentRound = {
  id: 'pf2e-npc-core-backlog-15',
  order: 17,
  kind: 'CONTENT',
  program: 'NPC_CORE',
  title: 'NPC Core — conclusão e transição para Rulebooks 15',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: RAGE_OF_ELEMENTS_PUBLICATIONS, maxEntries: 81 },
    spells: { publications: RAGE_OF_ELEMENTS_PUBLICATIONS, maxEntries: 40 },
    items: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 11 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_IDS,
}

const ROUNDS: readonly Pathfinder2eContentRound[] = [
  firstRound,
  secondRound,
  exhaustiveBacklogRound,
  exhaustiveBacklogRound02,
  exhaustiveBacklogRound03,
  exhaustiveBacklogRound04,
  exhaustiveBacklogRound05,
  exhaustiveBacklogRound06,
  exhaustiveBacklogRound07,
  exhaustiveBacklogRound08,
  exhaustiveBacklogRound09,
  exhaustiveBacklogRound10,
  exhaustiveBacklogRound11,
  exhaustiveBacklogRound12,
  exhaustiveBacklogRound13,
  exhaustiveBacklogRound14,
  npcCoreBacklogRound15,
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
    bestiary: 100,
    spells: 40,
    items: 100,
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

export function selectNextPathfinder2eCoverageBatch(
  inventory: readonly Pathfinder2eCoverageInventoryEntry[],
  coveredContentIds: ReadonlySet<string>,
  maxEntries: number,
): Pathfinder2eCoverageInventoryEntry[] {
  if (!Number.isInteger(maxEntries) || maxEntries <= 0) return []

  return inventory
    .filter((entry) => !coveredContentIds.has(entry.contentId))
    .slice()
    .sort((left, right) => (
      left.value - right.value
      || left.sourcePack.localeCompare(right.sourcePack)
      || left.sourceId.localeCompare(right.sourceId)
      || left.contentId.localeCompare(right.contentId)
    ))
    .slice(0, maxEntries)
}
