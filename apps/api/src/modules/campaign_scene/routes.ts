import type { FastifyInstance } from 'fastify'
import type { Prisma } from '@prisma/client'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import {
  campaignSceneGridSchema,
  campaignSceneIdParamsSchema,
  campaignSceneParamsSchema,
  createCampaignSceneSchema,
  updateCampaignSceneSchema,
} from './validation'
import { presentCampaignSceneViewState } from './presenter'
import { presentCampaignSceneWithSignedBackground } from './signed-background'
import { z } from 'zod'

type CampaignAccess = {
  role: 'MASTER' | 'PLAYER'
  status: 'ACTIVE' | 'PENDING' | 'REJECTED' | 'LEFT'
  actorId: string | null
}

type CampaignSceneRoutesDeps = {
  removeScenePlacementsFromLiveState: (campaignId: string, sceneId: string) => Promise<void>
}

type CampaignSceneGridInput = z.infer<typeof campaignSceneGridSchema>

type CampaignSceneGridData = {
  gridVisible: boolean
  gridShape: 'SQUARE' | 'HEX'
  gridSize: number
  gridOffsetX: number
  gridOffsetY: number
  metersPerCell?: number
  squareMeasurementColor?: string
  hexMeasurementColor?: string
  gridLineWidth: number
  gridColor: string
}

const sceneInclude = {
  tokenPlacements: {
    include: {
      token: {
        include: {
          actor: {
            select: {
              mainForMember: { select: { userId: true, role: true } },
              controllerMember: { select: { userId: true } },
            },
          },
          controllerMember: {
            select: { id: true, userId: true, user: { select: { email: true } } },
          },
        },
      },
    },
    orderBy: { createdAt: 'asc' as const },
  },
}

async function getCampaignAccess(campaignId: string, userId: string): Promise<CampaignAccess | null> {
  return prisma.campaignMember.findFirst({
    where: {
      campaignId,
      userId,
      status: 'ACTIVE',
      role: { in: ['MASTER', 'PLAYER'] },
    },
    select: {
      role: true,
      status: true,
      actorId: true,
    },
  })
}

function isMaster(access: CampaignAccess | null) {
  return access?.role === 'MASTER' && access.status === 'ACTIVE'
}

function gridToSceneData(grid: CampaignSceneGridInput): CampaignSceneGridData {
  if (grid.shape === 'hex') {
    return {
      gridVisible: grid.visible,
      gridShape: 'HEX',
      gridSize: grid.size,
      gridOffsetX: grid.offsetX,
      gridOffsetY: grid.offsetY,
      metersPerCell: grid.metersPerCell,
      hexMeasurementColor: grid.hexMeasurementColor,
      gridLineWidth: grid.lineWidth,
      gridColor: grid.color,
    }
  }

  return {
    gridVisible: grid.visible,
    gridShape: 'SQUARE',
    gridSize: grid.size,
    gridOffsetX: grid.offsetX,
    gridOffsetY: grid.offsetY,
    metersPerCell: grid.metersPerCell,
    squareMeasurementColor: grid.squareMeasurementColor,
    gridLineWidth: grid.lineWidth,
    gridColor: grid.color,
  }
}

async function ensureAssetBelongsToCampaign(campaignId: string, assetId: string | null | undefined) {
  if (!assetId) return true

  const campaignAsset = await prisma.campaignAsset.findUnique({
    where: {
      campaignId_assetId: {
        campaignId,
        assetId,
      },
    },
    select: { id: true },
  })

  return Boolean(campaignAsset)
}

