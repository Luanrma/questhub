import type { GameSystemItemEntry } from '../../../game_systems/items/models'
import type { ItemDefinitionSnapshot } from '../../domain/types'

export interface CatalogSheetLookupPort {
  /** Resolves the catalog sheet a granted inventory item was cloned from, or null when the item has no catalog origin (e.g. CUSTOM items created ad-hoc by the Master). */
  findSheetForItemDefinition(itemDefinition: ItemDefinitionSnapshot): GameSystemItemEntry | null
}
