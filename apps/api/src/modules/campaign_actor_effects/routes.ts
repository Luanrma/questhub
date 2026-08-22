import type { FastifyInstance } from 'fastify'
import type { Server } from 'socket.io'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { campaignRoom } from '../campaign-presence/rooms'
import {
  canMutateActorEffects,
  canReadActorEffects,
} from './authorization'
import {
  createActorEffect,
  deleteActorEffect,
  listActorEffects,
  MANUAL_ACTOR_EFFECT_NAMESPACE,
  MANUAL_ACTOR_EFFECT_ORIGIN,
  updateActorEffectPresentation,
} from './service'
import {
  actorEffectParamsSchema,
  actorEffectsParamsSchema,
  createManualActorEffectSchema,
  tokenEffectsParamsSchema,
  updateActorEffectSchema,
} from './validation'

async function findActiveMember(campaignId: string, userId: string) {
  return prisma.campaignMember.findFirst({
    where: { campaignId, userId, status: 'ACTIVE' },
    select: { id: true, role: true },
  })
}

async function findAccessibleActiveActor(
  campaignId: string,
  actorId: string,
  userId: string,
) {
  const member = await findActiveMember(campaignId, userId)
  if (!member) {
    return { actor: null, member: null, forbidden: true } as const
  }

  const actor = await prisma.campaignActor.findFirst({
    where: {
      id: actorId,
      campaignId,
      archivedAt: null,
    },
    select: {
      id: true,
      controllerMemberId: true,
    },
  })
  if (!actor) {
    return { actor: null, member, forbidden: false } as const
  }

  if (!canReadActorEffects({
    role: member.role,
    memberId: member.id,
    controllerMemberId: actor.controllerMemberId,
  })) {
    return { actor: null, member, forbidden: true } as const
  }

  return { actor, member, forbidden: false } as const
}

function publishActorEffectsChanged(io: Server, campaignId: string, actorId: string) {
  io.to(campaignRoom(campaignId)).emit('vtt:actor-effects:changed', {
    campaignId,
    actorId,
  })
}

export function registerCampaignActorEffectRoutes(app: FastifyInstance, io: Server) {
  app.get('/api/campaigns/:campaignId/actors/:actorId/effects', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = actorEffectsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Efeitos do ator invalidos' })

    const access = await findAccessibleActiveActor(
      params.data.campaignId,
      params.data.actorId,
      auth.id,
    )
    if (!access.actor) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({
          error: access.forbidden
            ? 'Sem permissao para acessar os efeitos deste ator'
            : 'Ator nao encontrado',
        })
    }

    return reply.send({
      actorId: access.actor.id,
      effects: await listActorEffects(access.actor.id),
    })
  })

  app.get('/api/campaigns/:campaignId/tokens/:tokenId/actor-effects', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = tokenEffectsParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Token invalido' })

    const member = await findActiveMember(params.data.campaignId, auth.id)
    if (!member) return reply.status(403).send({ error: 'Acesso nao liberado' })

    const token = await prisma.campaignToken.findFirst({
      where: {
        id: params.data.tokenId,
        campaignId: params.data.campaignId,
      },
      select: {
        id: true,
        actor: {
          select: {
            id: true,
            controllerMemberId: true,
            archivedAt: true,
          },
        },
      },
    })
    if (!token) return reply.status(404).send({ error: 'Token nao encontrado' })

    if (!token.actor || token.actor.archivedAt) {
      return reply.send({
        tokenId: token.id,
        actorId: null,
        effects: [],
      })
    }

    if (!canReadActorEffects({
      role: member.role,
      memberId: member.id,
      controllerMemberId: token.actor.controllerMemberId,
    })) {
      return reply.status(403).send({ error: 'Sem permissao para acessar os efeitos deste ator' })
    }

    return reply.send({
      tokenId: token.id,
      actorId: token.actor.id,
      effects: await listActorEffects(token.actor.id),
    })
  })

  app.post('/api/campaigns/:campaignId/actors/:actorId/effects', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = actorEffectsParamsSchema.safeParse(req.params)
    const body = createManualActorEffectSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({
        error: body.success ? 'Efeitos do ator invalidos' : body.error.flatten(),
      })
    }

    const access = await findAccessibleActiveActor(
      params.data.campaignId,
      params.data.actorId,
      auth.id,
    )
    if (!access.actor || !access.member) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({
          error: access.forbidden
            ? 'Sem permissao para alterar os efeitos deste ator'
            : 'Ator nao encontrado',
        })
    }
    if (!canMutateActorEffects(access.member.role)) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode alterar efeitos ativos' })
    }

    const effect = await createActorEffect({
      actorId: access.actor.id,
      namespace: MANUAL_ACTOR_EFFECT_NAMESPACE,
      definitionKey: null,
      name: body.data.name,
      description: body.data.description ?? null,
      iconUrl: body.data.iconUrl ?? null,
      polarity: body.data.polarity,
      category: body.data.category ?? null,
      displayValue: body.data.displayValue ?? null,
      schemaVersion: 1,
      payload: null,
      origin: MANUAL_ACTOR_EFFECT_ORIGIN,
    })
    if (!effect) return reply.status(404).send({ error: 'Ator nao encontrado' })

    publishActorEffectsChanged(io, params.data.campaignId, access.actor.id)
    return reply.status(201).send(effect)
  })

  app.patch('/api/campaigns/:campaignId/actors/:actorId/effects/:effectId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = actorEffectParamsSchema.safeParse(req.params)
    const body = updateActorEffectSchema.safeParse(req.body ?? {})
    if (!params.success || !body.success) {
      return reply.status(400).send({
        error: body.success ? 'Efeito do ator invalido' : body.error.flatten(),
      })
    }

    const access = await findAccessibleActiveActor(
      params.data.campaignId,
      params.data.actorId,
      auth.id,
    )
    if (!access.actor || !access.member) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({
          error: access.forbidden
            ? 'Sem permissao para alterar os efeitos deste ator'
            : 'Ator nao encontrado',
        })
    }
    if (!canMutateActorEffects(access.member.role)) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode alterar efeitos ativos' })
    }

    const effect = await updateActorEffectPresentation(
      access.actor.id,
      params.data.effectId,
      body.data,
    )
    if (!effect) return reply.status(404).send({ error: 'Efeito ativo nao encontrado' })

    publishActorEffectsChanged(io, params.data.campaignId, access.actor.id)
    return reply.send(effect)
  })

  app.delete('/api/campaigns/:campaignId/actors/:actorId/effects/:effectId', async (req, reply) => {
    const auth = requireAuth(req, reply)
    if (!auth) return

    const params = actorEffectParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Efeito do ator invalido' })

    const access = await findAccessibleActiveActor(
      params.data.campaignId,
      params.data.actorId,
      auth.id,
    )
    if (!access.actor || !access.member) {
      return reply
        .status(access.forbidden ? 403 : 404)
        .send({
          error: access.forbidden
            ? 'Sem permissao para alterar os efeitos deste ator'
            : 'Ator nao encontrado',
        })
    }
    if (!canMutateActorEffects(access.member.role)) {
      return reply.status(403).send({ error: 'Apenas o Mestre pode alterar efeitos ativos' })
    }

    const deleted = await deleteActorEffect(access.actor.id, params.data.effectId)
    if (!deleted) return reply.status(404).send({ error: 'Efeito ativo nao encontrado' })

    publishActorEffectsChanged(io, params.data.campaignId, access.actor.id)
    return reply.status(204).send()
  })
}
