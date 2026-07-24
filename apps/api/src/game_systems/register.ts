import type { FastifyInstance } from 'fastify'
import { registerPathfinder2e } from './pathfinder_2e/register'

export function registerGameSystems(app: FastifyInstance) {
  registerPathfinder2e(app)
}
