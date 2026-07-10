import type { Prisma } from '@prisma/client'
import { prisma } from '../../../db/prisma'
import { getCharacterSheetAdapter } from '../../game_systems/registry'
import { characterSheetEnvelopeSchema } from '../../game_systems/schemas'
import type { RawCombatHealth } from '../domain/types'

async function loadCharacterHealthContext(characterId: string) {
  const character = await prisma.character.findUnique({
    where: { id: characterId },
    select: { id: true, system: true, sheet: true },
  })
  if (!character || !character.system || !character.sheet) return null

  const adapter = getCharacterSheetAdapter(character.system)
  if (!adapter?.health) return null

  const envelope = characterSheetEnvelopeSchema.safeParse(character.sheet)
  if (!envelope.success) return null

  const systemData = envelope.data.data[adapter.dataKey]
  const sheet = adapter.schema.safeParse(systemData)
  if (!sheet.success) return null

  return { adapter, envelope: envelope.data, sheet: sheet.data }
}

export async function getCharacterHealth(characterId: string): Promise<RawCombatHealth | null> {
  const context = await loadCharacterHealthContext(characterId)
  if (!context?.adapter.health) return null

  const health = context.adapter.health.read(context.sheet)
  return {
    currentHitPoints: health.current,
    maxHitPoints: health.max,
    temporaryHitPoints: health.temporary,
  }
}

export async function writeCharacterHealth(characterId: string, health: RawCombatHealth): Promise<RawCombatHealth | null> {
  const context = await loadCharacterHealthContext(characterId)
  if (!context?.adapter.health) return null

  const nextSheet = context.adapter.health.write(context.sheet, {
    current: health.currentHitPoints,
    max: health.maxHitPoints,
    temporary: health.temporaryHitPoints,
  })

  const nextEnvelope = {
    ...context.envelope,
    data: { ...context.envelope.data, [context.adapter.dataKey]: nextSheet },
  }

  await prisma.character.update({
    where: { id: characterId },
    data: { sheet: nextEnvelope as unknown as Prisma.InputJsonValue },
  })

  return health
}
