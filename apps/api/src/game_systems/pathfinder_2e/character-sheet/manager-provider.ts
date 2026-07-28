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

type StoredCampaignSheet = Awaited<ReturnType<typeof loadCampaignSheets>>[number]

function invalidEntry(entry: StoredCampaignSheet): GameSystemCharacterSheetManagerEntry {
  return {
    sheetId: entry.id,
    name: entry.actor.name,
    avatarUrl: entry.actor.avatarUrl,
    assignedUser: entry.actor.controllerMember
      ? { id: entry.actor.controllerMember.userId, label: entry.actor.controllerMember.user.email }
      : null,
    token: entry.actor.token,
    updatedAt: entry.updatedAt,
    subtitle: 'Ficha Pathfinder 2e inválida',
    badges: [],
    stats: [],
    warnings: ['A ficha armazenada não pôde ser migrada ou validada.'],
  }
}

async function loadCampaignSheets(campaignId: string) {
  return prisma.campaignCharacterSheet.findMany({
    where: {
      actor: { campaignId, archivedAt: null },
      systemKey: pathfinder2eCharacterSheetRuntimeAdapter.systemKey,
    },
    select: {
      id: true,
      data: true,
      updatedAt: true,
      actor: {
        select: {
          name: true,
          avatarUrl: true,
          controllerMember: {
            select: { userId: true, user: { select: { email: true } } },
          },
          token: { select: { id: true, name: true } },
        },
      },
    },
    orderBy: { createdAt: 'asc' },
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
    const entries = await loadCampaignSheets(campaignId)

    return entries.map((entry): GameSystemCharacterSheetManagerEntry => {
      try {
        const resolved = gameSystemRuntime.resolveCharacterSheet(
          pathfinder2eCharacterSheetRuntimeAdapter,
          entry.data,
        )
        const identity = resolved.data.identity

        return {
          sheetId: entry.id,
          name: entry.actor.name,
          avatarUrl: entry.actor.avatarUrl,
          assignedUser: entry.actor.controllerMember
            ? { id: entry.actor.controllerMember.userId, label: entry.actor.controllerMember.user.email }
            : null,
          token: entry.actor.token,
          updatedAt: entry.updatedAt,
          subtitle: compact([
            identity.class,
            identity.ancestry,
            identity.heritage,
          ]).join(' · ') || 'Identidade mecânica não preenchida',
          badges: compact([
            identity.deity ? `Divindade: ${identity.deity}` : null,
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
