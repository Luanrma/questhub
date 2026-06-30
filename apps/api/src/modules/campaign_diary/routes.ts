import type { FastifyInstance } from 'fastify'
import { requireAuth } from '../../http/auth'
import { presentCampaignDiary } from './domain/presenters'
import { campaignDiaryIdParamsSchema, campaignDiaryParamsSchema, createCampaignDiarySchema, updateCampaignDiarySchema } from './domain/validation'
import {
  createCampaignDiaryForMaster,
  deleteCampaignDiaryForMaster,
  getCampaignDiaryForMaster,
  listCampaignDiariesForMaster,
  updateCampaignDiaryForMaster,
} from './services/campaign-diary-service'

export function registerCampaignDiaryRoutes(app: FastifyInstance) {
  app.get('/api/campaigns/:campaignId/diaries', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignDiaryParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const result = await listCampaignDiariesForMaster(params.data.campaignId, payload.id)
    if (result.status === 'forbidden') return reply.status(403).send({ error: 'Apenas o mestre pode acessar diarios' })

    return reply.send(result.diaries.map(presentCampaignDiary))
  })

  app.post('/api/campaigns/:campaignId/diaries', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignDiaryParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const parsed = createCampaignDiarySchema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const result = await createCampaignDiaryForMaster({
      campaignId: params.data.campaignId,
      title: parsed.data.title,
      content: parsed.data.content,
      userId: payload.id,
    })
    if (result.status === 'forbidden') return reply.status(403).send({ error: 'Apenas o mestre pode criar diarios' })

    return reply.status(201).send(presentCampaignDiary(result.diary))
  })

  app.get('/api/campaigns/:campaignId/diaries/:diaryId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignDiaryIdParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Diario invalido' })

    const result = await getCampaignDiaryForMaster(params.data.campaignId, params.data.diaryId, payload.id)
    if (result.status === 'forbidden') return reply.status(403).send({ error: 'Apenas o mestre pode acessar diarios' })
    if (result.status === 'not_found') return reply.status(404).send({ error: 'Diario nao encontrado' })

    return reply.send(presentCampaignDiary(result.diary))
  })

  app.patch('/api/campaigns/:campaignId/diaries/:diaryId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignDiaryIdParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Diario invalido' })

    const parsed = updateCampaignDiarySchema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const result = await updateCampaignDiaryForMaster({
      campaignId: params.data.campaignId,
      diaryId: params.data.diaryId,
      title: parsed.data.title,
      content: parsed.data.content,
      userId: payload.id,
    })
    if (result.status === 'forbidden') return reply.status(403).send({ error: 'Apenas o mestre pode editar diarios' })
    if (result.status === 'not_found') return reply.status(404).send({ error: 'Diario nao encontrado' })

    return reply.send(presentCampaignDiary(result.diary))
  })

  app.delete('/api/campaigns/:campaignId/diaries/:diaryId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignDiaryIdParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Diario invalido' })

    const result = await deleteCampaignDiaryForMaster({
      campaignId: params.data.campaignId,
      diaryId: params.data.diaryId,
      userId: payload.id,
    })
    if (result.status === 'forbidden') return reply.status(403).send({ error: 'Apenas o mestre pode deletar diarios' })
    if (result.status === 'not_found') return reply.status(404).send({ error: 'Diario nao encontrado' })

    return reply.send({ ok: true })
  })
}
