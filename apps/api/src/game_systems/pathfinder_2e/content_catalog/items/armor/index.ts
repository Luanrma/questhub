import { pairPathfinder2eContent } from '../../content-entry'
import { PATHFINDER_PLAYER_CORE_ARMOR_ORIGINALS } from './original/pathfinder-player-core'
import { PATHFINDER_PLAYER_CORE_ARMOR_PT_BR } from './translations/pt-BR/pathfinder-player-core'

export const PATHFINDER_2E_ARMOR_ENTRIES = pairPathfinder2eContent(
  PATHFINDER_PLAYER_CORE_ARMOR_ORIGINALS,
  PATHFINDER_PLAYER_CORE_ARMOR_PT_BR,
)
