import { PrismaClient, type Prisma } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to initialize PrismaClient')
}

const adapter = new PrismaPg(databaseUrl)

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
