import './env'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import cookiePlugin from '@fastify/cookie'
import { registerAuthRoutes } from './modules/auth/routes'
import { registerAssetRoutes } from './modules/assets/routes'
import { setupCampaignPresence } from './modules/campaign-presence/socket'
import { registerCampaignRoutes } from './modules/campaigns/routes'
import { registerCampaignDiaryRoutes } from './modules/campaign_diary/routes'
import { registerCampaignSceneRoutes } from './modules/campaign_scene/routes'
import { registerChatRoutes } from './modules/chat/routes'
import { registerChatSocketHandlers } from './modules/chat/socket'
import { registerCharacterSheetRoutes } from './modules/game_systems/routes'
import { registerCharacterRoutes } from './modules/characters/routes'
import { registerTradeRoutes } from './modules/trade/routes'

const app = Fastify({ logger: true })

function parseOrigins(raw?: string) {
  if (!raw) return []
  return raw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
}

const allowedOrigins = new Set(parseOrigins(process.env.WEB_ORIGIN))

await app.register(cors, {
  origin: (origin, cb) => {
    if (!origin) return cb(null, true)

    const isLocalhost =
      origin.startsWith('http://localhost:') ||
      origin.startsWith('http://127.0.0.1:') ||
      origin.startsWith('http://0.0.0.0:')

    if (process.env.NODE_ENV !== 'production') {
      if (isLocalhost) return cb(null, true)
      if (allowedOrigins.has(origin)) return cb(null, true)
      return cb(null, true)
    }

    if (allowedOrigins.size === 0) return cb(null, false)
    return cb(null, allowedOrigins.has(origin))
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
})

await app.register(cookiePlugin)
await registerAssetRoutes(app)

const presence = setupCampaignPresence(app.server)

app.get('/api/health', async () => ({ ok: true }))

registerAuthRoutes(app)
registerCharacterRoutes(app)
registerCharacterSheetRoutes(app)
registerCampaignRoutes(app, presence)
registerCampaignDiaryRoutes(app)
registerCampaignSceneRoutes(app)
registerChatRoutes(app)
registerChatSocketHandlers(presence.io)
registerTradeRoutes(app, presence.io)

await app.listen({ port: Number(process.env.PORT ?? 3001), host: '0.0.0.0' })
