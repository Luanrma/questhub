import type { FastifyInstance } from 'fastify'
import { registerGameSystemAutomationRoutes } from '../automation/routes'

export function registerGameSystemAutomationApi(app: FastifyInstance) {
  registerGameSystemAutomationRoutes(app)
}
