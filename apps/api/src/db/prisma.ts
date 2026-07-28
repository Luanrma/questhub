import { PrismaClient, type Prisma } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to initialize PrismaClient')
}

const adapter = new PrismaPg(databaseUrl)

function withActiveActor(
  where: Prisma.CampaignCharacterSheetWhereInput | undefined,
): Prisma.CampaignCharacterSheetWhereInput {
  return {
    AND: [
      where ?? {},
      { actor: { archivedAt: null } },
    ],
  }
}

function createPrismaClient() {
  const client = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  })

  return client.$extends({
    query: {
      campaignActor: {
        async create({ args, query }) {
          const data = args.data as Prisma.CampaignActorCreateInput
          if (data.inventory === undefined) data.inventory = { create: {} }
          return query(args)
        },
        async createMany() {
          throw new Error('CampaignActor must be created individually with its Inventory aggregate')
        },
        async findFirst({ args, query }) {
          if (args.where?.archivedAt === undefined) {
            args.where = { ...args.where, archivedAt: null }
          }
          return query(args)
        },
        async findMany({ args, query }) {
          if (args.where?.archivedAt === undefined) {
            args.where = { ...args.where, archivedAt: null }
          }
          return query(args)
        },
      },
      campaignCharacterSheet: {
        async findFirst({ args, query }) {
          args.where = withActiveActor(args.where)
          return query(args)
        },
        async findMany({ args, query }) {
          args.where = withActiveActor(args.where)
          return query(args)
        },
      },
    },
  })
}

type QuestHubPrismaClient = ReturnType<typeof createPrismaClient>

declare global {
  // eslint-disable-next-line no-var
  var __prisma: QuestHubPrismaClient | undefined
}

export const prisma = globalThis.__prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.__prisma = prisma
