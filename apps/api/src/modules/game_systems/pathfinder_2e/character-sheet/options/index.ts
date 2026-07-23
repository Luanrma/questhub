import { PATHFINDER_2E_ANCESTRIES } from './ancestries'
import { PATHFINDER_2E_BACKGROUNDS } from './backgrounds'
import { PATHFINDER_2E_CLASSES } from './classes'
import { PATHFINDER_2E_DEITIES } from './deities'
import { PATHFINDER_2E_HERITAGES } from './heritages'

export {
  PATHFINDER_2E_ANCESTRIES,
  PATHFINDER_2E_BACKGROUNDS,
  PATHFINDER_2E_CLASSES,
  PATHFINDER_2E_DEITIES,
  PATHFINDER_2E_HERITAGES,
}

export const pathfinder2eCharacterSheetOptions = {
  ancestries: PATHFINDER_2E_ANCESTRIES,
  heritages: PATHFINDER_2E_HERITAGES,
  backgrounds: PATHFINDER_2E_BACKGROUNDS,
  classes: PATHFINDER_2E_CLASSES,
  deities: PATHFINDER_2E_DEITIES,
} as const
