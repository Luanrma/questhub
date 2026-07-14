import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../db/prisma'
import { requireAuth } from '../../http/auth'
import type { SceneAreaShape, ScenePoint } from '../../../../../packages/game-system-core/src/shared/scene-geometry'
import { distanceInCells, hexDistanceInCells } from '../../../../../packages/game-system-core/src/shared/scene-geometry'
import {
  buildPathfinder2eCastOptions,
} from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/cast-options'
import {
  applyPathfinder2eCast,
  applyPathfinder2eRefocus,
  applyPathfinder2eRest,
  appendPathfinder2eRecentCast,
  buildPathfinder2eCastRequestKey,
  findPathfinder2eRecentCast,
} from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/consume'
import { pathfinder2eCharacterSpellbookSchema, DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK } from '../../../../../packages/game-system-pathfinder-2e/src/server/character-spells/models'
import type { Pathfinder2eCharacterSpellbookData } from '../../../../../packages/game-system-pathfinder-2e/src/server/character-spells/models'
import { findPathfinder2eSpellDefinition } from '../../../../../packages/game-system-pathfinder-2e/src/server/spells'
import type { Pathfinder2eSpellDefinition } from '../../../../../packages/game-system-pathfinder-2e/src/server/spells'
import {
  parsePathfinder2eSpellRange,
  pathfinder2eFeetToCells,
} from '../../../../../packages/game-system-pathfinder-2e/src/shared/spell-area'
import { parsePathfinder2eSpellTargetCount } from '../../../../../packages/game-system-pathfinder-2e/src/shared/spell-target'
import { parsePathfinder2eCastActionCost } from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/action-cost'
import { pathfinder2eSheetSchema } from '../../../../../packages/game-system-pathfinder-2e/src/server/character-sheet/schema'
import type { Pathfinder2eProficiencyRank, Pathfinder2eSheet } from '../../../../../packages/game-system-pathfinder-2e/src/server/character-sheet/models'
import {
  pathfinder2eCharacterActiveEffectsSchema,
  DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS,
} from '../../../../../packages/game-system-pathfinder-2e/src/server/character-effects/models'
import type { UnknownRuleElement } from '../../../../../packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/flat-modifier'
import { calculateSpellDC } from '../../../../../packages/game-system-pathfinder-2e/src/shared/spell-dc'
import { PATHFINDER_2E_SAVING_THROW_ATTRIBUTE } from '../../../../../packages/game-system-pathfinder-2e/src/shared/saving-throws'
import type { Pathfinder2eSavingThrowKey } from '../../../../../packages/game-system-pathfinder-2e/src/shared/saving-throws'
import { findPathfinder2eBestiaryCreature } from '../../../../../packages/game-system-pathfinder-2e/src/server/bestiary'
import {
  getPathfinder2eAttributeModifier,
  isPathfinder2eAttributeAbbreviation,
  PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION,
} from '../../../../../packages/game-system-pathfinder-2e/src/shared/attribute-modifier'
import { resolvePathfinder2eSpellResolutionProfile } from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/resolution-profile'
import { resolvePathfinder2eBasicSaveDamage } from '../../../../../packages/game-system-pathfinder-2e/src/server/spell-casting/resolve'
import type { Pathfinder2eDegreeOfSuccess } from '../../../../../packages/game-system-pathfinder-2e/src/shared/degree-of-success'
import { rollD20, rollDiceFormula } from '../../../../../packages/game-system-core/src/server/dice/roll-dice-formula'
import type { DiceFormula } from '../../../../../packages/game-system-core/src/shared/dice/dice-formula'
import { toCombatantHealth } from '../combat/domain/health-rules'
import type { setupCampaignPresence } from '../campaign-presence/socket'
import { createAndBroadcastCampaignChatMessage } from '../chat/service'

const characterParamsSchema = z.object({
  characterId: z.string().trim().min(1, 'Personagem invalido'),
})

const resolveParamsSchema = z.object({
  characterId: z.string().trim().min(1, 'Personagem invalido'),
  spellId: z.string().trim().min(1, 'Magia invalida'),
})

const resolveBodySchema = z.object({
  clientResolveId: z.string().trim().min(1).max(80),
  clientCastId: z.string().trim().min(1).max(80),
  entryId: z.string().trim().min(1),
  sceneId: z.string().trim().min(1),
  casterTokenId: z.string().trim().min(1),
  targetTokenIds: z.array(z.string().trim().min(1)).min(1).max(20),
})

export const castSourceSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('prepared'), rank: z.number().int().min(0).max(10), slotIndex: z.number().int().min(0) }).strict(),
  z.object({ kind: z.literal('spontaneous'), rank: z.number().int().min(1).max(10) }).strict(),
  z.object({ kind: z.literal('focus') }).strict(),
  z.object({ kind: z.literal('innate') }).strict(),
  z.object({ kind: z.literal('cantrip') }).strict(),
])

