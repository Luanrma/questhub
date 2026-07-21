import type { FastifyInstance } from 'fastify'
import type { Server as SocketIOServer } from 'socket.io'
import { requireAuth } from '../../../http/auth'
import { campaignRoom } from '../../campaign-presence/rooms'
import type { FogService, FogServiceResult } from '../application/fog-service'
import {
  configurePlacementOcclusionSchema,
  configureSceneFogSchema,
  configureTokenLightSchema,
  configureTokenVisionSchema,
  fogExplorationHttpSyncSchema,
  fogExplorationParamsSchema,
  fogSceneParamsSchema,
  fogTokenParamsSchema,
} from './validation'

function sendResult(reply: { status: (code: number) => { send: (body: unknown) => unknown }; send: (body: unknown) => unknown }, result: FogServiceResult<unknown>) {
  if (result.ok) return reply.send(result.data)
  const status = result.code === 'FORBIDDEN' ? 403
    : result.code.endsWith('_NOT_FOUND') ? 404
      : result.code === 'STALE_FOG_REVISION' ? 409
        : 400
  return reply.status(status).send({ error: { code: result.code, message: result.message } })
}

export function registerFogRoutes(app: FastifyInstance, service: FogService, io?: SocketIOServer) {
  app.patch('/api/campaigns/:campaignId/scenes/:sceneId/fog', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogSceneParamsSchema.safeParse(request.params)
    const body = configureSceneFogSchema.safeParse(request.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Configuracao de FOG invalida' } })
    const result = await service.configureScene({ ...params.data, userId: user.id, ...body.data })
    if (result.ok) io?.to(campaignRoom(params.data.campaignId)).emit('fog:scene:configured', { ...params.data, ...result.data })
    return sendResult(reply, result)
  })

  app.patch('/api/campaigns/:campaignId/tokens/:tokenId/vision', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogTokenParamsSchema.safeParse(request.params)
    const body = configureTokenVisionSchema.safeParse(request.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Configuracao de visao invalida' } })
    const result = await service.configureTokenVision({ ...params.data, userId: user.id, visionConfig: body.data.visionConfig })
    if (result.ok) io?.to(campaignRoom(params.data.campaignId)).emit('fog:token:vision:configured', { ...params.data, ...result.data })
    return sendResult(reply, result)
  })

  app.patch('/api/campaigns/:campaignId/tokens/:tokenId/light', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogTokenParamsSchema.safeParse(request.params)
    const body = configureTokenLightSchema.safeParse(request.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Configuracao de luz invalida' } })
    const result = await service.configureTokenLight({ ...params.data, userId: user.id, lightConfig: body.data.lightConfig })
    if (result.ok) io?.to(campaignRoom(params.data.campaignId)).emit('fog:light:toggled', { ...params.data, ...result.data })
    return sendResult(reply, result)
  })

  app.patch('/api/campaigns/:campaignId/tokens/:tokenId/placement-occlusion', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogTokenParamsSchema.safeParse(request.params)
    const body = configurePlacementOcclusionSchema.safeParse(request.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Configuracao de bloqueio invalida' } })
    const result = await service.configurePlacementOcclusion({ ...params.data, userId: user.id, ...body.data })
    if (result.ok) io?.to(campaignRoom(params.data.campaignId)).emit('fog:placement:occlusion:configured', { ...params.data, blocksVisionAndLight: body.data.blocksVisionAndLight })
    return sendResult(reply, result)
  })

  app.get('/api/campaigns/:campaignId/scenes/:sceneId/fog/exploration/:tokenId', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogExplorationParamsSchema.safeParse(request.params)
    if (!params.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Exploracao invalida' } })
    const result = await service.loadExploration({ ...params.data, userId: user.id })
    if (!result.ok) return sendResult(reply, result)
    return reply.send(result.data ? {
      revision: result.data.revision,
      width: result.data.width,
      height: result.data.height,
      maskBase64: Buffer.from(result.data.mask).toString('base64'),
    } : null)
  })

  app.put('/api/campaigns/:campaignId/scenes/:sceneId/fog/exploration/:tokenId', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogExplorationParamsSchema.safeParse(request.params)
    const body = fogExplorationHttpSyncSchema.safeParse(request.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Exploracao invalida' } })
    const mask = Buffer.from(body.data.maskBase64, 'base64')
    return sendResult(reply, await service.syncExploration({
      ...params.data,
      userId: user.id,
      exploration: { revision: body.data.revision, width: body.data.width, height: body.data.height, mask },
    }))
  })

  app.delete('/api/campaigns/:campaignId/scenes/:sceneId/fog/exploration/:tokenId', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogExplorationParamsSchema.safeParse(request.params)
    if (!params.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Exploracao invalida' } })
    return sendResult(reply, await service.resetExploration({ ...params.data, userId: user.id }))
  })

  app.delete('/api/campaigns/:campaignId/scenes/:sceneId/fog/exploration', async (request, reply) => {
    const user = requireAuth(request, reply)
    if (!user) return
    const params = fogSceneParamsSchema.safeParse(request.params)
    if (!params.success) return reply.status(400).send({ error: { code: 'INVALID_PAYLOAD', message: 'Exploracao invalida' } })
    return sendResult(reply, await service.resetExploration({ ...params.data, userId: user.id }))
  })
}
