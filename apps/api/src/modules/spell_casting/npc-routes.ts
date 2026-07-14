import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import { distanceInCells, hexDistanceInCells } from '../../../../../packages/game-system-core/src/shared/scene-geometry'
import { buildPathfinder2eCastOptions } from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/cast-options'
import {
  applyPathfinder2eCast,
  applyPathfinder2eRefocus,
  applyPathfinder2eRest,
} from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/consume'
import { findPathfinder2eSpellDefinition } from '../../../../../packages/game-system-pathfinder-2e/src/server/spells'
import {
  parsePathfinder2eSpellRange,
  pathfinder2eFeetToCells,
} from '../../../../../packages/game-system-pathfinder-2e/src/shared/spell-area'
import { parsePathfinder2eSpellTargetCount } from '../../../../../packages/game-system-pathfinder-2e/src/shared/spell-target'
import {
  castCasterSchema,
  castPlacementSchema,
  castSourceSchema,
  GEOMETRY_EPSILON,
  HEX_SUPPORTED_SPELL_AREA_TYPES,
  isExpectedShapeForArea,
  isWithinSpellRange,
  loadNpcTargetSaveInput,
  loadPathfinder2eCombatant,
  resolveSpellResolutionScene,
  targetCountLabel,
} from './routes'
import type { CastCaster, CastPlacement, CastSceneContext } from './routes'
import { getMasterCampaignAccess, getNpcDefinitionForMaster, parseNpcSpellbook } from '../npc_definitions/routes'
import { resolvePathfinder2eSpellResolutionProfile } from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/resolution-profile'
import { resolvePathfinder2eBasicSaveDamage } from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/resolve'
import type { Pathfinder2eDegreeOfSuccess } from '../../../../../packages/game-system-pathfinder-2e/src/shared/degree-of-success'
import { rollD20, rollDiceFormula } from '../../../../../packages/game-system-core/src/server/dice/roll-dice-formula'
import type { DiceFormula } from '../../../../../packages/game-system-core/src/shared/dice/dice-formula'
import { getPathfinder2eAttributeModifier } from '../../../../../packages/game-system-pathfinder-2e/src/shared/attribute-modifier'
import { PATHFINDER_2E_SAVING_THROW_ATTRIBUTE } from '../../../../../packages/game-system-pathfinder-2e/src/shared/saving-throws'
import { toCombatantHealth } from '../combat/domain/health-rules'
import type { setupCampaignPresence } from '../campaign-presence/socket'

const definitionParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
  definitionId: z.string().trim().min(1, 'NPC invalido'),
})

const npcCastBodySchema = z.object({
  clientCastId: z.string().trim().min(1).max(80),
  entryId: z.string().trim().min(1),
  spellId: z.string().trim().min(1),
  source: castSourceSchema,
  caster: castCasterSchema.optional(),
  placement: castPlacementSchema.optional(),
  targets: z.array(z.string().trim().min(1)).max(20).optional(),
})

type NpcSpellCastingPresence = Pick<
  ReturnType<typeof setupCampaignPresence>,
  'appendSystemLogToActiveEncounter' | 'applyResolvedCombatHealth'
>

/**
 * Contraparte de `resolveCastSceneContext`/`validateCastPlacement`/
 * `resolveNonAreaCastContext` (spell_casting/routes.ts) para conjurador NPC.
 * Reimplementada em paralelo (nao generalizada dentro das funcoes de
 * personagem) por decisao deliberada: apps/api/src/modules/** nao tem
 * cobertura de typecheck nem teste automatizado (.ai/spell_casting/skills.md
 * secao 5), entao alterar as funcoes ja testadas do fluxo de personagem sob
 * pressao de tempo teria risco maior que duplicar a geometria (que ja e
 * reutilizada via export, nao duplicada).
 */
