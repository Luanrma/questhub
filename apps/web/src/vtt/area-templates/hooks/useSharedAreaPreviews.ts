import { useCallback, useEffect, useRef, useState } from 'react'
import type { Socket } from 'socket.io-client'

export type SharedAreaPreview = {
  previewId: string
  templateId: string
  origin: { x: number; y: number }
  rotationDegrees: number
  scale: number
  selectedTargetIds: string[]
}

export type SharedAreaPreviewDraft = Omit<SharedAreaPreview, 'previewId'>

export function useSharedAreaPreviews(
  campaignId: string | undefined,
  sceneId: string | undefined,
  socket: Socket | null,
  enabled: boolean,
) {
  const [remotePreviews, setRemotePreviews] = useState<SharedAreaPreview[]>([])
  const pendingRef = useRef<SharedAreaPreviewDraft | null>(null)
  const timerRef = useRef<number | null>(null)
  const publishedRef = useRef(false)

  const emitPreview = useCallback((preview: SharedAreaPreviewDraft | null) => {
    if (!socket || !campaignId || !sceneId || !enabled) return
    socket.emit('area-preview:update', { campaignId, sceneId, preview })
    publishedRef.current = preview !== null
  }, [campaignId, enabled, sceneId, socket])

  const publishPreview = useCallback((preview: SharedAreaPreviewDraft | null) => {
    pendingRef.current = preview
    if (!preview) {
      const hadPendingTimer = timerRef.current !== null
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
      timerRef.current = null
      if (publishedRef.current) emitPreview(null)
      if (hadPendingTimer) pendingRef.current = null
      return
    }
    if (timerRef.current !== null) return
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null
      emitPreview(pendingRef.current)
    }, 50)
  }, [emitPreview])

  useEffect(() => {
    if (!socket || !campaignId || !sceneId || !enabled) return
    const onChanged = (payload: {
      campaignId: string
      sceneId: string
      previewId: string
      preview: SharedAreaPreviewDraft
    }) => {
      if (payload.campaignId !== campaignId || payload.sceneId !== sceneId) return
      setRemotePreviews((current) => [
        ...current.filter((preview) => preview.previewId !== payload.previewId),
        { previewId: payload.previewId, ...payload.preview },
      ])
    }
    const onCleared = (payload: { campaignId: string; sceneId: string; previewId: string }) => {
      if (payload.campaignId !== campaignId || payload.sceneId !== sceneId) return
      setRemotePreviews((current) => current.filter((preview) => preview.previewId !== payload.previewId))
    }
    socket.on('area-preview:changed', onChanged)
    socket.on('area-preview:cleared', onCleared)
    return () => {
      socket.off('area-preview:changed', onChanged)
      socket.off('area-preview:cleared', onCleared)
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
      timerRef.current = null
      if (publishedRef.current) socket.emit('area-preview:update', { campaignId, sceneId, preview: null })
      publishedRef.current = false
      pendingRef.current = null
    }
  }, [campaignId, enabled, sceneId, socket])

  useEffect(() => {
    const task = window.setTimeout(() => setRemotePreviews([]), 0)
    return () => window.clearTimeout(task)
  }, [campaignId, enabled, sceneId])

  return { remotePreviews, publishPreview }
}
