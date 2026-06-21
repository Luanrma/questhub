import type { FastifyInstance } from 'fastify'
import type { Server as SocketIOServer } from 'socket.io'
import { requireAuth } from '../../http/auth'

export function registerTradeRoutes(app: FastifyInstance, io: SocketIOServer) {
  app.post('/api/items/trade', async (req, reply) => {
    const fromUser = requireAuth(req, reply)
    if (!fromUser) return

    const body = (req.body ?? {}) as {
      campaignId?: string
      toUserId?: string
      item?: unknown
    }

    if (!body.toUserId) return reply.status(400).send({ error: 'toUserId obrigatorio' })

    io.to(`user:${body.toUserId}`).emit('trade:received', {
      campaignId: body.campaignId ?? null,
      fromUserId: fromUser.id,
      item: body.item ?? null,
      createdAt: new Date().toISOString(),
    })

    return reply.send({ success: true })
  })
}
