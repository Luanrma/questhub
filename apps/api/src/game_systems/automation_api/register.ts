import type { FastifyInstance } from 'fastify'
import type { GameSystemAutomationEventPublisher } from '../automation/contracts'
import { registerGameSystemAutomationRoutes } from '../automation/routes'
import { registerGameSystemToolBindingRoutes } from '../automation/tool-binding-routes'

export type { GameSystemAutomationEventPublisher } from '../automation/contracts'

export function registerGameSystemAutomationApi(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
  registerGameSystemAutomationRoutes(app)
  registerGameSystemToolBindingRoutes(app, events)
}