async function getVisibleSceneIdForAccess(campaignId: string, access: CampaignAccess) {
  const viewState = await prisma.campaignSceneViewState.findUnique({
    where: { campaignId },
    select: {
      masterActiveSceneId: true,
      forcedSceneId: true,
    },
  })

  if (access.role === 'MASTER') {
    if (viewState?.masterActiveSceneId) return viewState.masterActiveSceneId

    const firstScene = await prisma.campaignScene.findFirst({
      where: { campaignId },
      orderBy: { order: 'asc' },
      select: { id: true },
    })
    return firstScene?.id ?? null
  }

  if (viewState?.forcedSceneId) return viewState.forcedSceneId

  const token = await prisma.campaignToken.findUnique({
    where: {
      actorId: access.actorId,
    },
    select: { campaignId: true, placement: { select: { sceneId: true } } },
  })

  return token?.campaignId === campaignId ? token.placement?.sceneId ?? null : null
}

async function findVisibleScene(campaignId: string, access: CampaignAccess) {
  const visibleSceneId = await getVisibleSceneIdForAccess(campaignId, access)
  if (!visibleSceneId) return null

  return prisma.campaignScene.findFirst({
    where: {
      id: visibleSceneId,
      campaignId,
    },
    include: sceneInclude,
  })
}

async function sceneIsVisibleToAccess(campaignId: string, sceneId: string, access: CampaignAccess) {
  if (access.role === 'MASTER') return true
  const visibleSceneId = await getVisibleSceneIdForAccess(campaignId, access)
  return visibleSceneId === sceneId
}

