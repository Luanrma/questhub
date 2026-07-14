export type Pathfinder2eSpellcastingCategory = 'PREPARED' | 'SPONTANEOUS' | 'INNATE' | 'FOCUS' | 'ITEMS' | 'RITUAL'

export type Pathfinder2ePreparationStyle = 'STANDARD' | 'FLEXIBLE'

export type Pathfinder2eSpellSlotRank = {
  rank: number
  max: number
  used?: number
}

export type Pathfinder2eKnownSpell = {
  spellId: string
  name: string
  rank: number
}

export type Pathfinder2ePreparedSpellSlot = {
  rank: number
  slotIndex: number
  spellId: string | null
  name: string | null
  expended: boolean
}

export type Pathfinder2eFocusPool = {
  points: number
  max: number
}

export type Pathfinder2eInnateSpellUse = {
  spellId: string
  name: string
  usesPerDay: number | 'at-will'
  used: number
}

export type Pathfinder2eRitualEntry = {
  spellId: string
  name: string
}

export type Pathfinder2eRecentCast = {
  clientCastId: string
  requestKey: string
  response: {
    characterId: string
    revision: number
    spellName: string
    consumed: string
    entryId?: string
    spellId?: string
    castRank?: number
  }
  createdAt: string
}

export type Pathfinder2eSpellcastingEntry = {
  id: string
  name: string
  category: Pathfinder2eSpellcastingCategory
  tradition: string
  ability: string
  proficiencyRank: number
  preparationStyle?: Pathfinder2ePreparationStyle
  slots: Pathfinder2eSpellSlotRank[]
  known: Pathfinder2eKnownSpell[]
  prepared: Pathfinder2ePreparedSpellSlot[]
  focusPool?: Pathfinder2eFocusPool
  innateUses: Pathfinder2eInnateSpellUse[]
  signatureSpellIds: string[]
  // Spell DC fixo, so presente em entradas de NPC — ver
  // .ai/game_systems/pathfinder_2e/npc_spellcasting/specs.md secao 2.
  npcSpellDC?: number
}

export type Pathfinder2eCharacterSpellbookData = {
  entries: Pathfinder2eSpellcastingEntry[]
  rituals: Pathfinder2eRitualEntry[]
  focusPool?: Pathfinder2eFocusPool
  recentCasts?: Pathfinder2eRecentCast[]
}

export type CharacterSpellbookEnvelope = {
  system: string
  version: number
  data: {
    pathfinder2e?: Pathfinder2eCharacterSpellbookData
    [key: string]: unknown
  }
}

export type GetCharacterSpellbookResponse = {
  characterId: string
  system: string
  revision: number
  spellbook: CharacterSpellbookEnvelope
}

export type Pathfinder2eSpellSearchResult = {
  id: string
  name: string
  category: 'spell' | 'ritual'
  rank: string | null
  tags: string[]
}