async function resolveNpcCastSceneContext(
  campaignId: string,
  definitionId: string,
  caster: CastCaster,
): Promise<{ ok: true; context: CastSceneContext } | { ok: false; error: string }> {
  const scene = await prisma.campaignScene.findUnique({
    where: { id: caster.sceneId },
    select: {
      id: true,
      campaignId: true,
      gridShape: true,
      metersPerCell: true,
      tokens: {
        where: { id: caster.casterTokenId },
        select: { id: true, campaignNpcDefinitionId: true, positionX: true, positionY: true },
      },
    },
  })
  if (!scene) return { ok: false, error: 'Cena da conjuracao nao encontrada' }
  if (scene.campaignId !== campaignId) return { ok: false, error: 'NPC nao pertence a campanha da cena' }

  const token = scene.tokens[0]
  if (!token || token.campaignNpcDefinitionId !== definitionId) {
    return { ok: false, error: 'Token conjurador invalido para este NPC' }
  }

  return {
    ok: true,
    context: {
      campaignId: scene.campaignId,
      sceneId: scene.id,
      gridShape: scene.gridShape,
      metersPerCell: scene.metersPerCell,
      casterPosition: { x: token.positionX, y: token.positionY },
    },
  }
}

async function validateNpcCastPlacement(
  campaignId: string,
  definitionId: string,
  spellId: string,
  placement: CastPlacement | undefined,
): Promise<{ ok: true; context: CastSceneContext | null } | { ok: false; error: string }> {
  const spell = findPathfinder2eSpellDefinition(spellId)
  if (!spell?.area) {
    if (placement) return { ok: false, error: 'Esta magia nao possui area para posicionar' }
    return { ok: true, context: null }
  }
  if (!placement) return { ok: false, error: 'Posicionamento de area obrigatorio para esta magia' }

  const resolved = await resolveNpcCastSceneContext(campaignId, definitionId, placement)
  if (!resolved.ok) return resolved

  if (resolved.context.gridShape === 'HEX' && !HEX_SUPPORTED_SPELL_AREA_TYPES.has(spell.area.type)) {
    return { ok: false, error: 'Esta forma de area (cone/linha/quadrado/cubo) ainda nao e suportada em grid hexagonal' }
  }
  if (!isExpectedShapeForArea(placement.shape, spell, resolved.context.metersPerCell, resolved.context.casterPosition)) {
    return { ok: false, error: 'Forma de area incompativel com a magia' }
  }
  if (!isWithinSpellRange(spell, resolved.context.metersPerCell, resolved.context.casterPosition, placement.shape, resolved.context.gridShape)) {
    return { ok: false, error: 'Area fora do alcance da magia' }
  }
  return { ok: true, context: resolved.context }
}

async function resolveNpcNonAreaCastContext(
  campaignId: string,
  definitionId: string,
  spellId: string,
  caster: CastCaster | undefined,
  targets: string[] | undefined,
): Promise<{ ok: true; context: CastSceneContext | null; targetNames: string[] } | { ok: false; error: string }> {
  const spell = findPathfinder2eSpellDefinition(spellId)
  const targetProfile = parsePathfinder2eSpellTargetCount(spell?.target)

  if (targetProfile.kind !== 'count') {
    if (!caster) return { ok: true, context: null, targetNames: [] }
    const resolved = await resolveNpcCastSceneContext(campaignId, definitionId, caster)
    if (!resolved.ok) return resolved
    return { ok: true, context: resolved.context, targetNames: [] }
  }

  const targetIds = targets ?? []
  if (targetIds.length < targetProfile.min || targetIds.length > targetProfile.max) {
    return { ok: false, error: `Esta magia exige ${targetCountLabel(targetProfile)}` }
  }
  if (!caster) return { ok: false, error: 'Contexto de cena obrigatorio para selecionar alvos' }

  const scene = await prisma.campaignScene.findUnique({
    where: { id: caster.sceneId },
    select: {
      id: true,
      campaignId: true,
      gridShape: true,
      metersPerCell: true,
      tokens: {
        where: { id: { in: [caster.casterTokenId, ...targetIds] } },
        select: {
          id: true,
          campaignNpcDefinitionId: true,
          characterId: true,
          name: true,
          positionX: true,
          positionY: true,
          character: { select: { name: true } },
        },
      },
    },
  })
  if (!scene) return { ok: false, error: 'Cena da conjuracao nao encontrada' }
  if (scene.campaignId !== campaignId) return { ok: false, error: 'NPC nao pertence a campanha da cena' }

  const casterToken = scene.tokens.find((token) => token.id === caster.casterTokenId)
  if (!casterToken || casterToken.campaignNpcDefinitionId !== definitionId) {
    return { ok: false, error: 'Token conjurador invalido para este NPC' }
  }

  const targetTokens = targetIds.map((id) => scene.tokens.find((token) => token.id === id))
  if (targetTokens.some((token) => !token)) return { ok: false, error: 'Alvo invalido: token nao encontrado na cena' }

  const casterPosition = { x: casterToken.positionX, y: casterToken.positionY }
  const range = parsePathfinder2eSpellRange(spell?.range)
  if (range?.kind === 'feet') {
    const maxCells = pathfinder2eFeetToCells(range.feet, scene.metersPerCell)
    if (maxCells > 0) {
      for (const token of targetTokens) {
        const targetPosition = { x: token!.positionX, y: token!.positionY }
        const measured =
          scene.gridShape === 'HEX'
            ? hexDistanceInCells(casterPosition, targetPosition)
            : distanceInCells(casterPosition, targetPosition)
        if (measured > maxCells + GEOMETRY_EPSILON) return { ok: false, error: 'Um dos alvos esta fora do alcance da magia' }
      }
    }
  }

  return {
    ok: true,
    context: {
      campaignId: scene.campaignId,
      sceneId: scene.id,
      gridShape: scene.gridShape,
      metersPerCell: scene.metersPerCell,
      casterPosition,
    },
    targetNames: targetTokens.map((token) => token!.name ?? token!.character?.name ?? 'Alvo'),
  }
}

