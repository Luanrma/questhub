import type { FastifyInstance } from 'fastify'
import {
  registerGameSystemAutomationApi,
  type GameSystemAutomationEventPublisher,
} from './automation_api/register'
import { registerInventoryApi } from './inventory_api/register'
import { registerPathfinder2e } from './pathfinder_2e/register'
import { registerGameSystemRoutes } from './registry/register'

export function registerGameSystems(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
  registerGameSystemRoutes(app, events)
  registerGameSystemAutomationApi(app, events)
  registerInventoryApi(app)
  registerPathfinder2e(app, events)
}
