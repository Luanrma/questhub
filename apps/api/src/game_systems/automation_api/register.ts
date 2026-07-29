import type { FastifyInstance } from 'fastify'
import { registerGameSystemAutomationRoutes } from '../automation/routes'

export type { GameSystemAutomationEventPublisher } from '../automation/contracts'

export function registerGameSystemAutomationApi(app: FastifyInstance) {
  registerGameSystemAutomationRoutes(app)
}
