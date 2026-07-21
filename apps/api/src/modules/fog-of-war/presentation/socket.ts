import type { Server as SocketIOServer } from 'socket.io'
import type { FogService, FogServiceResult } from '../application/fog-service'
import { campaignRoom } from '../../campaign-presence/rooms'
import {
  fogExplorationResetSchema,
  fogExplorationSyncSchema,
  fogLightToggleSocketSchema,
  fogSceneConfigureSocketSchema,
  fogTokenVisionSocketSchema,
} from './validation'

type FogAck = (response: { ok: true; data?: unknown } | { ok: false; error: { code: string; message: string } }) => void

function acknowledge(ack: FogAck | undefined, result: FogServiceResult<unknown>) {
  if (!ack) return
  if (result.ok) ack({ ok: true, data: result.data })
  else ack({ ok: false, error: { code: result.code, message: result.message } })
}

export function registerFogSocketHandlers(io: SocketIOServer, service: FogService) {
  io.on('connection', (socket) => {
    const user = socket.data.user as { id: string } | undefined
    if (!user) return

    socket.on('fog:scene:configure', async (input: unknown, ack?: FogAck) => {
      const parsed = fogSceneConfigureSocketSchema.safeParse(input)
      if (!parsed.success) return ack?.({ ok: false, error: { code: 'INVALID_PAYLOAD', message: 'Configuracao de FOG invalida' } })
      const result = await service.configureScene({ ...parsed.data, userId: user.id })
      acknowledge(ack, result)
      if (result.ok) io.to(campaignRoom(parsed.data.campaignId)).emit('fog:scene:configured', { campaignId: parsed.data.campaignId, sceneId: parsed.data.sceneId, ...result.data })
    })

    socket.on('fog:token:vision:configure', async (input: unknown, ack?: FogAck) => {
      const parsed = fogTokenVisionSocketSchema.safeParse(input)
      if (!parsed.success) return ack?.({ ok: false, error: { code: 'INVALID_PAYLOAD', message: 'Configuracao de visao invalida' } })
      const result = await service.configureTokenVision({ ...parsed.data, userId: user.id })
      acknowledge(ack, result)
      if (result.ok) io.to(campaignRoom(parsed.data.campaignId)).emit('fog:token:vision:configured', { campaignId: parsed.data.campaignId, tokenId: parsed.data.tokenId, ...result.data })
    })

    socket.on('fog:light:toggle', async (input: unknown, ack?: FogAck) => {
      const parsed = fogLightToggleSocketSchema.safeParse(input)
      if (!parsed.success) return ack?.({ ok: false, error: { code: 'INVALID_PAYLOAD', message: 'Comando de luz invalido' } })
      const result = await service.toggleTokenLight({ ...parsed.data, userId: user.id })
      acknowledge(ack, result)
      if (result.ok) io.to(campaignRoom(parsed.data.campaignId)).emit('fog:light:toggled', { campaignId: parsed.data.campaignId, tokenId: parsed.data.tokenId, ...result.data })
    })

    socket.on('fog:exploration:sync', async (input: unknown, ack?: FogAck) => {
      const parsed = fogExplorationSyncSchema.safeParse(input)
      if (!parsed.success) return ack?.({ ok: false, error: { code: 'INVALID_PAYLOAD', message: 'Mascara invalida' } })
      const result = await service.syncExploration({
        campaignId: parsed.data.campaignId,
        sceneId: parsed.data.sceneId,
        tokenId: parsed.data.tokenId,
        userId: user.id,
        exploration: parsed.data,
      })
      acknowledge(ack, result)
      if (result.ok) socket.emit('fog:exploration:synced', { sceneId: parsed.data.sceneId, tokenId: parsed.data.tokenId, ...result.data })
    })

    socket.on('fog:exploration:reset', async (input: unknown, ack?: FogAck) => {
      const parsed = fogExplorationResetSchema.safeParse(input)
      if (!parsed.success) return ack?.({ ok: false, error: { code: 'INVALID_PAYLOAD', message: 'Reset invalido' } })
      const result = await service.resetExploration({ ...parsed.data, userId: user.id })
      acknowledge(ack, result)
      if (result.ok) io.to(campaignRoom(parsed.data.campaignId)).emit('fog:exploration:reset', { campaignId: parsed.data.campaignId, sceneId: parsed.data.sceneId, ...result.data })
    })
  })
}
