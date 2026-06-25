import type { FastifyInstance } from 'fastify'
import type { Prisma } from '@prisma/client'
import type { Server as SocketIOServer } from 'socket.io'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { buildDefaultCharacterSheetEnvelope } from '../game_systems'
import { generateInviteCode } from './invite-code'

type CampaignRoutesDeps = {
  io: SocketIOServer
  isCampaignOnline: (campaignId: string) => boolean
}

export function registerCampaignRoutes(app: FastifyInstance, deps: CampaignRoutesDeps) {
  const { io, isCampaignOnline } = deps

  app.get('/api/campaigns', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const campaignCharacters = await prisma.campaignCharacter.findMany({
      where: {
        character: { userId: payload.id },
      },
      select: {
        role: true,
        status: true,
        character: { select: { id: true, name: true } },
        campaign: {
          select: {
            id: true,
            title: true,
            description: true,
            inviteCode: true,
            system: true,
            joinPolicy: true,
            createdAt: true,
            characters: {
              where: { role: 'MASTER', status: 'ACTIVE' },
              select: { character: { select: { id: true, userId: true, name: true } } },
              take: 1,
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return reply.send(
      campaignCharacters.map((entry) => {
        const master = entry.campaign.characters[0]?.character ?? null

        return {
          id: entry.campaign.id,
          title: entry.campaign.title,
          description: entry.campaign.description,
          inviteCode: entry.role === 'MASTER' ? entry.campaign.inviteCode : null,
          system: entry.campaign.system,
          joinPolicy: entry.campaign.joinPolicy,
          createdAt: entry.campaign.createdAt,
          gmName: master?.name ?? 'Mestre',
          gmUserId: master?.userId ?? '',
          myRole: entry.role,
          myStatus: entry.status,
          myCharacterId: entry.character.id,
          myCharacterName: entry.character.name,
          isOnline: isCampaignOnline(entry.campaign.id),
        }
      }),
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
        system: true,
        joinPolicy: true,
        createdAt: true,
        characters: {
          where: { role: 'MASTER', status: 'ACTIVE' },
          select: { character: { select: { userId: true, name: true } } },
          take: 1,
        },
      },
    })

    if (!campaign) return reply.status(404).send({ error: 'Campanha nao encontrada' })

    const master = campaign.characters[0]?.character ?? null
    return reply.send({
      id: campaign.id,
      title: campaign.title,
      description: campaign.description,
      inviteCode: campaign.inviteCode,
      system: campaign.system,
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
      system: z.enum(['PATHFINDER_2E']),
      masterCharacterId: z.string().optional(),
      masterCharacterName: z.string().trim().min(1).max(80).optional(),
    })

    const parsed = schema.safeParse(req.body ?? {})
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.flatten() })
    if (!parsed.data.masterCharacterId && !parsed.data.masterCharacterName) {
      return reply.status(400).send({ error: 'Selecione ou crie um personagem mestre' })
    }

    const inviteCode = await generateInviteCode()

    try {
      const result = await prisma.$transaction(async (tx) => {
        let masterCharacter = parsed.data.masterCharacterId
          ? await tx.character.findUnique({
              where: { id: parsed.data.masterCharacterId },
              select: {
                id: true,
                userId: true,
                name: true,
                system: true,
                sheet: true,
                deletedAt: true,
                campaigns: { select: { id: true } },
              },
            })
          : null

        if (masterCharacter && masterCharacter.userId !== payload.id) throw new Error('CHARACTER_FORBIDDEN')
        if (masterCharacter && masterCharacter.deletedAt) throw new Error('CHARACTER_ARCHIVED')
        if (masterCharacter && masterCharacter.campaigns.length > 0) throw new Error('CHARACTER_ALREADY_LINKED')
        if (masterCharacter?.system && masterCharacter.system !== parsed.data.system) throw new Error('INCOMPATIBLE_SYSTEM')

        if (!masterCharacter) {
          masterCharacter = await tx.character.create({
            data: {
              userId: payload.id,
              name: parsed.data.masterCharacterName ?? 'Mestre',
              system: parsed.data.system,
              sheet: buildDefaultCharacterSheetEnvelope(parsed.data.system) as unknown as Prisma.InputJsonValue,
            },
            select: {
              id: true,
              userId: true,
              name: true,
              system: true,
              sheet: true,
              deletedAt: true,
              campaigns: { select: { id: true } },
            },
          })
        }

        if (!masterCharacter.system || !masterCharacter.sheet) {
          masterCharacter = await tx.character.update({
            where: { id: masterCharacter.id },
            data: {
              system: parsed.data.system,
              ...(!masterCharacter.sheet
                ? { sheet: buildDefaultCharacterSheetEnvelope(parsed.data.system) as unknown as Prisma.InputJsonValue }
                : {}),
            },
            select: {
              id: true,
              userId: true,
              name: true,
              system: true,
              sheet: true,
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
            system: parsed.data.system,
            joinPolicy: parsed.data.joinPolicy,
            createdByUserId: payload.id,
          },
          select: {
            id: true,
            title: true,
            description: true,
            inviteCode: true,
            system: true,
            joinPolicy: true,
            createdAt: true,
          },
        })

        await tx.campaignCharacter.create({
          data: {
            campaignId: campaign.id,
            characterId: masterCharacter.id,
            userId: payload.id,
            role: 'MASTER',
            status: 'ACTIVE',
            joinedAt: new Date(),
          },
        })

        return { campaign, masterCharacter }
      })

      return reply.status(201).send({
        ...result.campaign,
        gmName: result.masterCharacter.name,
        gmUserId: payload.id,
        myRole: 'MASTER',
        myCharacterId: result.masterCharacter.id,
        myCharacterName: result.masterCharacter.name,
        isOnline: false,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : ''
      if (message === 'CHARACTER_FORBIDDEN') return reply.status(403).send({ error: 'Personagem nao pertence ao usuario' })
      if (message === 'CHARACTER_ARCHIVED') return reply.status(400).send({ error: 'Personagem arquivado' })
      if (message === 'CHARACTER_ALREADY_LINKED') return reply.status(409).send({ error: 'Personagem ja esta vinculado' })
      if (message === 'INCOMPATIBLE_SYSTEM') return reply.status(409).send({ error: 'Sistema do personagem incompativel com a campanha' })
      throw err
    }
  })

  app.post('/api/campaigns/join', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const schema = z.object({
      inviteCode: z.string().trim().min(1),
      characterId: z.string().optional(),
      characterName: z.string().trim().min(1).max(80).optional(),
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
            system: true,
            joinPolicy: true,
            createdAt: true,
            characters: {
              where: { role: 'MASTER', status: 'ACTIVE' },
              select: { character: { select: { userId: true, name: true } } },
              take: 1,
            },
          },
        })
        if (!campaign) throw Object.assign(new Error('CAMPAIGN_NOT_FOUND'), { statusCode: 404 })

        const existingUserCampaignCharacter = await tx.campaignCharacter.findFirst({
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

        let character = parsed.data.characterId
          ? await tx.character.findUnique({
              where: { id: parsed.data.characterId },
              select: {
                id: true,
                userId: true,
                name: true,
                system: true,
                sheet: true,
                deletedAt: true,
                campaigns: { select: { id: true } },
              },
            })
          : null

        if (character && character.userId !== payload.id) throw Object.assign(new Error('CHARACTER_FORBIDDEN'), { statusCode: 403 })
        if (character && character.deletedAt) throw Object.assign(new Error('CHARACTER_ARCHIVED'), { statusCode: 400 })
        if (character && character.campaigns.length > 0) throw Object.assign(new Error('CHARACTER_ALREADY_LINKED'), { statusCode: 409 })
        if (character?.system && character.system !== campaign.system) throw Object.assign(new Error('INCOMPATIBLE_SYSTEM'), { statusCode: 409 })

        if (!character) {
          if (!parsed.data.characterName) return { campaign, status: 'PENDING' as const, missingCharacterName: true }
          character = await tx.character.create({
            data: {
              userId: payload.id,
              name: parsed.data.characterName,
              system: campaign.system,
              sheet: buildDefaultCharacterSheetEnvelope(campaign.system) as unknown as Prisma.InputJsonValue,
            },
            select: {
              id: true,
              userId: true,
              name: true,
              system: true,
              sheet: true,
              deletedAt: true,
              campaigns: { select: { id: true } },
            },
          })
        }

        if (!character.system || !character.sheet) {
          character = await tx.character.update({
            where: { id: character.id },
            data: {
              system: campaign.system,
              ...(!character.sheet
                ? { sheet: buildDefaultCharacterSheetEnvelope(campaign.system) as unknown as Prisma.InputJsonValue }
                : {}),
            },
            select: {
              id: true,
              userId: true,
              name: true,
              system: true,
              sheet: true,
              deletedAt: true,
              campaigns: { select: { id: true } },
            },
          })
        }

        const status = campaign.joinPolicy === 'PUBLIC' ? 'ACTIVE' : 'PENDING'
        const campaignCharacter = await tx.campaignCharacter.create({
          data: {
            campaignId: campaign.id,
            characterId: character.id,
            userId: payload.id,
            role: 'PLAYER',
            status,
            joinedAt: status === 'ACTIVE' ? new Date() : null,
          },
          select: { status: true, characterId: true },
        })

        const master = campaign.characters[0]?.character ?? null
        if (status === 'PENDING' && master?.userId) {
          io.to(`user:${master.userId}`).emit('campaign:join-requested', {
            campaignId: campaign.id,
            userId: payload.id,
            email: payload.email,
            characterName: character.name,
            createdAt: new Date().toISOString(),
          })
        }
        if (status === 'ACTIVE' && master?.userId) {
          io.to(`user:${master.userId}`).emit('campaign:player-joined', {
            campaignId: campaign.id,
            userId: payload.id,
            email: payload.email,
            characterName: character.name,
            createdAt: new Date().toISOString(),
          })
        }

        return { campaign, status: campaignCharacter.status, characterId: campaignCharacter.characterId }
      })

      const master = result.campaign.characters[0]?.character ?? null
      return reply.send({
        id: result.campaign.id,
        title: result.campaign.title,
        description: result.campaign.description,
        inviteCode: null,
        system: result.campaign.system,
        joinPolicy: result.campaign.joinPolicy,
        createdAt: result.campaign.createdAt,
        gmName: master?.name ?? 'Mestre',
          gmUserId: master?.userId ?? '',
          myRole: 'PLAYER',
          myStatus: result.status,
          status: result.status,
          characterId: result.characterId ?? null,
        missingCharacterName: 'missingCharacterName' in result ? result.missingCharacterName : false,
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

    const campaignCharacter = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        status: 'ACTIVE',
        role: { in: ['MASTER', 'PLAYER'] },
        character: { userId: payload.id },
      },
      select: {
        role: true,
        status: true,
        character: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (!campaignCharacter) {
      return reply.status(403).send({ error: 'Acesso nao liberado' })
    }

    if (campaignCharacter.role === 'PLAYER' && !isCampaignOnline(params.campaignId)) {
      return reply.status(409).send({ error: 'Mestre offline' })
    }

    return reply.send({
      id: campaignCharacter.character.id,
      name: campaignCharacter.character.name,
      role: campaignCharacter.role,
      status: campaignCharacter.status,
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

    const master = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'MASTER',
        status: 'ACTIVE',
        character: { userId: payload.id },
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

    const access = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        status: 'ACTIVE',
        character: { userId: payload.id },
      },
      select: { role: true },
    })
    if (!access) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const isMaster = access.role === 'MASTER'
    const entries = await prisma.campaignCharacter.findMany({
      where: {
        campaignId: params.campaignId,
        ...(isMaster ? {} : { status: 'ACTIVE' as const }),
      },
      select: {
        role: true,
        status: true,
        characterId: true,
        createdAt: true,
        updatedAt: true,
        character: {
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
        userId: entry.character.userId,
        email: entry.character.user.email,
        role: entry.role,
        status: entry.status,
        characterId: entry.characterId,
        characterName: entry.character.name,
        createdAt: entry.createdAt,
        decidedAt: entry.status === 'PENDING' ? null : entry.updatedAt,
      })),
    )
  })

  app.post('/api/campaigns/:campaignId/players/:userId/approve', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string; userId: string }

    const master = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'MASTER',
        status: 'ACTIVE',
        character: { userId: payload.id },
      },
      select: { id: true },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode aprovar' })

    const target = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'PLAYER',
        userId: params.userId,
      },
      select: { id: true, userId: true },
    })
    if (!target) return reply.status(404).send({ error: 'Solicitacao nao encontrada' })

    const existingActive = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        userId: target.userId,
        status: 'ACTIVE',
        NOT: { id: target.id },
      },
      select: { id: true },
    })
    if (existingActive) {
      return reply.status(409).send({ error: 'Usuario ja possui personagem ativo nesta campanha' })
    }

    const updated = await prisma.campaignCharacter.update({
      where: { id: target.id },
      data: { status: 'ACTIVE', joinedAt: new Date() },
      select: { campaignId: true, character: { select: { userId: true } } },
    })

    io.to(`user:${updated.character.userId}`).emit('campaign:join-approved', {
      campaignId: updated.campaignId,
      message: 'Sua solicitacao foi aprovada',
    })

    return reply.send({ ok: true })
  })

  app.post('/api/campaigns/:campaignId/players/:userId/reject', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return
    const params = req.params as { campaignId: string; userId: string }

    const master = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'MASTER',
        status: 'ACTIVE',
        character: { userId: payload.id },
      },
      select: { id: true },
    })
    if (!master) return reply.status(403).send({ error: 'Apenas o mestre pode recusar' })

    const target = await prisma.campaignCharacter.findFirst({
      where: {
        campaignId: params.campaignId,
        role: 'PLAYER',
        userId: params.userId,
      },
      select: { id: true },
    })
    if (!target) return reply.status(404).send({ error: 'Solicitacao nao encontrada' })

    const updated = await prisma.campaignCharacter.update({
      where: { id: target.id },
      data: { status: 'REJECTED' },
      select: { campaignId: true, character: { select: { userId: true } } },
    })

    io.to(`user:${updated.character.userId}`).emit('campaign:join-rejected', {
      campaignId: updated.campaignId,
      message: 'Sua solicitacao foi recusada',
    })

    return reply.send({ ok: true })
  })
}
