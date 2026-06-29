import multipart from '@fastify/multipart'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { env } from '../../config/env'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { optimizeAssetBuffer } from './optimizer'
import { assetService, extensionForAssetMimeType } from './service'

const paramsSchema = z.object({
  assetId: z.string().min(1),
})

const uploadQuerySchema = z.object({
  campaignId: z.string().min(1).optional(),
})

const assetExistsQuerySchema = z.object({
  campaignId: z.string().min(1),
  filename: z.string().min(1),
  mimeType: z.string().min(1),
})

const sceneImageMimeTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif'])

async function ensureCampaignMaster(campaignId: string, userId: string) {
  return prisma.campaignCharacter.findFirst({
    where: {
      campaignId,
      userId,
      role: 'MASTER',
      status: 'ACTIVE',
    },
    select: { id: true },
  })
}

export async function registerAssetRoutes(app: FastifyInstance) {
  await app.register(multipart, {
    limits: {
      files: 1,
      fileSize: env.ASSET_MAX_UPLOAD_BYTES,
    },
  })

  app.get('/api/assets', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const query = uploadQuerySchema.safeParse(req.query ?? {})
    if (!query.success) return reply.status(400).send({ error: 'Parametros de consulta invalidos' })
    if (!query.data.campaignId) return reply.status(400).send({ error: 'campaignId e obrigatorio' })

    const master = await ensureCampaignMaster(query.data.campaignId, payload.id)
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode listar cenas da campanha' })

    const assets = await prisma.asset.findMany({
      where: {
        userId: payload.id,
        campaignAssets: {
          some: { campaignId: query.data.campaignId },
        },
      },
      select: {
        id: true,
        storagePath: true,
        originalName: true,
        mimeType: true,
        size: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'asc' },
    })

    return reply.send(
      await Promise.all(
        assets.map(async (asset) => ({
          ...asset,
          signedUrl: await assetService.getSignedUrl(asset.storagePath),
        })),
      ),
    )
  })

  app.post('/api/assets', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const query = uploadQuerySchema.safeParse(req.query ?? {})
    if (!query.success) return reply.status(400).send({ error: 'Parametros de upload invalidos' })

    if (query.data.campaignId) {
      const master = await ensureCampaignMaster(query.data.campaignId, payload.id)
      if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode salvar cenas da campanha' })
    }

    let file
    try {
      file = await req.file()
    } catch (err: any) {
      if (err?.code === 'FST_REQ_FILE_TOO_LARGE') {
        return reply.status(413).send({
          error: 'Arquivo excede o tamanho maximo permitido',
          maxUploadBytes: env.ASSET_MAX_UPLOAD_BYTES,
        })
      }

      throw err
    }

    if (!file) return reply.status(400).send({ error: 'Arquivo obrigatorio' })

    if (query.data.campaignId && !sceneImageMimeTypes.has(file.mimetype)) {
      return reply.status(415).send({
        error: 'Formato de imagem nao suportado',
        acceptedMimeTypes: Array.from(sceneImageMimeTypes),
      })
    }

    let buffer
    try {
      buffer = await file.toBuffer()
    } catch (err: any) {
      if (err?.code === 'FST_REQ_FILE_TOO_LARGE') {
        return reply.status(413).send({
          error: 'Arquivo excede o tamanho maximo permitido',
          maxUploadBytes: env.ASSET_MAX_UPLOAD_BYTES,
        })
      }

      throw err
    }

    if (buffer.byteLength > env.ASSET_MAX_UPLOAD_BYTES) {
      return reply.status(413).send({
        error: 'Arquivo excede o tamanho maximo permitido',
        maxUploadBytes: env.ASSET_MAX_UPLOAD_BYTES,
      })
    }

    const optimizedAsset = await optimizeAssetBuffer(buffer, file.mimetype)
    const storagePath = assetService.buildStoragePath(payload.id, file.filename, optimizedAsset.extension, query.data.campaignId)
    const existingAsset = query.data.campaignId
      ? await prisma.asset.findFirst({
          where: {
            userId: payload.id,
            storagePath,
          },
          select: {
            id: true,
            userId: true,
            storagePath: true,
            originalName: true,
            mimeType: true,
            size: true,
            createdAt: true,
            campaignAssets: {
              where: { campaignId: query.data.campaignId },
              select: { id: true },
            },
          },
        })
      : null

    if (existingAsset) {
      if (query.data.campaignId && existingAsset.campaignAssets.length === 0) {
        await prisma.campaignAsset.create({
          data: {
            campaignId: query.data.campaignId,
            assetId: existingAsset.id,
          },
        })
      }

      const signedUrl = await assetService.getSignedUrl(existingAsset.storagePath)
      const { campaignAssets: _campaignAssets, ...asset } = existingAsset
      return reply.send({
        ...asset,
        signedUrl,
        originalSize: buffer.byteLength,
        storedSize: asset.size,
        optimized: false,
        duplicate: true,
      })
    }

    const currentStorage = await prisma.asset.aggregate({
      where: { userId: payload.id },
      _sum: { size: true },
    })
    const usedStorageBytes = currentStorage._sum.size ?? 0
    const nextStorageBytes = usedStorageBytes + optimizedAsset.buffer.byteLength
    if (nextStorageBytes > env.ASSET_USER_STORAGE_LIMIT_BYTES) {
      return reply.status(413).send({
        error: 'Quota de storage de assets excedida',
        usedStorageBytes,
        requestedStorageBytes: optimizedAsset.buffer.byteLength,
        storageLimitBytes: env.ASSET_USER_STORAGE_LIMIT_BYTES,
      })
    }

    const uploaded = await assetService.upload({
      userId: payload.id,
      campaignId: query.data.campaignId,
      filename: file.filename,
      mimeType: optimizedAsset.mimeType,
      buffer: optimizedAsset.buffer,
      extension: optimizedAsset.extension,
    })

    let asset
    try {
      asset = await prisma.asset.create({
        data: {
          userId: payload.id,
          storagePath: uploaded.storagePath,
          originalName: file.filename,
          mimeType: optimizedAsset.mimeType,
          size: optimizedAsset.buffer.byteLength,
          ...(query.data.campaignId
            ? {
                campaignAssets: {
                  create: {
                    campaignId: query.data.campaignId,
                  },
                },
              }
            : {}),
        },
        select: {
          id: true,
          userId: true,
          storagePath: true,
          originalName: true,
          mimeType: true,
          size: true,
          createdAt: true,
        },
      })
    } catch (err) {
      await assetService.delete(uploaded.storagePath).catch(() => {})
      throw err
    }

    const signedUrl = await assetService.getSignedUrl(asset.storagePath)
    return reply.status(201).send({
      ...asset,
      signedUrl,
      originalSize: buffer.byteLength,
      storedSize: optimizedAsset.buffer.byteLength,
      optimized: optimizedAsset.optimized,
      usedStorageBytes: nextStorageBytes,
      storageLimitBytes: env.ASSET_USER_STORAGE_LIMIT_BYTES,
    })
  })

  app.get('/api/assets/exists', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const query = assetExistsQuerySchema.safeParse(req.query ?? {})
    if (!query.success) return reply.status(400).send({ error: 'Parametros de consulta invalidos' })

    if (!sceneImageMimeTypes.has(query.data.mimeType)) {
      return reply.status(415).send({
        error: 'Formato de imagem nao suportado',
        acceptedMimeTypes: Array.from(sceneImageMimeTypes),
      })
    }

    const master = await ensureCampaignMaster(query.data.campaignId, payload.id)
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode consultar cenas da campanha' })

    const storagePath = assetService.buildStoragePath(
      payload.id,
      query.data.filename,
      extensionForAssetMimeType(query.data.mimeType),
      query.data.campaignId,
    )

    const asset = await prisma.asset.findFirst({
      where: {
        userId: payload.id,
        storagePath,
      },
      select: {
        id: true,
        storagePath: true,
        originalName: true,
        mimeType: true,
        size: true,
        createdAt: true,
      },
    })

    return reply.send({
      exists: Boolean(asset),
      asset,
      storagePath,
    })
  })

  app.get('/api/assets/:assetId/url', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Asset invalido' })

    const asset = await prisma.asset.findFirst({
      where: { id: params.data.assetId, userId: payload.id },
      select: { storagePath: true },
    })

    if (!asset) return reply.status(404).send({ error: 'Asset nao encontrado' })

    const signedUrl = await assetService.getSignedUrl(asset.storagePath)
    return reply.send({ signedUrl })
  })

  app.delete('/api/assets/:assetId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Asset invalido' })

    const query = z.object({ force: z.coerce.boolean().default(false) }).safeParse(req.query ?? {})
    if (!query.success) return reply.status(400).send({ error: 'Parametro force invalido' })

    const asset = await prisma.asset.findFirst({
      where: { id: params.data.assetId, userId: payload.id },
      select: {
        id: true,
        storagePath: true,
        campaignAssets: { select: { id: true } },
      },
    })

    if (!asset) return reply.status(404).send({ error: 'Asset nao encontrado' })

    const linkedCampaignAssetCount = asset.campaignAssets.length
    if (linkedCampaignAssetCount > 0 && !query.data.force) {
      return reply.status(409).send({
        error: 'Asset vinculado a campanha',
        warning: 'A delecao com force=true remove tambem os vinculos CampaignAsset por cascade.',
        linkedCampaignAssetCount,
      })
    }

    await assetService.delete(asset.storagePath)
    await prisma.asset.delete({ where: { id: asset.id } })

    return reply.send({ ok: true })
  })
}
