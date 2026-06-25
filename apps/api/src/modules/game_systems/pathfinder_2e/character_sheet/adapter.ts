import type { CharacterSheetSystemAdapter } from '../../models'
import { PATHFINDER_2E_DATA_KEY, PATHFINDER_2E_SHEET_VERSION, PATHFINDER_2E_SYSTEM } from './constants'
import { defaultPathfinder2eSheet } from './default-sheet'
import type { Pathfinder2eSheet } from './models'
import { pathfinder2eSheetSchema } from './schema'

export const pathfinder2eSheetAdapter: CharacterSheetSystemAdapter<Pathfinder2eSheet> = {
  system: PATHFINDER_2E_SYSTEM,
  dataKey: PATHFINDER_2E_DATA_KEY,
  version: PATHFINDER_2E_SHEET_VERSION,
  defaultSheet: defaultPathfinder2eSheet,
  schema: pathfinder2eSheetSchema,
}
