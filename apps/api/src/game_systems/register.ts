import type { FastifyInstance } from 'fastify'
import { registerGameSystemRoutes } from './routes'
import { registerPathfinder2e } from './pathfinder_2e/register'

export function registerGameSystems(app: FastifyInstance) {
  registerGameSystemRoutes(app)
  registerPathfinder2e(app)
}
