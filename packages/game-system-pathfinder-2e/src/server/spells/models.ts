/**
 * Modelo canonico de magias do QuestHub.
 *
 * Este arquivo nao representa documentos do Foundry. Fontes externas devem ser
 * traduzidas para estes contratos no importador e descartadas em seguida.
 */
export type Pathfinder2eSpellKind = 'SPELL' | 'RITUAL'
export type Pathfinder2eSpellRarity = 'COMMON' | 'UNCOMMON' | 'RARE' | 'UNIQUE'
export type Pathfinder2eTradition = 'ARCANE' | 'DIVINE' | 'OCCULT' | 'PRIMAL'
export type Pathfinder2eSave = 'FORTITUDE' | 'REFLEX' | 'WILL'

export type Pathfinder2eCastingTime =
  | { kind: 'ACTIONS'; actions: 1 | 2 | 3 }
  | { kind: 'REACTION' }
  | { kind: 'FREE_ACTION' }
  | { kind: 'LONG'; text: string }
  | { kind: 'VARIABLE'; text: string }
  | { kind: 'UNKNOWN'; text: string }

export type Pathfinder2eSpellRange =
  | { kind: 'SELF' | 'TOUCH' | 'UNLIMITED' }
  | { kind: 'DISTANCE'; feet: number }
  | { kind: 'TEXT'; text: string }
  | { kind: 'NONE' }

export type Pathfinder2eSpellArea = {
  shape: 'BURST' | 'CONE' | 'CUBE' | 'CYLINDER' | 'EMANATION' | 'LINE' | 'SQUARE' | 'OTHER'
  feet: number
  text?: string
}

export type Pathfinder2eSpellDefense =
  | { kind: 'SAVE'; statistic: Pathfinder2eSave; basic: boolean }
  | { kind: 'SPELL_ATTACK' }
  | { kind: 'NONE' }

export type Pathfinder2eSpellDamageComponent = {
  id: string
  formula: string
  damageType: string
  kind: 'DAMAGE' | 'HEALING'
  applyAbilityModifier: boolean
}

export type Pathfinder2eSpellHeightening =
  | { kind: 'INTERVAL'; everyRanks: number; damage: Record<string, string>; areaFeet?: number }
  | { kind: 'MANUAL'; text: string }
  | { kind: 'NONE' }

export type Pathfinder2eRitual = {
  primaryCheck?: string
  secondaryChecks?: string
  secondaryCasters?: number
}

export type Pathfinder2eSpellAutomation = {
  status: 'SUPPORTED' | 'PARTIAL' | 'MANUAL'
  reasons: string[]
}

export type Pathfinder2eSpellSource = {
  provider: 'PAIZO'
  sourceId: string
  book?: string
  license?: string
  remaster: boolean
}

export type Pathfinder2eSpellDefinition = {
  id: string
  name: string
  kind: Pathfinder2eSpellKind
  rank: number
  rarity: Pathfinder2eSpellRarity
  traits: string[]
  traditions: Pathfinder2eTradition[]
  casting: {
    time: Pathfinder2eCastingTime
    cost?: string
    requirements?: string
  }
  targeting: {
    range: Pathfinder2eSpellRange
    target?: string
    area: Pathfinder2eSpellArea | null
  }
  duration: { text: string; sustained: boolean }
  defense: Pathfinder2eSpellDefense
  damage: Pathfinder2eSpellDamageComponent[]
  heightening: Pathfinder2eSpellHeightening
  counteraction: boolean
  ritual: Pathfinder2eRitual | null
  description: string
  automation: Pathfinder2eSpellAutomation
  source: Pathfinder2eSpellSource
}

/** Metadados auditaveis do processo de importacao; nao fazem parte da magia. */
export type Pathfinder2eSpellImportManifest = {
  importerVersion: number
  provider: 'FOUNDRY_PF2E'
  providerVersion: string
  importedAt: string
  inputChecksum: string
  imported: number
  rejected: Array<{ sourceId: string; reason: string }>
}
