import { isDeepStrictEqual } from 'node:util'
import type { GameSystemInventoryPolicy } from '../../inventory'

export const pathfinder2eInventoryPolicy: GameSystemInventoryPolicy = {
  canStack(existingData, incomingData) {
    return isDeepStrictEqual(existingData, incomingData)
  },
}
