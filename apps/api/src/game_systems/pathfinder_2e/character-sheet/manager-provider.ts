import { prisma } from '../../../db/prisma'
import type {
  GameSystemCharacterSheetManagerEntry,
  GameSystemCharacterSheetManagerProvider,
} from '../../character-sheets'
import { gameSystemRuntime } from '../../runtime/game-system-runtime'
import { pathfinder2eCharacterSheetRuntimeAdapter } from './adapter'

function compact(values: Array<string | null | undefined>) {
  return values.filter((value): value is string => Boolean(value))
}

function invalidEntry(
  entry: Awaited<ReturnType<typeof loadCampaignCharacters>>[number],
): GameSystemCharacterSheetManagerEntry {
  return {
    characterId: entry.character.id,
    name: entry.character.name,
    avatarUrl: entry.character.avatarUrl,
    role: entry.role,
    status: entry.status,
    ownerLabel: entry.character.user.email,
    hasSheet: true,
    updatedAt: entry.character.sheet?.updatedAt ?? null,
    token: entry.character.campaignTokens[0] ?? null,
    subtitle: 'Ficha Pathfinder 2e inválida',
    badges: [],
    stats: [],
    warnings: ['A ficha armazenada não pôde ser migrada ou validada.'],
  }
}

async function loadCampaignCharacters(campaignId: string) {
  return prisma.campaignCharacter.findMany({
    where: {
      campaignId,
      character: {
        deletedAt: null,
        sheet: { isNot: null },
      },
    },
    select: {
      role: true,
      status: true,
      createdAt: true,
      character: {
        select: {
          id: true,
          name: true,
          avatarUrl: true,
          user: { select: { email: true } },
          sheet: {
            select: {
              systemKey: true,
              schemaVersion: true,
              data: true,
              updatedAt: true,
            },
          },
          campaignTokens: {
            where: { campaignId },
            select: { id: true, name: true },
            take: 1,
          },
        },
      },
    },
    orderBy: [
      { role: 'asc' },
      { createdAt: 'asc' },
    ],
  })
}

export const pathfinder2eCharacterSheetManagerProvider: GameSystemCharacterSheetManagerProvider = {
  createDefault() {
    const resolved = gameSystemRuntime.resolveCharacterSheet(
      pathfinder2eCharacterSheetRuntimeAdapter,
      undefined,
    )

    return {
      systemKey: resolved.systemKey,
      schemaVersion: resolved.schemaVersion,
      data: resolved.data,
    }
  },

  async list({ campaignId }) {
    const entries = await loadCampaignCharacters(campaignId)

    return entries.map((entry): GameSystemCharacterSheetManagerEntry => {
      try {
        const resolved = gameSystemRuntime.resolveCharacterSheet(
          pathfinder2eCharacterSheetRuntimeAdapter,
          entry.character.sheet?.data,
        )
        const identity = resolved.data.identity

        return {
          characterId: entry.character.id,
          name: entry.character.name,
          avatarUrl: entry.character.avatarUrl,
          role: entry.role,
          status: entry.status,
          ownerLabel: entry.character.user.email,
          hasSheet: true,
          updatedAt: entry.character.sheet?.updatedAt ?? null,
          token: entry.character.campaignTokens[0] ?? null,
          subtitle: compact([
            identity.class,
            identity.ancestry,
            identity.heritage,
          ]).join(' · ') || 'Identidade mecânica não preenchida',
          badges: compact([
            identity.deity ? `Divindade: ${identity.deity}` : null,
            entry.character.campaignTokens[0] ? `Token: ${entry.character.campaignTokens[0].name}` : 'Sem Token',
          ]),
          stats: [
            { label: 'Nível', value: String(identity.level) },
            { label: 'PV', value: `${resolved.data.hitPoints.current}/${resolved.derived.hitPoints.maximum}` },
            { label: 'CA', value: String(resolved.derived.armorClass.value) },
          ],
          warnings: resolved.warnings,
        }
      } catch {
        return invalidEntry(entry)
      }
    })
  },
}
