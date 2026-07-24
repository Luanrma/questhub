import { pairPathfinder2eContent } from '../content-entry'
import { PATHFINDER_MONSTER_CORE_BESTIARY_ORIGINALS } from './original/pathfinder-monster-core'
import { PATHFINDER_MONSTER_CORE_BESTIARY_PT_BR } from './translations/pt-BR/pathfinder-monster-core'

export const PATHFINDER_2E_BESTIARY_ENTRIES = pairPathfinder2eContent(
  PATHFINDER_MONSTER_CORE_BESTIARY_ORIGINALS,
  PATHFINDER_MONSTER_CORE_BESTIARY_PT_BR,
)
