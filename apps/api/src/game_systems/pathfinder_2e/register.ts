import type { FastifyInstance } from 'fastify'
import { registerGameSystemCharacterSheetManagerProvider } from '../character-sheets'
import { registerGameSystemCatalogProvider } from '../catalog'
import { pathfinder2eCharacterSheetManagerProvider } from './character-sheet/manager-provider'
import { registerPathfinder2eCharacterSheetRoutes } from './character-sheet/routes'
import { pathfinder2eCatalogProvider } from './content_catalog/catalog-provider'
import { registerPathfinder2eContentCatalogRoutes } from './content_catalog/routes'
import { registerPathfinder2eIconAssetRoutes } from './icon-assets'

let characterSheetManagerRegistered = false

export function registerPathfinder2e(app: FastifyInstance) {
  if (!characterSheetManagerRegistered) {
    registerGameSystemCharacterSheetManagerProvider(
      'PATHFINDER_2E',
      pathfinder2eCharacterSheetManagerProvider,
    )
    characterSheetManagerRegistered = true
  }

  registerGameSystemCatalogProvider('PATHFINDER_2E', pathfinder2eCatalogProvider)
  registerPathfinder2eCharacterSheetRoutes(app)
  registerPathfinder2eContentCatalogRoutes(app)
  registerPathfinder2eIconAssetRoutes(app)
}
