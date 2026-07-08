import { prisma } from '../../../db/prisma'
import { getCharacterSheetAdapter } from '../../game_systems/registry'
import { characterSheetEnvelopeSchema } from '../../game_systems/schemas'

export async function getCharacterSpeedMeters(characterId: string): Promise<number | null> {
  const character = await prisma.character.findUnique({
    where: { id: characterId },
    select: { system: true, sheet: true },
  })
  if (!character || !character.system || !character.sheet) return null

  const adapter = getCharacterSheetAdapter(character.system)
  if (!adapter?.movement) return null

  const envelope = characterSheetEnvelopeSchema.safeParse(character.sheet)
  if (!envelope.success) return null

  const systemData = envelope.data.data[adapter.dataKey]
  const sheet = adapter.schema.safeParse(systemData)
  if (!sheet.success) return null

  const movement = adapter.movement.read(sheet.data)
  return Number.isFinite(movement.meters) && movement.meters >= 0 ? movement.meters : null
}
