import type { FastifyInstance } from 'fastify'
import { registerGameSystemAutomationRoutes } from './automation/routes'
import { registerInventoryApi } from './inventory_api/register'
import { registerPathfinder2e } from './pathfinder_2e/register'
import { registerGameSystemRoutes } from './registry/register'

export function registerGameSystems(app: FastifyInstance) {
  registerGameSystemRoutes(app)
  registerGameSystemAutomationRoutes(app)
  registerInventoryApi(app)
  registerPathfinder2e(app)
}
