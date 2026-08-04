import type { FastifyInstance } from 'fastify'
import { registerInventoryActorRecipientRoutes } from './actor-recipient-routes'
import { registerInventoryRoutes } from './routes'
import { registerInventorySlotPolicy } from './slot-policy'
import { registerInventorySystemRoute } from './system-route'

export function registerInventoryApi(app: FastifyInstance) {
  registerInventorySlotPolicy(app)
  registerInventoryRoutes(app)
  registerInventoryActorRecipientRoutes(app)
  registerInventorySystemRoute(app)
}