const scenePointSchema = z.object({
  x: z.number().finite(),
  y: z.number().finite(),
}).strict()

const sceneAreaShapeSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('BURST'), center: scenePointSchema, radiusCells: z.number().finite().positive() }).strict(),
  z.object({ kind: z.literal('EMANATION'), center: scenePointSchema, radiusCells: z.number().finite().positive() }).strict(),
  z.object({ kind: z.literal('CONE'), origin: scenePointSchema, directionRadians: z.number().finite(), lengthCells: z.number().finite().positive() }).strict(),
  z.object({ kind: z.literal('LINE'), origin: scenePointSchema, directionRadians: z.number().finite(), lengthCells: z.number().finite().positive(), widthCells: z.number().finite().positive() }).strict(),
  z.object({ kind: z.literal('CUBE'), origin: scenePointSchema, sizeCells: z.number().finite().positive() }).strict(),
  z.object({ kind: z.literal('SQUARE'), origin: scenePointSchema, sizeCells: z.number().finite().positive() }).strict(),
  z.object({ kind: z.literal('CYLINDER'), center: scenePointSchema, radiusCells: z.number().finite().positive() }).strict(),
  z.object({ kind: z.literal('RING'), center: scenePointSchema, radiusCells: z.number().finite().positive(), thicknessCells: z.number().finite().positive() }).strict(),
])

export const castPlacementSchema = z.object({
  sceneId: z.string().trim().min(1),
  casterTokenId: z.string().trim().min(1),
  shape: sceneAreaShapeSchema,
}).strict()

export const castCasterSchema = z.object({
  sceneId: z.string().trim().min(1),
  casterTokenId: z.string().trim().min(1),
}).strict()

const castBodySchema = z.object({
  clientCastId: z.string().trim().min(1).max(80),
  revision: z.number().int().min(0),
  entryId: z.string().trim().min(1),
  spellId: z.string().trim().min(1),
  source: castSourceSchema,
  caster: castCasterSchema.optional(),
  placement: castPlacementSchema.optional(),
  targets: z.array(z.string().trim().min(1)).max(20).optional(),
})

const revisionBodySchema = z.object({
  revision: z.number().int().min(0),
})

async function getCharacterAccess(characterId: string, userId: string) {
  return prisma.character.findFirst({
    where: {
      id: characterId,
      deletedAt: null,
      OR: [
        { userId },
        {
          campaigns: {
            some: {
              campaign: {
                characters: {
                  some: { userId, role: 'MASTER', status: 'ACTIVE' },
                },
              },
            },
          },
        },
      ],
    },
    select: {
      id: true,
      userId: true,
      name: true,
      system: true,
      spellbook: {
        select: { system: true, version: true, revision: true, data: true },
      },
    },
  })
}

type SpellbookRecord = { revision: number; data: Pathfinder2eCharacterSpellbookData }

function parseSpellbookRecord(character: {
  system: string | null
  spellbook: { revision: number; data: unknown } | null
}): SpellbookRecord | { error: string } {
  if (character.system !== 'PATHFINDER_2E') return { error: 'Conjuracao disponivel apenas para Pathfinder 2e nesta fase' }
  if (!character.spellbook) return { revision: 0, data: DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK }

  const raw = (character.spellbook.data as Record<string, unknown> | null)?.pathfinder2e
  const parsed = pathfinder2eCharacterSpellbookSchema.safeParse(raw)
  if (!parsed.success) return { error: 'Livro de magias invalido' }
  return { revision: character.spellbook.revision, data: parsed.data }
}

async function persistSpellbook(
  characterId: string,
  currentRevision: number,
  nextData: Pathfinder2eCharacterSpellbookData,
): Promise<{ ok: true; revision: number } | { ok: false }> {
  const nextRevision = currentRevision + 1

  if (currentRevision === 0) {
    try {
      await prisma.characterSpellbook.create({
        data: {
          characterId,
          system: 'PATHFINDER_2E',
          version: 1,
          revision: nextRevision,
          data: { pathfinder2e: nextData } as never,
        },
      })
      return { ok: true, revision: nextRevision }
    } catch {
      return { ok: false }
    }
  }

  const result = await prisma.characterSpellbook.updateMany({
    where: { characterId, revision: currentRevision },
    data: { revision: nextRevision, data: { pathfinder2e: nextData } as never },
  })
  if (result.count === 0) return { ok: false }
  return { ok: true, revision: nextRevision }
}

const CONFLICT_MESSAGE = 'O livro de magias foi alterado por outra sessao. Recarregue antes de conjurar novamente.'
const IDEMPOTENCY_CONFLICT_MESSAGE = 'Este clientCastId ja foi usado para outra conjuracao.'
export const GEOMETRY_EPSILON = 0.001

