import type { FastifyInstance } from 'fastify'
import { registerPathfinder2eCharacterSheetRoutes } from './character-sheet/routes'
import { registerPathfinder2eContentCatalogRoutes } from './content_catalog/routes'

export function registerPathfinder2e(app: FastifyInstance) {
  registerPathfinder2eCharacterSheetRoutes(app)
  registerPathfinder2eContentCatalogRoutes(app)
}
