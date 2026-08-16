import type { FastifyInstance } from 'fastify'
import type { Prisma } from '@prisma/client'
import type { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { generateInviteCode } from './invite-code'
import {
  reconcileLiveTokenPlacement,
  type LiveTokenPlacement,
} from './live-token-placement'
import { presentCampaignDashboardEntry } from './presenter'
import { normalizeTokenColor } from './token-appearance'
import {
  campaignUserSettingsSchema,
  mergeCampaignUserSettings,
  normalizeCampaignUserSettings,
} from './user-settings'

type CampaignRoutesDeps = {
  io: SocketIOServer
  isCampaignOnline: (campaignId: string) => boolean
  getCampaignSessionState: (campaignId: string) => 'ACTIVE' | 'PAUSED' | null
  removeCampaignTokenFromLiveState: (campaignId: string, tokenId: string) => void
  refreshCampaignTokenInLiveState: (campaignId: string, tokenId: string) => Promise<void>
  getCampaignTokenLivePlacement: (
    campaignId: string,
    tokenId: string,
  ) => LiveTokenPlacement | null | undefined
}

const campaignTokenAvatarUrlSchema = z.string().trim().max(2048).refine((value) => {
  if (value.startsWith('/tokens/')) {
    try {
      const relativePath = decodeURIComponent(value).slice('/tokens/'.length)
      return !relativePath.includes('\\') && relativePath.split('/').every((segment) => (
        segment.length > 0 && segment !== '.' && segment !== '..'
      ))
    } catch {
      return false
    }
  }

  return z.url().safeParse(value).success
}, 'Informe uma URL valida ou um asset local em /tokens/')

const campaignTokenCreateSchema = z.object({
  actorId: z.string().min(1).nullable().optional(),
  controllerUserId: z.string().min(1).nullable().optional(),
  name: z.string().trim().min(1).max(80).optional(),
  avatarUrl: campaignTokenAvatarUrlSchema.nullable().optional(),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/).nullable().optional(),
  size: z.number().positive().max(20).optional(),
  canCustomizeAppearance: z.boolean().optional(),
})

const campaignTokenUpdateSchema = campaignTokenCreateSchema.partial()

async function requireActiveMaster(campaignId: string, userId: string) {
  return prisma.campaignMember.findFirst({
    where: { campaignId, userId, role: 'MASTER', status: 'ACTIVE' },
    select: { id: true },
  })
}

async function findActivePlayerMember(campaignId: string, userId: string) {
  return prisma.campaignMember.findFirst({
    where: { campaignId, userId, role: 'PLAYER', status: 'ACTIVE' },
    select: { id: true, userId: true },
  })
}

function presentCampaignToken(token: {
  id: string
  campaignId: string
  actorId: string | null
  name: string
  avatarUrl: string | null
  color: string | null
  size: number
  canCustomizeAppearance: boolean
  visionConfig: unknown
  lightConfig: unknown
  createdAt: Date
  updatedAt: Date
  actor: {
    controllerMember: {
      id: string
      userId: string
      role: 'MASTER' | 'PLAYER'
      user: { email: string }
    } | null
  } | null
  controllerMember: { id: string; userId: string; user: { email: string } } | null
  placement: {
    sceneId: string
    hidden: boolean
    positionX: number
    positionY: number
    rotation: number
    layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
    blocksVisionAndLight: boolean
  } | null
}) {
  const effectiveController = token.actor?.controllerMember ?? token.controllerMember
  const category: 'PLAYER_CONTROLLED' | 'MASTER_ONLY' =
    effectiveController?.role === 'PLAYER' ? 'PLAYER_CONTROLLED' : 'MASTER_ONLY'

  return {
    id: token.id,
    campaignId: token.campaignId,
    actorId: token.actorId,
    name: token.name,
    avatarUrl: token.avatarUrl,
    color: token.color,
    size: token.size,
    canCustomizeAppearance: token.canCustomizeAppearance,
    visionConfig: token.visionConfig,
    lightConfig: token.lightConfig,
    controllerMemberId: effectiveController?.id ?? null,
    controllerUserId: effectiveController?.userId ?? null,
    controllerName: effectiveController?.user.email ?? null,
    actorOwnerUserId: effectiveController?.userId ?? null,
    category,
    placement: token.placement
      ? {
          sceneId: token.placement.sceneId,
          hidden: token.placement.hidden,
          position: { x: token.placement.positionX, y: token.placement.positionY },
          rotation: token.placement.rotation,
          layer: token.placement.layer,
          blocksVisionAndLight: token.placement.blocksVisionAndLight,
        }
      : null,
    createdAt: token.createdAt,
    updatedAt: token.updatedAt,
  }
}

