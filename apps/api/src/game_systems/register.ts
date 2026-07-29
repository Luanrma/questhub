import type { FastifyInstance } from 'fastify'
import type { GameSystemAutomationEventPublisher } from './automation/contracts'
import { registerGameSystemAutomationApi } from './automation_api/register'
import { registerInventoryApi } from './inventory_api/register'
import { registerPathfinder2e } from './pathfinder_2e/register'
import { registerGameSystemRoutes } from './registry/register'

export function registerGameSystems(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
  registerGameSystemRoutes(app)
  registerGameSystemAutomationApi(app)
  registerInventoryApi(app)
  registerPathfinder2e(app, events)
}
