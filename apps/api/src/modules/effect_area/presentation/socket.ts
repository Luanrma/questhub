import type { Server } from 'socket.io'
import { campaignRoom } from '../../campaign-presence/rooms'
import { areaPreviewUpdateSchema } from './validation'

type AreaPreviewRealtimeDeps = {
  getCampaignSessionState: (campaignId: string) => 'ACTIVE' | 'PAUSED' | null
  getVisibleSceneId: (campaignId: string, socketId: string) => Promise<string | null>
}

type AreaPreviewAck = (response:
  | { ok: true }
  | { ok: false; error: { code: string; message: string } }
) => void

export function registerEffectAreaSocketHandlers(io: Server, deps: AreaPreviewRealtimeDeps) {
  io.on('connection', (socket) => {
    let publishedPreview: { campaignId: string; sceneId: string } | null = null

    async function emitToScene(event: 'area-preview:changed' | 'area-preview:cleared', payload: Record<string, unknown>) {
      const target = publishedPreview
      if (!target) return
      const recipients = await io.in(campaignRoom(target.campaignId)).fetchSockets()
      await Promise.all(recipients.map(async (recipient) => {
        if (recipient.id === socket.id) return
        const visibleSceneId = await deps.getVisibleSceneId(target.campaignId, recipient.id)
        if (visibleSceneId === target.sceneId) recipient.emit(event, payload)
      }))
    }

    async function clearPublishedPreview() {
      if (!publishedPreview) return
      const previous = publishedPreview
      await emitToScene('area-preview:cleared', {
        campaignId: previous.campaignId,
        sceneId: previous.sceneId,
        previewId: socket.id,
      })
      publishedPreview = null
    }

    socket.on('area-preview:update', async (input: unknown, ack?: AreaPreviewAck) => {
      const parsed = areaPreviewUpdateSchema.safeParse(input)
      if (!parsed.success) return ack?.({ ok: false, error: { code: 'INVALID_PAYLOAD', message: 'Preview de area invalido.' } })

      const { campaignId, sceneId, preview } = parsed.data
      if (socket.data.campaignId !== campaignId || (socket.data.memberRole !== 'MASTER' && socket.data.memberRole !== 'PLAYER')) {
        return ack?.({ ok: false, error: { code: 'FORBIDDEN', message: 'Participante sem acesso a previews.' } })
      }

      if (!preview) {
        await clearPublishedPreview()
        return ack?.({ ok: true })
      }
      if (deps.getCampaignSessionState(campaignId) !== 'ACTIVE') {
        return ack?.({ ok: false, error: { code: 'FORBIDDEN', message: 'Sessao de campanha indisponivel.' } })
      }

      const visibleSceneId = await deps.getVisibleSceneId(campaignId, socket.id)
      if (visibleSceneId !== sceneId) {
        return ack?.({ ok: false, error: { code: 'FORBIDDEN', message: 'Cena fora da visualizacao atual.' } })
      }

      if (publishedPreview && (publishedPreview.campaignId !== campaignId || publishedPreview.sceneId !== sceneId)) {
        await clearPublishedPreview()
      }
      publishedPreview = { campaignId, sceneId }
      await emitToScene('area-preview:changed', {
        campaignId,
        sceneId,
        previewId: socket.id,
        preview,
      })
      ack?.({ ok: true })
    })

    socket.on('disconnect', () => { void clearPublishedPreview() })
  })
}