const campaignTokenInclude = {
  actor: {
    select: {
      controllerMember: {
        select: { id: true, userId: true, role: true, user: { select: { email: true } } },
      },
    },
  },
  controllerMember: {
    select: { id: true, userId: true, role: true, user: { select: { email: true } } },
  },
  placement: {
    select: {
      sceneId: true,
      hidden: true,
      positionX: true,
      positionY: true,
      rotation: true,
      layer: true,
      blocksVisionAndLight: true,
    },
  },
} as const

export function registerCampaignRoutes(app: FastifyInstance, deps: CampaignRoutesDeps) {
  const {
    io,
    isCampaignOnline,
    getCampaignSessionState,
    removeCampaignTokenFromLiveState,
    refreshCampaignTokenInLiveState,
    getCampaignTokenLivePlacement,
  } = deps

  app.get('/api/campaigns', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const campaignMembers = await prisma.campaignMember.findMany({
      where: { userId: payload.id },
      select: {
        role: true,
        status: true,
        campaign: {
          select: {
            id: true,
            title: true,
            description: true,
            inviteCode: true,
            joinPolicy: true,
            createdAt: true,
            members: {
              where: { role: 'MASTER', status: 'ACTIVE' },
              select: {
                userId: true,
                user: { select: { email: true } },
              },
              take: 1,
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return reply.send(
      campaignMembers.map((entry) =>
        presentCampaignDashboardEntry(entry, {
          isOnline: isCampaignOnline(entry.campaign.id),
          sessionState: getCampaignSessionState(entry.campaign.id),
        }),
      ),
    )
  })

  app.get('/api/campaigns/invite/:inviteCode', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const paramsSchema = z.object({ inviteCode: z.string().trim().min(1) })
    const params = paramsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Codigo de convite invalido' })

    const campaign = await prisma.campaign.findUnique({
      where: { inviteCode: params.data.inviteCode.toUpperCase() },
      select: {
        id: true,
        title: true,
        description: true,
        inviteCode: true,
        joinPolicy: true,
        createdAt: true,
        members: {
          where: { role: 'MASTER', status: 'ACTIVE' },
          select: { userId: true, user: { select: { email: true } } },
          take: 1,
        },
      },
    })

    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const master = campaign.members[0] ?? null
    return reply.send({
      id: campaign.id,
      title: campaign.title,
      description: campaign.description,
      inviteCode: campaign.inviteCode,
      joinPolicy: campaign.joinPolicy,
      createdAt: campaign.createdAt,
      gmName: master?.user.email ?? 'Mestre',
      gmUserId: master?.userId ?? '',
      isOnline: isCampaignOnline(campaign.id),
    })
  })

  app.post('/api/campaigns', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const schema = z.object({
      title: z.string().trim().min(1, 'Titulo e obrigatorio'),
      description: z.string().optional(),
      joinPolicy: z.enum(['PUBLIC', 'PRIVATE']).default('PUBLIC'),
      gameSystem: z.enum(['PATHFINDER_2E']),
    })

    const parsed = schema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const inviteCode = await generateInviteCode()
    const result = await prisma.$transaction(async (tx) => {
      const campaign = await tx.campaign.create({
        data: {
          title: parsed.data.title,
          description: parsed.data.description?.trim() || null,
          inviteCode,
          joinPolicy: parsed.data.joinPolicy,
          gameSystem: parsed.data.gameSystem,
          createdByUserId: payload.id,
        },
        select: {
          id: true,
          title: true,
          description: true,
          inviteCode: true,
          joinPolicy: true,
          gameSystem: true,
          createdAt: true,
        },
      })

      await tx.campaignMember.create({
        data: {
          campaignId: campaign.id,
          userId: payload.id,
          role: 'MASTER',
          status: 'ACTIVE',
          joinedAt: new Date(),
        },
      })

      return campaign
    })

    return reply.status(201).send({
      ...result,
      gmName: payload.email,
      gmUserId: payload.id,
      myRole: 'MASTER',
      isOnline: false,
    })
  })

  app.post('/api/campaigns/join', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const schema = z.object({
      inviteCode: z.string().trim().min(1),
    })
    const parsed = schema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const inviteCode = parsed.data.inviteCode.toUpperCase()

    try {
      const result = await prisma.$transaction(async (tx) => {
        const campaign = await tx.campaign.findUnique({
          where: { inviteCode },
          select: {
            id: true,
            title: true,
            description: true,
            inviteCode: true,
            joinPolicy: true,
            createdAt: true,
            members: {
              where: { role: 'MASTER', status: 'ACTIVE' },
              select: { userId: true, user: { select: { email: true } } },
              take: 1,
            },
          },
        })
        if (!campaign) throw Object.assign(new Error('CAMPAIGN_NOT_FOUND'), { statusCode: 404 })

        const existingMember = await tx.campaignMember.findUnique({
          where: { campaignId_userId: { campaignId: campaign.id, userId: payload.id } },
          select: { id: true, status: true },
        })
        if (existingMember && ['ACTIVE', 'PENDING'].includes(existingMember.status)) {
          throw Object.assign(new Error('USER_ALREADY_IN_CAMPAIGN'), { statusCode: 409 })
        }

        const status = campaign.joinPolicy === 'PUBLIC' ? 'ACTIVE' : 'PENDING'
        existingMember
          ? await tx.campaignMember.update({
              where: { id: existingMember.id },
              data: {
                role: 'PLAYER',
                status,
                joinedAt: status === 'ACTIVE' ? new Date() : null,
                leftAt: null,
              },
              select: { id: true },
            })
          : await tx.campaignMember.create({
              data: {
                campaignId: campaign.id,
                userId: payload.id,
                role: 'PLAYER',
                status,
                joinedAt: status === 'ACTIVE' ? new Date() : null,
              },
              select: { id: true },
            })

        return { campaign, status }
      })

      const master = result.campaign.members[0] ?? null
      if (master?.userId) {
        io.to(`user:${master.userId}`).emit(
          result.status === 'PENDING' ? 'campaign:join-requested' : 'campaign:player-joined',
          {
            campaignId: result.campaign.id,
            userId: payload.id,
            email: payload.email,
            memberName: payload.email,
            createdAt: new Date().toISOString(),
          },
        )
      }

      return reply.send({
        id: result.campaign.id,
        title: result.campaign.title,
        description: result.campaign.description,
        inviteCode: null,
        joinPolicy: result.campaign.joinPolicy,
        createdAt: result.campaign.createdAt,
        gmName: master?.user.email ?? 'Mestre',
        gmUserId: master?.userId ?? '',
        myRole: 'PLAYER',
        myStatus: result.status,
        status: result.status,
      })
    } catch (err: unknown) {
      const error = err as { statusCode?: number; message?: string }
      const status = Number(error.statusCode ?? 500)
      if (status === 404) return reply.status(404).send({ error: 'Campanha nao encontrada' })
      if (status === 409 && error.message === 'USER_ALREADY_IN_CAMPAIGN') {
        return reply.status(409).send({ error: 'Voce ja participa ou aguarda aprovacao nesta campanha' })
      }
      req.log.error({ err }, 'Erro ao entrar na campanha')
      return reply.status(500).send({ error: 'Erro ao entrar na campanha' })
    }
  })

  app.get('/api/campaigns/:campaignId/my-settings', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = req.params as { campaignId: string }
    const access = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        userId: payload.id,
        status: 'ACTIVE',
      },
      select: { id: true },
    })
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const settings = await prisma.campaignUserSettings.findUnique({
      where: {
        campaignId_userId: {
          campaignId: params.campaignId,
          userId: payload.id,
        },
      },
      select: { settings: true },
    })

    return reply.send({
      settings: normalizeCampaignUserSettings(settings?.settings),
    })
  })

  app.patch('/api/campaigns/:campaignId/my-settings', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = req.params as { campaignId: string }
    const bodySchema = z.object({
      settings: campaignUserSettingsSchema,
    })
    const parsed = bodySchema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const access = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        userId: payload.id,
        status: 'ACTIVE',
      },
      select: { id: true },
    })
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const current = await prisma.campaignUserSettings.findUnique({
      where: {
        campaignId_userId: {
          campaignId: params.campaignId,
          userId: payload.id,
        },
      },
      select: { settings: true },
    })
    const settings = mergeCampaignUserSettings(current?.settings, parsed.data.settings)

    const updated = await prisma.campaignUserSettings.upsert({
      where: {
        campaignId_userId: {
          campaignId: params.campaignId,
          userId: payload.id,
        },
      },
      create: {
        campaignId: params.campaignId,
        userId: payload.id,
        settings: settings as Prisma.InputJsonValue,
      },
      update: {
        settings: settings as Prisma.InputJsonValue,
      },
      select: { settings: true },
    })

    return reply.send({
      settings: normalizeCampaignUserSettings(updated.settings),
    })
  })

  app.patch('/api/campaigns/:campaignId/settings', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = req.params as { campaignId: string }
    const schema = z.object({
      joinPolicy: z.enum(['PUBLIC', 'PRIVATE']),
    })
    const parsed = schema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const master = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'MASTER',
        status: 'ACTIVE',
        userId: payload.id,
      },
      select: { id: true },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode alterar' })

    const updated = await prisma.campaign.update({
      where: { id: params.campaignId },
      data: { joinPolicy: parsed.data.joinPolicy },
      select: { id: true, joinPolicy: true },
    })

    return reply.send(updated)
  })

  app.get('/api/campaigns/:campaignId/players', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string }

    const access = await prisma.campaignMember.findFirst({
      where: { campaignId: params.campaignId, status: 'ACTIVE', userId: payload.id },
      select: { role: true },
    })
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const entries = await prisma.campaignMember.findMany({
      where: {
        campaignId: params.campaignId,
        ...(access.role === 'MASTER' ? {} : { status: 'ACTIVE' as const }),
      },
      select: {
        userId: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        user: { select: { email: true } },
        controlledActors: { select: { id: true, name: true }, orderBy: { name: 'asc' } },
      },
      orderBy: { createdAt: 'asc' },
    })

    return reply.send(
      entries.map((entry) => ({
        userId: entry.userId,
        email: entry.user.email,
        role: entry.role,
        status: entry.status,
        actors: entry.controlledActors,
        actorName: entry.controlledActors.map((actor) => actor.name).join(', ') || 'Sem atores',
        createdAt: entry.createdAt,
        decidedAt: entry.status === 'PENDING' ? null : entry.updatedAt,
      })),
    )
  })

  app.get('/api/campaigns/:campaignId/tokens', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string }

    if (!(await requireActiveMaster(params.campaignId, payload.id))) {
      return reply.status(403).send({ error: 'Apenas o mestre pode gerenciar tokens' })
    }

    const tokens = await prisma.campaignToken.findMany({
      where: { campaignId: params.campaignId },
      include: campaignTokenInclude,
      orderBy: { createdAt: 'asc' },
    })

    const categoryOrder = { PLAYER_CONTROLLED: 0, MASTER_ONLY: 1 } as const
    return reply.send(
      tokens
        .map((token) => {
          const presented = presentCampaignToken(token)
          return reconcileLiveTokenPlacement(
            presented,
            getCampaignTokenLivePlacement(params.campaignId, token.id),
          )
        })
        .sort((left, right) => categoryOrder[left.category] - categoryOrder[right.category]),
    )
  })

  app.post('/api/campaigns/:campaignId/tokens', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string }
    const parsed = campaignTokenCreateSchema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    if (!(await requireActiveMaster(params.campaignId, payload.id))) {
      return reply.status(403).send({ error: 'Apenas o mestre pode criar tokens' })
    }

    const actor = parsed.data.actorId
      ? await prisma.campaignActor.findFirst({
          where: { id: parsed.data.actorId, campaignId: params.campaignId },
          select: {
            id: true,
            name: true,
            avatarUrl: true,
            controllerMember: { select: { id: true, userId: true } },
          },
        })
      : null
    if (parsed.data.actorId && !actor) {
      return reply.status(400).send({ error: 'Actor nao pertence a esta campanha' })
    }

    const automaticControllerUserId = actor?.controllerMember?.userId ?? null
    const controllerUserId = parsed.data.controllerUserId ?? automaticControllerUserId
    const controller = controllerUserId
      ? await findActivePlayerMember(params.campaignId, controllerUserId)
      : null
    if (controllerUserId && !controller) {
      return reply.status(400).send({ error: 'Controlador nao participa desta campanha' })
    }

    try {
      const avatarUrl = parsed.data.avatarUrl !== undefined ? parsed.data.avatarUrl : actor?.avatarUrl ?? null
      const token = await prisma.$transaction(async (tx) => {
        if (actor && parsed.data.controllerUserId !== undefined) {
          await tx.campaignActor.update({
            where: { id: actor.id },
            data: { controllerMemberId: controller?.id ?? null },
          })
        }

        return tx.campaignToken.create({
          data: {
            campaignId: params.campaignId,
            actorId: actor?.id ?? null,
            controllerMemberId: actor ? null : controller?.id ?? null,
            name: parsed.data.name ?? actor?.name ?? 'Novo Token',
            avatarUrl,
            color: normalizeTokenColor({
              nextAvatarUrl: avatarUrl,
              requestedColor: parsed.data.color,
            }),
            size: parsed.data.size ?? 1,
            canCustomizeAppearance: parsed.data.canCustomizeAppearance ?? false,
          },
          include: campaignTokenInclude,
        })
      })
      return reply.status(201).send(presentCampaignToken(token))
    } catch (err: unknown) {
      const error = err as { code?: string }
      if (error.code === 'P2002') return reply.status(409).send({ error: 'Actor ja esta vinculado a outro Token' })
      throw err
    }
  })

  app.patch('/api/campaigns/:campaignId/tokens/:tokenId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string; tokenId: string }
    const parsed = campaignTokenUpdateSchema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })

    const current = await prisma.campaignToken.findFirst({
      where: { id: params.tokenId, campaignId: params.campaignId },
      include: campaignTokenInclude,
    })
    if (!current) return reply.status(404).send({ error: 'Token nao encontrado' })

    const isMaster = Boolean(await requireActiveMaster(params.campaignId, payload.id))
    const changedKeys = Object.keys(parsed.data)
    const appearanceOnly = changedKeys.every((key) => (
      key === 'name' || key === 'avatarUrl' || key === 'color'
    ))
    const canPlayerCustomize =
      appearanceOnly &&
      current.canCustomizeAppearance &&
      (current.actor?.controllerMember?.userId ?? current.controllerMember?.userId) === payload.id
    if (!isMaster && !canPlayerCustomize) {
      return reply.status(403).send({ error: 'Sem permissao para alterar este Token' })
    }

    let actor: {
      id: string
      controllerMember: { id: string; userId: string } | null
    } | null = null
    if (isMaster && parsed.data.actorId) {
      actor = await prisma.campaignActor.findFirst({
        where: { id: parsed.data.actorId, campaignId: params.campaignId },
        select: {
          id: true,
          controllerMember: { select: { id: true, userId: true } },
        },
      })
      if (!actor) return reply.status(400).send({ error: 'Actor nao pertence a esta campanha' })
    }

    const nextActor = parsed.data.actorId === undefined
      ? current.actor
      : actor
    let requestedControllerMemberId: string | null | undefined
    const automaticControllerUserId =
      isMaster && parsed.data.actorId !== undefined
        ? actor?.controllerMember?.userId
        : undefined
    const requestedControllerUserId =
      parsed.data.controllerUserId !== undefined ? parsed.data.controllerUserId : automaticControllerUserId
    if (isMaster && requestedControllerUserId !== undefined) {
      if (requestedControllerUserId === null) requestedControllerMemberId = null
      else {
        const member = await findActivePlayerMember(params.campaignId, requestedControllerUserId)
        if (!member) return reply.status(400).send({ error: 'Controlador nao participa desta campanha' })
        requestedControllerMemberId = member.id
      }
    }

    try {
      const nextAvatarUrl = parsed.data.avatarUrl !== undefined ? parsed.data.avatarUrl : current.avatarUrl
      const nextColor = normalizeTokenColor({
        nextAvatarUrl,
        requestedColor: parsed.data.color,
        currentColor: current.color,
        avatarChanged: parsed.data.avatarUrl !== undefined,
      })
      const token = await prisma.$transaction(async (tx) => {
        if (nextActor && requestedControllerMemberId !== undefined) {
          await tx.campaignActor.update({
            where: { id: nextActor.id },
            data: { controllerMemberId: requestedControllerMemberId },
          })
        }

        const directControllerMemberId = nextActor
          ? null
          : requestedControllerMemberId !== undefined
            ? requestedControllerMemberId
            : current.actor?.controllerMember?.id ?? current.controllerMember?.id ?? null

        return tx.campaignToken.update({
          where: { id: current.id },
          data: {
            ...(isMaster && parsed.data.actorId !== undefined ? { actorId: parsed.data.actorId } : {}),
            ...(isMaster && (parsed.data.actorId !== undefined || requestedControllerMemberId !== undefined)
              ? { controllerMemberId: directControllerMemberId }
              : {}),
            ...(parsed.data.name !== undefined ? { name: parsed.data.name } : {}),
            ...(parsed.data.avatarUrl !== undefined ? { avatarUrl: parsed.data.avatarUrl } : {}),
            ...((parsed.data.avatarUrl !== undefined || parsed.data.color !== undefined) ? { color: nextColor } : {}),
            ...(isMaster && parsed.data.size !== undefined ? { size: parsed.data.size } : {}),
            ...(isMaster && parsed.data.canCustomizeAppearance !== undefined
              ? { canCustomizeAppearance: parsed.data.canCustomizeAppearance }
              : {}),
          },
          include: campaignTokenInclude,
        })
      })
      await refreshCampaignTokenInLiveState(params.campaignId, token.id)
      const presented = reconcileLiveTokenPlacement(
        presentCampaignToken(token),
        getCampaignTokenLivePlacement(params.campaignId, token.id),
      )
      io.to(`campaign:${params.campaignId}`).emit('vtt:token:metadata-changed', {
        campaignId: params.campaignId,
        token: presented,
        previousControllerUserId:
          current.actor?.controllerMember?.userId ?? current.controllerMember?.userId ?? null,
      })
      return reply.send(presented)
    } catch (err: unknown) {
      const error = err as { code?: string }
      if (error.code === 'P2002') return reply.status(409).send({ error: 'Actor ja esta vinculado a outro Token' })
      throw err
    }
  })

  app.delete('/api/campaigns/:campaignId/tokens/:tokenId', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string; tokenId: string }

    if (!(await requireActiveMaster(params.campaignId, payload.id))) {
      return reply.status(403).send({ error: 'Apenas o mestre pode excluir tokens' })
    }

    const token = await prisma.campaignToken.findFirst({
      where: { id: params.tokenId, campaignId: params.campaignId },
      select: { id: true },
    })
    if (!token) return reply.status(404).send({ error: 'Token nao encontrado' })

    removeCampaignTokenFromLiveState(params.campaignId, token.id)
    await prisma.campaignToken.delete({ where: { id: token.id } })
    io.to(`campaign:${params.campaignId}`).emit('vtt:token:deleted', {
      campaignId: params.campaignId,
      tokenId: token.id,
    })
    return reply.send({ ok: true })
  })

  app.post('/api/campaigns/:campaignId/players/:userId/approve', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string; userId: string }

    const master = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'MASTER',
        status: 'ACTIVE',
        userId: payload.id,
      },
      select: { id: true },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode aprovar' })

    const target = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'PLAYER',
        userId: params.userId,
      },
      select: { id: true, userId: true },
    })
    if (!target) return reply.status(404).send({ error: 'Solicitacao nao encontrada' })

    const existingActive = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        userId: target.userId,
        role: 'PLAYER',
        status: 'ACTIVE',
        NOT: { id: target.id },
      },
      select: { id: true },
    })
    if (existingActive) {
      return reply.status(409).send({ error: 'Usuario ja possui participacao ativa nesta campanha' })
    }

    const updated = await prisma.campaignMember.update({
      where: { id: target.id },
      data: { status: 'ACTIVE', joinedAt: new Date() },
      select: { campaignId: true, userId: true },
    })

    io.to(`user:${updated.userId}`).emit('campaign:join-approved', {
      campaignId: updated.campaignId,
      message: 'Sua solicitacao foi aprovada',
    })

    return reply.send({ ok: true })
  })

  app.post('/api/campaigns/:campaignId/players/:userId/reject', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string; userId: string }

    const master = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'MASTER',
        status: 'ACTIVE',
        userId: payload.id,
      },
      select: { id: true },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode recusar' })

    const target = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'PLAYER',
        userId: params.userId,
      },
      select: { id: true },
    })
    if (!target) return reply.status(404).send({ error: 'Solicitacao nao encontrada' })

    const updated = await prisma.campaignMember.update({
      where: { id: target.id },
      data: { status: 'REJECTED' },
      select: { campaignId: true, userId: true },
    })

    io.to(`user:${updated.userId}`).emit('campaign:join-rejected', {
      campaignId: updated.campaignId,
      message: 'Sua solicitacao foi recusada',
    })

    return reply.send({ ok: true })
  })
}