function npcCastEncounterLogMessage(npcName: string, spellName: string, consumed: string, targetNames: string[]) {
  const suffix = targetNames.length > 0 ? ` em ${targetNames.join(', ')}` : ''
  return `${npcName} conjurou ${spellName}${suffix} (${consumed}).`
}

const resolveParamsSchema = definitionParamsSchema.extend({
  spellId: z.string().trim().min(1, 'Magia invalida'),
})

const npcResolveBodySchema = z.object({
  entryId: z.string().trim().min(1),
  sceneId: z.string().trim().min(1),
  casterTokenId: z.string().trim().min(1),
  targetTokenIds: z.array(z.string().trim().min(1)).min(1).max(20),
})

function diceFormulaLabel(formula: DiceFormula): string {
  if (formula.kind === 'flat') return String(formula.amount)
  return formula.bonus > 0 ? `${formula.count}d${formula.sides}+${formula.bonus}` : `${formula.count}d${formula.sides}`
}

function degreeLabelPt(degree: Pathfinder2eDegreeOfSuccess): string {
  switch (degree) {
    case 'criticalSuccess':
      return 'sucesso critico'
    case 'success':
      return 'sucesso'
    case 'failure':
      return 'falha'
    case 'criticalFailure':
      return 'falha critica'
  }
}

function npcResolveEncounterLogMessage(
  npcName: string,
  spellName: string,
  results: Array<{ targetName: string; degree: Pathfinder2eDegreeOfSuccess; damageApplied: number }>,
) {
  if (results.length === 0) return `${npcName} resolveu ${spellName}, mas nenhum alvo recebeu o resultado.`
  const parts = results.map((result) => `${result.targetName} (${degreeLabelPt(result.degree)}, ${result.damageApplied} de dano)`)
  return `${npcName} resolveu ${spellName}: ${parts.join('; ')}.`
}