export type CastPlacement = z.infer<typeof castPlacementSchema>
export type CastCaster = z.infer<typeof castCasterSchema>
export type CastSceneContext = {
  campaignId: string
  sceneId: string
  gridShape: 'SQUARE' | 'HEX'
  metersPerCell: number
  casterPosition: ScenePoint
}

// Tipos reais de area PF2e com cobertura hex (formas "redondas" — ver
// .ai/scene_geometry/specs.md secao 7). Deve espelhar
// HEX_SUPPORTED_SPELL_AREA_TYPES em CampaignOverviewPage.tsx.
export const HEX_SUPPORTED_SPELL_AREA_TYPES = new Set(['burst', 'emanation', 'cylinder'])

type SpellCastingPresence = Pick<
  ReturnType<typeof setupCampaignPresence>,
  | 'io'
  | 'appendSystemLogToActiveEncounter'
  | 'consumeEncounterActionsForCharacter'
  | 'restoreEncounterActionsForCharacter'
  | 'applyResolvedCombatHealth'
>

export function nearlyEqual(left: number, right: number) {
  return Math.abs(left - right) <= GEOMETRY_EPSILON
}

export function samePoint(left: ScenePoint, right: ScenePoint) {
  return nearlyEqual(left.x, right.x) && nearlyEqual(left.y, right.y)
}

function squareCenter(shape: Extract<SceneAreaShape, { kind: 'SQUARE' | 'CUBE' }>): ScenePoint {
  return {
    x: shape.origin.x + shape.sizeCells / 2,
    y: shape.origin.y + shape.sizeCells / 2,
  }
}

export function placementAnchor(shape: SceneAreaShape): ScenePoint {
  switch (shape.kind) {
    case 'BURST':
    case 'CYLINDER':
    case 'EMANATION':
    case 'RING':
      return shape.center
    case 'CONE':
    case 'LINE':
      return shape.origin
    case 'SQUARE':
    case 'CUBE':
      return squareCenter(shape)
  }
}

export function isExpectedShapeForArea(
  shape: SceneAreaShape,
  spell: Pathfinder2eSpellDefinition,
  metersPerCell: number,
  casterPosition: ScenePoint,
): boolean {
  if (!spell.area) return false
  const expectedCells = pathfinder2eFeetToCells(spell.area.value, metersPerCell)
  if (expectedCells <= 0) return false

  switch (spell.area.type) {
    case 'burst':
      return shape.kind === 'BURST' && nearlyEqual(shape.radiusCells, expectedCells)
    case 'cylinder':
      return shape.kind === 'CYLINDER' && nearlyEqual(shape.radiusCells, expectedCells)
    case 'emanation':
      return shape.kind === 'EMANATION' && nearlyEqual(shape.radiusCells, expectedCells) && samePoint(shape.center, casterPosition)
    case 'cone':
      return shape.kind === 'CONE' && nearlyEqual(shape.lengthCells, expectedCells) && samePoint(shape.origin, casterPosition)
    case 'line':
      return (
        shape.kind === 'LINE' &&
        nearlyEqual(shape.lengthCells, expectedCells) &&
        nearlyEqual(shape.widthCells, pathfinder2eFeetToCells(5, metersPerCell)) &&
        samePoint(shape.origin, casterPosition)
      )
    case 'square':
      return shape.kind === 'SQUARE' && nearlyEqual(shape.sizeCells, expectedCells)
    case 'cube':
      return shape.kind === 'CUBE' && nearlyEqual(shape.sizeCells, expectedCells)
    default:
      return false
  }
}

export function isWithinSpellRange(
  spell: Pathfinder2eSpellDefinition,
  metersPerCell: number,
  casterPosition: ScenePoint,
  shape: SceneAreaShape,
  gridShape: 'SQUARE' | 'HEX',
) {
  const range = parsePathfinder2eSpellRange(spell.range)
  if (!range || range.kind !== 'feet') return true

  const maxCells = pathfinder2eFeetToCells(range.feet, metersPerCell)
  if (maxCells <= 0) return true
  const measured =
    gridShape === 'HEX'
      ? hexDistanceInCells(casterPosition, placementAnchor(shape))
      : distanceInCells(casterPosition, placementAnchor(shape))
  return measured <= maxCells + GEOMETRY_EPSILON
}

async function resolveCastSceneContext(
  characterId: string,
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
        select: { id: true, characterId: true, positionX: true, positionY: true },
      },
    },
  })
  if (!scene) return { ok: false, error: 'Cena da conjuracao nao encontrada' }
  const campaignCharacter = await prisma.campaignCharacter.findFirst({
    where: { campaignId: scene.campaignId, characterId, status: 'ACTIVE' },
    select: { id: true },
  })
  if (!campaignCharacter) return { ok: false, error: 'Personagem nao pertence a campanha da cena' }

  const token = scene.tokens[0]
  if (!token || token.characterId !== characterId) return { ok: false, error: 'Token conjurador invalido para este personagem' }

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

