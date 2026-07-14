import type { Pathfinder2eCharacterSpellbookData } from '../character-sheet/spells/types'
import type {
  Pathfinder2eCastOptionsEntryView,
  Pathfinder2eCastSourcePayload,
  Pathfinder2eResolveResponse,
} from '../spell-casting/types'
import type { SceneAreaShape } from '../../../../game-system-core/src/shared/scene-geometry'

export type CampaignNpcDefinitionView = {
  id: string
  campaignId: string
  bestiaryCreatureId: string
  name: string
  spellbook: Pathfinder2eCharacterSpellbookData
}

export type NpcCastOptionsResponse = {
  definitionId: string
  entries: Pathfinder2eCastOptionsEntryView[]
}

export type NpcCastResponse = {
  definitionId: string
  spellName: string
  consumed: string
}

export type NpcCastRequestPayload = {
  clientCastId: string
  entryId: string
  spellId: string
  source: Pathfinder2eCastSourcePayload
  caster?: { sceneId: string; casterTokenId: string }
  placement?: { sceneId: string; casterTokenId: string; shape: SceneAreaShape }
  targets?: string[]
}

export type NpcResolveRequestPayload = {
  entryId: string
  sceneId: string
  casterTokenId: string
  targetTokenIds: string[]
}

export type { Pathfinder2eResolveResponse }
