import type { FastifyInstance } from 'fastify'
import type { Prisma } from '@prisma/client'
import type { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { generateInviteCode } from './invite-code'
import { presentCampaignDashboardEntry } from './presenter'
import { normalizeTokenColor } from './token-appearance'

type CampaignRoutesDeps = {
  io: SocketIOServer
  isCampaignOnline: (campaignId: string) => boolean
  getCampaignSessionState: (campaignId: string) => 'ACTIVE' | 'PAUSED' | null
  removeCampaignTokenFromLiveState: (campaignId: string, tokenId: string) => void
  refreshCampaignTokenInLiveState: (campaignId: string, tokenId: string) => Promise<void>
}

const defaultCampaignUserSettings = {
  dice: {
    autoClear: 3 as number | 'manual',
    showResultPopup: true,
  },
}

const campaignUserSettingsSchema = z
  .object({
    dice: z
      .object({
        autoClear: z.union([z.literal('manual'), z.number().int().min(3).max(10)]).optional(),
        showResultPopup: z.boolean().optional(),
      })
      .optional(),
  })
  .passthrough()

type CampaignUserSettingsPayload = z.infer<typeof campaignUserSettingsSchema>

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

function normalizeCampaignUserSettings(value: unknown): CampaignUserSettingsPayload {
  const parsed = campaignUserSettingsSchema.safeParse(value)
  const settings = parsed.success ? parsed.data : {}
  const dice = settings.dice ?? {}

  return {
    ...settings,
    dice: {
      autoClear: dice.autoClear ?? defaultCampaignUserSettings.dice.autoClear,
      showResultPopup: dice.showResultPopup ?? defaultCampaignUserSettings.dice.showResultPopup,
    },
  }
}

function mergeCampaignUserSettings(current: unknown, next: unknown): CampaignUserSettingsPayload {
  const currentSettings = normalizeCampaignUserSettings(current)
  const nextRecord = isRecord(next) ? next : {}
  const nextDice = isRecord(nextRecord.dice) ? nextRecord.dice : {}
  const merged = {
    ...currentSettings,
    ...nextRecord,
    dice: {
      ...currentSettings.dice,
      ...nextDice,
    },
  }

  return normalizeCampaignUserSettings(merged)
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
    where: {
      campaignId,
      userId,
      user: {
        campaignMembers: {
          some: { campaignId, userId, role: 'PLAYER', status: 'ACTIVE' },
        },
      },
    },
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
  actor: { userId: string; campaigns: Array<{ role: 'MASTER' | 'PLAYER' }> } | null
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
  const actorRole = token.actor?.campaigns[0]?.role
  const category: 'MAIN' | 'SECONDARY' | 'MASTER_ONLY' =
    actorRole === 'PLAYER' ? 'MAIN' : token.controllerMember ? 'SECONDARY' : 'MASTER_ONLY'

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
    controllerMemberId: token.controllerMember?.id ?? null,
    controllerUserId: token.controllerMember?.userId ?? null,
    controllerName: token.controllerMember?.user.email ?? null,
    actorOwnerUserId: token.actor?.userId ?? null,
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
      userId: true,
      campaigns: { select: { role: true } },
    },
  },
  controllerMember: {
    select: { id: true, userId: true, user: { select: { email: true } } },
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
  } = deps

  app.get('/api/campaigns', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const campaignMembers = await prisma.campaignMember.findMany({
      where: {
        actor: { userId: payload.id },
      },
      select: {
        role: true,
        status: true,
        actor: { select: { id: true, name: true } },
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
              select: { actor: { select: { id: true, userId: true, name: true } } },
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

    const paramsSchema = z.object({
      inviteCode: z.string().trim().min(1),
    })
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
          select: { actor: { select: { userId: true, name: true } } },
          take: 1,
        },
      },
    })

    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const master = campaign.actors[0]?.actor ?? null
    return reply.send({
      id: campaign.id,
      title: campaign.title,
      description: campaign.description,
      inviteCode: campaign.inviteCode,
      joinPolicy: campaign.joinPolicy,
      createdAt: campaign.createdAt,
      gmName: master?.name ?? 'Mestre',
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
      masterActorId: z.string().optional(),
      masterActorName: z.string().trim().min(1).max(80).optional(),
    })

    const parsed = schema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })
    if (!parsed.data.masterActorId && !parsed.data.masterActorName) {
      return reply.status(400).send({ error: 'Selecione ou crie um personagem mestre' })
    }

    const inviteCode = await generateInviteCode()

    try {
      const result = await prisma.$transaction(async (tx) => {
        let masterActor = parsed.data.masterActorId
          ? await tx.campaignActor.findUnique({
              where: { id: parsed.data.masterActorId },
              select: {
                id: true,
                userId: true,
                name: true,
                deletedAt: true,
                campaigns: { select: { id: true } },
              },
            })
          : null

        if (masterActor && masterActor.userId !== payload.id) throw new Error('CHARACTER_FORBIDDEN')
        if (masterActor && masterActor.deletedAt) throw new Error('CHARACTER_ARCHIVED')
        if (masterActor && masterActor.campaigns.length > 0) throw new Error('CHARACTER_ALREADY_LINKED')
        if (!masterActor) {
          masterActor = await tx.campaignActor.create({
            data: {
              userId: payload.id,
              name: parsed.data.masterActorName ?? 'Mestre',
            },
            select: {
              id: true,
              userId: true,
              name: true,
              deletedAt: true,
              campaigns: { select: { id: true } },
            },
          })
        }

        const campaign = await tx.campaign.create({
          data: {
            title: parsed.data.title,
            description: parsed.data.description?.trim() || null,
            inviteCode,
            joinPolicy: parsed.data.joinPolicy,
            createdByUserId: payload.id,
          },
          select: {
            id: true,
            title: true,
            description: true,
            inviteCode: true,
            joinPolicy: true,
            createdAt: true,
          },
        })

        await tx.campaignMember.create({
          data: {
            campaignId: campaign.id,
            actorId: masterActor.id,
            userId: payload.id,
            role: 'MASTER',
            status: 'ACTIVE',
            joinedAt: new Date(),
          },
        })

        await tx.campaignMember.create({
          data: { campaignId: campaign.id, userId: payload.id },
        })

        return { campaign, masterActor }
      })

      return reply.status(201).send({
        ...result.campaign,
        gmName: result.masterActor.name,
        gmUserId: payload.id,
        myRole: 'MASTER',
        myActorId: result.masterActor.id,
        myActorName: result.masterActor.name,
        isOnline: false,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : ''
      if (message === 'CHARACTER_FORBIDDEN') return reply.status(403).send({ error: 'Personagem nao pertence ao usuario' })
      if (message === 'CHARACTER_ARCHIVED') return reply.status(400).send({ error: 'Personagem arquivado' })
      if (message === 'CHARACTER_ALREADY_LINKED') return reply.status(409).send({ error: 'Personagem ja esta vinculado' })
      throw err
    }
  })

  app.post('/api/campaigns/join', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const schema = z.object({
      inviteCode: z.string().trim().min(1),
      actorId: z.string().optional(),
      actorName: z.string().trim().min(1).max(80).optional(),
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
              select: { actor: { select: { userId: true, name: true } } },
              take: 1,
            },
          },
        })
        if (!campaign) throw Object.assign(new Error('CAMPAIGN_NOT_FOUND'), { statusCode: 404 })

        const existingUserCampaignCharacter = await tx.campaignMember.findFirst({
          where: {
            campaignId: campaign.id,
            userId: payload.id,
            status: { in: ['ACTIVE', 'PENDING'] },
          },
          select: { id: true },
        })
        if (existingUserCampaignCharacter) {
          throw Object.assign(new Error('USER_ALREADY_IN_CAMPAIGN'), { statusCode: 409 })
        }

        let character = parsed.data.actorId
          ? await tx.campaignActor.findUnique({
              where: { id: parsed.data.actorId },
              select: {
                id: true,
                userId: true,
                name: true,
                deletedAt: true,
                campaigns: { select: { id: true } },
              },
            })
          : null

        if (character && character.userId !== payload.id) throw Object.assign(new Error('CHARACTER_FORBIDDEN'), { statusCode: 403 })
        if (character && character.deletedAt) throw Object.assign(new Error('CHARACTER_ARCHIVED'), { statusCode: 400 })
        if (character && character.campaigns.length > 0) throw Object.assign(new Error('CHARACTER_ALREADY_LINKED'), { statusCode: 409 })
        if (!character) {
          if (!parsed.data.actorName) return { campaign, status: 'PENDING' as const, missingActorName: true }
          character = await tx.campaignActor.create({
            data: {
              userId: payload.id,
              name: parsed.data.actorName,
            },
            select: {
              id: true,
              userId: true,
              name: true,
              deletedAt: true,
              campaigns: { select: { id: true } },
            },
          })
        }

        const status = campaign.joinPolicy === 'PUBLIC' ? 'ACTIVE' : 'PENDING'
        const campaignMember = await tx.campaignMember.create({
          data: {
            campaignId: campaign.id,
            actorId: character.id,
            userId: payload.id,
            role: 'PLAYER',
            status,
            joinedAt: status === 'ACTIVE' ? new Date() : null,
          },
          select: { status: true, actorId: true },
        })

        await tx.campaignMember.upsert({
          where: { campaignId_userId: { campaignId: campaign.id, userId: payload.id } },
          create: { campaignId: campaign.id, userId: payload.id },
          update: {},
        })

        const master = campaign.actors[0]?.actor ?? null
        if (status === 'PENDING' && master?.userId) {
          io.to(`user:${master.userId}`).emit('campaign:join-requested', {
            campaignId: campaign.id,
            userId: payload.id,
            email: payload.email,
            actorName: character.name,
            createdAt: new Date().toISOString(),
          })
        }
        if (status === 'ACTIVE' && master?.userId) {
          io.to(`user:${master.userId}`).emit('campaign:player-joined', {
            campaignId: campaign.id,
            userId: payload.id,
            email: payload.email,
            actorName: character.name,
            createdAt: new Date().toISOString(),
          })
        }

        return { campaign, status: campaignMember.status, actorId: campaignMember.actorId }
      })

      const master = result.campaign.actors[0]?.actor ?? null
      return reply.send({
        id: result.campaign.id,
        title: result.campaign.title,
        description: result.campaign.description,
        inviteCode: null,
        joinPolicy: result.campaign.joinPolicy,
        createdAt: result.campaign.createdAt,
        gmName: master?.name ?? 'Mestre',
          gmUserId: master?.userId ?? '',
          myRole: 'PLAYER',
          myStatus: result.status,
          status: result.status,
          actorId: result.actorId ?? null,
        missingActorName: 'missingActorName' in result ? result.missingActorName : false,
      })
    } catch (err: any) {
      const status = Number(err?.statusCode ?? 500)
      if (status === 404) return reply.status(404).send({ error: 'Campanha nao encontrada' })
      if (status === 403) return reply.status(403).send({ error: 'Personagem nao pertence ao usuario' })
      if (status === 400) return reply.status(400).send({ error: 'Personagem arquivado' })
      if (status === 409) {
        if (err?.message === 'MASTER_OFFLINE') return reply.status(409).send({ error: 'Mestre offline' })
        if (err?.message === 'USER_ALREADY_IN_CAMPAIGN') {
          return reply.status(409).send({ error: 'Voce ja possui um personagem ativo ou pendente nesta campanha' })
        }
        return reply.status(409).send({ error: 'Conflito ao entrar na campanha' })
      }
      req.log.error({ err }, 'Erro ao entrar na campanha')
      return reply.status(500).send({ error: 'Erro ao entrar na campanha' })
    }
  })

  app.get('/api/campaigns/:campaignId/my-character', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string }
    const query = z.object({ actorId: z.string().optional() }).safeParse(req.query ?? {})
    if (!query.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const campaignMember = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        ...(query.data.actorId ? { actorId: query.data.actorId } : {}),
        status: 'ACTIVE',
        role: { in: ['MASTER', 'PLAYER'] },
        actor: { userId: payload.id },
      },
      orderBy: { createdAt: 'asc' },
      select: {
        role: true,
        status: true,
        actor: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    })

    if (!campaignMember) {
      return reply.status(403).send({ error: 'Acesso nao liberado' })
    }

    if (campaignMember.role === 'PLAYER' && !isCampaignOnline(params.campaignId)) {
      return reply.status(409).send({ error: 'Mestre offline' })
    }

    return reply.send({
      id: campaignMember.actor.id,
      name: campaignMember.actor.name,
      avatarUrl: campaignMember.actor.avatarUrl,
      role: campaignMember.role,
      status: campaignMember.status,
    })
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
        actor: { userId: payload.id },
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
      where: {
        campaignId: params.campaignId,
        status: 'ACTIVE',
        actor: { userId: payload.id },
      },
      select: { role: true },
    })
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const isMaster = access.role === 'MASTER'
    const entries = await prisma.campaignMember.findMany({
      where: {
        campaignId: params.campaignId,
        ...(isMaster ? {} : { status: 'ACTIVE' as const }),
      },
      select: {
        role: true,
        status: true,
        actorId: true,
        createdAt: true,
        updatedAt: true,
        actor: {
          select: {
            userId: true,
            name: true,
            user: { select: { email: true } },
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    })

    return reply.send(
      entries.map((entry) => ({
        userId: entry.actor.userId,
        email: entry.actor.user.email,
        role: entry.role,
        status: entry.status,
        actorId: entry.actorId,
        actorName: entry.actor.name,
        createdAt: entry.createdAt,
        decidedAt: entry.status === 'PENDING' ? null : entry.updatedAt,
      })),
    )
  })

  app.get('/api/campaigns/:campaignId/token-candidates', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string }

    const master = await prisma.campaignMember.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'MASTER',
        status: 'ACTIVE',
        actor: { userId: payload.id },
      },
      select: { id: true },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode gerenciar tokens' })

    const entries = await prisma.campaignMember.findMany({
      where: {
        campaignId: params.campaignId,
        status: 'ACTIVE',
        role: 'PLAYER',
        actor: { campaignTokens: { none: {} } },
      },
      select: {
        role: true,
        userId: true,
        actorId: true,
        actor: {
          select: {
            name: true,
            avatarUrl: true,
            user: { select: { email: true } },
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    })

    return reply.send(
      entries.map((entry) => ({
        actorId: entry.actorId,
        name: entry.actor.name,
        avatarUrl: entry.actor.avatarUrl,
        role: entry.role,
        ownerUserId: entry.userId,
        ownerName: entry.role === 'NPC' ? entry.actor.name : entry.actor.user.email,
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

    const categoryOrder = { MAIN: 0, SECONDARY: 1, MASTER_ONLY: 2 } as const
    return reply.send(
      tokens
        .map(presentCampaignToken)
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

    const character = parsed.data.actorId
      ? await prisma.campaignMember.findFirst({
          where: {
            campaignId: params.campaignId,
            actorId: parsed.data.actorId,
            status: 'ACTIVE',
            role: 'PLAYER',
          },
          select: {
            role: true,
            userId: true,
            actor: { select: { id: true, name: true, avatarUrl: true } },
          },
        })
      : null
    if (parsed.data.actorId && !character) {
      return reply.status(400).send({ error: 'Character nao pertence a esta campanha' })
    }

    const controllerUserId = parsed.data.controllerUserId ?? (character?.role === 'PLAYER' ? character.userId : null)
    const controller = controllerUserId
      ? await findActivePlayerMember(params.campaignId, controllerUserId)
      : null
    if (controllerUserId && !controller) {
      return reply.status(400).send({ error: 'Controlador nao participa desta campanha' })
    }

    try {
      const avatarUrl = parsed.data.avatarUrl !== undefined
        ? parsed.data.avatarUrl
        : character?.actor.avatarUrl ?? null
      const token = await prisma.campaignToken.create({
        data: {
          campaignId: params.campaignId,
          actorId: character?.actor.id ?? null,
          controllerMemberId: controller?.id ?? null,
          name: parsed.data.name ?? character?.actor.name ?? 'Novo Token',
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
      return reply.status(201).send(presentCampaignToken(token))
    } catch (err: any) {
      if (err?.code === 'P2002') return reply.status(409).send({ error: 'Character ja esta vinculado a outro Token' })
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
      current.controllerMember?.userId === payload.id
    if (!isMaster && !canPlayerCustomize) {
      return reply.status(403).send({ error: 'Sem permissao para alterar este Token' })
    }

    let actor: { role: 'MASTER' | 'PLAYER'; userId: string; actor: { id: string } } | null = null
    if (isMaster && parsed.data.actorId) {
      character = await prisma.campaignMember.findFirst({
        where: {
          campaignId: params.campaignId,
          actorId: parsed.data.actorId,
          status: 'ACTIVE',
          role: 'PLAYER',
        },
        select: { role: true, userId: true, actor: { select: { id: true } } },
      })
      if (!character) return reply.status(400).send({ error: 'Character nao pertence a esta campanha' })
    }

    let controllerMemberId: string | null | undefined
    const automaticControllerUserId =
      isMaster && parsed.data.actorId !== undefined && character?.role === 'PLAYER'
        ? character.userId
        : undefined
    const requestedControllerUserId =
      parsed.data.controllerUserId !== undefined ? parsed.data.controllerUserId : automaticControllerUserId
    if (isMaster && requestedControllerUserId !== undefined) {
      if (requestedControllerUserId === null) controllerMemberId = null
      else {
        const member = await findActivePlayerMember(params.campaignId, requestedControllerUserId)
        if (!member) return reply.status(400).send({ error: 'Controlador nao participa desta campanha' })
        controllerMemberId = member.id
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
      const token = await prisma.campaignToken.update({
        where: { id: current.id },
        data: {
          ...(isMaster && parsed.data.actorId !== undefined ? { actorId: parsed.data.actorId } : {}),
          ...(controllerMemberId !== undefined ? { controllerMemberId } : {}),
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
      const presented = presentCampaignToken(token)
      await refreshCampaignTokenInLiveState(params.campaignId, token.id)
      io.to(`campaign:${params.campaignId}`).emit('vtt:token:metadata-changed', {
        campaignId: params.campaignId,
        token: presented,
        previousControllerUserId: current.controllerMember?.userId ?? null,
      })
      return reply.send(presented)
    } catch (err: any) {
      if (err?.code === 'P2002') return reply.status(409).send({ error: 'Character ja esta vinculado a outro Token' })
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
        actor: { userId: payload.id },
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
      return reply.status(409).send({ error: 'Usuario ja possui personagem ativo nesta campanha' })
    }

    const updated = await prisma.campaignMember.update({
      where: { id: target.id },
      data: { status: 'ACTIVE', joinedAt: new Date() },
      select: { campaignId: true, actor: { select: { userId: true } } },
    })

    io.to(`user:${updated.actor.userId}`).emit('campaign:join-approved', {
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
        actor: { userId: payload.id },
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

    const updated = await prisma.$transaction(async (tx) => {
      const campaignMember = await tx.campaignMember.update({
        where: { id: target.id },
        data: { status: 'REJECTED' },
        select: { campaignId: true, actor: { select: { userId: true } } },
      })
      await tx.campaignMember.deleteMany({
        where: { campaignId: params.campaignId, userId: params.userId },
      })
      return campaignMember
    })

    io.to(`user:${updated.actor.userId}`).emit('campaign:join-rejected', {
      campaignId: updated.campaignId,
      message: 'Sua solicitacao foi recusada',
    })

    return reply.send({ ok: true })
  })
}
