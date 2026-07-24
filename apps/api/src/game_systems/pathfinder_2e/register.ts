import type { FastifyInstance } from 'fastify'
import { registerPathfinder2eCharacterSheetRoutes } from './character-sheet/routes'

export function registerPathfinder2e(app: FastifyInstance) {
  registerPathfinder2eCharacterSheetRoutes(app)
}
