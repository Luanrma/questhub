import type { FastifyInstance } from 'fastify'
import { registerInventoryRoutes } from './routes'
import { registerInventorySlotPolicy } from './slot-policy'

export function registerInventoryApi(app: FastifyInstance) {
  registerInventorySlotPolicy(app)
  registerInventoryRoutes(app)
}
