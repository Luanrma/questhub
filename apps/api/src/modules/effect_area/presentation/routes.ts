import type { FastifyInstance, FastifyReply } from 'fastify'
import type { Server } from 'socket.io'
import { requireAuth } from '../../../http/auth'
import { AreaService, AreaServiceError } from '../application/area-service'
import { presentAreaTemplate, presentSceneAreaEffect } from '../domain/presenters'
import {
  campaignParamsSchema,
  createAreaTemplateSchema,
  createSceneAreaEffectSchema,
  effectParamsSchema,
  sceneParamsSchema,
  templateParamsSchema,
  updateAreaTemplateSchema,
  updateSceneAreaEffectSchema,
} from './validation'
import { campaignRoom } from '../../campaign-presence/rooms'

function sendError(reply: FastifyReply, error: unknown) {
  if (error instanceof AreaServiceError) return reply.status(error.statusCode).send({ error: error.message, details: error.details })
  throw error
}

export function registerEffectAreaRoutes(app: FastifyInstance, io?: Server, service = new AreaService()) {
  app.get('/api/campaigns/:campaignId/area-templates', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = campaignParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })
    try {
      return reply.send((await service.listTemplates(params.data.campaignId, auth.id)).map(presentAreaTemplate))
    } catch (error) { return sendError(reply, error) }
  })

  app.post('/api/campaigns/:campaignId/area-templates', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = campaignParamsSchema.safeParse(req.params)
    const body = createAreaTemplateSchema.safeParse(req.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: body.success ? 'Campanha invalida' : body.error.flatten() })
    try {
      return reply.status(201).send(presentAreaTemplate(await service.createTemplate(params.data.campaignId, auth.id, body.data)))
    } catch (error) { return sendError(reply, error) }
  })

  app.patch('/api/campaigns/:campaignId/area-templates/:templateId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = templateParamsSchema.safeParse(req.params)
    const body = updateAreaTemplateSchema.safeParse(req.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: body.success ? 'Parametros invalidos' : body.error.flatten() })
    try {
      return reply.send(presentAreaTemplate(await service.updateTemplate(params.data.campaignId, params.data.templateId, auth.id, body.data)))
    } catch (error) { return sendError(reply, error) }
  })

  app.post('/api/campaigns/:campaignId/area-templates/:templateId/duplicate', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = templateParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })
    try {
      return reply.status(201).send(presentAreaTemplate(await service.duplicateTemplate(params.data.campaignId, params.data.templateId, auth.id)))
    } catch (error) { return sendError(reply, error) }
  })

  app.delete('/api/campaigns/:campaignId/area-templates/:templateId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = templateParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })
    try {
      await service.deleteTemplate(params.data.campaignId, params.data.templateId, auth.id)
      return reply.send({ ok: true })
    } catch (error) { return sendError(reply, error) }
  })

  app.get('/api/campaigns/:campaignId/scenes/:sceneId/area-effects', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = sceneParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })
    try {
      return reply.send((await service.listEffects(params.data.campaignId, params.data.sceneId, auth.id)).map(presentSceneAreaEffect))
    } catch (error) { return sendError(reply, error) }
  })

  app.post('/api/campaigns/:campaignId/scenes/:sceneId/area-effects', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = sceneParamsSchema.safeParse(req.params)
    const body = createSceneAreaEffectSchema.safeParse(req.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: body.success ? 'Parametros invalidos' : body.error.flatten() })
    try {
      const presented = presentSceneAreaEffect(await service.createEffect(params.data.campaignId, params.data.sceneId, auth.id, body.data))
      if (presented.configurationSnapshot && (presented.configurationSnapshot as { visibility?: string }).visibility === 'ALL_PLAYERS') {
        io?.to(campaignRoom(params.data.campaignId)).emit('area-effect:created', presented)
      }
      return reply.status(201).send(presented)
    } catch (error) { return sendError(reply, error) }
  })

  app.patch('/api/campaigns/:campaignId/scenes/:sceneId/area-effects/:effectId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = effectParamsSchema.safeParse(req.params)
    const body = updateSceneAreaEffectSchema.safeParse(req.body)
    if (!params.success || !body.success) return reply.status(400).send({ error: body.success ? 'Parametros invalidos' : body.error.flatten() })
    try {
      const presented = presentSceneAreaEffect(await service.updateEffect(params.data.campaignId, params.data.sceneId, params.data.effectId, auth.id, body.data))
      if ((presented.configurationSnapshot as { visibility?: string }).visibility === 'ALL_PLAYERS') {
        io?.to(campaignRoom(params.data.campaignId)).emit('area-effect:updated', presented)
      }
      return reply.send(presented)
    } catch (error) { return sendError(reply, error) }
  })

  app.delete('/api/campaigns/:campaignId/scenes/:sceneId/area-effects/:effectId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return
    const params = effectParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })
    try {
      await service.deleteEffect(params.data.campaignId, params.data.sceneId, params.data.effectId, auth.id)
      io?.to(campaignRoom(params.data.campaignId)).emit('area-effect:removed', {
        campaignId: params.data.campaignId,
        sceneId: params.data.sceneId,
        effectId: params.data.effectId,
      })
      return reply.send({ ok: true })
    } catch (error) { return sendError(reply, error) }
  })
}
