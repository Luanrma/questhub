import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { api } from '../../../lib/api'
import type { VttGridSettings } from '../../grid'
import type { VttPlayerToken, VttTableScene, VttWallSegment } from '../../table/domain/types'
import { normalizeFixedLightSources, normalizeSceneFogConfig, normalizeTokenLightSources, normalizeTokenVisionConfig } from '../domain/config'
import { computeFogFixedLightMask, computeFogMask, normalizeExplorationForMask, unionFogBits } from '../domain/mask'
import type { FogExplorationSnapshot, MasterFogViewMode } from '../domain/types'
import { renderCurrentVisionMask, renderPlayerFogOverlay } from '../infrastructure/fogCanvasRenderer'

type ExplorationResponse = { revision: number; width: number; height: number; maskBase64: string } | null

function decodeBase64(value: string) {
  const binary = window.atob(value)
  return Uint8Array.from(binary, (actor) => actor.charCodeAt(0))
}

function encodeBase64(value: Uint8Array) {
  let binary = ''
  const chunkSize = 0x8000
  for (let offset = 0; offset < value.length; offset += chunkSize) {
    binary += String.fromCharCode(...value.subarray(offset, offset + chunkSize))
  }
  return window.btoa(binary)
}

export function useFogOfWar(input: {
  campaignId?: string
  scene: VttTableScene | null
  tokens: VttPlayerToken[]
  walls: VttWallSegment[]
  grid: VttGridSettings
  board: { width: number; height: number }
  zoomPercent: number
  visionToken: VttPlayerToken | null
  isMaster: boolean
  sessionState: 'ACTIVE' | 'PAUSED' | null
}) {
  const [exploration, setExploration] = useState<FogExplorationSnapshot | null>(null)
  const [masterMode, setMasterMode] = useState<MasterFogViewMode>('TRANSLUCENT')
  const [loadKey, setLoadKey] = useState('')
  const explorationRef = useRef<FogExplorationSnapshot | null>(null)
  const computedRef = useRef<ReturnType<typeof computeFogMask> | null>(null)
  const identityRef = useRef<{ campaignId: string; sceneId: string; tokenId: string } | null>(null)
  const sceneFog = useMemo(() => normalizeSceneFogConfig(input.scene?.fogConfig), [input.scene?.fogConfig])
  const tokenVision = useMemo(() => normalizeTokenVisionConfig(input.visionToken?.visionConfig), [input.visionToken?.visionConfig])
  const fixedLights = useMemo(() => {
    const scale = input.zoomPercent / 100
    const sceneLights = normalizeFixedLightSources(input.scene?.fixedLightSources).map((light) => ({
      ...light,
      position: { x: light.position.x * scale, y: light.position.y * scale },
    }))
    return [...sceneLights, ...normalizeTokenLightSources(input.tokens, input.grid)]
  }, [input.grid, input.scene?.fixedLightSources, input.tokens, input.zoomPercent])
  const enabledForViewer = sceneFog.enabled && (!input.isMaster || masterMode === 'TOKEN_PREVIEW')
  const maximumDimension = input.tokens.length > 80 || fixedLights.length > 32 || input.walls.length > 500 ? 128 : 192
  const geometryTokens = useMemo(() => input.tokens.filter((token) => token.layer === 'OBJECT' && token.blocksVisionAndLight), [input.tokens])
  const wallsKey = useMemo(() => JSON.stringify(input.walls), [input.walls])
  const geometryTokensKey = JSON.stringify(geometryTokens.map((token) => [
    token.id, token.position.x, token.position.y, token.size, token.layer, token.blocksVisionAndLight,
  ]))
  const fixedLightKey = JSON.stringify({
    board: input.board,
    grid: input.grid,
    walls: wallsKey,
    fixedLights,
    geometryTokens: geometryTokensKey,
    maximumDimension,
  })
  const fixedLightMask = useMemo(() => {
    if (!enabledForViewer || !input.board.width || !input.board.height) return null
    return computeFogFixedLightMask({
      board: input.board,
      grid: input.grid,
      tokens: geometryTokens,
      walls: input.walls,
      fixedLights,
      maximumDimension,
    })
  // fixedLightKey deliberately excludes ordinary moving Tokens.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabledForViewer, fixedLightKey])
  const calculationKey = JSON.stringify({
    board: input.board,
    grid: input.grid,
    tokenId: input.visionToken?.id,
    tokenPosition: input.visionToken?.position,
    blockers: geometryTokensKey,
    walls: wallsKey,
    tokenVision,
    darkness: sceneFog.darkness,
    maximumDimension,
  })
  const computed = useMemo(() => {
    if (!enabledForViewer || !input.visionToken || !fixedLightMask || !input.board.width || !input.board.height) return null
    return computeFogMask({
      board: input.board,
      grid: input.grid,
      token: input.visionToken,
      tokens: geometryTokens,
      walls: input.walls,
      vision: tokenVision,
      darkness: sceneFog.darkness,
      fixedLights,
      maximumDimension,
      fixedLightMask,
    })
  // calculationKey keeps this O(mask) operation stable across unrelated React renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculationKey, enabledForViewer, fixedLightMask])
  useEffect(() => {
    computedRef.current = computed
  }, [computed])

  const flush = useCallback(async () => {
    const identity = identityRef.current
    const snapshot = explorationRef.current
    if (!identity || !snapshot) return
    await api(`/api/campaigns/${encodeURIComponent(identity.campaignId)}/scenes/${encodeURIComponent(identity.sceneId)}/fog/exploration/${encodeURIComponent(identity.tokenId)}`, {
      method: 'PUT',
      body: JSON.stringify({
        revision: snapshot.revision,
        width: snapshot.width,
        height: snapshot.height,
        maskBase64: encodeBase64(snapshot.mask),
      }),
    }).catch(() => undefined)
  }, [])

  useEffect(() => {
    const nextIdentity = input.campaignId && input.scene?.id && input.visionToken?.id
      ? { campaignId: input.campaignId, sceneId: input.scene.id, tokenId: input.visionToken.id }
      : null
    const nextKey = nextIdentity ? `${nextIdentity.campaignId}:${nextIdentity.sceneId}:${nextIdentity.tokenId}` : ''
    if (loadKey === nextKey) return
    void flush()
    identityRef.current = nextIdentity
    explorationRef.current = null
    queueMicrotask(() => {
      setExploration(null)
      setLoadKey(nextKey)
    })
    if (!nextIdentity || !sceneFog.enabled) return
    let cancelled = false
    void api<ExplorationResponse>(`/api/campaigns/${encodeURIComponent(nextIdentity.campaignId)}/scenes/${encodeURIComponent(nextIdentity.sceneId)}/fog/exploration/${encodeURIComponent(nextIdentity.tokenId)}`)
      .then((response) => {
        if (cancelled || !response) return
        const snapshot = { revision: response.revision, width: response.width, height: response.height, mask: decodeBase64(response.maskBase64) }
        explorationRef.current = snapshot
        setExploration(snapshot)
      })
      .catch(() => undefined)
    return () => { cancelled = true }
  }, [flush, input.campaignId, input.scene?.id, input.visionToken?.id, loadKey, sceneFog.enabled])

  useEffect(() => {
    if (!computed) return
    const snapshot = normalizeExplorationForMask(explorationRef.current, computed)
    unionFogBits(snapshot.mask, computed.visible)
    explorationRef.current = snapshot
    setExploration(snapshot)
  }, [computed])

  useEffect(() => {
    if (input.sessionState === 'PAUSED' || input.sessionState === null) void flush()
  }, [flush, input.sessionState])

  useEffect(() => () => { void flush() }, [flush])

  const resetLocalExploration = useCallback(() => {
    const currentComputed = computedRef.current
    if (!currentComputed) {
      explorationRef.current = null
      setExploration(null)
      return
    }
    const next = { revision: (explorationRef.current?.revision ?? 0) + 1, width: currentComputed.width, height: currentComputed.height, mask: currentComputed.visible.slice() }
    explorationRef.current = next
    setExploration(next)
  }, [])

  const createExplorationCheckpoint = useCallback(() => {
    const current = explorationRef.current
    return current ? { ...current, mask: current.mask.slice() } : null
  }, [])

  const restoreExplorationCheckpoint = useCallback((checkpoint: FogExplorationSnapshot | null) => {
    explorationRef.current = checkpoint ? { ...checkpoint, mask: checkpoint.mask.slice() } : null
    setExploration(explorationRef.current)
  }, [])

  const images = useMemo(() => {
    if (!computed) return { currentMaskUrl: null, overlayUrl: null }
    const normalized = normalizeExplorationForMask(exploration, computed)
    return {
      currentMaskUrl: renderCurrentVisionMask(computed.width, computed.height, computed.visible),
      overlayUrl: renderPlayerFogOverlay({
        width: computed.width,
        height: computed.height,
        current: computed.visible,
        explored: normalized.mask,
        unexploredOpacity: sceneFog.darkness ? 1 : sceneFog.playerFog.unexploredOpacity,
        exploredOpacity: sceneFog.darkness ? 1 : sceneFog.playerFog.exploredOpacity,
      }),
    }
  }, [computed, exploration, sceneFog.darkness, sceneFog.playerFog.exploredOpacity, sceneFog.playerFog.unexploredOpacity])

  const translucentMaster = sceneFog.enabled && input.isMaster && masterMode === 'TRANSLUCENT'
  const missingVisionToken = enabledForViewer && !input.visionToken
  return {
    sceneFog,
    masterMode,
    setMasterMode,
    flush,
    resetLocalExploration,
    createExplorationCheckpoint,
    restoreExplorationCheckpoint,
    currentMaskUrl: enabledForViewer ? images.currentMaskUrl : null,
    overlayUrl: enabledForViewer ? images.overlayUrl : null,
    masterOverlayOpacity: missingVisionToken ? (input.isMaster ? sceneFog.masterFog.translucentOpacity : 1) : translucentMaster ? sceneFog.masterFog.translucentOpacity : 0,
    hasVisionToken: Boolean(input.visionToken),
  }
}
