import type { FastifyInstance } from 'fastify'
import { registerGameSystemCharacterSheetManagerProvider } from '../character-sheets'
import { pathfinder2eCharacterSheetManagerProvider } from './character-sheet/manager-provider'
import { registerPathfinder2eCharacterSheetRoutes } from './character-sheet/routes'
import { registerPathfinder2eContentCatalogRoutes } from './content_catalog/routes'

let characterSheetManagerRegistered = false

export function registerPathfinder2e(app: FastifyInstance) {
  if (!characterSheetManagerRegistered) {
    registerGameSystemCharacterSheetManagerProvider(
      'PATHFINDER_2E',
      pathfinder2eCharacterSheetManagerProvider,
    )
    characterSheetManagerRegistered = true
  }

  registerPathfinder2eCharacterSheetRoutes(app)
  registerPathfinder2eContentCatalogRoutes(app)
}
