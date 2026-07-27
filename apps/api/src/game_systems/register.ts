import type { FastifyInstance } from 'fastify'
import { registerPathfinder2e } from './pathfinder_2e/register'
import { registerGameSystemRoutes } from './registry/register'

export function registerGameSystems(app: FastifyInstance) {
  registerGameSystemRoutes(app)
  registerPathfinder2e(app)
}
