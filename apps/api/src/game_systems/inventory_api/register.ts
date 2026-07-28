import type { FastifyInstance } from 'fastify'
import { registerInventoryRoutes } from './routes'

export function registerInventoryApi(app: FastifyInstance) {
  registerInventoryRoutes(app)
}