export function registerNpcSpellCastingRoutes(app: FastifyInstance, presence?: NpcSpellCastingPresence) {
  app.get('/api/campaigns/:campaignId/npc-definitions/:definitionId/cast-options', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = definitionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const spellbook = parseNpcSpellbook(definition.spellbook)

    return reply.send({
      definitionId: definition.id,
      entries: buildPathfinder2eCastOptions(spellbook, findPathfinder2eSpellDefinition),
    })
  })

  app.post('/api/campaigns/:campaignId/npc-definitions/:definitionId/cast', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = definitionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const body = npcCastBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const spellbook = parseNpcSpellbook(definition.spellbook)

    const placementValidation = await validateNpcCastPlacement(params.data.campaignId, definition.id, body.data.spellId, body.data.placement)
    if (!placementValidation.ok) return reply.status(400).send({ error: placementValidation.error })

    let castContext: { ok: true; context: CastSceneContext } | null = null
    let targetNames: string[] = []
    if (placementValidation.context) {
      castContext = { ok: true, context: placementValidation.context }
    } else {
      const targetsResolution = await resolveNpcNonAreaCastContext(
        params.data.campaignId,
        definition.id,
        body.data.spellId,
        body.data.caster,
        body.data.targets,
      )
      if (!targetsResolution.ok) return reply.status(400).send({ error: targetsResolution.error })
      if (targetsResolution.context) castContext = { ok: true, context: targetsResolution.context }
      targetNames = targetsResolution.targetNames
    }

    const result = applyPathfinder2eCast(spellbook, {
      entryId: body.data.entryId,
      spellId: body.data.spellId,
      source: body.data.source,
    })
    if (!result.ok) return reply.status(400).send({ error: result.error })

    // Action economy de encontro so entende participantes com characterId (VttEncounterCreatureParticipant),
    // e o token de NPC customizado nao tem characterId — nao debita nem participa da economia de acao
    // nesta fatia (.ai/game_systems/pathfinder_2e/npc_spellcasting/skills.md secao 4, "Limitacoes Conhecidas").

    await prisma.campaignNpcDefinition.update({
      where: { id: definition.id },
      data: { spellbook: { pathfinder2e: result.spellbook } as never },
    })

    if (presence && castContext?.ok) {
      try {
        await presence.appendSystemLogToActiveEncounter(
          castContext.context.campaignId,
          castContext.context.sceneId,
          npcCastEncounterLogMessage(definition.name, result.spellName, result.consumed, targetNames),
        )
      } catch (error) {
        req.log.error({ error }, 'Failed to publish NPC spell cast log entry')
      }
    }

    return reply.send({
      definitionId: definition.id,
      spellName: result.spellName,
      consumed: result.consumed,
    })
  })

  app.post('/api/campaigns/:campaignId/npc-definitions/:definitionId/spellbook/rest', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = definitionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const spellbook = parseNpcSpellbook(definition.spellbook)
    await prisma.campaignNpcDefinition.update({
      where: { id: definition.id },
      data: { spellbook: { pathfinder2e: applyPathfinder2eRest(spellbook) } as never },
    })

    return reply.send({ definitionId: definition.id })
  })

  app.post('/api/campaigns/:campaignId/npc-definitions/:definitionId/spellbook/refocus', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = definitionParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const spellbook = parseNpcSpellbook(definition.spellbook)
    await prisma.campaignNpcDefinition.update({
      where: { id: definition.id },
      data: { spellbook: { pathfinder2e: applyPathfinder2eRefocus(spellbook) } as never },
    })

    return reply.send({ definitionId: definition.id })
  })

  app.post('/api/campaigns/:campaignId/npc-definitions/:definitionId/spells/:spellId/resolve', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = resolveParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const body = npcResolveBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const definition = await getNpcDefinitionForMaster(params.data.campaignId, params.data.definitionId, payload.id)
    if (!definition) return reply.status(404).send({ error: 'NPC customizado nao encontrado' })

    const spellbook = parseNpcSpellbook(definition.spellbook)
    const entry = spellbook.entries.find((candidate) => candidate.id === body.data.entryId)
    if (!entry) return reply.status(400).send({ error: 'Entrada de conjuracao nao encontrada' })
    if (entry.npcSpellDC === undefined) {
      return reply.status(400).send({ error: 'Esta entrada de conjuracao nao tem um Spell DC configurado' })
    }

    const spell = findPathfinder2eSpellDefinition(params.data.spellId)
    const profile = resolvePathfinder2eSpellResolutionProfile(spell ?? null)
    if (profile.kind !== 'basicSaveDamage') {
      return reply.status(400).send({ error: 'Esta magia nao tem uma resolucao de dano com salvamento basico suportada nesta fase' })
    }

    const sceneResolution = await resolveSpellResolutionScene(
      { kind: 'npc', campaignId: params.data.campaignId, definitionId: definition.id },
      spell,
      { sceneId: body.data.sceneId, casterTokenId: body.data.casterTokenId },
      body.data.targetTokenIds,
    )
    if (!sceneResolution.ok) return reply.status(400).send({ error: sceneResolution.error })

    const targetSaveInputs: Array<{ tokenId: string; name: string; save: NonNullable<ReturnType<typeof loadNpcTargetSaveInput>> }> = []
    for (const token of sceneResolution.targetTokens) {
      if (token.source === 'CHARACTER') {
        const snapshot = await loadPathfinder2eCombatant(token.characterId)
        if (!snapshot) return reply.status(400).send({ error: `Ficha invalida para o alvo ${token.name}` })
        targetSaveInputs.push({
          tokenId: token.id,
          name: token.name,
          save: {
            level: snapshot.level,
            rank: snapshot.savingThrows[profile.statistic].rank,
            attributeModifier: getPathfinder2eAttributeModifier(snapshot.attributes[PATHFINDER_2E_SAVING_THROW_ATTRIBUTE[profile.statistic]]),
            ruleElements: snapshot.ruleElements,
          },
        })
      } else {
        const save = loadNpcTargetSaveInput(token.bestiaryCreatureId, profile.statistic)
        if (!save) return reply.status(400).send({ error: `Criatura invalida para o alvo ${token.name}` })
        targetSaveInputs.push({ tokenId: token.id, name: token.name, save })
      }
    }

    const damageRoll = rollDiceFormula(profile.formula)
    const results = resolvePathfinder2eBasicSaveDamage({
      spellDC: entry.npcSpellDC,
      statistic: profile.statistic,
      baseDamage: damageRoll.total,
      targets: targetSaveInputs.map((target) => ({
        tokenId: target.tokenId,
        characterId: target.tokenId,
        name: target.name,
        level: target.save.level,
        rank: target.save.rank,
        attributeModifier: target.save.attributeModifier,
        ruleElements: target.save.ruleElements,
      })),
      rollD20,
    })

    const appliedResults: Array<{
      tokenId: string
      targetName: string
      saveStatistic: typeof profile.statistic
      naturalRoll: number
      saveTotal: number
      degree: (typeof results)[number]['degree']
      damageApplied: number
      resultingHealth: ReturnType<typeof toCombatantHealth>
    }> = []

    for (const result of results) {
      const applied = await presence?.applyResolvedCombatHealth({
        campaignId: sceneResolution.context.campaignId,
        sceneId: sceneResolution.context.sceneId,
        tokenId: result.tokenId,
        operation: 'DAMAGE',
        amount: result.damageApplied,
        actorUserId: payload.id,
        actorCharacterId: definition.id,
        actorName: definition.name,
        note: `Resolucao de ${spell?.name ?? 'magia'} (${result.degree})`,
      })
      if (!applied || !applied.ok) continue

      appliedResults.push({
        tokenId: result.tokenId,
        targetName: result.targetName,
        saveStatistic: result.saveStatistic,
        naturalRoll: result.naturalRoll,
        saveTotal: result.saveTotal,
        degree: result.degree,
        damageApplied: result.damageApplied,
        resultingHealth: toCombatantHealth(applied.health),
      })
    }

    if (presence) {
      try {
        await presence.appendSystemLogToActiveEncounter(
          sceneResolution.context.campaignId,
          sceneResolution.context.sceneId,
          npcResolveEncounterLogMessage(definition.name, spell?.name ?? 'Magia', appliedResults),
        )
      } catch (error) {
        req.log.error({ error }, 'Failed to publish NPC spell resolution log entry')
      }
    }

    return reply.send({
      spellName: spell?.name ?? 'Magia',
      spellDC: entry.npcSpellDC,
      damageRoll: { formula: diceFormulaLabel(profile.formula), total: damageRoll.total, rolls: damageRoll.rolls },
      damageType: profile.damageType,
      results: appliedResults,
    })
  })
}
