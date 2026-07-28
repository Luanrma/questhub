import type { FastifyInstance } from 'fastify'
import { registerInventoryApi } from './inventory_api/register'
import { registerPathfinder2e } from './pathfinder_2e/register'
import { registerGameSystemRoutes } from './registry/register'

export function registerGameSystems(app: FastifyInstance) {
  registerGameSystemRoutes(app)
  registerInventoryApi(app)
  registerPathfinder2e(app)
}
