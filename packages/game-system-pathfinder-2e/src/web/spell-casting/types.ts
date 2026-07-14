import type { SceneAreaShape } from '../../../../game-system-core/src/shared/scene-geometry'

export type Pathfinder2eCastResourceView =
  | { kind: 'prepared'; slots: Array<{ rank: number; slotIndex: number; expended: boolean }> }
  | { kind: 'spontaneous'; byRank: Array<{ rank: number; max: number; used: number }> }
  | { kind: 'focus' }
  | { kind: 'innate'; usesPerDay: number | 'at-will'; used: number }
  | { kind: 'cantrip' }
  | { kind: 'unavailable'; reason: string }

export type Pathfinder2eSpellTargetProfileView =
  | { kind: 'none' }
  | { kind: 'count'; min: number; max: number }
  | { kind: 'unsupported'; raw: string }

export type Pathfinder2eDiceFormulaView = { kind: 'dice'; count: number; sides: number; bonus: number } | { kind: 'flat'; amount: number }

export type Pathfinder2eSpellResolutionProfileView =
  | { kind: 'none' }
  | { kind: 'basicSaveDamage'; formula: Pathfinder2eDiceFormulaView; damageType: string; statistic: 'fortitude' | 'reflex' | 'will' }

export type Pathfinder2eCastableSpellView = {
  spellId: string
  name: string
  rank: number
  isCantrip: boolean
  time: string | null
  rangeFeet: number | null
  rangeKind: 'feet' | 'touch' | 'unlimited' | 'unsupported' | 'none'
  area: { type: string; valueFeet: number } | null
  targetProfile: Pathfinder2eSpellTargetProfileView
  resolution: Pathfinder2eSpellResolutionProfileView
  resource: Pathfinder2eCastResourceView
}

export type Pathfinder2eCastOptionsEntryView = {
  entryId: string
  entryName: string
  category: 'PREPARED' | 'SPONTANEOUS' | 'INNATE' | 'FOCUS' | 'RITUAL' | 'ITEMS'
  focusPoints?: { points: number; max: number }
  spells: Pathfinder2eCastableSpellView[]
}

export type Pathfinder2eCastOptionsResponse = {
  characterId: string
  revision: number
  entries: Pathfinder2eCastOptionsEntryView[]
}

export type Pathfinder2eCastSourcePayload =
  | { kind: 'prepared'; rank: number; slotIndex: number }
  | { kind: 'spontaneous'; rank: number }
  | { kind: 'focus' }
  | { kind: 'innate' }
  | { kind: 'cantrip' }

export type Pathfinder2eCastResponse = {
  characterId: string
  revision: number
  spellName: string
  consumed: string
  entryId?: string
  spellId?: string
  castRank?: number
}

export type Pathfinder2eCastRequestPayload = {
  clientCastId: string
  revision: number
  entryId: string
  spellId: string
  source: Pathfinder2eCastSourcePayload
  caster?: {
    sceneId: string
    casterTokenId: string
  }
  placement?: {
    sceneId: string
    casterTokenId: string
    shape: SceneAreaShape
  }
  targets?: string[]
}

export type Pathfinder2eResolveRequestPayload = {
  clientResolveId: string
  clientCastId: string
  entryId: string
  sceneId: string
  casterTokenId: string
  targetTokenIds: string[]
}

export type Pathfinder2eDegreeOfSuccessView = 'criticalSuccess' | 'success' | 'failure' | 'criticalFailure'

export type Pathfinder2eResolveTargetResultView = {
  tokenId: string
  targetName: string
  saveStatistic: 'fortitude' | 'reflex' | 'will'
  naturalRoll: number
  saveTotal: number
  degree: Pathfinder2eDegreeOfSuccessView
  damageApplied: number
  resultingHealth: { currentHitPoints: number; maxHitPoints: number; temporaryHitPoints: number; state: 'OK' | 'DOWN' }
}

export type Pathfinder2eResolveResponse = {
  spellName: string
  spellDC: number
  damageRoll: { formula: string; total: number; rolls: number[] }
  damageType: string
  results: Pathfinder2eResolveTargetResultView[]
}