export function registerCampaignSceneRoutes(app: FastifyInstance, deps: CampaignSceneRoutesDeps) {
  app.get('/api/campaigns/:campaignId/scenes/visible', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSceneParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const access = await getCampaignAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const [scene, viewState] = await Promise.all([
      findVisibleScene(params.data.campaignId, access),
      prisma.campaignSceneViewState.findUnique({
        where: { campaignId: params.data.campaignId },
        select: { campaignId: true, masterActiveSceneId: true, forcedSceneId: true },
      }),
    ])

    return reply.send({
      scene: scene ? await presentCampaignSceneWithSignedBackground(scene) : null,
      viewState: presentCampaignSceneViewState(viewState, params.data.campaignId),
    })
  })

  app.get('/api/campaigns/:campaignId/scenes', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSceneParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const access = await getCampaignAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    if (!isMaster(access)) {
      const scene = await findVisibleScene(params.data.campaignId, access)
      return reply.send(scene ? [await presentCampaignSceneWithSignedBackground(scene)] : [])
    }

    const scenes = await prisma.campaignScene.findMany({
      where: { campaignId: params.data.campaignId },
      include: sceneInclude,
      orderBy: { order: 'asc' },
    })

    return reply.send(await Promise.all(scenes.map(presentCampaignSceneWithSignedBackground)))
  })

  app.get('/api/campaigns/:campaignId/scenes/:sceneId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSceneIdParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Cena invalida' })

    const access = await getCampaignAccess(params.data.campaignId, payload.id)
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const canSeeScene = await sceneIsVisibleToAccess(params.data.campaignId, params.data.sceneId, access)
    if (!canSeeScene) return reply.status(403).send({ error: 'Cena nao disponivel para este usuario' })

    const scene = await prisma.campaignScene.findFirst({
      where: {
        id: params.data.sceneId,
        campaignId: params.data.campaignId,
      },
      include: sceneInclude,
    })

    if (!scene) return reply.status(404).send({ error: 'Cena nao encontrada' })

    return reply.send(await presentCampaignSceneWithSignedBackground(scene))
  })

  app.post('/api/campaigns/:campaignId/scenes', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSceneParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Campanha invalida' })

    const access = await getCampaignAccess(params.data.campaignId, payload.id)
    if (!isMaster(access)) return reply.status(403).send({ error: 'Apenas o mestre pode criar cenas' })

    const parsed = createCampaignSceneSchema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const assetAllowed = await ensureAssetBelongsToCampaign(params.data.campaignId, parsed.data.assetId)
    if (!assetAllowed) return reply.status(400).send({ error: 'Asset nao pertence a campanha' })

    const order =
      parsed.data.order ??
      ((await prisma.campaignScene.aggregate({
        where: { campaignId: params.data.campaignId },
        _max: { order: true },
      }))._max.order ?? 0) +
        1

    let scene
    try {
      scene = await prisma.campaignScene.create({
        data: {
          campaignId: params.data.campaignId,
          name: parsed.data.name,
          order,
          assetId: parsed.data.assetId ?? null,
          backgroundUrl: parsed.data.backgroundUrl ?? null,
          backgroundCacheKey: parsed.data.backgroundCacheKey ?? null,
          walls: parsed.data.walls ?? [],
          ...(parsed.data.grid ? gridToSceneData(parsed.data.grid) : {}),
        },
        include: sceneInclude,
      })
    } catch (err: any) {
      if (err?.code === 'P2002') return reply.status(409).send({ error: 'Ordem de cena ja utilizada nesta campanha' })
      throw err
    }

    await prisma.campaignSceneViewState.upsert({
      where: { campaignId: params.data.campaignId },
      create: {
        campaignId: params.data.campaignId,
        masterActiveSceneId: scene.id,
      },
      update: {},
    })

    return reply.status(201).send(await presentCampaignSceneWithSignedBackground(scene))
  })

  app.patch('/api/campaigns/:campaignId/scenes/:sceneId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSceneIdParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Cena invalida' })

    const access = await getCampaignAccess(params.data.campaignId, payload.id)
    if (!isMaster(access)) return reply.status(403).send({ error: 'Apenas o mestre pode editar cenas' })

    const parsed = updateCampaignSceneSchema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const existing = await prisma.campaignScene.findFirst({
      where: {
        id: params.data.sceneId,
        campaignId: params.data.campaignId,
      },
      select: { id: true },
    })
    if (!existing) return reply.status(404).send({ error: 'Cena nao encontrada' })

    const assetAllowed = await ensureAssetBelongsToCampaign(params.data.campaignId, parsed.data.assetId)
    if (!assetAllowed) return reply.status(400).send({ error: 'Asset nao pertence a campanha' })

    const data: Prisma.CampaignSceneUpdateInput = {
      ...(parsed.data.name !== undefined ? { name: parsed.data.name } : {}),
      ...(parsed.data.order !== undefined ? { order: parsed.data.order } : {}),
      ...(parsed.data.assetId !== undefined ? { asset: parsed.data.assetId ? { connect: { id: parsed.data.assetId } } : { disconnect: true } } : {}),
      ...(parsed.data.backgroundUrl !== undefined ? { backgroundUrl: parsed.data.backgroundUrl } : {}),
      ...(parsed.data.backgroundCacheKey !== undefined ? { backgroundCacheKey: parsed.data.backgroundCacheKey } : {}),
      ...(parsed.data.walls !== undefined ? { walls: parsed.data.walls } : {}),
      ...(parsed.data.grid ? gridToSceneData(parsed.data.grid) : {}),
    }

    let scene
    try {
      scene = await prisma.campaignScene.update({
        where: { id: params.data.sceneId },
        data,
        include: sceneInclude,
      })
    } catch (err: any) {
      if (err?.code === 'P2002') return reply.status(409).send({ error: 'Ordem de cena ja utilizada nesta campanha' })
      throw err
    }

    return reply.send(await presentCampaignSceneWithSignedBackground(scene))
  })

  app.delete('/api/campaigns/:campaignId/scenes/:sceneId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = campaignSceneIdParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Cena invalida' })

    const access = await getCampaignAccess(params.data.campaignId, payload.id)
    if (!isMaster(access)) return reply.status(403).send({ error: 'Apenas o mestre pode deletar cenas' })

    const scene = await prisma.campaignScene.findFirst({
      where: {
        id: params.data.sceneId,
        campaignId: params.data.campaignId,
      },
      select: {
        id: true,
      },
    })
    if (!scene) return reply.status(404).send({ error: 'Cena nao encontrada' })

    await deps.removeScenePlacementsFromLiveState(params.data.campaignId, scene.id)
    await prisma.campaignScene.delete({ where: { id: scene.id } })

    return reply.send({ ok: true })
  })
}