async function validateCastPlacement(
  characterId: string,
  spellId: string,
  placement: CastPlacement | undefined,
): Promise<{ ok: true; context: CastSceneContext | null } | { ok: false; error: string }> {
  const spell = findPathfinder2eSpellDefinition(spellId)
  if (!spell?.area) {
    if (placement) return { ok: false, error: 'Esta magia nao possui area para posicionar' }
    return { ok: true, context: null }
  }

  if (!placement) return { ok: false, error: 'Posicionamento de area obrigatorio para esta magia' }

  const resolved = await resolveCastSceneContext(characterId, placement)
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

export function targetCountLabel(profile: Extract<ReturnType<typeof parsePathfinder2eSpellTargetCount>, { kind: 'count' }>): string {
  return profile.min === profile.max ? `${profile.min} alvo(s)` : `entre ${profile.min} e ${profile.max} alvos`
}

/**
 * Resolve o contexto de cena para magias SEM area (area ja e resolvida por
 * `validateCastPlacement`). Quando a magia tem um perfil de contagem de
 * alvo parseavel (`parsePathfinder2eSpellTargetCount`), exige `targets`
 * (tokens da propria cena) dentro da contagem e dentro do alcance da
 * magia; quando nao tem, comporta-se como o `resolveCastSceneContext`
 * antigo (contexto so para economia de acao/anuncio, sem exigir alvos).
 * Retorna sempre a mesma forma `{ok:true, context, targetNames}|{ok:false,
 * error}` — nunca o `CastSceneContext` cru, para nao repetir o bug de
 * forma inconsistente corrigido nesta rodada.
 */
async function resolveNonAreaCastContext(
  characterId: string,
  spellId: string,
  caster: CastCaster | undefined,
  targets: string[] | undefined,
): Promise<{ ok: true; context: CastSceneContext | null; targetNames: string[] } | { ok: false; error: string }> {
  const spell = findPathfinder2eSpellDefinition(spellId)
  const targetProfile = parsePathfinder2eSpellTargetCount(spell?.target)

  if (targetProfile.kind !== 'count') {
    if (!caster) return { ok: true, context: null, targetNames: [] }
    const resolved = await resolveCastSceneContext(characterId, caster)
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

  const campaignCharacter = await prisma.campaignCharacter.findFirst({
    where: { campaignId: scene.campaignId, characterId, status: 'ACTIVE' },
    select: { id: true },
  })
  if (!campaignCharacter) return { ok: false, error: 'Personagem nao pertence a campanha da cena' }

  const casterToken = scene.tokens.find((token) => token.id === caster.casterTokenId)
  if (!casterToken || casterToken.characterId !== characterId) {
    return { ok: false, error: 'Token conjurador invalido para este personagem' }
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

function getActionCost(spellId: string): number | null {
  const spell = findPathfinder2eSpellDefinition(spellId)
  const parsed = parsePathfinder2eCastActionCost(spell?.time)
  if (parsed.kind !== 'actions') return null
  return parsed.actions
}

const VALID_PROFICIENCY_RANKS = new Set<number>([0, 2, 4, 6, 8])

function toProficiencyRank(value: number): Pathfinder2eProficiencyRank | null {
  return VALID_PROFICIENCY_RANKS.has(value) ? (value as Pathfinder2eProficiencyRank) : null
}

export type Pathfinder2eCombatantSnapshot = {
  level: number
  savingThrows: Pathfinder2eSheet['savingThrows']
  attributes: Pathfinder2eSheet['attributes']
  ruleElements: UnknownRuleElement[]
}

/**
 * Le e valida a ficha PF2e + efeitos ativos de um personagem qualquer da
 * campanha (conjurador ou alvo) diretamente do banco — primeiro consumidor
 * server-side de `calculateSavingThrow`/`calculateSpellDC`
 * (.ai/game_systems/pathfinder_2e/resolution/skills.md secao 2), antes so
 * calculados no navegador para exibicao.
 */
export async function loadPathfinder2eCombatant(characterId: string): Promise<Pathfinder2eCombatantSnapshot | null> {
  const character = await prisma.character.findUnique({
    where: { id: characterId },
    select: {
      system: true,
      sheet: true,
      activeEffects: { select: { data: true } },
    },
  })
  if (!character || character.system !== 'PATHFINDER_2E') return null

  const sheetEnvelope = character.sheet as { data?: Record<string, unknown> } | null
  const parsedSheet = pathfinder2eSheetSchema.safeParse(sheetEnvelope?.data?.pathfinder2e)
  if (!parsedSheet.success) return null

  const effectsEnvelopeData = character.activeEffects?.data as { pathfinder2e?: unknown } | undefined
  const parsedEffects = pathfinder2eCharacterActiveEffectsSchema.safeParse(
    effectsEnvelopeData?.pathfinder2e ?? DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS,
  )
  const ruleElements = parsedEffects.success ? parsedEffects.data.effects.flatMap((effect) => effect.rules) : []

  return {
    level: parsedSheet.data.identity.level,
    savingThrows: parsedSheet.data.savingThrows,
    attributes: parsedSheet.data.attributes,
    ruleElements,
  }
}

/**
 * Alvo resolvido de uma cena de resolucao — `source` discrimina de onde vem
 * o salvamento (ficha de personagem vs. valor fixo do catalogo de
 * bestiario, ver `loadNpcTargetSaveInput`). Estende a fatia PC-only original
 * (.ai/game_systems/pathfinder_2e/resolution/specs.md secao 7.1).
 */
export type ResolvedTargetToken =
  | { id: string; source: 'CHARACTER'; characterId: string; name: string }
  | { id: string; source: 'BESTIARY'; bestiaryCreatureId: string; name: string }

/**
 * Resolve a cena, o token conjurador e a lista de tokens-alvo para a rota de
 * resolucao — mesma politica de alcance de `resolveNonAreaCastContext`.
 * Aceita conjurador personagem OU NPC (`casterIdentity`) e alvo
 * `source: 'CHARACTER'` OU `source: 'BESTIARY'`.
 */
export async function resolveSpellResolutionScene(
  casterIdentity: { kind: 'character'; characterId: string } | { kind: 'npc'; campaignId: string; definitionId: string },
  spell: Pathfinder2eSpellDefinition | null,
  caster: CastCaster,
  targetTokenIds: string[],
): Promise<
  | { ok: true; context: CastSceneContext; targetTokens: ResolvedTargetToken[] }
  | { ok: false; error: string }
> {
  const targetProfile = parsePathfinder2eSpellTargetCount(spell?.target)
  if (targetProfile.kind === 'count' && (targetTokenIds.length < targetProfile.min || targetTokenIds.length > targetProfile.max)) {
    return { ok: false, error: `Esta magia exige ${targetCountLabel(targetProfile)}` }
  }

  const scene = await prisma.campaignScene.findUnique({
    where: { id: caster.sceneId },
    select: {
      id: true,
      campaignId: true,
      gridShape: true,
      metersPerCell: true,
      tokens: {
        where: { id: { in: [caster.casterTokenId, ...targetTokenIds] } },
        select: {
          id: true,
          characterId: true,
          bestiaryCreatureId: true,
          campaignNpcDefinitionId: true,
          source: true,
          name: true,
          positionX: true,
          positionY: true,
          character: { select: { name: true } },
        },
      },
    },
  })
  if (!scene) return { ok: false, error: 'Cena da resolucao nao encontrada' }

  const casterToken = scene.tokens.find((token) => token.id === caster.casterTokenId)
  if (casterIdentity.kind === 'character') {
    const campaignCharacter = await prisma.campaignCharacter.findFirst({
      where: { campaignId: scene.campaignId, characterId: casterIdentity.characterId, status: 'ACTIVE' },
      select: { id: true },
    })
    if (!campaignCharacter) return { ok: false, error: 'Personagem nao pertence a campanha da cena' }
    if (!casterToken || casterToken.characterId !== casterIdentity.characterId) {
      return { ok: false, error: 'Token conjurador invalido para este personagem' }
    }
  } else {
    if (scene.campaignId !== casterIdentity.campaignId) return { ok: false, error: 'NPC nao pertence a campanha da cena' }
    if (!casterToken || casterToken.campaignNpcDefinitionId !== casterIdentity.definitionId) {
      return { ok: false, error: 'Token conjurador invalido para este NPC' }
    }
  }

  const targetTokens = targetTokenIds.map((id) => scene.tokens.find((token) => token.id === id))
  const resolvedTargets: ResolvedTargetToken[] = []
  for (const token of targetTokens) {
    if (!token) return { ok: false, error: 'Alvo invalido: token nao encontrado na cena' }
    if (token.source === 'CHARACTER' && token.characterId) {
      resolvedTargets.push({ id: token.id, source: 'CHARACTER', characterId: token.characterId, name: token.name ?? token.character?.name ?? 'Alvo' })
    } else if (token.source === 'BESTIARY' && token.bestiaryCreatureId) {
      resolvedTargets.push({ id: token.id, source: 'BESTIARY', bestiaryCreatureId: token.bestiaryCreatureId, name: token.name ?? 'Alvo' })
    } else {
      return { ok: false, error: 'Alvo invalido: token sem personagem ou criatura associada' }
    }
  }

  const casterPosition = { x: casterToken!.positionX, y: casterToken!.positionY }
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
    targetTokens: resolvedTargets,
  }
}

/**
 * Entrada de `calculateSavingThrow` para um alvo NPC — usa o salvamento fixo
 * do catalogo (`Pathfinder2eBestiarySheet.saves`, estilo statblock impresso)
 * como "atributo", com proficiencia zerada. Nao e uma formula nova, so um
 * reuso de `calculateSavingThrow` com dado de entrada diferente — ver
 * .ai/game_systems/pathfinder_2e/npc_spellcasting/skills.md secao 2.
 */
export function loadNpcTargetSaveInput(
  bestiaryCreatureId: string,
  statistic: Pathfinder2eSavingThrowKey,
): { level: number; rank: Pathfinder2eProficiencyRank; attributeModifier: number; ruleElements: UnknownRuleElement[] } | null {
  const creature = findPathfinder2eBestiaryCreature(bestiaryCreatureId)
  if (!creature) return null
  return { level: 0, rank: 0, attributeModifier: creature.sheet.saves[statistic], ruleElements: [] }
}

async function replayRecentCast(
  characterId: string,
  userId: string,
  clientCastId: string,
  requestKey: string,
) {
  const character = await getCharacterAccess(characterId, userId)
  if (!character) return null
  const record = parseSpellbookRecord(character)
  if ('error' in record) return null

  const recentCast = findPathfinder2eRecentCast(record.data, clientCastId)
  if (!recentCast || recentCast.requestKey !== requestKey) return null
  return recentCast.response
}

function targetsSuffix(targetNames: string[]) {
  return targetNames.length > 0 ? ` em ${targetNames.join(', ')}` : ''
}

function castAnnouncementContent(spellName: string, consumed: string, targetNames: string[]) {
  return `Conjurou ${spellName}${targetsSuffix(targetNames)} (${consumed}).`
}

function castEncounterLogMessage(actorName: string, spellName: string, consumed: string, targetNames: string[]) {
  return `${actorName} conjurou ${spellName}${targetsSuffix(targetNames)} (${consumed}).`
}

function diceFormulaLabel(formula: DiceFormula): string {
  if (formula.kind === 'flat') return String(formula.amount)
  return formula.bonus > 0 ? `${formula.count}d${formula.sides}+${formula.bonus}` : `${formula.count}d${formula.sides}`
}

function resolveEffectiveCastRank(
  source: z.infer<typeof castSourceSchema>,
  spell: Pathfinder2eSpellDefinition | null,
  casterLevel: number | null,
): number | undefined {
  if (source.kind === 'prepared' || source.kind === 'spontaneous') return source.rank

  const baseRank = spell?.rank ?? 0
  if (source.kind === 'cantrip' || source.kind === 'focus') {
    if (casterLevel === null) return baseRank
    return Math.min(10, Math.max(baseRank, Math.ceil(casterLevel / 2)))
  }

  return baseRank
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

function resolveResultsSummary(results: Array<{ targetName: string; degree: Pathfinder2eDegreeOfSuccess; damageApplied: number }>): string {
  return results.map((result) => `${result.targetName} (${degreeLabelPt(result.degree)}, ${result.damageApplied} de dano)`).join('; ')
}

function resolveAnnouncementContent(spellName: string, results: Array<{ targetName: string; degree: Pathfinder2eDegreeOfSuccess; damageApplied: number }>) {
  if (results.length === 0) return `Resolveu ${spellName}, mas nenhum alvo recebeu o resultado.`
  return `Resolveu ${spellName}: ${resolveResultsSummary(results)}.`
}

function resolveEncounterLogMessage(
  actorName: string,
  spellName: string,
  results: Array<{ targetName: string; degree: Pathfinder2eDegreeOfSuccess; damageApplied: number }>,
) {
  if (results.length === 0) return `${actorName} resolveu ${spellName}, mas nenhum alvo recebeu o resultado.`
  return `${actorName} resolveu ${spellName}: ${resolveResultsSummary(results)}.`
}

export function registerSpellCastingRoutes(app: FastifyInstance, presence?: SpellCastingPresence) {
  app.get('/api/characters/:characterId/cast-options', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const record = parseSpellbookRecord(character)
    if ('error' in record) return reply.status(400).send({ error: record.error })

    return reply.send({
      characterId: character.id,
      revision: record.revision,
      entries: buildPathfinder2eCastOptions(record.data, findPathfinder2eSpellDefinition),
    })
  })

  app.post('/api/characters/:characterId/cast', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = castBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const record = parseSpellbookRecord(character)
    if ('error' in record) return reply.status(400).send({ error: record.error })

    const castRequest = {
      entryId: body.data.entryId,
      spellId: body.data.spellId,
      source: body.data.source,
    }
    const requestKey = buildPathfinder2eCastRequestKey(castRequest, {
      caster: body.data.caster ?? null,
      placement: body.data.placement ?? null,
      targets: body.data.targets ?? null,
    })
    const existingCast = findPathfinder2eRecentCast(record.data, body.data.clientCastId)
    if (existingCast) {
      if (existingCast.requestKey !== requestKey) {
        return reply.status(409).send({ error: IDEMPOTENCY_CONFLICT_MESSAGE })
      }
      return reply.send(existingCast.response)
    }

    if (body.data.revision !== record.revision) {
      return reply.status(409).send({ error: CONFLICT_MESSAGE })
    }

    const placementValidation = await validateCastPlacement(character.id, body.data.spellId, body.data.placement)
    if (!placementValidation.ok) return reply.status(400).send({ error: placementValidation.error })

    let castContext: { ok: true; context: CastSceneContext } | null = null
    let targetNames: string[] = []
    if (placementValidation.context) {
      castContext = { ok: true, context: placementValidation.context }
    } else {
      const targetsResolution = await resolveNonAreaCastContext(character.id, body.data.spellId, body.data.caster, body.data.targets)
      if (!targetsResolution.ok) return reply.status(400).send({ error: targetsResolution.error })
      if (targetsResolution.context) castContext = { ok: true, context: targetsResolution.context }
      targetNames = targetsResolution.targetNames
    }

    const result = applyPathfinder2eCast(record.data, castRequest)
    if (!result.ok) return reply.status(400).send({ error: result.error })

    const actionCost = getActionCost(body.data.spellId)
    let consumedEncounterActions: { campaignId: string; sceneId: string; characterId: string; actionCost: number } | null = null
    if (actionCost !== null && presence && castContext?.ok) {
      const actionConsumption = {
        campaignId: castContext.context.campaignId,
        sceneId: castContext.context.sceneId,
        characterId: character.id,
        actionCost,
      }
      const consumedActions = await presence.consumeEncounterActionsForCharacter(actionConsumption)
      if (!consumedActions.ok) return reply.status(400).send({ error: consumedActions.error })
      consumedEncounterActions = actionConsumption
    }

    const nextRevision = record.revision + 1
    const spell = findPathfinder2eSpellDefinition(body.data.spellId)
    const casterSnapshot = await loadPathfinder2eCombatant(character.id)
    const castRank = resolveEffectiveCastRank(body.data.source, spell ?? null, casterSnapshot?.level ?? null)
    const response = {
      characterId: character.id,
      revision: nextRevision,
      spellName: result.spellName,
      consumed: result.consumed,
      entryId: body.data.entryId,
      spellId: body.data.spellId,
      ...(castRank !== undefined ? { castRank } : {}),
    }
    const nextSpellbook = appendPathfinder2eRecentCast(result.spellbook, {
      clientCastId: body.data.clientCastId,
      requestKey,
      response,
      createdAt: new Date().toISOString(),
    })

    const persisted = await persistSpellbook(character.id, record.revision, nextSpellbook)
    if (!persisted.ok) {
      if (consumedEncounterActions) await presence?.restoreEncounterActionsForCharacter(consumedEncounterActions)
      const replay = await replayRecentCast(character.id, payload.id, body.data.clientCastId, requestKey)
      if (replay) return reply.send(replay)
      return reply.status(409).send({ error: CONFLICT_MESSAGE })
    }

    if (presence && castContext?.ok) {
      try {
        const chatMessage = await createAndBroadcastCampaignChatMessage({
          io: presence.io,
          campaignId: castContext.context.campaignId,
          characterId: character.id,
          userId: payload.id,
          content: castAnnouncementContent(result.spellName, result.consumed, targetNames),
        })
        if (chatMessage) {
          await presence.appendSystemLogToActiveEncounter(
            castContext.context.campaignId,
            castContext.context.sceneId,
            castEncounterLogMessage(chatMessage.characterName, result.spellName, result.consumed, targetNames),
          )
        }
      } catch (error) {
        req.log.error({ error }, 'Failed to publish spell cast announcement')
      }
    }

    return reply.send(response)
  })

  app.post('/api/characters/:characterId/spells/:spellId/resolve', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = resolveParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Parametros invalidos' })

    const body = resolveBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const record = parseSpellbookRecord(character)
    if ('error' in record) return reply.status(400).send({ error: record.error })

    const recentCast = findPathfinder2eRecentCast(record.data, body.data.clientCastId)
    if (!recentCast) {
      return reply.status(400).send({ error: 'Nenhuma conjuracao recente encontrada para este clientCastId' })
    }
    if (recentCast.response.entryId && recentCast.response.entryId !== body.data.entryId) {
      return reply.status(400).send({ error: 'Este clientCastId pertence a outra entrada de conjuracao' })
    }
    if (recentCast.response.spellId && recentCast.response.spellId !== params.data.spellId) {
      return reply.status(400).send({ error: 'Este clientCastId pertence a outra magia' })
    }

    const entry = record.data.entries.find((candidate) => candidate.id === body.data.entryId)
    if (!entry) return reply.status(400).send({ error: 'Entrada de conjuracao nao encontrada' })
    if (!isPathfinder2eAttributeAbbreviation(entry.ability)) {
      return reply.status(400).send({ error: 'Atributo de conjuracao invalido' })
    }
    const entryRank = toProficiencyRank(entry.proficiencyRank)
    if (entryRank === null) return reply.status(400).send({ error: 'Proficiencia de conjuracao invalida' })

    const spell = findPathfinder2eSpellDefinition(params.data.spellId)
    const profile = resolvePathfinder2eSpellResolutionProfile(spell ?? null, {
      effectiveRank: recentCast.response.castRank,
    })
    if (profile.kind !== 'basicSaveDamage') {
      return reply.status(400).send({ error: 'Esta magia nao tem uma resolucao de dano com salvamento basico suportada nesta fase' })
    }

    const sceneResolution = await resolveSpellResolutionScene(
      { kind: 'character', characterId: character.id },
      spell,
      { sceneId: body.data.sceneId, casterTokenId: body.data.casterTokenId },
      body.data.targetTokenIds,
    )
    if (!sceneResolution.ok) return reply.status(400).send({ error: sceneResolution.error })

    const casterSnapshot = await loadPathfinder2eCombatant(character.id)
    if (!casterSnapshot) return reply.status(400).send({ error: 'Ficha do conjurador invalida' })

    const spellDC = calculateSpellDC({
      level: casterSnapshot.level,
      rank: entryRank,
      attributeModifier: getPathfinder2eAttributeModifier(
        casterSnapshot.attributes[PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION[entry.ability]],
      ),
      ruleElements: casterSnapshot.ruleElements,
    })

    const targetSaveInputs: Array<{ tokenId: string; name: string; save: ReturnType<typeof loadNpcTargetSaveInput> }> = []
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
      spellDC: spellDC.total,
      statistic: profile.statistic,
      baseDamage: damageRoll.total,
      targets: targetSaveInputs.map((target) => ({
        tokenId: target.tokenId,
        characterId: target.tokenId,
        name: target.name,
        level: target.save!.level,
        rank: target.save!.rank,
        attributeModifier: target.save!.attributeModifier,
        ruleElements: target.save!.ruleElements,
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
        actorCharacterId: character.id,
        actorName: character.name,
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
        const chatMessage = await createAndBroadcastCampaignChatMessage({
          io: presence.io,
          campaignId: sceneResolution.context.campaignId,
          characterId: character.id,
          userId: payload.id,
          content: resolveAnnouncementContent(spell?.name ?? 'Magia', appliedResults),
        })
        if (chatMessage) {
          await presence.appendSystemLogToActiveEncounter(
            sceneResolution.context.campaignId,
            sceneResolution.context.sceneId,
            resolveEncounterLogMessage(chatMessage.characterName, spell?.name ?? 'Magia', appliedResults),
          )
        }
      } catch (error) {
        req.log.error({ error }, 'Failed to publish spell resolution announcement')
      }
    }

    return reply.send({
      spellName: spell?.name ?? 'Magia',
      spellDC: spellDC.total,
      damageRoll: { formula: diceFormulaLabel(profile.formula), total: damageRoll.total, rolls: damageRoll.rolls },
      damageType: profile.damageType,
      results: appliedResults,
    })
  })

  app.post('/api/characters/:characterId/spellbook/rest', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = revisionBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const record = parseSpellbookRecord(character)
    if ('error' in record) return reply.status(400).send({ error: record.error })
    if (body.data.revision !== record.revision) return reply.status(409).send({ error: CONFLICT_MESSAGE })

    const persisted = await persistSpellbook(character.id, record.revision, applyPathfinder2eRest(record.data))
    if (!persisted.ok) return reply.status(409).send({ error: CONFLICT_MESSAGE })

    return reply.send({ characterId: character.id, revision: persisted.revision })
  })

  app.post('/api/characters/:characterId/spellbook/refocus', async (req, reply) => {
    const payload = requireAuth(req, reply)
    if (!payload) return

    const params = characterParamsSchema.safeParse(req.params)
    if (!params.success) return reply.status(400).send({ error: 'Personagem invalido' })

    const body = revisionBodySchema.safeParse(req.body)
    if (!body.success) return reply.status(400).send({ error: 'Payload invalido' })

    const character = await getCharacterAccess(params.data.characterId, payload.id)
    if (!character) return reply.status(404).send({ error: 'Personagem nao encontrado' })

    const record = parseSpellbookRecord(character)
    if ('error' in record) return reply.status(400).send({ error: record.error })
    if (body.data.revision !== record.revision) return reply.status(409).send({ error: CONFLICT_MESSAGE })

    const persisted = await persistSpellbook(character.id, record.revision, applyPathfinder2eRefocus(record.data))
    if (!persisted.ok) return reply.status(409).send({ error: CONFLICT_MESSAGE })

    return reply.send({ characterId: character.id, revision: persisted.revision })
  })
}
